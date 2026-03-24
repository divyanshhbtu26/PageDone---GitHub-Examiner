import { useContext } from "react";
import { RepoContext } from "../context/RepoContext";
import RepoHeader from "../components/dashboard/RepoHeader";
import InsightCards from "../components/dashboard/InsightCards";
import Charts from "../components/dashboard/Charts";
import Contributors from "../components/dashboard/Contributors";
import Commits from "../components/dashboard/Commits";

export default function Dashboard() {
  const { repoData } = useContext(RepoContext);

  if (!repoData) return <div>No Data</div>;

  return (
    <div className="bg-[#020617] text-white p-6 space-y-6">
      <RepoHeader repo={repoData.repo} />
      <InsightCards insights={repoData.insights} />
      <Charts data={repoData} />
      <Contributors list={repoData.contributors} />
      <Commits list={repoData.commits} />
    </div>
  );
}