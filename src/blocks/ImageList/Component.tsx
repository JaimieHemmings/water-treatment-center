import React from "react";
import ListDisplay from "@/blocks/ImageList/ListDisplay";

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
        {images.map((image) => (
          <ListDisplay key={image.id} image={image} />
        ))}
      </div>
    </section>
  );

};

export default ImageList;