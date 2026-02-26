import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/50 dark:border-slate-800/50 bg-white/80 dark:bg-[#0d1117]/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        <div className="flex items-center gap-6 lg:gap-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="bg-[#19e65e]/10 dark:bg-[#19e65e]/20 p-1.5 rounded-lg border border-[#19e65e]/20">
              <span className="material-symbols-outlined text-[#19e65e] font-bold">grid_view</span>
            </div>
            <h1 className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white font-display">
              MY DATA HUB
            </h1>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-semibold text-[#19e65e]">
              Home
            </Link>
            <Link href="/marketplace" className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-[#19e65e] transition-colors">
              Marketplace
            </Link>
            <Link href="#" className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-[#19e65e] transition-colors">
              Community
            </Link>
            <Link href="#" className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-[#19e65e] transition-colors">
              About
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center bg-white dark:bg-[#0d1117] rounded-md border border-slate-300 dark:border-slate-700 px-3 py-1.5 w-64 shadow-sm">
            <span className="material-symbols-outlined text-slate-400 text-lg mr-2">search</span>
            <input
              className="bg-transparent border-none p-0 text-sm w-full placeholder-slate-400 focus:outline-none text-slate-900 dark:text-slate-100"
              placeholder="Search..."
              type="text"
            />
            <div className="bg-slate-100 dark:bg-slate-800 rounded px-1.5 py-0.5 text-[10px] text-slate-500 dark:text-slate-400 font-mono border border-slate-200 dark:border-slate-700">
              /
            </div>
          </div>
          <div className="flex items-center border border-slate-300 dark:border-slate-700 rounded-md overflow-hidden h-8 shadow-sm">
            <button className="px-2 h-full text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
              EN
            </button>
            <button className="px-2 h-full text-xs font-medium bg-white dark:bg-[#0d1117] text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 border-l border-r border-slate-200 dark:border-slate-700 transition-colors">
              BM
            </button>
            <button className="px-2 h-full text-xs font-medium bg-white dark:bg-[#0d1117] text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
              CN
            </button>
          </div>
          <Link href="/dashboard">
             <Button variant="primary" size="sm">Dashboard</Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
