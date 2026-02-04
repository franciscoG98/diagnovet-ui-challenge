"use client"

import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { OnboardingShell } from "@/components/onboarding-shell"
import { InfoBox } from "@/components/info-box"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ArrowRight, Loader2 } from "lucide-react"
import { useState } from "react"

const profileSchema = z.object({
  phone: z.string().min(1, "El teléfono es requerido"),
  professionalTitle: z.string().min(1, "El título profesional es requerido"),
  fullName: z.string().min(1, "El nombre completo es requerido"),
  license: z.string().optional(),
})

type ProfileFormData = z.infer<typeof profileSchema>

export default function OnboardingProfilePage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      phone: "408",
      fullName: "Fernanda Barbero",
    },
  })

  const onSubmit = async (data: ProfileFormData) => {
    setIsLoading(true)
    console.log(data)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    router.push("/dashboard")
  }

  return (
    <OnboardingShell
      title="Almost done…"
      subtitle="We need to ask you for a couple more details to improve the experience:"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div className="space-y-2">
          <Label htmlFor="phone">
            Phone Number <span className="text-destructive">*</span>
          </Label>
          <Input
            id="phone"
            {...register("phone")}
            className={errors.phone ? "border-destructive" : ""}
          />
          {errors.phone && (
            <p className="text-sm text-destructive">{errors.phone.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="professionalTitle">
            Professional Title <span className="text-destructive">*</span>
          </Label>
          <Select onValueChange={(value) => setValue("professionalTitle", value)}>
            <SelectTrigger className={errors.professionalTitle ? "border-destructive" : ""}>
              <SelectValue placeholder="Select a title" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="dvm">DVM (Doctor of Veterinary Medicine)</SelectItem>
              <SelectItem value="mvz">MVZ (Médico Veterinario Zootecnista)</SelectItem>
              <SelectItem value="technician">Veterinary Technician</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
          {errors.professionalTitle && (
            <p className="text-sm text-destructive">{errors.professionalTitle.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="fullName">
            Full Name <span className="text-destructive">*</span>
          </Label>
          <Input
            id="fullName"
            {...register("fullName")}
            className={errors.fullName ? "border-destructive" : ""}
          />
          {errors.fullName && (
            <p className="text-sm text-destructive">{errors.fullName.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="license">Professional License (Optional)</Label>
          <Input
            id="license"
            placeholder="E.g: MP 12345"
            {...register("license")}
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-teal text-teal-foreground hover:bg-teal/90"
          disabled={isLoading}
        >
          {isLoading ? (
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
          ) : (
            <>
              Continue
              <ArrowRight className="w-4 h-4 ml-2" />
            </>
          )}
        </Button>

        <InfoBox
          title="Why do we need this information?"
          items={[
            "Personalize profile",
            "Show credentials",
            "Generate reports",
          ]}
        />
      </form>
    </OnboardingShell>
  )
}
