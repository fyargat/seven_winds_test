import axios, { AxiosError, AxiosRequestConfig } from 'axios';

// TODO:
// 1. To .env file
const BASE_URL = 'http://185.244.172.108:8081';
const ENTITY_ID = 114173;

export const apiInstance = axios.create({
  baseURL: `${BASE_URL}/v1/outlay-rows/entity/${ENTITY_ID}/row`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const createInstance = async <T>(
  config: AxiosRequestConfig,
  options?: AxiosRequestConfig,
): Promise<T> => {
  const response = await apiInstance({
    ...config,
    ...options,
  });

  return response.data as T;
};

export type BodyType<Data> = Data;

export type ErrorType<Error> = AxiosError<Error>;
