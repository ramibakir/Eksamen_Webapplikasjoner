import mongoose from 'mongoose';
import slugify from 'slugify';

const { Schema } = mongoose;

const CategorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } },
);

CategorySchema.pre('save', function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

CategorySchema.virtual('article', {
  ref: 'Article',
  localField: '_id',
  foreignField: 'category',
  justOne: false,
});

const Category = mongoose.model('Category', CategorySchema);

export default Category;
