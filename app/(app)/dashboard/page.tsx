import Link from "next/link"
import { StatsCard } from "@/components/stats-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { NoReportsEmptyState } from "@/components/empty-state"
import { Plus, Search, Sparkles } from "lucide-react"

export default function DashboardPage() {
  const hasReports = false

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Welcome Banner */}
      <div className="mb-8 bg-linear-to-r from-teal/10 via-teal/5 to-transparent rounded-xl p-6 border border-teal/20">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-foreground mb-1">
              Welcome back, Dr. Barbero
            </h1>
            <p className="text-muted-foreground">
              Here&apos;s what&apos;s happening with your patients today.
            </p>
          </div>
          <div className="hidden md:flex items-center gap-2 text-sm text-teal bg-teal/10 px-3 py-1.5 rounded-full">
            <Sparkles className="w-4 h-4" />
            <span>AI-Powered Analysis</span>
          </div>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatsCard title="Total Reports" value={0} change={0} trend="neutral" />
        <StatsCard title="Total Patients" value={4} change={12} trend="up" />
        <StatsCard title="Active Reports" value={0} change={0} trend="neutral" />
      </div>

      {/* Search and Create */}
      <div className="flex flex-col md:flex-row gap-4 mb-12">
        <div className="relative flex-1 max-w-md group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-teal transition-colors" />
          <Input
            placeholder="Search patients, guardians, referrers…"
            className="pl-10 transition-shadow focus:shadow-md focus:shadow-teal/10"
          />
        </div>
        <Link href="/analyze" className="flex-1 md:flex-none">
          <Button className="w-full md:w-auto bg-foreground text-background hover:bg-foreground/90 hover:shadow-lg hover:shadow-foreground/20 transition-all text-base group">
            <Plus className="size-4 mr-2 group-hover:rotate-90 transition-transform duration-300" />
            Create new report
          </Button>
        </Link>
      </div>

      {/* Empty State or Content */}
      {hasReports ? <div>{/* @todo: Reports list would go here */}</div> : <NoReportsEmptyState />}
    </div>
  )
}
