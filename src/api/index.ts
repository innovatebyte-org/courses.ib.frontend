import { getAuthToken } from "@/utils/auth";
import axios from "axios";

const AxiosApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    Accept: "application/json",
  },
});

AxiosApi.interceptors.request.use(function (config) {
  const token = getAuthToken();
  if (token) {
    config.headers.Authorization = `${token}`;
  }

  return config;
});

export default AxiosApi;
