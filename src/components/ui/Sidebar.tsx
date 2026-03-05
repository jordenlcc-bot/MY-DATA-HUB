import Link from 'next/link';
import { cn } from '@/lib/utils';

interface SidebarProps {
  className?: string;
  activeHref?: string;
}

export function Sidebar({ className, activeHref = '/' }: SidebarProps) {
  const navItems = [
    { href: '/', icon: 'home', label: 'Home' },
    { href: '/datasets', icon: 'database', label: 'Datasets' },
    { href: '/pipelines', icon: 'account_tree', label: 'Pipelines' },
    { href: '/experiments', icon: 'science', label: 'Experiments' },
    { href: '/search', icon: 'explore', label: 'Vector Search' },
    { divider: true },
    { href: '/settings', icon: 'settings', label: 'Settings' },
  ];

  return (
    <aside className={cn("w-64 glass-panel border-r border-slate-800 flex flex-col shrink-0 h-full", className)}>
      <div className="p-6 flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent-purple flex items-center justify-center">
          <span className="material-symbols-outlined text-black font-bold">hub</span>
        </div>
        <h1 className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 font-display">
          AI Data Hub
        </h1>
      </div>

      <nav className="flex-1 px-4 space-y-2 mt-4 overflow-y-auto">
        {navItems.map((item, index) => {
          if (item.divider) {
            return <div key={index} className="my-4 border-t border-slate-800"></div>;
          }

          const isActive = activeHref === item.href;

          return (
            <Link
              key={item.href}
              href={item.href!}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-xl transition-colors",
                isActive
                  ? "bg-primary/20 text-primary border border-primary/20"
                  : "hover:bg-white/5 text-slate-300"
              )}
            >
              <span className={cn("material-symbols-outlined", !isActive && "text-slate-400")}>
                {item.icon}
              </span>
              <span className="font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-6 mt-auto">
        <div className="glass-panel rounded-xl p-4 border border-slate-800">
          <p className="text-xs text-slate-500 uppercase tracking-wider font-bold mb-2">Storage</p>
          <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full bg-primary w-3/4"></div>
          </div>
          <p className="text-[10px] text-slate-400 mt-2">1.2TB / 2.0TB used</p>
        </div>
      </div>
    </aside>
  );
}
