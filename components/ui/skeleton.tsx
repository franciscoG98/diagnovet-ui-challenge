import { cn } from "@/lib/utils"

interface SkeletonProps {
  className?: string
}

export function Skeleton({ className }: SkeletonProps) {
  return <div className={cn("animate-pulse rounded-md bg-muted/60", className)} />
}

export function TableSkeleton({ rows = 3 }: { rows?: number }) {
  return (
    <div className="border rounded-lg overflow-hidden">
      <div className="bg-muted/50 px-4 py-3 flex gap-4">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-4 w-28" />
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-4 w-20" />
      </div>
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} className="px-4 py-4 flex items-center gap-4 border-t">
          <div className="flex items-center gap-3">
            <Skeleton className="h-8 w-8 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-3 w-14" />
            </div>
          </div>
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-6 w-24 rounded-full" />
          <Skeleton className="h-4 w-28" />
          <div className="flex gap-2">
            <Skeleton className="h-8 w-20" />
            <Skeleton className="h-8 w-8" />
            <Skeleton className="h-8 w-8" />
          </div>
        </div>
      ))}
    </div>
  )
}

export function StatsCardSkeleton() {
  return (
    <div className="rounded-lg border bg-card p-6 space-y-3">
      <Skeleton className="h-4 w-24" />
      <Skeleton className="h-8 w-16" />
    </div>
  )
}

export function FormSkeleton() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-10 w-full" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-10 w-full" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Skeleton className="h-4 w-12" />
          <Skeleton className="h-10 w-full" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-10 w-full" />
        </div>
      </div>
      <Skeleton className="h-10 w-full" />
    </div>
  )
}

export function ImageGridSkeleton({ count = 8 }: { count?: number }) {
  return (
    <div className="grid grid-cols-4 gap-2">
      {Array.from({ length: count }).map((_, i) => (
        <Skeleton key={i} className="aspect-square rounded-lg" />
      ))}
    </div>
  )
}
