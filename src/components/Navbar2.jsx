import React from "react";
import { Link } from "react-router-dom";
import logo from "../data/Logo.png";
import { FiSearch } from "react-icons/fi";

const Navbar2 = () => {
  return (
    <div className="bg-white border-b-1 border-black">
      <div className="flex justify-between p-2 md:ml-6 md:mr-6 relative  ">
        {/* Logo  */}
        <Link
          to="/"
          className="items-center gap-3 ml-3 flex text-xl font-extrabold tracking-tight dark:text-white text-black"
        >
          <img src={logo} alt="" className="w-[200px]" />
        </Link>
        {/* Search bar  */}
        <div className="mx-auto mt-1 text-gray-600 flex items-center gap-2 border-2 border-[#734ccc] bg-white h-10 rounded-lg pl-3">
          <button type="submit" className="">
            <FiSearch />
          </button>
          <input
            className=" w-[300px] pr-2 text-sm focus:outline-none"
            type="search"
            name="search"
            placeholder="Search Address / Web3 ID / ENS / Protocol"
          />
        </div>
        {/* Connect wallet button  */}
        <button className="bg-white hover:bg-[#734ccc] text-black hover:text-white font-semibold py-2 px-4 border-2 border-[#734ccc] rounded-full">
          Connect Wallet
        </button>
      </div>
    </div>
  );
};

export default Navbar2;
