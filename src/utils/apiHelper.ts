import { AxiosRequestConfig } from "axios";
import axiosConfig from "../api/axiosConfig";

export const getApi = async (path: string, config?: AxiosRequestConfig) => {
  try {
    const response = await axiosConfig.get(path, config);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const postApi = async <TRequest>(
  path: string,
  payload: TRequest,
  config?: AxiosRequestConfig
) => {
  try {
    const response = await axiosConfig.post(path, payload, config);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
