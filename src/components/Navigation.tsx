import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { University, Menu, X } from "lucide-react";

const navItems: string[] = ["Explore", "Join a Community", "Find Your", "Engage with"];

const Navigation = () => {
  const { scrollYProgress } = useScroll();
  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="z-50 sticky top-0 overflow-hidden backdrop-blur-lg shadow-lg bg-white">
      <div className="flex justify-between items-center py-4 px-6 md:px-12">
        {/* Logo */}
        <div className="font-black flex justify-center items-center text-xl">
          <University className="inline mr-2 mb-1" />
          Connect with Colleges
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 font-semibold">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="hover:text-blue-500 transition hover:scale-110 duration-300 cursor-pointer"
            >
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>

        {/* Buttons */}
        <div className="flex items-center">
          <button className="bg-neutral-200 text-blue-500 px-4 py-2 rounded-md font-semibold hover:bg-blue-500 hover:text-white transition hover:scale-110 duration-300">
            Login
          </button>
          <button className="ml-4 md:ml-8 bg-blue-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-neutral-200 hover:text-blue-500 transition hover:scale-110 duration-300">
            Join Now
          </button>

          {/* Hamburger Menu Button */}
          <button
            className="ml-4 md:hidden p-2 rounded-md focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.ul
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{duration:0.7 , ease:"easeInOut"}}
          className="flex flex-col md:hidden px-6 pb-4 space-y-3 font-semibold bg-white shadow-md"
        >
          {navItems.map((item, index) => (
            <li
              key={index}
              className="hover:text-blue-500 transition hover:scale-105 duration-300 cursor-pointer"
              onClick={() => setMenuOpen(false)} // close menu on click
            >
              <a href="#">{item}</a>
            </li>
          ))}
        </motion.ul>
      )}

      {/* Scroll Progress Bar */}
      <motion.div
        className="absolute bottom-0 h-1 left-0 bg-blue-500 w-screen"
        style={{ width: lineWidth }}
      />
    </nav>
  );
};

export default Navigation;
