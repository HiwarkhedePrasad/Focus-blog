import React from "react";

const ContentSection = ({ title, text, imageSrc, reverse }) => {
  return (
    <div
      className={`flex flex-col md:flex-row items-center md:items-stretch justify-between px-4 md:px-8 h-auto md:h-[75vh] ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Text Section */}
      <div className="flex flex-col justify-center p-8 rounded-lg max-w-lg w-full">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-black mb-4 pl-5">
          {title}
        </h2>
        <p className="text-black text-base sm:text-lg font-medium leading-relaxed pl-5">
          {text}
        </p>
      </div>

      {/* Image Section */}
      <div className="flex justify-center items-center relative h-auto md:h-full w-full md:w-1/2">
        <img
          src={imageSrc}
          alt="Family memories with a family photo"
          className="w-full h-auto object-contain rounded-lg"
        />
      </div>
    </div>
  );
};

export default ContentSection;
