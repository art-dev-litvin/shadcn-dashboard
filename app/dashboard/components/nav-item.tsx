"use client";

import { DrawerContext } from "@/components/ui/drawer";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export interface Props {
  children: React.ReactNode;
  href: string;
}

export default function NavItem({ href, children }: Props) {
  const pathname = usePathname();
  const isActive = pathname === href;
  const { onClose } = React.useContext(DrawerContext);

  return (
    <li>
      <Link
        onClick={onClose}
        href={href}
        className={cn(
          "block py-2 px-3 hover:bg-white dark:hover:text-white dark:hover:bg-zinc-700 rounded-md text-muted-foreground",
          { "bg-primary hover:bg-primary dark:hover:bg-primary text-white": isActive }
        )}>
        {children}
      </Link>
    </li>
  );
}
