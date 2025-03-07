import Link from 'next/link'
import Image from 'next/image'
import { FaFacebook, FaYoutube, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { getCachedGlobal } from '@/utilities/getGlobals'


const SOCIAL_LINKS: any = [
  { icon: <FaFacebook className="text-white text-4xl" />, href: '#', alt: 'facebook icon' },
  { icon: <FaYoutube className="text-4xl text-white" />, href: 'https://www.youtube.com/', alt: 'youtube icon' }
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

const CONTACT_INFO: any = [
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

const ContactSection: React.FC<{ info: any }> = ({ info }) => (
  <div className="mt-[16px] flex">
    <div className="flex h-[20px] w-[12px] top-[4px] relative items-center justify-center rounded-[75%]">
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
          revalidate: 60
        }
      }
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
      blurb: ''
    }
  }
}

export async function Footer() {
  const footerData = await getFooterData()
  return (
    <footer className="bg-darkblue pt-9 relative z-20">
      <div className="mx-auto w-full container px-4 xl:px-0">
        <div className="flex flex-col justify-between sm:px-[18px] md:flex-row md:px-10 md:gap-4">
          {/* Logo and Social Section */}
          <div className="md:w-1/8">
            <Link href="/">
              <Image src="/logo.png" alt="logo" width={300} height={100} />
            </Link>
            <p className="text-md font-normal text-white/[80%] py-5">
            {footerData.blurb}
            </p>
            <SocialLinks />
          </div>

          {/* Navigation Links Section */}
          <div className="mt-6 flex w-full flex-col justify-between text-white sm:flex-row md:mt-0 md:w-2/8 md:p-5 pt-0">
            <div>
              <h2 className="text-md md:text-xl font-medium leading-normal text-selectiveyellow uppercase inline-block pb-2 tracking-widest">Quick Links</h2>
              <ul>
              {footerData?.siteNavigation?.map((link, index) => (
                <li key={index} className="mt-[15px]">
                  <Link
                    className="text-white text-md uppercase font-normal hover:text-azul"
                    href={`/${link.link.slug}`}
                    title={link.link.title}
                  >
                    {link.link.title}
                  </Link>
                </li>
              ))}
                <li className="mt-[15px]">
                  <Link
                    className="text-white uppercase text-md font-normal hover:text-azul"
                    href="/products"
                    title="Products"
                  >
                    PRODUCTS
                  </Link>
                </li>
                <li className="mt-[15px]">
                  <Link
                    className="text-white uppercase text-md font-normal hover:text-azul"
                    href="/news"
                    title="News"
                  >
                    News
                  </Link>
                </li>
                <li className="mt-[15px]">
                  <Link
                    className="text-white uppercase text-md font-normal hover:text-azul"
                    href="/contact"
                    title="Contact"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Information Section */}
          <div className="md:w-2/8 pb-5 md:px-5 mt-5 md:mt-0">
            <h2 className="text-md md:text-xl font-medium leading-normal text-selectiveyellow uppercase inline-block pb-2 tracking-widest">Contact Us</h2>
            {CONTACT_INFO.map((info, index) => (
              <ContactSection key={index} info={info} />
            ))}
          </div>


          <div className="mt-5 flex w-full flex-col justify-between text-white sm:flex-row md:mt-0 md:w-2/8 md:pb-5">
            <div>
            <h2 className="text-md md:text-xl font-medium leading-normal text-selectiveyellow uppercase inline-block pb-2 tracking-widest">Useful Links</h2>
              <ul>
              {footerData?.usefulLinks?.map((link, index) => (
              <li key={index} className="mt-[15px]">
                <Link
                  className="text-white uppercase text-md font-normal hover:text-azul"
                  href={`/${link.link.slug}`}
                  title={link.link.title}
                >
                  {link.link.title}
                </Link>
              </li>
            ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="flex justify-start pb-8 pt-4 mt-[30px] border-t-[1px] border-selectiveyellow">
          <p className="text-sm font-normal text-white md:text-md">
            © Copyright {new Date().getFullYear()}, All Rights Reserved by The Water Treatment Centre
          </p>
        </div>
      </div>
    </footer>
  )
}