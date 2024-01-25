import React from "react";
import Logo from "../assets/black-logo.png";

export const Footer = () => {
  return (
    <div className="flex gap-3  justify-between mt-20 bg-red-700 h-[200px] lg:px-[77px] ">
      <img className=" w-[100px] md:w-[150px] h-[150px]" src={Logo} />
      <p className=" text-center m-auto text-xl">
        Whatsapp- 05432960902 <br /> Instagram- funnydogfarm35{" "}
      </p>
      <div className=" flex flex-row gap-3 my-auto">
        <h1 className=" text-3xl text-center font-bold text-black mr-5">
          Funny Dog Farm
        </h1>
      </div>
    </div>
  );
};

// Whatsapp- 05432960902
// Instagram- funnydogfarm35
