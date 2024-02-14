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
      <ToolbarItem
        icon="lucide:heading-2"
        pressed={editor.isActive("heading")}
        onPressedChange={() =>
          editor.chain().focus().toggleHeading({ level: 2 }).run()
        }
      />
      <ToolbarItem
        icon="lucide:bold"
        pressed={editor.isActive("bold")}
        onPressedChange={() => editor.chain().focus().toggleBold().run()}
      />
      <ToolbarItem
        icon="lucide:strikethrough"
        pressed={editor.isActive("strike")}
        onPressedChange={() => editor.chain().focus().toggleStrike().run()}
      />
      <ToolbarItem
        icon="lucide:italic"
        pressed={editor.isActive("italic")}
        onPressedChange={() => editor.chain().focus().toggleItalic().run()}
      />
      <ToolbarItem
        icon="lucide:list"
        pressed={editor.isActive("bulletList")}
        onPressedChange={() => editor.chain().focus().toggleBulletList().run()}
      />
      <ToolbarItem
        icon="lucide:list-ordered"
        pressed={editor.isActive("orderedList")}
        onPressedChange={() => editor.chain().focus().toggleOrderedList().run()}
      />
    </div>
  );
}
