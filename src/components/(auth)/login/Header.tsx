import { AppleIcon, GoogleIcon } from "@/assets/icons";
import { BackButton, SocialButton } from "@/ui/buttons";

export const LoginHeader = () => (
  <div className="w-full my-flex-col gap-4">
    <BackButton href="/" />
    <div className="w-full my-flex-col gap-6">
      <div className="my-flex-col gap-4">
        <h4 className="text-ib-heading text-h4-md lg:text-h2-md">
          Welcome Back
        </h4>
        <p className="text-sub-headline lg:text-h6 text-ib-grey-400">
          We&apos;re excited to see you again. Continue your learning journey
          right where you left off . Let&apos;s get back to achieving your goals
          together!&quot;
        </p>
      </div>
      <div className="my-flex-col lg:flex-row gap-[18px]">
        <SocialButton>
          <GoogleIcon />
          Sign in with Google
        </SocialButton>
        <SocialButton>
          <AppleIcon />
          Sign in with Apple
        </SocialButton>
      </div>
    </div>
  </div>
);
