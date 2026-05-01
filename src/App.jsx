import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

const App = () => {
  const bgImg =
    "https://images.unsplash.com/photo-1507608158173-1dcec673a2e5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Background Image */}
      <img
        src={bgImg}
        alt="background"
        className="fixed inset-0 h-full w-full object-cover object-center opacity-70"
      />

      {/* Dark Overlay */}
      <div className="fixed inset-0 bg-black/60"></div>

      {/* Green Glow Overlay */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_70%_25%,rgba(34,197,94,0.35),transparent_35%)]"></div>

      {/* Left Dark Fade */}
      <div className="fixed inset-0 bg-linear-to-r from-black/80 via-black/30 to-black/60"></div>

      {/* Website Content */}
      <div className="relative z-10 min-h-screen pt-4 md:pt-6">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
