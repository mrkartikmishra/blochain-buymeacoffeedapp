import React from "react";
import { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";

const Header = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  return (
    <div className="flex items-center justify-between w-full px-4 py-3 shadow-lg shadow-slate-800">
      <img
        src="/assets/bmc-logo.svg"
        alt="logo"
        width={200}
        height={50}
        className="h-[40px] cursor-pointer"
      />
      <div className="flex items-center justify-between gap-3">
        <button className="hidden md:block font-semibold text-orange-600 cursor-pointer font-poppins">
          Donations
        </button>
        <div className="relative md:hidden">
          <AiOutlineDown
            size={20}
            className="cursor-pointer"
            onClick={() => setIsDropdownVisible(!isDropdownVisible)}
          />
          {isDropdownVisible && (
            <button className="font-semibold cursor-pointer font-poppins text-orange-500 bg-gray-300 px-4 py-1 rounded-md absolute -left-28 top-6">
              Donations
            </button>
          )}
        </div>
        <button className="px-2 md:px-4 bg-orange-500 py-1 md:py-2 rounded-md text-white font-poppins hover:bg-orange-600">
          Connect
        </button>
      </div>
    </div>
  );
};

export default Header;
