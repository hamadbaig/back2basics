import Image from "next/image";

export default function MainHero() {
  return (
    <div className="flex  md:flex-row items-center justify-center   bg-white">
      <div className="relative w-full">
        <video
          className="w-full shadow-lg z-0"
          controls
          autoPlay
          src="https://utfs.io/f/P4auCx0rGutTaCd4uvS2dno8qUtCAby9ifGja4OcluZkpXrW"
        ></video>
        <h1 className="absolute top-0 left-0 w-[60%] h-full flex items-center justify-center text-2xl md:text-4xl font-bold text-white text-center">
          Sustainable lithium-ion battery materials and elevated recycling —{" "}
        </h1>
      </div>
    </div>
  );
}
