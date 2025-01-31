import React from 'react';
import BlogComponent23 from "../../../Assets/BlogComponent23.png"
import { Link } from 'react-router-dom';


const posts = [
  {
    title: 'The Psychology of Gardening: Nurturing Your Mind Through Nature',
    date: 'September 27th, 2023',
    author: 'by admin',
    excerpt: 'Have you ever wondered why the simple act of tending to plants can be so profoundly rewarding?',
    image: BlogComponent23,
  },
  {
    title: 'The Psychology of Gardening: Nurturing Your Mind Through Nature',
    date: 'September 27th, 2023',
    author: 'by admin',
    excerpt: 'Have you ever wondered why the simple act of tending to plants can be so profoundly rewarding?',
     image: BlogComponent23,
  }, 
  {
    title: 'The Psychology of Gardening: Nurturing Your Mind Through Nature',
    date: 'September 27th, 2023',
    author: 'by admin',
    excerpt: 'Have you ever wondered why the simple act of tending to plants can be so profoundly rewarding?',
    image: BlogComponent23,
  },
  {
    title: 'The Psychology of Gardening: Nurturing Your Mind Through Nature',
    date: 'September 27th, 2023',
    author: 'by admin',
    excerpt: 'Have you ever wondered why the simple act of tending to plants can be so profoundly rewarding?',
    image: BlogComponent23,
  },
  {
    title: 'The Psychology of Gardening: Nurturing Your Mind Through Nature',
    date: 'September 27th, 2023',
    author: 'by admin',
    excerpt: 'Have you ever wondered why the simple act of tending to plants can be so profoundly rewarding?',
    image: BlogComponent23,
  },
  {
    title: 'The Psychology of Gardening: Nurturing Your Mind Through Nature',
      date: 'September 27th, 2023',
      author: 'by admin',
      excerpt: 'Have you ever wondered why the simple act of tending to plants can be so profoundly rewarding?',
    image: BlogComponent23,
  },
];

function Category() {
  return (
    <div className="container mx-auto w-full h-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full h-auto">
        {posts.map((post, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={post.image} alt={post.title} className="w-full h-auto object-cover" />
            <div className="p-4">
              <h2 className="text-2xl text-left font-semibold text-gray-800">{post.title}</h2>
              <p className="text-sm mt-2 text-gray-500 text-left">By {post.author} | {post.date}</p>
              <p className="text-gray-700 mt-2 text-left">{post.excerpt}</p>
              {/* <a href="#" className="text-orange-500 hover:underline mt-4 inline-flex">Read More &rarr;</a> */}
              <Link to="#" className="text-orange-500 hover:underline mt-4 inline-flex text-left">Read More &rarr;</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
