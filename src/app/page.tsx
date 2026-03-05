import { Sidebar } from "@/components/ui/Sidebar";
import { Header } from "@/components/ui/Header";
import { DatasetExplorer } from "@/components/ui/DatasetExplorer";
import { PipelineStatus } from "@/components/ui/PipelineStatus";
import { AIChatPanel } from "@/components/ui/AIChatPanel";

export default function Home() {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-background-dark">
      {/* Sidebar */}
      <Sidebar activeHref="/" />

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto relative bg-background-dark">
        <Header title="Dataset Explorer" />

        <div className="p-8 space-y-8">
          <DatasetExplorer />
          <PipelineStatus />
        </div>
      </main>

      {/* Right Chat Panel */}
      <AIChatPanel />
    </div>
  );
}
