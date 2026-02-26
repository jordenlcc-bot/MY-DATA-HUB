import Link from "next/link"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f6f8f6] dark:bg-[#112116] text-slate-900 dark:text-slate-100">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden px-6 pt-16 pb-24 lg:px-12 lg:pt-32">
          <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 lg:flex-row">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center rounded-full bg-[#19e65e]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#19e65e] mb-6">
                Built for Malaysian SMEs
              </div>
              <h1 className="text-4xl font-extrabold leading-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl font-display">
                Simple AI for <span className="text-[#19e65e]">Real Business</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-slate-600 dark:text-slate-400 max-w-2xl mx-auto lg:mx-0">
                Upload your business data, click a few buttons, and let AI write your copy, clean your lists, and generate reports. No coding required.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">
                <Link href="/upload">
                  <Button size="lg" variant="primary">Start for Free</Button>
                </Link>
                <Link href="/marketplace">
                  <Button size="lg" variant="outline">Explore Tools</Button>
                </Link>
              </div>
            </div>
            <div className="flex-1 relative w-full max-w-xl lg:max-w-none">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white dark:bg-slate-800 p-4 border border-slate-100 dark:border-slate-700">
                {/* Placeholder for dashboard image */}
                <div className="aspect-[4/3] bg-slate-200 dark:bg-slate-700 rounded-xl flex items-center justify-center">
                   <span className="material-symbols-outlined text-6xl text-slate-400">query_stats</span>
                </div>

                {/* Floating Element Mockup */}
                <div className="absolute bottom-10 right-10 bg-[#19e65e]/95 p-4 rounded-lg shadow-lg max-w-[200px] animate-bounce-subtle backdrop-blur-sm">
                  <p className="text-[10px] font-bold text-slate-900 uppercase tracking-widest mb-1">AI Insight</p>
                  <p className="text-xs font-medium text-slate-800 italic">"50 customers haven't ordered this month. Send promo?"</p>
                </div>
              </div>
              {/* Decorative shapes */}
              <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-[#19e65e]/20 blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-[#19e65e]/30 blur-3xl"></div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-white py-24 dark:bg-[#0d1117]/50">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white font-display">Why MY DATA HUB?</h2>
              <p className="mt-4 text-slate-600 dark:text-slate-400">The AI assistant that understands local business needs.</p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* Feature 1 */}
              <div className="group relative rounded-2xl border border-slate-100 bg-[#f6f8f6] p-8 transition-all hover:border-[#19e65e]/50 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-[#19e65e]/20 text-[#19e65e]">
                  <span className="material-symbols-outlined">terminal</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">No Coding Required</h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  Fully localized interface (CN/BM/EN). If you can use Excel, you can use our AI tools.
                </p>
              </div>
              {/* Feature 2 */}
              <div className="group relative rounded-2xl border border-slate-100 bg-[#f6f8f6] p-8 transition-all hover:border-[#19e65e]/50 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-[#19e65e]/20 text-[#19e65e]">
                  <span className="material-symbols-outlined">bolt</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">3 Steps: Login → Upload → AI</h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  Minimalist workflow. Get actionable business insights in less than 3 minutes.
                </p>
              </div>
              {/* Feature 3 */}
              <div className="group relative rounded-2xl border border-slate-100 bg-[#f6f8f6] p-8 transition-all hover:border-[#19e65e]/50 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-[#19e65e]/20 text-[#19e65e]">
                  <span className="material-symbols-outlined">shield_person</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Your Data, Your Control</h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  Privacy first. Your business data is used only to generate results for you, never for training public models.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
