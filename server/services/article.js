import Article from '../models/article.js';

export const getArticleById = async (id) => Article.findById(id);

export const listArticles = async () => Article.find();

export const createArticle = async (data) => Article.create(data);
