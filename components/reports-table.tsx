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
import { Play, Download, Copy, Trash2 } from "lucide-react"
import Link from "next/link"

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
  return (
    <div className="border rounded-lg overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="bg-muted/50">
            <TableHead className="font-medium">Patient</TableHead>
            <TableHead className="font-medium">Guardian</TableHead>
            <TableHead className="font-medium">Study Type</TableHead>
            <TableHead className="font-medium">Status</TableHead>
            <TableHead className="font-medium">Date</TableHead>
            <TableHead className="font-medium">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {reports.map((report) => (
            <TableRow key={report.id}>
              <TableCell>
                <div className="flex items-center gap-3">
                  <Avatar className="w-8 h-8">
                    <AvatarFallback className="bg-muted text-sm">
                      {report.patientInitial}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{report.patientName}</p>
                    <p className="text-xs text-muted-foreground">{report.species}</p>
                  </div>
                </div>
              </TableCell>
              <TableCell className="text-muted-foreground">{report.guardian}</TableCell>
              <TableCell>{report.studyType}</TableCell>
              <TableCell>
                <Badge
                  variant={report.status === "completed" ? "default" : "secondary"}
                  className={
                    report.status === "completed"
                      ? "bg-green-100 text-green-700 hover:bg-green-100"
                      : "bg-blue-100 text-blue-700 hover:bg-blue-100"
                  }
                >
                  {report.status === "completed" ? "Completed" : "In Progress"}
                </Badge>
              </TableCell>
              <TableCell className="text-muted-foreground">{report.date}</TableCell>
              <TableCell>
                <div className="flex items-center gap-1">
                  {report.status === "in_progress" ? (
                    <Link href={`/study/ultrasound?id=${report.id}`}>
                      <Button variant="ghost" size="sm" className="gap-1 text-foreground">
                        <Play className="w-4 h-4" />
                        Continue
                      </Button>
                    </Link>
                  ) : (
                    <Link href={`/reports/${report.id}/preview`}>
                      <Button variant="ghost" size="sm" className="gap-1 text-foreground">
                        <Download className="w-4 h-4" />
                        Download
                      </Button>
                    </Link>
                  )}
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Copy className="w-4 h-4 text-muted-foreground" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Trash2 className="w-4 h-4 text-muted-foreground" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
