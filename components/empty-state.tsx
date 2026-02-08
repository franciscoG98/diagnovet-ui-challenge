import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { FileText, Plus, Search, Image, AlertCircle } from "lucide-react"
import Link from "next/link"
import { useTranslations } from "next-intl"
import { useParams } from "next/navigation"

interface EmptyStateProps {
  icon?: React.ReactNode
  title: string
  description: string
  action?: {
    label: string
    href?: string
    onClick?: () => void
  }
  className?: string
}

export function EmptyState({ icon, title, description, action, className }: EmptyStateProps) {
  return (
    <div className={cn("flex flex-col items-center justify-center py-16 text-center", className)}>
      <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
        {icon || <FileText className="w-8 h-8 text-muted-foreground" />}
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground max-w-sm mb-6">{description}</p>
      {action &&
        (action.href ? (
          <Link href={action.href}>
            <Button className="bg-teal text-teal-foreground hover:bg-teal/90 gap-2">
              <Plus className="w-4 h-4" />
              {action.label}
            </Button>
          </Link>
        ) : (
          <Button
            onClick={action.onClick}
            className="bg-teal text-teal-foreground hover:bg-teal/90 gap-2"
          >
            <Plus className="w-4 h-4" />
            {action.label}
          </Button>
        ))}
    </div>
  )
}

// Pre-configured empty states for common scenarios
export function NoReportsEmptyState() {

  const t = useTranslations("Dashboard")
  const params = useParams()
  const locale = params.locale


  return (
    <EmptyState
      icon={<FileText className="w-8 h-8 text-muted-foreground" />}
      title="No reports found"
      description="Create your first report to get started with DiagnovetAI"
      action={{ label: t("createNewReport"), href: `/${locale}/analyze` }}
    />
  )
}

export function NoSearchResultsEmptyState({ query }: { query: string }) {
  return (
    <EmptyState
      icon={<Search className="w-8 h-8 text-muted-foreground" />}
      title="No results found"
      description={`We couldn't find any reports matching "${query}". Try adjusting your search.`}
    />
  )
}

export function NoImagesEmptyState({ onUpload }: { onUpload?: () => void }) {
  return (
    <EmptyState
      icon={<Image className="w-8 h-8 text-muted-foreground" />}
      title="No images uploaded"
      description="Upload ultrasound images to start the analysis"
      action={{ label: "Upload Images", onClick: onUpload }}
    />
  )
}

export function ErrorState({
  title = "Something went wrong",
  description = "An error occurred while loading. Please try again.",
  onRetry,
}: {
  title?: string
  description?: string
  onRetry?: () => void
}) {

  const t = useTranslations("common")

  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mb-4">
        <AlertCircle className="w-8 h-8 text-destructive" />
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground max-w-sm mb-6">{description}</p>
      {onRetry && (
        <Button variant="outline" onClick={onRetry}>
          {t("tryAgain")}
        </Button>
      )}
    </div>
  )
}
