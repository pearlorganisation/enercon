// import { blogData } from "../data.js";
// import { notFound } from "next/navigation";
// import type { Metadata } from "next";
// import BlogContent from "./BlogContent";

// type Params = Promise<{ slug: string }>;

// type PageProps = {
//   params: Params;
// };

// export async function generateMetadata(
//   { params }: PageProps
// ): Promise<Metadata> {
//   const { slug } = await params;

//   const post = blogData.find((b) => b.slug === slug);

//   if (!post) {
//     return {
//       title: "Blog Not Found",
//     };
//   }

//   return {
//     title: post.title,
//     description: post.description,
//     openGraph: {
//       title: post.title,
//       description: post.description,
//       images: [post.image],
//     },
//   };
// }

// export default async function Page({ params }: PageProps) {
//   const { slug } = await params;

//   const post = blogData.find((b) => b.slug === slug);

//   if (!post) {
//     notFound();
//   }

//   return <BlogContent post={post} />;
// }


import { blogData } from "../data.js";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import BlogContent from "./BlogContent";

// Define the shape of your params
type Params = Promise<{ slug: string }>;

type PageProps = {
  params: Params;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogData.find((b) => b.slug === slug);

  if (!post) {
    return { title: "Blog Not Found" };
  }

  return {
    title: post.title,
    description: post.description,
    // Adding the canonical URL from your data
    alternates: {
      canonical: post.Canonical,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: post.Canonical,
      images: [post.ogtag || post.image], // Fallback to main image if ogtag is missing
      type: "article",
    },
    twitter: {
      card: post.twitterCard as "summary" | "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.ogtag || post.image],
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
