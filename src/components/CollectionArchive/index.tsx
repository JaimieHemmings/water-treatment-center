import { cn } from 'src/utilities/cn';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const CollectionArchive: React.FC<any> = ({ posts }) => {
  console.log('posts:', posts);
  return (
    <div className={cn('container')}>
      <div>
        <div className="py-[5rem]">
          {posts?.map((post) => (
            <div className="flex flex-col md:flex-row gap-4" key={post.id}>
              <div className="basis-1/3">
                <h3 className="text-2xl md:text-4xl font-semibold text-white">
                  {post.title}
                </h3>
                <p className="text-xl md:text-2xl py-5">
                  {post.meta?.description || 'No excerpt available'}
                </p>
                <Link
                  href={`/news/${post.slug}`}
                  className="block text-center items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 py-3 mt-3 border bg-selectiveyellow text-jet hover:bg-jet hover:text-selectiveyellow"
                >
                  Read More
                </Link>
              </div>
              {post.heroImage && (
                <div className="basis-2/3">
                  <Image
                    src={post.heroImage.url} 
                    alt={post.heroImage.alt || 'No alt text available'} 
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollectionArchive;