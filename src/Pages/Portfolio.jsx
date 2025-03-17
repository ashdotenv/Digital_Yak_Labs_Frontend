import React from "react";

const Portfolio = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-screen-xl mx-auto px-6">
        <h2 className="text-4xl font-semibold text-center text-gray-800 mb-12">
          Our <span className="text-purple-600">Work</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Project 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden group transition-transform duration-300 hover:scale-105">
            <img
              src="uploads/Screenshot 2024-12-30 171628.png"
              alt="School website"
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800">Client: Badimalika Secondary School</h2>
              <p className="text-gray-600 mt-3">
                We created the portfolio for Badimalika Secondary School based on the materials they provided for the website. We're proud to have worked on this project, and we look forward to future collaborations.{" "}
                <a href="#" className="text-purple-600 font-medium underline">Visit Site</a>
              </p>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden group transition-transform duration-300 hover:scale-105">
            <img
              src="uploads/Screenshot 2024-12-29 085316.png"
              alt="Portfolio"
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800">Client: Abhaya Bikram Shahi</h2>
              <p className="text-gray-600 mt-3">
                We created the portfolio for Abhaya Bikram Shahi based on the materials he provided. We're grateful for the opportunity to work with him and hope to continue collaborating in the future.{" "}
                <a href="#" className="text-purple-600 font-medium underline">Visit Site</a>
              </p>
            </div>
          </div>

          {/* Project 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden group transition-transform duration-300 hover:scale-105">
            <img
              src="uploads/Screenshot 2024-12-29 085316.png"
              alt="Portfolio"
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800">Client: Ratna Parsad Baral</h2>
              <p className="text-gray-600 mt-3">
                We developed the portfolio for Ratna Parsad Baral, using the materials he provided. We're honored to have been part of this project and look forward to future opportunities to collaborate.{" "}
                <a href="#" className="text-purple-600 font-medium underline">Visit Site</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
