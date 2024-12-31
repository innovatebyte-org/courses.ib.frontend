"use client";

import { Input } from "@/components/form";
import { useAuth } from "@/hooks/useAuth";
import { LoginData, LoginType } from "@/types/api";
import { loginStudentSchema } from "@/types/zodSchema";
import { Button } from "@/ui/buttons";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { ZodError } from "zod";

export const LoginForm = () => {
  const router = useRouter();
  const { loginStudentAction } = useAuth();
  const { mutateAsync: handleStudentLogin } = useMutation({
    mutationFn: loginStudentAction,
    onSuccess: (res) => {
      router.push("/my-learning");
    },
  });

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<LoginType>({
    resolver: zodResolver(loginStudentSchema),
  });
  const loginStudent: SubmitHandler<LoginType> = async (data) => {
    try {
      const validData = loginStudentSchema.parse(data);
      const loginData: LoginData = {
        email: validData.email,
        password: validData.password,
      };
      await handleStudentLogin(loginData);
    } catch (error) {
      if (error instanceof ZodError) {
        error.issues.forEach((issue) => {
          setError(issue.path[0] as keyof LoginType, {
            type: "manual",
            message: issue.message,
          });
        });
      }
    }
  };

  return (
    <form
      className="w-full my-flex-col gap-11"
      onSubmit={handleSubmit(loginStudent)}
    >
      <div className="my-flex-col gap-9">
        <Input
          name="email"
          label="Email"
          placeholder="Enter your email"
          register={register}
          error={errors.email?.message}
        />
        <div className="my-flex-col gap-2">
          <Input
            name="password"
            label="password"
            placeholder="Enter your password"
            type="password"
            register={register}
            error={errors["password"]?.message}
          />
          <Link
            href={"/forgot-password"}
            className="text-special-1 text-ib-primary lg:py-3"
          >
            I forgot my password
          </Link>
        </div>
      </div>
      <div className="my-flex-col gap-6">
        <Button type="submit" disabled={isSubmitting}>
          Login
        </Button>
        <p className="text-special-1 text-ib-grey-400">
          I am new here{" "}
          <Link href={"/sign-up"} className="text-ib-primary">
            Sign up
          </Link>
        </p>
      </div>
    </form>
  );
};
