import React from 'react'

const VideoBlock = ({ video }: any) => {
  if (!video) return null
  console.log({video})
  return (
    <div className="relative z-30 w-full bg-darkblue">
      <video
        className="w-full h-auto"
        preload="metadata"
        poster={video.preloadImage?.url || '/video-poster.jpg'}
        playsInline
        controls
      >
        <source 
          src={video.video.url} 
          type="video/mp4" 
        />
        Your Browser does not support the video tag
      </video>
    </div>
  )
}

export default VideoBlock