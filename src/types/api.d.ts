import { DeepPartial } from "react-hook-form";
import { z } from "zod";
import {
  loginStudentSchema,
  registerSchema,
  verifyStudentSchema,
} from "./zodSchema";

export type ServerResponse = {
  message: string;
};

// register
export type RegisterType = DeepPartial<z.infer<typeof registerSchema>>;
export type RegisterResponse = ServerResponse;
export type RegisterData = Omit<RegisterType, "confirmPassword">;

// verify
export type VerifyStudentType = DeepPartial<
  z.infer<typeof verifyStudentSchema>
>;
export type VerifyData = VerifyStudentType & {
  email: string;
};

// login
export type LoginType = DeepPartial<z.infer<typeof loginStudentSchema>>;
export type LoginResponse = ServerResponse & {
  token: string;
};
export type LoginData = LoginType;

type Course = {
  _id: string;
  title: string;
  slug: string;
  description: string;
  category: string;
  level: string;
  previewImage: string;
  modules: Array<string>;
  students: Array<string>;
  price: number;
  rating: number;
  __v: number;
};
