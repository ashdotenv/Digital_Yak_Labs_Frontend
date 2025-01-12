import React from "react";
import { Link } from "react-router-dom";

function Blogs() {
  const blogs = [
    {
      id: 1,
      title: "Generative AI: Transforming Industries in 2025",
      image: '../uploads/ai-2025.png', // Assign the imported image directly
      link: '../blog/Generative-AI-Transforming-Industries-in-2025.jsx',
    },
    // Uncomment and add other blogs if needed
    {
      id: 2,
      title: "CSS Tips",
      image: "https://via.placeholder.com/400x250", // Replace with actual image URL
      link: "#",
    },
    {
      id: 3,
      title: "JavaScript ES6",
      image: "https://via.placeholder.com/400x250", // Replace with actual image URL
      link: "#",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-black mb-12">Latest Blogs</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
              {/* Blog Image */}
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-56 object-cover transition-all duration-300 hover:scale-110"
              />
              <div className="p-6">
                {/* Blog Link */}
                <Link
                  to={blog.link}
                  className="text-lg font-semibold text-black hover:text-red-600 dark:text-white dark:hover:text-red-600 transition-colors duration-300"
                >
                  {blog.title}
                </Link>
                <p className="mt-2 text-sm text-gray-500">Posted on January 12, 2025</p> {/* Example Date */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blogs;
