import Image from "next/image";
import React from "react";
import Link from "next/link";

export const BlogFeed: any = () => {
  return (
    <section className="w-full bg-jet py-[5rem]">
      <div className="container">
        <h2 className="block text-selectiveyellow font-semibold pb-5">Latest News &amp; Updates</h2>
        <p className="text-5xl">Stay informed about water quality and solutions</p>
      </div>
      <div className="container pt-[5rem]">
        <div className=" flex flex-col md:flex-row gap-4 py-5">
          <div className="basis-1/3">
            <p className="opacity-50">01/02/2024</p>
            <h3 className="text-2xl text-selectiveyellow pt-3 pb-5">
              How to test the water quality in your home
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pretium facilisis pellentesque. In et feugiat leo. 
            </p>
            <Link href="#" className="inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 px-8 mt-3 border bg-selectiveyellow text-jet hover:bg-jet hover:text-selectiveyellow text-lg hover:border-selectiveyellow">More...</Link>
          </div>
          <div className="basis-3/4">
            <Image src="/house.avif" alt="house" width={800} height={600} className="w-full h-auto rounded-xl" />
          </div>
        </div>
        <div className=" flex flex-col md:flex-row-reverse gap-4 py-5">
          <div className="basis-1/3">
            <p className="opacity-50">01/02/2024</p>
            <h3 className="text-2xl text-selectiveyellow pt-3 pb-5">
              How to test the water quality in your home
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pretium facilisis pellentesque. In et feugiat leo. 
            </p>
            <Link href="#" className="inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 px-8 mt-3 border bg-selectiveyellow text-jet hover:bg-jet hover:text-selectiveyellow text-lg hover:border-selectiveyellow">More...</Link>
          </div>
          <div className="basis-3/4">
            <Image src="/house.avif" alt="house" width={800} height={600} className="w-full h-auto rounded-xl" />
          </div>
        </div>
        <div className=" flex flex-col md:flex-row gap-4 py-5">
          <div className="basis-1/3">
            <p className="opacity-50">01/02/2024</p>
            <h3 className="text-2xl text-selectiveyellow pt-3 pb-5">
              How to test the water quality in your home
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pretium facilisis pellentesque. In et feugiat leo. 
            </p>
            <Link href="#" className="inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 px-8 mt-3 border bg-selectiveyellow text-jet hover:bg-jet hover:text-selectiveyellow text-lg hover:border-selectiveyellow">More...</Link>
          </div>
          <div className="basis-3/4">
            <Image src="/house.avif" alt="house" width={800} height={600} className="w-full h-auto rounded-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};