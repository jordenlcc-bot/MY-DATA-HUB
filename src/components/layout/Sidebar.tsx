import Link from "next/link"

export function Sidebar() {
  return (
    <aside className="w-full lg:w-1/4 xl:w-1/5 flex flex-col gap-8">
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-sm text-slate-500 uppercase tracking-widest">My Datasets</h3>
          <button className="flex items-center gap-1 text-[11px] font-bold text-[#19e65e] bg-[#19e65e]/10 px-2 py-1 rounded-[12px] hover:bg-[#19e65e]/20 transition-all">
            <span className="material-symbols-outlined text-[14px]">add</span> NEW
          </button>
        </div>
        <div className="space-y-1">
          <Link href="#" className="flex items-center gap-3 p-2 rounded-[12px] hover:bg-white/50 dark:hover:bg-white/5 transition-all group">
            <span className="material-symbols-outlined text-slate-400 group-hover:text-[#19e65e]">inventory_2</span>
            <span className="text-sm font-medium truncate">Shopee_Sales_Sync_July.csv</span>
          </Link>
          <Link href="#" className="flex items-center gap-3 p-2 rounded-[12px] hover:bg-white/50 dark:hover:bg-white/5 transition-all group">
            <span className="material-symbols-outlined text-slate-400 group-hover:text-[#19e65e]">description</span>
            <span className="text-sm font-medium truncate">SSM_Registration_Docs.pdf</span>
          </Link>
          <Link href="#" className="flex items-center gap-3 p-2 rounded-[12px] hover:bg-white/50 dark:hover:bg-white/5 transition-all group">
            <span className="material-symbols-outlined text-slate-400 group-hover:text-[#19e65e]">analytics</span>
            <span className="text-sm font-medium truncate">LHDN_Tax_Reporting_Q3</span>
          </Link>
          <Link href="#" className="flex items-center gap-3 p-2 rounded-[12px] hover:bg-white/50 dark:hover:bg-white/5 transition-all group">
            <span className="material-symbols-outlined text-slate-400 group-hover:text-[#19e65e]">groups</span>
            <span className="text-sm font-medium truncate">Loyalty_Member_Leads.xlsx</span>
          </Link>
        </div>
      </div>
      <div>
        <h3 className="font-bold text-sm text-slate-500 uppercase tracking-widest mb-4">Live Activity</h3>
        <div className="space-y-4 relative border-l-2 border-slate-200 dark:border-slate-800 ml-2 pl-6">
          <div className="relative">
            <div className="absolute -left-[31px] top-0 h-4 w-4 rounded-full border-4 border-white dark:border-[#0d1117] bg-[#19e65e] shadow-sm shadow-[#19e65e]/50"></div>
            <p className="text-xs font-bold">Data Cleansing</p>
            <p className="text-[11px] text-slate-400 mt-1">Processed 4,200 leads for <span className="text-[#19e65e] font-medium">KL Bakery</span></p>
            <span className="text-[10px] text-slate-500">2m ago</span>
          </div>
          <div className="relative">
            <div className="absolute -left-[31px] top-0 h-4 w-4 rounded-full border-4 border-white dark:border-[#0d1117] bg-blue-500 shadow-sm shadow-blue-500/50"></div>
            <p className="text-xs font-bold">WhatsApp Gen</p>
            <p className="text-[11px] text-slate-400 mt-1">Drafted 150 promos in <span className="text-blue-500 font-medium">BM & English</span></p>
            <span className="text-[10px] text-slate-500">45m ago</span>
          </div>
        </div>
      </div>
    </aside>
  )
}
