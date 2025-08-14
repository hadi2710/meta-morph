"use client";

import { useState, useEffect } from "react";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsLoaded(true);

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      className="relative h-screen flex items-center justify-center text-white overflow-hidden"
    >
      {/* Background image with parallax */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/hero-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: `center ${scrollY * 0.3}px`,
          backgroundAttachment: "scroll",
          transition: "background-position 0.1s ease-out",
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/70"></div>

      {/* Dynamic blue glow */}
      <div
        className="absolute inset-0 opacity-20 transition-all duration-300 ease-out"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(56, 189, 248, 0.15), transparent 40%)`,
        }}
      />

      {/* Main content */}
      <div
        className={`relative z-10 text-center px-4 max-w-6xl transition-all duration-1000 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Premium badge */}
        <div className="mb-6 inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm font-medium text-white/90 animate-fade-in-up">
          <span className="w-2 h-2 bg-sky-400 rounded-full mr-2 animate-pulse"></span>
          Premium 3D Design Studio
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
          <span
            className={`inline-block transition-all duration-700 delay-200 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="bg-gradient-to-r from-white via-sky-100 to-white bg-clip-text text-transparent">
              Welcome to
            </span>
          </span>
          <br />
          <span
            className={`inline-block transition-all duration-700 delay-400 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="bg-gradient-to-r from-sky-300 via-sky-400 to-cyan-300 bg-clip-text text-transparent font-extrabold">
              Meta Morph
            </span>
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className={`text-xl md:text-2xl lg:text-3xl mb-8 font-light leading-relaxed transition-all duration-700 delay-600 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-white/90">Crafting Premium</span>
          <br className="md:hidden" />
          <span className="text-sky-200 font-medium">
            {" "}
            Engineering & Architectural{" "}
          </span>
          <br />
          <span className="text-white/90">3D Models</span>
        </p>

        {/* Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center mb-12 transition-all duration-700 delay-800 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <button className="group relative px-8 py-4 bg-gradient-to-r from-sky-500 to-cyan-600 hover:from-sky-600 hover:to-cyan-700 text-white rounded-full text-lg font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-sky-500/25 overflow-hidden">
            <span className="relative z-10 flex items-center justify-center">
              <svg
                className="w-5 h-5 mr-2 transition-transform group-hover:rotate-12"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
              </svg>
              Explore Models
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full transition-transform duration-700 group-hover:translate-x-full" />
          </button>

          <button className="group px-8 py-4 border-2 border-white/40 hover:border-sky-400 text-white hover:text-sky-400 rounded-full text-lg font-bold backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:shadow-lg">
            <span className="flex items-center justify-center">
              View Portfolio
              <svg
                className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
          </button>
        </div>

        {/* Feature highlights */}
        <div
          className={`flex flex-wrap justify-center gap-6 transition-all duration-700 delay-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {[
            { icon: "⚡", text: "Fast Delivery" },
            { icon: "🎯", text: "Precision Design" },
            { icon: "💎", text: "Premium Quality" },
            { icon: "🔧", text: "CAD Ready" },
          ].map((feature, i) => (
            <div
              key={feature.text}
              className="flex items-center px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm text-white/80 transition-all duration-300 hover:bg-white/20 hover:border-sky-400/50 hover:text-sky-200"
              style={{ animationDelay: `${i * 0.1 + 1}s` }}
            >
              <span className="mr-2">{feature.icon}</span>
              {feature.text}
            </div>
          ))}
        </div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-8 right-8 w-20 h-20 border-t-2 border-r-2 border-sky-400/30"></div>
      <div className="absolute bottom-8 left-8 w-20 h-20 border-b-2 border-l-2 border-sky-400/30"></div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) translateX(0px) opacity(0.3);
          }
          50% {
            transform: translateY(-20px) translateX(10px) opacity(0.8);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
