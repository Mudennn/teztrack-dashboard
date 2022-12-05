import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../data/Logo.png";
import { AiOutlineMenu } from "react-icons/ai";
import { useStateContext } from "../contexts/ContextProvider";
import SearchButton from "./SearchButton";

const NavButton = ({ customFunc, icon, color, dotColor }) => (
  // untuk open and close sidebar
  <button
    type="button"
    onClick={customFunc}
    style={{ color }}
    className="relative text-xl rounded-full flex items-center justify-center lg:hidden"
  >
    <span style={{ background: dotColor }} className="absolute inline-flex " />
    {icon}
  </button>
);

const Navbar2 = ({ wallet, setWallet }) => {
  const { setActiveMenu, screenSize, setScreenSize } = useStateContext();

  // Untuk bagi sidebar auto hilang bila screen kecik
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [setScreenSize]);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize, setActiveMenu]);

  return (
    <div className="bg-white border-b-1 border-black">
      <div className="flex justify-between p-2 md:ml-6 md:mr-6 relative  ">
        <NavButton
          tittle="Menu"
          customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
          color="blue"
          icon={<AiOutlineMenu />}
        />
        {/* Logo  */}
        <Link
          to="/"
          className="items-center gap-3 ml-3 flex text-xl font-extrabold tracking-tight dark:text-white text-black"
        >
          <img src={logo} alt="" className="w-[200px]" />
        </Link>
        {/* Search bar  */}
        <SearchButton wallet={wallet} setWallet={setWallet} />
        {/* Connect wallet button  */}
        <button className="hover:bg-white bg-[#734ccc] hover:text-black text-white font-semibold py-2 px-4 border-2 border-[#734ccc] rounded-full md:ml-2 md:w-44 text-xs ">
          Connect Wallet
        </button>
      </div>
    </div>
  );
};

export default Navbar2;
