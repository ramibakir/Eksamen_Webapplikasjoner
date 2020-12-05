import { articleService } from '../services/index.js';
import catchAsyncErrors from '../middleware/catchAsync.js';

export const get = catchAsyncErrors(async (req, res, next) => {
  const article = await articleService.getArticleById(req.params.id);
  if (!article) {
    return res.status(404).json({ error: 'Not found' });
  }
  res.status(200).json(article);
});

export const list = catchAsyncErrors(async (req, res, next) => {
  const result = await articleService.listArticles();
  res.status(200).json({ result });
});

export const create = catchAsyncErrors(async (req, res, next) => {
  const article = await articleService.createArticle(req.body);
  res.status(201).json(article);
});

export const update = catchAsyncErrors(async (req, res, next) => {});
export const remove = catchAsyncErrors(async (req, res, next) => {});
