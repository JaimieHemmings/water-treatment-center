import Link from 'next/link'
import Image from 'next/image'
import { FaFacebook, FaYoutube, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { getCachedGlobal } from '@/utilities/getGlobals'


interface SocialLink {
  icon: any
  href: string
  alt: string
}

interface ContactInfo {
  icon: any
  primary: string
  href?: string
  isAddress?: boolean
}

interface FooterData {
  siteNavigation: Array<{
    link: {
      slug: string
    }
    label: string
  }>
  usefulLinks: Array<{
    link: {
      slug: string
    }
    label: string
  }>
  blurb: string
}


const SOCIAL_LINKS: SocialLink[] = [
  { icon: <FaFacebook className="text-teal text-4xl" />, href: '#', alt: 'facebook icon' },
  { icon: <FaYoutube className="text-4xl text-teal" />, href: 'https://www.youtube.com/', alt: 'youtube icon' }
]

const PhoneIcon = () => (
  <FaPhoneAlt className="text-teal text-2xl" />
)

const EmailIcon = () => (
  <MdEmail className="text-teal text-2xl" />
)

const LocationIcon = () => (
  <FaLocationDot className="text-teal text-2xl" />
)

const CONTACT_INFO: ContactInfo[] = [
  {
    icon: <PhoneIcon />,
    primary: '057 9333942',
    href: 'tel:0579333942'
  },
  {
    icon: <PhoneIcon />,
    primary: '086 1715686',
    href: 'tel:0861715686'
  },
  {
    icon: <EmailIcon />,
    primary: 'info@thewatertreatmentcentre.ie',
    href: 'mailto:info@thewatertreatmentcentre.ie'
  },
  {
    icon: <LocationIcon />,
    primary: '13B Axis Business Park, Tullamore, Co Offaly, R35 XK13',
    isAddress: true
  }
]

const SocialLinks: React.FC = () => (
  <div className="flex gap-4 mt-3 align-middle">
    {SOCIAL_LINKS.map((social, index) => (
      <a 
        key={index}
        className="text-white hover:scale-110" 
        target="_blank"
        href={social.href}
      >
        {social.icon}
      </a>
    ))}
  </div>
)

const ContactSection: React.FC<{ info: ContactInfo }> = ({ info }) => (
  <div className="mt-[23px] flex">
    <div className="flex h-[38px] w-[38px] items-center justify-center rounded-[75%]">
      {info.icon}
    </div>
    <div className="ml-[18px]">
      {info.href ? (
        <a href={info.href} className="text-md font-medium text-white">
          {info.primary}
        </a>
      ) : info.isAddress ? (
        <address className="text-white text-md">{info.primary}</address>
      ) : (
        <p className="text-[14px] font-medium text-white">{info.primary}</p>
      )}
    </div>
  </div>
)

export async function Footer() {
  const footerData = (
    await getCachedGlobal('footer')()
  ) as FooterData || {
    siteNavigation: [],
    usefulLinks: [],
    blurb: ''
  }

  return (
    <footer className="bg-jet pt-9 relative z-20">
      <div className="mx-auto w-full max-w-[1166px] px-4 xl:px-0">
        <div className="flex flex-col justify-between sm:px-[18px] md:flex-row md:px-10 md:gap-4">
          {/* Logo and Social Section */}
          <div className="md:w-2/6">
            <Link href="/">
              <Image src="/logo.png" alt="logo" width={300} height={100} />
            </Link>
            <p className="text-md font-normal text-white/[80%] py-5">
            {footerData.blurb}
            </p>
            <SocialLinks />
          </div>

          {/* Contact Information Section */}
          <div className="md:w-2/6 pb-5 md:px-5">
            {CONTACT_INFO.map((info, index) => (
              <ContactSection key={index} info={info} />
            ))}
          </div>

          {/* Navigation Links Section */}
          <div className="mt-6 flex w-full flex-col justify-between text-white sm:flex-row md:mt-0 md:w-1/6 pb-5">
            <div>
              <p className="text-xl md:text-2xl font-medium leading-normal text-white inline-block pb-2 border-b-2 border-teal">Pages</p>
              <ul>
                {footerData?.siteNavigation?.map((link, index) => (
                  <li key={index} className="mt-[15px]">
                    <Link
                      className="text-white text-md font-normal hover:text-azul"
                      href={`/${link.link.slug}`}
                      title={link.label}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li className="mt-[15px]">
                  <Link
                    className="text-white text-md font-normal hover:text-azul"
                    href="/products"
                    title="Products"
                  >
                    Products
                  </Link>
                </li>
                <li className="mt-[15px]">
                  <Link
                    className="text-white text-md font-normal hover:text-azul"
                    href="/news"
                    title="News"
                  >
                    News
                  </Link>
                </li>
                <li className="mt-[15px]">
                  <Link
                    className="text-white text-md font-normal hover:text-azul"
                    href="/contact"
                    title="Contact"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>


          <div className="mt-6 flex w-full flex-col justify-between text-white sm:flex-row md:mt-0 md:w-1/6 pb-5">
            <div>
              <p className="text-xl md:text-2xl font-medium leading-normal text-white inline-block pb-2 border-b-2 border-teal">Useful Links</p>
              <ul>
              {footerData?.usefulLinks?.map((link, index) => (
              <li key={index} className="mt-[15px]">
                <Link
                  className="text-white text-md font-normal hover:text-azul"
                  href={`/${link.link.slug}`}
                  title={link.label}
                >
                  {link.label}
                </Link>
              </li>
            ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <hr className="mt-[30px] text-white" />
        <div className="flex items-center justify-center pb-8 pt-[9px] md:py-8">
          <p className="text-sm font-normal text-white md:text-md">
            © Copyright {new Date().getFullYear()}, All Rights Reserved by The Water Treatment Centre
          </p>
        </div>
      </div>
    </footer>
  )
}