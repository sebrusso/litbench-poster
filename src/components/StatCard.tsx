interface StatCardProps {
  value: string;
  label: string;
  sublabel?: string;
}

export default function StatCard({ value, label, sublabel }: StatCardProps) {
  return (
    <div className="bg-[#1e3a5f] text-white p-4 text-center">
      <div className="text-2xl font-bold font-sans">{value}</div>
      <div className="text-xs font-sans uppercase tracking-wide opacity-90 mt-1">{label}</div>
      {sublabel && <div className="text-xs opacity-75 mt-0.5">{sublabel}</div>}
    </div>
  );
}
