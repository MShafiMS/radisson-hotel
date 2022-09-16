import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

const Title = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll(
    {
      offset: ["start end", "end end"],
    }
  );
  const scale = useTransform(scrollYProgress, [0.06, 0.1], [1, 0.9]);
  return (
    <motion.div style={{ scale }} className='hidden lg:block card-actions justify-start'>
      <h1 className="text-9xl font-header font-bold absolute -mt-20 text-[#333333]">
        radisson
      </h1>
    </motion.div>
  );
};

export default Title;