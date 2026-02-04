import React from "react"
import { cn } from "@/lib/utils"

interface ReportPaperProps {
  children: React.ReactNode
  className?: string
}

export function ReportPaper({ children, className }: ReportPaperProps) {
  return (
    <div
      className={cn(
        "max-w-4xl mx-auto bg-card rounded-lg shadow-lg border p-8 md:p-12",
        className
      )}
    >
      {children}
    </div>
  )
}
