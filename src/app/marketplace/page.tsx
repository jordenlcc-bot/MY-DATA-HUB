import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function MarketplacePage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f6f8f6] dark:bg-[#112116] text-slate-900 dark:text-slate-100">
      <Header />
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 w-full">
        <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-6">
          <a className="hover:text-[#19e65e] transition-colors" href="/">Home</a>
          <span className="material-symbols-outlined text-[14px]">chevron_right</span>
          <span className="text-slate-900 dark:text-slate-200">Marketplace</span>
        </div>

        <div className="mb-8">
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-2 tracking-tight">Village Market <span className="text-slate-400 text-lg font-normal ml-2">v2.0 Beta</span></h2>
          <p className="text-slate-600 dark:text-slate-400 text-base max-w-2xl leading-relaxed">
            Empowering Malaysian SMEs with localized AI data and tools.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-6">
          <div className="flex-1 w-full">
            <div className="bg-white/50 dark:bg-[#161b22]/50 border border-slate-300/50 dark:border-slate-700/50 rounded-lg p-1.5 flex flex-col sm:flex-row gap-2 shadow-sm">
              <div className="flex-1 relative">
                <span className="material-symbols-outlined absolute left-3 top-2.5 text-slate-400 text-lg">search</span>
                <input
                  className="bg-transparent border-none py-2 pl-10 pr-3 text-sm w-full placeholder-slate-400 focus:outline-none text-slate-900 dark:text-slate-100"
                  placeholder="Filter by name..."
                  type="text"
                />
              </div>
              <div className="flex gap-2 p-1">
                 <Button variant="outline" size="sm" className="h-9">Type <span className="material-symbols-outlined text-xs ml-1">arrow_drop_down</span></Button>
                 <Button variant="outline" size="sm" className="h-9">Language <span className="material-symbols-outlined text-xs ml-1">arrow_drop_down</span></Button>
              </div>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[
            {
              title: "fb-copy-generator",
              desc: "Generate native high-converting Facebook ad copy for the Malaysian market. Works for BM/CN/EN.",
              tags: ["Marketing", "Prompt Eng"],
              lang: "Python",
              stars: "1,248",
              icon: "book",
              color: "text-blue-500"
            },
            {
              title: "data-cleaner-pro",
              desc: "Auto-format Malaysian phone numbers and address structures for CRM ingestion.",
              tags: ["Data Ops", "Efficiency"],
              lang: "JS",
              stars: "894",
              icon: "terminal",
              color: "text-blue-500"
            },
            {
              title: "live-script-gen",
              desc: "FB Live interaction scripter for SME sellers. Boosts viewer retention and conversion rates.",
              tags: ["Sales", "Live"],
              lang: "TS",
              stars: "412",
              icon: "mic",
              color: "text-blue-500"
            },
            {
              title: "product-bg-remover",
              desc: "Instant background removal for e-commerce products with automated lighting correction.",
              tags: ["Design", "CV"],
              lang: "Python",
              stars: "2,031",
              icon: "image",
              color: "text-blue-500"
            }
          ].map((tool, i) => (
            <Card key={i} className="group relative border border-slate-200/40 dark:border-slate-700/40 overflow-hidden flex flex-col hover:shadow-lg transition-all duration-300">
              <div className="p-5 flex flex-col h-full">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-slate-400 text-lg">{tool.icon}</span>
                    <h3 className={`text-sm font-bold ${tool.color} hover:underline cursor-pointer`}>{tool.title}</h3>
                    <Badge variant="secondary" className="px-2 py-0.5 text-[10px]">Public</Badge>
                  </div>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 mb-5 line-clamp-2 h-10 leading-relaxed font-light">
                  {tool.desc}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {tool.tags.map(tag => (
                    <span key={tag} className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-[10px] px-2 py-1 rounded-md font-bold border border-slate-200 dark:border-slate-700">{tag}</span>
                  ))}
                </div>
                <div className="mt-auto">
                  <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 pb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1.5">
                        <span className={`w-2 h-2 rounded-full ${tool.lang === 'Python' ? 'bg-yellow-400' : 'bg-blue-400'}`}></span>
                        <span>{tool.lang}</span>
                      </div>
                      <div className="flex items-center gap-1 hover:text-[#19e65e] transition-colors">
                        <span className="material-symbols-outlined text-[14px]">star</span>
                        <span className="font-medium">{tool.stars}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="secondary" size="sm" className="flex-1 h-8 text-xs">Details</Button>
                    <Button variant="primary" size="sm" className="h-8 text-xs px-3">Run <span className="material-symbols-outlined text-[14px] ml-1">play_arrow</span></Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
