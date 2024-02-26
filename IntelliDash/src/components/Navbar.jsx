import React, { useState } from "react";
import logo from "../assets/Images/logo.png";
import { LuLayoutDashboard } from "react-icons/lu";
import { FiActivity } from "react-icons/fi";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { GrTransaction } from "react-icons/gr";
import { MdHelpCenter } from "react-icons/md";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { motion } from "framer-motion";

const Navbar = () => {
  const [activenav, setActiveNav] = useState(0);
  const [isExpanded, setIsExpanded] = useState(true);
  // all the navlinks
  const navLinks = [
    {
      name: "DashBoard",
      icon: <LuLayoutDashboard className="w-[23px] h-[30px]" />,
    },
    {
      name: "Activity",
      icon: <FiActivity className="w-[23px] h-[30px]" />,
    },
    {
      name: "Analytics",
      icon: <TbBrandGoogleAnalytics className="w-[23px] h-[30px]" />,
    },
    {
      name: "Transactions",
      icon: <GrTransaction className="w-[23px] h-[30px]" />,
    },
    {
      name: "Help Center",
      icon: <MdHelpCenter className="w-[23px] h-[30px]" />,
    },
  ];
  const variants = {
    expanded: { width: "21%" },
    nonexpanded: { width: "5%" },
  };

  return (
    <motion.div
      animate={isExpanded ? "expanded" : "nonexpanded"}
      variants={variants}
      className={` py-12 flex flex-col relative bg-slate-950 w-[22%] h-screen ${
        isExpanded ? "px-10" : "px-1"
      }`}
    >
      <div className="flex items-center">
        <img className="w-[5rem]" src={logo} alt="" />
        <span
          className={isExpanded ? " block text-[25px] text-white" : "hidden"}
        >
          Intelli Dash
        </span>
      </div>

      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-5 h-5 bg-yellow-300 rounded-full right-[-10px] top-28 absolute"
      >
        {isExpanded ? (
          <BsArrowRightShort className="text-black items-center text-[19px]" />
        ) : (
          <BsArrowLeftShort className="text-black items-center text-[19px]" />
        )}
      </div>
      <div className={`mt-9 flex flex-col ${isExpanded ? "pl-10":"pl-1"} px-4 space-y-5`}>
        {navLinks.map((data, index) => (
          <div
            key={index}
            onClick={() => setActiveNav(index)}
            className={
              "flex cursor-pointer p-2 rounded-2xl text-white items-center gap-5 flex-row " +
              (activenav === index ? "bg-red-500 text-white font-semibold" : "")
            }
          >
            {data.icon}
            <span
              className={`text-white text-[19px] ${
                isExpanded ? "block" : "hidden"
              }`}
            >
              {data.name}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Navbar;
