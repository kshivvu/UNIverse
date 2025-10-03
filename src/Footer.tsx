// import React from 'react'
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
    <footer className="p-10 w-full">
      <div className="flex justify-between items-start ">
        <div className="font-extrabold text-2xl">
          <Users size={32} className="inline " />
          UNIverse
        </div>
        <div className="flex justify-between items-start space-x-8">
          {link.map((items, index) => (
            <div
              key={index}
              className="flex flex-col  justify-start items-center"
            >
              <h1 className="text-xl font-bold">{items.head}</h1>
              {items.links.map((item, indexJ) => (
                <ul
                  key={indexJ}
                  className="flex flex-col  justify-start items-center"
                >
                  <li className="hover:text-blue-400 hover:scale-105 transition-all duration-100 ease-in-out">
                    <a href={item.src}>{item.content}</a>
                  </li>
                </ul>
              ))}
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-start  space-y-4">
          <h1 className="text-xl font-bold">Download the app</h1>

          {/* App Store */}
          <button className="flex items-center justify-start space-x-2 py-3 px-5 bg-blue-500 text-white rounded-lg hover:scale-105 transition-transform ease-in-out duration-200 ">
            <Apple className="w-8 h-8 text-black" />
            <div className="flex flex-col space-y-0 ">
              <div className="text-[12px]">Get it on the</div>
              
              <div className="text-md font-medium">App Store</div>
            </div>
          </button>

          {/* Google Play */}
          <button className="flex items-center justify-start space-x-2 py-3 px-5 bg-blue-500 text-white rounded-lg hover:scale-105 transition-transform ease-in-out duration-200">
            <Play className="w-10 h-10 text-black" />
            <div className="flex flex-col space-y-0 ">
              <div className="text-[12px]">Get it on</div>
              
              <div className="text-md font-medium">Google Play</div>
            </div>
          </button>
        </div>
      </div>
      <div className="mt-15 flex justify-start gap-16">
        {/* Column 1 */}
        <div>
          <h1 className="text-2xl mb-5 font-extrabold flex items-center">
            <Users className="mr-3" />
            Academic
          </h1>
          <ul className="flex flex-col space-y-2">
            {["About Us", "Our Services", "Our Community", "Join Us"].map(
              (item, i) => (
                <li
                  key={i}
                  className="hover:text-blue-400 hover:scale-105 transition-all duration-100 ease-in-out"
                >
                  <a href="#">{item}</a>
                </li>
              )
            )}
          </ul>
        </div>

        <div>
          <h1 className="text-2xl mb-5 font-extrabold">Contact Us</h1>
          <ul className="flex flex-col space-y-3">
            <li className="flex items-center gap-2 hover:text-blue-400">
              <Mail />
              <a href="mailto:kshivvu@gmail.com">UNIverse@co.in</a>
            </li>
            <li className="flex items-center gap-2 hover:text-blue-400">
              <Phone />
              <a href="tel:+917488890474">+91 74888 90474</a>
            </li>
            <li className="flex items-center gap-3 hover:text-blue-400">
              <MessageCircle />
              <Facebook />
              <MessageSquare />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
