import React from "react";

const Button = ({ children, onClick, height, width }) => {
  const buttonStyle = {
    height: height ? `${height}rem` : undefined,
    width: width ? `${width}rem` : undefined,
  };

  return (
    <button
      className={`flex justify-center items-center px-6 py-2 font-semibold text-stone-50 bg-pink-800 rounded-md shadow-lg hover:scale-[103%] transition-all duration-300 ease-linear `}
      style={buttonStyle}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
