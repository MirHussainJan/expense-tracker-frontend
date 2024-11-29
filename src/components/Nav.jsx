import React from "react";
import { MdDashboard } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi";
import { FaUserCog } from "react-icons/fa";
import { BsFillClipboard2CheckFill } from "react-icons/bs";

const Nav = () => {
  return (
    <nav
      className="nav flex w-2/3 gap-2 border-2 border-black justify-between px-6 py-2 sm:w-1/2 md:w-2/5 lg:w-1/4 xl:w-1/5 bg-white shadow-lg rounded-full fixed bottom-2 left-1/2 transform -translate-x-1/2"
    >
      <div aria-label="Home" className="flex flex-col gap-1 items-center">
        <MdDashboard className="text-lg" />
        <span className="under text-xs font-semibold">Home</span>
      </div>
      <div aria-label="Groups" className="flex flex-col gap-1 items-center">
        <HiUserGroup className="text-lg" />
        <span className="under text-xs font-semibold">Groups</span>
      </div>
      <div aria-label="Approvals" className="flex flex-col gap-1 items-center">
        <BsFillClipboard2CheckFill className="text-lg" />
        <span className="under text-xs font-semibold">Approvals</span>
      </div>
      <div aria-label="Profile" className="flex flex-col gap-1 items-center">
        <FaUserCog className="text-lg" />
        <span className="under text-xs font-semibold">Profile</span>
      </div>
    </nav>
  );
};

export default Nav;