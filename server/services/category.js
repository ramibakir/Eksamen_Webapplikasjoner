import Category from '../models/category';

// export const getCategoryById = async (id) => Category.findById(id);

export const listCategories = async () => Category.find();

export const createCategory = async (data) => Category.create(data);
