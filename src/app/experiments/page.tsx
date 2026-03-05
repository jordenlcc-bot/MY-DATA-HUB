import { Sidebar } from "@/components/ui/Sidebar";
import { ExperimentHeader } from "@/components/ui/ExperimentHeader";
import { SystemLogs } from "@/components/ui/SystemLogs";
import { MetricCard } from "@/components/ui/MetricCard";
import { VectorSearchPanel } from "@/components/ui/VectorSearchPanel";

export default function ExperimentsPage() {
  const logs = [
    { timestamp: "14:20:01", level: "INFO", message: "Initializing CUDA kernel handlers for epoch 42...", type: "dim" },
    { timestamp: "14:20:03", level: "INFO", message: "Loading batch 2048/10000 from high-speed buffer.", type: "dim" },
    { timestamp: "14:20:05", level: "WARN", message: "Memory overhead exceeding 85% on GPU-0. Throttling..." },
    { timestamp: "14:20:10", level: "INFO", message: "Step 42100: loss=0.0421, accuracy=0.9892, val_loss=0.0611" },
    { timestamp: "14:20:12", level: "TRACE", message: "Backprop trace: head_projection_4 (tensor:0x7f83a) updated." },
    { timestamp: "14:20:15", level: "EVENT", message: "Checkpoint 'model_v2_42.pt' saved to S3 bucket." },
    { timestamp: "14:20:20", level: "INFO", message: "Starting validation pass on hidden test set..." },
  ];

  return (
    <div className="flex h-screen w-full overflow-hidden bg-background-dark">
      {/* Sidebar */}
      <Sidebar activeHref="/experiments" />

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden bg-background-dark relative">
        <ExperimentHeader />

        <div className="flex-1 overflow-y-auto p-8 flex flex-col gap-8">

          {/* Top Info Bar */}
          <div className="flex justify-between items-end">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-3">
                <h2 className="text-3xl font-bold tracking-tight font-display">Experiment active_run_99</h2>
                <span className="px-2 py-1 rounded bg-green-500/10 text-green-500 text-[10px] font-bold uppercase tracking-wider border border-green-500/20 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                  Live Streaming
                </span>
              </div>
              <p className="text-slate-400">Deep Neural Network training - Epoch 42/100</p>
            </div>
            <div className="flex gap-3">
              <button className="px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 text-sm font-semibold flex items-center gap-2 hover:bg-slate-700 transition-colors">
                <span className="material-symbols-outlined text-lg">download</span>
                Export JSON
              </button>
              <button className="px-4 py-2 rounded-lg bg-primary text-black text-sm font-semibold flex items-center gap-2 shadow-lg shadow-primary/20 hover:bg-primary/90 transition-colors">
                <span className="material-symbols-outlined text-lg">stop_circle</span>
                Terminate Run
              </button>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-6">

            {/* Left Column: Logs & Metrics */}
            <div className="col-span-12 lg:col-span-8 flex flex-col gap-6">
              <SystemLogs logs={logs} />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <MetricCard
                  label="Accuracy"
                  value="98.92%"
                  subtext="+0.2% from prev. epoch"
                  icon="trending_up"
                  color="primary"
                />
                <MetricCard
                  label="GPU Memory"
                  value="14.2 GB"
                  subtext=""
                  icon=""
                  color="purple"
                />
                <MetricCard
                  label="Latency"
                  value="42ms"
                  subtext="P99 Spike detected"
                  icon="bolt"
                  color="yellow"
                />
              </div>
            </div>

            {/* Right Column: Vector Search Panel */}
            <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
              <VectorSearchPanel />
            </div>

          </div>

          {/* Footer stats */}
          <div className="flex items-center justify-between py-6 text-slate-500 text-xs border-t border-slate-800 mt-auto">
            <div className="flex gap-6">
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">schedule</span> Last updated 2s ago
              </span>
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">storage</span> Storage: 1.2 TB / 5 TB
              </span>
            </div>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary transition-colors">Documentation</a>
              <a href="#" className="hover:text-primary transition-colors">API Keys</a>
              <a href="#" className="hover:text-primary transition-colors">Support</a>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
