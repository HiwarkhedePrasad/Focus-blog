const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Info */}
          <div>
            <h2 className="text-xl font-bold text-white">MyBlog</h2>
            <p className="mt-4 text-gray-400">
              Your daily dose of inspiration, insights, and stories. Join us to
              explore the world through words.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-bold text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#home" className="hover:text-blue-400 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-blue-400 transition">
                  About
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:text-blue-400 transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-400 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-bold text-white">Follow Us</h3>
            <ul className="mt-4 flex space-x-4">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.465.099 2.794.143v3.24h-1.917c-1.504 0-1.795.715-1.795 1.763v2.314h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.325-.593 1.325-1.326V1.326C24 .593 23.407 0 22.675 0z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.608 1.794-1.574 2.163-2.724-.949.564-2.001.974-3.127 1.195-.896-.955-2.173-1.55-3.591-1.55-2.717 0-4.92 2.203-4.92 4.92 0 .386.045.763.127 1.125C7.691 8.094 4.066 6.13 1.64 3.161c-.423.722-.666 1.561-.666 2.475 0 1.708.87 3.213 2.188 4.096-.806-.026-1.566-.247-2.228-.616v.062c0 2.385 1.697 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.316 0-.624-.031-.927-.089.625 1.951 2.444 3.376 4.6 3.417-1.68 1.317-3.808 2.103-6.114 2.103-.398 0-.788-.023-1.175-.067C2.905 20.358 6.355 22 10.067 22c12.072 0 18.675-10.006 18.675-18.675 0-.285-.007-.568-.02-.85 1.282-.927 2.396-2.084 3.274-3.405z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c-5.488 0-9.937 4.449-9.937 9.937 0 4.388 2.855 8.14 6.785 9.448.497.093.676-.216.676-.479 0-.237-.007-.868-.013-1.703-2.763.602-3.348-1.337-3.348-1.337-.452-1.149-1.103-1.455-1.103-1.455-.902-.617.069-.605.069-.605 1.004.07 1.533 1.032 1.533 1.032.89 1.528 2.336 1.087 2.906.831.091-.645.349-1.087.634-1.338-2.209-.252-4.535-1.105-4.535-4.917 0-1.086.387-1.975 1.022-2.671-.102-.252-.442-1.27.097-2.647 0 0 .832-.267 2.73 1.021a9.548 9.548 0 0 1 2.487-.335c.844.004 1.692.114 2.487.335 1.897-1.288 2.729-1.021 2.729-1.021.539 1.377.199 2.395.098 2.647.635.696 1.021 1.585 1.021 2.671 0 3.823-2.33 4.661-4.548 4.908.36.31.678.924.678 1.861 0 1.344-.012 2.428-.012 2.754 0 .265.179.575.683.477 3.93-1.308 6.782-5.061 6.782-9.448 0-5.488-4.449-9.937-9.937-9.937z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-8"></div>

        {/* Copyright Section */}
        <div className="text-center text-sm text-gray-500 mt-4">
          © {new Date().getFullYear()} MyBlog. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
