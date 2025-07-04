import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center gap-[10px] Padding Paddding">
      <h1 className="font-[lato] text-[16px] sm:text-[20px] lg:text-[24px] text-[#757575] text-center sm:text-left transition-all duration-300">
        Copyright © 2024. All rights reserved.
      </h1>

      <h2 className="font-[lato] text-[16px] sm:text-[20px] lg:text-[24px] text-[#757575] text-center sm:text-right transition-all duration-300">
        Privacy Policy | Terms & Conditions
      </h2>
    </div>
  );
};

export default Footer;
