import { motion } from "framer-motion";
import React, { useRef } from "react";
import { useScroll } from "../../Hooks/useScroll";

const Navbar = () => {
  const scrollRef = useRef(null);
  const { y, x, scrollDirection } = useScroll();
  const styles = {
    active: {
      visibility: "visible",
      transition: "all 0.5s",
    },
    hidden: {
      visibility: "hidden",
      transition: "all 0.5s",
      transform: "translateY(-100%)",
    },
  };
  return (
    <div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        style={scrollDirection === "down" ? styles.active : styles.hidden}
        className="navbar px-14 fixed z-50 bg-base-100 py-4"
      >
        <div className="flex-1">
          <button className="font-bold p-1 font-header text-5xl">
            radisson
          </button>
        </div>
        <div className="flex-none">
          <ul className="flex gap-6 text-lg font-medium">
            <li>
              <button className="p-1 hover:scale-110 duration-300">
                AVAILABLE UNITS
              </button>
            </li>
            <li>
              <button className="p-1 hover:scale-110 duration-300">
                NEIGHBOURHOOD
              </button>
            </li>
            <li>
              <button className="p-1 hover:scale-110 duration-300">
                CONTACT
              </button>
            </li>
            <li>
              <button className="p-1 border-2 hover:bg-neutral hover:text-white duration-300 border-neutral">
                BOOK A VISIT
              </button>
            </li>
            <li>
              <button className="p-1 hover:scale-110 duration-300">EN</button>
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;
