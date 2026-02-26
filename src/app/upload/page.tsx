import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function UploadPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f6f8f6] dark:bg-[#112116] text-slate-900 dark:text-slate-100">
      <Header />
      <main className="flex-1 flex flex-col items-center py-12 px-4 pb-24">
        <div className="max-w-4xl w-full space-y-8">
          <div className="text-center space-y-2">
            <h1 className="text-4xl font-black tracking-tight font-display">Upload Your Data</h1>
            <p className="text-slate-500 dark:text-slate-400 text-lg">Transform your business data into AI-driven insights.</p>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-xl p-8 shadow-sm border border-slate-200 dark:border-slate-800">
            {/* Steps */}
            <div className="relative flex justify-between items-start mb-12 max-w-2xl mx-auto">
              <button className="flex flex-col items-center z-10 group cursor-pointer focus:outline-none">
                <div className="size-10 rounded-full bg-[#19e65e] flex items-center justify-center text-slate-900 font-bold mb-2 ring-4 ring-[#19e65e]/20 transition-all">
                  <span className="material-symbols-outlined">edit_note</span>
                </div>
                <span className="text-sm font-bold text-[#19e65e]">1. Details</span>
              </button>
              <div className="absolute top-5 left-[15%] right-[55%] h-0.5 bg-slate-200 dark:bg-slate-700 -z-0"></div>
              <div className="flex flex-col items-center z-10">
                <div className="size-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 mb-2 border border-slate-200 dark:border-slate-700">
                  <span className="material-symbols-outlined">upload_file</span>
                </div>
                <span className="text-sm font-medium text-slate-400">2. Upload</span>
              </div>
              <div className="absolute top-5 left-[55%] right-[15%] h-0.5 bg-slate-200 dark:bg-slate-700 -z-0"></div>
              <div className="flex flex-col items-center z-10">
                <div className="size-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 mb-2 border border-slate-200 dark:border-slate-700">
                  <span className="material-symbols-outlined">check_circle</span>
                </div>
                <span className="text-sm font-medium text-slate-400">3. Done</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <span className="size-2 bg-[#19e65e] rounded-full"></span>
                    Basic Info
                  </h3>
                  <div className="space-y-4">
                    <label className="block group">
                      <span className="text-sm font-semibold mb-2 block">Dataset Name <span className="text-red-500">*</span></span>
                      <Input placeholder="e.g. 2023 Sales Records" defaultValue="2023 Q3 Sales Data" />
                    </label>
                    <label className="block">
                      <span className="text-sm font-semibold mb-2 block">Description</span>
                      <textarea
                        className="w-full rounded-[12px] border border-slate-200 dark:border-slate-800 bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#19e65e] h-32 resize-none dark:placeholder:text-slate-400"
                        placeholder="Describe the purpose of this dataset..."
                      ></textarea>
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex flex-col">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <span className="size-2 bg-slate-300 rounded-full"></span>
                  Upload File
                </h3>
                <div className="flex-1 border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-xl bg-slate-50/50 dark:bg-slate-800/50 flex flex-col items-center justify-center p-8 text-center group hover:border-[#19e65e] hover:bg-[#19e65e]/5 transition-all cursor-pointer min-h-[240px]">
                  <div className="size-16 rounded-full bg-white dark:bg-slate-700 shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-3xl text-[#19e65e]">cloud_upload</span>
                  </div>
                  <p className="text-lg font-bold mb-1">Drag & Drop or Click to Upload</p>
                  <p className="text-sm text-slate-500 mb-4">Support: CSV, Excel (.xlsx, .xls)</p>
                  <div className="px-3 py-1 bg-slate-200 dark:bg-slate-700 rounded text-xs font-medium text-slate-600 dark:text-slate-300">
                    Max size: 10MB
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 flex justify-between items-center pt-8 border-t border-slate-100 dark:border-slate-800">
              <Button variant="ghost">Cancel</Button>
              <Button variant="primary" size="lg" className="shadow-lg shadow-[#19e65e]/20">
                Next: Confirm & Process <span className="material-symbols-outlined text-sm ml-2">arrow_forward</span>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
