import StarterKit from "@tiptap/starter-kit";

export const outputEditor ={
    editable: false,
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
      }),
    ],
}