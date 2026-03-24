import { useEffect, useState } from "react";

export default function Loading({ setPage }) {
  const steps = [
    "Fetching repository data...",
    "Analyzing commits...",
    "Evaluating contributors...",
    "Generating AI insights...",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => prev + 1);
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-[#020617] text-cyan-400">
      <div className="text-2xl mb-5 animate-pulse">Processing...</div>

      {steps.slice(0, current).map((step, i) => (
        <p key={i} className="mb-2">
          ✔ {step}
        </p>
      ))}
    </div>
  );
}