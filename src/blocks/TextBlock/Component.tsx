import React from "react";

import RichText from "@/components/RichText";

export const TextBlock: React.FC<{ richText: any }> = ({ richText }) => {
  return (
    <section className="bg-jet p-[10rem]">
      <div className="container">
        {richText && <RichText data={richText} enableGutter={false} />}
      </div>
    </section>
  );
};