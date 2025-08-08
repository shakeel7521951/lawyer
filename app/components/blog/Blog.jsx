'use client';
import React, { useState } from "react";
import BlogPosts from "./BlogPosts";
import { CiSearch } from "react-icons/ci";
import { useRouter } from "next/navigation";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4;
  const router = useRouter();

  // Filter blog posts by search term
  const filteredPosts = BlogPosts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const moveToDetailPg = (blog) => {
    router.push(`/blogdetail?id=${blog.id}`);
  };

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Al Khaldi Law Firm Blogs
        </h1>
        <p className="text-lg text-gray-600">
          Stay updated with our latest legal tips, insights, and news to help you make informed decisions.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-10 px-10 mx-auto max-w-7xl">
        {/* Left Sidebar */}
        <div className="md:w-1/3 md:sticky top-24 border h-fit border-gray-200 rounded-lg p-5 bg-white shadow">
          {/* Search Bar */}
          <div className="flex items-center border border-gray-300 rounded-md overflow-hidden mb-6">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-grow px-3 py-2 focus:outline-none"
              placeholder="Search blog posts..."
            />
            <span className="px-3 text-gray-500">
              <CiSearch size={22} />
            </span>
          </div>

          {/* Recent Posts */}
          <h2 className="text-lg font-semibold mb-4 border-b pb-2">Recent Posts</h2>
          {BlogPosts.slice(0, 4).map((post) => (
            <div
              key={post.id}
              className="flex flex-col gap-5 lg:flex-row items-center mb-4 hover:bg-gray-100 p-2 rounded-md transition cursor-pointer"
              onClick={() => moveToDetailPg(post)}
            >
              <img
                src={post.image}
                alt={post.title}
                className="lg:w-16 w-40 lg:h-16 object-cover rounded"
              />
              <div className="ml-3 text-sm">
                <h3 className="font-medium text-gray-800 leading-snug">{post.title}</h3>
                <p className="text-gray-500 text-xs">{post.date}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="md:w-2/3">
          <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8">
            {currentPosts.length > 0 ? (
              currentPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-5">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">
                      {post.title}
                    </h2>
                    <p className="text-sm text-gray-500 mb-4">{post.date}</p>
                    <p className="text-gray-600 mb-4">{post.description}</p>
                    <button
                      className="bg-blue-600 text-white cursor-pointer px-4 py-2 rounded-md hover:bg-blue-700 transition"
                      onClick={() => moveToDetailPg(post)}
                    >
                      Read More
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500 col-span-full">No blog posts found.</p>
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-8">
              {/* Previous */}
              <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-1 bg-gray-300 cursor-pointer rounded disabled:opacity-50"
              >
                Previous
              </button>

              {/* Page Numbers */}
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index + 1}
                  onClick={() => goToPage(index + 1)}
                  className={`px-3 py-1 cursor-pointer rounded ${
                    currentPage === index + 1
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-800"
                  }`}
                >
                  {index + 1}
                </button>
              ))}

              {/* Next */}
              <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-3 py-1 bg-gray-300 cursor-pointer rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;
