import axios from 'axios';

export const client = axios.create({
  baseURL: 'https://api.itbook.store/1.0/',
  // timeout: 1000
});
