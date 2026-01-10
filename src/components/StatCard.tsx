interface StatCardProps {
  value: string;
  label: string;
  sublabel?: string;
}

export default function StatCard({ value, label, sublabel }: StatCardProps) {
  return (
    <div className="stat-card p-5 text-center">
      <div className="text-3xl md:text-4xl font-bold mb-1">{value}</div>
      <div className="text-sm font-medium opacity-90">{label}</div>
      {sublabel && <div className="text-xs opacity-75 mt-1">{sublabel}</div>}
    </div>
  );
}
