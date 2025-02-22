'use client';
import React, { useState } from 'react';
import Image from 'next/image';

interface GalleryImage {
  image: {
    url: string;
    alt: string;
    width: number;
    height: number;
  }
}

interface ProductData {
  productImage: GalleryImage;
  gallery?: GalleryImage[];
}

const Gallery = ({ productData }: { productData: ProductData }) => {
  const thumbnailImages = [
    ...(productData.gallery || [])
  ];

  const [selectedImage, setSelectedImage] = useState<GalleryImage>(thumbnailImages[0]);

  const handleImageClick = (image: GalleryImage) => {
    setSelectedImage(image);
  };

  return (
    <div className="space-y-4">
      <div className="relative aspect-square w-full overflow-hidden rounded-xl">
        <Image
          src={selectedImage.image.url}
          alt={selectedImage.image.alt || 'No alt text available'}
          className="object-cover rounded-xl transition-all duration-300"
          fill
          priority
        />
      </div>

      <div className="grid grid-cols-4 gap-2">
        {thumbnailImages.map((image, index) => (
          <button
            key={index}
            onClick={() => handleImageClick(image)}
            className={`relative aspect-square w-full overflow-hidden rounded-lg transition-all duration-300
              ${selectedImage.image.url === image.image.url ? 'ring-2 ring-blue-500' : 'hover:opacity-75'}`}
          >
            <Image
              src={image.image.url}
              alt={image.image.alt || 'No alt text available'}
              className="object-cover"
              fill
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Gallery;