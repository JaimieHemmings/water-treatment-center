import React from "react";
import { AnimateIn } from "@/components/Animations/AnimateIn";

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

export const ImageList: React.FC<ImageListProps> = ({
  images,
}) => {

  return (
    <section className="bg-darkblue text-white">
      <div className="flex flex-col justify-start gap-0 border-t border-selectiveyellow">
        {images.map((image, index) => (
          <div
            key={index}
            className="border-b border-selectiveyellow text-black bg-center bg-cover bg-no-repeat relative flex flex-col justify-center min-h-[40svh] md:min-h-[33svh]"
            style={{ backgroundImage: `url(${image.image.url})` }}
          >
            <div
              className="bg-darkblue/80 absolute inset-0 z-10"
            />
            <div
              className="container relative z-20 py-5"
            >
              <AnimateIn 
                animation={{
                  y: 60,
                  opacity: 0,
                  duration: 1,
                  ease: "power2.out",
                }}
              >
                <h2 className="text-white text-2xl md:text-4xl font-semibold pb-5 border-b border-selectiveyellow mb-5">
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