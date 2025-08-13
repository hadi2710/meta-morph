import { FaCube } from "react-icons/fa";

const featuredModels = [
  { id: 1, name: "Modern Skyscraper", img: "/models/skyscraper.jpg" },
  { id: 2, name: "Engineering Bridge", img: "/models/bridge.jpg" },
  { id: 3, name: "Architectural Villa", img: "/models/villa.jpg" },
];

export default function FeaturedModels() {
  return (
    <section className="py-20 px-8 bg-gray-50 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
        Featured 3D Models
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {featuredModels.map((model) => (
          <div key={model.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition transform">
            <img src={model.img} alt={model.name} className="w-full h-56 object-cover" />
            <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">{model.name}</h3>
            <a href="/products" className="inline-block mb-4 px-4 py-2 rounded-full bg-sky-400 text-white hover:bg-sky-500 transition">
              View Model
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
