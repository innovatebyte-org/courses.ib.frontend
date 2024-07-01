"use client";

import { MailBoxIcon, VerifiedPanaImage } from "@/assets/icons";
import { Input } from "@/components/form";
import { useAuth } from "@/hooks/useAuth";
import { VerifyData, VerifyStudentType } from "@/types/api";
import { verifyStudentSchema } from "@/types/zodSchema";
import { Button, ResendButton } from "@/ui/buttons";
import { maskEmail } from "@/utils/email";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Fragment } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { ZodError } from "zod";

export const VerifyAccountPage = ({ email }: { email: string }) => {
  const { verifyStudentAction } = useAuth();
  const { mutateAsync: handleVerifyStudent, data } = useMutation({
    mutationFn: verifyStudentAction,
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<VerifyStudentType>({
    resolver: zodResolver(verifyStudentSchema),
  });
  const verifyStudentSubmit: SubmitHandler<VerifyStudentType> = async (
    data,
  ) => {
    try {
      const validData = verifyStudentSchema.parse(data);
      const verifyData: VerifyData = {
        email: decodeURIComponent(email),
        verificationCode: validData.verificationCode,
      };

      await handleVerifyStudent(verifyData);
    } catch (error) {
      if (error instanceof ZodError) {
        error.issues.forEach((issue) => {
          setError(issue.path[0] as keyof VerifyStudentType, {
            type: "manual",
            message: issue.message,
          });
        });
      }
    }
  };

  return (
    <Fragment>
      {data ? (
        <Success />
      ) : (
        <form
          onSubmit={handleSubmit(verifyStudentSubmit)}
          className="my-flex-col gap-10 px-5 lg:px-7 lg:py-16 lg:max-w-[665px] lg:mx-auto bg-white lg:rounded-2xl lg:shadow-verify"
        >
          <div className="my-flex-col items-center gap-9">
            <MailBoxIcon />
            <h5 className="text-ib-grey-900 text-h5-md">Check your email</h5>
            <p className="text-center text-ib-grey-400 text-sub-headline lg:text-h6">
              Enter the six digit code we sent to {maskEmail(email)} to verify
              your email address
            </p>
            <div className="w-full relative">
              <Input
                name="verificationCode"
                inputMode="numeric"
                register={register}
                error={errors.verificationCode?.message}
                label="Enter 6-digit code"
              />
              <ResendButton
                error={errors.verificationCode?.message as string}
              />
            </div>
          </div>
          <Button type="submit" disabled={isSubmitting}>
            Verify me
          </Button>
        </form>
      )}
    </Fragment>
  );
};

const Success = () => (
  <div className="my-flex-col gap-10 lg:px-7 lg:py-16 lg:max-w-[665px] lg:mx-auto bg-white lg:rounded-2xl lg:shadow-verify">
    <div className="my-flex-col items-center gap-9">
      <VerifiedPanaImage />
      <div className="flex flex-col w-full items-center gap-6">
        <h5 className="text-ib-grey-900 text-h5-md text-center">
          Your email has been successfully verified! 🎉
        </h5>
        <p className="text-center text-ib-grey-400 text-sub-headline lg:text-h6">
          Welcome to the InnovateByte community. You’re now ready to start
          exploring our courses and unlocking new opportunities. Dive into your
          learning journey and achieve your goals with us!
        </p>
      </div>
    </div>
    <Button link="/login">Let&apos;s go</Button>
  </div>
);
