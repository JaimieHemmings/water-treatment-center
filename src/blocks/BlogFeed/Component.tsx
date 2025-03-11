import React from 'react';
import configPromise from '@payload-config';
import { getPayload } from 'payload';
import { FaDroplet } from "react-icons/fa6";
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
    <section className="relative py-[5rem] z-20 bg-white">
      <div className="container">
        <div className="sticky top-[100px] md:top-[130px] mx-auto pb-[2rem]">
          <div className="pl-5 border-l-[5px] border-selectiveyellow">
            <h2 className="text-sm md:text-sm text-selectiveyellow m-0 pb-5 tracking-widest uppercase">
              <FaDroplet className="inline-block text-selectiveyellow mr-2" />
              News &amp; Updates
            </h2>
            <p className="text-jet text-2xl md:text-4xl font-semibold md:max-w-[50%]">Stay Informed About Water Quality and Solutions</p>
          </div>
        </div>
        <ul className="relative pt-[2rem]">
          {docs.map((post: any, index) => {
            return (
              <li
                key={index}
                className="sticky top-[250px] max-md:p-2 py-5"
              >
                <div className={`border-[1px] border-selectiveyellow/60 container p-0 bg-antiflashwhite rounded-xl overflow-hidden shadow-lg flex flex-col-reverse ${index % 2 === 0 ? ('md:flex-row') : ('md:flex-row-reverse')} md:items-center md:justify-between`}>
                  <div className="md:w-1/2 p-5">
                    <p className="text-sm text-teal">
                      {new Date(post.publishedAt).toLocaleDateString('en-GB')}
                    </p>
                    <h3 className="text-2xl text-jet py-2">{post.title}</h3>
                    <p className="text-jet pb-[3rem]">{post.meta.description}</p>
                    <div className="flex">

                    <CustomLink theme="dark" label="Read More" link={`/news/${post.slug}`} />
                    </div>
                  </div>
                  <div className="md:w-1/2 relative min-h-[200px] md:min-h-[350px] md:h-full">
                    <Image 
                      src={post.heroImage.url}
                      alt={post.heroImage.alt}
                      fill
                      className="rounded-lg h-full w-full object-cover"
                    />
                  </div>
                </div>
              </li>
          )
          })}
        </ul>
      </div>
    </section>
  );
}