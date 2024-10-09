// components/HydroToAnode.jsx

const HydroToAnode = () => {
  return (
    <>
      <section className="flex flex-col items-center justify-center p-4 text-center bg-white md:p-8 mb-[5rem]">
        <h1 className="text-2xl font-bold md:text-3xl lg:text-4xl text-black">
          Introducing Hydro-to-Anode® graphite purification
        </h1>
        <p className="mt-4 text-sm md:text-base lg:text-lg text-black max-w-2xl">
          The essential materials in electric vehicle (EV) and energy storage
          system (ESS) batteries are crucial to our journey toward a .{" "}
          <span className="font-semibold">zero-carbon future®</span> direct Our
          battery raw materials suite provides the critical commercial insights,
          data, and analytics you need to make precise forecasts, manage
          inventories, price risks,{" "}
          <span className="font-semibold">graphite®</span> recovery benchmark
          costs against industry peers, and weigh the costs and benefits of
          sustainability.
        </p>
        <button className="mt-6 px-6 py-3 text-black bg-gray-300 rounded-full hover:bg-gray-600 transition duration-300">
          Learn More
        </button>
      </section>
    </>
  );
};

export default HydroToAnode;
