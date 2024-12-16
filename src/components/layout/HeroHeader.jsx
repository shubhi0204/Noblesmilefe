import React from "react";

const HeroHeader = () => {
  return (
    <div className="w-full h-[88dvh] mt-[12dvh]">
      <div className="w-[88%] md:w-[80%] h-full m-auto flex justify-center items-center relative">
        {/* Bg text */}
        <span className="w-full hidden md:flex md:flex-row flex-col justify-between text-[4rem] md:text-[8rem] font-normal text-stone-900 tracking-wide text-justify mt-[-20rem] md:mt-[-3.2rem]">
          <span className="self-start">NOBLE</span>
          <span className="self-end">SMILE</span>
        </span>

        {/* Photo album */}
        <div className="w-[64%] md:w-[40%] h-[48%] md:h-[80%] absolute left-[50%] top-[44%] md:top-[50%] translate-x-[-50%] translate-y-[-50%]">
          {/* Wrapper */}
          <div className="h-full w-full relative">
            <img
              src="/drawables/hero--1.jpg"
              alt="advace tech"
              className="w-full h-full absolute left-0 top-0 rotate-[-25deg] bg-center bg-cover object-center object-cover rounded-3xl shadow-lg z-0"
            />

            <img
              src="/drawables/hero--2.jpg"
              alt="advace tech"
              className="w-full h-full absolute left-0 top-0 rotate-[-15deg] bg-center bg-cover object-center object-cover rounded-3xl shadow-lg z-10"
            />

            <img
              src="/drawables/hero--3.jpg"
              alt="advace tech"
              className="w-full h-full absolute left-0 top-0 rotate-[-5deg] bg-center bg-cover object-center object-cover rounded-3xl shadow-lg z-20"
            />

            <img
              src="/drawables/hero--4.jpg"
              alt="advace tech"
              className="w-full h-full absolute left-0 top-0 rotate-[5deg] bg-center bg-cover object-center object-cover rounded-3xl shadow-lg z-30"
            />
          </div>
        </div>

        {/* Bottom left bar */}
        <div className="absolute left-0 bottom-12 flex flex-col gap-2">
          <div className="h-3 w-3 bg-blue-700 rounded-full animate-pulse">&nbsp;</div>

          <span className="text-xl">Your smile, Our passion</span>
        </div>

        {/* Bottom right bar */}
      </div>
    </div>
  );
};

export default HeroHeader;
