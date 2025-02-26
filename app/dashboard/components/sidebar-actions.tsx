import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import ToggleMode from "@/components/ui/toggle-mode";
import Link from "next/link";
import React from "react";

export default function SidebarActions() {
  return (
    <div className="flex gap-2 items-center justify-between">
      <div className="flex items-center gap-2">
        <Avatar>
          <AvatarFallback className="bg-pink-300 dark:bg-pink-800">AL</AvatarFallback>
        </Avatar>
        <Link href="/" className="hover:underline">
          Logout
        </Link>
      </div>
      <ToggleMode className="bg-transparent dark:border-slate-600" />
    </div>
  );
}
