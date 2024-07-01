import { SignUpForm } from "./SignUpForm";
import { SignUpHeader } from "./SignUpHeader";

export const SignUpPage = () => {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 px-5 lg:px-[100px]">
      <div className="w-full my-flex-col gap-11">
        <SignUpHeader />
        <SignUpForm />
      </div>
      <div className="hidden lg:flex w-full h-full items-center justify-center">
        image
      </div>
    </div>
  );
};
