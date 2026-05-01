import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const linkStyle =
    "relative hover:text-gray-400 transition after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-green-400 after:transition-all after:duration-300 hover:after:w-full";

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full flex justify-between items-center px-10 py-6"
    >
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7, rotate: -20 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <Link to="/">
          <img className="w-16" src="/logo.png" alt="Logo" />
        </Link>
      </motion.div>

      {/* Links */}
      <motion.ul
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.35 }}
        className="flex items-center gap-16 text-white font-semibold"
      >
        <Link to="/" className={linkStyle}>
          <li>Home</li>
        </Link>

        <Link to="/about" className={linkStyle}>
          <li>About</li>
        </Link>

        <Link to="/services" className={linkStyle}>
          <li>Services</li>
        </Link>

        <Link to="/contact" className={linkStyle}>
          <li>Contact</li>
        </Link>
      </motion.ul>

      {/* Button */}
      <Link to="/contact">
        <motion.button
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 35px rgba(34, 197, 94, 0.45)",
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="group flex items-center gap-3 border-2 border-white px-6 py-2 rounded-r-full rounded-bl-full text-white hover:bg-green-600 cursor-pointer transition"
        >
          <span>Get Started</span>

          <span className="w-10 h-10 rounded-full text-2xl flex items-center justify-center group-hover:text-black transition">
            →
          </span>
        </motion.button>
      </Link>
    </motion.nav>
  );
};

export default Navbar;
