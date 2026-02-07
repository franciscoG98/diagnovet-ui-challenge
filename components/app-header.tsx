"use client"

import { Link } from "@/i18n/routing"
import { BrandLogo } from "@/components/brand-logo"
import { UserMenu } from "@/components/user-menu"
import { CheckCircle2, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LocaleSwitcher } from "./locale-switcher"
import { useTranslations } from "next-intl"
import { useParams } from "next/navigation"

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

  const t = useTranslations("navigation")

  const params = useParams()
  const locale = params.locale

  return (
    <header className="bg-card border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href={`/${locale}/dashboard`}>
            <BrandLogo size="md" />
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link
              href={`/${locale}/reports`}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <CheckCircle2 className="w-4 h-4" />
              {t("myStudies")}
            </Link>
            <Link href={`/${locale}/analyze`}>
              <Button variant="ghost" className="flex items-center gap-2 text-sm">
                <Plus className="w-4 h-4" />
                {t("newReport")}
              </Button>
            </Link>
          </nav>

          <div className="flex gap-2 items-center justify-center">
            <UserMenu userName={userName} userClinic={userClinic} userInitial={userInitial} />
            <LocaleSwitcher />
          </div>
        </div>
      </div>
    </header>
  )
}
