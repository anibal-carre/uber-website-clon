import { Link } from "react-router-dom";
import UberLogo from "./UberLogo";
import { BiUser } from "react-icons/bi";
import { TbWorld } from "react-icons/tb";
import MenuIcon from "./MenuIcon";

import CloseIcon from "./CloseIcon";

const NavBar = ({ menuOpen, handleMenuOpen }) => {
  return (
    <header className="w-full h-20 md:h-auto flex justify-between items-center px-5 md:px-10 bg-black text-white text-[14px] md:text-[18px] z-10">
      <div className="h-auto w-[20%] md:w-[15%] flex justify-center">
        {" "}
        <UberLogo />
      </div>

      <nav className="hidden md:flex md:justify-center md:w-[70%] md:gap-10 2xl:gap-14">
        <Link className="font-semibold" to={"/"}>
          Home
        </Link>
        <Link className="font-semibold" to={"/"}>
          Our products
        </Link>
        <Link className="font-semibold" to={"/"}>
          Our company
        </Link>
        <Link className="font-semibold" to={"/"}>
          Safety
        </Link>
        <Link className="font-semibold" to={"/"}>
          Help
        </Link>
      </nav>
      <div className="h-12 w-[70%] md:w-[15%] flex items-center justify-end md:justify-center gap-3 md:gap-4">
        <div className="flex gap-2 items-center">
          <TbWorld className="text-[22px] cursor-pointer" />
          <span className="font-semibold cursor-pointer">EN</span>
        </div>
        <div className="flex gap-2 items-center">
          <BiUser className="text-[22px] cursor-pointer" />
          <span className="font-semibold cursor-pointer">Log In</span>
        </div>

        <button
          onClick={handleMenuOpen}
          className="bg-black md:hidden w-[36px] h-[36px] flex justify-center items-center rounded-full"
        >
          {!menuOpen ? <MenuIcon /> : <CloseIcon />}
        </button>
      </div>
    </header>
  );
};

export default NavBar;
