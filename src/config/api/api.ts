import axios from 'axios';

export const apiKey = '8f781d70654b5a6f2fa69770d1d115a3';

export const language = 'es';

export const axiosInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
});

export default axiosInstance;
