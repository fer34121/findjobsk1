import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type CardElement = "div" | "article" | "section" | "aside";

interface CardProps extends HTMLAttributes<HTMLElement> {
  as?: CardElement;
}

export function Card({ as: Component = "div", className, ...props }: CardProps) {
  return <Component className={cn("card", className)} {...props} />;
}
