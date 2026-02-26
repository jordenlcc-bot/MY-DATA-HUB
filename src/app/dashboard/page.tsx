import { Card } from "@/components/ui/card"

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-2">Welcome Back, KL Bakery</h2>
          <p className="text-slate-500 flex items-center gap-2 text-sm font-medium">
            <span className="material-symbols-outlined text-[18px]">verified</span>
            SME Premium Plan • Cyberjaya Data Center
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 rounded-[12px] bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-sm hover:shadow-lg transition-all text-slate-900 dark:text-slate-100">
            <span className="material-symbols-outlined text-[18px]">analytics</span>
            Full Reports
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-[12px] bg-[#19e65e] hover:bg-[#15c34f] text-slate-900 font-bold text-sm shadow-lg shadow-[#19e65e]/30 transition-all">
            <span className="material-symbols-outlined text-[18px]">bolt</span>
            Quick Process
          </button>
        </div>
      </div>

      <Card className="p-6 overflow-hidden relative border-none bg-white/70 dark:bg-slate-900/80 backdrop-blur-xl shadow-xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#19e65e]/5 blur-[80px] rounded-full -mr-20 -mt-20"></div>
        <div className="flex items-center justify-between mb-6 relative z-10">
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Activity Heatmap</h3>
            <p className="text-xs text-slate-500">Your SME data processing frequency over the last year</p>
          </div>
          <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-100 dark:bg-slate-800/50 px-3 py-1.5 rounded-full">
            <span>Less</span>
            <div className="flex gap-1">
              <div className="w-[11px] h-[11px] rounded-sm bg-slate-200 dark:bg-slate-800"></div>
              <div className="w-[11px] h-[11px] rounded-sm bg-[#19e65e]/30"></div>
              <div className="w-[11px] h-[11px] rounded-sm bg-[#19e65e]/60"></div>
              <div className="w-[11px] h-[11px] rounded-sm bg-[#19e65e]"></div>
              <div className="w-[11px] h-[11px] rounded-sm bg-emerald-700"></div>
            </div>
            <span>More</span>
          </div>
        </div>
        <div className="overflow-x-auto pb-2 relative z-10">
          <div className="flex gap-2 min-w-[800px]">
            <div className="flex flex-col justify-around text-[10px] text-slate-400 font-bold pr-2 h-[100px]">
              <span>Mon</span><span>Wed</span><span>Fri</span>
            </div>
            <div className="grid grid-flow-col grid-rows-7 gap-[3px]">
              {Array.from({ length: 150 }).map((_, i) => (
                <div
                  key={i}
                  className={`w-[11px] h-[11px] rounded-sm cursor-pointer hover:ring-1 hover:ring-offset-1 hover:ring-[#19e65e] transition-all ${
                    Math.random() > 0.7
                      ? 'bg-[#19e65e]'
                      : Math.random() > 0.4
                        ? 'bg-[#19e65e]/40'
                        : 'bg-slate-200 dark:bg-slate-800'
                  }`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h3 className="font-extrabold text-xl tracking-tight text-slate-900 dark:text-white">AI SME Toolkit</h3>
            <a className="text-xs font-bold text-[#19e65e] hover:underline" href="#">Marketplace →</a>
          </div>
          <div className="space-y-4">
            <div className="p-5 rounded-[12px] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex items-center justify-between hover:scale-[1.02] transition-transform duration-300 shadow-sm group cursor-pointer relative overflow-hidden">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-[12px] bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                  <span className="material-symbols-outlined text-[28px]">chat_spark</span>
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-[#19e65e] transition-colors">Copywriting Gen (BM/CN)</h4>
                  <p className="text-xs text-slate-500">Optimized for Shopee & Facebook</p>
                </div>
              </div>
              <span className="bg-rose-500 text-white text-[10px] font-black px-2 py-0.5 rounded-full animate-pulse">NEW</span>
            </div>
            <div className="p-5 rounded-[12px] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex items-center justify-between hover:scale-[1.02] transition-transform duration-300 shadow-sm group cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-[12px] bg-purple-500/10 flex items-center justify-center text-purple-500 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300">
                  <span className="material-symbols-outlined text-[28px]">query_stats</span>
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-[#19e65e] transition-colors">Competitor Insight</h4>
                  <p className="text-xs text-slate-500">Scrape Grab/Panda trends locally</p>
                </div>
              </div>
              <span className="material-symbols-outlined text-slate-300 group-hover:text-[#19e65e]">chevron_right</span>
            </div>
          </div>
        </div>

        <Card className="flex flex-col overflow-hidden relative border-none shadow-xl bg-white dark:bg-slate-900">
          <div className="p-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-white/5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-[#19e65e] animate-pulse"></div>
              <span className="text-xs font-black uppercase tracking-widest opacity-70 text-slate-500">AI Processor Status</span>
            </div>
            <div className="flex gap-2">
              <button className="p-1 rounded-md hover:bg-slate-200 dark:hover:bg-white/10 text-slate-400 transition-colors">
                <span className="material-symbols-outlined text-[18px]">refresh</span>
              </button>
            </div>
          </div>
          <div className="p-8 flex-1 flex flex-col justify-center items-center gap-4">
            <div className="w-full h-32 rounded-[12px] bg-slate-50 dark:bg-slate-800/50 flex flex-col items-center justify-center border-dashed border-2 border-[#19e65e]/30 relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent w-[200%] translate-x-[-100%] animate-[shimmer_2s_infinite]"></div>
              <span className="text-[#19e65e] font-bold text-sm z-10">Generating AI Report...</span>
              <p className="text-[10px] text-slate-400 mt-1 uppercase tracking-tighter z-10">Syncing with SSM & LHDN databases</p>
            </div>
            <div className="flex gap-3 w-full">
              <button className="flex-1 flex items-center justify-center gap-2 py-2 rounded-[12px] bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-bold hover:bg-slate-200 dark:hover:bg-white/10 transition-all text-slate-700 dark:text-slate-300">
                <span className="material-symbols-outlined text-[16px]">content_copy</span> Copy
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 py-2 rounded-[12px] bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-bold hover:bg-slate-200 dark:hover:bg-white/10 transition-all text-slate-700 dark:text-slate-300">
                <span className="material-symbols-outlined text-[16px]">edit</span> Edit
              </button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
