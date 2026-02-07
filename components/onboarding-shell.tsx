"use client"

import React from "react"

import { BrandLogo } from "@/components/brand-logo"
import { cn } from "@/lib/utils"
import { LocaleSwitcher } from "@/components/locale-switcher"

interface OnboardingShellProps {
  children: React.ReactNode
  title: string
  subtitle: string
  className?: string
}

export function OnboardingShell({ children, title, subtitle, className }: OnboardingShellProps) {
  return (
    <div className="min-h-screen bg-background relative">
      <div className="absolute top-4 right-4 w-[180px]">
        <LocaleSwitcher />
      </div>
      <div className="flex justify-center pt-8 pb-4">
        <BrandLogo size="lg" />
      </div>
      <div className="text-center mb-8">
        <h1 className="text-2xl font-semibold text-foreground">{title}</h1>
        <p className="text-muted-foreground mt-2 max-w-md mx-auto">{subtitle}</p>
      </div>
      <div
        className={cn(
          "max-w-5xl mx-auto px-4 pb-12 grid md:grid-cols-2 gap-8 items-start",
          className
        )}
      >
        {/* Left illustration */}
        <div className="hidden md:flex items-center justify-center">
          <div className="relative w-full max-w-sm aspect-square bg-teal-light rounded-3xl flex items-center justify-center">
            <svg
              viewBox="0 0 200 200"
              className="w-3/4 h-3/4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Simple dog illustration */}
              <ellipse cx="100" cy="140" rx="60" ry="40" fill="#2DD4BF" opacity="0.3" />
              <circle cx="100" cy="90" r="50" fill="#E0F2F1" />
              <circle cx="85" cy="80" r="6" fill="#1F2937" />
              <circle cx="115" cy="80" r="6" fill="#1F2937" />
              <ellipse cx="100" cy="100" rx="12" ry="8" fill="#1F2937" />
              <path
                d="M88 110 Q100 120 112 110"
                stroke="#1F2937"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
              {/* Ears */}
              <ellipse cx="55" cy="60" rx="20" ry="30" fill="#B8E8E0" />
              <ellipse cx="145" cy="60" rx="20" ry="30" fill="#B8E8E0" />
            </svg>
          </div>
        </div>
        {/* Right form */}
        <div className="bg-card rounded-xl shadow-sm border p-6">{children}</div>
      </div>
    </div>
  )
}
