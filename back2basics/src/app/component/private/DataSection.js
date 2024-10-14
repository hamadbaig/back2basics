import Image from "next/image";

const DataSection = () => {
  return (
    <div className="flex flex-col items-center mt-8 px-4">
      {/* Top row of colored icons */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        <Image
          src="https://utfs.io/f/P4auCx0rGutTnpVZus1tqU802EWsYIRwBrG53cL6JTfhzZSF"
          alt="Icon 7"
          width={100}
          height={100}
        />
        <Image
          src="https://utfs.io/f/P4auCx0rGutTJLwYuGyevSlapXdQV9kPc80o7fFLw16DAWGq"
          alt="Icon 9"
          width={100}
          height={100}
        />
        <Image
          src="https://utfs.io/f/P4auCx0rGutTY64IgOnm45rQV91X8yPk3DbZEKHGNMeFjAh7"
          alt="Icon 12"
          width={100}
          height={100}
        />
        <Image
          src="https://utfs.io/f/P4auCx0rGutTs5tJb9kQfSi0MH17qg9vLmBGzyJRZe83ox4n"
          alt="Icon 13"
          width={100}
          height={100}
        />
        <Image
          src="https://utfs.io/f/P4auCx0rGutTWruVgUlwBgaVYeH4UqN6ujEsLJMXic2tmxzb"
          alt="Icon 15"
          width={100}
          height={100}
        />
      </div>

      {/* Data Row */}
      <div className="flex flex-wrap justify-around text-center text-black w-[60%]">
        <div className="m-4">
          <h3 className="text-2xl font-bold">100+</h3>
          <p className="text-sm">Aggregators Upliftment</p>
        </div>
        <div className="m-4">
          <h3 className="text-2xl font-bold">7500Mt</h3>
          <p className="text-sm">Monthly Recycling Capacity</p>
        </div>
        <div className="m-4">
          <h3 className="text-2xl font-bold">600Mt+</h3>
          <p className="text-sm">Monthly Battery Sourcing Network</p>
        </div>
        <div className="m-4">
          <h3 className="text-2xl font-bold">5</h3>
          <p className="text-sm">
            Battery OEM tieups <br />
            (in process)
          </p>
        </div>
        <div className="m-4">
          <h3 className="text-2xl font-bold">5+</h3>
          <p className="text-sm">
            Bulk Consumer tieups <br />
            (in process)
          </p>
        </div>
        <div className="m-4">
          <h3 className="text-2xl font-bold">30+</h3>
          <p className="text-sm">Pan India Collection Centres</p>
        </div>
      </div>
    </div>
  );
};

export default DataSection;
