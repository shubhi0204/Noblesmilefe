import React from "react";

const Blogs = () => {
  return (
    <div className="w-full flex flex-col gap-[2.4rem]">
      <div className="flex justify-center items-center space-x-2">
        <div className="w-fit flex justify-between items-center space-x-3 text-stone-700 font-semibold text-4xl md:text-5xl">
          <span>Read</span>
          <span className="text-pink-700">Us.</span>
        </div>
      </div>

      <span className="flex justify-center items-center w-[80%] mx-auto text-stone-700 text-4xl md:text-[4rem] font-serif font-light">
        Coming soon <span className="animate-pulse text-pink-600">.</span>
      </span>
    </div>
  );
};

export default Blogs;
