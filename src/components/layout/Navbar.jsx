import React from "react";
import { Link } from "react-scroll";

const Navbar = ({ isScrolled }) => {
  /* 
    Local UI state
  */
  const [currentActive, setCurrentActive] = React.useState("home");

  /* 
    Meta data
  */
  const buttonsMetaData = [
    {
      text: "Home",
      link: "home",
    },
    {
      text: "Blogs",
      link: "blogs",
    },
    {
      text: "About Us",
      link: "about",
    },
    {
      text: "Services",
      link: "services",
    },
    {
      text: "Contact Us",
      link: "contact",
    },
  ];

  /* 
    JSX
  */
  return (
    <div
      className={`w-full h-[12dvh] transition-all duration-300 ease-linear ${isScrolled && "shadow-lg"}`}
    >
      <div className="w-[92%] md:w-[80%] h-full flex justify-between items-center m-auto">
        {/* Menu page */}

        {/* Hamburger */}
        {/* <button className="flex justify-between items-center space-x-4 border-[2px] border-stone-500 rounded-full px-4 py-2">
          <span className="font-semibold text-xl text-stone-800">Menu</span>

          <img src="/icons/menu.svg" alt="hamburger_icon" />
        </button> */}

        {/* Identification */}
        <Link
          className="flex justify-between items-center space-x-2 md:space-x-4 cursor-pointer"
          to="home"
          smooth={true}
          duration={500}
          onClick={() => setCurrentActive("home")}
        >
          <img
            src="/drawables/logo.png"
            alt="website_logo"
            className="w-12 h-12 md:w-16 md:h-16"
          />

          <span className="font-semibold text-xl text-stone-800">
            Noble Smile Dental
          </span>
        </Link>

        {/* Actionables */}
        <div className="hidden md:flex justify-between items-center space-x-8">
          {buttonsMetaData.map((button, index) => (
            <div key={index}>
              <Link
                to={button?.link}
                smooth={true}
                duration={500}
                offset={-70}
                className={` font-semibold text-lg cursor-pointer ${currentActive === button?.link ? "text-pink-800" : "text-stone-800"}`}
                onClick={() => setCurrentActive(button?.link)}
              >
                {button.text}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
