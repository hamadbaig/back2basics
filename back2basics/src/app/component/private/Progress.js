import CircularProgress from "./CircularProgress";

export default function Progress() {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-16 bg-white text-center">
      <h2 className="text-2xl md:text-4xl font-bold text-[#63BF6D]  mb-4">
        Beyond recycling — we produce sustainable EV battery material.
      </h2>
      <p className="text-lg text-gray-700 max-w-2xl mb-8">
        We help EV battery manufacturers and end users maximize value. Beyond
        producing commodity metals, we use advanced particle engineering
        techniques to transform used Li-ion batteries and manufacturing scrap
        into highly engineered precursor (pCAM) and cathode active materials
        (CAM) that meet client specifications.
        <br />
        Our full-service logistics, materials-tracking and customer support
        services simplify the pursuit of greater sustainability and higher
        value.
      </p>

      <div className="flex flex-col md:flex-row justify-around items-center w-full max-w-4xl">
        <CircularProgress percentage={98} label="Recovery rate" />
        <CircularProgress percentage={100} label="Peace of mind" />
      </div>

      <button className="mt-8 px-6 py-3 bg-gray-600 text-white text-lg rounded-full shadow-lg hover:bg-gray-300 transition-colors">
        Learn more about our services
      </button>
    </div>
  );
}
