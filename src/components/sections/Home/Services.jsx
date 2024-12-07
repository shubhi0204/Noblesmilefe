import React from "react";

const Services = () => {
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
            className="w-full text-[4rem] font-normal text-stone-900 tracking-wide"
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
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
              <div
                className="relative w-[30%] h-[12rem] flex-shrink-0"
                key={index}
              >
                <img
                  src={`/drawables/services--${2}.jpg`}
                  alt="service_image"
                  className="h-full w-full rounded-4xl bg-center bg-cover object-center object-cover rounded-3xl"
                />

                <span className="w-[80%] bg-[#ffffffc9] rounded-full flex justify-center items-center px-2 py-2 absolute left-[50%] translate-x-[-50%] bottom-3 mx-auto">
                  Root canal
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
