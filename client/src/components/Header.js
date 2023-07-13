import React from "react";

const Header = () => {
  return (
    <div className="flex items-center justify-between w-full px-4 py-3 shadow-lg shadow-slate-800">
      <img
        src="/assets/bmc-logo.svg"
        width={200}
        height={50}
        className="h-[40px] cursor-pointer"
      />
      <div className="flex items-center justify-between gap-4">
        <a className="font-semibold cursor-pointer font-poppins">Donations</a>
        <button className="px-4 bg-orange-500 py-2 rounded-md text-white font-poppins hover:bg-orange-600">
          Connect
        </button>
      </div>
    </div>
  );
};

export default Header;
