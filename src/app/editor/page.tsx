import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"

export default function EditorPage() {
  return (
    <div className="flex h-screen flex-col bg-[#f6f8f6] dark:bg-[#112116] text-slate-900 dark:text-slate-100 overflow-hidden">
      {/* Editor Header */}
      <header className="h-16 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0d1117] flex items-center justify-between px-6 z-50">
        <div className="flex items-center gap-4">
          <div className="bg-[#19e65e] p-1.5 rounded-lg flex items-center justify-center">
            <span className="material-symbols-outlined text-slate-900 font-bold">storefront</span>
          </div>
          <div>
            <h1 className="text-sm font-bold tracking-tight">MY DATA HUB <span className="text-slate-400 font-normal mx-2">/</span> <span className="text-slate-500 font-medium">Page Editor</span></h1>
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 bg-[#19e65e] rounded-full animate-pulse"></span>
              <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Auto-saved</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex bg-slate-100 dark:bg-slate-900 rounded-lg p-1 mr-4">
            <button className="px-3 py-1 text-xs font-bold rounded bg-white dark:bg-slate-800 shadow-sm flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">desktop_windows</span> Desktop
            </button>
            <button className="px-3 py-1 text-xs font-bold text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">smartphone</span> Mobile
            </button>
          </div>
          <Button variant="secondary" size="sm" className="gap-2">
            <span className="material-symbols-outlined text-lg">visibility</span>
            Preview
          </Button>
          <Button variant="primary" size="sm" className="gap-2">
            <span className="material-symbols-outlined text-lg">link</span>
            Publish
          </Button>
        </div>
      </header>

      <main className="flex flex-1 overflow-hidden">
        {/* Canvas */}
        <div className="flex-1 overflow-y-auto p-12 bg-slate-50 dark:bg-slate-900/50 relative">
          <div className="max-w-2xl mx-auto bg-white dark:bg-[#0d1117] shadow-2xl rounded-xl min-h-[1000px] border border-slate-200 dark:border-slate-800 overflow-hidden">
            <div className="h-48 bg-gradient-to-br from-[#19e65e]/10 via-[#19e65e]/5 to-white dark:to-[#0d1117] flex items-center justify-center border-b border-slate-100 dark:border-slate-800 relative group">
              <div className="text-center">
                <span className="material-symbols-outlined text-4xl text-[#19e65e]/40">image</span>
                <p className="text-xs text-slate-400 mt-2">Click to change cover</p>
              </div>
            </div>
            <div className="p-10 space-y-8">
              <div className="relative group outline-dashed outline-2 outline-transparent hover:outline-[#19e65e]/40 rounded-lg -m-2 p-2 transition-all">
                <h2 className="text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight" contentEditable>My Village Shop</h2>
              </div>
              <div className="relative group outline-dashed outline-2 outline-transparent hover:outline-[#19e65e]/40 rounded-lg -m-2 p-2 transition-all">
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed" contentEditable>
                  Welcome to our digital storefront. We use AI to bring you the best local products.
                </p>
              </div>
              <div className="relative group outline-dashed outline-2 outline-transparent hover:outline-[#19e65e]/40 rounded-lg -m-2 p-2 transition-all">
                <div className="bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 overflow-hidden shadow-sm">
                  <div className="p-4 border-b border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-[#0d1117]/50 flex items-center justify-between">
                    <h3 className="font-bold text-sm text-slate-700 dark:text-slate-300 flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#19e65e] text-lg">database</span>
                      Q3 Business Report
                    </h3>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                      <thead className="text-xs text-slate-400 uppercase bg-slate-100/50 dark:bg-slate-800/50">
                        <tr>
                          <th className="px-4 py-3 font-semibold">Item</th>
                          <th className="px-4 py-3 font-semibold">Category</th>
                          <th className="px-4 py-3 font-semibold text-right">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                        <tr>
                          <td className="px-4 py-3 font-medium">Data Cleaning</td>
                          <td className="px-4 py-3"><span className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300 rounded text-[10px] font-bold">Service</span></td>
                          <td className="px-4 py-3 text-right text-[#19e65e] font-bold">Active</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="w-80 border-l border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0d1117] overflow-y-auto">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-slate-900 dark:text-slate-100">Components</h3>
            </div>
            <div className="space-y-6">
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Basic Blocks</p>
                <div className="grid grid-cols-1 gap-3">
                  <div className="group cursor-grab p-3 rounded-lg border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 hover:border-[#19e65e]/50 hover:shadow-sm transition-all flex items-center gap-3">
                    <div className="size-10 rounded-lg bg-white dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 group-hover:text-[#19e65e] transition-colors">
                      <span className="material-symbols-outlined">title</span>
                    </div>
                    <div>
                      <p className="text-sm font-bold">Heading</p>
                      <p className="text-[10px] text-slate-400">Title & Subtitle</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </main>
    </div>
  )
}
