"use client";

import Highlight from "@tiptap/extension-highlight";
import Placeholder from "@tiptap/extension-placeholder";
import TextAlign from "@tiptap/extension-text-align";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Loader } from "lucide-react";
import { InputStyles } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useEditorStore } from "@/store/editor-store";
import ToolBar from "./toolbar";

export const TipTapEditor = ({
  content,
  invalid,
  onChange,
}: {
  content: string;
  invalid: boolean;
  onChange: (value: string) => void;
}) => {
  const { setEditor } = useEditorStore();
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3],
        },
      }),
      Highlight,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Placeholder.configure({
        placeholder: "اكتب وصف تفصيلي عن المنتج...",
      }),
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
    onCreate({ editor }) {
      setEditor(editor);
    },
    onDestroy() {
      setEditor(null);
    },
    onUpdate({ editor }) {
      setEditor(editor);
      onChange(editor.getHTML());
    },
    onSelectionUpdate({ editor }) {
      setEditor(editor);
    },
    onTransaction({ editor }) {
      setEditor(editor);
    },
    onFocus({ editor }) {
      setEditor(editor);
    },
    onBlur({ editor }) {
      setEditor(editor);
    },
    onContentError({ editor }) {
      setEditor(editor);
    },
  });

  return (
    <>
      <ToolBar />
      {editor ? (
        <EditorContent editor={editor} />
      ) : (
        <div
          className={cn(
            InputStyles,
            "flex h-60 max-w-none items-center justify-center rounded-lg",
          )}
        >
          <Loader className="size-12 animate-spin" />
        </div>
      )}
    </>
  );
};
