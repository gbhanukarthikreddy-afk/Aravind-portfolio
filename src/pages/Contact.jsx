import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaInstagram,
  FaPhoneAlt,
  FaPaperPlane,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const contactInfo = [
    {
      icon: <SiGmail />,
      title: "Email",
      value: "gbhanukarthikreddy@gmail.com",
      link: "mailto:gbhanukarthikreddy@gmail.com",
      color: "text-red-400",
    },
    {
      icon: <FaPhoneAlt />,
      title: "Phone",
      value: "+91 9959043766",
      link: "tel:+919959043766",
      color: "text-green-400",
    },
    {
      icon: <FaInstagram />,
      title: "Instagram",
      value: "@xbo_2026",
      link: "https://instagram.com/xbo_2026",
      color: "text-pink-400",
    },
    {
      icon: <FaGithub />,
      title: "GitHub",
      value: "GitHub Profile",
      link: "https://github.com/gbhanukarthikreddy-afk",
      color: "text-white",
    },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      setStatus("Please fill all fields");
      return;
    }

    try {
      setStatus("Sending...");

      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("Message sent successfully!");

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus(data.message || "Failed to send message");
      }
    } catch (error) {
      console.error(error);
      setStatus("Backend not connected");
    }
  };

  return (
    <section className="min-h-[80vh] px-6 lg:px-20 py-16 text-white">
      <div className="text-center mb-14">
        <motion.p
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-green-400 uppercase tracking-[0.4em] text-sm mb-4"
        >
          Get In Touch
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: -35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-bold"
        >
          Contact Me
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="max-w-2xl mx-auto mt-5 text-white/70 text-base md:text-lg"
        >
          Have a project idea, website request, or Discord bot work? Send me a
          message and let’s build something cool.
        </motion.p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -80, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{
            y: -8,
            boxShadow: "0 0 45px rgba(34,197,94,0.25)",
          }}
          className="bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-10"
        >
          <h2 className="text-3xl font-bold mb-4">Contact Details</h2>

          <p className="text-white/70 mb-8 leading-relaxed">
            You can contact me through email, Instagram, GitHub, or phone.
          </p>

          <div className="space-y-5">
            {contactInfo.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                target={item.link.startsWith("http") ? "_blank" : "_self"}
                rel="noreferrer"
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                whileHover={{ x: 10, scale: 1.02 }}
                transition={{
                  duration: 0.4,
                  delay: 0.25 + index * 0.12,
                  ease: "easeOut",
                }}
                className="flex items-center gap-4 bg-black/20 border border-white/10 rounded-2xl p-4 hover:bg-green-600/20 hover:border-green-400/50 transition"
              >
                <span className={`text-3xl shrink-0 ${item.color}`}>
                  {item.icon}
                </span>

                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-white/70 text-sm md:text-base break-all">
                    {item.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Right Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 80, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          whileHover={{
            y: -8,
            boxShadow: "0 0 45px rgba(34,197,94,0.25)",
          }}
          className="bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-10"
        >
          <h2 className="text-3xl font-bold mb-8">Send Message</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex flex-col gap-2"
            >
              <label className="text-white/80">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="bg-black/30 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-green-400 focus:bg-black/40 transition"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="flex flex-col gap-2"
            >
              <label className="text-white/80">Your Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="bg-black/30 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-green-400 focus:bg-black/40 transition"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="flex flex-col gap-2 mt-5"
          >
            <label className="text-white/80">Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Project / website / bot request"
              className="bg-black/30 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-green-400 focus:bg-black/40 transition"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.65 }}
            className="flex flex-col gap-2 mt-5"
          >
            <label className="text-white/80">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="6"
              placeholder="Write your message..."
              className="resize-none bg-black/30 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-green-400 focus:bg-black/40 transition"
            ></textarea>
          </motion.div>

          <motion.button
            type="submit"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 35px rgba(34,197,94,0.45)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.4, delay: 0.8 }}
            className="mt-7 flex items-center justify-center gap-3 w-full bg-green-600 hover:bg-green-700 rounded-2xl py-4 font-semibold cursor-pointer transition"
          >
            Send Message
            <FaPaperPlane />
          </motion.button>

          {status && (
            <p
              className={`mt-4 text-center font-semibold ${
                status.includes("successfully")
                  ? "text-green-400"
                  : status.includes("Sending")
                  ? "text-yellow-400"
                  : "text-red-400"
              }`}
            >
              {status}
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;