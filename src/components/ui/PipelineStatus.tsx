'use client';

import React, { useEffect, useState } from 'react';

interface PipelineNode {
  id: string;
  name: string;
  status: 'completed' | 'processing' | 'queued' | 'error';
  icon: string;
}

export function PipelineStatus() {
  const [nodes, setNodes] = useState<PipelineNode[]>([
    { id: '1', name: 'INGESTION', status: 'completed', icon: 'cloud_download' },
    { id: '2', name: 'NORMALIZATION', status: 'processing', icon: 'auto_fix_high' },
    { id: '3', name: 'TRAINING', status: 'queued', icon: 'model_training' },
  ]);

  useEffect(() => {
    async function fetchStatus() {
      try {
        const response = await fetch('/api/pipeline/status');
        if (response.ok) {
          const data = await response.json();
          // Assuming the API returns an array of nodes or an object with a nodes array
          const nodesData = data?.nodes ?? data;
          if (Array.isArray(nodesData)) {
            setNodes(nodesData);
          }
        }
      } catch (error) {
        console.error("Error fetching pipeline status:", error);
      }
    }

    fetchStatus();
    // Optional: Set up polling if you want real-time updates without websockets
    const interval = setInterval(fetchStatus, 5000);
    return () => clearInterval(interval);
  }, []);

  const getNodeStyle = (status: PipelineNode['status']) => {
    switch (status) {
      case 'completed':
        return {
          border: 'border-primary',
          text: 'text-primary',
          glow: 'glow-primary',
          lineOpacity: 'opacity-100',
        };
      case 'processing':
        return {
          border: 'border-accent-purple',
          text: 'text-accent-purple',
          glow: 'glow-purple',
          lineOpacity: 'opacity-50',
        };
      case 'error':
        return {
          border: 'border-red-500',
          text: 'text-red-500',
          glow: 'shadow-[0_0_15px_rgba(239,68,68,0.3)]',
          lineOpacity: 'opacity-50',
        };
      case 'queued':
      default:
        return {
          border: 'border-slate-600',
          text: 'text-slate-500',
          glow: '',
          lineOpacity: 'opacity-20',
        };
    }
  };

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
        {/* Dynamic Abstract Nodes and Lines */}
        <div className="flex items-center w-full relative z-10 px-10">
          {nodes.map((node, index) => {
            const style = getNodeStyle(node.status);
            const isLast = index === nodes.length - 1;

            return (
              <React.Fragment key={node.id}>
                <div className="relative group flex-shrink-0">
                  <div
                    className={`rounded-full glass-panel border-2 flex items-center justify-center transition-all duration-500 ${style.border} ${style.glow} ${node.status === 'processing' ? 'w-20 h-20' : 'w-16 h-16'}`}
                  >
                    <span className={`material-symbols-outlined ${style.text} ${node.status === 'processing' ? 'text-3xl' : ''}`}>
                      {node.icon}
                    </span>
                  </div>
                  <p className={`absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-bold whitespace-nowrap ${style.text}`}>
                    {node.name}
                  </p>
                </div>

                {!isLast && (
                  <div className={`flex-1 pipeline-line mx-4 relative transition-opacity duration-500 ${style.lineOpacity}`}>
                    {node.status === 'completed' && nodes[index + 1]?.status === 'processing' && (
                      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-2 h-2 rounded-full bg-white glow-primary animate-pulse"></div>
                    )}
                  </div>
                )}
              </React.Fragment>
            );
          })}
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
