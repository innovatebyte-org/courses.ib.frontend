import { LoginHeader } from "./Header";
import { LoginForm } from "./LoginForm";

export const LoginPage = () => {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 px-5 lg:px-[100px] lg:">
      <div className="w-full my-flex-col gap-11">
        <LoginHeader />
        <LoginForm />
      </div>
      <div className="hidden lg:flex w-full h-full items-center justify-center relative overflow-hidden">
        {/* <img
          // src="/images/login-man.png"
          src="https://images.unsplash.com/photo-1492462543947-040389c4a66c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="login page"
          className="absolute top-0 left-1/2 -translate-x-1/2 size-5/6 object-cover object-center border border-red-900"
        /> */}
        <img
          src="/images/login-bubble.svg"
          alt="login bubble"
          className="absolute -z-10 bottom-0 right-0 size-auto"
        />
      </div>
    </div>
  );
};
