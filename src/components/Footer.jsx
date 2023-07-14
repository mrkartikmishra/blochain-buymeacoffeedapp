import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";
import { PiFacebookLogoBold } from "react-icons/pi";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-1 pt-10 mb-2 bg-gray-100 border-t-2">
      <div>
        <span className="font-poppins text-gray-500">
          &copy; 2023 Buy me Coffee
        </span>
      </div>
      <div>
        <ul className="flex items-center justify-center gap-3 text-orange-400 text-sm font-semibold">
          <li className="cursor-pointer hover:text-orange-500">About</li>
          <li className="cursor-pointer hover:text-orange-500">Brand</li>
          <li className="cursor-pointer hover:text-orange-500">FAQ</li>
          <li className="cursor-pointer hover:text-orange-500">Terms</li>
          <li className="cursor-pointer hover:text-orange-500">Contact</li>
        </ul>
      </div>
      <div className="flex items-center justify-center gap-2">
        <span className="w-[30px] h-[30px] rounded-full bg-orange-500 cursor-pointer hover:bg-orange-600 flex items-center justify-center text-white">
          <BsInstagram />
        </span>
        <span className="w-[30px] h-[30px] rounded-full bg-orange-500 cursor-pointer hover:bg-orange-600 flex items-center justify-center text-white text-lg">
          <FiTwitter />
        </span>
        <span className="w-[30px] h-[30px] rounded-full bg-orange-500 cursor-pointer hover:bg-orange-600 flex items-center justify-center text-white text-xl">
          <PiFacebookLogoBold />
        </span>
      </div>
    </div>
  );
};

export default Footer;
