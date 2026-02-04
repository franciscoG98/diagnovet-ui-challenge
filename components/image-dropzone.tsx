"use client"

import React from "react"

import { cn } from "@/lib/utils"
import { Upload } from "lucide-react"

interface ImageDropzoneProps {
  className?: string
  onFilesSelected?: (files: FileList) => void
}

export function ImageDropzone({ className, onFilesSelected }: ImageDropzoneProps) {
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    if (e.dataTransfer.files && onFilesSelected) {
      onFilesSelected(e.dataTransfer.files)
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  return (
    <div
      className={cn(
        "border-2 border-dashed border-border rounded-lg p-8 flex flex-col items-center justify-center text-center hover:border-muted-foreground/50 transition-colors cursor-pointer",
        className
      )}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center mb-4">
        <Upload className="w-8 h-8 text-muted-foreground" />
      </div>
      <p className="text-muted-foreground font-medium mb-1">No hay firma cargada</p>
      <p className="text-sm text-muted-foreground">
        Sube un archivo PNG, JPG o BMP para agregar tu firma digital
      </p>
    </div>
  )
}
