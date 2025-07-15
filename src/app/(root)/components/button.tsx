import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";
import type { ComponentProps } from "react";

const BUTTON_VARIANTS = cva(
  clsx(
    "relative",
    "flex items-center justify-center",
    "font-semibold",
    "border",
    "transition-colors",
    "disabled:cursor-not-allowed",
    "cursor-pointer",
    "rounded-sm",
  ),
  {
    variants: {
      size: {
        lg: clsx("text-md", "px-4 py-2 gap-1"),
        md: clsx("text-sm", "px-3 py-[6px] gap-1", "data-[variant=text]:px-0"),
        sm: clsx(
          "text-xs",
          "px-2 py-[3px] gap-[2px]",
          "data-[variant=text]:px-0",
        ),
      },
      round: {
        true: clsx("rounded-full"),
        false: clsx("rounded-md"),
      },
      theme: {
        primary: clsx(
          // fill
          "data-[variant=fill]:bg-primary-600 data-[variant=fill]:text-white",
          "data-[variant=fill]:border-transparent",
          "data-[variant=fill]:disabled:bg-gray-100 data-[variant=fill]:disabled:text-gray-300",
          "data-[variant=fill]:hover:bg-primary-300 data-[variant=fill]:active:bg-primary-600",
          "data-[variant=fill]:disabled:hover:bg-gray-100 data-[variant=fill]:dark:hover:bg-primary-800 data-[variant=fill]:hover:disabled:text-gray-300",
          // outline
          "data-[variant=outline]:border-primary-500 data-[variant=outline]:text-primary-500",
          "data-[variant=outline]:disabled:border-gray-300 data-[variant=outline]:disabled:text-gray-300",
          "data-[variant=outline]:hover:border-primary-300 data-[variant=outline]:hover:text-primary-300",
          "data-[variant=outline]:active:border-primary-600 data-[variant=outline]:active:text-primary-600",
          "data-[variant=outline]:disabled:hover:border-gray-300 data-[variant=outline]:hover:disabled:text-gray-300",
          // text
          "data-[variant=text]:text-primary-500",
          "data-[variant=text]:border-transparent",
          "data-[variant=text]:disabled:text-gray-300",
          "data-[variant=text]:hover:text-primary-300",
          "data-[variant=text]:active:text-primary-600",
          "data-[variant=text]:hover:disabled:text-gray-300",
        ),
        alert: clsx(
          // fill
          "data-[variant=fill]:bg-red-500 data-[variant=fill]:text-white",
          "data-[variant=fill]:border-transparent",
          "data-[variant=fill]:disabled:bg-gray-100 data-[variant=fill]:disabled:text-gray-300",
          "data-[variant=fill]:hover:bg-red-300 data-[variant=fill]:active:bg-red-600",
          "data-[variant=fill]:disabled:hover:bg-gray-100 data-[variant=fill]:hover:disabled:text-gray-300",
          // outline
          "data-[variant=outline]:border-red-500 data-[variant=outline]:text-red-500",
          "data-[variant=outline]:disabled:border-gray-300 data-[variant=outline]:disabled:text-gray-300",
          "data-[variant=outline]:hover:border-red-300 data-[variant=outline]:hover:text-red-300",
          "data-[variant=outline]:active:border-red-600 data-[variant=outline]:active:text-red-600",
          "data-[variant=outline]:disabled:hover:border-gray-300 data-[variant=outline]:hover:disabled:text-gray-300",
          // text
          "data-[variant=text]:text-red-500",
          "data-[variant=text]:border-transparent",
          "data-[variant=text]:disabled:text-gray-300",
          "data-[variant=text]:hover:text-red-300",
          "data-[variant=text]:active:text-red-600",
          "data-[variant=text]:hover:disabled:text-gray-300",
        ),
        neutral: clsx(
          // fill
          "data-[variant=fill]:bg-white data-[variant=fill]:border-gray-300 data-[variant=fill]:text-gray-900",
          "data-[variant=fill]:disabled:bg-gray-100 data-[variant=fill]:disabled:text-gray-300",
          "data-[variant=fill]:hover:bg-gray-50",
          "data-[variant=fill]:active:bg-gray-200 data-[variant=fill]:active:text-gray-800",
          "data-[variant=fill]:disabled:hover:bg-gray-100 data-[variant=fill]:hover:disabled:text-gray-300",
          // outline
          "data-[variant=outline]:bg-white data-[variant=outline]:border-gray-300 data-[variant=outline]:text-gray-900",
          "data-[variant=outline]:disabled:border-gray-300 data-[variant=outline]:disabled:text-gray-300",
          "data-[variant=outline]:hover:bg-gray-50",
          "data-[variant=outline]:active:bg-gray-200 data-[variant=outline]:active:text-gray-800",
          "data-[variant=outline]:disabled:hover:bg-white data-[variant=outline]:hover:disabled:text-gray-300",
          // text
          "data-[variant=text]:text-primary-900",
          "data-[variant=text]:border-transparent",
          "data-[variant=text]:disabled:text-gray-300",
          "data-[variant=text]:hover:bg-gray-50",
          "data-[variant=text]:active:bg-gray-200",
          "data-[variant=text]:hover:disabled:text-gray-300",
        ),
      },
    },
  },
);

type Props = ComponentProps<"button"> &
  VariantProps<typeof BUTTON_VARIANTS> & {
    label: string;
    variant?: "fill" | "outline" | "text";
    theme?: "primary" | "alert" | "neutral";
  };

export default function Button({
  label,
  variant = "fill",
  theme = "primary",
  size = "md",
  type = "button",
  className,
  ...props
}: Props) {
  return (
    <button
      {...props}
      data-variant={variant}
      className={clsx(BUTTON_VARIANTS({ theme, size }), className)}
      type={type}
    >
      {label}
    </button>
  );
}
