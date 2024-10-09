// components/HydroCathode.js
import React from "react";

const HydroCathode = () => {
  return (
    <div className="bg-white text-black py-10">
      <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8">
          Patented <span className="text-blue-300">Hydro-to-Cathode®</span>{" "}
          direct precursor synthesis process completes the supply chain loop.
        </h2>
        <p className="max-w-2xl mx-auto mb-12 text-lg">
          Back 2 Basics Elements is revolutionizing the production of
          lithium-ion battery materials by establishing a clean and sustainable
          supply chain using recycled feedstock...
        </p>

        <div className="relative max-w-xl mx-auto">
          {/* Circular process section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4">
                {/* Icon for the Ni/Li process */}
                <span>Ni Li</span>
              </div>
              <p>
                Creating high-value engineered materials from recycled feedstock
              </p>
            </div>

            <div className="text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4">
                {/* Icon for the scaling */}
                <span>Scale</span>
              </div>
              <p>
                Scaling clean, efficient production of strategic battery
                materials
              </p>
            </div>

            <div className="text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4">
                {/* Icon for recycling */}
                <span>Recycle</span>
              </div>
              <p>Increasing battery recycling</p>
            </div>
          </div>
          <div className="mt-8 text-lg font-semibold">
            Enabling the closed-loop battery economy
          </div>
        </div>
      </div>
    </div>
  );
};

export default HydroCathode;
