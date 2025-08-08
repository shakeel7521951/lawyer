"use client";
import { useSearchParams } from "next/navigation";
import BlogPosts from "./../blog/BlogPosts";

import { IoIosArrowRoundBack } from "react-icons/io";
import Link from 'next/link'

export default function BlogDeta() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const post = BlogPosts.find((p) => p.id.toString() === id);

  if (!post) {
    return <p className="text-center py-10">Post not found</p>;
  }

  return (
    <>
    <div className=" w-full px-10 py-10">
       <Link href="/blog">  <button
              type="submit"
              className=" mr-10 flex items-center gap-2 cursor-pointer w-full md:w-auto px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center"
            >
              <IoIosArrowRoundBack />
Back to Blog
              
            </button></Link>
    </div>
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Blog Content */}
      <article className="bg-white rounded-xl shadow-lg overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-96 object-cover"
        />
        <div className="p-6 md:p-8">
          <div className="flex justify-between items-start">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              {post.title}
            </h1>
           
          </div>
          <p className="mt-2 text-gray-500 text-sm">{post.date}</p>
          
          <div className="prose max-w-none mt-6 text-gray-700">
            <p className="text-lg font-medium mb-4">
              {post.content || post.description}
            </p>
            <div className="space-y-4">
              <p>{post.detail}</p>
              {post.detail2 && <p>{post.detail2}</p>}
            </div>
          </div>
        </div>
      </article>

      {/* Enhanced Contact Form */}
      <div className="mt-12 bg-gradient-to-r from-blue-50 to-amber-50 rounded-xl shadow-lg overflow-hidden">
        <div className="p-6 md:p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-1">
            Need Help With This Topic?
          </h2>
          <p className="text-gray-600 mb-6">
            Contact our legal experts for personalized advice
          </p>
          
          <form className="space-y-4">
          
            
            <div>
              <label htmlFor="question" className="block text-sm font-medium text-gray-700 mb-1">
               
              </label>
              <textarea
                id="question"
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                placeholder={`Message`}
              ></textarea>
            </div>
            
            <div className="flex items-center">
              <input
                id="consent"
                type="checkbox"
                className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded"
              />
              <label htmlFor="consent" className="ml-2 block text-sm text-gray-700">
                I agree to receive communications about this inquiry
              </label>
            </div>
            
            <button
              type="submit"
              className="mt-4 w-full md:w-auto px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center"
            >
              Send Message
              
            </button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
}