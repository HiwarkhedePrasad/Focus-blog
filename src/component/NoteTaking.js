import React, { useState } from "react";

const NoteTaking = ({ article, addNote }) => {
  const [noteText, setNoteText] = useState(""); // State to hold the note's text

  const handleNoteChange = (e) => {
    setNoteText(e.target.value); // Update the note text as the user types
  };

  const handleAddNote = () => {
    if (noteText.trim()) {
      addNote(article.url, noteText); // Add note to the parent component's state
      setNoteText(""); // Clear the input after adding
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-800">Taking Notes on:</h2>
      <p className="text-lg text-gray-600">{article?.title}</p>

      <textarea
        value={noteText}
        onChange={handleNoteChange}
        className="w-full p-4 border rounded-md h-32"
        placeholder="Write your note here..."
      />

      <button
        onClick={handleAddNote}
        className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Add Note
      </button>
    </div>
  );
};

export default NoteTaking;
