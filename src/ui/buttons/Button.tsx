"use client";

import { cn } from "@/utils/cn";
import { VariantProps, cva } from "class-variance-authority";
import { useRouter } from "next/navigation";
import { ComponentProps, ReactNode } from "react";

const buttonVariants = cva(
  "w-full flex rounded-2xl h-[52px] p-3 items-center justify-center gap-2 shadow-mainButton disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        primary:
          "bg-ib-primary hover:bg-ib-secondary disabled:bg-ib-grey-200 disabled:hover:bg-ib-grey-200 text-white",
        outline: "",
        text: "bg-transparent text-ib-primary hover:text-ib-secondary hover:underline",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

type TButton = ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    isLoading?: boolean;
    icon?: ReactNode;
    link?: string;
  };

export const Button = ({
  isLoading,
  icon,
  className,
  variant,
  children,
  link,
  ...props
}: TButton) => {
  const router = useRouter();
  const handleClick = () => {
    if (link) {
      router.push(link);
    }
  };

  return (
    <button
      className={cn(
        buttonVariants({
          variant,
          className,
        }),
      )}
      onClick={handleClick}
      {...props}
    >
      {isLoading && <p>loading...</p>}
      <span className="text-body-1-md">{children}</span>
      {icon}
    </button>
  );
};
