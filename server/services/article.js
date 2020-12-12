import Article from '../models/article.js';
import { ApiFilters } from '../utils/apiFilters.js';

export const getArticleById = async (id) => Article.findById(id);

export const listArticles = async (queryStr) => {
  const { page, limit } = queryStr;
  const filters = new ApiFilters(Article.find(), queryStr).sort().filter().searchByQuery()
    .limitFields();

  const articles = await filters.query;
  const paginated = await filters.pagination().query;
  return {
    results: articles.length,
    totalPages: Math.ceil(articles.length / limit) || 1,
    currentPage: page && page > 0 ? parseInt(page) : 1,
    data: paginated,
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

export const getNonHiddenArticles = async () => {
  const articles = await Article.aggregate([
    {
      $match: { hidden: false },
    },

  ]);

  return articles;
};

export const filteredArticles = async (id) => {
  const articles = await Article.aggregate([
    {
      $match: { category: id },
    },
  ]);
  return articles;
};
