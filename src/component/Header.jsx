import React from "react";
import Logo from "../assets/logo.png";

export const Header = () => {
  return (
    <div className="flex gap-3 justify-between ">
      <img className=" w-[100px]" src={Logo} />
      <div className=" flex flex-row gap-3 my-auto">
        <p>Home</p>
        <p>Contact</p>
        <p>Dogs</p>
      </div>
    </div>
  );
};
