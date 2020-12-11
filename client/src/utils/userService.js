import http from './http.js';

const API_URL = '/users';

export const create = async (data) => {
  try {
    return await http.post(`${API_URL}`, data);
  } catch (error) {
    return error.response.data;
  }
};

export default create;
