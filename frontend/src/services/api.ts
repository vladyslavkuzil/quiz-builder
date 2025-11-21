import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4000', // adjust if your backend URL is different
});

export default api;
