import { blogData } from "../data.js";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import BlogContent from "./BlogContent";

type Params = Promise<{ slug: string }>;

type PageProps = {
  params: Params;
};

export async function generateMetadata(
  { params }: PageProps
): Promise<Metadata> {
  const { slug } = await params;

  const post = blogData.find((b) => b.slug === slug);

  if (!post) {
    return {
      title: "Blog Not Found",
    };
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: [post.image],
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  const post = blogData.find((b) => b.slug === slug);

  if (!post) {
    notFound();
  }

  return <BlogContent post={post} />;
}