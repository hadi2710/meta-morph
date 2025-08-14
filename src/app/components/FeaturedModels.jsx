"use client";

import { useState, useEffect } from "react";

export default function PrintQuoteCalculator() {
  const [material, setMaterial] = useState("PLA");
  const [dimensions, setDimensions] = useState({ length: "", width: "", height: "" });
  const [infill, setInfill] = useState(20);
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const calculatePrice = () => {
    const volume =
      (parseFloat(dimensions.length) || 0) *
      (parseFloat(dimensions.width) || 0) *
      (parseFloat(dimensions.height) || 0);

    if (volume <= 0 || quantity <= 0) {
      setPrice("Invalid");
      return;
    }

    const baseRate = material === "PLA" ? 0.05 : material === "ABS" ? 0.07 : 0.1; // $ per cm³
    const infillFactor = infill / 100;
    const totalPrice = volume * baseRate * infillFactor * quantity;

    setPrice(totalPrice.toFixed(2));
  };

  return (
    <section
      className={`relative py-20 text-white transition-all duration-1000 ${
        isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at center, rgba(56,189,248,0.05) 0%, transparent 70%)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-purple-950 via-purple-900 to-purple-950 opacity-90" />

      <div className="relative max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-sky-300 to-cyan-400 bg-clip-text text-transparent">
          Instant 3D Print Quote Calculator
        </h2>

        {/* Form Card */}
        <div className="grid gap-6 sm:grid-cols-2 bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-white/20 shadow-xl">
          {/* Material */}
          <div>
            <label className="block text-sm font-semibold mb-2">Material</label>
            <select
              value={material}
              onChange={(e) => setMaterial(e.target.value)}
              className="w-full p-3 rounded-lg text-black focus:ring-2 focus:ring-sky-400 outline-none"
            >
              <option value="PLA">PLA</option>
              <option value="ABS">ABS</option>
              <option value="PETG">PETG</option>
            </select>
          </div>

          {/* Length */}
          <div>
            <label className="block text-sm font-semibold mb-2">Length (cm)</label>
            <input
              type="number"
              value={dimensions.length}
              onChange={(e) => setDimensions({ ...dimensions, length: e.target.value })}
              className="w-full p-3 rounded-lg text-black focus:ring-2 focus:ring-sky-400 outline-none"
            />
          </div>

          {/* Width */}
          <div>
            <label className="block text-sm font-semibold mb-2">Width (cm)</label>
            <input
              type="number"
              value={dimensions.width}
              onChange={(e) => setDimensions({ ...dimensions, width: e.target.value })}
              className="w-full p-3 rounded-lg text-black focus:ring-2 focus:ring-sky-400 outline-none"
            />
          </div>

          {/* Height */}
          <div>
            <label className="block text-sm font-semibold mb-2">Height (cm)</label>
            <input
              type="number"
              value={dimensions.height}
              onChange={(e) => setDimensions({ ...dimensions, height: e.target.value })}
              className="w-full p-3 rounded-lg text-black focus:ring-2 focus:ring-sky-400 outline-none"
            />
          </div>

          {/* Infill */}
          <div>
            <label className="block text-sm font-semibold mb-2">Infill Percentage (%)</label>
            <input
              type="number"
              value={infill}
              onChange={(e) => setInfill(parseInt(e.target.value))}
              className="w-full p-3 rounded-lg text-black focus:ring-2 focus:ring-sky-400 outline-none"
            />
          </div>

          {/* Quantity */}
          <div>
            <label className="block text-sm font-semibold mb-2">Quantity</label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              className="w-full p-3 rounded-lg text-black focus:ring-2 focus:ring-sky-400 outline-none"
            />
          </div>
        </div>

        {/* Button */}
        <div className="text-center mt-8">
          <button
            onClick={calculatePrice}
            className="px-8 py-3 rounded-full font-semibold text-lg bg-gradient-to-r from-sky-500 to-cyan-600 hover:scale-105 hover:shadow-lg hover:shadow-sky-500/25 transition-transform duration-300"
          >
            Calculate Price
          </button>
        </div>

        {/* Result */}
        {price && (
          <div
            className={`text-center mt-8 bg-white/10 backdrop-blur-md py-6 px-4 rounded-2xl border border-white/20 transition-all duration-700 ${
              price !== "Invalid" ? "opacity-100 translate-y-0" : "text-red-400"
            }`}
          >
            {price === "Invalid" ? (
              <h3 className="text-xl font-bold">Please enter valid dimensions.</h3>
            ) : (
              <>
                <h3 className="text-2xl font-bold">
                  Estimated Price:{" "}
                  <span className="text-yellow-400">${price}</span>
                </h3>
                <p className="text-sm text-gray-300">
                  * Price is an estimate and may vary based on print complexity.
                </p>
              </>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
