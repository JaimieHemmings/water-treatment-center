import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaFacebook, FaYoutube, FaPhoneAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { FaLocationDot } from 'react-icons/fa6'
import { FaTiktok } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'

const SOCIAL_LINKS: any = [
  {
    icon: <FaFacebook className="text-white text-4xl" />,
    href: 'https://www.facebook.com/www.thewatertreatmentcentre.ie/?locale=en_GB',
    alt: 'facebook icon',
  },
  {
    icon: <FaYoutube className="text-4xl text-white" />,
    href: 'https://www.youtube.com/channel/UCrZ_V32WasPvf6MpT5aBtwQ',
    alt: 'youtube icon',
  },
  {
    icon: <FaTiktok className="text-white text-4xl" />,
    href: 'https://www.tiktok.com/',
    alt: 'tiktok icon',
  },
  {
    icon: <FaInstagram className="text-white text-4xl" />,
    href: 'https://www.instagram.com/',
    alt: 'instagram icon',
  },
]

const PhoneIcon = () => <FaPhoneAlt className="text-teal text-2xl" />

const EmailIcon = () => <MdEmail className="text-teal text-2xl" />

const LocationIcon = () => <FaLocationDot className="text-teal text-2xl" />

const CONTACT_INFO: any = [
  {
    icon: <PhoneIcon />,
    primary: '057 9333942',
    href: 'tel:0579333942',
  },
  {
    icon: <PhoneIcon />,
    primary: '086 1715686',
    href: 'tel:0861715686',
  },
  {
    icon: <EmailIcon />,
    primary: 'info@thewatertreatmentcentre.ie',
    href: 'mailto:info@thewatertreatmentcentre.ie',
  },
  {
    icon: <LocationIcon />,
    primary: '13B Axis Business Park, Tullamore, Co Offaly, R35 XK13',
    isAddress: true,
  },
]

const SocialLinks: React.FC = () => (
  <div className="flex gap-4">
    {SOCIAL_LINKS.map((social, index) => (
      <a
        key={index}
        className="group p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl hover:bg-selectiveyellow hover:border-selectiveyellow transition-all duration-300 transform hover:scale-110"
        target="_blank"
        href={social.href}
        rel="noopener noreferrer"
      >
        <div className="text-white group-hover:text-white transition-colors duration-300 text-xl">
          {React.cloneElement(social.icon, { className: 'text-xl' })}
        </div>
      </a>
    ))}
  </div>
)

async function getFooterData(): Promise<any> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/globals/footer?depth=1&draft=false&locale=undefined`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        next: {
          revalidate: 60,
        },
      },
    )

    if (!res.ok) {
      throw new Error('Failed to fetch footer data')
    }

    return await res.json()
  } catch (error) {
    console.error('Error fetching footer data:', error)
    return {
      siteNavigation: [],
      usefulLinks: [],
      blurb: '',
    }
  }
}

export async function Footer() {
  const footerData = await getFooterData()
  return (
    <footer className="bg-gradient-to-br from-darkblue via-darkblue to-teal relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-selectiveyellow/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-teal/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 pt-16 pb-8">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Logo and Social Section */}
            <div className="lg:col-span-1 space-y-6">
              <Link href="/" className="block">
                <Image
                  src="/logo.png"
                  alt="logo"
                  width={250}
                  height={80}
                  className="h-auto w-auto max-w-[250px]"
                />
              </Link>

              <p className="text-white/80 leading-relaxed">{footerData.blurb}</p>

              <div className="pt-2">
                <SocialLinks />
              </div>
            </div>

            {/* Navigation Links Section */}
            <div className="lg:col-span-1 space-y-6">
              <h3 className="text-lg font-bold text-selectiveyellow uppercase tracking-widest flex items-center gap-2">
                Quick Links
                <div className="w-8 h-0.5 bg-gradient-to-r from-selectiveyellow to-teal"></div>
              </h3>

              <nav className="space-y-3">
                {footerData?.siteNavigation?.map((link, index) => (
                  <Link
                    key={index}
                    className="block text-white/80 hover:text-selectiveyellow transition-colors duration-300 font-medium"
                    href={`/${link.link.slug}`}
                    title={link.link.title}
                  >
                    {link.link.title}
                  </Link>
                ))}

                <Link
                  className="block text-white/80 hover:text-selectiveyellow transition-colors duration-300 font-medium"
                  href="/products"
                  title="Products"
                >
                  Products
                </Link>

                <Link
                  className="block text-white/80 hover:text-selectiveyellow transition-colors duration-300 font-medium"
                  href="/news"
                  title="News"
                >
                  News
                </Link>

                <Link
                  className="block text-white/80 hover:text-selectiveyellow transition-colors duration-300 font-medium"
                  href="/contact"
                  title="Contact"
                >
                  Contact
                </Link>
              </nav>
            </div>

            {/* Contact Information Section */}
            <div className="lg:col-span-1 space-y-6">
              <h3 className="text-lg font-bold text-selectiveyellow uppercase tracking-widest flex items-center gap-2">
                Contact Us
                <div className="w-8 h-0.5 bg-gradient-to-r from-selectiveyellow to-teal"></div>
              </h3>

              <div className="space-y-4">
                {CONTACT_INFO.map((info, index) => (
                  <div key={index} className="group">
                    <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
                      <div className="flex-shrink-0 mt-0.5">{info.icon}</div>
                      <div className="flex-1 min-w-0">
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-white/90 hover:text-selectiveyellow transition-colors duration-300 font-medium break-words"
                          >
                            {info.primary}
                          </a>
                        ) : info.isAddress ? (
                          <address className="text-white/90 not-italic font-medium break-words">
                            {info.primary}
                          </address>
                        ) : (
                          <p className="text-white/90 font-medium break-words">{info.primary}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Useful Links Section */}
            <div className="lg:col-span-1 space-y-6">
              <h3 className="text-lg font-bold text-selectiveyellow uppercase tracking-widest flex items-center gap-2">
                Useful Links
                <div className="w-8 h-0.5 bg-gradient-to-r from-selectiveyellow to-teal"></div>
              </h3>

              <nav className="space-y-3">
                {footerData?.usefulLinks?.map((link, index) => (
                  <div key={index}>
                    {link.lType === 'cms' && link.CMSLink?.slug && (
                      <Link
                        className="block text-white/80 hover:text-selectiveyellow transition-colors duration-300 font-medium"
                        href={`/${link.CMSLink.slug}`}
                        title={link.title}
                      >
                        {link.label}
                      </Link>
                    )}
                    {link.lType === 'supporting' &&
                      link.supportingDocsLink?.pageAssociation &&
                      link.supportingDocsLink?.slug && (
                        <Link
                          className="block text-white/80 hover:text-selectiveyellow transition-colors duration-300 font-medium"
                          href={`/products/${link.supportingDocsLink.pageAssociation}/support/${link.supportingDocsLink.slug}`}
                          title={link.title}
                        >
                          {link.label}
                        </Link>
                      )}
                  </div>
                ))}
              </nav>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="border-t border-white/20 pt-8 mt-12">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-selectiveyellow rounded-full animate-pulse"></div>
                <p className="text-white/70 text-sm md:text-base">
                  © Copyright {new Date().getFullYear()}, All Rights Reserved by The Water
                  Treatment Centre
                </p>
              </div>

              <div className="w-12 h-0.5 bg-gradient-to-r from-selectiveyellow to-teal opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
