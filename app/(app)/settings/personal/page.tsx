import { PageHeader } from "@/components/page-header"
import { SectionCard } from "@/components/section-card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { User, Mail, Phone, Calendar, Building2 } from "lucide-react"

export default function SettingsPersonalPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <PageHeader
        title="Configuración Personal"
        subtitle="Gestiona tu información personal y preferencias"
      />

      <div className="space-y-6">
        {/* Profile Summary */}
        <SectionCard
          title="Resumen del Perfil"
          subtitle="Tu información básica del perfil y detalles de la cuenta."
          icon={User}
          iconColor="bg-orange-100 text-orange-600"
        >
          <div className="flex items-center gap-6">
            <Avatar className="w-20 h-20">
              <AvatarFallback className="bg-purple-600 text-white text-2xl font-semibold">
                F
              </AvatarFallback>
            </Avatar>
            <div>
              <h4 className="text-xl font-semibold text-foreground">
                Fernanda Barbero
              </h4>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                <Calendar className="w-4 h-4" />
                Miembro desde 20/11/2025
              </div>
              <Badge
                variant="secondary"
                className="mt-2 bg-teal-light text-teal border-teal/20"
              >
                <Building2 className="w-3 h-3 mr-1" />
                DIVET Centro de diagnostico veterinario
              </Badge>
            </div>
          </div>
        </SectionCard>

        {/* Contact Information */}
        <SectionCard
          title="Información de Contacto"
          icon={Mail}
          iconColor="bg-blue-100 text-blue-600"
        >
          <div className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground mb-1">
                Correo electrónico
              </p>
              <p className="text-foreground">fer.divet.test@gmail.com</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Teléfono</p>
              <p className="text-foreground">4086504124</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Nombre</p>
              <p className="text-foreground">Fernanda</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Apellido</p>
              <p className="text-foreground">Barbero</p>
            </div>
          </div>
        </SectionCard>
      </div>
    </div>
  )
}
