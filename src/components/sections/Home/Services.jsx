import React from "react";

import ServicesCard from "../../ui/ServicesCard";

const Services = () => {
  /* 
    Meta data
  */
  const servicesMetaData = [
    {
      title: "Tooth Extraction",
      description:
        "Safe removal of teeth with minimal discomfort, tailored for your oral health needs.",
    },
    {
      title: "Dental Implant",
      description:
        "Durable and natural-looking teeth replacement with advanced pain-free techniques.",
    },
    {
      title: "Root Canal",
      description:
        "Quick and efficient treatment to save infected teeth in just one session.",
    },
    {
      title: "Teeth Whitening",
      description:
        "Professional whitening solutions to brighten your smile effectively and safely.",
    },
    {
      title: "Dental Bleaching",
      description:
        "Restore the natural whiteness of your teeth with our gentle bleaching procedures.",
    },
    {
      title: "Veneers",
      description:
        "Achieve a flawless smile with custom veneers and expert aesthetic design.",
    },
    {
      title: "Braces",
      description:
        "Straighten teeth with traditional braces or invisible aligners for a perfect smile.",
    },
    {
      title: "Pediatric Dentistry",
      description:
        "Gentle and specialized dental care tailored to ensure healthy smiles for children.",
    },
    {
      title: "More..",
      description: "Explore more dental services to meet your specific needs.",
    },
  ];

  /* 
    JSX
  */
  return (
    <div className="w-full h-[100dvh]">
      <div className="w-[80%] h-full flex justify-between items-center m-auto">
        {/* Content */}
        <div className="w-[46%] h-full flex flex-col gap-8 translate-y-[20%]">
          <div className="flex justify-start items-center space-x-4">
            <img
              src="/icons/tooth.png"
              alt="tooth_icon"
              className="h-10 w-10 bg-blue-200 rounded-full object-contain p-2 aspect-square"
            />

            <img
              src="/icons/tooth.png"
              alt="tooth_icon"
              className="h-10 w-10 bg-blue-200 rounded-full object-contain p-2 aspect-square"
            />

            <img
              src="/icons/tooth.png"
              alt="tooth_icon"
              className="h-10 w-10 bg-blue-200 rounded-full object-contain p-2 aspect-square"
            />
          </div>

          <span
            className="w-full text-[4rem] font-normal text-stone-900 tracking-wide mt-[-1rem]"
            style={{ wordSpacing: "0.20em" }}
          >
            <span className="text-stone-500">EXPLORE OUR SERVICES, </span>
            <span className="text-pink-800 inline font-semibold">
              MAKE YOUR SMILE SHINE
            </span>{" "}
          </span>

          <div className="w-fit flex justify-between items-center space-x-4">
            <button className="px-6 py-3 rounded-full border-[2px] border-stone-700 text-stone-700 text-xl">
              Follow up
            </button>

            <button
              className="px-6 py-3 rounded-full border-[2px] border-pink-700 bg-pink-700 text-stone-100 text-xl shadow-md"
              style={{ boxShadow: "1px 1px 4px 0.4px rgba(0, 0, 0, 0.2)" }}
            >
              Book appointment
            </button>
          </div>
        </div>

        {/* Sliders */}
        <div className="w-[50%] h-full flex justify-between items-center space-x-6 overflow-y-clip">
          {/* Container-1 */}
          <div className="w-full flex-shrink-0 flex gap-4 flex-wrap justify-between">
            {servicesMetaData?.map((item, index) => (
              <ServicesCard key={index} data={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
