import React from "react";

const AboutDoctor = () => {
  return (
    <div className="w-full mt-[-8rem] md:mt-0">
      <div className="w-[88%] md:w-[80%] mx-auto flex md:flex-row flex-col justify-between items-end md:space-x-4">
        <div className="w-full md:w-[60%] h-full flex flex-col gap-6">
          <span className="text-[4rem]">About us</span>

          <span className="">
            Dr. Neha Prasad Tyagi completed her Bachelor in Dental Surgery in
            2016, graduating with first division honors. She is registered with
            the Indian Dental Council and specializes in root canal treatments,
            smile design, and dental aesthetics. Her expertise and commitment to
            patient care make her a trusted professional in the field of
            dentistry.
          </span>

          <span className="">
            With over eight years of experience as a dental surgeon, Dr. Neha
            has honed her skills at esteemed multi-specialty hospitals like
            Dharmashala Narayana Superspeciality Hospital in New Delhi, Neo
            Multispeciality Hospital in Noida, and Sumitra Hospital in Noida.
            Throughout her career, she has successfully treated more than 10,000
            patients, including patients of ECHS, CGHS, and various other
            insurance panels. Her dedication to patient care and commitment to
            excellence in dentistry set her apart in the field.
          </span>

          <span className="">
            Noble Smile Dental Care was established by Dr. Neha P . Tyagi in
            2021. The first branch opened in September 2021 in South Delhi and
            has successfully completed four years, serving over 1,000 satisfied
            patients.
          </span>

          <span className="">
            Noble Smile Dental Care was established by Dr. Neha P . Tyagi in
            2021. The first branch opened in September 2021 in South Delhi and
            has successfully completed four years, serving over 1,000 satisfied
            patients.
          </span>

          <span className="">
            In June 2024, a second branch was launched in Gaur City 2, Noida
            Extension, and it has also achieved great success. Dr. Neha's
            dedication to patient care and excellence in dental services
            continues to drive the growth of Noble Smile Dental Care.
          </span>
        </div>

        <div className="w-full md:w-[40%] h-[20rem] md:h-[24rem] bg-stone-300 rounded-2xl border-[2px] border-stone-300 relative shadow-inner mt-[12rem]">
          <img
            src="/drawables/doctor_sample-img.png"
            alt="doctor's_image"
            className="h-[36rem] md:h-[44rem] w-full absolute bottom-0 left-0"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutDoctor;
