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
import { ArrowRight, Loader2 } from "lucide-react"
import { useState } from "react"
import { useTranslations } from "next-intl"

const clinicSchema = z.object({
  legalName: z.string().min(1, "required"),
  address: z.string().min(1, "required"),
  phone: z.string().min(1, "required"),
})

type ClinicFormData = z.infer<typeof clinicSchema>

export default function OnboardingClinicPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ClinicFormData>({
    resolver: zodResolver(clinicSchema),
  })

  const onSubmit = async (data: ClinicFormData) => {
    setIsLoading(true)
    console.log(data)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    router.push("/onboarding/profile")
  }

  const t = useTranslations("Auth")

  return (
    <OnboardingShell
      title={t("titleClinic")}
      subtitle={t("subtitleClinic")}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div className="space-y-2">
          <Label htmlFor="legalName">
            {t("legalName")} <span className="text-destructive">*</span>
          </Label>
          <Input
            id="legalName"
            placeholder="E.g: Veterinary Clinic San Juan"
            {...register("legalName")}
            className={errors.legalName ? "border-destructive" : ""}
          />
          {errors.legalName && (
            <p className="text-sm text-destructive">{t("required")}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="address">
            {t("address")} <span className="text-destructive">*</span>
          </Label>
          <Input
            id="address"
            placeholder="E.g: Main Ave 123, City"
            {...register("address")}
            className={errors.address ? "border-destructive" : ""}
          />
          {errors.address && <p className="text-sm text-destructive">{t("required")}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">
            {t("phone")} <span className="text-destructive">*</span>
          </Label>
          <Input
            id="phone"
            placeholder="E.g: +1 555 123-4567"
            {...register("phone")}
            className={errors.phone ? "border-destructive" : ""}
          />
          {errors.phone && <p className="text-sm text-destructive">{t("required")}</p>}
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
          items={[t("infoItems.identify"), t("infoItems.facilitate"), t("infoItems.comply") ]}
        />
      </form>
    </OnboardingShell>
  )
}
