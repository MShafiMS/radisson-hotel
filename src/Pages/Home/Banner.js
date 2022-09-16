import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { AiOutlineBulb } from "react-icons/ai";
import { MdHotTub } from "react-icons/md";
import { TbSofa } from "react-icons/tb";
import { VscArrowBoth } from "react-icons/vsc";
import Title from "../../Component/Title";

const Banner = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.009], [0.94, 1]);
  return (
    <>
      <div className="navbar hidden lg:flex px-14 z-50 bg-base-100 py-4 mb-16">
        <div className="flex-1"></div>
        <div className="flex-none">
          <ul className="flex gap-6 text-lg font-medium">
            <li>
              <AnchorLink
                href="#units"
                className="p-1 hover:scale-110 duration-300"
              >
                AVAILABLE UNITS
              </AnchorLink>
            </li>
            <li>
              <AnchorLink
                href="#hood"
                className="p-1 hover:scale-110 duration-300"
              >
                NEIGHBOURHOOD
              </AnchorLink>
            </li>
            <li>
              <AnchorLink
                href="#contact"
                className="p-1 hover:scale-110 duration-300"
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
              <AnchorLink href="#" className="p-1 hover:scale-110 duration-300">
                EN
              </AnchorLink>
            </li>
          </ul>
        </div>
      </div>
      <motion.div style={{ scale }}>
        <div className="bg-fixed bg-no-repeat bg-cover bg-[url('https://images.unsplash.com/photo-1521750465-672a0f580901?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80')]">
          <div className=" text-white">
            {/* <div className="hero-content min-h-screen"></div> */}
            <div>
              <motion.div className="min-h-screen hidden lg:block w-full relative bg-fixed bg-no-repeat bg-cover bg-[url('https://images.unsplash.com/photo-1521750465-672a0f580901?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80')]">
                <Title></Title>
              </motion.div>
              <motion.div
                className="fixed h-[8px] bg-white top-0 left-0 right-0 origin-left"
                style={{ scaleX: scrollYProgress }}
              />
              <motion.div ref={ref} className="min-h-screen">
                <div className="min-h-screen text-center lg:text-left mx-5 lg:mx-20">
                  <h1 className="mb-16 lg:pt-0 pt-48 text-3xl lg:text-5xl font-medium w-full lg:lg:max-w-2xl">
                    Hotel comfort, long term convenience.
                  </h1>
                  <div className="flex lg:flex-row flex-col text-center gap-10 lg:gap-40 lg:mb-96">
                    <div className="lg:w-fit text-4xl">
                      <AiOutlineBulb className="mx-auto mb-2" />
                      <p>Utilities</p>
                    </div>
                    <div className="lg:w-fit text-4xl">
                      <TbSofa className="mx-auto mb-2" />
                      <p>Furnished</p>
                    </div>
                    <div className="lg:w-fit text-4xl">
                      <MdHotTub className="mx-auto mb-2" />
                      <p>Hot Tub</p>
                    </div>
                  </div>
                  <h1 className="lg:py-96 py-48 text-3xl lg:text-5xl font-medium lg:max-w-2xl">
                    Across from Concordia, steps from McGill and all the other
                    major Downtown Montreal Landmarks.
                  </h1>
                  <h1 className="lg:py-96 py-48 text-3xl lg:text-5xl font-medium lg:max-w-2xl">
                    Accessible luxury. Fully-furnished premium furniture from
                    Rove Concepts.
                  </h1>
                  <h1 className="lg:py-96 py-48 text-3xl lg:text-5xl font-medium lg:max-w-2xl">
                    Flexible leasing terms. <br /> 1-month minimum. <br />{" "}
                    Monthly <VscArrowBoth className="inline" /> Yearly
                  </h1>
                  <h1 className="lg:py-96 py-48 text-3xl lg:text-5xl font-medium lg:max-w-2xl"></h1>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Banner;
