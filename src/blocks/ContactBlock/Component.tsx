import React from "react";
import { FormBlock } from "@/blocks/Form/Component";
import { MdPhone, MdEmail, MdLocationOn, MdWarehouse } from "react-icons/md";

interface ContactBlockProps {
  title: string;
  subtitleStart: string;
  subtitleHighlight: string;
  subtitleEnd: string;
  blocks: any;
  phoneNumbers: {
    phoneNumber: string;
  }[];
  emailAddresses: {
    emailAddress: string;
  }[];
  showRoomAddresses: {
    showRoomAddress: string;
    showRoomOpeningHours: string;
  }[];
  warehouseAddresses: {
    warehouseAddress: string;
  }[];
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
    <section className="w-full pt-5 md:pt-[5rem] bg-darkblue text-white">
      <div className="container pb-5">
        <h2 className="border-b-2 border-selectiveyellow text-white inline-block px-2 py-1 mb-5 text-sm">
          {title}
        </h2>
        <p className="text-5xl font-semibold">
          {subtitleStart}{' '}
          <span className="text-white border-b-2 border-selectiveyellow">
            {subtitleHighlight}
          </span>
          {' '}{subtitleEnd}
        </p>
      </div>
      <div className="container flex flex-col md:flex-row py-5">
        <div className="basis-1/2 flex flex-col gap-4">
          <h3 className="text-white mb-2 border-b-2 border-selectiveyellow pb-2 font-semibold">
          Showrooms
          </h3>
          { showRoomAddresses && (
            showRoomAddresses.map((showRoomAddress, index) => {
              return (
                <div key={index}>
                  <address className="text-white">
                  <MdLocationOn className="text-selectiveyellow inline mr-3" size={24} />{showRoomAddress.showRoomAddress}
                  </address>
                  <p className="text-white">
                    {showRoomAddress.showRoomOpeningHours}
                  </p>
                </div>
              );
            })
          )}
          <h3 className="text-white mb-2 border-b-2 border-selectiveyellow pb-2 font-semibold">
            Warehouse
          </h3>
          { warehouseAddresses && (
            warehouseAddresses.map((warehouseAddress, index) => {
              return (
                <address key={index}>
                  <MdWarehouse className="text-selectiveyellow inline mr-3" size={24} />
                   {warehouseAddress.warehouseAddress}
                </address>
              );
            })
          )}
          <h3 className="text-white mb-2 border-b-2 border-selectiveyellow pb-2 font-semibold">
            Contact
          </h3>
          { phoneNumbers && (
            phoneNumbers.map((phoneNumber, index) => {
              return (
                <p key={index}>
                  <MdPhone className="text-selectiveyellow inline mr-3" size={20} />
                  <a className="hover:opacity-50 transition-all" href={`tel:${phoneNumber.phoneNumber}`}>
                    {phoneNumber.phoneNumber}
                  </a>
                </p>
              );
            })
          )}
          { emailAddresses && (
            emailAddresses.map((emailAddress, index) => {
              return (
                <p key={index}>
                  <a className="hover:opacity-50 transition-all" href={`mailto:${emailAddress.emailAddress}`}>
                  <MdEmail className="text-selectiveyellow inline mr-3" size={20} />{emailAddress.emailAddress}
                  </a>
                </p>
              );
            })
          )}
        </div>
        <div className="basis-1/2 py-5 md:py-0">
          {
            blocks.map((block, index) => {
              if (block.blockType === 'formBlock') {
                return (
                  <FormBlock
                    enableIntro={block.enableIntro}
                    key={index}
                    form={block.form}
                  />
                );
              }
            })
          }
        </div>
      </div>
      <div className="w-full h-[400px] mt-10">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2385.071664798851!2d-7.520594222353657!3d53.28825127906753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x485daf9c979383c1%3A0x7b51b2e608ce7bb5!2s13%20Axis%20Business%20Park%2C%20Ballyduff%2C%20Co.%20Offaly%2C%20Ireland!5e0!3m2!1sen!2suk!4v1740387486362!5m2!1sen!2suk" width="600" height="450" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
        title="Google Maps"
        className="w-full h-full"></iframe>
      </div>
    </section>
  );
};