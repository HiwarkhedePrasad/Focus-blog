import HeroImg from "../images/hero.png";
import { Link } from "react-router-dom";
const HeroSection = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
        {/* Text Content */}
        <div className="text-center md:text-left md:w-1/2 space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 leading-tight">
            Welcome to <span className="text-blue-500">Focus-Blog</span>
          </h1>
          <p className="text-gray-600 text-lg">
            Discover amazing stories, insights, and tips. Dive into a world of
            creativity and inspiration.
          </p>
          <div className="space-x-4">
            <Link
              to="/explore"
              className="px-6 py-3 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition"
            >
              Explore Blogs
            </Link>
            <Link
              to="/createBlog"
              className="px-6 py-3 bg-gray-100 text-gray-800 rounded-md shadow-md hover:bg-gray-200 transition"
            >
              Create Blog
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="mt-10 md:mt-0 md:w-1/2">
          <img
            src={HeroImg}
            alt="Hero Illustration"
            className="w-full rounded-lg "
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
