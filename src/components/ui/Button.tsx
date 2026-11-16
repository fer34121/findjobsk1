import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "outline";
type ButtonSize = "md" | "sm";

interface ButtonStyleOptions {
  variant?: ButtonVariant;
  size?: ButtonSize;
  block?: boolean;
}

/** Clases del botón, reutilizables en enlaces u otros elementos. */
export function buttonClasses({ variant = "primary", size = "md", block = false }: ButtonStyleOptions = {}): string {
  return cn("btn", variant === "outline" && "btn-outline", size === "sm" && "btn-small", block && "btn-block");
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & ButtonStyleOptions;

export function Button({ variant, size, block, className, type = "button", ...props }: ButtonProps) {
  return <button type={type} className={cn(buttonClasses({ variant, size, block }), className)} {...props} />;
}
