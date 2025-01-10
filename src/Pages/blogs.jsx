import React from "react";

function Blogs() {
  const blogs = [
    { id: 1, title: "React Basics", description: "Learn the basics of React.", link: "#" },
    { id: 2, title: "CSS Tips", description: "Tips for mastering CSS.", link: "#" },
    { id: 3, title: "JavaScript ES6", description: "Introduction to ES6 features.", link: "#" },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Latest Blogs</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold mb-4">{blog.title}</h3>
              <p className="text-gray-700 mb-4">{blog.description}</p>
              <a
                href={blog.link}
                className="text-indigo-600 hover:underline font-medium"
              >
                Read More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blogs;
