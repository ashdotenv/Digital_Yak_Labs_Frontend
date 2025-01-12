import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const About = () => {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };

  return (
    <div className="min-h-screen  flex flex-col items-center justify-center px-6 py-10">
    {/* Animated Heading */}
    <motion.h1
      className="text-5xl font-bold text-gray-800 mb-8"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      About Us
    </motion.h1>

    {/* Animated Content */}
    <motion.div
      className="space-y-6 max-w-4xl text-center text-gray-700"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <p className="text-lg">
        At <span className="font-semibold">Digital Yak Labs</span>, we
        specialize in building cutting-edge solutions tailored to your
        business needs. As a team of skilled developers, designers, and
        innovators, we transform ideas into impactful digital products.
      </p>

      <p className="text-lg">
        With expertise in <span className="font-semibold">Web Development</span>,{" "}
        <span className="font-semibold">UI/UX Design</span>,{" "}
        <span className="font-semibold">Mobile App Development</span>, and{" "}
        <span className="font-semibold">Cloud Services</span>, we empower
        businesses to thrive in the digital landscape.
      </p>

      <p className="text-lg">
        Our mission is to create technology that bridges the gap between
        innovation and practicality, ensuring seamless user experiences and
        sustainable growth for our clients.
      </p>
    </motion.div>

    {/* Animated Services Section */}
    <motion.div
      className="mt-10 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-5xl"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.3,
          },
        },
      }}
    >
      {[
        { title: "Web Development", description: "Responsive and scalable websites using modern frameworks." },
        { title: "Mobile App Development", description: "Native and hybrid apps for iOS and Android platforms." },
        { title: "UI/UX Design", description: "Intuitive designs to create seamless user experiences." },
        { title: "Cloud Solutions", description: "Secure and reliable cloud infrastructure for your needs." },
        { title: "E-commerce", description: "Custom online stores with secure payment integrations." },
        { title: "Digital Marketing", description: "Strategies to enhance your brand's online visibility." },
      ].map((service, index) => (
        <motion.div
          key={index}
          className="bg-white shadow-md rounded-lg p-6 border-t-4 border-blue-500"
          whileHover={{ scale: 1.05 }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            {service.title}
          </h3>
          <p className="text-gray-600">{service.description}</p>
        </motion.div>
      ))}
    </motion.div>

    {/* Call-to-Action Button */}
    <motion.div
      className="mt-12"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <button className="px-8 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
        Get in Touch
      </button>
    </motion.div>
  </div>
  );
};

export default About;
