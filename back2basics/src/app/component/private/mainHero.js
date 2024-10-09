import Image from "next/image";

export default function MainHero() {
  return (
    <div className="flex  md:flex-row items-center justify-center px-4 py-16 bg-white">
      <div className="relative w-[80%]">
        <video
          className="w-full rounded-lg shadow-lg z-0"
          controls
          src="https://utfs.io/f/P4auCx0rGutTRvaUgOz6tUFEMjVohHpecliSOgwYsCuPIBW8"
        ></video>
        <h1 className="absolute top-0 left-0 w-[60%] h-full flex items-center justify-center text-2xl md:text-4xl font-bold text-white text-center">
          Sustainable lithium-ion battery materials and elevated recycling —{" "}
        </h1>
      </div>
    </div>
  );
}
