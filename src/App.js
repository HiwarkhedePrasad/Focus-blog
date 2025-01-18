import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./component/footer";
import Header from "./component/header";
import HomePage from "./pages/HomePage";
// import AboutPage from "./pages/AboutPage"; // Example: Add other pages as needed
// import ContactPage from "./pages/ContactPage"; // Example: Add other pages as needed
import CreateBlog from "./pages/createBlog";
import NotesPage from "./component/notesPages";
import BlogPage from "./pages/BlogPage";
import About from "./pages/about";
import Contact from "./pages/contact";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Define routes for different pages */}
        <Route path="/" element={<HomePage />} />
        <Route path="/explore" element={<BlogPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* Add a fallback route for unmatched paths */}
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        <Route path="/createBlog" element={<CreateBlog />} />
        <Route path="/notes" element={<NotesPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
