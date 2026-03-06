'use client';

import { useState } from 'react';

interface Score {
  id: string;
  score: number;
  percentage: string;
}

export function VectorSearchPanel() {
  const [query, setQuery] = useState('');
  const [scores, setScores] = useState<Score[]>([
    { id: '#id_0822_a', score: 0.9982, percentage: '99.8%' },
    { id: '#id_9211_b', score: 0.8741, percentage: '87.4%' },
    { id: '#id_1033_z', score: 0.8210, percentage: '82.1%' },
    { id: '#id_4402_q', score: 0.6542, percentage: '65.4%' },
    { id: '#id_8819_f', score: 0.5122, percentage: '51.2%' },
  ]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    try {
      // Assuming a GET request with a query parameter, adjust if it's POST
      const response = await fetch(`/api/vector/search?q=${encodeURIComponent(query)}`);
      if (response.ok) {
        const data = await response.json();
        const resultsData = data?.results ?? data;
        if (Array.isArray(resultsData)) {
          setScores(resultsData.map((item: { id?: string; score: number }) => ({
            id: item.id || `#id_${Math.floor(Math.random() * 10000)}`,
            score: item.score,
            percentage: `${(item.score * 100).toFixed(1)}%`
          })));
        }
      }
    } catch (error) {
      console.error("Error performing vector search:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="glass-panel rounded-xl overflow-hidden glow-primary flex flex-col h-[744px]">
      <div className="p-6 border-b border-primary/10 bg-slate-800/30">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">blur_on</span>
            Vector Search
          </h3>
          <button className="text-xs text-primary font-bold hover:underline">RE-INDEX</button>
        </div>
        <form className="relative" onSubmit={handleSearch}>
          <input
            className="w-full bg-background-dark/50 border border-primary/20 rounded-lg pl-4 pr-10 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-primary text-white"
            placeholder="Search embeddings..."
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            type="submit"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-primary transition-colors disabled:opacity-50"
            disabled={loading}
          >
            <span className="material-symbols-outlined text-lg">
              {loading ? 'hourglass_empty' : 'search'}
            </span>
          </button>
        </form>
      </div>

      <div className="relative flex-1 bg-slate-900/40 p-1 flex flex-col">
        {/* Abstract Chart / Grid */}
        <div className="relative w-full h-64 bg-slate-800/20 rounded-lg overflow-hidden flex items-center justify-center border border-white/5">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, #19e65e 1px, transparent 0)',
              backgroundSize: '20px 20px',
            }}
          ></div>
          <div className="relative w-full h-full p-4 overflow-hidden">
            <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-primary rounded-full shadow-[0_0_12px_#19e65e] animate-pulse"></div>
            <div className="absolute top-1/2 left-2/3 w-1.5 h-1.5 bg-accent-purple rounded-full shadow-[0_0_10px_#bc13fe]"></div>
            <div className="absolute top-2/3 left-1/4 w-1.5 h-1.5 bg-primary rounded-full opacity-50"></div>
            <div className="absolute top-1/3 left-3/4 w-1 h-1 bg-white rounded-full opacity-30"></div>
            <div className="absolute top-10 right-10 w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_#19e65e]"></div>
            <div className="absolute bottom-10 right-20 w-1.5 h-1.5 bg-accent-purple rounded-full opacity-60"></div>

            <svg className="w-full h-full opacity-20 pointer-events-none">
              <line stroke="#19e65e" strokeWidth="0.5" x1="33%" x2="66%" y1="25%" y2="50%"></line>
              <line stroke="#19e65e" strokeWidth="0.5" x1="66%" x2="25%" y1="50%" y2="66%"></line>
              <line stroke="#19e65e" strokeWidth="0.5" x1="25%" x2="33%" y1="66%" y2="25%"></line>
            </svg>
            <div className="absolute bottom-2 right-2 text-[8px] uppercase tracking-tighter text-slate-500">
              t-SNE Projection: 3D Visualization
            </div>
          </div>
        </div>

        <div className="flex-1 p-6 overflow-y-auto">
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-xs font-bold uppercase text-slate-500 tracking-widest">
              Similarity Scores (k={scores.length})
            </h4>
            {loading && <div className="w-3 h-3 rounded-full border-2 border-primary border-t-transparent animate-spin"></div>}
          </div>
          <div className="flex flex-col gap-4">
            {scores.length === 0 && !loading && (
               <p className="text-xs text-slate-500 text-center py-4">No results found.</p>
            )}
            {scores.map((score, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="flex justify-between items-center mb-1">
                  <span className={`text-xs font-mono ${index === 0 ? 'text-primary' : 'text-slate-400'}`}>
                    {score.id}
                  </span>
                  <span className="text-xs font-bold">{score.score}</span>
                </div>
                <div className="w-full h-1 bg-slate-800/50 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all group-hover:bg-primary/80"
                    style={{
                        width: score.percentage,
                        backgroundColor: index === 0 ? '#19e65e' : (
                            index === 1 || index === 2 ? 'rgba(25, 230, 94, 0.6)' :
                            index === 3 ? 'rgba(25, 230, 94, 0.3)' : 'rgba(25, 230, 94, 0.2)'
                        )
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-4 bg-primary/5 border-t border-primary/10 mt-auto">
          <button className="w-full py-2 bg-primary/20 hover:bg-primary/30 text-primary text-xs font-bold rounded-lg transition-all">
            RE-CLUSTER DATASET
          </button>
        </div>
      </div>
    </div>
  );
}
