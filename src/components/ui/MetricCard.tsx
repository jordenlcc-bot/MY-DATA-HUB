interface MetricCardProps {
  label: string;
  value: string;
  subtext: string;
  icon: string;
  color: "primary" | "purple" | "yellow";
}

export function MetricCard({ label, value, subtext, icon, color }: MetricCardProps) {
  const colorMap = {
    primary: {
      border: "border-l-primary",
      text: "text-primary",
      bg: "bg-primary",
      iconColor: "text-green-500", // using green since primary is neon green anyway
      shadow: "shadow-[0_0_8px_#19e65e]",
    },
    purple: {
      border: "border-l-accent-purple",
      text: "text-accent-purple",
      bg: "bg-accent-purple",
      iconColor: "text-accent-purple",
      shadow: "shadow-[0_0_8px_#bc13fe]",
    },
    yellow: {
      border: "border-l-yellow-500",
      text: "text-yellow-500",
      bg: "bg-yellow-500",
      iconColor: "text-yellow-500",
      shadow: "shadow-[0_0_8px_#eab308]",
    },
  };

  const selected = colorMap[color];

  return (
    <div className={`glass-panel p-6 rounded-xl border-l-4 ${selected.border}`}>
      <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">{label}</p>
      <p className="text-3xl font-bold">{value}</p>

      {color === "purple" ? (
        <div className="mt-4 w-full bg-slate-800/50 h-1.5 rounded-full overflow-hidden">
          <div className={`${selected.bg} h-full w-[85%] rounded-full ${selected.shadow}`}></div>
        </div>
      ) : (
        <div className={`mt-4 flex items-center gap-2 ${selected.iconColor} text-sm`}>
          <span className="material-symbols-outlined text-sm">{icon}</span>
          <span>{subtext}</span>
        </div>
      )}
    </div>
  );
}
