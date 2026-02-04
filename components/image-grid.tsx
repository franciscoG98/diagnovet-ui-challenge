"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { X } from "lucide-react"
import Image from "next/image"

export interface ImageItem {
  id: string
  src: string
  alt: string
}

interface ImageGridProps {
  images: ImageItem[]
  onRemove?: (id: string) => void
  className?: string
}

export function ImageGrid({ images, onRemove, className }: ImageGridProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null)

  return (
    <div className={cn("grid grid-cols-4 gap-2", className)}>
      {images.map((image, index) => (
        <div
          key={image.id}
          className={cn(
            "relative aspect-square rounded-lg overflow-hidden cursor-pointer border-2 transition-colors",
            selectedId === image.id ? "border-blue-500" : "border-transparent"
          )}
          onClick={() => setSelectedId(image.id)}
        >
          <Image
            src={image.src || "/placeholder.svg"}
            alt={image.alt}
            fill
            className="object-cover"
          />
          {/* Number badge */}
          <div className="absolute top-1 left-1 bg-blue-600 text-white text-xs font-medium px-1.5 py-0.5 rounded">
            {index + 1}
          </div>
          {/* Remove button */}
          {onRemove && (
            <button
              onClick={(e) => {
                e.stopPropagation()
                onRemove(image.id)
              }}
              className="absolute top-1 right-1 bg-black/60 text-white rounded-full p-0.5 hover:bg-black/80 transition-colors"
            >
              <X className="w-3 h-3" />
            </button>
          )}
        </div>
      ))}
    </div>
  )
}
