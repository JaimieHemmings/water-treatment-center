import React from "react";
import { AnimateIn } from "@/components/Animations/AnimateIn";
import Image from "next/image";

interface Image {
  id: string;
  title: string;
  description: string;
  image: {
    url: string;
    alt: string;
  };
}

interface ImageListProps {
  images: Image[];
}

export const ImageList: React.FC<ImageListProps> = ({ images }) => {
  return (
    <section className="bg-white text-jet pt-[5rem] pb-[2rem] w-full relative z-20">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-4 justify-between">
        {images.map((card, index) => (
          <AnimateIn
            key={index}
            animation={{
              y: 60,
              opacity: 0,
              duration: 1,
              ease: 'power2.out',
              delay: index * 0.4,
            }}
            className="md:basis-1/3"
            >
            <div className='flex flex-col rounded-xl overflow-hidden h-full border-[1px] border-t-none'>
              <div className="relative w-full h-[350px]">
                <Image 
                  src={card.image.url} 
                  alt={card.image.alt} 
                  fill 
                  className="object-cover inset-0 m-0"
                  sizes="(max-width: 768px)"
                  loading="lazy"
                />
              </div>
              <div className="p-5 flex flex-col gap-2 border-jet/40 relative">
                <span className="text-white bg-selectiveyellow rounded-full font-bold text-md absolute left-[75%] w-10 h-10 flex items-center justify-center -top-6">
                  0{index + 1}                  
                </span>
                  <h3 className="text-xl md:text-2xl text-jet m-0 pt-5">
                    {card.title}
                  </h3>
                  <span className="border-2 w-1/2 relative block border-selectiveyellow"></span>
                  <p className="text-jet prose md:prose-md">
                    {card.description}
                  </p>
              </div>
            </div>
          </AnimateIn>
        ))}
        </div>
      </div>
    </section>
  );
};

export default ImageList;