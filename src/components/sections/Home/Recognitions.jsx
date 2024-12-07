import React from "react";

const Recognitions = () => {
  return (
    <div className="w-full">
      <div className="w-[90%] flex justify-between items-stretch space-x-6">
        {/* Frame */}
        <div className="w-[64%] h-[72vh] border-[24px] border-stone-800 shadow-2xl bg-white box-content rounded-lg">
          <img
            src="/drawables/certificate-1.jpg"
            alt="certificate-1_img"
            className="h-full w-full bg-center bg-cover object-cover object-center"
          />
        </div>

        {/* Details */}
        <div className="w-[26%] flex flex-col gap-5">
          <span className="text-stone-800 text-[6.4rem]">B.D.S</span>

          <div className="flex justify-start items-baseline space-x-3 mt-[-1.2rem]">
            <span className="text-[1.6rem]">2018-2023, </span>
            <span className="text-lg text-pink-700">Sharda University</span>
          </div>

          <span className="text-stone-600">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos iste
            aliquid ducimus voluptatibus tenetur repellendus, obcaecati vero
            minima nisi nam exercitationem suscipit quo pariatur autem veritatis
            doloribus possimus laboriosam reiciendis! Eos iste
            aliquid ducimus voluptatibus tenetur repellendus, obcaecati vero
            minima nisi nam exercitationem suscipit quo pariatur autem veritatis
            doloribus possimus laboriosam reiciendis!
          </span>
        </div>
      </div>
    </div>
  );
};

export default Recognitions;
