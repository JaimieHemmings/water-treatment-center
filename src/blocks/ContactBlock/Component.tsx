import React from "react";

export const ContactBlock: any = () => {
  return (
    <section className="w-full py-5 md:py-[10rem] bg-jet text-white">
      <div className="container pb-5">
        <h2 className="block text-selectiveyellow font-semibold pb-5">
          Contact Us
        </h2>
        <p className="text-4xl md:text-6xl font-semibold">We look forward to <span className="text-selectiveyellow">learning</span> how we can help you.</p>
      </div>
      <div className="container flex flex-col md:flex-row py-5">
        <div className="basis-1/2 flex flex-col gap-4">
          <h3 className="text-selectiveyellow">
            Showrooms
          </h3>
          <address>
          13B Axis Business Park, Tullamore, Co Offaly, R35 XK13
          </address>
          <p>Open 9am – 6pm Monday to Friday</p>

          <h3 className="text-selectiveyellow">
            Warehouse
          </h3>
          <address>
          Harbour Rd, Kilbeggan,  Co Westmeath
          </address>

          <h3 className="text-selectiveyellow">
            Contact
          </h3>
          <p>
            <a className="hover:opacity-50 transition-all" href="tel:0861715686">086 1715686</a>
          </p>
          <p>
            <a className="hover:opacity-50 transition-all" href="tel:0579333942">057 9333942</a>
          </p>
          <p>
            <a href="mailto:info@thewatertreatmentcentre.ie" className="hover:opacity-50 transition-all">
              info@thewatertreatmentcentre.ie
            </a>
          </p>
        </div>
        <div className="basis-1/2 py-5 md:py-0">

          <form className="flex flex-col gap-4">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              className="mt-1 block w-full p-5 rounded-md shadow-sm focus:outline-1 focus:ring-azul focus:border-azul text-lg bg-[#2d2d2d] text-white"
            />

            <input
              type="email"
              placeholder="your@email.com"
              id="email"
              name="email"
              className="mt-1 block w-full p-5 rounded-md shadow-sm focus:outline-1 focus:ring-azul focus:border-azul text-lg bg-[#2d2d2d] text-white"
            />

            <textarea
              id="message"
              name="message"
              placeholder="Message"
              rows={4}
              className="mt-1 block w-full p-5 rounded-md shadow-sm focus:outline-1 focus:ring-azul focus:border-azul text-lg bg-[#2d2d2d] text-white"
            ></textarea>

            <button
              type="submit"
              className="inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 py-3 mt-3 border bg-selectiveyellow text-jet hover:bg-jet hover:text-selectiveyellow text-xl hover:border-selectiveyellow"
            >
              Submit
            </button>
          </form>

        </div>
      </div>
    </section>
  );
};