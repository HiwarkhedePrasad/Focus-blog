import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-gray-800">
              Focus-Blog
            </Link>
          </div>

          {/* Navigation (Desktop) */}
          <nav className="hidden md:flex space-x-6">
            <Link
              to="/"
              className="text-gray-600 hover:text-blue-500 transition"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-600 hover:text-blue-500 transition"
            >
              About
            </Link>
            <Link
              to="/explore"
              className="text-gray-600 hover:text-blue-500 transition"
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="text-gray-600 hover:text-blue-500 transition"
            >
              Contact
            </Link>
          </nav>

          {/* Hamburger Menu (Mobile) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="px-4 py-2 space-y-2">
            <Link
              to="#home"
              className="block text-gray-600 hover:text-blue-500 transition"
            >
              Home
            </Link>
            <Link
              to="#about"
              className="block text-gray-600 hover:text-blue-500 transition"
            >
              About
            </Link>
            <Link
              to="#blog"
              className="block text-gray-600 hover:text-blue-500 transition"
            >
              Blog
            </Link>
            <Link
              to="#contact"
              className="block text-gray-600 hover:text-blue-500 transition"
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
