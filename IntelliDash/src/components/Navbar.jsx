import React, { useState } from "react";
import logo from "../assets/Images/logo.png";
import { LuLayoutDashboard } from "react-icons/lu";
import { FiActivity } from "react-icons/fi";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { GrTransaction } from "react-icons/gr";
import { MdHelpCenter } from "react-icons/md";

const Navbar = () => {

  // all the navlinks
  const navLinks=[{
    name:"DashBoard",
    icon:<LuLayoutDashboard className="w-[23px] h-[30px]" />,
  },{
    name:"Activity",
    icon:<FiActivity className="w-[23px] h-[30px]" />,
  },{
    name:"Analytics",
    icon:<TbBrandGoogleAnalytics className="w-[23px] h-[30px]" />,
  },{
    name:"Transactions",
    icon:<GrTransaction className="w-[23px] h-[30px]" />,
  },{
    name:"Help Center",
    icon:<MdHelpCenter className="w-[23px] h-[30px]" />,
  }]

  const [activenav,setActiveNAv]=useState(0);
  return (
    <div className="px-10 pl-3 py-12 flex flex-col bg-slate-950 w-[22%] h-screen">
      <div className="flex items-center">
        <img className="w-[5rem]" src={logo} alt="" />
        <span className="text-[25px] text-white">Intelli Dash</span>
      </div>
      <div className="mt-9 flex flex-col pl-12 space-y-8">
        {navLinks.map((item,index)=>
        <div key={index} onClick={()=>setActiveNAv(index)} className={"flex cursor-pointer p-2 rounded-2xl text-white items-center gap-5 flex-row " + (activenav === index ? "bg-red-500 text-white font-semibold" : "")}>
        {item.icon}
        <span className="text-white text-[19px]">{item.name}</span>
      </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
