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
    extensions: [StarterKit.configure()],
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
    <div className="space-y-1">
      <Toolbar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
}
