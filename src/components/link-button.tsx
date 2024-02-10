"use client";

import { ButtonProps, ButtonVariantProps } from "@nextui-org/react";
import { button } from "@nextui-org/theme";
import Link from "next/link";
import { useMemo } from "react";

type LinkButtonProps = {
  href: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  className?: string;
  children: React.ReactNode;
} & ButtonVariantProps &
  ButtonProps;

export function LinkButton({
  href,
  target,
  children,
  size,
  color,
  variant,
  radius,
  fullWidth,
  isDisabled,
  isInGroup,
  disableAnimation,
  isIconOnly,
  className,
  startContent,
  endContent,
}: LinkButtonProps) {
  const styles = useMemo(
    () =>
      button({
        size,
        color,
        variant,
        radius,
        fullWidth,
        isDisabled,
        isInGroup,
        disableAnimation,
        isIconOnly,
        className,
      }),
    [
      size,
      color,
      variant,
      radius,
      fullWidth,
      isDisabled,
      isInGroup,
      isIconOnly,
      disableAnimation,
      className,
    ],
  );

  return (
    <Link href={href} target={target} className={styles}>
      {startContent}
      {children}
      {endContent}
    </Link>
  );
}
