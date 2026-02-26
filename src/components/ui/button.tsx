import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link" | "gradient"
  size?: "sm" | "md" | "lg" | "icon"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-[12px] font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
          {
            "bg-[#19e65e] text-slate-900 hover:bg-[#15c34f] shadow-sm": variant === "primary",
            "bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700": variant === "secondary",
            "border border-slate-200 bg-transparent hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800 text-slate-900 dark:text-slate-100": variant === "outline",
            "hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-100": variant === "ghost",
            "text-[#19e65e] underline-offset-4 hover:underline": variant === "link",
            "bg-gradient-to-b from-[#19e65e] to-[#15c34f] text-slate-900 shadow-sm hover:brightness-110": variant === "gradient",
            "h-9 px-4 text-sm": size === "sm",
            "h-11 px-6 text-sm": size === "md",
            "h-14 px-8 text-base": size === "lg",
            "h-10 w-10 p-0": size === "icon",
          },
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
