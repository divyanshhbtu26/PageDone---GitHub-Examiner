export default function RepoHeader({ repo }) {
  return (
    <div className="bg-white/10 p-5 rounded-xl">
      <h2 className="text-2xl font-bold">{repo.name}</h2>
      <p>Owner: {repo.owner}</p>
      <p>⭐ {repo.stars} | 🍴 {repo.forks} | 🐞 {repo.issues}</p>
      <p>🧠 {repo.language}</p>
    </div>
  );
}