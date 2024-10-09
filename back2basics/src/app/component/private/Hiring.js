// components/HiringProcess.js

const HiringProcess = () => {
  return (
    <div className="py-8 px-4 md:px-16 bg-white text-center">
      <h2 className="text-3xl font-bold mb-8">Our Hiring Process</h2>

      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* Process Step */}
        <div className="flex flex-col items-center text-center mb-8 md:mb-0 md:flex-1">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full  bg-gray-300 text-white flex items-center justify-center">
              <span className="block w-2 h-2 bg-white rounded-full"></span>
            </div>
          </div>
          <h3 className="text-lg font-bold text-gray-900 mt-4">
            Getting Started
          </h3>
          <p className="text-gray-500 mt-2">
            Start your journey by exploring our jobs.
          </p>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-1/6 h-1 bg-gradient-to-r from-gray-300 to-gray-600"></div>

        {/* Process Step */}
        <div className="flex flex-col items-center text-center mb-8 md:mb-0 md:flex-1">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-gray-300 text-white flex items-center justify-center">
              <span className="block w-2 h-2 bg-white rounded-full"></span>
            </div>
          </div>
          <h3 className="text-lg font-bold text-gray-900 mt-4">Applying</h3>
          <p className="text-gray-500 mt-2">
            Click the links to see specific roles you would like to apply to.
          </p>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-1/6 h-1 bg-gradient-to-r from-gray-300 to-blue-400"></div>

        {/* Process Step */}
        <div className="flex flex-col items-center text-center mb-8 md:mb-0 md:flex-1">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-gray-300 text-white flex items-center justify-center">
              <span className="block w-2 h-2 bg-white rounded-full"></span>
            </div>
          </div>
          <h3 className="text-lg font-bold text-gray-900 mt-4">
            Acknowledgement
          </h3>
          <p className="text-gray-500 mt-2">
            You will receive a confirmation that your application has been
            received.
          </p>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-1/6 h-1 bg-gradient-to-r from-gray-300 to-blue-400"></div>

        {/* Process Step */}
        <div className="flex flex-col items-center text-center mb-8 md:mb-0 md:flex-1">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-gray-300 text-white flex items-center justify-center">
              <span className="block w-2 h-2 bg-white rounded-full"></span>
            </div>
          </div>
          <h3 className="text-lg font-bold text-gray-900 mt-4">
            Selection for Interviews
          </h3>
          <p className="text-gray-500 mt-2">
            If selected, a member of our Talent Acquisition Team will be in
            touch.
          </p>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-1/6 h-1 bg-gradient-to-r from-gray-300 to-blue-400"></div>

        {/* Process Step */}
        <div className="flex flex-col items-center text-center md:flex-1">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-gray-300 text-white flex items-center justify-center">
              <span className="block w-2 h-2 bg-white rounded-full"></span>
            </div>
          </div>
          <h3 className="text-lg font-bold text-gray-900 mt-4">Decision</h3>
          <p className="text-gray-500 mt-2">
            Candidates who have participated in the interview process will be
            informed of the selection decision.
          </p>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-1/6 h-1 bg-gradient-to-r from-gray-300 to-blue-400"></div>

        {/* Final Step */}
        <div className="flex flex-col items-center text-center md:flex-1">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-gray-300 text-white flex items-center justify-center">
              <span className="block w-2 h-2 bg-white rounded-full"></span>
            </div>
          </div>
          <h3 className="text-lg font-bold text-gray-900 mt-4">Selection</h3>
          <p className="text-gray-500 mt-2">
            Congratulations! We cannot wait for you to start your career with
            us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HiringProcess;
