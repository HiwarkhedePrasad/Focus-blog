import React, { useState, useEffect } from "react";
import axios from "axios";
import NoteTaking from "./NoteTaking";

const YoungBlogsSection = () => {
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [notes, setNotes] = useState({}); // Store notes for each blog
  const [noteText, setNoteText] = useState(""); // Text for the new note
  const [isNotePanelOpen, setIsNotePanelOpen] = useState(false); // For controlling the sliding panel visibility
  const [noteTaking, setNoteTaking] = useState(null); // Track which article to take notes on
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  useEffect(() => {
    // Fetch the JSON data for blogs
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("../jsonData/youngBlog.json"); // Adjust path if necessary
        setBlogs(response.data);
      } catch (err) {
        console.error("Error fetching the blogs:", err);
      }
    };

    fetchBlogs();
  }, []);

  const handleTakeNotes = (article) => {
    setNoteTaking(article);
    setIsPanelOpen(true); // Open the panel when a note is being taken
  };

  const handleClosePanel = () => {
    setIsPanelOpen(false); // Close the panel
  };

  const handleAddNote = (blogId) => {
    if (!noteText.trim() || !blogId) return; // Ensure there's a note before proceeding and blogId exists

    setNotes((prevNotes) => {
      const updatedNotes = { ...prevNotes };
      updatedNotes[blogId] = updatedNotes[blogId]
        ? [...updatedNotes[blogId], noteText]
        : [noteText];
      return updatedNotes;
    });

    setNoteText(""); // Clear the note input after adding
  };

  const handleNotePanelToggle = () => {
    setIsNotePanelOpen(!isNotePanelOpen); // Toggle the sliding note panel
  };

  return (
    <div className="py-10 px-4 max-w-screen-xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Young Blogs
      </h1>

      {selectedBlog ? (
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {selectedBlog.title}
          </h2>
          <p className="text-sm text-gray-500 mb-2">
            By {selectedBlog.author} |{" "}
            {new Date(selectedBlog.publishedAt).toLocaleString()}
          </p>
          <img
            src={selectedBlog.urlToImage}
            alt={selectedBlog.title}
            className="w-full h-64 object-cover rounded-md mb-4"
          />
          <div className="text-gray-700 mb-4">
            <p>{selectedBlog.content}</p>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-700">Your Notes:</h3>
            <ul className="list-disc pl-5 text-gray-700">
              {notes[selectedBlog.url] &&
                notes[selectedBlog.url].map((note, index) => (
                  <li key={index}>{note}</li>
                ))}
            </ul>
          </div>

          <button
            className="mt-4 text-blue-500"
            onClick={() => setSelectedBlog(null)}
          >
            Go Back
          </button>
        </div>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <li
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => setSelectedBlog(blog)}
            >
              <a className="block p-4">
                {blog.urlToImage && (
                  <img
                    src={blog.urlToImage}
                    alt={blog.title}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                )}
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  {blog.title}
                </h2>
                <p className="text-gray-600 mb-4">{blog.description}</p>
                <div className="text-sm text-gray-500 mb-2">
                  <p>
                    <strong>Author:</strong> {blog.author || "Unknown Author"}
                  </p>
                  <p>
                    <strong>Source:</strong>{" "}
                    {blog.source.name || "Unknown Source"}
                  </p>
                  <p>
                    <strong>Published:</strong>{" "}
                    {new Date(blog.publishedAt).toLocaleString()}
                  </p>
                </div>
                <p className="text-gray-700">
                  {blog.content
                    ? blog.content
                    : "Read more on the linked page."}
                </p>
              </a>
            </li>
          ))}
        </ul>
      )}

      {/* Floating Take Notes Button */}
      <div
        onClick={handleNotePanelToggle}
        className="fixed bottom-8 right-8 bg-blue-500 text-white p-4 rounded-full shadow-lg cursor-pointer hover:bg-blue-600"
      >
        <span className="text-2xl">📝</span>
      </div>

      {/* Sliding Note Panel */}
      <div
        className={`fixed right-0 top-0 bg-white w-80 h-full shadow-lg transform transition-transform duration-300 ${
          isNotePanelOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="relative h-full p-6">
          <button
            onClick={handleClosePanel}
            className="absolute top-4 right-4 bg-gray-200 text-gray-600 p-2 rounded-full hover:bg-gray-300 transition-all"
          >
            X
          </button>
          {/* Render the NoteTaking component inside the sliding panel */}
          <NoteTaking article={noteTaking} handleAddNote={handleAddNote} />
        </div>
      </div>
    </div>
  );
};

export default YoungBlogsSection;
