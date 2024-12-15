import { cn } from "@/lib/util";
import React from "react";

export default function MaxWidthWrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn(className, "max-w-screen-2xl mx-auto px-4 md:px-8 ")}>
      {children}
    </div>
  );
}
