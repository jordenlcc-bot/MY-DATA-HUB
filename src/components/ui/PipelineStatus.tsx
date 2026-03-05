export function PipelineStatus() {
  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-medium text-slate-300">Data Pipeline Status</h3>
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary glow-primary"></span>
            <span className="text-xs text-slate-400">Processing</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-slate-600"></span>
            <span className="text-xs text-slate-400">Queued</span>
          </div>
        </div>
      </div>

      <div className="glass-panel p-8 rounded-2xl border border-slate-800 h-[300px] flex items-center justify-between relative overflow-hidden">
        {/* Abstract Nodes and Lines */}
        <div className="flex items-center w-full relative z-10 px-10">

          {/* Node 1 */}
          <div className="relative group">
            <div className="w-16 h-16 rounded-full glass-panel border-primary border-2 flex items-center justify-center glow-primary">
              <span className="material-symbols-outlined text-primary">cloud_download</span>
            </div>
            <p className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-bold text-primary whitespace-nowrap">
              INGESTION
            </p>
          </div>

          {/* Connecting Line 1 */}
          <div className="flex-1 pipeline-line mx-4 relative">
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-2 h-2 rounded-full bg-white glow-primary"></div>
          </div>

          {/* Node 2 */}
          <div className="relative group">
            <div className="w-20 h-20 rounded-full glass-panel border-accent-purple border-2 flex items-center justify-center glow-purple">
              <span className="material-symbols-outlined text-accent-purple text-3xl">auto_fix_high</span>
            </div>
            <p className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-bold text-accent-purple whitespace-nowrap">
              NORMALIZATION
            </p>
          </div>

          {/* Connecting Line 2 */}
          <div className="flex-1 pipeline-line mx-4 opacity-50"></div>

          {/* Node 3 */}
          <div className="relative group">
            <div className="w-16 h-16 rounded-full glass-panel border-slate-600 border-2 flex items-center justify-center">
              <span className="material-symbols-outlined text-slate-500">model_training</span>
            </div>
            <p className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-bold text-slate-500 whitespace-nowrap">
              TRAINING
            </p>
          </div>

        </div>

        {/* Decorative background grid */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)', backgroundSize: '24px 24px' }}
        />
      </div>
    </section>
  );
}
