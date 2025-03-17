'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const Gallery = ({ productData }: { productData: any }) => {
  const thumbnailImages = productData.gallery

  const [selectedImage, setSelectedImage] = useState<any>(thumbnailImages[0]);

  const handleImageClick = (image: any) => {
    setSelectedImage(image);
  };

  return (
    <div className="space-y-4">
      <div className="relative aspect-square w-full overflow-hidden rounded-xl max-h-[400px]">
        <Image
          src={selectedImage.image.url}
          alt={selectedImage.image.alt || 'No alt text available'}
          className="object-cover rounded-xl transition-all duration-300"
          fill
        />
        <p>Test</p>
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