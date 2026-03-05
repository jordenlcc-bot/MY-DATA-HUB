export function AIChatPanel() {
  return (
    <aside className="w-96 glass-panel border-l border-slate-800 flex flex-col shrink-0">
      <div className="p-6 border-b border-slate-800 flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-accent-purple/20 flex items-center justify-center">
          <span className="material-symbols-outlined text-accent-purple text-sm">smart_toy</span>
        </div>
        <div>
          <h3 className="font-bold text-sm">AI Copilot</h3>
          <p className="text-[10px] text-primary font-medium animate-pulse">SYSTEM ONLINE</p>
        </div>
      </div>

      <div className="flex-1 p-6 space-y-6 overflow-y-auto">
        <div className="flex flex-col gap-2 max-w-[85%]">
          <div className="bg-slate-800/50 p-4 rounded-xl rounded-tl-none border border-slate-700/50">
            <p className="text-sm text-slate-300">Welcome back. I&apos;ve finished auditing the behavioral logs. There&apos;s a 12% drift detected in user engagement metrics.</p>
          </div>
          <span className="text-[10px] text-slate-500 ml-1">10:42 AM</span>
        </div>

        <div className="flex flex-col gap-2 max-w-[85%] self-end items-end">
          <div className="bg-primary/20 border border-primary/50 p-4 rounded-xl rounded-tr-none">
            <p className="text-sm text-primary font-medium">Can you visualize the outliers for the drift?</p>
          </div>
          <span className="text-[10px] text-slate-500 mr-1">10:44 AM</span>
        </div>

        <div className="flex flex-col gap-2 max-w-[85%]">
          <div className="bg-slate-800/50 p-4 rounded-xl rounded-tl-none border border-slate-700/50">
            <p className="text-sm text-slate-300">Understood. I&apos;m generating a scatter plot with the highlighted anomalies now. Should I also trigger a retraining pipeline?</p>
            <div className="mt-3 p-3 bg-black/40 rounded-lg border border-primary/20">
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-primary text-xs">analytics</span>
                <span className="text-[10px] font-bold text-primary">ANOMALY_REPORT.JSON</span>
              </div>
              <div className="h-1 w-full bg-slate-700 rounded-full overflow-hidden">
                <div className="h-full bg-primary w-full"></div>
              </div>
            </div>
          </div>
          <span className="text-[10px] text-slate-500 ml-1">10:45 AM</span>
        </div>
      </div>

      <div className="p-6 mt-auto border-t border-slate-800/50">
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent-purple rounded-xl opacity-20 blur group-focus-within:opacity-40 transition-opacity"></div>
          <div className="relative flex items-center bg-slate-900 border border-slate-800 rounded-xl overflow-hidden px-4 py-1">
            <input
              className="flex-1 bg-transparent border-none text-sm focus:outline-none focus:ring-0 text-slate-200 py-3"
              placeholder="Ask AI anything..."
              type="text"
            />
            <button className="text-slate-400 hover:text-primary transition-colors">
              <span className="material-symbols-outlined">send</span>
            </button>
          </div>
        </div>
        <div className="mt-4 flex gap-2 justify-center flex-wrap">
          <button className="px-3 py-1.5 rounded-full border border-slate-800 text-[10px] text-slate-400 hover:bg-slate-800 hover:text-white transition-colors">Summarize dataset</button>
          <button className="px-3 py-1.5 rounded-full border border-slate-800 text-[10px] text-slate-400 hover:bg-slate-800 hover:text-white transition-colors">Check pipeline</button>
        </div>
      </div>
    </aside>
  );
}
