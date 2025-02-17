"use client"; // Required for Next.js App Router

import React, { useState, useEffect } from "react";
import type { Value } from "@react-page/editor";
import Editor from "@react-page/editor";

// Import Slate with Built-in Plugins
import slatePlugin, { defaultSlate } from "@react-page/plugins-slate";
import { createSlatePlugin } from "@react-page/plugins-slate/lib/createSlatePlugin";

// Other Plugins
import imagePlugin from "@react-page/plugins-image"; 
import videoPlugin from "@react-page/plugins-video"; 
import backgroundPlugin from "@react-page/plugins-background";
import dividerPlugin from "@react-page/plugins-divider";

// Import Styles
import "@react-page/editor/lib/index.css";
import "@react-page/plugins-slate/lib/index.css";
import "@react-page/plugins-image/lib/index.css";
import "@react-page/plugins-video/lib/index.css";
import "@react-page/plugins-divider/lib/index.css";
import "@react-page/plugins-background/lib/index.css";

// ✅ Define Plugins, ensuring correct structure
const cellPlugins = [
  createSlatePlugin({ plugins: [...defaultSlate] }), // Fix for rich text buttons
  imagePlugin,
  videoPlugin,
  dividerPlugin,
  backgroundPlugin(),
];

export default function Home() {
  const [pageContent, setPageContent] = useState<Value | null>(null);
  const [readOnly, setReadOnly] = useState(false);

  useEffect(() => {
    const savedContent = localStorage.getItem("savedPage");
    if (savedContent) {
      setPageContent(JSON.parse(savedContent));
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem("savedPage", JSON.stringify(pageContent));
    alert("Page content saved!");
  };

  const handleClear = () => {
    setPageContent(null);
    localStorage.removeItem("savedPage");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">CloudKit Page Builder</h1>
        <div className="flex gap-3">
          <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleSave}>
            Save Page
          </button>
          <button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={handleClear}>
            Clear Page
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={() => setReadOnly(!readOnly)}>
            {readOnly ? "Edit Mode" : "View Mode"}
          </button>
        </div>
      </div>

      {/* Page Editor */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <Editor
          cellPlugins={cellPlugins}
          value={pageContent}
          onChange={setPageContent}
          readOnly={readOnly}
        />
      </div>
    </div>
  );
}