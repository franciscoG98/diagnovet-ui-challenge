import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { TrendingUp, TrendingDown, Minus } from "lucide-react"
import { useTranslations } from "next-intl"

interface StatsCardProps {
  title: string
  value: number | string
  change?: number
  trend?: "up" | "down" | "neutral"
  className?: string
}

export function StatsCard({ title, value, change, trend = "neutral", className }: StatsCardProps) {

  const t = useTranslations("common")

  return (
    <Card
      className={cn(
        "transition-all duration-300 hover:shadow-lg hover:shadow-teal/5 hover:-translate-y-0.5 group",
        className
      )}
    >
      <CardContent className="pt-6">
        <p className="text-sm text-muted-foreground mb-1 group-hover:text-foreground/80 transition-colors">
          {title}
        </p>
        <div className="flex items-end justify-between">
          <div className="flex items-baseline gap-3">
            <p className="text-3xl font-bold text-foreground tracking-tight">{value}</p>
            {change !== undefined && (
              <span
                className={cn(
                  "text-xs font-medium flex items-center gap-0.5 px-1.5 py-0.5 rounded-full",
                  trend === "up" && "text-green-600 bg-green-50",
                  trend === "down" && "text-red-600 bg-red-50",
                  trend === "neutral" && "text-muted-foreground bg-muted"
                )}
              >
                {trend === "up" && <TrendingUp className="w-3 h-3" />}
                {trend === "down" && <TrendingDown className="w-3 h-3" />}
                {trend === "neutral" && <Minus className="w-3 h-3" />}
                {change > 0 ? "+" : ""}
                {change}%
              </span>
            )}
          </div>
          {/* Mini sparkline chart */}
          <div className="flex items-end gap-1 h-10">
            <svg
              viewBox="0 0 60 30"
              className={cn(
                "w-16 h-8 transition-colors",
                trend === "up" && "text-green-400",
                trend === "down" && "text-red-400",
                trend === "neutral" && "text-muted-foreground/30"
              )}
            >
              <defs>
                <linearGradient id={`gradient-${trend}`} x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="currentColor" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0,25 L10,20 L20,22 L30,15 L40,18 L50,10 L60,12 L60,30 L0,30 Z"
                fill={`url(#gradient-${trend})`}
              />
              <polyline
                points="0,25 10,20 20,22 30,15 40,18 50,10 60,12"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className="flex justify-between mt-3 text-xs text-muted-foreground border-t pt-2">
          <span>{t("week")} 1</span>
          <span>{t("week")} 2</span>
          <span>{t("week")} 3</span>
        </div>
      </CardContent>
    </Card>
  )
}
