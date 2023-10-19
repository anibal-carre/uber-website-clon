import { Link } from "react-router-dom";
import UberLogo from "./icons/UberLogo";
import MenuIcon from "./icons/MenuIcon";

import CloseIcon from "./icons/CloseIcon";
import WorldIcon from "./icons/WorldIcon";
import ArrowDown from "./icons/ArrowDown";
import DotsIcon from "./icons/DotsIcon";

const NavBar = ({ menuOpen, handleMenuOpen }) => {
  return (
    <header className="w-full h-16 flex justify-center items-center px-2 md:px-14 bg-black text-white text-[16px] z-10">
      <div className="w-full max-w-[1400px] h-16 flex justify-between items-center px-5 md:px-6 xl:px-14 bg-black text-white text-[16px] z-10">
        <div className="h-auto w-[50%] flex justify-start items-center gap-8">
          {" "}
          <div className="w-[50px] h-[40px]">
            <UberLogo />
          </div>
          <nav className="hidden md:flex h-full md:gap-8">
            <Link className="font-[500] text-[14px] flex gap-1" to={"/"}>
              Company <ArrowDown />
            </Link>
            <Link className="font-[500] text-[14px]" to={"/"}>
              Safety
            </Link>
            <Link className="font-[500] text-[14px]" to={"/"}>
              Help
            </Link>
          </nav>
        </div>

        <div className="h-12 w-[50%] flex items-center justify-end text-[14px] gap-3 md:gap-5">
          <div className="hidden md:flex gap-2 items-center">
            <WorldIcon />
            <span className="font-[500] cursor-pointer">EN</span>
          </div>
          <div className="hidden md:flex gap-2 items-center">
            <DotsIcon />
            <span className="font-[500] cursor-pointer">Products</span>
          </div>
          <div className="flex items-center gap-1">
            <button className="font-[500] cursor-pointer flex justify-center w-[70px] p-2 hover:bg-zinc-800 rounded-full">
              Log in
            </button>
            <button className="font-[500] text-black cursor-pointer flex justify-center w-[70px] p-2 bg-white hover:bg-zinc-200 rounded-full">
              Sign up
            </button>
          </div>

          <button
            onClick={handleMenuOpen}
            className="bg-black md:hidden w-[36px] h-[36px] flex justify-center items-center rounded-full"
          >
            {!menuOpen ? <MenuIcon /> : <CloseIcon />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
