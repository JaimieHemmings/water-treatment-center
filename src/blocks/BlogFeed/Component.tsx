'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import SectionTitle from "@/components/SectionTitle";
import Link from 'next/link';

interface Post {
  title: string;
  publishedAt: string;
  excerpt: string;
  heroImage?: {
    url: string;
    alt: string;
  };
  slug: string;
  meta: {
    description: string;
  };
}

export const BlogFeed: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/posts?limit=3&sort=-createdAt');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Fetched posts:', data.docs);
        setPosts(data.docs);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching posts:', err);
        setError(err instanceof Error ? err : new Error('Unknown error'));
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <div className="h-screen bg-jet">Loading posts...</div>;
  if (error) return <div className="h-screen bg-jet">Error loading posts: {error.message}</div>;
  if (!posts.length) {
    console.log('No posts found');
    return <div className="h-screen bg-jet">No posts found</div>;
  }

  return (
    <div className="w-full bg-jet py-[5rem] relative">
      <Image
        src="/dots.svg"
        alt="Decorative dots"
        className="absolute bottom-4 right-0 z-10 scale-x-[-1] w-48 h-72 md:w-48 md:h-72"
        height={300}
        width={200}
      />
      <Image
        src="/dots.svg"
        alt="Decorative dots"
        className="absolute top-4 left-0 z-10 w-48 h-72 md:w-48 md:h-72"
        height={300}
        width={200}
      />
      <SectionTitle title="Latest News & Updates" subtitle="Stay informed about water quality and solutions" />
      <div className="container pt-[5rem] flex flex-col justify-normal gap-10 relative z-10">
        {posts.map((post, index) => (
          <div key={index} className={`flex flex-col gap-4 ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
            <div className="basis-1/3">
              <p className="text-sm text-gray-400">
                {new Date(post.publishedAt).toLocaleDateString('en-GB')}
              </p>
              <h3 className="text-2xl text-selectiveyellow pt-1 pb-5">{post.title}</h3>
              <p className="text-white">{post.meta.description}</p>
              <Link href={`/news/${post.slug}`} className="inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 px-8 mt-3 border bg-selectiveyellow text-jet border-jet hover:bg-jet hover:text-selectiveyellow text-lg hover:border-selectiveyellow">
                Read More
              </Link>
            </div>
            <div className="basis-2/3">
              {post.heroImage && (
                <Image width={630} height={420} src={post.heroImage.url} alt={post.heroImage.alt} className="w-full h-auto object-cover rounded-xl" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};