import { motion } from "framer-motion";
import React from "react";

const Sections = () => {
  return (
    <div className="bg-[#E4E1DF] lg:px-10">
      <h1 className="lg:text-8xl text-5xl lg:text-left text-center font-sub font-bold py-5 lg:py-20">
        THE BUILDING
      </h1>
      {/* hero1 */}
      <div className="hero lg:py-8">
        <div className="hero-content flex-col items-end lg:flex-row-reverse">
          <motion.img
            initial={{ x: 200 }}
            whileInView={{ x: 0 }}
            transition={{ type: "spring", stiffness: 80 }}
            viewport={{ once: true }}
            src="https://images.unsplash.com/photo-1498503182468-3b51cbb6cb24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            className="rounded-md lg:w-7/12"
          />
          <motion.div
            initial={{ x: 200 }}
            whileInView={{ x: 0 }}
            transition={{ type: "spring", stiffness: 80 }}
            viewport={{ once: true }}
          >
            <h1 className="text-3xl font-sub font-bold uppercase">
              Lorem ipsum dolor sit.
            </h1>
            <p className="py-6">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae obcaecati expedita nobis nesciunt voluptatibus quasi
              fuga quod vitae nulla esse.
            </p>
          </motion.div>
        </div>
      </div>
      {/* hero2 */}
      <div className="hero lg:py-8">
        <div className="hero-content flex-col items-end lg:flex-row">
          <motion.img
            initial={{ x: 200 }}
            whileInView={{ x: 0 }}
            transition={{ type: "spring", stiffness: 80 }}
            viewport={{ once: true }}
            src="https://images.unsplash.com/photo-1589923158776-cb4485d99fd6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
            className="rounded-md lg:w-5/12"
          />
          <motion.div
            initial={{ x: 200 }}
            whileInView={{ x: 0 }}
            transition={{ type: "spring", stiffness: 80 }}
            viewport={{ once: true }}
          >
            <h1 className="text-3xl font-sub font-bold uppercase">
              Lorem ipsum dolor sit.
            </h1>
            <p className="py-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              magnam tempora dicta similique eum aliquam rerum facere ex
              eligendi dolore!
            </p>
          </motion.div>
        </div>
      </div>
      {/* hero3 */}
      <div className="hero lg:py-8">
        <div className="hero-content flex-col items-end lg:flex-row">
          <motion.img
            initial={{ x: 200 }}
            whileInView={{ x: 0 }}
            transition={{ type: "spring", stiffness: 80 }}
            viewport={{ once: true }}
            src="https://images.unsplash.com/photo-1602002418153-3e900b530e7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
            className="rounded-md lg:w-6/12"
          />
          <motion.div
            initial={{ x: 200 }}
            whileInView={{ x: 0 }}
            transition={{ type: "spring", stiffness: 80 }}
            viewport={{ once: true }}
          >
            <h1 className="text-3xl font-sub font-bold uppercase">
              Lorem ipsum dolor sit.
            </h1>
            <p className="py-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae illo quas, enim quo vitae cupiditate facere
              consequuntur consectetur saepe mollitia?
            </p>
          </motion.div>
        </div>
      </div>
      {/* hero4 */}
      <div className="hero lg:py-8">
        <div className="hero-content flex-col items-end lg:flex-row-reverse">
          <motion.img
            initial={{ x: 200 }}
            whileInView={{ x: 0 }}
            transition={{ type: "spring", stiffness: 80 }}
            viewport={{ once: true }}
            src="https://images.unsplash.com/photo-1602002418679-43121356bf41?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
            className="rounded-md lg:w-6/12"
          />
          <motion.div
            initial={{ x: 200 }}
            whileInView={{ x: 0 }}
            transition={{ type: "spring", stiffness: 80 }}
            viewport={{ once: true }}
          >
            <h1 className="text-3xl font-sub font-bold uppercase">
              Lorem ipsum dolor sit.
            </h1>
            <p className="py-6">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil
              velit aperiam assumenda autem minus quasi praesentium modi
              adipisci amet enim?
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Sections;
