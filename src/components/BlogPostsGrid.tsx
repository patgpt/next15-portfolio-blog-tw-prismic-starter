
import React from 'react';
import Link from 'next/link';
import type { BlogPost } from "@/types/types";

interface BlogPostsGridProps {
  posts: BlogPost[];
}

export const BlogPostsGrid: React.FC<BlogPostsGridProps> = ({ posts }) => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <div key={post.id} className="border p-4 rounded">
          <h3 className="text-xl font-semibold">
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </h3>
          <p className="mt-2 text-gray-600">{post.excerpt}</p>
          <Link href={`/blog/${post.slug}`} className="text-blue-500 mt-4 inline-block">
            Read more
          </Link>
        </div>
      ))}
    </div>
  );
};