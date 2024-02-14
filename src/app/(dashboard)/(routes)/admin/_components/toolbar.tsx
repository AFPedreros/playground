"use client";

import { type Editor } from "@tiptap/react";
import { ToolbarItem } from "./toolbar-item";

type ToolbarProps = {
  editor: Editor | null;
};

export function Toolbar({ editor }: ToolbarProps) {
  if (!editor) return null;

  return (
    <div className="flex gap-1">
      <ToolbarItem icon="lucide:heading-2" />
      <ToolbarItem icon="lucide:heading-2" />
      <ToolbarItem icon="lucide:heading-2" />
      <ToolbarItem icon="lucide:heading-2" />
      <ToolbarItem icon="solar:checklist-linear" />
      <ToolbarItem icon="lucide:heading-2" />
    </div>
  );
}
