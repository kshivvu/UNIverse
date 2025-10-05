// import React from 'react'
import {motion, useScroll, useTransform} from 'framer-motion'
import { University } from "lucide-react";
// import { useEffect } from 'react';
const navItems:string[] = ["Explore", "Join a Community", "Find Your", "Engage with"];
const Navigation = () => {
  const {scrollYProgress}=useScroll();
  const lineWidth=useTransform(scrollYProgress , [0,1] , ['0%','100%']);
  return (
    <nav className="sticky top-0 overflow-hidden backdrop-blur-lg shadow-lg"> 
      <div className='flex justify-between py-4 px-12  items-center'>
        <div className="font-black  flex justify-center items-center text-xl">
        <University className="inline mr-2 mb-1 " />
        Connect with Colleges
      </div>
      <ul className="flex space-between items-center space-x-8 font-semibold">
        {navItems.map((item,index)=>(
            <li key={index}  className="hover:text-blue-500 transition hover:scale-110 duration-300 cursor-pointer">
                <a href="#">{item}</a>

            </li>
        ))}
      </ul>
      <div>
        <button className="bg-neutral-200 text-blue-500 px-4 py-2 rounded-md font-semibold hover:bg-blue-500 hover:text-white transition hover:scale-110 duration-300">
            Login
        </button>
        <button className="ml-8 bg-blue-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-neutral-200  hover:text-blue-500 transition hover:scale-110 duration-300" >
            Join Now
        </button>
      </div>
      </div>
      <motion.div className='absolute bottom-0 h-1 left-0 bg-blue-500 w-screen  ' style={{width:lineWidth}}/>
    </nav>
  );
};

export default Navigation;
