import { BackButton } from "@/ui/buttons";

export const ForgotPasswordHeader = () => {
  return (
    <div className="w-full my-flex-col gap-4">
      <BackButton href="/login" />
      <div className="w-full my-flex-col gap-6">
        <div className="my-flex-col gap-4">
          <h4 className="text-ib-heading text-h4-md lg:text-h2-md">
            Reset password{" "}
          </h4>
          <p className="text-sub-headline lg:text-h6 text-ib-grey-400">
            To ensure the security of your account, we will send a verification
            code to your email. Please enter the registered email below to
            proceed with resetting your password.
          </p>
        </div>
      </div>
    </div>
  );
};
