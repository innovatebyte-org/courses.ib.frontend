import AxiosApi from "@/api";
import { apis } from "@/api/api";
import {
  LoginData,
  LoginResponse,
  RegisterData,
  RegisterResponse,
  ServerResponse,
  VerifyData,
} from "@/types/api";

export const registerStudent = async (
  data: RegisterData,
): Promise<RegisterResponse> => {
  return AxiosApi.post(`${apis.auth.register}`, data).then((res) => {
    return res.data;
  });
};

export const verifyStudent = async (
  data: VerifyData,
): Promise<ServerResponse> => {
  return AxiosApi.post(`${apis.auth.verify}`, data).then((res) => {
    return res.data;
  });
};

export const loginStudent = async (data: LoginData): Promise<LoginResponse> => {
  return AxiosApi.post(`${apis.auth.login}`, data).then((res) => {
    return res.data;
  });
};
