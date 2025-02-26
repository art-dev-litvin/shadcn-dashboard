"use client";

import React from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Button } from "./button";
import { MoonIcon, SunIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Props {
  className?: string;
}

export default function ToggleMode({ className }: Props) {
  const [isDark, setIsDark] = React.useState(true);

  const handleChangeMode = () => {
    setIsDark((prev) => !prev);
    document.body.classList.toggle("dark");
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger onClick={handleChangeMode} asChild>
          <Button variant="outline" className={cn("rounded-full [&_svg]:size-6 size-12", className)}>
            {isDark ? <MoonIcon /> : <SunIcon />}
          </Button>
        </TooltipTrigger>
        <TooltipContent>{isDark ? "Enable light mode" : "Enable dark mode"}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
