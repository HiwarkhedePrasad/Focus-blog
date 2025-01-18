import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const NotesPage = () => {
  const [notes, setNotes] = useState([]);

  // Load notes from localStorage
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(savedNotes);
  }, []);

  return (
    <div className="py-10 px-4 max-w-screen-xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Your Notes
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {notes.length === 0 ? (
          <p>No notes found. Start taking notes on blogs!</p>
        ) : (
          notes.map((note, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-900">
                  {note.title}
                </h2>
                <p>{note.content}</p>
                <p className="text-sm text-gray-500 mt-2">
                  <strong>Referenced from:</strong> {note.articleTitle}
                </p>
                <a
                  href={note.articleUrl}
                  target="_blank"
                  className="text-blue-500"
                >
                  Read the article
                </a>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default NotesPage;
