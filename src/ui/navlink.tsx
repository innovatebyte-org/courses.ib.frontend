"use client";

import { cn } from "@/utils/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavLink = ({ name, href }: { href: string; name: string }) => {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={cn("text-base text-ib-grey-300 capitalize p-2", {
        "text-ib-grey-900": pathname === href,
      })}
    >
      {name}
    </Link>
  );
};
