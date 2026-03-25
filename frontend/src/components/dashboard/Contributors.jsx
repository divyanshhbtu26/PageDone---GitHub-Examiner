export default function Contributors({ list }) {
  return (
    <div className="glass neon bg-white/10 p-4 rounded-xl">
      <h3 className="text-xl mb-3">Contributors</h3>

      {list.map((c, i) => (
        <div key={i} className="mb-3">
          <p>{c.name}</p>
          <div className="bg-gray-700 h-2 rounded">
            <div
              className="bg-cyan-400 h-2 rounded"
              style={{ width: `${c.percentage}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}