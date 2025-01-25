'use client'
import { cn } from '@/utilities/cn'
import useClickableCard from '@/utilities/useClickableCard'
import Link from 'next/link'
import React, { Fragment } from 'react'

import type { Post } from '@/payload-types'

import { Media } from '@/components/Media'
import Image from 'next/image'

export type CardPostData = Pick<Post, 'slug' | 'categories' | 'meta' | 'title' | 'heroImage'>

interface CardProps {
  className?: string;
  doc?: {
    slug?: string;
    categories?: any[];
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
  const { className, doc, relationTo, showCategories, title: titleFromProps, heroImage } = props;

  const { slug, categories, meta, title } = doc || {};
  const { description, image: metaImage } = meta || {};

  const hasCategories = categories && Array.isArray(categories) && categories.length > 0;
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
        {hasCategories && showCategories && (
          <div className="mt-2">
            {categories.map((category, index) => (
              <span key={index} className="text-xs text-gray-500">
                {category.name}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
};

export default Card;