import { motion } from "framer-motion";
import React, { useRef } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useScroll } from "../../Hooks/useScroll";

const Navbar = () => {
  const scrollRef = useRef(null);
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
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ root: scrollRef }}
      >
        <div className="navbar hidden lg:flex px-14 z-50 bg-base-100 py-4 mb-16">
          <div className="flex-1"></div>
          <div className="flex-none">
            <ul className="flex gap-6 text-lg font-medium">
              <li>
                <button className="hover:scale-110 duration-300">
                  <AnchorLink href="#units" className="p-1">
                    AVAILABLE UNITS
                  </AnchorLink>
                </button>
              </li>
              <li>
                <button className="hover:scale-110 duration-300">
                  <AnchorLink href="#hood" className="p-1">
                    NEIGHBOURHOOD
                  </AnchorLink>
                </button>
              </li>
              <li>
                <button className="hover:scale-110 duration-300">
                  <AnchorLink href="#contact" className="p-1">
                    CONTACT
                  </AnchorLink>
                </button>
              </li>
              <li>
                <button className="">
                  <AnchorLink
                    href="#"
                    className="border-2 p-1 hover:text-white border-neutral hover:bg-neutral duration-300"
                  >
                    BOOK A VISIT
                  </AnchorLink>
                </button>
              </li>
              <li>
                <button className="hover:scale-110 duration-300">
                  <AnchorLink href="#" className="p-1">
                    EN
                  </AnchorLink>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 1 }}
        whileInView={{ opacity: 0 }}
        viewport={{ root: scrollRef }}
      >
        <div
          style={scrollDirection === "down" ? styles.active : styles.hidden}
          className="navbar lg:flex top-0 px-14 hidden fixed z-50 bg-base-100 py-4"
        >
          <div className="flex-1">
            <button>
              <AnchorLink
                href="#"
                className="font-bold p-1 font-header text-5xl"
              >
                radisson
              </AnchorLink>
            </button>
          </div>
          <div className="flex-none">
            <ul className="flex gap-6 text-lg font-medium">
              <li>
                <button className="hover:scale-110 duration-300">
                  <AnchorLink href="#units" className="p-1">
                    AVAILABLE UNITS
                  </AnchorLink>
                </button>
              </li>
              <li>
                <button className="hover:scale-110 duration-300">
                  <AnchorLink href="#hood" className="p-1">
                    NEIGHBOURHOOD
                  </AnchorLink>
                </button>
              </li>
              <li>
                <button className="hover:scale-110 duration-300">
                  <AnchorLink href="#contact" className="p-1">
                    CONTACT
                  </AnchorLink>
                </button>
              </li>
              <li>
                <button className="">
                  <AnchorLink
                    href="#"
                    className="p-1 border-2 hover:text-white border-neutral hover:bg-neutral duration-300"
                  >
                    BOOK A VISIT
                  </AnchorLink>
                </button>
              </li>
              <li>
                <button className="hover:scale-110 duration-300">
                  <AnchorLink href="#" className="p-1">
                    EN
                  </AnchorLink>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;
