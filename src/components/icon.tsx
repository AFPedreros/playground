"use client";
import { Icon as IconofyIcon } from "@iconify/react";

type IconProps = {
  height: number;
  width: number;
  icon: string;
};

export function Icon({ height, width, icon }: IconProps) {
  return <IconofyIcon icon={icon} height={height} width={width} />;
}
