import * as React from "react";
import { cn } from "@/lib/utils";

interface ButtonLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
}

const ButtonLink = React.forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <a
        className={cn(
          "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-primary text-primary-foreground shadow hover:bg-primary/90":
              variant === "default",
            "border border-input bg-background hover:bg-accent hover:text-accent-foreground":
              variant === "outline",
            "hover:bg-accent hover:text-accent-foreground": variant === "ghost",
            "h-9 px-4 py-2": size === "default",
            "h-8 px-3 text-xs": size === "sm",
            "h-10 px-8": size === "lg",
          },
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
ButtonLink.displayName = "ButtonLink";

export { ButtonLink };
