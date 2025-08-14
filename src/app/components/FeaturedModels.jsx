"use client";

import { useState } from "react";

export default function FeaturedModels() {
  const [material, setMaterial] = useState("PLA");
  const [dimensions, setDimensions] = useState({ length: "", width: "", height: "" });
  const [infill, setInfill] = useState(20);
  const [quantity, setQuantity] = useState(1);

  const calculatePrice = () => {
    const volume =
      (parseFloat(dimensions.length) || 0) *
      (parseFloat(dimensions.width) || 0) *
      (parseFloat(dimensions.height) || 0);
    const basePrice = 0.05; // price per cubic cm
    return (volume * basePrice * quantity * (1 + infill / 100)).toFixed(2);
  };

  const formFields = [
    {
      label: "Material",
      type: "select",
      value: material,
      setValue: setMaterial,
      options: ["PLA", "ABS", "PETG"],
    },
    {
      label: "Length (cm)",
      type: "number",
      value: dimensions.length,
      setValue: (v) => setDimensions({ ...dimensions, length: v }),
    },
    {
      label: "Width (cm)",
      type: "number",
      value: dimensions.width,
      setValue: (v) => setDimensions({ ...dimensions, width: v }),
    },
    {
      label: "Height (cm)",
      type: "number",
      value: dimensions.height,
      setValue: (v) => setDimensions({ ...dimensions, height: v }),
    },
    {
      label: "Infill Percentage (%)",
      type: "number",
      value: infill.toString(),
      setValue: (v) => setInfill(parseInt(v) || 0),
    },
    {
      label: "Quantity",
      type: "number",
      value: quantity.toString(),
      setValue: (v) => setQuantity(parseInt(v) || 1),
    },
  ];

  return (
    <section className="py-12 bg-gradient-to-b from-orange-50 to-orange-100">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-orange-900 text-center">
          3D Print Quote Calculator
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 bg-white shadow-lg rounded-3xl p-8">
          {formFields.map((field, idx) => (
            <div
              key={idx}
              className="flex flex-col bg-orange-50 rounded-xl p-4 shadow hover:shadow-lg transition-shadow duration-300"
            >
              <label className="mb-2 text-orange-800 font-medium">{field.label}</label>
              {field.type === "select" ? (
                <select
                  value={field.value}
                  onChange={(e) => field.setValue(e.target.value)}
                  className="border border-orange-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                >
                  {field.options.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type={field.type}
                  value={field.value}
                  onChange={(e) => field.setValue(e.target.value)}
                  className="border border-orange-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              )}
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <p className="text-xl font-semibold text-orange-900">
            Estimated Price:{" "}
            <span className="text-orange-600 font-bold">${calculatePrice()}</span>
          </p>
        </div>
      </div>
    </section>
  );
}
