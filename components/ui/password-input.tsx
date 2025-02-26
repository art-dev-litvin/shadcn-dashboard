import * as React from "react";

import { Input } from "./input";
import { Button } from "./button";
import { EyeClosedIcon, EyeIcon } from "lucide-react";

const PasswordInput = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ ...props }, ref) => {
    const [isVisible, setIsVisible] = React.useState(false);

    const toggleVisibility = () => {
      setIsVisible((prev) => !prev);
    };

    return (
      <div className="relative">
        <Input type={isVisible ? "text" : "password"} ref={ref} {...props} />
        <Button
          size="sm"
          variant="ghost"
          className="rounded-full absolute right-4 top-1/2 -translate-y-1/2"
          onClick={toggleVisibility}>
          {isVisible ? <EyeIcon /> : <EyeClosedIcon />}
        </Button>
      </div>
    );
  }
);
PasswordInput.displayName = "PasswordInput";

export { PasswordInput };
