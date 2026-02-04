"use client"

import React from "react"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Bold,
  Italic,
  Underline,
  List,
  ListOrdered,
  RemoveFormatting,
} from "lucide-react"

interface RichTextMockProps {
  placeholder?: string
  defaultValue?: string
  className?: string
  onChange?: (value: string) => void
}

export function RichTextMock({
  placeholder = "Escriba aquí...",
  defaultValue = "",
  className,
  onChange,
}: RichTextMockProps) {
  const [value, setValue] = useState(defaultValue)

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value)
    onChange?.(e.target.value)
  }

  return (
    <div className={cn("border rounded-lg overflow-hidden", className)}>
      {/* Toolbar */}
      <div className="flex items-center gap-1 p-2 border-b bg-muted/30">
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Bold className="w-4 h-4" />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Italic className="w-4 h-4" />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Underline className="w-4 h-4" />
        </Button>
        <div className="w-px h-6 bg-border mx-1" />
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <List className="w-4 h-4" />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <ListOrdered className="w-4 h-4" />
        </Button>
        <div className="w-px h-6 bg-border mx-1" />
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <RemoveFormatting className="w-4 h-4" />
        </Button>
      </div>
      {/* Editor area */}
      <textarea
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className="w-full min-h-[120px] p-3 resize-none focus:outline-none bg-transparent text-foreground placeholder:text-muted-foreground"
      />
    </div>
  )
}
