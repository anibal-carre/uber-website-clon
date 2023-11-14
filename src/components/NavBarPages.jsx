import { Link } from "react-router-dom";
import UberLogo from "./icons/UberLogo";
import MenuIcon from "./icons/MenuIcon";

import CloseIcon from "./icons/CloseIcon";
import WorldIcon from "./icons/WorldIcon";
import ArrowDown from "./icons/ArrowDown";
import DotsIcon from "./icons/DotsIcon";

const NavBarPages = () => {
  return (
    <header className="w-full h-16 flex justify-center items-center px-0 md:px-14 bg-black text-white text-[16px] z-10">
      <div className="w-full max-w-[1400px] h-16 flex justify-between items-center px-4 md:px-6 xl:px-14 bg-black text-white text-[16px] z-10">
        <div className="h-auto w-[50%] flex justify-start items-center gap-8">
          {" "}
          <div className="w-[50px] h-[40px]">
            <UberLogo />
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBarPages;
