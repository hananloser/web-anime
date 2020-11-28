/** @format */

import { motion } from "framer-motion";
import React, { useState } from "react";
import { GoFlame } from "react-icons/go";
import { HiOutlineCalendar, HiSearch, HiTag } from "react-icons/hi";

const Mobile = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="navbar flex justify-around w-full h-20 shadow-2xl bottom-0 fixed md:hidden py-2 px-2">
        <div className="text-center flex justify-center  bg-gradient-to-tr from-gray-400 via-red-600 to-yellow-500 rounded-md p-5">
          <GoFlame
            className="text-secondary text-4xl pb-2"
            onClick={() => setShow(!show)}
          />
        </div>
        <div className="text-center flex justify-center  bg-gradient-to-tr from-gray-400 via-red-600 to-yellow-500 rounded-md p-5">
          <HiOutlineCalendar className="text-secondary text-4xl pb-2" />
        </div>
        <div className="text-center flex justify-center  bg-gradient-to-tr from-gray-400 via-red-600 to-yellow-500 rounded-md p-5">
          <HiSearch className="text-secondary text-4xl pb-2" />
        </div>
        <div className="text-center flex justify-center  bg-gradient-to-tr from-gray-400 via-red-600 to-yellow-500 rounded-md p-5">
          <HiTag className="text-secondary text-4xl pb-2" />
        </div>
      </div>
      <SlideUp show={show} setShow={setShow} />
    </>
  );
};

export const SlideUp = ({ show, setShow }) => {
  const variants = {
    open: { opacity: 1, y: -100 },
    closed: { opacity: 0, y: 0 },
  };

  return (
    <motion.div
      animate={show ? "open" : "closed"}
      variants={variants}
      transition={{ ease: "easeOut", duration: 0.5 }}
      className="fixed bg-white w-auto h-80 bottom-20 md:hidden px-4 mx-4 rounded-lg flex  justify-center"
    >
      <div className="block">
        <div className="flex w-auto bg-indigo-700 mt-3 justify-center text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos odio
        </div>
        <div className="flex justify-center bg-indigo-900 p-3" onClick={() => setShow(!show)}>
          Close
        </div>
      </div>
    </motion.div>
  );
};

export default Mobile;