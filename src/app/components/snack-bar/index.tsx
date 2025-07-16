import { type ComponentProps, useMemo } from "react";
import { AlertTriangle, CircleCheck, CircleX, Info, X } from "lucide-react";
import type { VariantProps } from "class-variance-authority";
import clsx from "clsx";
import {
  type IconType,
  SNACKBAR_ICON_VARIANTS,
  SNACKBAR_VARIANTS,
  type SnackbarType,
} from "./type";

export type SnackbarProps = VariantProps<typeof SNACKBAR_VARIANTS> & {
  theme: SnackbarType;
  onClose?: () => void;
} & ComponentProps<"div">;

export const Snackbar = ({
  theme,
  isVisible,
  children,
  className,
  onClose,
  ...props
}: SnackbarProps) => {
  const Icon = useMemo((): IconType => {
    switch (theme) {
      case "success": {
        return CircleCheck;
      }
      case "info": {
        return Info;
      }
      case "error": {
        return CircleX;
      }
      case "warning": {
        return AlertTriangle;
      }
    }
  }, [theme]);
  return (
    <div
      {...props}
      className={clsx(SNACKBAR_VARIANTS({ theme, isVisible }), className)}
    >
      <div className={clsx("flex flex-1 items-center gap-2")}>
        <Icon className={clsx(SNACKBAR_ICON_VARIANTS({ theme }))} />
        <p className={clsx("font-semibold text-sm", "flex-1", "line-clamp-2")}>
          {children}
        </p>
      </div>
      <button
        type={"button"}
        className={clsx(
          "flex items-center justify-center",
          "transition-opacity hover:opacity-60",
        )}
        onClick={onClose}
      >
        <X className="size-5 !text-[20px] text-[#2D1F20]" />
      </button>
    </div>
  );
};
