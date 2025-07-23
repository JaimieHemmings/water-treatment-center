import React from 'react'
import { FormBlock } from '@/blocks/Form/Component'
import { MdPhone, MdEmail, MdLocationOn, MdWarehouse } from 'react-icons/md'
import { FaDroplet } from 'react-icons/fa6'

interface ContactBlockProps {
  title: string
  subtitleStart: string
  subtitleHighlight: string
  subtitleEnd: string
  blocks: any
  phoneNumbers: {
    phoneNumber: string
  }[]
  emailAddresses: {
    emailAddress: string
  }[]
  showRoomAddresses: {
    showRoomAddress: string
    showRoomOpeningHours: string
  }[]
  warehouseAddresses: {
    warehouseAddress: string
  }[]
}

export const ContactBlock: React.FC<ContactBlockProps> = ({
  blocks,
  title,
  subtitleStart,
  subtitleHighlight,
  subtitleEnd,
  phoneNumbers,
  emailAddresses,
  showRoomAddresses,
  warehouseAddresses,
}) => {
  return (
    <section className="w-full pt-[4rem] bg-gradient-to-br from-darkblue via-darkblue to-teal relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-selectiveyellow/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-teal/10 rounded-full blur-3xl"></div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information Section */}
          <div className="order-2 lg:order-1 space-y-8">
            <div className="text-center lg:text-left">
              <h2 className="text-sm tracking-widest mb-4 uppercase font-semibold text-selectiveyellow flex items-center justify-center lg:justify-start gap-2">
                <FaDroplet className="text-selectiveyellow animate-pulse" />
                {title}
              </h2>
              <h3 className="text-3xl md:text-5xl font-bold text-white leading-tight max-w-2xl mx-auto lg:mx-0">
                {subtitleStart}{' '}
                <span className="text-selectiveyellow bg-gradient-to-r from-selectiveyellow to-teal bg-clip-text text-transparent">
                  {subtitleHighlight}
                </span>{' '}
                {subtitleEnd}
              </h3>
              <div className="w-16 h-0.5 bg-gradient-to-r from-selectiveyellow to-teal mx-auto lg:mx-0 mt-6"></div>
            </div>
            <div className="space-y-8">
              {/* Showrooms Section */}
              <div className="group">
                <h4 className="text-lg font-bold text-selectiveyellow mb-4 flex items-center gap-2">
                  <MdLocationOn className="text-selectiveyellow" size={20} />
                  Showrooms
                </h4>
                <div className="space-y-4">
                  {showRoomAddresses &&
                    showRoomAddresses.map((showRoomAddress, index) => (
                      <div
                        key={index}
                        className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300"
                      >
                        <div className="flex items-start gap-3">
                          <MdLocationOn
                            className="text-selectiveyellow mt-1 flex-shrink-0"
                            size={20}
                          />
                          <div>
                            <address className="text-white/90 not-italic font-medium">
                              {showRoomAddress.showRoomAddress}
                            </address>
                            <p className="text-white/70 text-sm mt-1">
                              {showRoomAddress.showRoomOpeningHours}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>

              {/* Warehouse Section */}
              <div className="group">
                <h4 className="text-lg font-bold text-selectiveyellow mb-4 flex items-center gap-2">
                  <MdWarehouse className="text-selectiveyellow" size={20} />
                  Warehouse
                </h4>
                <div className="space-y-4">
                  {warehouseAddresses &&
                    warehouseAddresses.map((warehouseAddress, index) => (
                      <div
                        key={index}
                        className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300"
                      >
                        <div className="flex items-start gap-3">
                          <MdWarehouse
                            className="text-selectiveyellow mt-1 flex-shrink-0"
                            size={20}
                          />
                          <address className="text-white/90 not-italic font-medium">
                            {warehouseAddress.warehouseAddress}
                          </address>
                        </div>
                      </div>
                    ))}
                </div>
              </div>

              {/* Contact Section */}
              <div className="group">
                <h4 className="text-lg font-bold text-selectiveyellow mb-4 flex items-center gap-2">
                  <MdPhone className="text-selectiveyellow" size={20} />
                  Contact Information
                </h4>
                <div className="space-y-3">
                  {phoneNumbers &&
                    phoneNumbers.map((phoneNumber, index) => (
                      <a
                        key={index}
                        href={`tel:${phoneNumber.phoneNumber}`}
                        className="flex items-center gap-3 p-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 hover:border-selectiveyellow/30 transition-all duration-300 group"
                      >
                        <MdPhone
                          className="text-selectiveyellow group-hover:scale-110 transition-transform duration-300"
                          size={18}
                        />
                        <span className="text-white/90 font-medium">{phoneNumber.phoneNumber}</span>
                      </a>
                    ))}

                  {emailAddresses &&
                    emailAddresses.map((emailAddress, index) => (
                      <a
                        key={index}
                        href={`mailto:${emailAddress.emailAddress}`}
                        className="flex items-center gap-3 p-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 hover:border-selectiveyellow/30 transition-all duration-300 group"
                      >
                        <MdEmail
                          className="text-selectiveyellow group-hover:scale-110 transition-transform duration-300"
                          size={18}
                        />
                        <span className="text-white/90 font-medium">
                          {emailAddress.emailAddress}
                        </span>
                      </a>
                    ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="order-1 lg:order-2">
            <div className="bg-white/95 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20 hover:shadow-3xl transition-all duration-500">
              <div className="mb-6">
                <h3 className="text-lg font-bold text-selectiveyellow mb-2 flex items-center gap-2">
                  <FaDroplet className="text-selectiveyellow animate-pulse" />
                  Contact Us
                </h3>
                <p className="text-textblue/80 leading-relaxed">
                  If you have any questions or need assistance, please fill out the form below and
                  we will get back to you as soon as possible.
                </p>
                <div className="w-12 h-0.5 bg-gradient-to-r from-selectiveyellow to-teal mt-4"></div>
              </div>

              <div className="space-y-6">
                {blocks.map((block, index) => {
                  if (block.blockType === 'formBlock') {
                    return (
                      <div key={index}>
                        <FormBlock enableIntro={block.enableIntro} form={block.form} />
                      </div>
                    )
                  }
                  return null
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Map Section */}
      <div className="w-full mt-16">
        <div className="overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2385.071664798851!2d-7.520594222353657!3d53.28825127906753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x485daf9c979383c1%3A0x7b51b2e608ce7bb5!2s13%20Axis%20Business%20Park%2C%20Ballyduff%2C%20Co.%20Offaly%2C%20Ireland!5e0!3m2!1sen!2suk!4v1740387486362!5m2!1sen!2suk"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps"
            className="w-full h-96 md:h-[450px]"
          />
        </div>
      </div>
    </section>
  )
}
