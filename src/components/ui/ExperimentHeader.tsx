export function ExperimentHeader() {
  return (
    <header className="h-16 border-b border-slate-800 flex items-center justify-between px-8 bg-background-dark/50 backdrop-blur-sm z-10 sticky top-0">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 text-slate-500 text-sm">
          <span>Project Alpha</span>
          <span className="material-symbols-outlined text-xs">chevron_right</span>
          <span>Experiments</span>
          <span className="material-symbols-outlined text-xs">chevron_right</span>
          <span className="text-primary font-medium">active_run_99</span>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <div className="relative group">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg group-focus-within:text-primary transition-colors">
            search
          </span>
          <input
            className="bg-slate-900 border-none rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary w-64 transition-all text-white placeholder-slate-500"
            placeholder="Search logs..."
            type="text"
          />
        </div>
        <div className="flex items-center gap-3">
          <button className="p-2 rounded-lg bg-slate-900 text-slate-500 hover:text-primary transition-colors">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <button className="p-2 rounded-lg bg-slate-900 text-slate-500 hover:text-primary transition-colors">
            <span className="material-symbols-outlined">terminal</span>
          </button>
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-accent-purple border border-white/20"></div>
        </div>
      </div>
    </header>
  );
}
