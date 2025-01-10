import React, { useState } from "react";
import { Link } from "react-router-dom";

const About = () => {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };

  return (
    <div>
  

      {/* About Us Section */}
      <section id="about-us" className="py-16 bg-white">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                About <span className="text-blue-600">Digital Yak Labs</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                <span className="font-bold text-black">Digital Yak Labs</span> is
                a leading freelancing group operating in the Karnali and Bagmati
                provinces, with over three years of business expertise and
                extensive experience in the software field. We specialize in
                delivering high-quality products, including web and app
                development, tailored digital systems, and innovative solutions.
              </p>
              <Link
                to="/contact"
                className="bg-blue-600 text-white py-3 px-8 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 text-lg font-medium"
              >
                Get in Touch
              </Link>
            </div>

            {/* Image Section */}
            <div className="relative">
              <img
                src="uploads/offcie.jpg"
                alt="About Digital Yak Labs"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute top-0 left-0 bg-blue-600 text-white px-4 py-2 rounded-tr-lg">
                Since 2024
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-screen-xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            What Our Clients Say
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-600 italic">
                "Their e-commerce platform transformed our business. Now we’re
                able to showcase and sell our products globally. The team was
                cooperative, skilled, and always delivered on time."
              </p>
              <h4 className="text-blue-600 font-semibold mt-4">
                - Bikram Gurung, Nepal Craft Exports
              </h4>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-600 italic">
                "The app they built for us has revolutionized how we connect
                with our customers. It's intuitive and beautifully designed.
                Digital Yak Labs truly understands what businesses in Nepal
                need."
              </p>
              <h4 className="text-blue-600 font-semibold mt-4">
                - Priyanka Karki, Everest Coffee Roasters
              </h4>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-600 italic">
                "Digital Yak Labs exceeded our expectations! Their team
                developed a booking system for our trekking agency that is both
                user-friendly and efficient. We've seen a significant increase
                in customer satisfaction since implementing it."
              </p>
              <h4 className="text-blue-600 font-semibold mt-4">
                - Suman Shrestha, Himalayan Treks Pvt. Ltd.
              </h4>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default About;
