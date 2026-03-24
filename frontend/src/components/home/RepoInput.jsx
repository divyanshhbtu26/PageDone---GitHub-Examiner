import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { analyzeRepo } from "../../services/api";
import { RepoContext } from "../../context/RepoContext";

export default function RepoInput() {
  const [url, setUrl] = useState("");
  const { setRepoData } = useContext(RepoContext);
  const navigate = useNavigate();

  const handleAnalyze = async () => {
    navigate("/loading");

    try {
      const data = await analyzeRepo(url);
      setRepoData(data);

      setTimeout(() => {
        navigate("/dashboard");
      }, 3000);
    } catch (err) {
      alert("Error fetching repo");
      navigate("/");
    }
  };

  return (
    <div className="bg-white/10 p-10 rounded-2xl backdrop-blur-lg shadow-xl text-center">
      <h1 className="text-3xl mb-6 font-bold">GitHub Repo Analyzer</h1>

      <input
        type="text"
        placeholder="Enter GitHub Repo URL"
        className="p-3 w-80 rounded-lg text-black"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />

      <br />

      <button
        onClick={handleAnalyze}
        className="mt-5 px-6 py-2 bg-cyan-400 text-black rounded-lg hover:bg-cyan-300"
      >
        Analyze
      </button>
    </div>
  );
}