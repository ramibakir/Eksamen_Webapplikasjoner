import mongoose from 'mongoose';
import argon2 from 'argon2';
import jwt from 'jsonwebtoken';

const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: [true, 'Fyll inn epost'],
      unique: true,
      validate: [/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Eposten er ikke gyldig'],
    },
    password: {
      type: String,
      required: [true, 'Fyll inn passord'],
      minlength: [8, 'Passordet må minimum bestå av 8 tegn'],
      select: false,
    },
    role: {
      type: String,
      enum: {
        values: ['user', 'admin', 'superadmin'],
        message: 'Ingen rolle valgt',
      },
      default: 'user',
    },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } },
);

UserSchema.pre('save', async function (next) {
  this.password = await argon2.hash(this.password);
  next();
});

UserSchema.methods.getJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_TIME,
  });
};

UserSchema.methods.comparePassword = async function (password) {
  const result = argon2.verify(this.password, password);
  return result;
};

UserSchema.virtual('article', {
  ref: 'Article',
  localField: '_id',
  foreignField: 'admin',
  justOne: false,
});

const User = mongoose.model('User', UserSchema);

export default User;
