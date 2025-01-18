// src/pages/Contact.js
import React from "react";

const Contact = () => {
  return (
    <div className="py-6 px-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
      <p className="text-lg mb-4">
        If you have any questions or want to get in touch with us, feel free to
        reach out through the links below:
      </p>
      <div className="space-y-4">
        <div>
          <p className="font-semibold">GitHub:</p>
          <a
            href="https://github.com/HiwarkhedePrasad"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            Visit my GitHub Profile
          </a>
        </div>
        <div>
          <p className="font-semibold">LinkedIn:</p>
          <a
            href="https://in.linkedin.com/in/prasad-hiwarkhede-1b779627a"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            Visit my LinkedIn Profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
