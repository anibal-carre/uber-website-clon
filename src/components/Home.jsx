import { useState } from "react";
import NavBar from "./NavBar";
import { motion } from "framer-motion";
import ArrowDown from "./icons/ArrowDown";
import DotsIcon from "./icons/DotsIcon";
import WorldIcon from "./icons/WorldIcon";
import Menu from "./Menu";
import HeroSection from "./HeroSection";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuOpen = () => setMenuOpen(!menuOpen);
  return (
    <div className="w-screen h-screen flex flex-col bg-white text-white relative z-10">
      <NavBar menuOpen={menuOpen} handleMenuOpen={handleMenuOpen} />
      {menuOpen && <Menu />}
      <HeroSection />
    </div>
  );
};

export default Home;
