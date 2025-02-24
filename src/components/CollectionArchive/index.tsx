"use client";
import { cn } from 'src/utilities/cn';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import CustomLink from '../CustomLink';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface CollectionArchiveProps {
  posts: any;
}

export const CollectionArchive: React.FC<CollectionArchiveProps> = ({ posts }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      // Animate each post item
      posts?.forEach((_, index) => {
        const postContainer = containerRef.current?.querySelector(`[data-post="${index}"]`);
        const textContent = postContainer?.querySelector('[data-content]');
        const image = postContainer?.querySelector('[data-image]');

        if (!postContainer || !textContent || !image) return;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: postContainer,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        });

        tl.from(textContent, {
          duration: 0.8,
          opacity: 0,
          x: index % 2 === 0 ? -50 : 50,
          ease: "power3.out"
        });

        // Animate image
        tl.from(image, {
          duration: 0.8,
          opacity: 0,
          x: index % 2 === 0 ? 50 : -50,
          ease: "power3.out"
        }, "-=0.6");
      });
    }, containerRef);

    return () => ctx.revert();
  }, [posts]);

  return (
    <div className={cn('container')} ref={containerRef}>
      <div>
        <div className="py-[5rem] flex flex-col gap-10">
          {posts?.map((post: any, index: number) => (
            <div
              className={`flex flex-col gap-10 ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'}`}
              key={post.id}
              data-post={index}
            >
              <div className="basis-1/3" data-content>
                <h3 className="text-2xl md:text-4xl font-semibold text-white">
                  {post.title}
                </h3>
                <p className="py-5 text-white">
                  {post.meta?.description || 'No excerpt available'}
                </p>
                <CustomLink
                  link={`/news/${post.slug}`}
                  label="Read more"
                  theme="light"
                />
              </div>
              {post.heroImage && (
                <div className="basis-2/3" data-image>
                  <Image
                    src={post.heroImage.url}
                    alt={post.heroImage.alt || 'No alt text available'}
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover rounded-lg max-h-[350px]"
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