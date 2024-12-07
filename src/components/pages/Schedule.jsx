import React, { useEffect } from "react";

const Schedule = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="calendly-inline-widget w-full h-[32rem]"
      data-url="https://calendly.com/piyushhhagarwal?hide_landing_page_details=1&hide_gdpr_banner=1&primary_color=be185d"
    ></div>
  );
};

export default Schedule;
