import React from "react";
import { FiSearch } from "react-icons/fi";

const SearchButton = ({ wallet, setWallet }) => {
  return (
    <div>
      <div className="mx-auto mt-1 text-gray-600  items-center gap-2 border-2 border-[#734ccc] bg-white h-10 rounded-lg pl-3 hidden md:flex ">
        <FiSearch />
        <input
          className="w-[300px] pr-2 text-sm focus:outline-none"
          type="text"
          name="search"
          placeholder="Search Address / Web3 ID / ENS / Protocol"
          onChange={(e) => {
            setWallet(e.target.value);
          }}
          value={wallet}
        />
      </div>
    </div>
  );
};

export default SearchButton;
