"use client";

import { useDropzone } from "@uploadthing/react";
import { generateClientDropzoneAccept } from "uploadthing/client";

import { useUploadThing } from "@/lib/uploadthing";
import { Icon } from "@iconify/react";
import { useCallback } from "react";

import {
  Badge,
  Button,
  Chip,
  Image,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  cn,
} from "@nextui-org/react";

import type { FileWithPreview } from "@/types";

type FileUploaderProps = {
  files: FileWithPreview[];
  setFiles: (files: FileWithPreview[]) => void;
  onChange: (newUrl: string) => void;
};

export function FileUploader({ files, setFiles, onChange }: FileUploaderProps) {
  const { permittedFileInfo } = useUploadThing("image");

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const filesWithPreview = acceptedFiles.map((file) => {
        return {
          file,
          name: file.name,
          size: file.size,
          preview: URL.createObjectURL(file),
        };
      });
      setFiles(filesWithPreview);

      onChange(filesWithPreview[0]?.preview || "");
    },
    [setFiles, onChange],
  );

  const handleCloseImage = () => {
    setFiles([]);
    onChange("");
  };

  const fileTypes = permittedFileInfo?.config
    ? Object.keys(permittedFileInfo?.config)
    : [];

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: fileTypes ? generateClientDropzoneAccept(fileTypes) : undefined,
  });

  const getSize = (fileSize: number) => {
    const size = `${(fileSize / 1024 / 1024).toFixed(1)} MB`;

    return size;
  };

  return (
    <>
      {files.length === 0 && (
        <div
          className={cn(
            { "bg-default-100/50 border-default-400": isDragActive },
            "min-h-40 cursor-pointer flex flex-col items-center justify-center w-full rounded-large text-default-500 border-medium border-default-200 px-4 py-2 shadow-sm border-dashed hover:border-default-400 hover:bg-default-100/50 text-center  bg-default-100 transition-all duration-300",
          )}
          {...getRootProps()}
        >
          <Icon
            className="mb-2"
            icon="solar:gallery-linear"
            height={36}
            width={36}
          />
          <span className="text-medium">
            Arrastra y suelta una imagen aquí o da click
          </span>
          <span className="text-small text-warning">Tamaño máximo 4 MB</span>
        </div>
      )}
      <input {...getInputProps()} />

      {files[0] && (
        <div className="w-full">
          <Table aria-label="Example empty table">
            <TableHeader>
              <TableColumn>IMAGEN</TableColumn>
              <TableColumn>NOMBRE</TableColumn>
              <TableColumn>TAMAÑO</TableColumn>
            </TableHeader>
            <TableBody>
              <TableRow key="1">
                <TableCell>
                  <Badge
                    isOneChar
                    className="opacity-0 group-hover:opacity-100"
                    content={
                      <Button
                        isIconOnly
                        radius="full"
                        size="sm"
                        variant="light"
                        onPress={handleCloseImage}
                      >
                        <Icon
                          className="text-foreground"
                          icon="iconamoon:close-thin"
                          width={16}
                        />
                      </Button>
                    }
                  >
                    <Image
                      alt="uploaded image cover"
                      className="aspect-video h-14 min-w-24 rounded-small border-small border-default-200/50 object-cover"
                      src={files[0]?.preview}
                    />
                  </Badge>
                </TableCell>
                <TableCell className="text-default-500">
                  {files[0]?.name}
                </TableCell>
                {
                  <TableCell>
                    <Chip
                      className="text-nowrap"
                      color={
                        files[0].size < 3 * 1024 * 1024
                          ? "success"
                          : files[0].size < 4 * 1024 * 1024
                            ? "warning"
                            : "danger"
                      }
                      size="sm"
                      variant="flat"
                    >
                      {getSize(files[0].size || 0)}
                    </Chip>
                  </TableCell>
                }
              </TableRow>
            </TableBody>
          </Table>
          {files[0].size > 4 * 1024 * 1024 && (
            <div
              className="p-1 text-tiny text-danger"
              data-slot="error-message"
            >
              El archivo debe tener un tamaño máximo de 4 MB
            </div>
          )}
        </div>
      )}
    </>
  );
}
