// components/ServicesSection.jsx

const services = [
  {
    imageSrc: "/innstep1.webp", // Replace with actual image paths
    title:
      " we utilize a cutting-edge, patented hydrometallurgical process for the efficient extraction of critical minerals. This innovative approach offers several key advantages",
  },

  {
    imageSrc: "/innstep3.webp",
    title:
      "By utilizing hydrometallurgy, we significantly reduce energy and resource consumption compared to conventional extraction methods, offering an efficient and sustainable solution.",
  },
  {
    imageSrc: "/innstep4.webp",
    title:
      "Our proprietary technology ensures the recovery of critical materials such as lithium, nickel, cobalt, and manganese salts with the highest purity levels, maintaining zero loss during processing",
  },
  {
    imageSrc: "/innstep2.png",
    title: "We take ownership of your materials at the door.",
  },
];

const ServicesSection = () => {
  return (
    <>
      <section className="w-full h-auto p-2 flex flex-col items-center">
        <div className="flex flex-col lg:flex-row items-center lg:items-start  h-auto  mt-8 mb-8">
          <div className="lg:w-1/2 w-full mb-4 lg:mb-0">
            <h2 className="text-xl font-bold text-white md:text-2xl lg:text-3xl mb-4">
              Watch our Hydro-to-Anode® process in action
            </h2>
            <video
              className="w-full rounded-lg shadow-lg"
              autoPlay
              controls
              loop
              src="https://utfs.io/f/P4auCx0rGutTFiAdFn0pMUAIsLHvcfoVk1iXOryz4RT3G0aj"
            ></video>
          </div>
          <div className="lg:w-1/2 w-full text-black p-4 text-base md:text-lg lg:text-xl lg:pl-8 lg:pt-0">
            <h3 className="font-bold mb-2">Innovative Process:</h3>
            <p className="  text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
              Critical Mineral Extraction At Back2Basics Recycling Private
              Limited, we utilize a cutting-edge, patented hydrometallurgical
              process for the efficient extraction of critical minerals.
              <strong>Highest Purity:</strong> Our proprietary technology
              ensures the recovery of critical materials such as lithium,
              nickel, cobalt, and manganese salts with the highest purity
              levels, maintaining zero loss during processing.
              <strong>Zero Emissions:</strong> Sustainability is central to our
              operations. Our process is designed to be completely
              emission-free, aligning with global initiatives to minimize
              environmental impact.
              <strong>Efficient and Sustainable:</strong> By utilizing
              hydrometallurgy, we significantly reduce energy and resource
              consumption compared to conventional extraction methods, offering
              an efficient and sustainable solution. This breakthrough process
              places Back 2 Basics Recycling at the forefront of responsible
              resource recovery, fostering a circular economy while minimizing
              environmental harm.
            </p>
          </div>
        </div>
      </section>

      {/* <section>
        <div className="flex  items-center w-[80%] h-[100vh] mt-8 mb-8">
          <h2 className="text-xl font-bold text-white md:text-2xl lg:text-3xl mb-4">
            Watch our Hydro-to-Anode® process in action
          </h2>
          <video
            className="w-full rounded-lg shadow-lg"
            autoplay
            controls
            loop
            src="https://utfs.io/f/P4auCx0rGutTFiAdFn0pMUAIsLHvcfoVk1iXOryz4RT3G0aj"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </section> */}
      {/* <section className="py-12 px-6 bg-[#63BF6D] text-center">
        <h2 className="text-white text-3xl font-semibold mb-4">
          Responsible recycling services pay off
        </h2>
        <p className="text-white text-lg mb-8">
          We don’t simply raise the bar on recycling, we exceed your
          expectations. That’s why major cell and automotive OEMs entrust us
          with recycling contracts.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={service.imageSrc}
                alt="Service"
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <p className="text-gray-700">{service.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section> */}
    </>
  );
};

export default ServicesSection;
