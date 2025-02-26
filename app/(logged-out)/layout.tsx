import ToggleMode from "@/components/ui/toggle-mode";
import React from "react";

export interface Props {
  children: React.ReactNode;
}

export default function LoggedOutLayout({ children }: Props) {
  return (
    <>
      <div className="flex flex-col gap-4 justify-center items-center min-h-screen p-24">{children}</div>
      <ToggleMode className="fixed top-1/2 -translate-y-1/2 right-3" />
    </>
  );
}
