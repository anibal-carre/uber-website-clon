import { motion } from "framer-motion";
import ArrowDown from "./icons/ArrowDown";
import DotsIcon from "./icons/DotsIcon";
import WorldIcon from "./icons/WorldIcon";
const Menu = () => {
  return (
    <motion.div
      animate={{ y: 0 }}
      initial={{ y: -1000 }}
      transition={{ type: "spring", delay: 0.1, duration: 0.2 }}
      className="bg-white w-full h-full absolute top-14 left-0 transition-all z-5"
    >
      <ul className="py-6 px-6 flex flex-col gap-7">
        <li className="text-black w-full text-[32px] font-bold flex items-center justify-between">
          Company <ArrowDown />
        </li>
        <li className="text-black w-full text-[32px] font-bold">Safety</li>
        <li className="text-black w-full text-[32px] font-bold">Help</li>
        <button className="border h-12 mt-10 bg-[#eee] rounded-[6px] flex items-center justify-center gap-2 text-black">
          <DotsIcon color="black" />
          Products
        </button>
        <div className="w-full px-3">
          <div className="flex gap-2 items-center">
            <WorldIcon color={"black"} />
            <span className="font-[500] cursor-pointer text-black">EN</span>
          </div>
        </div>
      </ul>
    </motion.div>
  );
};

export default Menu;
