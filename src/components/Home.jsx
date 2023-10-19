import { useState } from "react";
import NavBar from "./NavBar";
import { motion } from "framer-motion";
import ArrowDown from "./icons/ArrowDown";
import DotsIcon from "./icons/DotsIcon";
import WorldIcon from "./icons/WorldIcon";
import Menu from "./Menu";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuOpen = () => setMenuOpen(!menuOpen);
  return (
    <div className="w-screen h-screen flex flex-col bg-zinc-800 text-white relative z-10">
      <NavBar menuOpen={menuOpen} handleMenuOpen={handleMenuOpen} />
      {menuOpen && <Menu />}
      <h1>hello</h1>
    </div>
  );
};

export default Home;
