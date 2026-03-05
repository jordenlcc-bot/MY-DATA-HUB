interface DatasetProps {
  title: string;
  description: string;
  type: string;
  size: string;
  color: "primary" | "purple" | "blue";
}

export function DatasetCard({ title, description, type, size, color }: DatasetProps) {
  const colorMap = {
    primary: {
      gradient: "from-primary/20 to-accent-purple/20",
      text: "group-hover:text-primary",
      border: "hover:border-primary/30",
    },
    purple: {
      gradient: "from-accent-purple/20 to-primary/20",
      text: "group-hover:text-accent-purple",
      border: "hover:border-accent-purple/30",
    },
    blue: {
      gradient: "from-blue-900/30 to-slate-900",
      text: "group-hover:text-blue-500",
      border: "hover:border-blue-500/30",
    },
  };

  const selectedColor = colorMap[color];

  return (
    <div className={`glass-panel p-5 rounded-xl border border-slate-800 group transition-all ${selectedColor.border}`}>
      <div className="h-32 rounded-lg mb-4 relative overflow-hidden bg-slate-900">
        <div className={`absolute inset-0 bg-gradient-to-br ${selectedColor.gradient}`}></div>
        <div className="absolute bottom-3 left-3 flex gap-2">
          <span className="px-2 py-0.5 rounded bg-black/50 backdrop-blur text-[10px] text-white">
            {type}
          </span>
          <span className="px-2 py-0.5 rounded bg-black/50 backdrop-blur text-[10px] text-white">
            {size}
          </span>
        </div>
      </div>
      <h4 className={`font-bold text-slate-100 mb-1 transition-colors ${selectedColor.text}`}>
        {title}
      </h4>
      <p className="text-sm text-slate-500 line-clamp-2">{description}</p>
    </div>
  );
}

export function DatasetExplorer() {
  const datasets = [
    {
      title: "Neural Network Weights",
      description: "Pre-trained weights for the latest transformer architecture focusing on NLP tasks.",
      type: "JSON",
      size: "4.2GB",
      color: "primary" as const,
    },
    {
      title: "Behavioral Logs",
      description: "Aggregated user interaction data from the last quarter for synthetic training.",
      type: "CSV",
      size: "12.5GB",
      color: "purple" as const,
    },
    {
      title: "Validation Metadata",
      description: "Gold standard validation set for final model benchmarking and A/B testing.",
      type: "PARQUET",
      size: "820MB",
      color: "blue" as const,
    },
  ];

  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-medium text-slate-300">Active Datasets</h3>
        <button className="text-sm text-primary hover:underline">View all assets</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {datasets.map((dataset, idx) => (
          <DatasetCard key={idx} {...dataset} />
        ))}
      </div>
    </section>
  );
}
