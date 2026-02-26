import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f6f8f6] dark:bg-[#112116] text-slate-900 dark:text-slate-100">
      <Header />
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="max-w-[480px] w-full bg-white dark:bg-[#0d1117] rounded-xl shadow-xl shadow-[#19e65e]/5 border border-slate-100 dark:border-slate-800 relative p-8 md:p-10">
          <div className="text-center mb-8 mt-2">
            <h1 className="text-2xl md:text-3xl font-bold mb-2 font-display">Create Your Hub</h1>
            <p className="text-slate-500 dark:text-slate-400 text-sm">Connect your data and start your AI journey.</p>
          </div>

          <div className="space-y-3 mb-6">
            <button className="w-full bg-[#24292f] hover:bg-[#24292f]/90 text-white font-medium py-2.5 px-4 rounded-[12px] flex items-center justify-center gap-3 transition-all border border-transparent dark:border-slate-700">
              <svg className="fill-current" height="20" viewBox="0 0 16 16" width="20"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
              Continue with GitHub
            </button>
            <button className="w-full bg-white dark:bg-[#161b22] hover:bg-slate-50 dark:hover:bg-slate-800/80 text-slate-700 dark:text-slate-200 font-medium py-2.5 px-4 rounded-[12px] border border-slate-200 dark:border-slate-700 flex items-center justify-center gap-3 transition-all">
              <svg height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)"><path d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z" fill="#4285F4"></path><path d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z" fill="#34A853"></path><path d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z" fill="#FBBC05"></path><path d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.799 L -6.734 42.379 C -8.804 40.439 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z" fill="#EA4335"></path></g></svg>
              Continue with Google
            </button>
          </div>

          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200 dark:border-slate-700"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white dark:bg-[#0d1117] text-slate-500">Or register with email</span>
            </div>
          </div>

          <form className="space-y-4">
            <div>
              <label className="block text-slate-700 dark:text-slate-300 text-sm font-semibold mb-1.5 ml-1">Name</label>
              <Input placeholder="Enter your name or business name" />
            </div>
            <div>
              <label className="block text-slate-700 dark:text-slate-300 text-sm font-semibold mb-1.5 ml-1">Email</label>
              <Input type="email" placeholder="example@mail.com" />
            </div>
            <div>
              <label className="block text-slate-700 dark:text-slate-300 text-sm font-semibold mb-1.5 ml-1">Password</label>
              <Input type="password" placeholder="Enter password" />
              <div className="flex items-center gap-1.5 mt-2 ml-1">
                <div className="h-1 flex-1 rounded-full bg-red-500"></div>
                <div className="h-1 flex-1 rounded-full bg-yellow-500/30"></div>
                <div className="h-1 flex-1 rounded-full bg-green-500/30"></div>
                <span className="text-xs text-red-500 font-medium ml-1">Weak</span>
              </div>
            </div>

            <div className="pt-4">
              <Button variant="primary" className="w-full py-6 text-base" type="submit">
                Register <span className="material-symbols-outlined ml-2">arrow_forward</span>
              </Button>
            </div>
          </form>

          <div className="mt-8 text-center">
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Already have an account? <a className="text-[#19e65e] font-bold hover:underline" href="#">Login</a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
