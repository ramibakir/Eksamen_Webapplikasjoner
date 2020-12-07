import http from './http.js';

const API_URL = '/newarticle';

export const listCategories = async () => {
  try {
    return await http.get(`${API_URL}`);
  } catch (err) {
    return err.response.data;
  }
};

export default { listCategories };
