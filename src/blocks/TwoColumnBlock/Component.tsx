import React from "react";

export const TwoColumnBlock: any = ({ contentleft, contentright }) => {
  return (
    <section className="w-full bg-jet py-[5rem]">
      <div className="container pb-5 flex flex-col md:flex-row justify-between border-b-8 border-argentinian">
        <div className="md:basis-1/3 p-5">
          <p className="max-w-none md:prose-md prose mb-5 text-md text-white font-light">
            {contentleft}
          </p>
        </div>
        <div className="md:basis-2/3 p-5">
          <p className="mb-5 text-2xl md:text-4xl text-white md:leading-[60px] font-light">
            {contentright}
          </p>
        </div>        
      </div>
    </section>
  );
};