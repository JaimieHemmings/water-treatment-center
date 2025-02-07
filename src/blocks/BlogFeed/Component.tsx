import React from 'react';
import Image from 'next/image';
import SectionTitle from "@/components/SectionTitle";
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { AnimateIn } from '@/components/Animations/AnimateIn'
import { CustomLink } from '@/components/CustomLink'

export const dynamic = 'force-static'
export const revalidate = 600

export default async function BlogFeed() {
  const payload = await getPayload({ config: configPromise })
  
  const response:any = await payload.find({
    collection: 'posts',
    depth: 1,
    limit: 3,
    overrideAccess: false,
    select: {
      title: true,
      slug: true,
      categories: true,
      meta: true,
      heroImage: true,
      publishedAt: true,
    },
  })

  const { docs } = response
  return (
    <div className="w-full bg-darkblue py-[5rem] relative">
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
        {docs.map((post, index) => (
          <div key={index} className={`flex flex-col gap-4 ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
            <div className="basis-1/3">
            <AnimateIn
              animation={{
                x: index % 2 === 1 ? 60 : -60,
                duration: 0.6,
                delay: 0.1 * index,
              }}
            >
                <p className="text-sm text-gray-400">
                  {new Date(post.publishedAt).toLocaleDateString('en-GB')}
                </p>
                <h3 className="text-2xl text-selectiveyellow pt-1 pb-5">{post.title}</h3>
                <p className="text-white">{post.meta.description}</p>

                <CustomLink type="light" label="Read More" link={`/news/${post.slug}`} />
              </AnimateIn>
            </div>
            <div className="basis-2/3">
            <AnimateIn
              animation={{
                x: index % 2 === 1 ? -60 : 60,
                duration: 0.6,
                delay: 0.1 * index,
              }}
            >
              {post.heroImage && (
                <Image width={630} height={420} src={post.heroImage.url} alt={post.heroImage.alt} className="w-full h-auto object-cover rounded-xl" />
              )}
            </AnimateIn>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};