import Link from "next/link"
import { StatsCard } from "@/components/stats-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus, Search, FileText } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatsCard title="Total Reports" value={0} />
        <StatsCard title="Total Patients" value={4} />
        <StatsCard title="Active Reports" value={0} />
      </div>

      {/* Search and Create */}
      <div className="flex flex-col md:flex-row gap-4 mb-12">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input placeholder="Search patients, guardians, referrers…" className="pl-10" />
        </div>
        <Link href="/analyze" className="flex-1 md:flex-none">
          <Button className="w-full md:w-auto bg-foreground text-background hover:bg-foreground/90 text-base">
            <Plus className="size-4 mr-2" />
            Create new report
          </Button>
        </Link>
      </div>

      {/* Empty State */}
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mb-6">
          <FileText className="w-10 h-10 text-muted-foreground" />
        </div>
        <h2 className="text-xl font-semibold text-foreground mb-2">No reports found</h2>
        <p className="text-muted-foreground max-w-sm">
          Create your first report to get started with DiagnovetAI
        </p>
      </div>
    </div>
  )
}
