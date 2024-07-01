"use client";

import { HTMLInputTypeAttribute, useState } from "react";

export const useInput = (type: HTMLInputTypeAttribute) => {
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

  return {
    inputType,
    isInputPassword,
    toggleViewPassword,
  };
};
