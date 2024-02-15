"use client";

import { useDropzone } from "@uploadthing/react";
import { generateClientDropzoneAccept } from "uploadthing/client";

import { useUploadThing } from "@/lib/uploadthing";
import { Icon } from "@iconify/react";
import { useCallback, useState } from "react";

import {
  Chip,
  ChipProps,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip,
  User,
  cn,
  getKeyValue,
} from "@nextui-org/react";

import type { FileWithPreview } from "@/types";

const columns = [
  { name: "NAME", uid: "name" },
  { name: "ROLE", uid: "role" },
  { name: "STATUS", uid: "status" },
  { name: "ACTIONS", uid: "actions" },
];

export function FileUploader() {
  const [files, setFiles] = useState<File[]>([]);
  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles(acceptedFiles);
  }, []);

  const { startUpload, permittedFileInfo } = useUploadThing("image", {
    onClientUploadComplete: () => {
      alert("uploaded successfully!");
    },
    onUploadError: () => {
      alert("error occurred while uploading");
    },
    onUploadBegin: () => {
      alert("upload has begun");
    },
  });

  const fileTypes = permittedFileInfo?.config
    ? Object.keys(permittedFileInfo?.config)
    : [];

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: fileTypes ? generateClientDropzoneAccept(fileTypes) : undefined,
  });

  return (
    <>
      {files.length === 0 && (
        <div
          className={cn(
            isDragActive && "bg-default-100/50 border-default-400",
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
          <span className="text-small text-warning ">Tamaño máximo 4 MB</span>
        </div>
      )}
      <input {...getInputProps()} />

      {files.length > 0 && (
        <Table aria-label="Example empty table">
          <TableHeader>
            <TableColumn>IMAGEN</TableColumn>
            <TableColumn>NOMBRE</TableColumn>
            <TableColumn>TAMAÑO</TableColumn>
            <TableColumn>ACCIONES</TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow key="1">
              <TableCell>Tony</TableCell>
              <TableCell>CEO</TableCell>
              <TableCell>Active</TableCell>
              <TableCell>Active</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      )}
    </>
  );
}
