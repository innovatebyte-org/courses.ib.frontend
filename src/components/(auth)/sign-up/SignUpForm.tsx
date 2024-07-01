"use client";

import { Input } from "@/components/form";
import { useAuth } from "@/hooks/useAuth";
import { RegisterData, RegisterType } from "@/types/api";
import { registerSchema } from "@/types/zodSchema";
import { Button } from "@/ui/buttons";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { ZodError } from "zod";

type FormData = RegisterType;

export const SignUpForm = () => {
  const { register: registerStudent } = useAuth();
  const { mutateAsync: handleRegisterStudent } = useMutation({
    mutationFn: registerStudent,
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<FormData>({
    resolver: zodResolver(registerSchema),
  });

  const registerUser: SubmitHandler<FormData> = async (data) => {
    try {
      const validData = registerSchema.parse(data);
      const registerData: RegisterData = {
        firstName: validData.firstName,
        lastName: validData.lastName,
        email: validData.email,
        password: validData.password,
      };

      console.log(registerData);
      await handleRegisterStudent(registerData);
    } catch (error) {
      if (error instanceof ZodError) {
        error.issues.forEach((issue) => {
          setError(issue.path[0] as keyof FormData, {
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
      onSubmit={handleSubmit(registerUser)}
    >
      <div className="my-flex-col gap-9">
        <div className="my-flex-col gap-9 lg:gap-5 lg:flex-row">
          <Input
            name="firstName"
            label="First Name"
            placeholder="Enter your first name"
            register={register}
            error={errors?.firstName?.message}
          />
          <Input
            name="lastName"
            label="Last Name"
            placeholder="Enter your last name"
            register={register}
            error={errors?.lastName?.message}
          />
        </div>
        <Input
          name="email"
          label="Email"
          placeholder="Enter your email"
          register={register}
          error={errors?.email?.message}
        />
        <div className="my-flex-col gap-9 lg:gap-5 lg:flex-row">
          <Input
            name="password"
            label="password"
            placeholder="Enter your password"
            type="password"
            register={register}
            error={errors?.password?.message}
          />
          <Input
            name="confirmPassword"
            label="repeat password"
            placeholder="Repeat your password"
            type="password"
            register={register}
            error={errors?.confirmPassword?.message}
          />
        </div>
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="acceptTerms"
            id="acceptTerms"
            className="size-4 accent-ib-grey-400 appearance-none checked:bg-ib-grey-900 focus:checked:bg-ib-grey-900 focus:ring-0"
          />
          <label
            htmlFor="acceptTerms"
            className="text-special-1 text-ib-grey-400"
          >
            I have read and agreed to the{" "}
            <Link href={"/"} className="text-ib-primary">
              Terms of use
            </Link>
          </label>
        </div>
      </div>
      <div className="my-flex-col gap-6">
        <Button type="submit" disabled={isSubmitting}>
          Sign Up
        </Button>
        <p className="text-special-1 text-ib-grey-400">
          Already have an account?{" "}
          <Link href={"/login"} className="text-ib-primary">
            Login
          </Link>
        </p>
      </div>
    </form>
  );
};
