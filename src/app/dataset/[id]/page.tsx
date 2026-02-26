import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function DatasetDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="flex min-h-screen flex-col bg-[#f6f8f6] dark:bg-[#112116] text-slate-900 dark:text-slate-100">
      <Header />
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="flex mb-6 text-sm text-slate-500 dark:text-slate-400">
          <ol className="flex items-center space-x-2">
            <li><a href="/" className="hover:text-[#19e65e] transition-colors">Home</a></li>
            <li><span className="material-symbols-outlined text-xs">chevron_right</span></li>
            <li><a href="/dashboard" className="hover:text-[#19e65e] transition-colors">My Datasets</a></li>
            <li><span className="material-symbols-outlined text-xs">chevron_right</span></li>
            <li className="font-medium text-slate-900 dark:text-slate-100">Sales_Data_Q3.csv</li>
          </ol>
        </nav>

        {/* Dataset Info Card */}
        <Card className="p-6 mb-8 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-2xl font-bold font-display">Sales_Data_Q3.csv</h1>
                <Badge variant="secondary" className="gap-1 px-2.5 py-0.5 border border-[#19e65e]/20 text-[#19e65e] bg-[#19e65e]/10">
                  <span className="material-symbols-outlined text-[12px]">lock</span>
                  Private
                </Badge>
              </div>
              <p className="text-slate-600 dark:text-slate-400 max-w-2xl mb-4">
                Customer transactions for Kuala Lumpur region. Data includes daily sales volume, customer demographics, and product categories for July - September.
              </p>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2 text-sm">
                  <span className="material-symbols-outlined text-slate-400 text-sm">table_rows</span>
                  <span className="font-medium">1,250 Rows</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="material-symbols-outlined text-slate-400 text-sm">update</span>
                  <span className="font-medium text-slate-500">Updated: 2 days ago</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="material-symbols-outlined text-slate-400 text-sm">file_present</span>
                  <span className="font-medium text-slate-500">Size: 450 KB</span>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button variant="secondary" size="sm">
                <span className="material-symbols-outlined text-sm mr-2">visibility</span>
                Change Visibility
              </Button>
              <Button variant="primary" size="sm" className="shadow-[0_0_15px_rgba(25,230,94,0.4)]">
                <span className="material-symbols-outlined text-sm mr-2">edit</span>
                Edit Data
              </Button>
            </div>
          </div>
        </Card>

        {/* Tabs */}
        <div className="flex border-b border-slate-200 dark:border-slate-800 mb-6 gap-8">
          <button className="pb-4 text-sm font-bold border-b-2 border-[#19e65e] text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">preview</span>
            Preview
          </button>
          <button className="pb-4 text-sm font-medium border-b-2 border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 flex items-center gap-2 transition-colors">
            <span className="material-symbols-outlined text-sm">auto_awesome</span>
            AI Tools
          </button>
        </div>

        {/* Table Preview */}
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400">
                  <th className="py-3 px-4 font-semibold border-b border-slate-200 dark:border-slate-800 whitespace-nowrap">ID</th>
                  <th className="py-3 px-4 font-semibold border-b border-slate-200 dark:border-slate-800 whitespace-nowrap">Date</th>
                  <th className="py-3 px-4 font-semibold border-b border-slate-200 dark:border-slate-800 whitespace-nowrap">Customer ID</th>
                  <th className="py-3 px-4 font-semibold border-b border-slate-200 dark:border-slate-800 whitespace-nowrap">Product</th>
                  <th className="py-3 px-4 font-semibold border-b border-slate-200 dark:border-slate-800 whitespace-nowrap">Qty</th>
                  <th className="py-3 px-4 font-semibold border-b border-slate-200 dark:border-slate-800 whitespace-nowrap text-right">Amount (RM)</th>
                  <th className="py-3 px-4 font-semibold border-b border-slate-200 dark:border-slate-800 whitespace-nowrap">Payment</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {[
                  { id: "#001", date: "2023-09-01", cust: "KL-8921", prod: "Premium Coffee Beans", qty: 5, amt: "245.00", pay: "Touch 'n Go" },
                  { id: "#002", date: "2023-09-01", cust: "PJ-3310", prod: "Grinder Model X", qty: 1, amt: "890.00", pay: "Bank Transfer" },
                  { id: "#003", date: "2023-09-02", cust: "SA-1022", prod: "Paper Filters (100pk)", qty: 10, amt: "150.00", pay: "GrabPay" },
                  { id: "#004", date: "2023-09-02", cust: "KL-5523", prod: "Cold Brew Concentrate", qty: 12, amt: "384.00", pay: "Credit Card" },
                  { id: "#005", date: "2023-09-03", cust: "KL-8921", prod: "Syrup Variety Pack", qty: 2, amt: "112.50", pay: "Touch 'n Go" },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-[#19e65e]/5 transition-colors">
                    <td className="py-3 px-4">{row.id}</td>
                    <td className="py-3 px-4">{row.date}</td>
                    <td className="py-3 px-4 text-[#19e65e] font-medium">{row.cust}</td>
                    <td className="py-3 px-4">{row.prod}</td>
                    <td className="py-3 px-4">{row.qty}</td>
                    <td className="py-3 px-4 text-right">{row.amt}</td>
                    <td className="py-3 px-4"><span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-xs">{row.pay}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/30 flex justify-center">
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium italic">Showing first 20 rows preview</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
