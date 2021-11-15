/* eslint-disable prettier/prettier */
import axios from 'axios';
import store from 'store';

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

apiClient.interceptors.request.use(
  async request => {
    const accessToken = store.get('accessToken');
    if (accessToken) {
      request.headers = {
        Authorization: `Bearer ${accessToken}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      };
    } else {
      request.headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      };
    }
    return request;
  },
  error => Promise.reject(error),
);

export default apiClient;
