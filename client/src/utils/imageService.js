import http from './http';

const API_UPLOAD_URL = '/upload';
const API_DOWNLOAD_URL = '/download';
const API_URL = '/image';

export const upload = async (image) => {
  try {
    const data = new FormData();
    data.append('image', image);
    return await http.post(`${API_UPLOAD_URL}`, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  } catch (error) {
    return error.response;
  }
};

export const download = async (id) => {
  try {
    return await http.get(`${API_DOWNLOAD_URL}/${id}`);
  } catch (error) {
    return error.response;
  }
};

export const listImages = async () => {
  try {
    return await http.get(`${API_URL}`);
  } catch (error) {
    return error.response;
  }
};
