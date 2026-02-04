import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface StatsCardProps {
  title: string
  value: number | string
  className?: string
}

export function StatsCard({ title, value, className }: StatsCardProps) {
  return (
    <Card className={cn("", className)}>
      <CardContent className="pt-6">
        <p className="text-sm text-muted-foreground mb-1">{title}</p>
        <div className="flex items-end justify-between">
          <p className="text-3xl font-bold text-foreground">{value}</p>
          {/* Mini chart placeholder */}
          <div className="flex items-end gap-1 h-10">
            <svg viewBox="0 0 60 30" className="w-16 h-8 text-muted-foreground/30">
              <polyline
                points="0,25 10,20 20,22 30,15 40,18 50,10 60,12"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>
        <div className="flex justify-between mt-2 text-xs text-muted-foreground">
          <span>Sem</span>
          <span>Sem</span>
          <span>Sem</span>
        </div>
      </CardContent>
    </Card>
  )
}
