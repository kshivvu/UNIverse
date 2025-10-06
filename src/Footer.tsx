// import React from 'react'
import { motion } from "framer-motion";
import {
  Apple,
  Facebook,
  Play,
  Mail,
  MessageCircle,
  MessageSquare,
  Phone,
  Users,
} from "lucide-react";
interface linkType {
  content: string;
  src: string;
}
interface footType {
  head: string;
  links: linkType[];
}
const link: footType[] = [
  {
    head: "Learn more about us",
    links: [
      {
        content: "About UNIverse",
        src: "#",
      },
      {
        content: "Careers",
        src: "#",
      },
      {
        content: "Media Queries",
        src: "#",
      },
      {
        content: "Memebership Plans",
        src: "#",
      },
    ],
  },
  {
    head: "Help Center",
    links: [
      {
        content: "Customer Support",
        src: "#",
      },
      {
        content: "FAQs",
        src: "#",
      },
      {
        content: "Contact Support",
        src: "#",
      },
    ],
  },
  {
    head: "Join Our Network",
    links: [
      {
        content: "Facebook",
        src: "#",
      },
      {
        content: "Instagram",
        src: "https://instagram.com/kshivvu",
      },
      {
        content: "Twitter",
        src: "#",
      },
      {
        content: "Discord Communities",
        src: "#",
      },
    ],
  },
];
const Footer = () => {
  return (
    <motion.footer
      role="contentinfo"
      aria-label="Footer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="p-10 w-full overflow-hidden"
    >
      <div className="flex flex-col md:flex-row md:justify-between md:items-start w-full space-y-10 md:space-y-0">
        {/* === Logo === */}
        <div className="font-extrabold text-2xl flex items-center justify-center md:justify-start">
          <Users size={32} className="inline mr-2" />
          UNIverse
        </div>

        {/* === Link Sections === */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center md:text-left">
          {link.map((items, index) => (
            <div
              key={index}
              className="flex flex-col justify-start items-center md:items-start"
            >
              <h1 className="text-xl font-bold mb-2">{items.head}</h1>
              <ul className="space-y-2">
                {items.links.map((item, indexJ) => (
                  <li
                    key={indexJ}
                    className="hover:text-blue-400 hover:scale-105 transition-all duration-150 ease-in-out"
                  >
                    <a href={item.src}>{item.content}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* === Download Section === */}
        <div className="flex flex-col justify-start items-center md:items-start space-y-4">
          <h1 className="text-xl font-bold text-center md:text-left">
            Download the app
          </h1>

          {/* App Store */}
          <motion.button
            initial={{ x: 100 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="flex items-center justify-center md:justify-start space-x-2 py-3 px-5 bg-blue-500 text-white rounded-lg hover:scale-105 transition-transform ease-in-out duration-200 w-auto lg:w-full"
          >
            <Apple className="w-8 h-8 text-black" />
            <div className="flex flex-col space-y-0 text-left">
              <div className="text-[12px]">Get it on the</div>
              <div className="text-md font-medium">App Store</div>
            </div>
          </motion.button>

          {/* Google Play */}
          <motion.button
            initial={{ x: 100 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="flex items-center justify-center md:justify-start space-x-2 py-3 px-5 bg-blue-500 text-white rounded-lg hover:scale-105 transition-transform ease-in-out duration-200 lg:w-full"
          >
            <Play className="w-10 h-10 text-black" />
            <div className="flex flex-col space-y-0 text-left">
              <div className="text-[12px]">Get it on</div>
              <div className="text-md font-medium">Google Play</div>
            </div>
          </motion.button>
        </div>
      </div>

      <div className="mt-16 flex flex-col items-center justify-center text-center md:flex-row md:items-start md:justify-start md:space-x-16 w-full space-y-10 md:space-y-0">
  {/* === Column 1 === */}
  <div className="w-full md:w-auto flex flex-col items-center md:items-start">
    <h1 className="text-2xl mb-5 font-extrabold flex items-center justify-center md:justify-start">
      <Users className="mr-3" />
      Academic
    </h1>
    <ul className="flex flex-col space-y-2">
      {["About Us", "Our Services", "Our Community", "Join Us"].map(
        (item, i) => (
          <li
            key={i}
            className="hover:text-blue-400 hover:scale-105 transition-all duration-150 ease-in-out"
          >
            <a href="#">{item}</a>
          </li>
        )
      )}
    </ul>
  </div>

  {/* === Column 2 === */}
  <div className="w-full md:w-auto flex flex-col items-center md:items-start">
    <h1 className="text-2xl mb-5 font-extrabold text-center md:text-left">
      Contact Us
    </h1>
    <ul className="flex flex-col space-y-3">
      <li className="flex items-center justify-center md:justify-start gap-2 hover:text-blue-400">
        <Mail />
        <a href="mailto:UNIverse@co.in">UNIverse@co.in</a>
      </li>
      <li className="flex items-center justify-center md:justify-start gap-2 hover:text-blue-400">
        <Phone />
        <a href="tel:+917488890474">+91 74888 90474</a>
      </li>
      <li className="flex items-center justify-center md:justify-start gap-3 hover:text-blue-400">
        <MessageCircle />
        <Facebook />
        <MessageSquare />
      </li>
    </ul>
  </div>
</div>

    </motion.footer>
  );
};

export default Footer;
