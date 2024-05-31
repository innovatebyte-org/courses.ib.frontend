import { LogoWhiteIcon } from "@/assets/logo.white";
import { ArrowRightIcon, Bars3Icon } from "@heroicons/react/24/outline";
import { NavLink } from "./navlink";
import { Button } from "./buttons";

export const Nav = () => {
  return (
    <nav className="w-full h-16 py-2 px-5 lg:px-[100px] lg:py-2.5 flex items-center justify-between absolute top-0 inset-x-0">
      <div className="py-3 lg:px-[30px] lg:rounded-2xl flex shadow-nav">
        <LogoWhiteIcon />
      </div>
      <div className="hidden lg:flex h-14 px-[30px] justify-center items-center gap-10 pb-1.5 pt-2.5 shadow-nav rounded-2xl bg-white">
        <NavLink name="home" href="/" />
        <NavLink name="courses" href="/courses" />
        <NavLink name="contact" href="/contact" />
      </div>
      <Bars3Icon className="size-6 text-ib-grey-950 cursor-pointer lg:hidden" />
      <Button
        icon={<ArrowRightIcon className="size-6 text-inherit" />}
        className="hidden lg:flex max-w-[182px]"
        link="/login"
      >
        Get Started
      </Button>
    </nav>
  );
};
