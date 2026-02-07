"use client"

import { useRouter } from "@/i18n/routing"
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
import { useTranslations } from "next-intl"

const profileSchema = z.object({
  phone: z.string().min(1, "Phone number is required"),
  professionalTitle: z.string().min(1, "Professional title is required"),
  fullName: z.string().min(1, "Full name is required"),
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

  const t = useTranslations("Auth")

  return (
    <OnboardingShell
      title={t("titleClinic")}
      subtitle={t("subtitleProfile")}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div className="space-y-2">
          <Label htmlFor="phone">
            {t("phone")} <span className="text-destructive">*</span>
          </Label>
          <Input
            id="phone"
            {...register("phone")}
            className={errors.phone ? "border-destructive" : ""}
          />
          {errors.phone && <p className="text-sm text-destructive">{t("required")}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="professionalTitle">
            {t("professionalTitle")} <span className="text-destructive">*</span>
          </Label>
          <Select onValueChange={(value) => setValue("professionalTitle", value)}>
            <SelectTrigger className={errors.professionalTitle ? "border-destructive" : ""}>
              <SelectValue placeholder="Select a title" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="dvm">{t("professionalTitleOptions.dvm")}</SelectItem>
              <SelectItem value="mvz">{t("professionalTitleOptions.mvz")}</SelectItem>
              <SelectItem value="technician">{t("professionalTitleOptions.technician")}</SelectItem>
              <SelectItem value="other">{t("professionalTitleOptions.other")}</SelectItem>
            </SelectContent>
          </Select>
          {errors.professionalTitle && (
            <p className="text-sm text-destructive">{t("required")}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="fullName">
            {t("fullName")} <span className="text-destructive">*</span>
          </Label>
          <Input
            id="fullName"
            {...register("fullName")}
            className={errors.fullName ? "border-destructive" : ""}
          />
          {errors.fullName && <p className="text-sm text-destructive">{t("required")}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="license">{t("license")}</Label>
          <Input id="license" placeholder="E.g: MP 12345" {...register("license")} />
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
              {t("continue")}
              <ArrowRight className="w-4 h-4 ml-2" />
            </>
          )}
        </Button>

        <InfoBox
          title={t("info")}
          items={[t("infoItemsProfessional.perzonalize"), t("infoItemsProfessional.show"), t("infoItemsProfessional.generate")]}
        />
      </form>
    </OnboardingShell>
  )
}
