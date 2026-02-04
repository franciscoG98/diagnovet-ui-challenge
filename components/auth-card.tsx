import React from "react"
import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"

interface AuthCardProps {
  children: React.ReactNode
  className?: string
}

export function AuthCard({ children, className }: AuthCardProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className={cn("w-full max-w-md shadow-lg", className)}>
        <CardContent className="pt-8 pb-8">{children}</CardContent>
      </Card>
    </div>
  )
}
