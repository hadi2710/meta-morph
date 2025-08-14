"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center text-gray-900 overflow-hidden">
      {/* Background image with light overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/hero-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: `center ${scrollY * 0.3}px`,
        }}
      />
      <div className="absolute inset-0 bg-white/60" />

      {/* Soft radial glow based on mouse */}
      <div
        className="absolute inset-0 opacity-30 transition-all duration-300 ease-out"
        style={{
          background: `radial-gradient(500px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,165,0,0.4), transparent 40%)`,
        }}
      />

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-center px-4 max-w-6xl"
      >
        {/* Tagline badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-6 inline-flex items-center px-4 py-2 bg-orange-100 border border-orange-300 rounded-full text-sm font-medium text-orange-700"
        >
          Premium 3D Design Studio
        </motion.div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
          <span className="bg-gradient-to-r from-orange-600 via-orange-500 to-orange-700 bg-clip-text text-transparent">
            Welcome to
          </span>
          <br />
          <span className="bg-gradient-to-r from-orange-700 via-orange-600 to-orange-800 bg-clip-text text-transparent font-extrabold">
            Meta Morph
          </span>
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-lg md:text-xl lg:text-2xl mb-8 font-light text-orange-800"
        >
          Crafting premium{" "}
          <span className="font-medium text-orange-900">
            engineering & architectural
          </span>{" "}
          3D models
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <button className="px-8 py-4 bg-orange-600 text-white rounded-full text-lg font-bold hover:bg-orange-500 transition">
            Explore Models
          </button>
          <button className="px-8 py-4 border-2 border-orange-600 text-orange-600 rounded-full text-lg font-bold hover:bg-orange-100 transition">
            View Portfolio
          </button>
        </motion.div>

        {/* Feature highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap justify-center gap-6"
        >
          {[
            { icon: "⚡", text: "Fast Delivery" },
            { icon: "🎯", text: "Precision Design" },
            { icon: "💎", text: "Premium Quality" },
            { icon: "🔧", text: "CAD Ready" },
          ].map((feature) => (
            <div
              key={feature.text}
              className="flex items-center px-4 py-2 bg-orange-100 border border-orange-300 rounded-full text-sm text-orange-700 hover:bg-orange-200 transition"
            >
              <span className="mr-2">{feature.icon}</span>
              {feature.text}
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
