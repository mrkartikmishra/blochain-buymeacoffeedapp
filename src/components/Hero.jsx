import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center sm:flex-row sm:justify-center sm:gap-32 py-20 md:px-5 leading-10">
      <img
        src="/assets/bmc-icon-1.svg"
        alt="mbc hero icon"
        className="w-[100px] sm:w-[200px] sm:h-[300px]"
      />
      <div className="p-10">
        <h2 className="text-2xl sm:text-3xl font-bold font-poppins tracking-wider sm:tracking-widest">
          Get the support your <br /> work deserves
        </h2>
        <p className="text-gray-900 font-poppins leading-8 sm:leading-8 md:leading-10">
          The best for creators to accepts donations and share exclusive
          content.
        </p>
        <div className="flex flex-col gap-2 py-3">
          <button className="px-6 md:px-6 bg-orange-500 py-[2px] rounded-md text-white font-poppins hover:bg-orange-600 w-[50%] sm:w-[30%] md:w-[40%] lg:w-[30%]">
            Connect
          </button>
          <p className="text-xs text-gray-500">Takes less than a minute</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
