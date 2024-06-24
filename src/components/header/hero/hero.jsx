import { Button, Switch } from "@mui/material";
import React from "react";
import { homeProducts } from "../../../util/constants";
import { FaStar } from "react-icons/fa";

const Hero = () => {
  return (
    <>
      <div className="max-w-[628px] h-[66px] rounded-[12px] border m-auto flex items-center justify-between px-[17px] mb-[24px]">
        <div className="flex gap-2">
          <h4 className="font-bold">Display total price</h4>
          <div className="border" />
          <p className="text-slate-400">Includes all fees, before taxes</p>
        </div>
        <div>
          <Switch defaultChecked />
        </div>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {homeProducts.map((item, idx) => (
          <div className="w-[302px] mx-auto md:mx-0 cursor-pointer">
            <img
              className="rounded-[12px] mb-[12px]"
              src={item.img}
              alt={item.title}
            />
            <div className="flex justify-between">
              <div>
                <h2 className="font-bold">{item.title}</h2>
                <h3>{item.types}</h3>
                <p>{item.when}</p>
                <h2 className="font-bold">{item.price}</h2>
              </div>
              <div className="flex items-start">
                <div className="flex items-center">
                  <FaStar /> {item.starts}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Hero;
