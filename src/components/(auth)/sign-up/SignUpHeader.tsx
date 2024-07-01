import { AppleIcon, GoogleIcon } from "@/assets/icons";
import { BackButton, SocialButton } from "@/ui/buttons";

export const SignUpHeader = () => (
  <div className="w-full my-flex-col gap-4">
    <BackButton href="/" />
    <div className="w-full my-flex-col gap-6">
      <div className="my-flex-col gap-4">
        <h4 className="text-ib-heading text-h4-md lg:text-h2-md">
          Get started now
        </h4>
        <p className="text-sub-headline lg:text-h6 text-ib-grey-400">
          Create your free account in minutes. Gain access to our platform and
          start discovering the knowledge that awaits you{" "}
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
