import React from 'react';
import configPromise from '@payload-config';
import { getPayload } from 'payload';
import SectionTitle from '@/components/SectionTitle';
import CustomLink from '@/components/CustomLink';
import Image from 'next/image';

export const dynamic = 'force-static';
export const revalidate = 600;

export default async function BlogFeed() {
  const payload = await getPayload({ config: configPromise });
 
  const response = await payload.find({
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
  });
  const { docs } = response;
 
  return (
    <section className="container relative py-[2rem] z-20">
      <div className="sticky top-[100px] container mx-auto pb-[2rem]">
        <SectionTitle title="News &amp; Updates" subtitle="Stay informed about water quality and solutions" />
      </div>
      <ul className="relative pt-[2rem]">
        {docs.map((post: any, index) => {
          return (
            <li
              key={index}
              className="sticky top-[250px] max-md:p-2 py-5"
            >
              <div className={` border-2 border-jet container p-0 bg-antiflashwhite rounded-xl overflow-hidden shadow-lg flex flex-col-reverse ${index % 2 === 0 ? ('md:flex-row') : ('md:flex-row-reverse')} md:items-center md:justify-between`}>
                <div className="md:w-1/2 p-5">
                  <p className="text-sm text-teal">
                    {new Date(post.publishedAt).toLocaleDateString('en-GB')}
                  </p>
                  <h3 className="text-2xl text-jet py-2">{post.title}</h3>
                  <p className="text-jet">{post.meta.description}</p>
                  <div className="flex">

                  <CustomLink theme="light" label="Read More" link={`/news/${post.slug}`} />
                  </div>
                </div>
                <div className="md:w-1/2 relative h-[200px] md:h-[300px]">
                  <Image 
                    src={post.heroImage.url}
                    alt={post.heroImage.alt}
                    fill
                    className="rounded-lg h-[200px] md:max-h-[300px] w-full object-cover"
                  />
                </div>
              </div>
            </li>
        )
        })}
      </ul>
    </section>
  );
}