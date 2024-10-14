// components/Hero.js
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="bg-[#63BF6D] flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between text-white p-8">
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 50 }}
        className="flex flex-col justify-center text-left p-6 mb-4 md:pr-[6rem] bg-[#63BF6D] md:h-[70vh] md:w-[65%]"
      >
        <h2 className="text-3xl font-bold mb-4 ">Back2Basics Elements</h2>
        <p className="mb-4">
          Back2Basics Elements is an independent manufacturer of advanced
          battery materials using valuable elements reclaimed from spent
          lithium-ion batteries. Our patented <strong>Hydro-to-Cathode®</strong>{" "}
          direct precursor synthesis process transforms today’s waste into
          high-value materials for tomorrow’s EV batteries—a giant step up in
          sustainability for the entire industry.
        </p>
        <button className="mt-4 bg-gray-600 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-200 max-w-fit">
          Learn more about our products
        </button>
      </motion.div>

      <div className="mt-14 flex justify-center gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0 flex-col sm:flex-row">
        <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
          <div className="relative group">
            <img
              alt=""
              src="https://utfs.io/f/P4auCx0rGutTFC8Dd5pMUAIsLHvcfoVk1iXOryz4RT3G0ajY" // Image 1
              className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg transition-transform duration-300 group-hover:scale-105"
            />
            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
          </div>
          <div className="relative group">
            <img
              alt=""
              src="https://utfs.io/f/P4auCx0rGutTpUv6IEhH8KyjV5lIJWbmSiLEDgv6OQPwdX0B"
              className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg transition-transform duration-300 group-hover:scale-105"
            />
            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
          </div>
        </div>
        <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
          <div className="relative group">
            <img
              alt=""
              src="https://utfs.io/f/P4auCx0rGutTKhpxghu7EmjfJi14w0YZ3v5CPWdLsOzyI2Uq"
              className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg transition-transform duration-300 group-hover:scale-105"
            />
            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
          </div>
          <div className="relative group">
            <img
              alt=""
              src="https://utfs.io/f/P4auCx0rGutTzoZDV8F1pDEILR6ms3A2uhXSe4kgqHoJWaB5"
              className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg transition-transform duration-300 group-hover:scale-105"
            />
            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
