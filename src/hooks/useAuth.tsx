import { loginStudent, registerStudent, verifyStudent } from "@/services/auth";
import {
  LoginData,
  LoginResponse,
  RegisterData,
  RegisterResponse,
  ServerResponse,
  VerifyData,
} from "@/types/api";
import { useRouter } from "next/navigation";

export const useAuth = () => {
  const router = useRouter();
  const register = (data: RegisterData) => {
    return new Promise<RegisterResponse>((resolve) => {
      registerStudent(data)
        .then((res) => {
          // show notification
          router.push(`/verify-account/${data.email}`);
          resolve(res);
        })
        .catch((error) => {
          // show notification
          console.log(`An error occurred: ${error.message}`);
        });
    });
  };

  const verifyStudentAction = (data: VerifyData) => {
    return new Promise<ServerResponse>((resolve) => {
      verifyStudent(data)
        .then((res) => {
          resolve(res);
        })
        .catch((error) => {
          console.log(`An error occurred: ${error.message}`);
        });
    });
  };

  const loginStudentAction = (data: LoginData) => {
    return new Promise<LoginResponse>((resolve) => {
      loginStudent(data)
        .then((res) => {
          // show notification
          console.log(res.token);
          localStorage.setItem("ib_auth_token", res.token);
          resolve(res);
        })
        .catch((error) => {
          console.log(`An error occurred: ${error.message}`);
        });
    });
  };

  return { register, verifyStudentAction, loginStudentAction };
};
