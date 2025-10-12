"use client";

import Highlight from "@tiptap/extension-highlight";
import TextAlign from "@tiptap/extension-text-align";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { InputStyles } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import ToolBar from "./toolbar";

export const Editor = ({
  content,
  invalid,
  onChange,
}: {
  content: string;
  invalid: boolean;
  onChange: (value: string) => void;
}) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [2, 3],
        },
      }),
      Highlight,
      TextAlign,
    ],
    editorProps: {
      attributes: {
        class: cn(
          InputStyles,
          "prose prose-sm h-60 max-w-none overflow-y-auto rounded-lg p-4",
          "scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb-slate-700 scrollbar-track-transparent",
        ),
        "aria-invalid": `${invalid}`,
      },
    },
    content,
    immediatelyRender: false,
    onUpdate: ({ editor }) => {
      console.log(editor.getHTML());
      onChange(editor.getHTML());
    },
  });

  return (
    <>
      <ToolBar editor={editor} />
      <EditorContent editor={editor} />
    </>
  );
};
