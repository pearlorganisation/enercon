"use client";
import Image from 'next/image';
import Link from 'next/link';

// 1. Define the interface at the top
interface BlogContentProps {
  post: {
    title: string;
    date: string;
    image: string;
    description: string;
    content: string;
    author: string;
    keywords: string[];
    ogtag: string;
    twitterCard: string;
    Canonical: string;
  };
}

// 2. Use the interface in the component
export default function BlogContent({ post }: BlogContentProps) {
  return (
    <article className="post-container">
      <Link href="/blogs" className="back-link">← Back to Blog</Link>
      
      <h1 className="post-title">{post.title}</h1>
      <p className="post-date">{post.date}</p>
      
      <div className="image-wrapper">
        <Image 
          src={post.image} 
          alt={post.title}
          fill
          sizes="(max-width: 800px) 100vw, 800px"
          className="post-image"
          priority
        />
      </div>
      
      <div className="post-content">
        <p className="description">{post.description}</p>
        <div 
          className="html-content"
          dangerouslySetInnerHTML={{ __html: post.content }} 
        />
      </div>

      <style jsx>{`
        .post-container { max-width: 800px; margin: 0 auto; padding: 80px 20px; }
        
        .image-wrapper { 
          position: relative !important; 
          width: 100% !important; 
          height: 450px !important; 
          margin-bottom: 40px; 
          border-radius: 24px;
          overflow: hidden; 
        }

        .post-image { 
          object-fit: cover !important; 
        }

        .post-title { font-size: 3.5rem; color: #111; margin-bottom: 20px; line-height: 1.1; }
        .post-content { font-size: 1.2rem; line-height: 1.8; color: #374151; }
        .description { font-weight: 600; font-size: 1.4rem; margin-bottom: 20px; }
        
        @media (max-width: 768px) { 
          .post-title { font-size: 2.5rem; }
          .image-wrapper { height: 250px !important; } 
        }
      `}</style>
    </article>
  );
}