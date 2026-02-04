import { CheckCircle2 } from "lucide-react"
import { cn } from "@/lib/utils"

interface InfoBoxProps {
  title: string
  items: string[]
  className?: string
}

export function InfoBox({ title, items, className }: InfoBoxProps) {
  return (
    <div
      className={cn(
        "bg-teal-light rounded-lg p-4 mt-6",
        className
      )}
    >
      <div className="flex items-center gap-2 mb-3">
        <CheckCircle2 className="w-5 h-5 text-teal" />
        <span className="font-medium text-foreground text-sm">{title}</span>
      </div>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
            <span className="text-teal mt-1">•</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
