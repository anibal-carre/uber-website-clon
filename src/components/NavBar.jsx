import { Link } from "react-router-dom";
import UberLogo from "./UberLogo";
import { BiUser } from "react-icons/bi";
import { TbWorld } from "react-icons/tb";

const NavBar = () => {
  return (
    <header className="w-full h-auto flex items-center border px-5 bg-white text-black">
      <div className="h-auto w-[15%]">
        {" "}
        <UberLogo />
      </div>

      <nav className="flex justify-center w-[70%] gap-5">
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
      <div className="h-12 w-[15%] flex items-center gap-4">
        <div className="flex gap-2 items-center">
          <TbWorld className="text-[22px] cursor-pointer" />
          <span className="font-semibold cursor-pointer">EN</span>
        </div>
        <div className="flex gap-2 items-center">
          <BiUser className="text-[22px] cursor-pointer" />
          <span className="font-semibold cursor-pointer">Log In</span>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
