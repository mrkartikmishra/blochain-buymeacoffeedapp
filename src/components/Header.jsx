import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  return (
    <div className="flex items-center justify-between w-full px-4 py-3 shadow-lg shadow-slate-800 z-50">
      <Link to={"/"}>
        <img
          src="/assets/bmc-logo.svg"
          alt="logo"
          className="h-[35px] w-[140px] cursor-pointer"
        />
      </Link>
      <div className="flex items-center justify-between gap-2">
        <Link
          to="/donations"
          className="hidden md:block font-semibold text-orange-600 cursor-pointer font-poppins hover:text-orange-700"
        >
          Donations
        </Link>
        <div className="relative md:hidden">
          <IoIosArrowDown
            size={20}
            className="cursor-pointer"
            onClick={() => setIsDropdownVisible(!isDropdownVisible)}
          />
          {isDropdownVisible && (
            <Link
              to="/donations"
              className="font-semibold cursor-pointer font-poppins text-orange-500 bg-gray-300 px-4 py-1 rounded-md absolute -left-28 top-6"
            >
              Donations
            </Link>
          )}
        </div>
        <button className="px-2 sm:px-3 md:px-4 bg-orange-500 py-[5px] md:py-2 rounded-md text-white font-poppins hover:bg-orange-600">
          Connect
        </button>
      </div>
    </div>
  );
};

export default Header;
