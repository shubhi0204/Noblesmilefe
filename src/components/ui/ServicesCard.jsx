import React, { useState } from "react";

const ServicesCard = ({ data, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleMouseEnter = () => {
    setIsFlipped(true);
  };

  const handleMouseLeave = () => {
    setIsFlipped(false);
  };

  return (
    <div
      className="w-[30%] h-[12rem] flex-shrink-0 cursor-pointer relative"
      key={index}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: "1000px" }}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 transform-style-preserve-3d ${isFlipped ? "rotate-y-180" : ""}`}
      >
        {/* Front side */}
        <div
          className="absolute w-full h-full backface-hidden flex justify-center items-center"
          style={{ backfaceVisibility: "hidden" }}
        >
          <img
            src={`/drawables/services--${2}.jpg`}
            alt="service_image"
            className="h-full w-full bg-center bg-cover object-center object-cover rounded-3xl"
          />

          <span className="w-[88%] bg-[#ffffffc9] rounded-full flex justify-center items-center px-2 py-2 absolute left-[50%] translate-x-[-50%] bottom-3 mx-auto">
            {data?.title}
          </span>
        </div>

        {/* Back side */}
        <div
          className="absolute w-full h-full backface-hidden flex justify-center items-center bg-[#005087] rounded-3xl p-4 text-stone-100"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <p className="text-center text-sm">{data?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
