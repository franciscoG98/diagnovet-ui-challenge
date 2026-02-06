import { cn } from "@/lib/utils"

interface PageHeaderProps {
  title: string
  subtitle?: string
  className?: string
}

export function PageHeader({ title, subtitle, className }: PageHeaderProps) {
  return (
    <div className={cn("mb-8", className)}>
      <h1 className="text-2xl font-bold text-foreground">{title}</h1>
      {subtitle ? <p className="text-muted-foreground mt-1">{subtitle}</p> : null}
    </div>
  )
}
