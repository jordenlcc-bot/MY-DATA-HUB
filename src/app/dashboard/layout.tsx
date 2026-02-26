import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Sidebar } from "@/components/layout/Sidebar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col bg-[#f8fafc] dark:bg-[#0d1117]">
      <Header />
      <div className="max-w-[1440px] mx-auto w-full px-4 md:px-8 py-8 flex flex-col lg:flex-row gap-8 flex-1">
        <Sidebar />
        <main className="flex-1 min-w-0">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  )
}
