"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { ReportPaper } from "@/components/report-paper"
import { RichTextMock } from "@/components/rich-text-mock"
import { ArrowLeft, Download, Pencil, Settings, Save, X } from "lucide-react"
import { useParams } from "next/navigation"

export default function ReportPreviewPage() {
  const [isEditingDiagnosis, setIsEditingDiagnosis] = useState(false)
  const [showChanges, setShowChanges] = useState(false)

  // @todo: USER_ACTION - Replace with real diagnostic content
  const diagnosisContent = `• Multiple splenic nodules.
• Bilateral adrenomegaly with nodule in left adrenal gland.
• Gastric lymphadenomegaly.
• Inguinal hernia.`

  const params = useParams()
  const locale = params.locale

  return (
    <div className="min-h-[calc(100vh-73px)] bg-muted/30 py-8">
      <div className="max-w-5xl mx-auto px-4">
        {/* Top bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-6">
            <Link href={`/${locale}/reports`}>
              <Button variant="ghost" size="sm" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to reports list
              </Button>
            </Link>
            <div>
              <h1 className="text-lg font-semibold text-foreground">Pony</h1>
              <p className="text-sm text-muted-foreground">
                Feline - European Shorthair | 11/13/2025
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button className="bg-gray-800 text-white hover:bg-gray-700 gap-2">
              <Download className="w-4 h-4" />
              Print PDF
            </Button>
            <Button variant="outline" className="gap-2 bg-transparent">
              <Pencil className="w-4 h-4" />
              Edit Case
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Report Paper */}
        <ReportPaper>
          <h2 className="text-2xl font-bold text-foreground mb-8">Ultrasound Report</h2>

          {/* Summary Box */}
          <div className="border rounded-lg p-6 mb-8">
            <div className="grid grid-cols-2 gap-y-4 gap-x-8">
              <div>
                <span className="font-semibold text-foreground">Name:</span>{" "}
                <span className="text-muted-foreground">Pony</span>
              </div>
              <div>
                <span className="font-semibold text-foreground">Date:</span>{" "}
                <span className="text-muted-foreground">11/13/2025</span>
              </div>
              <div>
                <span className="font-semibold text-foreground">Species:</span>{" "}
                <span className="text-muted-foreground">Feline</span>
              </div>
              <div>
                <span className="font-semibold text-foreground">Guardian:</span>{" "}
                <span className="text-muted-foreground">Nieto</span>
              </div>
              <div>
                <span className="font-semibold text-foreground">Sex:</span>{" "}
                <span className="text-muted-foreground">Spayed Female</span>
              </div>
              <div>
                <span className="font-semibold text-foreground">Breed:</span>{" "}
                <span className="text-muted-foreground">European Shorthair</span>
              </div>
              <div>
                <span className="font-semibold text-foreground">Veterinarian:</span>{" "}
                <span className="text-muted-foreground">Cardozo Guadalupe</span>
              </div>
              <div>
                <span className="font-semibold text-foreground">Age:</span>{" "}
                <span className="text-muted-foreground">10 years</span>
              </div>
              <div className="col-span-2">
                <span className="font-semibold text-foreground">Ultrasound Type:</span>{" "}
                <span className="text-muted-foreground">Abdominal</span>
              </div>
            </div>
          </div>

          {/* Diagnosis Section */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-foreground">Diagnosis</h3>
              <div className="flex items-center gap-2">
                <Label htmlFor="show-changes" className="text-sm text-muted-foreground">
                  Show Changes
                </Label>
                <Switch id="show-changes" checked={showChanges} onCheckedChange={setShowChanges} />
              </div>
            </div>
            <div className="border-t pt-4">
              {isEditingDiagnosis ? (
                <div className="border-2 border-blue-500 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-muted-foreground">Edit: Diagnosis</span>
                    <div className="flex items-center gap-2">
                      <Button
                        size="sm"
                        className="bg-green-500 hover:bg-green-600 text-white gap-1"
                        onClick={() => setIsEditingDiagnosis(false)}
                      >
                        <Save className="w-4 h-4" />
                        Save
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="gap-1"
                        onClick={() => setIsEditingDiagnosis(false)}
                      >
                        <X className="w-4 h-4" />
                        Cancel
                      </Button>
                    </div>
                  </div>
                  <RichTextMock defaultValue={diagnosisContent} />
                  <p className="text-xs text-muted-foreground mt-2">
                    Click outside to save automatically
                  </p>
                </div>
              ) : (
                <div
                  className="cursor-pointer hover:bg-muted/50 rounded-lg p-4 -mx-4 transition-colors"
                  onClick={() => setIsEditingDiagnosis(true)}
                >
                  <ul className="list-disc list-inside space-y-1 text-foreground">
                    <li>Multiple splenic nodules.</li>
                    <li>Bilateral adrenomegaly with nodule in left adrenal gland.</li>
                    <li>Gastric lymphadenomegaly.</li>
                    <li>Inguinal hernia.</li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Findings Section */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-foreground mb-4">Findings</h3>
            <div className="border-t pt-4 space-y-4 text-foreground leading-relaxed">
              <p>
                <span className="font-semibold">Liver:</span> Homogeneous parenchyma. Slightly
                granular texture. Smooth and regular contour, delineated by a thin hyperechoic
                capsule. The caudoventral portion does not extend past the gastric fundus. Hepatic
                veins are easily seen in the hepatic parenchyma as anechoic tubular structures.
                Portal veins are differentiated from systemic veins in the parenchyma by their
                hyperechoic walls.
              </p>
              <p>
                <span className="font-semibold">Gallbladder:</span> Medium distension with anechoic
                content, with a volume of 6.61 cm³. Thin and smooth wall. Measures 41.54 mm x 15.70
                mm x 19.35 mm.
              </p>
            </div>
          </div>

          {/* Images Section */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">Images</h3>
            <div className="border-t pt-4">
              <div className="grid grid-cols-2 gap-4">
                {[1, 2].map((i) => (
                  <div
                    key={i}
                    className="aspect-[4/3] bg-gray-800 rounded-lg overflow-hidden relative"
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-white/30 text-sm mb-2">SonoScape P40 Elite</div>
                        <div className="text-white/50 text-xs">Ultrasound Image {i}</div>
                      </div>
                    </div>
                    {/* Simulated ultrasound overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-black/80 text-white text-xs p-2 flex justify-between">
                      <span>DiagnoVet</span>
                      <span>10/24/2025</span>
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
