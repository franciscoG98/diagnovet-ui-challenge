import { cn } from "@/lib/utils"

interface BrandLogoProps {
  className?: string
  size?: "sm" | "md" | "lg"
}

export function BrandLogo({ className, size = "md" }: BrandLogoProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  }

  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(sizeClasses[size], className)}
    >
      {/* Paw pads */}
      <ellipse cx="20" cy="12" rx="6" ry="7" fill="#2DD4BF" />
      <ellipse cx="44" cy="12" rx="6" ry="7" fill="#2DD4BF" />
      <ellipse cx="10" cy="28" rx="5" ry="6" fill="#2DD4BF" />
      <ellipse cx="54" cy="28" rx="5" ry="6" fill="#2DD4BF" />
      {/* Main pad with stethoscope */}
      <path
        d="M32 24C18 24 14 38 14 46C14 54 22 60 32 60C42 60 50 54 50 46C50 38 46 24 32 24Z"
        fill="#2DD4BF"
      />
      {/* Stethoscope */}
      <path
        d="M26 38C26 38 24 44 28 48C32 52 36 48 36 44C36 40 34 36 32 36C30 36 26 38 26 38Z"
        stroke="white"
        strokeWidth="2"
        fill="none"
      />
      <circle cx="32" cy="50" r="3" fill="white" />
      <path d="M28 32V36M36 32V36" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}
