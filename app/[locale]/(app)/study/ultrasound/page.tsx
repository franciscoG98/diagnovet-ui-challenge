"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { RichTextMock } from "@/components/rich-text-mock"
import { ChevronLeft, ChevronRight, X, FileText, Eye } from "lucide-react"

// @todo: USER_ACTION - Replace with real ultrasound thumbnails
const thumbnails = Array.from({ length: 8 }, (_, i) => ({
  id: `thumb-${i + 1}`,
  label: `Image ${i + 1}`,
}))

export default function UltrasoundStudyPage() {
  const [currentImage, setCurrentImage] = useState(0)
  const [studyType, setStudyType] = useState("")

  return (
    <div className="flex h-[calc(100vh-73px)]">
      {/* Left Panel - Viewer */}
      <div className="flex-1 bg-gray-900 relative flex">
        {/* Thumbnail Strip */}
        <div className="w-20 bg-gray-800 p-2 space-y-2 overflow-y-auto">
          {thumbnails.map((thumb, index) => (
            <div
              key={thumb.id}
              className={`relative aspect-square rounded cursor-pointer border-2 transition-colors ${
                currentImage === index ? "border-blue-500" : "border-transparent"
              }`}
              onClick={() => setCurrentImage(index)}
            >
              <div className="absolute inset-0 bg-gray-700 rounded flex items-center justify-center">
                <span className="text-white/30 text-xs">{index + 1}</span>
              </div>
              <button
                className="absolute top-0.5 right-0.5 bg-black/60 text-white rounded-full p-0.5 opacity-0 hover:opacity-100 transition-opacity"
                onClick={(e) => {
                  e.stopPropagation()
                }}
              >
                <X className="w-3 h-3" />
              </button>
            </div>
          ))}
        </div>

        {/* Main Viewer */}
        <div className="flex-1 relative flex items-center justify-center">
          {/* Ultrasound display mock */}
          <div className="relative max-w-4xl w-full aspect-4/3 bg-black rounded-lg overflow-hidden mx-8">
            {/* Top info bar */}
            <div className="absolute top-0 left-0 right-0 bg-black/80 text-white text-xs p-2 flex justify-between">
              <div className="space-y-0.5">
                <p className="font-semibold">SonoScape</p>
                <p className="text-white/70">P40 Elite</p>
              </div>
              <div className="text-center">
                <p>DiagnoVet</p>
                <p className="text-white/70">10/24/2025 08:31:39</p>
              </div>
              <div className="text-center">
                <p>FLORA LOPEZ CORTI</p>
                <p className="text-white/70">20251020_115055_1536767</p>
              </div>
              <div className="text-right">
                <p>12Y C613 MI 1.1</p>
                <p className="text-white/70">ABD CAN M TIS 0.3</p>
              </div>
            </div>

            {/* Left side info */}
            <div className="absolute left-2 top-16 text-white text-xs space-y-1">
              <p>PS 40</p>
              <p>D/G 200/6</p>
              <p>GN 145</p>
              <p>D/P 3/20</p>
              <p>PWR 100</p>
              <p>FRQ 6.5-8.5</p>
              <p>D 6.0cm</p>
              <p>uS 5</p>
              <p>PHI 0.8</p>
            </div>

            {/* Ultrasound image area (simulated) */}
            <div className="absolute inset-0 flex items-center justify-center mt-12">
              <div className="w-3/4 h-3/4 relative">
                {/* Simulated ultrasound cone/sector */}
                <svg viewBox="0 0 300 250" className="w-full h-full">
                  <defs>
                    <radialGradient id="ultrasoundGrad" cx="50%" cy="0%" r="100%">
                      <stop offset="0%" stopColor="#3b3b3b" />
                      <stop offset="50%" stopColor="#2a2a2a" />
                      <stop offset="100%" stopColor="#1a1a1a" />
                    </radialGradient>
                  </defs>
                  <path d="M150,0 L30,250 L270,250 Z" fill="url(#ultrasoundGrad)" opacity="0.9" />
                  {/* Some noise/texture lines */}
                  <g stroke="#4a4a4a" strokeWidth="0.5" opacity="0.5">
                    <line x1="150" y1="20" x2="80" y2="200" />
                    <line x1="150" y1="20" x2="220" y2="200" />
                    <line x1="150" y1="20" x2="120" y2="180" />
                    <line x1="150" y1="20" x2="180" y2="180" />
                  </g>
                  {/* Measurement markers */}
                  <circle cx="120" cy="120" r="3" fill="#FFD700" />
                  <circle cx="180" cy="140" r="3" fill="#FFD700" />
                  <text x="150" y="180" fill="#00FFFF" fontSize="12" textAnchor="middle">
                    LNN GASTRIC
                  </text>
                </svg>
              </div>
            </div>

            {/* Right side measurements */}
            <div className="absolute right-2 top-16 text-white text-xs space-y-1 text-right">
              <p className="text-cyan-400">1 D: 12.50 mm</p>
              <p className="text-cyan-400">2 D: 17.20 mm</p>
            </div>

            {/* Scale markers */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col items-center gap-1 text-white text-xs">
              <span>-0</span>
              <div className="w-px h-20 bg-white/30" />
              <span>-</span>
              <div className="w-px h-20 bg-white/30" />
              <span>-5</span>
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            className="absolute left-28 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors"
            onClick={() => setCurrentImage(Math.max(0, currentImage - 1))}
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            className="absolute right-8 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors"
            onClick={() => setCurrentImage(Math.min(thumbnails.length - 1, currentImage + 1))}
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Image counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm">
            {currentImage + 1}/{thumbnails.length}
          </div>
        </div>
      </div>

      {/* Right Panel - Study Info */}
      <div className="w-[400px] bg-card border-l overflow-y-auto">
        <div className="p-4">
          <Accordion
            type="multiple"
            defaultValue={["study-type", "observations"]}
            className="space-y-4"
          >
            <AccordionItem value="study-type" className="border rounded-lg px-4">
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-teal" />
                  <span className="font-semibold">Study Type</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm text-muted-foreground">Exam Type</label>
                    <Select value={studyType} onValueChange={setStudyType}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="abdominal">Abdominal</SelectItem>
                        <SelectItem value="neck">Neck</SelectItem>
                        <SelectItem value="gestational">Gestational</SelectItem>
                        <SelectItem value="ocular">Ocular</SelectItem>
                        <SelectItem value="thoracic">Thoracic</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <RichTextMock placeholder="Type or dictate the presumptive diagnosis..." />
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="observations" className="border rounded-lg px-4">
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center gap-2">
                  <Eye className="w-5 h-5 text-teal" />
                  <span className="font-semibold">Initial Observations</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-6">
                <RichTextMock placeholder="Add your observations here..." />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  )
}
