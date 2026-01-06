import { cn } from "@/lib/utils";
import * as React from "react";

export const HeartBeatIcon = React.forwardRef<
  SVGSVGElement,
  React.SVGProps<SVGSVGElement>
>(({ className, ...props }, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("text-primary", className)}
      ref={ref}
      {...props}
    >
      <path d="M19.5 12.572 12 20l-7.5-7.428A5 5 0 1 1 12 6.006a5 5 0 1 1 7.5 6.566" />
      <path d="M7 12h2l1.5-3 3 6 1.5-3h2" />
    </svg>
  );
});

HeartBeatIcon.displayName = "HeartBeatIcon";
