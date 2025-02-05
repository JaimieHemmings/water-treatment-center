import React from "react";
import SectionTitle from "@/components/SectionTitle";
import FAQBlockClient from "./client";

export const FaqBlock: React.FC = () => {
  return (
    <section className="py-[5rem] bg-darkblue text-white">
      <SectionTitle title="Frequently Asked Questions" />
      <div className="container">
        <FAQBlockClient />
      </div>
    </section>
  );
};

export default FaqBlock;