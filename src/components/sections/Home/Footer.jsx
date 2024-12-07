import React from "react";

const Footer = () => {
  return (
    <div className="w-full py-20 bg-stone-900">
      <div className="w-[80%] m-auto flex justify-between items-start gap-4">
        {/* Logo and copyright detials */}
        <div className="w-[48%] flex flex-col">
          <img
            src="/drawables/logo_bg-less.png"
            alt="logo_without_bg"
            className="w-24 h-auto ml-[-1.2rem]"
          />

          <span className="font-semibold text-xl text-stone-300">
            Noble Smile Dental
          </span>

          <span className="text-xs text-stone-300 font-light mt-2">
            All rights reserved, &copy; 2024
          </span>

          <span
            className="text-sm text-stone-300 font-light mt-6"
            style={{ justifySelf: "flex-end" }}
          >
            Created with ♥️ by
            <a
              href="https://bugbashers.in/"
              className="underline ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bugbashers
            </a>
          </span>
        </div>

        {/* Important links */}
        <div className="w-[16%] flex flex-col gap-5">
          <span className="text-pink-600 font-semibold text-3xl">Pages</span>
          <div className="flex flex-col gap-3 text-stone-200">
            <button className="w-fit">Services</button>
            <button className="w-fit">Recognitions</button>
            <button className="w-fit">Testimonials</button>
            <button className="w-fit">Contact</button>
          </div>
        </div>

        {/* Contact info */}
        <div className="w-[40%] flex flex-col items-start gap-5">
          <span className="text-pink-600 font-semibold text-3xl">Find us</span>
          <div className="flex flex-col gap-3 text-stone-200">
            <span className="w-fit text-stone-300">
              FF 16 A , first floor , VVIP High street market , Gaur city 2 ,
              greater Noida Extension
            </span>

            <span className="w-fit">+91 7683021397, +91 7683021397</span>

            <span className="w-fit">Noblesmiledentalcare@gmail.com</span>
          </div>
        </div>

        {/* Social links */}
        <div className="w-[20%] flex flex-col gap-5">
          <span className="text-pink-600 font-semibold text-3xl">Socials</span>
          <div className="flex flex-col gap-3 text-stone-200">
            <a className="w-fit" href="#">
              <div className="flex justify-between space-x-3">
                <img src="/icons/instagram.svg" alt="icon_social" />
                <span className="text-stone-300 font-light text-sm">
                  118 followers
                </span>
              </div>
            </a>
            <a className="w-fit" href="#">
              <div className="flex justify-between space-x-3">
                <img src="/icons/youtube.svg" alt="icon_social" />
                <span className="text-stone-300 font-light text-sm">
                  30 subscribers
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
