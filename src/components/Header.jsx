import React from "react";
import { AiFillBell } from "react-icons/ai";

const Header = () => {
  return (
    <div className="flex items-center justify-between rounded-lg">
      {/* Left Section */}
      <div className="left flex items-center rounded-full">
        <img
          className="w-8 h-8"
          src="https://www.zarla.com/images/zarla-e-1x1-2400x2400-20211115-3wgb9mwmcqvxyfth6mgh.png?crop=1:1,smart&width=250&dpr=2"
          alt=""
        />
        <h1 className="m-0 fw-bold">XPENSE</h1>
      </div>

      {/* Right Section */}
      <div className="right flex items-center gap-4 sm:gap-2">
        <button className="py-2 text-sm border-white border-2 px-4 bg-black rounded-full text-white">
          Login
        </button>
        <div className="flex items-center justify-center w-10 h-10 border-2 border-black rounded-full bg-white">
          <AiFillBell className="text-xl" />
        </div>
        <img
          className="w-10 h-10 border-2 border-white rounded-full"
          src="https://www.shareicon.net/download/2017/05/09/885769_user_512x512.png"
          alt="User Avatar"
        />
      </div>
    </div>
  );
};

export default Header;
