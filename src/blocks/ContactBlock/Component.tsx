import React from "react";
import { FormBlock } from "@/blocks/Form/Component";

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
    <section className="w-full py-5 md:py-[10rem] bg-darkblue text-white">
      <div className="container pb-5">
        <h2 className="block text-selectiveyellow font-semibold pb-5">
          {title}
        </h2>
        <p className="text-5xl font-semibold">
          {subtitleStart}{' '}
          <span className="text-selectiveyellow">
            {subtitleHighlight}
          </span>
          {' '}{subtitleEnd}
        </p>
      </div>
      <div className="container flex flex-col md:flex-row py-5">
        <div className="basis-1/2 flex flex-col gap-4">
        <h3 className="text-selectiveyellow">Showrooms</h3>
          { showRoomAddresses && (
            showRoomAddresses.map((showRoomAddress, index) => {
              return (
                <div key={index}>
                  <address className="text-white">
                    {showRoomAddress.showRoomAddress}
                  </address>
                  <p className="text-white">
                    {showRoomAddress.showRoomOpeningHours}
                  </p>
                </div>
              );
            })
          )}
          <h3 className="text-selectiveyellow">
            Warehouse
          </h3>
          { warehouseAddresses && (
            warehouseAddresses.map((warehouseAddress, index) => {
              return (
                <address key={index}>
                  {warehouseAddress.warehouseAddress}
                </address>
              );
            })
          )}
          <h3 className="text-selectiveyellow">
            Contact
          </h3>
          { phoneNumbers && (
            phoneNumbers.map((phoneNumber, index) => {
              return (
                <p key={index}>
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
                    {emailAddress.emailAddress}
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
    </section>
  );
};