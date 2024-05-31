"use client";

import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

export const BackButton = ({ href }: { href: string }) => {
  const router = useRouter();
  const goBack = () => router.push(href);
  return (
    <button
      type="button"
      onClick={goBack}
      className="flex items-center p-3 justify-center gap-4 border border-ib-grey-100 rounded-2xl bg-white shadow-button"
    >
      <ArrowLeftIcon className="size-6 text-ib-grey-950" />
      <span className="text-body-2 text-ib-grey-800">Back</span>
    </button>
  );
};
