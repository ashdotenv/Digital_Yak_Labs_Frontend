import React from "react";

const Portfolio = () => {
  return (
    <section className="py-16">
    <div className="max-w-screen-xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-12">
        Our <span className="text-purple-600">Work</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Project 1 */}
        <div className="relative group bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition duration-500 transform hover:scale-110 hover:rotate-2 hover:skew-x-6">
          <img
            src="uploads/Screenshot 2024-12-30 171628.png"
            alt="School website"
            className="w-full h-48 object-cover group-hover:scale-125 transition-transform duration-500"
          />
  
          {/* Hover Content */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-purple-900 to-transparent opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition-opacity duration-500">
            <h3 className="text-2xl font-extrabold text-white mb-4 animate-float">
              School Website
            </h3>
            <a
              href="https://badimalikasecschool.netlify.app/#"
              className="bg-yellow-500 text-black px-8 py-3 rounded-full font-bold hover:bg-yellow-600 transition-transform duration-300 transform hover:scale-105"
            >
              Visit Project
            </a>
          </div>
        </div>
  
        {/* Project 2 */}
        <div className="relative group bg-gradient-to-r from-blue-600 to-green-400 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition duration-500 transform hover:rotate-3 hover:skew-y-3">
          <img
            src="uploads/Screenshot 2024-12-29 085316.png"
            alt="Portfolio"
            className="w-full h-48 object-cover group-hover:blur-sm group-hover:grayscale transition-all duration-500"
          />
  
          {/* Hover Content */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-blue-900 to-transparent opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition-opacity duration-500">
            <h3 className="text-2xl font-extrabold text-white mb-4 animate-bounce">
              Portfolio
            </h3>
            <a
              href="https://abhayabikramshahi.netlify.app/"
              className="bg-red-600 text-white px-8 py-3 rounded-full font-bold hover:bg-red-700 transition-transform duration-300 transform hover:rotate-6"
            >
              Visit Project
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  );
};

export default Portfolio;
