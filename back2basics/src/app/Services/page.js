import Image from "next/image";

export default function MainHero() {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between px-4 py-16 bg-white ">
      <div className="md:w-1/2 md:pl-[3rem]">
        <h1 className="text-2xl md:text-4xl font-bold text-blue-900 mb-4">
          Sustainable lithium-ion battery materials and recycling —{" "}
          <span className="text-blue-500">elevated.</span>
        </h1>
      </div>
      <div className="w-full md:w-[50%]  mt-8 md:mt-0">
        <div className="w-full">
          <Image
            src="/cells4.webp"
            alt="cells Image"
            width={100}
            height={100}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}
