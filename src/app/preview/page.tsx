import Editor from "@react-page/editor";
import type { Value } from "@react-page/editor";
import slatePlugin from "@react-page/plugins-slate";
import imagePlugin from "@react-page/plugins-image";
import videoPlugin from "@react-page/plugins-video";
import backgroundPlugin from "@react-page/plugins-background";
import dividerPlugin from "@react-page/plugins-divider";
import { useEffect, useState } from "react";

const cellPlugins = [slatePlugin(), imagePlugin(), videoPlugin(), dividerPlugin(), backgroundPlugin()];

export default function PreviewPage() {
  const [pageContent, setPageContent] = useState<Value | null>(null);

  useEffect(() => {
    const savedContent = localStorage.getItem("savedPage");
    if (savedContent) {
      setPageContent(JSON.parse(savedContent));
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">Preview Page</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <Editor cellPlugins={cellPlugins} value={pageContent} readOnly />
      </div>
    </div>
  );
}