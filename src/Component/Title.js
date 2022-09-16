import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

const Title = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll(
    {
      offset: ["start end", "end end"],
    }
  );
  const scale = useTransform(scrollYProgress, [0.06, 0.1], [-2.01, 0.01]);
  return (
    <motion.div style={{ scale }} className='mr-[750px]'>
      <h1 className="text-9xl rotate-180 font-header font-bold absolute -mt-10 text-[#333333]">
        radisson
      </h1>
    </motion.div>
  );
};

export default Title;
