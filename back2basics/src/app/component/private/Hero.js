// components/Hero.js
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
const Hero = () => {
  const images = [
    "/p1.jpg", // Image 1
    "/p2.jpg", // Image 2
    "/p3.jpg", // Image 3
    "/p4.jpg", // Image 4
  ];
  return (
    <div className="bg-[#63BF6D]  flex flex-col-reverse md:flex-row items-center justify-between   text-white ">
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 50 }}
        className=" flex flex-col justify-center text-left p-6 mb-4 md:pr-[6rem] bg-[#63BF6D] md:h-[70vh] md:w-[65%]"
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
        <button className="mt-4 bg-gray-600 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-200 max-w-fit ">
          Learn more about our products
        </button>
      </motion.div>
      <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
        {/* <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
          <div className="relative">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
              className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
            />
            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
          </div>
        </div> */}
        <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
          <div className="relative">
            <img
              alt=""
              src="/p1.jpg" // Image 1
              className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
            />
            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
          </div>
          <div className="relative">
            <img
              alt=""
              src="/p2.jpg"
              className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
            />
            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
          </div>
        </div>
        <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
          <div className="relative">
            <img
              alt=""
              src="/p3.jpg"
              className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
            />
            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
          </div>
          <div className="relative">
            <img
              alt=""
              src="/p4.jpg"
              className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
            />
            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
          </div>
        </div>
      </div>
      {/* <motion.div
        initial={{ x: "100vw" }}
        animate={{ x: "-5vw" }}
        transition={{ type: "spring", stiffness: 50 }}
        className="w-[100%] md:w-[40%] md:h-[250px] grid grid-cols-2 grid-rows-2 gap-2 bg-white border-10 border-brown"
      >
        {images.map((src, index) => (
          <div
            key={index}
            className="w-full h-full flex items-center justify-center"
          >
            <Image
              width={100}
              height={100}
              src={src}
              alt={`Image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </motion.div> */}
    </div>
  );
};

export default Hero;
