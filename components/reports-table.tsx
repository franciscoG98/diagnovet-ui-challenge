"use client"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Play, Download, Copy, Trash2, MoreHorizontal, Eye } from "lucide-react"
import Link from "next/link"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useParams } from "next/navigation"
import { useTranslations } from "next-intl"

export interface Report {
  id: string
  patientName: string
  patientInitial: string
  species: string
  guardian: string
  studyType: string
  status: "in_progress" | "completed"
  date: string
}

interface ReportsTableProps {
  reports: Report[]
}

export function ReportsTable({ reports }: ReportsTableProps) {

  const t= useTranslations("report")

  const params = useParams()
  const locale = params.locale

  return (
    <div className="border rounded-lg overflow-hidden shadow-sm">
      <Table>
        <TableHeader>
          <TableRow className="bg-muted/50 hover:bg-muted/50">
            {/* @fix: translate */}
            <TableHead className="font-semibold text-foreground">{t("patient")}</TableHead>
            <TableHead className="font-semibold text-foreground">{t("guardian")}</TableHead>
            <TableHead className="font-semibold text-foreground">{t("studyType")}</TableHead>
            <TableHead className="font-semibold text-foreground">{t("status")}</TableHead>
            <TableHead className="font-semibold text-foreground">{t("date")}</TableHead>
            <TableHead className="font-semibold text-foreground text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {reports.map((report) => (
            <TableRow
              key={report.id}
              className="group transition-colors hover:bg-muted/30 cursor-pointer"
            >
              <TableCell>
                <div className="flex items-center gap-3">
                  <Avatar className="w-9 h-9 ring-2 ring-background shadow-sm transition-transform group-hover:scale-105">
                    <AvatarFallback className="bg-linear-to-br from-purple-500 to-purple-600 text-white text-sm font-medium">
                      {report.patientInitial}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-foreground group-hover:text-teal transition-colors">
                      {report.patientName}
                    </p>
                    <p className="text-xs text-muted-foreground">{report.species}</p>
                  </div>
                </div>
              </TableCell>
              <TableCell className="text-muted-foreground">{report.guardian}</TableCell>
              <TableCell>
                <span className="inline-flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-teal/60" />
                  {report.studyType}
                </span>
              </TableCell>
              <TableCell>
                <Badge
                  variant={report.status === "completed" ? "default" : "secondary"}
                  className={`
                    transition-all duration-200 font-medium
                    ${report.status === "completed"
                      ? "bg-green-100 text-green-700 hover:bg-green-200 border border-green-200"
                      : "bg-blue-100 text-blue-700 hover:bg-blue-200 border border-blue-200"
                    }
                  `}
                >
                  <span
                    className={`
                    w-1.5 h-1.5 rounded-full mr-1.5
                    ${report.status === "completed" ? "bg-green-500" : "bg-blue-500 animate-pulse"}
                  `}
                  />
                  {report.status === "completed" ? "Completed" : "In Progress"}
                </Badge>
              </TableCell>
              <TableCell className="text-muted-foreground text-sm">{report.date}</TableCell>
              <TableCell>
                <div className="flex items-center justify-end gap-1 opacity-70 group-hover:opacity-100 transition-opacity">
                  {report.status === "in_progress" ? (
                    <Link href={`/${locale}/study/ultrasound?id=${report.id}`}>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="gap-1.5 text-foreground hover:text-teal hover:bg-teal/10 transition-colors"
                      >
                        <Play className="w-4 h-4" />
                        {/* @fix: translate */}
                        Continue
                      </Button>
                    </Link>
                  ) : (
                    <Link href={`/${locale}/reports/${report.id}/preview`}>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="gap-1.5 text-foreground hover:text-teal hover:bg-teal/10 transition-colors"
                      >
                        <Eye className="w-4 h-4" />
                        View
                      </Button>
                    </Link>
                  )}
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 hover:bg-muted transition-colors"
                      >
                        <MoreHorizontal className="w-4 h-4 text-muted-foreground" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-48">
                      {report.status === "completed" && (
                        <DropdownMenuItem className="gap-2 cursor-pointer">
                          <Download className="w-4 h-4" />
                          Download PDF
                        </DropdownMenuItem>
                      )}
                      <DropdownMenuItem className="gap-2 cursor-pointer">
                        <Copy className="w-4 h-4" />
                        Duplicate
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="gap-2 text-destructive cursor-pointer focus:text-destructive">
                        <Trash2 className="w-4 h-4" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
