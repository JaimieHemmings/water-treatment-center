import React from "react";
import { AnimateIn } from "@/components/Animations/AnimateIn";
import Image from "next/image";

interface Image {
  id: string;
  title: string;
  description: string;
  image: {
    url: string;
  };
}

interface ImageListProps {
  images: Image[];
}

export const ImageList: React.FC<ImageListProps> = ({ images }) => {
  return (
    <section 
      className="bg-darkblue text-white relative overflow-hidden"
    >
      <div className="flex flex-col justify-start gap-0 border-t border-selectiveyellow">
        {images.map((image, index) => (
          <div
            key={index}
            className="group border-b border-selectiveyellow text-black relative flex flex-col justify-centre overflow-hidden py-[5rem]"
          >
            {/* Background Image Container with Parallax */}
            <div
              className="absolute inset-0 w-full h-[130%] -top-[15%] overflow-hidden"
            >
              <div className="w-full h-full will-change-transform">
                <Image
                  src={image.image.url}
                  alt={image.title}
                  className="w-full h-full object-cover scale-110 transition-all duration-700"
                  width={1000}
                  height={1000}
                  priority={index === 0}
                  quality={90}
                />
              </div>
            </div>
           
            {/* Overlay */}
            <div className="absolute inset-0 z-[1] bg-darkblue/80" />
           
            {/* Content */}
            <div className="relative z-[2] p-8 h-full flex flex-col justify-center container">
              <AnimateIn
                animation={{
                  y: 60,
                  opacity: 0,
                  duration: 1,
                  ease: "power2.out",
                }}
              >
                <h2 className="text-white text-2xl md:text-4xl font-semibold pb-5 border-b border-selectiveyellow mb-5 inline-block">
                  {image.title}
                </h2>
                <p className="text-white text-lg md:text-xl">
                  {image.description}
                </p>
              </AnimateIn>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageList;