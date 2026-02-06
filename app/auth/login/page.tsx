"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { AuthCard } from "@/components/auth-card"
import { BrandLogo } from "@/components/brand-logo"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader2 } from "lucide-react"

const loginSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email"),
})

type LoginFormData = z.infer<typeof loginSchema>

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  })

  const router = useRouter()

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    console.log(data)
    setIsLoading(false)
    router.push("/dashboard")
  }

  return (
    <AuthCard>
      <div className="flex flex-col items-center">
        <BrandLogo size="lg" className="mb-6" />
        <h1 className="text-xl font-semibold text-foreground mb-6">Sign in to DiagnovetAI</h1>

        {/* Loading status bar */}
        {isLoading && (
          <div className="w-full border rounded-lg p-3 flex items-center gap-3 mb-6 bg-muted/30">
            <Loader2 className="w-5 h-5 animate-spin text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Processing…</span>
          </div>
        )}

        {/* Decorative separator */}
        <div className="flex items-center w-full mb-6">
          <div className="flex-1 h-px bg-border" />
          <div className="w-2 h-2 rounded-full bg-border mx-3" />
          <div className="flex-1 h-px bg-border" />
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email or username</Label>
            <Input
              id="email"
              type="text"
              placeholder="Email or username"
              {...register("email")}
              className={errors.email ? "border-destructive" : ""}
            />
            {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
          </div>

          <Button
            type="submit"
            className="w-full bg-teal text-teal-foreground hover:bg-teal/90"
            disabled={isLoading}
          >
            {isLoading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
            Continue
          </Button>
        </form>

        <p className="text-sm text-muted-foreground mt-6">
          Don&apos;t have an account?{" "}
          <Link href="/onboarding/clinic" className="text-teal hover:underline font-medium">
            Sign up for DiagnovetAI
          </Link>
        </p>
      </div>
    </AuthCard>
  )
}
