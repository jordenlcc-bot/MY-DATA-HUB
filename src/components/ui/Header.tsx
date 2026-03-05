export function Header({ title, version = "v4.2.0-Alpha" }: { title: string; version?: string }) {
  return (
    <header className="sticky top-0 z-10 flex items-center justify-between px-8 py-4 glass-panel border-b border-slate-800">
      <div className="flex items-center gap-4">
        <h2 className="text-xl font-semibold font-display">{title}</h2>
        <span className="px-2 py-1 rounded bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest">
          {version}
        </span>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">
            search
          </span>
          <input
            className="bg-slate-900 border border-slate-800 rounded-xl pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary w-64 text-white placeholder-slate-500"
            placeholder="Search datasets..."
            type="text"
          />
        </div>
        <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-800 hover:bg-slate-700 transition-colors">
          <span className="material-symbols-outlined text-slate-300">notifications</span>
        </button>
        <div className="w-10 h-10 rounded-xl bg-slate-800 overflow-hidden border border-slate-700">
          {/* Using a div gradient as placeholder for avatar instead of external link for reliability */}
          <div className="w-full h-full bg-gradient-to-tr from-primary to-accent-purple" />
        </div>
      </div>
    </header>
  );
}
