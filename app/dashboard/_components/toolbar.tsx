"use client";

import {
  AlignCenter,
  AlignLeftIcon,
  AlignRightIcon,
  Bold,
  Highlighter,
  Italic,
  List,
  ListOrdered,
  Quote,
  Redo2,
  Strikethrough,
  Underline,
  Undo2,
} from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { useEditorStore } from "@/store/editor-store";

export default function ToolBar() {
  return (
    <div className="scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb-slate-700 scrollbar-track-transparent flex flex-wrap items-center gap-2 overflow-x-auto pb-2">
      <HistoryTools />
      <Separator
        className="my-auto h-[18px]! w-[3px]! rounded-md"
        orientation="vertical"
      />
      <HeadingTools />
      <Separator
        className="my-auto h-[18px]! w-[3px]! rounded-md"
        orientation="vertical"
      />
      <FormattingTools />
      <Separator
        className="my-auto h-[18px]! w-[3px]! rounded-md"
        orientation="vertical"
      />
      <TextAlignmentTools />
      <Separator
        className="my-auto h-[18px]! w-[3px]! rounded-md"
        orientation="vertical"
      />
      <ListTools />
    </div>
  );
}

function HistoryTools() {
  const { editor } = useEditorStore();

  const tools = [
    {
      label: "Undo",
      icon: Undo2,
      onClick: () => editor?.chain().focus().undo().run(),
    },
    {
      label: "Redo",
      icon: Redo2,
      onClick: () => editor?.chain().focus().redo().run(),
    },
  ];

  return (
    <ButtonGroup disabled={!editor}>
      {tools.map((tool) => (
        <Tooltip key={tool.label}>
          <TooltipTrigger asChild>
            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={tool.onClick}
            >
              {tool.icon && <tool.icon className="size-4" />}
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>{tool.label}</p>
          </TooltipContent>
        </Tooltip>
      ))}
    </ButtonGroup>
  );
}

function HeadingTools() {
  const { editor } = useEditorStore();

  const tools = [
    {
      label: "H1",
      onClick: () => editor?.chain().focus().toggleHeading({ level: 1 }).run(),
      isActive: editor?.isActive("heading", { level: 1 }),
    },
    {
      label: "H2",
      onClick: () => editor?.chain().focus().toggleHeading({ level: 2 }).run(),
      isActive: editor?.isActive("heading", { level: 2 }),
    },
    {
      label: "H3",
      onClick: () => editor?.chain().focus().toggleHeading({ level: 3 }).run(),
      isActive: editor?.isActive("heading", { level: 3 }),
    },
  ];

  return (
    <ButtonGroup disabled={!editor}>
      {tools.map((tool) => (
        <Button
          key={tool.label}
          type="button"
          variant="outline"
          size="icon"
          onClick={tool.onClick}
          className={cn(tool.isActive && buttonVariants({ variant: "link" }))}
        >
          {tool.label}
        </Button>
      ))}
    </ButtonGroup>
  );
}

function FormattingTools() {
  const { editor } = useEditorStore();

  const tools = [
    {
      label: "Bold",
      icon: Bold,
      onClick: () => editor?.chain().focus().toggleBold().run(),
      isActive: editor?.isActive("bold"),
    },
    {
      label: "Italic",
      icon: Italic,
      onClick: () => editor?.chain().focus().toggleItalic().run(),
      isActive: editor?.isActive("italic"),
    },
    {
      label: "Underline",
      icon: Underline,
      onClick: () => editor?.chain().focus().toggleUnderline().run(),
      isActive: editor?.isActive("underline"),
    },
    {
      label: "Strike",
      icon: Strikethrough,
      onClick: () => editor?.chain().focus().toggleStrike().run(),
      isActive: editor?.isActive("strike"),
    },
    {
      label: "Highlight",
      icon: Highlighter,
      onClick: () => editor?.chain().focus().toggleHighlight().run(),
      isActive: editor?.isActive("highlight"),
    },
  ];

  return (
    <ButtonGroup disabled={!editor}>
      {tools.map((tool) => (
        <Tooltip key={tool.label}>
          <TooltipTrigger asChild>
            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={tool.onClick}
              className={cn(
                tool.isActive && buttonVariants({ variant: "link" }),
              )}
            >
              {tool.icon && <tool.icon className="size-4" />}
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>{tool.label}</p>
          </TooltipContent>
        </Tooltip>
      ))}
    </ButtonGroup>
  );
}

function TextAlignmentTools() {
  const { editor } = useEditorStore();

  const tools = [
    {
      label: "Right",
      icon: AlignRightIcon,
      onClick: () => editor?.chain().focus().setTextAlign("justify").run(),
      isActive: editor?.isActive({ textAlign: "right" }),
    },
    {
      label: "Center",
      icon: AlignCenter,
      onClick: () => editor?.chain().focus().setTextAlign("center").run(),
      isActive: editor?.isActive({ textAlign: "center" }),
    },
    {
      label: "Left",
      icon: AlignLeftIcon,
      onClick: () => editor?.chain().focus().setTextAlign("left").run(),
      isActive: editor?.isActive({ textAlign: "left" }),
    },
  ];

  return (
    <ButtonGroup disabled={!editor}>
      {tools.map((tool) => (
        <Tooltip key={tool.label}>
          <TooltipTrigger asChild>
            <Button
              key={tool.label}
              type="button"
              variant="outline"
              size="icon"
              onClick={tool.onClick}
              className={cn(
                tool.isActive && buttonVariants({ variant: "link" }),
              )}
            >
              {tool.icon && <tool.icon className="size-4" />}
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>{tool.label}</p>
          </TooltipContent>
        </Tooltip>
      ))}
    </ButtonGroup>
  );
}

function ListTools() {
  const { editor } = useEditorStore();

  const tools = [
    {
      label: "Bullet List ",
      icon: List,
      onClick: () => editor?.chain().focus().toggleBulletList().run(),
      isActive: editor?.isActive("bulletList"),
    },
    {
      label: "Ordered List ",
      icon: ListOrdered,
      onClick: () => editor?.chain().focus().toggleOrderedList().run(),
      isActive: editor?.isActive("orderedList"),
    },
    {
      label: "Blockquote ",
      icon: Quote,
      onClick: () => editor?.chain().focus().toggleBlockquote().run(),
      isActive: editor?.isActive("blockquote"),
    },
  ];

  return (
    <ButtonGroup disabled={!editor}>
      {tools.map((tool) => (
        <Tooltip key={tool.label}>
          <TooltipTrigger asChild>
            <Button
              key={tool.label}
              type="button"
              variant="outline"
              size="icon"
              onClick={tool.onClick}
              className={cn(
                tool.isActive && buttonVariants({ variant: "link" }),
              )}
            >
              {tool.icon && <tool.icon className="size-4" />}
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>{tool.label}</p>
          </TooltipContent>
        </Tooltip>
      ))}
    </ButtonGroup>
  );
}
