const JoinTeamComponent = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center py-16 space-y-8 md:space-y-0 md:space-x-16 bd">
      <div className="text-center md:text-left max-w-md">
        <h2 className="text-3xl font-bold mb-4">
          Join our team. <br />
          Grow your career.
        </h2>
        <p className="text-lg mb-6">
          Are you looking to make a difference in the world? Join us in making
          electric vehicle batteries cleaner and more sustainable.
        </p>
        <a
          href="#"
          className="inline-block bg-gray-600 text-white text-lg font-semibold py-2 px-4 rounded-full hover:bg-gray-300 transition"
        >
          See Careers
        </a>
      </div>

      <div className="text-center md:text-left max-w-md">
        <h2 className="text-3xl font-bold mb-4">
          We help OEMs and battery manufacturers.
        </h2>
        <p className="text-lg mb-6">
          We increase value across the lithium battery supply chain. Want to see
          for yourself? We’ll help you evaluate our products and services.
        </p>
        <a
          href="#"
          className="inline-block bg-gray-600 text-white text-lg font-semibold py-2 px-4 rounded-full hover:bg-gray-300 transition"
        >
          Let Talk
        </a>
      </div>
    </div>
  );
};

export default JoinTeamComponent;
