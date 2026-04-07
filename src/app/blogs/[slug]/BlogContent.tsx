"use client";
import Image from 'next/image';
import Link from 'next/link';

interface BlogContentProps {
  post: {
    title: string;
    date: string;
    image: string;
    description: string;
    content: string;
  };
}

export default function BlogContent({ post }: BlogContentProps) {
  return (
    <article className="post-container">
      <Link href="/blogs" className="back-link">← Back to Blog</Link>
      
      <h1 className="post-title">{post.title}</h1>
      <p className="post-date">{post.date}</p>
      
      <Image src={post.image} alt={post.title} className="post-image" />
      
      <div className="post-content">
        <p>{post.description}</p>
        <p style={{ marginTop: '20px' }}>{post.content}</p>
      </div>

      <style jsx>{`
        .post-container { max-width: 800px; margin: 0 auto; padding: 80px 20px; }
        .back-link { display: inline-block; margin-bottom: 30px; color: #666; text-decoration: none; font-weight: 500; transition: color 0.3s; }
        .back-link:hover { color: #0070f3; }
        .post-title { font-size: 3.5rem; color: #111; margin-bottom: 20px; line-height: 1.1; letter-spacing: -1px; }
        .post-date { font-size: 1rem; color: #0070f3; margin-bottom: 40px; font-weight: 600; text-transform: uppercase; }
        .post-image { width: 100%; height: 450px; object-fit: cover; border-radius: 24px; margin-bottom: 40px; box-shadow: 0 20px 40px rgba(0,0,0,0.1); }
        .post-content { font-size: 1.2rem; line-height: 1.8; color: #374151; }
        @media (max-width: 768px) { .post-title { font-size: 2.5rem; } .post-image { height: 250px; } }
      `}</style>
    </article>
  );
}