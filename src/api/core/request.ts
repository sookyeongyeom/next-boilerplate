/* eslint-disable @typescript-eslint/no-empty-function */
import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { GenericInstance } from '_types/dep/axios';

export const request: GenericInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACK_END_BASE_URL,
  timeout: 2500,
  headers: { 'Content-Type': 'application/json' },
});

request.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    handleError(error);
    return new Promise(() => {});
  },
);

request.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    handleError(error);
    return new Promise(() => {});
  },
);

const setAuthorizedConfig = (config: AxiosRequestConfig, authToken: string) => {
  config.headers = { Authorization: `Bearer ${authToken}` };
  config.withCredentials = true;
};

const handleError = (error: AxiosError) => {
  switch (error?.response?.status) {
    case 401:
    case 404:
    case 409:
    case 500:
    default:
      alert(error);
  }
};
