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
    <section className="bg-darkblue text-jet py-[3rem] w-full">
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
            <div className='flex flex-col rounded-xl overflow-hidden bg-antiflashwhite h-full'>
              <div className="relative w-full h-[200px]">
                <Image 
                  src={card.image.url} 
                  alt={card.image.alt} 
                  fill 
                  className="object-cover inset-0 m-0"
                  sizes="(max-width: 768px)"
                  loading="lazy"
                />
              </div>
              <div className="p-5 flex flex-col justify-between">
                <span className="text-azul font-bold text-xl md:text-2xl">
                  0{index + 1}                  
                </span>
                <div className="flex flex-col justify-between">
                  <h3 className="text-xl md:text-2xl pb-3 text-jet m-0">
                    {card.title}
                  </h3>
                  <p className="text-jet prose md:prose-md pb-5">
                    {card.description}
                  </p>
                </div>
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