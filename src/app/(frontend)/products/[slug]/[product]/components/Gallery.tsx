'use client';
import React, { useState } from 'react'
import Image from 'next/image'

const Gallery = ({ productData }) => {
  const [selectedImage, setSelectedImage] = useState(productData)

  const handleImageClick = (image) => {
    setSelectedImage(image)
  }

  const thumbnailImages = Array(4).fill(productData.productImage)

  console.log('productData', productData)

  return (
    <div className="space-y-4">
      <div className="aspect-w-16 aspect-h-9 relative rounded-xl overflow-hidden">
        <Image
          src={selectedImage.url}
          alt={selectedImage.alt || 'No alt text available'}
          className="object-cover rounded-xl transition-all duration-300"
          width={selectedImage.width}
          height={selectedImage.height}
          priority
        />
      </div>
      
      <div className="grid grid-cols-4 gap-4">
        {thumbnailImages.map((image, index) => (
          <button
            key={index}
            onClick={() => handleImageClick(image)}
            className={`relative aspect-w-1 aspect-h-1 rounded-lg overflow-hidden 
              ${selectedImage.url === image.url ? 'ring-2 ring-selectiveyellow' : 'hover:opacity-75'}`}
          >
            <Image
              src={image.url}
              alt={image.alt || 'No alt text available'}
              className="object-cover transition-all duration-300"
              width={image.width}
              height={image.height}
              priority={false}
            />
          </button>
        ))}
      </div>
    </div>
  )
}

export default Gallery