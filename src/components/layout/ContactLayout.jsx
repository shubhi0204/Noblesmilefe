import React, { useState } from "react";
import Schedule from "../pages/Schedule";
import Contact from "../sections/Home/Contact";
import ContactSidebar from "../ui/ContactSidebar";

const ContactLayout = () => {
  const [currentTab, setCurrentTab] = useState("Enquiry");

  return (
    <div className="w-[88%] md:w-[80%] flex flex-col justify-center items-center m-auto my-[2rem] gap-12">
      {currentTab === "Enquiry" ? (
        <div className="w-fit flex justify-between items-center space-x-3 text-stone-700 font-semibold text-4xl md:text-5xl">
          <span>Ask</span>
          <span className="text-pink-700">Query.</span>
        </div>
      ) : (
        <div className="w-fit flex justify-between items-center space-x-3 text-stone-700 font-semibold text-4xl md:text-5xl">
          <span>New</span>
          <span className="text-pink-700">Appointment.</span>
        </div>
      )}

      <div className="w-full flex md:flex-row flex-col justify-between items-start md:space-x-24 gap-16 md:gap-0 my-[2.4rem]">
        <ContactSidebar onTabChange={setCurrentTab} />

        {currentTab === "Enquiry" ? (
          <div className="w-full md:w-[72%] flex-shrink-0">
            <Contact />
          </div>
        ) : (
          <div className="w-full md:w-[72%] md:mt-[-5.6rem] flex-shrink-0">
            <Schedule />
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactLayout;
