import http from './http.js';

const API_URL = '/articles';

export const list = async () => {
  try {
    return await http.get(`${API_URL}`);
  } catch (error) {
    return error.response;
  }
};

export const get = async (id) => {
  try {
    return await http.get(`${API_URL}/${id}`);
  } catch (error) {
    return error.response;
  }
};

export const put = async (id, data) => {
  try {
    return await http.put(`${API_URL}/${id}`, data);
  } catch (error) {
    return error.response;
  }
};

export const create = async (data) => {
  try {
    return await http.post(`${API_URL}`, data);
  } catch (error) {
    return error.response;
  }
};

export default {
  list,
  get,
  put,
  create,
};
