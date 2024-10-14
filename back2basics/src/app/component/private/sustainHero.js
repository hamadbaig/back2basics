export default function SustainHero() {
  return (
    <>
      <div className="relative bg-white">
        <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
          <div className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
            <div className="relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=2560&h=3413&&q=80"
                className="absolute inset-0 h-full w-full bg-gray-50 object-cover"
              />
            </div>
          </div>
          <div className="px-6 lg:contents">
            <div className="mx-auto max-w-2xl pb-24 pt-8 sm:pb-14 sm:pt-10 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none lg:pt-16 xl:w-1/2">
              <p className="text-base font-semibold leading-7 text-indigo-600">
                Sustainability:
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Zero Emissions Process
              </h1>
              <p className="mt-4  leading-8 text-gray-700">
                Back2Basics Recycling uses an emission-free, closed-loop
                hydrometallurgical process that ensures no harmful discharge
                into the environment. This aligns with global sustainability
                efforts to reduce carbon footprints and protect natural
                ecosystems, positioning the company as a leader in eco-friendly
                recycling.
              </p>

              <h2 className="mt-6 text-2xl font-bold tracking-tight text-gray-900">
                Resource Recovery and Circular Economy
              </h2>
              <p className="mt-4">
                The company focuses on maximizing the recovery of critical
                minerals like Lithium, Cobalt, Nickel, and Manganese from spent
                batteries. These recovered materials are reintegrated into the
                manufacturing process, promoting a circular economy by
                minimizing waste and conserving finite resources.
              </p>
              <h2 className="mt-6 text-2xl font-bold tracking-tight text-gray-900">
                Energy Efficiency
              </h2>
              <p className="mt-4">
                By utilizing innovative hydrometallurgy, Back2Basics
                significantly reduces energy and resource consumption compared
                to traditional mineral extraction methods, ensuring an
                efficient, sustainable recycling process.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-8 mt-10 pb-10 space-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 bg-[#63BF6D]">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8">
          <div className="mt-6 lg:col-span-5 lg:mt-0 xl:col-span-4 ">
            <h3 className="text-xl font-medium text-white">
              Bio-hydrometallurgical Battery Recycling
            </h3>
            <p className="mt-2 text-sm text-white">
              At Back2Basics Recycling Pvt. Ltd., the bio-hydrometallurgical
              route for battery recycling ensures sustainable development by
              utilizing environmentally friendly leaching processes, reducing
              carbon emissions, and contributing to net-zero goals. This
              approach minimizes energy consumption while effectively recovering
              valuable metals, aligning with the companys commitment to
              low-impact recycling technologies.
            </p>
          </div>
          <div className="flex-auto lg:col-span-7 xl:col-span-8">
            <div className="aspect-h-2 aspect-w-5 overflow-hidden rounded-lg bg-gray-100">
              <img
                alt="Bio-hydrometallurgical Battery Recycling"
                src="/recycling-2.jpg"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
