import React, { useState } from "react";

const ContactSidebar = ({ onTabChange }) => {
  const [currentSelection, setCurrentSelection] = useState("Enquiry");
  const [hoverItem, setHoverItem] = useState(null);

  const handleSelection = (selection) => {
    setCurrentSelection(selection);
  };

  const handleTabClick = (tabName) => {
    handleSelection(tabName);
    onTabChange(tabName);
  };

  return (
    <div className="w-full flex items-start">
      <div className="flex justify-start items-center">
        <div className="flex flex-row md:flex-col items-start justify-start md:gap-12 space-x-8 md:space-x-0">
          <span
            className={`text-2xl md:text-3xl hover:text-pink-700 transition-all duration-300 ease-linear underline-offset-[0.8rem] ${currentSelection === "Schedule call" ? "underline" : ""}`}
            onClick={() => handleTabClick("Schedule call")}
            onMouseEnter={() => setHoverItem("Schedule call")}
            onMouseLeave={() => setHoverItem(null)}
            style={{
              cursor: "pointer",
              color:
                hoverItem === "Schedule call" ||
                currentSelection === "Schedule call"
                  ? "inherit"
                  : "#4b5563",
              textDecorationColor:
                currentSelection === "Schedule call" ? "#be185d" : "inherit",
              transition: "color 0.3s ease, text-decoration-color 0.3s ease",
            }}
          >
            Appointment
          </span>

          <span
            className={`text-2xl md:text-3xl underline-offset-[0.8rem] hover:text-oink-700 transition-all duration-300 ease-linear ${currentSelection === "Enquiry" ? "underline" : ""}`}
            onClick={() => handleTabClick("Enquiry")}
            onMouseEnter={() => setHoverItem("Enquiry")}
            onMouseLeave={() => setHoverItem(null)}
            style={{
              cursor: "pointer",
              color:
                hoverItem === "Enquiry" || currentSelection === "Enquiry"
                  ? "inherit"
                  : "#4b5563",
              textDecorationColor:
                currentSelection === "Enquiry" ? "#be185d" : "inherit",
              transition: "color 0.3s ease, text-decoration-color 0.3s ease",
            }}
          >
            Enquiry &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactSidebar;
