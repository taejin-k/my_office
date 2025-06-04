import axios, { AxiosResponse } from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 60000,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
});

axiosInstance.interceptors.request.use(async (request) => {
  return request;
});

axiosInstance.interceptors.response.use((response: AxiosResponse) => {
  return response;
});

export default axiosInstance;
