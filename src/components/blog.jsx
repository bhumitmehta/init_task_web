"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import ArticleTagsList from './tags';
import blogData from './blogData.json';
import Image from 'next/image';

const Blog = () => {
  const [hoveredPostId, setHoveredPostId] = useState(null);

  return (
    <>
      <div className="bg-slate-100 p-8">
        <div className="container mx-auto">
          <p className="text-gray-600">
            Stay updated with our latest articles and insights.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-6 text-black flex flex-wrap">
            {blogData.blogPosts.map((post) => (
              <div
                className={`p-4 rounded-lg border-2 shadow-gray-800 border-zinc-500 overflow-hidden z-0 bg-zinc-100 relative ${
                  hoveredPostId === post.id ? ' w-full h-full z-30 ':'max-md:w-full max-lg:w-full lg:w-full   max-sm:w-full h-48 md:h-48 '
                }`}
                key={post.id}
                onMouseEnter={() => setHoveredPostId(post.id)}
                onMouseLeave={() => setHoveredPostId(null)}
              >
                <h4 className="font-raleway text-xs">{post.date}</h4>
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-black">{post.content}</p>

                <div className="mt-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-slate-300 text-slate-800 px-2 py-1 mr-2 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {/* <Image
                  src={post.images}
                  width={300}
                  height={200}
                  className={`relative top-0 left-0 transition-opacity duration-300 ${
                    hoveredPostId === post.id ? 'opacity-100' : 'opacity-0'
                  }`}
                /> */}
                <div className={`relative top-0 left-0 transition-opacity duration-300 ${
                    hoveredPostId === post.id ? 'opacity-100' : 'opacity-0 py-2'
                  }`}><span className='font-light'> Preface :<br/>  </span>{post.description}</div>
              </div>
            ))}
          </div>
        </div>
        <ArticleTagsList />
      </div>
    </>
  );
};

export default Blog;


