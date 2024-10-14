import React from "react";
const AscendComponent = () => {
  return (
    <div
      className=" flex items-center relative w-full min-h-screen bg-cover bg-center "
      style={{ backgroundImage: 'url("/background.jpg")' }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative flex flex-col md:flex-row items-center justify-center h-full text-center">
        <div className="flex items-center bg-[#63BF6D]  text-white p-6  shadow-lg md:w-[50%] h-[300px]">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">
            With Back2Basics Elements, the battery materials supply chain is
            looking up.
          </h1>
        </div>
        <div className="text-white mt-8  md:w-[47%] mx-auto p-6 bg-opacity-75  rounded-lg">
          <p className="text-md text-left">
            When it comes to meeting the needs of lithium-ion supply chains,
            Back2Basics Elements aims higher. We go beyond just recycling,
            instead upcycling discarded batteries into premium cathode active
            materials—all at a lower cost and carbon footprint. Our unique{" "}
            <strong>Hydro-to-Cathode®</strong> direct precursor synthesis
            process unlocks hidden value to return critical materials back to
            lithium battery manufacturers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AscendComponent;
