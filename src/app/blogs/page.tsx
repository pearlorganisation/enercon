"use client";
import PageHeader from '@/components/PageHeader';
import React from 'react';
import { blogData } from './data.js'; // Ensure data.js exports the array
import Link from 'next/link';
import Image from 'next/image.js';

// Define the shape of your blog data
interface BlogPost {
  id: number;
  slug: string;
  title: string;
  date: string;
  image: string;
  description: string;
  content : string;
}

const Page: React.FC = () => {
  return (
    <div className="">
      <PageHeader title="Our blogs" />

      <div className="blog-grid blog-wrapper ">
        {blogData.map((post: BlogPost) => (
          <Link href={`/blogs/${post.slug}`} key={post.id} className="blog-card">
            <div className="img-container">
              <Image src={post.image} alt={post.title} className="blog-img" />
              <div className="overlay"></div>
            </div>
            
            <div className="content">
              <span className="badge">{post.date}</span>
              <h2 className="title">{post.title}</h2>
              <p className="desc">{post.description}</p>
              <div className="read-more">
                <span>Read Article</span>
                <div className="arrow">→</div>
              </div>
            </div>
          </Link>
        ))}
      </div>

  <style jsx>{`
        .blog-wrapper {
          max-width: 1200px;
          margin: 0 auto;
          padding: 40px 20px;
        }
        .blog-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 32px;
          margin-top: 50px;
        }

        /* Card Styling */
        .blog-card {
          background: #f8f9fa; /* Light subtle gray background */
          border-radius: 20px;
          overflow: hidden;
          text-decoration: none;
          color: #333;
          border: 1px solid rgba(0,0,0,0.05);
          transition: all 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
          display: flex;
          flex-direction: column;
          box-shadow: 0 4px 6px rgba(0,0,0,0.02);
        }

        /* Hover Effect: Lifts up and turns white for contrast */
        .blog-card:hover {
          transform: translateY(-12px);
          background: #ffffff;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
          border-color: rgba(0, 112, 243, 0.1);
        }
        
        /* Image Styling */
        .img-container {
          width: 100%;
          height: 220px;
          overflow: hidden;
          background: #e9ecef;
        }
        .blog-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        .blog-card:hover .blog-img {
          transform: scale(1.05);
        }

        /* Content Styling */
        .content {
          padding: 28px;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }
        .badge {
          font-size: 0.75rem;
          color: #666;
          text-transform: uppercase;
          letter-spacing: 1.2px;
          margin-bottom: 12px;
          font-weight: 700;
        }
        .title {
          margin: 0 0 16px 0;
          font-size: 1.5rem;
          line-height: 1.3;
          color: #111;
          font-weight: 700;
        }
        .desc {
          font-size: 0.95rem;
          color: #777;
          line-height: 1.7;
          margin-bottom: 24px;
          flex-grow: 1;
        }
        .read-more {
          color: #000;
          font-weight: 700;
          font-size: 0.9rem;
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: auto;
          padding-top: 10px;
        }
        .read-more span {
          transition: transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        .blog-card:hover .read-more span {
          transform: translateX(8px);
        }

        /* Responsive Breakpoints */
        @media (max-width: 600px) {
          .blog-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default Page;