import http from './http.js';

export const list = async () => {
  try {
    return await http.get('/');
  } catch (e) {
    return e.response;
  }
};

export const create = async (data) => {
  try {
    return await http.post('/send', data);
  } catch (e) {
    return e.response;
  }
};

export default {
  list,
  create,
};
