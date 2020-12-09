import mongoose from 'mongoose';
import slugify from 'slugify';

const { Schema } = mongoose;

const ArticleSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      minlength: ['3', 'Tittel må bestå av flere enn 3 tegn'],
      max: ['100', 'Tittel må være under 100 tegn'],
    },
    ingress: {
      type: String,
      required: true,
      minlength: ['3', 'Ingress må bestå av flere enn 3 tegn'],
      max: ['150', 'Ingress må være under 150 tegn'],
    },
    content: {
      type: String,
      required: true,
    },
    publishDate: {
      type: Date,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    admin: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: true,
    },
    category: {
      type: mongoose.Schema.ObjectId,
      ref: 'Category',
      required: true,
    },
    hidden: {
      type: Boolean,
      required: true,
    },
    image: {
      type: mongoose.Schema.ObjectId,
      ref: 'Image',
      required: true,
    },
  },
  { timestamps: true },
);

ArticleSchema.pre('save', function (next) {
  this.slug = slugify(this.title, { lower: true });
  next();
});

export default mongoose.model('Article', ArticleSchema);
