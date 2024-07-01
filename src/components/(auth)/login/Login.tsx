import { LoginHeader } from "./Header";
import { LoginForm } from "./LoginForm";

export const LoginPage = () => {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 px-5 lg:px-[100px]">
      <div className="w-full my-flex-col gap-11">
        <LoginHeader />
        <LoginForm />
      </div>
      <div className="hidden lg:flex w-full h-full items-center justify-center">
        image
      </div>
    </div>
  );
};
