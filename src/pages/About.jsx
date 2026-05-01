import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const skills = ["Python", "Animation", "Web Development", "GitHub"];

  return (
    <section className="min-h-[80vh] flex flex-col lg:flex-row justify-between items-center gap-10 px-8 lg:px-20 py-16 text-white">
      {/* Left About Section */}
      <div className="w-full lg:w-1/2 flex flex-col gap-8">
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-bold cursor-alias"
        >
          About Me
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-white/90 leading-relaxed max-w-xl"
        >
          Hello! I'm Aravind, a passionate web developer with love for creating
          beautiful and functional websites. With a background in computer
          science, I strive to build efficient and user-friendly applications.
        </motion.p>
      </div>

      {/* Right Skills Card */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        whileHover={{
          y: -8,
          boxShadow: "0 0 45px rgba(34,197,94,0.35)",
        }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-full lg:w-1/2 max-w-xl flex flex-col items-start justify-center gap-6 p-8 md:p-10 bg-white/10 rounded-2xl shadow-md backdrop-blur-md border border-white/10"
      >
        <motion.h1
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-4xl font-bold"
        >
          Skills
        </motion.h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(34,197,94,0.2)",
              }}
              transition={{
                duration: 0.4,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              className="text-lg text-white/90 bg-black/20 border border-white/10 rounded-xl p-4 text-center cursor-pointer"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;
