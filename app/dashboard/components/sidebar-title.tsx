import { PersonStandingIcon } from "lucide-react";
import React from "react";

export default function SidebarTitle() {
  return (
    <h3 className="flex items-center">
      <PersonStandingIcon size={30} className="text-primary" />
      SupportMe
    </h3>
  );
}
