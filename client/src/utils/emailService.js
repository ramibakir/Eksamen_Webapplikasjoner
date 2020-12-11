import http from './http.js';

const API_URL = '/send';

export const list = async () => {
  try {
    return await http.get('/');
  } catch (e) {
    return e.response;
  }
};

export const create = async (data) => {
  console.log(data);
  try {
    return await http.post(`${API_URL}`, data);
  } catch (e) {
    return e.response;
  }
};

export default {
  list,
  create,
};
