"use client";

import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

import { Toolbar } from "./toolbar";

type TipTapEditorProps = {
  className: string;
  description: string;
  onChange: (richText: string) => void;
};

export function TipTapEditor({
  className,
  description,
  onChange,
}: TipTapEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          HTMLAttributes: {
            class: "text-4xl font-bold",
          },
        },
        paragraph: {
          HTMLAttributes: {
            class: "text-default-500 inline",
          },
        },
        bulletList: {
          HTMLAttributes: {
            class: "list-disc list-inside",
          },
        },
        orderedList: {
          HTMLAttributes: {
            class: "list-decimal list-inside",
          },
        },
      }),
    ],
    content: description,
    editorProps: {
      attributes: {
        class: className,
      },
    },
    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },
  });

  return (
    <div className="w-full space-y-1">
      <Toolbar editor={editor} />

      <EditorContent editor={editor} />
    </div>
  );
}
