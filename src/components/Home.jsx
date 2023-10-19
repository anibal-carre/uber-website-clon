import { useState } from "react";
import NavBar from "./NavBar";
import { motion } from "framer-motion";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuOpen = () => setMenuOpen(!menuOpen);
  return (
    <div className="w-screen h-screen flex flex-col bg-zinc-800 text-white relative z-10">
      <NavBar menuOpen={menuOpen} handleMenuOpen={handleMenuOpen} />
      {menuOpen && (
        <motion.div
          animate={{ y: 0 }}
          initial={{ y: -1000 }}
          transition={{ type: "spring", delay: 0.2, duration: 0.2 }}
          className="bg-white w-full h-full absolute top-20 left-0 transition-all z-5"
        >
          {/* Contenido del menú */}
          <ul className="py-2 px-4">
            <li className="hover:bg-gray-200 text-black">Opción 1</li>
            <li className="hover:bg-gray-200 text-black">Opción 2</li>
            <li className="hover:bg-gray-200 text-black">Opción 3</li>
          </ul>
        </motion.div>
      )}
      <h1>hello</h1>
    </div>
  );
};

export default Home;
