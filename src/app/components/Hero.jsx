import { FaCube, FaArrowRight } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center py-28 bg-gradient-to-r from-sky-400 to-sky-600 overflow-hidden">
      
      {/* Subtle 3D Mesh Background */}
      <div className="absolute inset-0 opacity-10">
        <img
          src="/3d-mesh.png" // replace with a subtle mesh or 3D model overlay
          alt="3D mesh background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-white">
          <span className="text-white">Engineering</span> &{" "}
          <span className="text-sky-200">Architectural</span> 3D Models
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl text-white/90">
          Showcasing precision-crafted designs for professionals, creators, and innovators.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="/products"
            className="flex items-center justify-center px-8 py-3 rounded-full bg-white text-black font-semibold hover:scale-105 hover:shadow-lg transition transform"
          >
            <FaCube className="mr-2" /> Explore Models
          </a>
          <a
            href="/contact"
            className="px-8 py-3 rounded-full border-2 border-white text-white font-semibold hover:bg-white hover:text-black transition"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 animate-bounce">
        <span className="text-white text-2xl">⌄</span>
      </div>
    </section>
  );
}
