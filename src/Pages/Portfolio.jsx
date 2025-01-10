import React from "react";

const Portfolio = () => {
  return (
    <section className="py-16">
      <div className="max-w-screen-xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our <span className="text-blue-600">Work</span>
        </h2>
        <p className="text-2xl font-semibold text-center">
          <a href="/templates/template.html">Visit</a>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div className="relative group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
            <img
              src="uploads/Screenshot 2024-12-30 171628.png"
              alt="School website"
              className="w-full h-48 object-cover"
            />

            {/* Hover Content */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-xl font-bold text-white mb-2">
                School website
              </h3>
              <a
                href="https://badimalikasecschool.netlify.app/#"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-700"
              >
                https://badimalikasecschool.netlify.app/
              </a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="relative group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
            <img
              src="uploads/Screenshot 2024-12-29 085316.png"
              alt="School Digital Version"
              className="w-full h-48 object-cover"
            />

            {/* Hover Content */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-xl font-bold text-white mb-2">Portfolio</h3>
              <a
                href="https://abhayabikramshahi.netlify.app/"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-700"
              >
                https://abhayabikramshahi.netlify.app/
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
