import http from './http.js';
import { getCsrfToken } from './authService';

const API_URL = '/articles';

export const list = async (pageNr) => {
  try {
    return await http.get(`${API_URL}?limit=5&page=${pageNr}`);
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
    // await getCsrfToken();
    return await http.put(`${API_URL}/${id}`, data);
  } catch (err) {
    return err.response;
  }
};

export const create = async (data) => {
  try {
    // await getCsrfToken();
    return await http.post(`${API_URL}`, data);
  } catch (err) {
    return err.response;
  }
};

export const getNonHidden = async (pageNr) => {
  try {
    return await http.get(`${API_URL}/nu-articles?limit=5&page=${pageNr}`);
  } catch (err) {
    return err.response;
  }
};

export const listByCategory = async (id) => {
  try {
    return await http.get(`${API_URL}?category=${id}`);
  } catch (err) {
    return err.response;
  }
};

export default {
  create,
  list,
  get,
  put,
  getNonHidden,
  listByCategory,
};
