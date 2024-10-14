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
      <section>
        <div className="flex justify-center items-center w-[80%] h-[100vh] mt-8 mb-8">
          <h2 className="text-xl font-bold text-white md:text-2xl lg:text-3xl mb-4">
            Watch our Hydro-to-Anode® process in action
          </h2>
          <video
            className="w-full rounded-lg shadow-lg"
            controls
            autoplay
            src="https://utfs.io/f/P4auCx0rGutTFiAdFn0pMUAIsLHvcfoVk1iXOryz4RT3G0aj"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
      <section className="py-12 px-6 bg-[#63BF6D] text-center">
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
      </section>
    </>
  );
};

export default ServicesSection;
