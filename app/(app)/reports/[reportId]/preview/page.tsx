"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { ReportPaper } from "@/components/report-paper"
import { RichTextMock } from "@/components/rich-text-mock"
import {
  ArrowLeft,
  Download,
  Pencil,
  Settings,
  Save,
  X,
} from "lucide-react"

export default function ReportPreviewPage() {
  const [isEditingDiagnosis, setIsEditingDiagnosis] = useState(false)
  const [showChanges, setShowChanges] = useState(false)

  const diagnosisContent = `• Nódulos esplénicos múltiples.
• Adrenomegalia bilateral con nódulo en glándula adrenal izquierda.
• Linfadenomegalia gástrica.
• Hernia inguinal.`

  return (
    <div className="min-h-[calc(100vh-73px)] bg-muted/30 py-8">
      <div className="max-w-5xl mx-auto px-4">
        {/* Top bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-6">
            <Link href="/reports">
              <Button variant="ghost" size="sm" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Volver a listado de reportes
              </Button>
            </Link>
            <div>
              <h1 className="text-lg font-semibold text-foreground">Pony</h1>
              <p className="text-sm text-muted-foreground">
                Felino - Comun Europeo | 13/11/2025
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button className="bg-gray-800 text-white hover:bg-gray-700 gap-2">
              <Download className="w-4 h-4" />
              Imprimir PDF
            </Button>
            <Button variant="outline" className="gap-2 bg-transparent">
              <Pencil className="w-4 h-4" />
              Editar Caso
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Report Paper */}
        <ReportPaper>
          <h2 className="text-2xl font-bold text-foreground mb-8">
            Informe Ecográfico
          </h2>

          {/* Summary Box */}
          <div className="border rounded-lg p-6 mb-8">
            <div className="grid grid-cols-2 gap-y-4 gap-x-8">
              <div>
                <span className="font-semibold text-foreground">Nombre:</span>{" "}
                <span className="text-muted-foreground">Pony</span>
              </div>
              <div>
                <span className="font-semibold text-foreground">Fecha:</span>{" "}
                <span className="text-muted-foreground">13/11/2025</span>
              </div>
              <div>
                <span className="font-semibold text-foreground">Especie:</span>{" "}
                <span className="text-muted-foreground">Felino</span>
              </div>
              <div>
                <span className="font-semibold text-foreground">Tutor:</span>{" "}
                <span className="text-muted-foreground">Nieto</span>
              </div>
              <div>
                <span className="font-semibold text-foreground">Sexo:</span>{" "}
                <span className="text-muted-foreground">Hembra esterilizada</span>
              </div>
              <div>
                <span className="font-semibold text-foreground">Raza:</span>{" "}
                <span className="text-muted-foreground">Comun Europeo</span>
              </div>
              <div>
                <span className="font-semibold text-foreground">Veterinario:</span>{" "}
                <span className="text-muted-foreground">Cardozo Guadalupe</span>
              </div>
              <div>
                <span className="font-semibold text-foreground">Edad:</span>{" "}
                <span className="text-muted-foreground">10 años</span>
              </div>
              <div className="col-span-2">
                <span className="font-semibold text-foreground">Tipo de Ecografía:</span>{" "}
                <span className="text-muted-foreground">Abdominal</span>
              </div>
            </div>
          </div>

          {/* Diagnosis Section */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-foreground">Diagnóstico</h3>
              <div className="flex items-center gap-2">
                <Label htmlFor="show-changes" className="text-sm text-muted-foreground">
                  Mostrar Cambios
                </Label>
                <Switch
                  id="show-changes"
                  checked={showChanges}
                  onCheckedChange={setShowChanges}
                />
              </div>
            </div>
            <div className="border-t pt-4">
              {isEditingDiagnosis ? (
                <div className="border-2 border-blue-500 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-muted-foreground">
                      Editar: Diagnóstico
                    </span>
                    <div className="flex items-center gap-2">
                      <Button
                        size="sm"
                        className="bg-green-500 hover:bg-green-600 text-white gap-1"
                        onClick={() => setIsEditingDiagnosis(false)}
                      >
                        <Save className="w-4 h-4" />
                        Guardar
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="gap-1"
                        onClick={() => setIsEditingDiagnosis(false)}
                      >
                        <X className="w-4 h-4" />
                        Cancelar
                      </Button>
                    </div>
                  </div>
                  <RichTextMock defaultValue={diagnosisContent} />
                  <p className="text-xs text-muted-foreground mt-2">
                    Haz clic fuera para guardar automáticamente
                  </p>
                </div>
              ) : (
                <div
                  className="cursor-pointer hover:bg-muted/50 rounded-lg p-4 -mx-4 transition-colors"
                  onClick={() => setIsEditingDiagnosis(true)}
                >
                  <ul className="list-disc list-inside space-y-1 text-foreground">
                    <li>Nódulos esplénicos múltiples.</li>
                    <li>
                      Adrenomegalia bilateral con nódulo en glándula adrenal
                      izquierda.
                    </li>
                    <li>Linfadenomegalia gástrica.</li>
                    <li>Hernia inguinal.</li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Hallazgos Section */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-foreground mb-4">Hallazgos</h3>
            <div className="border-t pt-4 space-y-4 text-foreground leading-relaxed">
              <p>
                <span className="font-semibold">Hígado:</span> Parenquima
                homogéneo. Textura levemente granular. Contorno liso y regular,
                delineado por una fina cápsula hiperecogénica. La porción caudo
                ventral no sobrepasa el fundus gástrico. Las venas hepáticas se
                aprecian fácilmente en el parénquima hepático como estructuras
                anecogénicas tubulares. Las venas portales se diferencian de las
                venas sistémicas en el parénquima por sus paredes hiperecogénicas.
              </p>
              <p>
                <span className="font-semibold">Vesícula Biliar:</span> Distención
                media por contenido anecoico, con un volumen de 6.61 cm³. Pared
                fina y lisa. Mide 41.54 mm x 15.70 mm x 19.35 mm.
              </p>
            </div>
          </div>

          {/* Images Section */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">Imágenes</h3>
            <div className="border-t pt-4">
              <div className="grid grid-cols-2 gap-4">
                {[1, 2].map((i) => (
                  <div
                    key={i}
                    className="aspect-[4/3] bg-gray-800 rounded-lg overflow-hidden relative"
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-white/30 text-sm mb-2">
                          SonoScape P40 Elite
                        </div>
                        <div className="text-white/50 text-xs">
                          Ultrasound Image {i}
                        </div>
                      </div>
                    </div>
                    {/* Simulated ultrasound overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-black/80 text-white text-xs p-2 flex justify-between">
                      <span>DiagnoVet</span>
                      <span>24/10/2025</span>
                      <span>FLORA LOPEZ CORTI</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ReportPaper>
      </div>
    </div>
  )
}
