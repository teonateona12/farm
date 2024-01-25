import React from "react";
import Logo from "../assets/logo.png";

export const Header = () => {
  return (
    <div className="flex gap-3 justify-between ">
      <img className=" w-[100px]" src={Logo} />
      <div className=" flex flex-row gap-3 my-auto">
        <h1 className=" text-3xl text-center font-bold text-red-800">
          Funny Dog Farm
        </h1>
      </div>
    </div>
  );
};
