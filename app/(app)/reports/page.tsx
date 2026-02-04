import Link from "next/link"
import { ReportsTable, type Report } from "@/components/reports-table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus, Search } from "lucide-react"

const mockReports: Report[] = [
  {
    id: "1",
    patientName: "Eva",
    patientInitial: "E",
    species: "Canino",
    tutor: "sn",
    studyType: "Ecografía",
    status: "en_progreso",
    date: "20 de noviembre de 2025",
  },
  {
    id: "2",
    patientName: "pulgita",
    patientInitial: "P",
    species: "Canino",
    tutor: "sn",
    studyType: "Ecografía",
    status: "en_progreso",
    date: "19 de noviembre de 2025",
  },
  {
    id: "3",
    patientName: "LUNA",
    patientInitial: "L",
    species: "Canino",
    tutor: "sn",
    studyType: "Ecografía",
    status: "completado",
    date: "19 de noviembre de 2025",
  },
]

export default function ReportsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Search and Create */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Buscar pacientes, tutores, derivantes…"
            className="pl-10"
          />
        </div>
        <Link href="/analyze" className="flex-1 md:flex-none">
          <Button className="w-full md:w-auto bg-foreground text-background hover:bg-foreground/90 px-8 py-6 text-base">
            <Plus className="w-5 h-5 mr-2" />
            CREAR NUEVO REPORTE
          </Button>
        </Link>
      </div>

      {/* Reports Table */}
      <ReportsTable reports={mockReports} />

      {/* Pagination */}
      <div className="flex items-center justify-between mt-6 text-sm text-muted-foreground">
        <span>Mostrando 1-3 de 3 informes</span>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" disabled>
            Anterior
          </Button>
          <span>1 / 1</span>
          <Button variant="ghost" size="sm" disabled>
            Siguiente
          </Button>
        </div>
      </div>
    </div>
  )
}
