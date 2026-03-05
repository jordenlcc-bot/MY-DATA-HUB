interface SystemLogsProps {
  logs: { timestamp: string; level: string; message: string; type?: string }[];
}

export function SystemLogs({ logs }: SystemLogsProps) {
  const getLevelColor = (level: string) => {
    switch (level.toUpperCase()) {
      case 'INFO':
        return 'text-primary';
      case 'WARN':
        return 'text-yellow-500';
      case 'TRACE':
        return 'text-purple-500';
      case 'EVENT':
        return 'text-green-500';
      default:
        return 'text-slate-400';
    }
  };

  return (
    <div className="glass-panel rounded-xl overflow-hidden glow-primary flex flex-col h-[500px]">
      <div className="p-4 border-b border-primary/10 bg-slate-800/30 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-primary">terminal</span>
          <span className="text-sm font-bold uppercase tracking-widest text-primary/80">System Console Logs</span>
        </div>
        <div className="flex gap-4 text-xs font-mono text-slate-500">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-primary"></span> Worker-01
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-accent-purple"></span> Worker-02
          </span>
        </div>
      </div>
      <div className="flex-1 p-6 font-mono text-sm overflow-y-auto bg-black/40">
        <div className="flex flex-col gap-2">
          {logs.map((log, index) => (
            <div key={index} className={`flex gap-4 ${log.type === 'dim' ? 'opacity-60' : ''}`}>
              <span className="text-slate-600">[{log.timestamp}]</span>
              <span className={`font-bold min-w-[50px] ${getLevelColor(log.level)}`}>
                {log.level}
              </span>
              <span className={log.level === 'EVENT' ? 'text-white' : 'text-slate-300'}>
                {log.message}
              </span>
            </div>
          ))}
          <div className="flex gap-4 animate-pulse">
            <span className="text-slate-600">[14:20:25]</span>
            <span className="text-slate-400">_</span>
          </div>
        </div>
      </div>
    </div>
  );
}
