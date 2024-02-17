"use client";

import { cn } from "@nextui-org/react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useEffect } from "react";
import { Toolbar } from "./toolbar";

type TipTapEditorProps = {
  className: string;
  description: string;
  isValid: boolean;
  onChange: (richText: string) => void;
};

export function TipTapEditor({
  className,
  description,
  isValid,
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
    injectCSS: false,
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

  useEffect(() => {
    if (!editor) return;
    editor.setOptions({
      editorProps: {
        attributes: {
          class: cn(
            "min-h-40 w-full rounded-large border-medium  px-4 py-2 shadow-sm ",
            {
              "border-danger focus:outline-none": !isValid,
              "hover:border-default-400 border-default-200": isValid,
            },
          ),
        },
      },
    });
  }, [isValid, editor]);

  return (
    <div className="w-full space-y-1">
      <Toolbar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
}
