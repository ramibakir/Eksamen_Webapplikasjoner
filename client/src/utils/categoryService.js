import http from './http.js';

const API_URL = '/newarticle';

export const listCategories = async () => {
  try {
    return await http.get(`${API_URL}`);
  } catch (err) {
    return err.response.data;
  }
};

export const createCategory = async (data) => {
  try {
    return await http.post(`${API_URL}`, data);
  } catch (error) {
    return error.response;
  }
};

export default { listCategories, createCategory };
