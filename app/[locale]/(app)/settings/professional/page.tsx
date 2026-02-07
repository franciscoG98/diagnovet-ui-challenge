import { PageHeader } from "@/components/page-header"
import { SectionCard } from "@/components/section-card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Briefcase, FileSignature, Globe, Pencil, Upload } from "lucide-react"
import { useTranslations } from "next-intl"
import { LocaleSwitcher } from "@/components/locale-switcher"

export default function SettingsProfessionalPage() {
  const t = useTranslations('SettingsProfessionalPage')

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <PageHeader
        title={t('title')}
        subtitle={t('subtitle')}
      />

      <div className="space-y-6">
        {/* Professional Information */}
        <SectionCard
          title={t('professionalInformation.title')}
          subtitle={t('professionalInformation.subtitle')}
          icon={Briefcase}
          iconColor="bg-blue-100 text-blue-600"
          action={
            <Button className="bg-teal text-teal-foreground hover:bg-teal/90 gap-2">
              <Pencil className="w-4 h-4" />
              {t('professionalInformation.editProfile')}
            </Button>
          }
        >
          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="text-sm text-muted-foreground mb-1">{t('professionalInformation.displayName')}</p>
              <p className="text-foreground font-medium">Dr. Fernanda Barbero</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">{t('professionalInformation.license')}</p>
              <p className="text-foreground">-</p>
            </div>
          </div>
        </SectionCard>

        {/* Digital Signature */}
        <SectionCard
          title={t('digitalSignature.title')}
          subtitle={t('digitalSignature.subtitle')}
          icon={FileSignature}
          iconColor="bg-green-100 text-green-600"
          action={
            <Button variant="outline" className="gap-2 bg-transparent">
              <Upload className="w-4 h-4" />
              {t('digitalSignature.addSignature')}
            </Button>
          }
        >
          <div className="border-2 border-dashed border-border rounded-lg p-12 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center mb-4">
              <FileSignature className="w-8 h-8 text-muted-foreground" />
            </div>
            <p className="text-foreground font-medium mb-1">{t('digitalSignature.noSignature')}</p>
            <p className="text-sm text-muted-foreground">
              {t('digitalSignature.uploadDescription')}
            </p>
          </div>
        </SectionCard>

        {/* Language Preferences */}
        <SectionCard
          title={t('languagePreferences.title')}
          subtitle={t('languagePreferences.subtitle')}
          icon={Globe}
          iconColor="bg-purple-100 text-purple-600"
        >
          <div className="max-w-xs space-y-2">
            <Label htmlFor="language">{t('languagePreferences.label')}</Label>
            <LocaleSwitcher />
            <p className="text-xs text-muted-foreground">
              {t('languagePreferences.description')}
            </p>
          </div>
        </SectionCard>
      </div>
    </div>
  )
}
