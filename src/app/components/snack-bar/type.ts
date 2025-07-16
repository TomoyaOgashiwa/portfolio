import { cva } from "class-variance-authority";
import clsx from "clsx";
import type { LucideProps } from "lucide-react";
import type { ForwardRefExoticComponent, RefAttributes } from "react";

export const SNACKBAR_VARIANTS = cva(
  clsx(
    "px-4 py-3 min-w-[350px] max-w-[460px] w-fit",
    "flex items-center gap-2",
    "border rounded",
    "shadow-[0px_8px_12px_#00323F1C]",
  ),
  {
    variants: {
      theme: {
        success: "border-green-500 bg-green-50 text-green-500",
        info: "border-blue-600 bg-primary-50 text-blue-600",
        error: "border-red-600 bg-red-50 text-red-600",
        warning: "border-yellow-600 bg-yellow-50 text-yellow-600",
      },
      isVisible: {
        true: "animate-fade-in-from-bottom",
        false: "animate-fade-out-to-bottom",
      },
    },
  },
);

export const SNACKBAR_ICON_VARIANTS = cva(clsx("text-xl"), {
  variants: {
    theme: {
      success: "text-green-500",
      info: "text-blue-600",
      error: "text-red-600",
      warning: "text-yellow-600",
    },
  },
});

export const ICON_VARIANTS = cva("size-5", {
  variants: {
    theme: {
      neutral:
        "data-[variant=outlined]:stroke-gray-600 data-[variant=filled]:fill-gray-600 data-[variant=filled]:stroke-gray-600 text-gray-600",
      primary:
        "data-[variant=outlined]:stroke-primary-500 data-[variant=filled]:fill-primary-500 data-[variant=filled]:stroke-white text-primary-500",
      alert:
        "data-[variant=outlined]:stroke-red-500 data-[variant=filled]:fill-red-500 data-[variant=filled]:stroke-white text-red-500",
      warning:
        "data-[variant=outlined]:stroke-yellow-500 data-[variant=filled]:fill-yellow-500 data-[variant=filled]:stroke-white text-yellow-500",
      fill: "data-[variant=outlined]:stroke-white data-[variant=outlined]:fill-transparent data-[variant=filled]:fill-white data-[variant=filled]:stroke-primary-500 text-white",
      success:
        "data-[variant=outlined]:stroke-green-500 data-[variant=filled]:fill-green-500 data-[variant=filled]:stroke-white text-green-500",
    },
  },
});

export type IconType = ForwardRefExoticComponent<
  Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
>;

export type SnackbarType = "success" | "info" | "error" | "warning";
