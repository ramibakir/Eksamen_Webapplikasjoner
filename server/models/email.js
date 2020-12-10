import mongoose from 'mongoose';

const { Schema } = mongoose;

const EmailSchema = new Schema({
  from: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
},
{ timestamps: true });

const Email = mongoose.model('Email', EmailSchema);

export default Email;
