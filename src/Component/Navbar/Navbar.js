import { motion } from "framer-motion";
import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useScroll } from "../../Hooks/useScroll";

const Navbar = () => {
  const { scrollDirection } = useScroll();
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
    <>
      <motion.div
        initial="visible"
        whileInView="hidden"
        style={scrollDirection === "down" ? styles.active : styles.hidden}
        className="navbar lg:flex px-14 hidden fixed z-50 bg-base-100 py-4"
      >
        <div className="flex-1">
          <AnchorLink href="#" className="font-bold p-1 font-header text-5xl">
            radisson
          </AnchorLink>
        </div>
        <div className="flex-none">
          <ul className="flex gap-6 text-lg font-medium">
            <li>
              <AnchorLink
                href="#units"
                className="p-1hover:scale-110 duration-300"
              >
                AVAILABLE UNITS
              </AnchorLink>
            </li>
            <li>
              <AnchorLink
                href="#hood"
                className="p-1hover:scale-110 duration-300"
              >
                NEIGHBOURHOOD
              </AnchorLink>
            </li>
            <li>
              <AnchorLink
                href="#contact"
                className="p-1hover:scale-110 duration-300"
              >
                CONTACT
              </AnchorLink>
            </li>
            <li>
              <AnchorLink
                href="#"
                className="p-1 border-2 hover:bg-neutral hover:text-white duration-300 border-neutral"
              >
                BOOK A VISIT
              </AnchorLink>
            </li>
            <li>
              <AnchorLink href="#" className="p-1hover:scale-110 duration-300">
                EN
              </AnchorLink>
            </li>
          </ul>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
