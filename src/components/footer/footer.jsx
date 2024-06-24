import React from "react";
import { FooterSvg } from "../../assets";
import { CiGlobe } from "react-icons/ci";
import { IoIosArrowUp } from "react-icons/io";

const Footer = () => {
  return (
    <div className="mt-6 w-full h-[48.39px] sticky bottom-0 bg-white border-t-[1px] border-t-[rgb(221, 221, 221)] flex items-center">
      <div className="container mx-auto flex justify-between  flex-col md:flex-row">
        <div className="flex gap-3 cursor-pointer">
          <p className="mr-1">© 2023 Airbnb, Inc.</p>
          <p>Terms</p>
          <p>Sitemap</p>
          <p>Privacy</p>
          <p>Your Privacy Choices</p>
          <FooterSvg />
        </div>
        <div className="flex items-center gap-2">
          <CiGlobe />
          <p>English (US)</p>
          <p>$ USD</p>
          <p>Support & resources</p>
          <IoIosArrowUp />
        </div>
      </div>
    </div>
  );
};

export default Footer;
