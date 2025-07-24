'use client'

import React, { useState } from 'react'
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaWhatsapp,
  FaEnvelope,
  FaLink,
  FaShare,
} from 'react-icons/fa'
import { FaDroplet } from 'react-icons/fa6'

interface SocialsProps {
  url?: string
  title?: string
  description?: string
  className?: string
}

interface SocialPlatform {
  name: string
  icon: React.ComponentType<{ className?: string }>
  shareUrl: (url: string, title: string, description: string) => string
  color: string
  hoverColor: string
}

const Socials: React.FC<SocialsProps> = ({
  url,
  title = 'Check out this article',
  description = 'Discover valuable insights about water treatment',
  className = '',
}) => {
  const [copied, setCopied] = useState(false)

  // Get current page URL if not provided
  const currentUrl = url || (typeof window !== 'undefined' ? window.location.href : '')

  const socialPlatforms: SocialPlatform[] = [
    {
      name: 'Facebook',
      icon: FaFacebook,
      shareUrl: (url, title, description) =>
        `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      color: 'text-blue-600',
      hoverColor: 'hover:bg-blue-600',
    },
    {
      name: 'Twitter',
      icon: FaTwitter,
      shareUrl: (url, title, description) =>
        `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
      color: 'text-sky-500',
      hoverColor: 'hover:bg-sky-500',
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      shareUrl: (url, title, description) =>
        `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      color: 'text-blue-700',
      hoverColor: 'hover:bg-blue-700',
    },
    {
      name: 'WhatsApp',
      icon: FaWhatsapp,
      shareUrl: (url, title, description) =>
        `https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`,
      color: 'text-green-600',
      hoverColor: 'hover:bg-green-600',
    },
    {
      name: 'Email',
      icon: FaEnvelope,
      shareUrl: (url, title, description) =>
        `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(`${description}\n\n${url}`)}`,
      color: 'text-gray-600',
      hoverColor: 'hover:bg-gray-600',
    },
  ]

  const handleShare = (platform: SocialPlatform) => {
    const shareUrl = platform.shareUrl(currentUrl, title, description)
    window.open(shareUrl, '_blank', 'width=600,height=400')
  }

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy link:', err)
    }
  }

  return (
    <section
      className={`py-16 bg-gradient-to-br from-white via-antiflashwhite to-white relative overflow-hidden ${className}`}
    >
      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-selectiveyellow/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-24 h-24 bg-teal/5 rounded-full blur-3xl"></div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h2 className="text-sm tracking-widest mb-4 uppercase font-semibold text-selectiveyellow flex items-center justify-center gap-2">
              <FaShare className="text-selectiveyellow animate-pulse" />
              Share This Article
            </h2>

            <div className="space-y-4">
              <h3 className="text-3xl md:text-4xl font-bold text-textblue leading-tight">
                Spread the Knowledge
              </h3>
              <div className="w-16 h-0.5 bg-gradient-to-r from-selectiveyellow to-teal mx-auto"></div>
              <p className="text-textblue/80 text-lg leading-relaxed max-w-2xl mx-auto">
                Found this helpful? Share it with others who might benefit from these water
                treatment insights.
              </p>
            </div>
          </div>

          {/* Social Sharing Buttons */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/50 shadow-xl">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
              {socialPlatforms.map((platform) => {
                const IconComponent = platform.icon
                return (
                  <button
                    key={platform.name}
                    onClick={() => handleShare(platform)}
                    className={`group relative p-4 bg-white/60 backdrop-blur-sm border border-white/50 rounded-xl ${platform.hoverColor} hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg`}
                    aria-label={`Share on ${platform.name}`}
                  >
                    <div className="flex flex-col items-center gap-2">
                      <IconComponent
                        className={`text-2xl ${platform.color} group-hover:text-white transition-colors duration-300`}
                      />
                      <span className="text-xs font-semibold text-textblue group-hover:text-white transition-colors duration-300">
                        {platform.name}
                      </span>
                    </div>
                  </button>
                )
              })}

              {/* Copy Link Button */}
              <button
                onClick={handleCopyLink}
                className={`group relative p-4 bg-white/60 backdrop-blur-sm border border-white/50 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                  copied
                    ? 'bg-green-500 text-white border-green-500'
                    : 'hover:bg-selectiveyellow hover:text-white hover:border-selectiveyellow'
                }`}
                aria-label="Copy link"
              >
                <div className="flex flex-col items-center gap-2">
                  <FaLink
                    className={`text-2xl transition-colors duration-300 ${
                      copied ? 'text-white' : 'text-selectiveyellow group-hover:text-white'
                    }`}
                  />
                  <span
                    className={`text-xs font-semibold transition-colors duration-300 ${
                      copied ? 'text-white' : 'text-textblue group-hover:text-white'
                    }`}
                  >
                    {copied ? 'Copied!' : 'Copy Link'}
                  </span>
                </div>
              </button>
            </div>

            {/* Call to Action */}
            <div className="text-center p-6 bg-gradient-to-r from-selectiveyellow/10 to-teal/10 rounded-xl border border-selectiveyellow/20">
              <div className="flex items-center justify-center gap-2 mb-3">
                <FaDroplet className="text-selectiveyellow animate-pulse" />
                <span className="text-sm font-semibold text-selectiveyellow tracking-widest uppercase">
                  Help Others Discover Pure Water
                </span>
              </div>
              <p className="text-textblue/90 leading-relaxed">
                Your share could help someone find the perfect water treatment solution for their
                home. Together, we&apos;re building healthier communities one drop at a time.
              </p>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-8 text-center">
            <p className="text-textblue/60 text-sm">
              Questions about water treatment?
              <a
                href="/contact"
                className="text-selectiveyellow hover:text-teal transition-colors duration-300 font-semibold ml-1"
              >
                Get in touch with our experts
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Socials
