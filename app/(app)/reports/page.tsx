"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ReportsTable, type Report } from "@/components/reports-table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { TableSkeleton } from "@/components/ui/skeleton"
import { NoReportsEmptyState, NoSearchResultsEmptyState } from "@/components/empty-state"
import { Plus, Search, SlidersHorizontal } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// TODO: USER_ACTION - Replace mock data with realistic patient/report data
const mockReports: Report[] = [
  {
    id: "1",
    patientName: "Eva",
    patientInitial: "E",
    species: "Canine",
    guardian: "Martinez",
    studyType: "Ultrasound",
    status: "in_progress",
    date: "November 20, 2025",
  },
  {
    id: "2",
    patientName: "Pulgita",
    patientInitial: "P",
    species: "Canine",
    guardian: "Nieto",
    studyType: "Ultrasound",
    status: "in_progress",
    date: "November 19, 2025",
  },
  {
    id: "3",
    patientName: "Luna",
    patientInitial: "L",
    species: "Canine",
    guardian: "Martinez",
    studyType: "Ultrasound",
    status: "completed",
    date: "November 19, 2025",
  },
  {
    id: "4",
    patientName: "Pony",
    patientInitial: "P",
    species: "Feline",
    guardian: "Nieto",
    studyType: "Ultrasound",
    status: "completed",
    date: "November 13, 2025",
  },
]

export default function ReportsPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState<"all" | "in_progress" | "completed">("all")

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800)
    return () => clearTimeout(timer)
  }, [])

  // Filter reports
  const filteredReports = mockReports.filter((report) => {
    const matchesSearch =
      report.patientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      report.guardian.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesStatus = statusFilter === "all" || report.status === statusFilter

    return matchesSearch && matchesStatus
  })

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-foreground">Reports</h1>
        <p className="text-muted-foreground">Manage and view all your diagnostic reports</p>
      </div>

      {/* Search, Filter and Create */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1 max-w-md group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-teal transition-colors" />
          <Input
            placeholder="Search patients, guardians, referrers…"
            className="pl-10 transition-shadow focus:shadow-md focus:shadow-teal/10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Filter Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="gap-2">
              <SlidersHorizontal className="w-4 h-4" />
              Filter
              {statusFilter !== "all" && (
                <span className="ml-1 w-2 h-2 rounded-full bg-teal animate-pulse" />
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuLabel>Status</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => setStatusFilter("all")}
              className={statusFilter === "all" ? "bg-muted" : ""}
            >
              All Reports
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => setStatusFilter("in_progress")}
              className={statusFilter === "in_progress" ? "bg-muted" : ""}
            >
              In Progress
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => setStatusFilter("completed")}
              className={statusFilter === "completed" ? "bg-muted" : ""}
            >
              Completed
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Link href="/analyze" className="flex-1 md:flex-none">
          <Button className="w-full md:w-auto bg-foreground text-background hover:bg-foreground/90 hover:shadow-lg transition-all text-base group">
            <Plus className="group-hover:rotate-90 transition-transform duration-300" />
            Create new report
          </Button>
        </Link>
      </div>

      {/* Reports Table with Loading and Empty States */}
      {isLoading ? (
        <TableSkeleton rows={4} />
      ) : filteredReports.length === 0 ? (
        searchQuery ? (
          <NoSearchResultsEmptyState query={searchQuery} />
        ) : (
          <NoReportsEmptyState />
        )
      ) : (
        <>
          <ReportsTable reports={filteredReports} />

          {/* Pagination */}
          <div className="flex items-center justify-between mt-6 text-sm text-muted-foreground">
            <span>
              Showing {filteredReports.length} of {mockReports.length} reports
              {statusFilter !== "all" && ` (filtered by ${statusFilter.replace("_", " ")})`}
            </span>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" disabled>
                Previous
              </Button>
              <span className="px-3 py-1 bg-muted rounded-md">1 / 1</span>
              <Button variant="ghost" size="sm" disabled>
                Next
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
