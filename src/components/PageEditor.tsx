import React, { useState } from "react";
import Editor, { Value } from "@react-page/editor";
import slatePlugin from "@react-page/plugins-slate";
import imagePlugin from "@react-page/plugins-image";
import "@react-page/editor/lib/index.css";
import "@react-page/plugins-slate/lib/index.css";
import "@react-page/plugins-image/lib/index.css";

// Define which plugins to use
const cellPlugins = [slatePlugin(), imagePlugin()];

const PageEditor = () => {
  const [value, setValue] = useState<Value | null>(null);

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Page Editor</h1>
      <Editor cellPlugins={cellPlugins} value={value} onChange={setValue} />
    </div>
  );
};

export default PageEditor;