import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
 

  return (
    <div className="bg-gray-100">
     

      {/* Hero Section */}
      <section className="relative bg-gray-50">
        <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between py-20 px-6 lg:px-16">
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-800">
              Empower Your Ideas <br />
              <span className="text-blue-500">With Innovation</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Building cutting-edge solutions for businesses worldwide. Let's
              shape the future together with smart, scalable software.
            </p>
            <div className="mt-8">
              <Link
                to="/services"
                className="px-6 py-3 bg-blue-500 text-white rounded-md shadow-lg hover:bg-blue-400 transition"
              >
                Explore Services
              </Link>
            </div>
          </div>

          {/* Animated Illustration */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end mt-10 lg:mt-0">
            <div className="w-4/5 lg:w-full">
              <img
                src="uploads/hero.svg"
                loading="lazy"
                alt="Hero Illustration"
              />
            </div>
          </div>
        </div>
      </section>

    
    </div>
  );
};

export default Home;
