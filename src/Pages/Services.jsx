import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-screen-xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          Our <span className="text-blue-600">Services</span>
        </h2>
        <p className="text-gray-600 text-lg mb-12">
          We provide a wide range of innovative and results-driven services tailored to meet your business needs.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-gray-100 p-8 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
            <div className="text-blue-600 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 16v-4m4 0v4m4-4v4m1 4H7a2 2 0 01-2-2V5a2 2 0 012-2h10a2 2 0 012 2v13a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Web Development</h3>
            <p className="text-gray-600">
              Create high-performing websites with a focus on speed, user experience, and SEO.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-gray-100 p-8 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
            <div className="text-blue-600 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Digital Marketing</h3>
            <p className="text-gray-600">
              Boost your online presence with customized digital marketing strategies.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-gray-100 p-8 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
            <div className="text-blue-600 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 10h11M9 21V3m7 18l4-4-4-4"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">UI/UX Design</h3>
            <p className="text-gray-600">
              Design user-friendly and visually appealing interfaces to enhance user experience.
            </p>
          </div>

          {/* Service 4 */}
          <div className="bg-gray-100 p-8 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
            <div className="text-blue-600 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12h6M9 16h6m-6 4h6M5 8l7-7 7 7M5 21h14"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Cloud Solutions</h3>
            <p className="text-gray-600">
              Leverage the power of cloud computing for scalability and efficiency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
