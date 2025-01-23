'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface Post {
  title: string;
  publishedAt: string;
  excerpt: string;
  heroImage?: {
    url: string;
    alt: string;
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
    <div className="w-full bg-jet py-[5rem]">
      <div className="container">
        <h2 className="block text-selectiveyellow font-semibold pb-5">
          Latest News & Updates
        </h2>
        <p className="text-5xl font-semibold">
          Stay informed about water quality and solutions
        </p>
      </div>
      <div className="container pt-[5rem]">
        {posts.map((post, index) => (
          <div key={index} className={`flex flex-col gap-4 ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
            <div className="basis-1/3">
              <p className="text-sm text-gray-400">
                {new Date(post.publishedAt).toLocaleDateString('en-GB')}
              </p>
              <h3 className="text-2xl text-selectiveyellow pt-1 pb-5">{post.title}</h3>
              <p>{post.excerpt}</p>
            </div>
            <div className="basis-2/3">
              {post.heroImage && (
                <Image width={500} height={500} src={post.heroImage.url} alt={post.heroImage.alt} className="w-full h-auto object-cover" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};