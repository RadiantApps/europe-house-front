"use client";

import dynamic from "next/dynamic";

// Dynamically import both CKEditor React wrapper and ClassicEditor
const CKEditor = dynamic(
  async () => {
    const { CKEditor } = await import("@ckeditor/ckeditor5-react");
    const ClassicEditor = (await import("@ckeditor/ckeditor5-build-classic"))
      .default;
    return (props) => <CKEditor editor={ClassicEditor} {...props} />;
  },
  { ssr: false } // this ensures it only runs on the client
);

export default function CKEditorClient({ value, onChange }) {
  return (
    <CKEditor
      data={value}
      onChange={(event, editor) => {
        onChange(editor.getData());
      }}
    />
  );
}
