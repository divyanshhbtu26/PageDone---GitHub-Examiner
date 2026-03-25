export default function InsightCards({ insights }) {
  return (
    <div className="glass neon grid grid-cols-3 gap-4">
      {insights.map((item, i) => (
        <div
          key={i}
          className={`p-4 rounded-xl ${
            item.type === "danger"
              ? "bg-red-500"
              : item.type === "warning"
              ? "bg-yellow-400 text-black"
              : "bg-green-500"
          }`}
        >
          {item.message}
        </div>
      ))}
    </div>
  );
}