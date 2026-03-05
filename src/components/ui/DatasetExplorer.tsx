'use client';

import { useEffect, useState } from 'react';

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
  const [datasets, setDatasets] = useState<DatasetProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchDatasets() {
      try {
        const response = await fetch('/api/datasets');
        if (response.ok) {
          const data = await response.json();
          setDatasets(data);
        } else {
          console.error("Failed to fetch datasets");
        }
      } catch (error) {
        console.error("Error fetching datasets:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchDatasets();
  }, []);

  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-medium text-slate-300">Active Datasets</h3>
        <button className="text-sm text-primary hover:underline">View all assets</button>
      </div>
      {loading ? (
        <div className="flex justify-center p-8">
          <div className="w-8 h-8 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
        </div>
      ) : datasets.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {datasets.map((dataset, idx) => (
            <DatasetCard key={idx} {...dataset} />
          ))}
        </div>
      ) : (
        <div className="text-center p-8 text-slate-500 glass-panel rounded-xl">
          No datasets found.
        </div>
      )}
    </section>
  );
}
