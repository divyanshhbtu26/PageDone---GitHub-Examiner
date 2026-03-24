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
  const commits = data.activity.commits_per_week.map((v, i) => ({
    week: i,
    commits: v,
  }));

  return (
    <div className="grid grid-cols-3 gap-4">
      <LineChart width={300} height={200} data={commits}>
        <Line type="monotone" dataKey="commits" stroke="#00f5ff" />
        <Tooltip />
      </LineChart>

      <BarChart width={300} height={200} data={data.contributors}>
        <Bar dataKey="commits" fill="#00f5ff" />
        <Tooltip />
      </BarChart>

      <PieChart width={300} height={200}>
        <Pie
          data={data.languages}
          dataKey="percentage"
          nameKey="name"
          fill="#00f5ff"
        />
        <Tooltip />
      </PieChart>
    </div>
  );
}