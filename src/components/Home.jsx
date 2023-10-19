import { useState } from "react";
import NavBar from "./NavBar";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuOpen = () => setMenuOpen(!menuOpen);
  return (
    <div className="w-screen h-screen flex flex-col bg-zinc-800 text-white relative">
      <NavBar menuOpen={menuOpen} handleMenuOpen={handleMenuOpen} />
      {menuOpen && (
        <div className="bg-white w-full h-full absolute top-20 left-0 transition-all">
          {/* Contenido del menú */}
          <ul className="py-2 px-4">
            <li className="hover:bg-gray-200">Opción 1</li>
            <li className="hover:bg-gray-200">Opción 2</li>
            <li className="hover:bg-gray-200">Opción 3</li>
          </ul>
        </div>
      )}
      <h1>hello</h1>
    </div>
  );
};

export default Home;
