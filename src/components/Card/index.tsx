'use client'
import { cn } from '@/utilities/cn'
import useClickableCard from '@/utilities/useClickableCard'
import React from 'react'

import type { Post } from '@/payload-types'
import Image from 'next/image'

export type CardPostData = Pick<Post, 'slug' | 'meta' | 'title' | 'heroImage'>

interface CardProps {
  className?: string;
  doc?: {
    slug?: string;
    meta?: {
      description?: string;
      image?: any;
    };
    title?: string;
  };
  relationTo?: string;
  showCategories?: boolean;
  title?: string;
  heroImage?: {
    url: string;
    alt?: string;
  };
}

const Card: React.FC<CardProps> = (props) => {
  const { card } = useClickableCard({});
  const { className, doc, title: titleFromProps, heroImage } = props;

  const { meta, title } = doc || {};
  const { description, image: metaImage } = meta || {};
  const titleToUse = titleFromProps || title;
  const sanitizedDescription = description?.replace(/\s/g, ' ');

  return (
    <article
      className={cn(
        'border border-border rounded-lg overflow-hidden bg-card hover:cursor-pointer',
        className,
      )}
      ref={card.ref}
    >
      <div className="relative w-full">
        {!heroImage && <div className="">No Hero image</div>}
        {heroImage && (
          <Image src={heroImage.url} alt={heroImage.alt || 'Hero Image'} width={1200} height={630} />
        )}
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold">{titleToUse}</h2>
        {sanitizedDescription && <p className="text-sm text-gray-600">{sanitizedDescription}</p>}
      </div>
    </article>
  );
};

export default Card;