import React from "react";

import RichText from "@/components/RichText";

export const TextBlock: any = ({ content, title }) => {
  return (
    <section className="w-full bg-jet py-10 pt-[10rem] bg-gradient-to-br from-argentinian to-azul">
      <div className="container pb-5">
        <h2 className="block text-selectiveyellow font-semibold pb-5">
          { title }
        </h2>
        {content && <RichText data={content} enableGutter={false} className="max-w-none prose md:prose-md mb-5 text-2xl md:text-5xl text-white mr-0" />}
      </div>
    </section>
  );
};