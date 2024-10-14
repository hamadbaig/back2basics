import { useEffect, useState, useRef } from "react";

export default function CircularProgress({ percentage, label }) {
  const [progress, setProgress] = useState(0);
  const circleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setProgress(percentage);
        }
      },
      { threshold: 0.5 } // Adjust this threshold as needed
    );

    if (circleRef.current) {
      observer.observe(circleRef.current);
    }

    return () => {
      if (circleRef.current) {
        observer.unobserve(circleRef.current);
      }
    };
  }, [percentage]);

  return (
    <div ref={circleRef} className="flex flex-col items-center justify-center">
      <div className="relative">
        <svg className="w-24 h-24 transform -rotate-90">
          <circle
            cx="50%"
            cy="50%"
            r="40%"
            stroke="currentColor"
            strokeWidth="8"
            className="text-gray-200"
            fill="transparent"
          />
          <circle
            cx="50%"
            cy="50%"
            r="40%"
            stroke="currentColor"
            strokeWidth="8"
            strokeDasharray="251.2"
            strokeDashoffset={251.2 - (251.2 * progress) / 100}
            className="text-blue-500 transition-all duration-1000 ease-out"
            fill="transparent"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xl font-semibold">{progress}%</span>
        </div>
      </div>
      <div className="mt-2 text-center text-lg font-medium">{label}</div>
    </div>
  );
}
