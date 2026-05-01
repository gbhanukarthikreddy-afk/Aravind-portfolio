import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaCode,
  FaPalette,
  FaDiscord,
  FaMobileAlt,
  FaRocket,
} from "react-icons/fa";

const Services = () => {
  const services = [
    {
      icon: <FaReact />,
      title: "React Websites",
      desc: "I build modern responsive websites using React, Tailwind CSS, and clean component structure.",
    },
    {
      icon: <FaPalette />,
      title: "UI Design",
      desc: "I create clean, dark, futuristic, gaming-style and portfolio-style user interfaces.",
    },
    {
      icon: <FaCode />,
      title: "Frontend Development",
      desc: "I convert ideas into working frontend pages with animations, routing, layouts, and effects.",
    },
    {
      icon: <FaDiscord />,
      title: "Discord Bots",
      desc: "I build Discord bots for moderation, scrims, registration systems, and server management.",
    },
    {
      icon: <FaMobileAlt />,
      title: "Responsive Design",
      desc: "I make websites work properly on desktop, tablet, and mobile screens.",
    },
    {
      icon: <FaRocket />,
      title: "Portfolio Building",
      desc: "I create personal portfolio websites with hero sections, about pages, services, and contact pages.",
    },
  ];

  return (
    <section className="min-h-[80vh] px-6 lg:px-20 py-16 text-white">
      {/* Heading */}
      <div className="text-center mb-14">
        <motion.p
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-green-400 uppercase tracking-[0.4em] text-sm mb-4"
        >
          What I Do
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: -35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-bold"
        >
          My Services
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="max-w-2xl mx-auto mt-5 text-white/70 text-base md:text-lg"
        >
          I build modern websites, animated interfaces, Discord bots, and
          responsive frontend projects.
        </motion.p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 70, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{
              y: -12,
              scale: 1.03,
              boxShadow: "0 0 45px rgba(34,197,94,0.35)",
            }}
            transition={{
              duration: 0.55,
              delay: index * 0.12,
              ease: "easeOut",
            }}
            className="group bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-8 min-h-[270px] cursor-pointer hover:border-green-400/60 transition-all duration-300"
          >
            <motion.div
              whileHover={{ rotate: 8, scale: 1.1 }}
              transition={{ duration: 0.25 }}
              className="w-16 h-16 rounded-2xl bg-black/30 border border-white/10 flex items-center justify-center text-3xl text-green-400 mb-7 group-hover:bg-green-500/20 group-hover:border-green-400/60 transition"
            >
              {service.icon}
            </motion.div>

            <h2 className="text-2xl font-bold mb-4">{service.title}</h2>

            <p className="text-white/70 leading-relaxed">{service.desc}</p>

            <div className="mt-8 flex items-center gap-3 text-green-400 font-semibold">
              <span>Learn More</span>
              <motion.span
                initial={{ x: 0 }}
                whileHover={{ x: 8 }}
                className="text-xl"
              >
                →
              </motion.span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;