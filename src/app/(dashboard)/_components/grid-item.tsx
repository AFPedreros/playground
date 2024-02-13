"use client";

import { LinkButton } from "@/components/link-button";
import { Image, Tooltip } from "@nextui-org/react";

type GridItemProps = {
  id: string;
  name: string;
  description?: string;
  imageSrc: string;
};

export function GridItem({ id, name, description, imageSrc }: GridItemProps) {
  return (
    <div className="relative flex w-full flex-none flex-col gap-3">
      <Image
        isBlurred
        isZoomed
        alt={name}
        className="aspect-square w-full hover:scale-110"
        src={imageSrc}
      />

      <div className="flex items-start justify-between gap-1">
        <h3 className="text-small font-medium text-default-700">{name}</h3>
      </div>
      {!!description && (
        <Tooltip className=" max-w-2xl" content={description} placement="top">
          <p className="text-small truncate text-default-500">{description}</p>
        </Tooltip>
      )}
      <LinkButton
        className="font-semibold"
        size="sm"
        variant="shadow"
        color="primary"
        href={`/admin/temas/${id}`}
      >
        Ver
      </LinkButton>
    </div>
  );
}
