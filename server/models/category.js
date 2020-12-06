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
);

const Category = mongoose.model('Category', CategorySchema);

export default Category;
