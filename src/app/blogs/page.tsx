"use client";
import PageHeader from '@/components/PageHeader';
import React from 'react';
import { blogData } from './data.js'; 
import Link from 'next/link';
import Image from 'next/image'; // Corrected import path

const Page: React.FC = () => {
  return (
    <div className="">
      <PageHeader title="Our blogs" />

      <div className="blog-grid blog-wrapper">
        {blogData.map((post) => (
          <Link href={`/blogs/${post.slug}`} key={post.id} className="blog-card">
            <div className="img-container">
              {/* Using fill + object-fit for perfect grid images */}
              <Image 
                src={post.image} 
                alt={post.title} 
                fill 
                sizes="(max-width: 768px) 100vw, 33vw"
                className="blog-img" 
              />
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

        .blog-card {
          background: #f8f9fa;
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

        .blog-card:hover {
          transform: translateY(-12px);
          background: #ffffff;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }
        
        .img-container {
          position: relative; /* Required for 'fill' */
          width: 100%;
          height: 220px;
          overflow: hidden;
        }
        
        .blog-img {
          object-fit: cover;
          transition: transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        
        .blog-card:hover .blog-img {
          transform: scale(1.05);
        }

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
        }
        
        @media (max-width: 600px) {
          .blog-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
};

export default Page;