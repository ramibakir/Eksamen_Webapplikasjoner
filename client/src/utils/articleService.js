import http from './http.js';
import { getCsrfToken } from './authService';

const API_URL = '/articles';

export const list = async (data) => {
  try {
    return await http.get(`${API_URL}`, data);
  } catch (err) {
    return err.response;
  }
};

export const get = async (id) => {
  try {
    return await http.get(`${API_URL}/${id}`);
  } catch (err) {
    return err.response;
  }
};

export const put = async (id, data) => {
  try {
    await getCsrfToken();
    return await http.put(`${API_URL}/${id}`, data);
  } catch (err) {
    return err.response;
  }
};

export const create = async (data) => {
  try {
    await getCsrfToken();
    return await http.post(`${API_URL}`, data);
  } catch (err) {
    return err.response;
  }
};

export default {
  create,
  list,
  get,
  put,
};
