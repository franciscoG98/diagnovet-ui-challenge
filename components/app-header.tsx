"use client"

import Link from "next/link"
import { BrandLogo } from "@/components/brand-logo"
import { UserMenu } from "@/components/user-menu"
import { CheckCircle2, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"

interface AppHeaderProps {
  userName?: string
  userClinic?: string
  userInitial?: string
}

export function AppHeader({
  userName = "Fernanda Barbero",
  userClinic = "DIVET VETERINARY DIAGNOSTIC CENTER",
  userInitial = "F",
}: AppHeaderProps) {
  return (
    <header className="bg-card border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/dashboard">
            <BrandLogo size="md" />
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/reports"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <CheckCircle2 className="w-4 h-4" />
              My Studies
            </Link>
            <Link href="/analyze">
              <Button variant="ghost" className="flex items-center gap-2 text-sm">
                <Plus className="w-4 h-4" />
                New Report
              </Button>
            </Link>
          </nav>

          <UserMenu userName={userName} userClinic={userClinic} userInitial={userInitial} />
        </div>
      </div>
    </header>
  )
}
