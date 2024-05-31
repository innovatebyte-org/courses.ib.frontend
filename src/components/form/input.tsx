"use client";

import { cn } from "@/utils/cn";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { ComponentProps, HTMLInputTypeAttribute, useState } from "react";
// import { FieldValues, UseFormRegister } from "react-hook-form";

type TInput = ComponentProps<"input"> & {
  label?: string;
  error?: string;
  // register: UseFormRegister<FieldValues>;
  name: string;
};

export const Input = ({
  label,
  // register,
  name,
  type,
  error,
  className,
  ...props
}: TInput) => {
  const [inputType, setInputType] = useState<HTMLInputTypeAttribute>(
    type || "text",
  );
  const isInputPassword = type === "password";

  const toggleViewPassword = () => {
    if (inputType === "password") {
      setInputType("text");
    } else if (inputType === "text") {
      setInputType("password");
    }
  };

  return (
    <div className="my-flex-col gap-2">
      {label && (
        <label
          htmlFor={name}
          className="text-sub-headline text-ib-grey-700 capitalize"
        >
          {label}
        </label>
      )}
      <div className="h-16 relative w-full">
        <input
          className={cn(
            "w-full h-full py-5 px-6 flex self-stretch border border-ib-grey-200 rounded-2xl text-sub-headline text-ib-grey-950 focus:outline-none focus:border-ib-grey-900 focus:border-2",
            className,
          )}
          id={name}
          name={name}
          type={inputType}
          // {...register(name)}
          {...props}
        />
        {isInputPassword && (
          <span
            className="absolute top-1/2 -translate-y-1/2 right-6 cursor-pointer size-6"
            onClick={toggleViewPassword}
          >
            {inputType === "password" ? (
              <EyeIcon className="size-6 text-ib-grey-950" />
            ) : (
              <EyeSlashIcon className="size-6 text-ib-grey-950" />
            )}
          </span>
        )}
      </div>
      {error && (
        <span className="text-ib-error text-special-1 -mt-1">{error}</span>
      )}
    </div>
  );
};
