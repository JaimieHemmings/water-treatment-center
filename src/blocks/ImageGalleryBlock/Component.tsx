'use client'
import React, { useState } from 'react'
import type { ImageGalleryBlock as ImageGalleryBlockType } from '@/payload-types'

export default function ImageGalleryBlock({ Images }: ImageGalleryBlockType) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  if (!Images || Images.length === 0) {
    return null
  }

  const validImages = Images.filter(
    (image) => image.image && typeof image.image !== 'number' && image.image.url,
  )

  if (validImages.length === 0) {
    return null
  }

  return (
    <section className="py-16 px-4 mx-auto bg-gradient-to-br from-darkblue via-darkblue to-selectiveyellow relative overflow-hidden">
      <h2 className="sr-only">Image Gallery</h2>
      <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {validImages.map((image, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
            onClick={() => setSelectedImage(index)}
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={typeof image.image !== 'number' ? image.image.url || '' : ''}
                alt={
                  typeof image.image !== 'number'
                    ? image.image.alt || `Gallery image ${index + 1}`
                    : `Gallery image ${index + 1}`
                }
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                  />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
              onClick={() => setSelectedImage(null)}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <img
              src={
                typeof validImages[selectedImage].image !== 'number'
                  ? validImages[selectedImage].image.url || ''
                  : ''
              }
              alt={
                typeof validImages[selectedImage].image !== 'number'
                  ? validImages[selectedImage].image.alt || `Gallery image ${selectedImage + 1}`
                  : `Gallery image ${selectedImage + 1}`
              }
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Navigation buttons */}
            {validImages.length > 1 && (
              <>
                <button
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 bg-black bg-opacity-50 rounded-full p-2"
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelectedImage(selectedImage > 0 ? selectedImage - 1 : validImages.length - 1)
                  }}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 bg-black bg-opacity-50 rounded-full p-2"
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelectedImage(selectedImage < validImages.length - 1 ? selectedImage + 1 : 0)
                  }}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </>
            )}

            {/* Image counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black bg-opacity-50 px-3 py-1 rounded-full text-sm">
              {selectedImage + 1} / {validImages.length}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
