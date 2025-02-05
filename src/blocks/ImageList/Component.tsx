import React from "react";
import SectionTitle from "@/components/SectionTitle";
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
  title: string;
  description: string;
  images: Image[];
}

export const ImageList: React.FC<ImageListProps> = ({
  title,
  description,
  images,
}) => {

  return (
    <section className="py-[5rem] bg-darkblue text-white">
      <div className="container">
        <SectionTitle title={title} subtitle={description} />
      </div>
      <div className="flex flex-col justify-start gap-0 mt-[5rem] border-t border-selectiveyellow">
        {images.map((image) => (
          <ListDisplay key={image.id} image={image} />
        ))}
      </div>
    </section>
  );

};

export default ImageList;