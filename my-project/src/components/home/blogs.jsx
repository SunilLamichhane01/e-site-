import React from "react";

const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      title: "5 Tips for Healthy Indoor Plants",
      description:
        "Learn how to keep your indoor plants thriving with minimal effort.",
      author: "Sunil Lamichhane",
      image: "https://source.unsplash.com/400x250/?indoor-plant",
    },
    {
      id: 2,
      title: "Top Outdoor Plants for Your Garden",
      description:
        "Discover the best outdoor plants to make your garden vibrant and lively.",
      author: "Jane Doe",
      image: "https://source.unsplash.com/400x250/?outdoor-garden",
    },
    {
      id: 3,
      title: "Succulent Care 101",
      description:
        "Everything you need to know about growing and maintaining succulents.",
      author: "John Smith",
      image: "https://source.unsplash.com/400x250/?succulent",
    },
  ];

  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center
      bg-gradient-to-r from-yellow-100 via-green-100 to-green-200 px-6 py-16 mt-10"
    >
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
        What Our Customers Say
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl">
        {blogPosts.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2 text-gray-800">
                {blog.title}
              </h2>
              <p className="text-gray-600 mb-4">{blog.description}</p>
              <p className="text-sm text-gray-500">By {blog.author}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
