import { Button } from "@/ui/buttons";

export const ForgotPasswordForm = () => {
  return (
    <form className="w-full my-flex-col gap-11">
      <div className="my-flex-col gap-9">
        {/* <Input name="email" label="Email" placeholder="Enter your email" />*/}
        <div className="w-full relative">
          {/*
          <Input
            name="verificationCode"
            label="Enter Code"
            inputMode="numeric"
          />
          <ResendButton />
          */}
        </div>
      </div>
      <Button disabled>Continue</Button>
    </form>
  );
};
