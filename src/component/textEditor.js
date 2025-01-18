import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Quill's Snow theme

const TextEditor = () => {
  const [editorContent, setEditorContent] = useState("");
  const [publishedBlogs, setPublishedBlogs] = useState([]);

  const handleEditorChange = (value) => {
    setEditorContent(value);
  };

  const handlePublishBlog = () => {
    if (editorContent.trim()) {
      // Save the current blog content into the published blogs list
      setPublishedBlogs([
        ...publishedBlogs,
        { content: editorContent, id: new Date().getTime() }, // Using timestamp as unique ID
      ]);
      setEditorContent(""); // Clear the editor after publishing
    }
  };

  return (
    <div className="py-6 px-4 max-w-5xl mx-auto min-h-screen flex flex-col justify-between">
      <h2 className="text-2xl font-semibold mb-4">Blog Content Editor</h2>

      <div className="flex flex-col lg:flex-row gap-6 mb-16">
        {/* Editor Section */}
        <div className="flex-1">
          <ReactQuill
            value={editorContent}
            onChange={handleEditorChange}
            modules={{
              toolbar: [
                [{ header: "1" }, { header: "2" }, { font: [] }],
                [{ size: [] }],
                ["bold", "italic", "underline", "strike"],
                [{ list: "ordered" }, { list: "bullet" }],
                ["link", "blockquote", "code-block"],
                [{ align: [] }],
                ["image"],
              ],
            }}
            className="border rounded-lg w-full h-[500px] lg:h-[600px]"
          />
          {/* Publish Blog Button */}
        </div>

        {/* Preview Section */}
        <div className="flex-1">
          <div
            className="p-4 border rounded-lg mt-2 h-[500px] lg:h-[600px] overflow-y-auto"
            dangerouslySetInnerHTML={{ __html: editorContent }}
            style={{
              fontFamily: "inherit", // Ensure the preview matches font-family set by Quill
              fontSize: "inherit", // Match the font-size for the preview
              lineHeight: "1.5", // To adjust for readability
            }}
          />
        </div>
      </div>

      <div className="mt-4 flex justify-end">
        <button
          onClick={handlePublishBlog}
          className="bg-blue-500 text-white py-2 px-6 rounded-md"
        >
          Publish Blog
        </button>
      </div>

      {/* Published Blogs Section */}
      <div className="mt-10">
        <h3 className="text-2xl font-semibold">Published Blogs</h3>
        {publishedBlogs.length > 0 ? (
          <div>
            {publishedBlogs.map((blog) => (
              <div
                key={blog.id}
                className="mt-4 p-4 border rounded-lg"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />
            ))}
          </div>
        ) : (
          <p>No blogs published yet.</p>
        )}
      </div>
    </div>
  );
};

export default TextEditor;
