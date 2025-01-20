'use client';

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export const BlogFeed: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (container) {
      gsap.utils.toArray(".animate-text").forEach((text: any) => {
        gsap.fromTo(
          text,
          { opacity: 0 },
          {
            opacity: 1,
            scrollTrigger: {
              trigger: text,
              start: "top 90%",
              end: "top 70%",
              scrub: 1,
              toggleActions: "play reverse play reverse",
            },
          }
        );
      });

      gsap.utils.toArray(".animate-image").forEach((image: any) => {
        gsap.fromTo(
          image,
          { rotationY: 45, opacity: 0 },
          {
            rotationY: 0, opacity: 1,
            scrollTrigger: {
              trigger: image,
              start: "top 100%",
              end: "top 80%",
              scrub: 1,
              toggleActions: "play reverse play reverse",
            },
          }
        );
      });
    }
  }, []);

  return (
    <div className="w-full bg-jet py-[5rem]">
      <div className="container">
        <h2 className="block text-selectiveyellow font-semibold pb-5">Latest News &amp; Updates</h2>
        <p className="text-5xl font-semibold">Stay informed about water quality and solutions</p>
      </div>
      <div className="container pt-[5rem]">
        <div ref={containerRef}>
          <div className="flex flex-col md:flex-row gap-4 py-5">
            <div className="basis-1/3">
              <p className="opacity-50 animate-text">01/02/2024</p>
              <h3 className="text-2xl text-selectiveyellow pt-3 pb-5 animate-text">
                How water quality affects your skin
              </h3>
              <p className="animate-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pretium facilisis pellentesque. In et feugiat leo.
              </p>
              <Link href="#" className="inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 px-8 mt-3 border bg-selectiveyellow text-jet hover:bg-jet hover:text-selectiveyellow text-lg hover:border-selectiveyellow animate-text">More...</Link>
            </div>
            <div className="basis-3/4">
              <Image src="/house.jpg" alt="house" width={800} height={600} className="w-full h-auto rounded-xl animate-image" />
            </div>
          </div>
          <div className="flex flex-col md:flex-row-reverse gap-4 py-5">
            <div className="basis-1/3">
              <p className="opacity-50 animate-text">01/02/2024</p>
              <h3 className="text-2xl text-selectiveyellow pt-3 pb-5 animate-text">
                How water quality affects your skin
              </h3>
              <p className="animate-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pretium facilisis pellentesque. In et feugiat leo.
              </p>
              <Link href="#" className="inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 px-8 mt-3 border bg-selectiveyellow text-jet hover:bg-jet hover:text-selectiveyellow text-lg hover:border-selectiveyellow animate-text">More...</Link>
            </div>
            <div className="basis-3/4">
              <Image src="/face-in-water.webp" alt="A womans face on the water surface" width={800} height={600} className="w-full h-auto rounded-xl animate-image" />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 py-5">
            <div className="basis-1/3">
              <p className="opacity-50 animate-text">01/02/2024</p>
              <h3 className="text-2xl text-selectiveyellow pt-3 pb-5 animate-text">
                The chemistry of water purification
              </h3>
              <p className="animate-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pretium facilisis pellentesque. In et feugiat leo.
              </p>
              <Link href="#" className="inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 px-8 mt-3 border bg-selectiveyellow text-jet hover:bg-jet hover:text-selectiveyellow text-lg hover:border-selectiveyellow animate-text">More...</Link>
            </div>
            <div className="basis-3/4">
              <Image src="/house.jpg" alt="house" width={800} height={600} className="w-full h-auto rounded-xl animate-image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogFeed;