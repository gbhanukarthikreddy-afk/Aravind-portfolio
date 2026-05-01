import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="w-full min-h-[80vh] flex items-center justify-between overflow-hidden px-12">
      {/* Left Content */}
      <div className="w-[55%] flex flex-col items-start text-left gap-8">
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-8xl text-white font-bold tracking-[0.35em]"
        >
          ARAVIND
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: "easeOut" }}
          className="text-3xl text-white/90 max-w-4xl"
        >
          I am Aravind, I'm a web developer and I like to build apps.
        </motion.p>
        <Link to="/about">
          <motion.button
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 1.08,
              boxShadow: "0 0 35px rgba(34, 197, 94, 0.45)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="self-start flex items-center gap-6 border-2 border-white px-8 py-3 rounded-r-full rounded-bl-full text-white hover:bg-green-600 cursor-pointer transition-colors"
          >
            Discover
            <span className="w-10 h-10 rounded-full text-2xl flex items-center justify-center">
              →
            </span>
          </motion.button>
        </Link>
      </div>

      {/* Right Image */}
      <motion.div
        initial={{ opacity: 0, x: 120, scale: 0.8 }}
        animate={{
          opacity: 1,
          x: 0,
          scale: 1,
          y: [0, -15, 0],
        }}
        transition={{
          opacity: { duration: 0.9, delay: 0.3 },
          x: { duration: 0.9, delay: 0.3 },
          scale: { duration: 0.9, delay: 0.3 },
          y: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        whileHover={{ scale: 1.05 }}
        className="w-[45%] flex justify-end"
      >
        <img
          className="w-90 h-90 object-cover rounded-full mr-10 border-2 border-white shadow-[0_0_50px_rgba(34,197,94,0.35)]"
          src="/profile.jpg"
          alt="Profile"
        />
      </motion.div>
    </section>
  );
};

export default Home;
