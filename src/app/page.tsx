"use client"; // Required for Next.js App Router with stateful components

import React, { useState, useEffect } from "react";

// Import Editor & Plugins
import type { Value } from "@react-page/editor";
import Editor from "@react-page/editor";
import slatePlugin, { createSlatePlugins } from "@react-page/plugins-slate"; // Rich Text
import imagePlugin from "@react-page/plugins-image"; // Image
import videoPlugin from "@react-page/plugins-video"; // Video
import backgroundPlugin from "@react-page/plugins-background"; // Background
import dividerPlugin from "@react-page/plugins-divider"; // Divider

// Import CSS for React Page
import "@react-page/editor/lib/index.css"; // Main Editor Styles
import "@react-page/plugins-slate/lib/index.css"; // Rich Text Styles
import "@react-page/plugins-image/lib/index.css"; // Image Styles
import "@react-page/plugins-video/lib/index.css"; // Video Styles
import "@react-page/plugins-divider/lib/index.css"; // Divider Styles
import "@react-page/plugins-background/lib/index.css"; // Background Styles

// Define Plugins
const cellPlugins = [
  slatePlugin(), // ✅ Fixes H1, H2, Bold, Italics, etc.
  imagePlugin,
  videoPlugin,
  dividerPlugin,
  backgroundPlugin,
];

export default function Home() {
  const [pageContent, setPageContent] = useState<Value | null>(null);
  const [readOnly, setReadOnly] = useState(false);

  // Load saved content from localStorage
  useEffect(() => {
    const savedContent = localStorage.getItem("savedPage");
    if (savedContent) {
      setPageContent(JSON.parse(savedContent));
    }
  }, []);

  // Save content to localStorage
  const handleSave = () => {
    localStorage.setItem("savedPage", JSON.stringify(pageContent));
    alert("Page content saved!");
  };

  // Clear content
  const handleClear = () => {
    setPageContent(null);
    localStorage.removeItem("savedPage");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Page Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">CloudKit Page Builder</h1>
        <div className="flex gap-3">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={handleSave}
          >
            Save Page
          </button>
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded"
            onClick={handleClear}
          >
            Clear Page
          </button>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded"
            onClick={() => setReadOnly(!readOnly)}
          >
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