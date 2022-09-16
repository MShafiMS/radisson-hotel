import React, { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Menu = () => {
    let [open, setOpen] = useState(false);
  return (
    <div>
      <div className="navbar lg:hidden flex bg-base-100">
        <div className="flex-1">
          <AnchorLink href="#" className="font-bold p-1 font-header text-3xl">
            {open ? "" : "radisson"}
          </AnchorLink>
        </div>
        <div onClick={() => setOpen(!open)} className="flex-none text-2xl">
          {open ? "X" : "MENU"}
        </div>
      </div>
      <div>
        <ul
          className={`absolute lg:hidden flex pl-3 justify-start flex-col  gap-6 text-3xl border-b border-black bg-white left-0 w-full transition-all duration-500 ease-in ${
            open ? "top-16 h-[80vh]" : "top-[-690px]"
          }`}
        >
          <li className="h-[30vh]"></li>
          <li>
            <button className="hover:scale-110 duration-300">
              <AnchorLink href="#units">AVAILABLE UNITS</AnchorLink>
            </button>
          </li>
          <li>
            <button className="hover:scale-110 duration-300">
              <AnchorLink href="#hood">NEIGHBOURHOOD</AnchorLink>
            </button>
          </li>
          <li>
            <button className="hover:scale-110 duration-300">
              <AnchorLink href="#contact">CONTACT</AnchorLink>
            </button>
          </li>
          <li>
            <button>
              <AnchorLink
                href="#"
                className="px-2 border-2 hover:bg-neutral hover:text-white duration-300 border-neutral"
              >
                BOOK A VISIT
              </AnchorLink>
            </button>
          </li>
          <li>
            <button className="hover:scale-110 duration-300">
              <AnchorLink href="#">EN</AnchorLink>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
