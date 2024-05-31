import { PropsWithChildren } from "react";

export const SocialButton = ({ children }: PropsWithChildren) => (
  <button className="w-full flex p-3 items-center justify-center gap-4 self-stretch rounded-2xl border border-ib-grey-100 bg-white shadow-button text-body-2 text-ib-grey-800">
    {children}
  </button>
);
