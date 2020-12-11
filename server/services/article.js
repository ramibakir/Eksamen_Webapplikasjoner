import Article from '../models/article.js';
import { ApiFilters } from '../utils/apiFilters.js';

export const getArticleById = async (id) => Article.findById(id);

export const listArticles = async (queryStr) => {
  const filters = new ApiFilters(Article.find(), queryStr).sort().filter().searchByQuery()
    .limitFields();
  const count = await Article.estimatedDocumentCount();
  const articles = await filters.query;
  return {
    results: articles.length,
    data: articles,
  };
};

export const createArticle = async (data) => Article.create(data);

export const updateArticle = async (id, data) => Article.findByIdAndUpdate(id, data, {
  new: true,
  runValidators: true,
  useFindAndModify: false,
});

export const deleteArticle = async (id) => {
  const article = await Article.findById(id);
  article.remove();
};
