import { Input } from "@/components/form";
import { Button } from "@/ui/buttons";
import Link from "next/link";

export const LoginForm = () => {
  return (
    <form className="w-full my-flex-col gap-11">
      <div className="my-flex-col gap-9">
        <Input name="email" label="Email" placeholder="Enter your email" />
        <Input
          name="password"
          label="password"
          placeholder="Enter your password"
          type="password"
        />
      </div>
      <div className="my-flex-col gap-6">
        <Button type="submit">Login</Button>
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
