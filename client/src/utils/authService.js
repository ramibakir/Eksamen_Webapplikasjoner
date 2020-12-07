import http from './http';

export const login = async (credentials) => {
  try {
    return await http.post('/login', { ...credentials });
  } catch (error) {
    return error.response;
  }
};
