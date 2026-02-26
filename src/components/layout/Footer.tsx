import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white pt-16 pb-8 dark:border-slate-800 dark:bg-[#0d1117]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 mb-12">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-[#19e65e] text-slate-900">
                <span className="material-symbols-outlined text-sm font-bold">grid_view</span>
              </div>
              <span className="text-lg font-extrabold tracking-tight text-slate-900 dark:text-white">MY DATA HUB</span>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Empowering Malaysian SMEs with open-source AI tools and localized data sets.
            </p>
          </div>
          <div>
            <h5 className="text-sm font-bold text-slate-900 dark:text-white mb-6 uppercase tracking-wider">Resources</h5>
            <ul className="space-y-4">
              <li><Link className="text-sm text-slate-500 hover:text-[#19e65e] dark:text-slate-400" href="#">Documentation</Link></li>
              <li><Link className="text-sm text-slate-500 hover:text-[#19e65e] dark:text-slate-400" href="#">API Reference</Link></li>
              <li><Link className="text-sm text-slate-500 hover:text-[#19e65e] dark:text-slate-400" href="#">Community Forum</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="text-sm font-bold text-slate-900 dark:text-white mb-6 uppercase tracking-wider">Marketplace</h5>
            <ul className="space-y-4">
              <li><Link className="text-sm text-slate-500 hover:text-[#19e65e] dark:text-slate-400" href="#">Browse Tools</Link></li>
              <li><Link className="text-sm text-slate-500 hover:text-[#19e65e] dark:text-slate-400" href="#">Submit a Tool</Link></li>
              <li><Link className="text-sm text-slate-500 hover:text-[#19e65e] dark:text-slate-400" href="#">Request Features</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="text-sm font-bold text-slate-900 dark:text-white mb-6 uppercase tracking-wider">Company</h5>
            <ul className="space-y-4">
              <li><Link className="text-sm text-slate-500 hover:text-[#19e65e] dark:text-slate-400" href="#">About Us</Link></li>
              <li><Link className="text-sm text-slate-500 hover:text-[#19e65e] dark:text-slate-400" href="#">Blog</Link></li>
              <li><Link className="text-sm text-slate-500 hover:text-[#19e65e] dark:text-slate-400" href="#">Careers</Link></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-400 dark:text-slate-500">
            © 2024 MY DATA HUB. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link className="text-xs text-slate-400 hover:text-slate-900 dark:text-slate-500" href="#">Privacy Policy</Link>
            <Link className="text-xs text-slate-400 hover:text-slate-900 dark:text-slate-500" href="#">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
