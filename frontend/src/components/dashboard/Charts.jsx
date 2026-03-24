import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Tooltip,
} from "recharts";

export default function Charts({ data }) {
  // 1. THE GUARD: If data isn't here yet, show nothing (or a spinner)
  // This prevents the "Cannot read properties of undefined" crash entirely.
  if (!data) {
    return <div className="text-cyan-400 p-4">Loading repository charts...</div>;
  }

  // 2. Safe mapping for commits
  const commits = data.activity?.commits_per_week?.map((v, i) => ({
    week: `Week ${i + 1}`,
    commits: v,
  })) || [];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Line Chart */}
      <div className="bg-gray-900 p-2 rounded-lg">
        <h3 className="text-xs text-gray-400 mb-2">Weekly Activity</h3>
        <LineChart width={300} height={200} data={commits}>
          <Line type="monotone" dataKey="commits" stroke="#00f5ff" dot={false} />
          <Tooltip contentStyle={{ backgroundColor: '#111', border: 'none' }} />
        </LineChart>
      </div>

      {/* Bar Chart - Added optional chaining */}
      <div className="bg-gray-900 p-2 rounded-lg">
        <h3 className="text-xs text-gray-400 mb-2">Contributors</h3>
        <BarChart width={300} height={200} data={data.contributors || []}>
          <Bar dataKey="commits" fill="#00f5ff" />
          <Tooltip contentStyle={{ backgroundColor: '#111', border: 'none' }} />
        </BarChart>
      </div>

      {/* Pie Chart - Added optional chaining */}
      <div className="bg-gray-900 p-2 rounded-lg">
        <h3 className="text-xs text-gray-400 mb-2">Languages</h3>
        <PieChart width={300} height={200}>
          <Pie
            data={data.languages || []}
            dataKey="percentage"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={60}
            fill="#00f5ff"
          />
          <Tooltip contentStyle={{ backgroundColor: '#111', border: 'none' }} />
        </PieChart>
      </div>
    </div>
  );
}