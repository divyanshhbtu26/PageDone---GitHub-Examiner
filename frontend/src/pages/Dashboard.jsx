import { useContext, useEffect, useState } from "react"; // UPDATED: added useEffect & useState
import { RepoContext } from "../context/RepoContext";
import RepoHeader from "../components/dashboard/RepoHeader";
import InsightCards from "../components/dashboard/InsightCards";
import Charts from "../components/dashboard/Charts";
import Contributors from "../components/dashboard/Contributors";
import Commits from "../components/dashboard/Commits";
import { motion } from "framer-motion"; // UPDATED: animation library

export default function Dashboard() {
  const { repoData } = useContext(RepoContext);

  const [step, setStep] = useState(0); // UPDATED: step-based reveal

  // UPDATED: section-by-section animation timing
  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => prev + 1);
    }, 600);

    return () => clearInterval(interval);
  }, []);

  if (!repoData) return <div className="text-white">No Data</div>;

  return (
    <div className="bg-[#020617] text-white p-6 space-y-6 min-h-screen">

      {/* UPDATED: Animated Repo Header */}
      {step >= 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <RepoHeader repo={repoData.repo} />
        </motion.div>
      )}

      {/* UPDATED: Animated Insights */}
      {step >= 1 && (
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <InsightCards insights={repoData.insights} />
        </motion.div>
      )}

      {/* UPDATED: Animated Charts */}
      {step >= 2 && (
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
        >
          <Charts data={repoData} />
        </motion.div>
      )}

      {/* UPDATED: Animated Contributors */}
      {step >= 3 && (
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          <Contributors list={repoData.contributors} />
        </motion.div>
      )}

      {/* UPDATED: Animated Commits */}
      {step >= 4 && (
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          <Commits list={repoData.commits} />
        </motion.div>
      )}

    </div>
  );
}