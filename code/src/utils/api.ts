import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:30004',
});

export default api;
