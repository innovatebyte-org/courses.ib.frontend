"use client";
import { useEffect, useState } from "react";
import { Button } from "./Button";
import { cn } from "@/utils/cn";

export const ResendButton = ({ error }: { error: string }) => {
  const [countdown, setCountDown] = useState<number>(60);
  const [isRunning, setIsRunning] = useState<boolean>(true);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isRunning && countdown > 0) {
      timer = setTimeout(() => {
        setCountDown((prev) => prev - 1);
      }, 1000);
    } else if (countdown === 0) {
      setIsRunning(false);
    }

    return () => clearTimeout(timer);
  }, [countdown, isRunning]);

  const resendCode = () => {
    setCountDown(60);
    setIsRunning(true);
  };
  return (
    <Button
      className={cn("absolute w-max bottom-1.5 right-1.5 h-[52px]", {
        "bottom-8": error,
      })}
      disabled={isRunning}
      onClick={resendCode}
    >
      {isRunning ? `Resend in ${countdown}` : "Resend"}
    </Button>
  );
};
