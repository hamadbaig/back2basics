// components/Awards.js
import Image from "next/image";
import React from "react";

const Awards = () => {
  return (
    <div className="bg-blue-900 py-8 mb-6">
      <div className="container mx-auto p-8 flex flex-col lg:flex-row gap-6 justify-center items-center ">
        <div className="bg-blue-200 p-4 flex flex-col sm:flex-row   shadow-lg relative">
          <Image
            src="/awd1.webp"
            alt="Fast Company Award"
            width={100}
            height={100}
            className="w-auto h-auto sm:mr-4 mt-[-2rem] "
          />
          <div className="mt-4 sm:mt-0 text-center sm:text-left">
            <h2 className="text-black font-semibold">
              Back2Basics Elements ranked #1
            </h2>
            <p className="text-gray-700">
              in Automotive on Fast Company’s Most Innovative Companies of 2024
              list.
            </p>
            <button className="bg-green-400 text-white py-2 px-4 mt-4 rounded-lg hover:bg-green-500 transform -translate-y-4">
              Read more
            </button>
          </div>
        </div>

        <div className="bg-blue-200 p-4 flex flex-col sm:flex-row   shadow-lg relative">
          <Image
            src="/awd2.webp"
            alt="Time Magazine Award"
            width={100}
            height={100}
            className="w-auto sm:mr-4 mt-[-2rem] h-auto"
          />
          <div className="mt-4 sm:mt-0 text-center sm:text-left">
            <h2 className="text-black font-semibold">
              Back2Basics Elements ranked #10
            </h2>
            <p className="text-gray-700">
              by TIME Magazine as one of America Top Green Tech Companies of
              2024.
            </p>
            <button className="bg-green-400 text-white py-2 px-4 mt-4 rounded-lg hover:bg-green-500">
              Read more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;
