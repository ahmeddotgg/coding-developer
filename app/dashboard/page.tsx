import type { Metadata } from "next";
import { EditorClient } from "./_components/editor-client";

export const metadata: Metadata = {
  title: "لوحة التحكم",
};

export default function Page() {
  return (
    <div>
      <EditorClient />
    </div>
  );
}
