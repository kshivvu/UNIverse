import { World, Doorbell3pSharp, UserGraduate } from "./ICONS";
import { motion } from "framer-motion";
import type { ReactElement } from "react";

interface workType {
  icon: ReactElement;
  head: string;
  desc: string;
}
const work: workType[] = [
  {
    icon: <World className="h-20 w-20 text-blue-500" />,
    head: "Explore colleges",
    desc: "Discover and compare colleges, uncover admission criteria, and find the perfect fit for your academic journey.",
  },
  {
    icon: <UserGraduate className="h-20 w-20 text-blue-500" />,
    head: "Build Your Profile",
    desc: "Craft a comprehensive profile showcasing your strengths and accomplishments to stand out in the competitive landscape.",
  },
  {
    icon: <Doorbell3pSharp className="h-20 w-20 text-blue-500" />,
    head: "Access Opportunities",
    desc: "Unlock a world of opportunities, from internships to scholarships, tailored to your aspirations and goals.",
  },
];

const Work = () => {
  return (
    <div className="mt-5 px-6 pb-8 sm:px-10 md:px-16 bg-blue-300 pt-8">
      <motion.h1
        initial={{ y: 40, opacity: 0.5, scale: 0.5 }}
        whileInView={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 30 }}
        className="font-extrabold text-3xl sm:text-4xl text-center mb-12"
      >
        How UNIverse Works
      </motion.h1>

      <div className="flex flex-col md:flex-row md:justify-between items-center gap-10 md:gap-6">
        {work.map((item, index) => (
          <motion.div
            key={index}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            className="flex flex-col items-center text-center md:text-left max-w-sm"
          >
            <div className="mb-5 flex justify-center items-center">
              {item.icon}
            </div>
            <h1 className="font-extrabold text-2xl mb-3">{item.head}</h1>
            <p className="text-center md:text-left text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Work;
