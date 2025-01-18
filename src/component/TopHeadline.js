import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaStickyNote } from "react-icons/fa"; // Import Font Awesome sticky note icon
import { Link } from "react-router-dom";
import NoteTaking from "./NoteTaking"; // Import the NoteTaking component

const TopHeadlines = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [noteTaking, setNoteTaking] = useState(null); // Track which article to take notes on
  const [isPanelOpen, setIsPanelOpen] = useState(false); // Track if the sliding panel is open

  const API_KEY = "ff378f0aee1642f388afa55dcaee5aa6";
  const URL = `https://newsapi.org/v2/top-headlines?country=us&category=technology&pageSize=5&apiKey=${API_KEY}`;

  useEffect(() => {
    const fetchTopHeadlines = async () => {
      try {
        const response = await axios.get(URL);
        setArticles(response.data.articles);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch news");
        setLoading(false);
      }
    };

    fetchTopHeadlines();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  const handleTakeNotes = (article) => {
    setNoteTaking(article);
    setIsPanelOpen(true); // Open the panel when a note is being taken
  };

  const handleClosePanel = () => {
    setIsPanelOpen(false); // Close the panel
  };

  return (
    <div className="py-10 px-4 max-w-screen-xl mx-auto relative">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Top Headlines
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 relative pb-16"
          >
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4"
            >
              {article.urlToImage && (
                <img
                  src={article.urlToImage}
                  alt={article.title}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
              )}
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                {article.title}
              </h2>
              <p className="text-gray-600 mb-4">{article.description}</p>
              <div className="text-sm text-gray-500 mb-2">
                <p>
                  <strong>Author:</strong> {article.author || "Unknown Author"}
                </p>
                <p>
                  <strong>Source:</strong>{" "}
                  {article.source.name || "Unknown Source"}
                </p>
                <p>
                  <strong>Published:</strong>{" "}
                  {new Date(article.publishedAt).toLocaleString()}
                </p>
              </div>
              <p className="text-gray-700">
                {article.content
                  ? article.content
                  : "Read more on the linked page."}
              </p>
            </a>

            {/* Note Taking Icon Button */}
            <button
              onClick={() => handleTakeNotes(article)}
              className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300"
              aria-label="Take Notes"
            >
              <FaStickyNote size={24} />
            </button>
          </div>
        ))}
      </div>

      {/* Sliding Panel for Note Taking */}
      {isPanelOpen && (
        <div
          className="fixed top-0 right-0 bottom-0 w-80 bg-white shadow-xl z-50 transform transition-all duration-300"
          style={{
            transform: isPanelOpen ? "translateX(0)" : "translateX(100%)",
          }}
        >
          <div className="relative h-full p-6">
            <button
              onClick={handleClosePanel}
              className="absolute top-4 right-4 bg-gray-200 text-gray-600 p-2 rounded-full hover:bg-gray-300 transition-all"
            >
              X
            </button>
            {/* Render the NoteTaking component inside the sliding panel */}
            <NoteTaking article={noteTaking} />
          </div>
        </div>
      )}
    </div>
  );
};

export default TopHeadlines;
