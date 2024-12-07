import React from "react";

const Navbar = ({ isScrolled }) => {
  return (
    <div className={`w-full h-[12dvh] transition-all duration-300 ease-linear ${isScrolled && "shadow-lg"}`}>
      <div className="w-[80%] h-full flex justify-between items-center m-auto">
        {/* Menu page */}

        {/* Hamburger */}
        <button className="flex justify-between items-center space-x-4 border-[2px] border-stone-500 rounded-full px-4 py-2">
          <span className="font-semibold text-xl text-stone-800">Menu</span>

          <img src="/icons/menu.svg" alt="hamburger_icon" />
        </button>

        {/* Identification */}
        <div className="flex justify-between items-center space-x-4 cursor-pointer">
          <img
            src="/drawables/logo.png"
            alt="website_logo"
            className="w-16 h-16"
          />

          <span className="font-semibold text-xl text-stone-800">
            Noble Smile Dental
          </span>
        </div>

        {/* Actionables */}
        <div className="flex justify-between items-center space-x-4">
          <button className="px-4 py-2 rounded-full border-[2px] border-stone-700 text-stone-700">
            Login
          </button>

          <button className="px-4 py-2 rounded-full border-[2px] border-pink-700 bg-pink-700 text-stone-100">
            New patient
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
