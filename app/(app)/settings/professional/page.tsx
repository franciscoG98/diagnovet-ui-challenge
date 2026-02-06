import { PageHeader } from "@/components/page-header"
import { SectionCard } from "@/components/section-card"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Briefcase, FileSignature, Globe, Pencil, Upload } from "lucide-react"

export default function SettingsProfessionalPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <PageHeader
        title="Professional Settings"
        subtitle="Manage your professional information and credentials"
      />

      <div className="space-y-6">
        {/* Professional Information */}
        <SectionCard
          title="Professional Information"
          subtitle="Manage your professional information and credentials."
          icon={Briefcase}
          iconColor="bg-blue-100 text-blue-600"
          action={
            <Button className="bg-teal text-teal-foreground hover:bg-teal/90 gap-2">
              <Pencil className="w-4 h-4" />
              Edit Profile
            </Button>
          }
        >
          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Display Name</p>
              <p className="text-foreground font-medium">Dr. Fernanda Barbero</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">License</p>
              <p className="text-foreground">-</p>
            </div>
          </div>
        </SectionCard>

        {/* Digital Signature */}
        <SectionCard
          title="Digital Signature"
          subtitle="Upload your digital signature for reports."
          icon={FileSignature}
          iconColor="bg-green-100 text-green-600"
          action={
            <Button variant="outline" className="gap-2 bg-transparent">
              <Upload className="w-4 h-4" />
              Add Signature
            </Button>
          }
        >
          <div className="border-2 border-dashed border-border rounded-lg p-12 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center mb-4">
              <FileSignature className="w-8 h-8 text-muted-foreground" />
            </div>
            <p className="text-foreground font-medium mb-1">No signature uploaded</p>
            <p className="text-sm text-muted-foreground">
              Upload a PNG, JPG, or BMP file to add your digital signature
            </p>
          </div>
        </SectionCard>

        {/* Language Preferences */}
        <SectionCard
          title="Language Preferences"
          subtitle="Choose your preferred language for the application interface."
          icon={Globe}
          iconColor="bg-purple-100 text-purple-600"
        >
          <div className="max-w-xs space-y-2">
            <Label htmlFor="language">Language</Label>
            <Select defaultValue="en">
              <SelectTrigger id="language">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="es">Español</SelectItem>
                <SelectItem value="pt">Português</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-xs text-muted-foreground">
              Select your preferred language for the interface
            </p>
          </div>
        </SectionCard>
      </div>
    </div>
  )
}
