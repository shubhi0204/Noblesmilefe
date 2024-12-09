import React from "react";

const AboutDoctor = () => {
  return (
    <div className="w-full">
      <div className="w-[80%] mx-auto flex justify-between items-center space-x-4">
        <div className="w-[60%] h-full">&nbsp;</div>

        <div className="w-[40%] h-[24rem] bg-stone-300 rounded-2xl border-[2px] border-stone-300 relative shadow-inner">
          <img
            src="/drawables/doctor_sample-img.png"
            alt="doctor's_image"
            className="h-[44rem] w-full absolute bottom-0 left-0"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutDoctor;
