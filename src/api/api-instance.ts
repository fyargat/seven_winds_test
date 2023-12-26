import axios, { AxiosError, AxiosRequestConfig } from 'axios';

export const apiInstance = axios.create({
  baseURL: `http://185.244.172.108:8081/v1/outlay-rows/entity/114173/row`,
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
