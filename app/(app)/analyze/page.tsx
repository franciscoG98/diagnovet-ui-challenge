"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Heart, Cloud, Trash2, ArrowRight, Lightbulb, X, Upload } from "lucide-react"

const analyzeSchema = z.object({
  fecha: z.string().min(1, "La fecha es requerida"),
  nombreAnimal: z.string().min(1, "El nombre del animal es requerido"),
  edad: z.string().min(1, "La edad es requerida"),
  unidadEdad: z.string().min(1, "La unidad es requerida"),
  especie: z.string().min(1, "La especie es requerida"),
  raza: z.string().optional(),
  peso: z.string().optional(),
  unidadPeso: z.string().optional(),
  genero: z.string().min(1, "El género es requerido"),
  castrado: z.boolean().optional(),
  profesionalDerivante: z.string().optional(),
  emailProfesional: z.string().optional(),
  tutor: z.string().min(1, "El tutor es requerido"),
  emailTutor: z.string().optional(),
  tipoEstudio: z.string().min(1, "El tipo de estudio es requerido"),
})

type AnalyzeFormData = z.infer<typeof analyzeSchema>

// Mock images data
const mockImages = Array.from({ length: 21 }, (_, i) => ({
  id: `img-${i + 1}`,
  src: `/placeholder.svg?height=100&width=100&text=${i + 1}`,
  alt: `Ultrasound image ${i + 1}`,
}))

export default function AnalyzePage() {
  const router = useRouter()
  const [hasImages, setHasImages] = useState(true)
  const [images, setImages] = useState(mockImages)

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<AnalyzeFormData>({
    resolver: zodResolver(analyzeSchema),
    defaultValues: {
      fecha: "13/11/2025",
      nombreAnimal: "Pony",
      edad: "10",
      unidadEdad: "years",
      especie: "felino",
      raza: "comun_europeo",
      peso: "5",
      unidadPeso: "kg",
      genero: "hembra",
      castrado: true,
      profesionalDerivante: "cardozo_guadalupe",
      emailProfesional: "veteocampo@gmail.com",
      tutor: "Nieto",
      tipoEstudio: "ecografia",
    },
  })

  const onSubmit = (data: AnalyzeFormData) => {
    console.log(data)
    router.push("/study/ultrasound")
  }

  const removeImage = (id: string) => {
    setImages(images.filter((img) => img.id !== id))
  }

  return (
    <div className="flex min-h-[calc(100vh-73px)]">
      {/* Left Panel - Form */}
      <div className="flex-1 p-6 bg-card border-r border-dashed">
        <div className="max-w-lg mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <Heart className="w-6 h-6 text-teal" />
            <h1 className="text-xl font-semibold text-foreground">Analizar Paciente</h1>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="fecha">
                  Fecha<span className="text-destructive">*</span>
                </Label>
                <Input
                  id="fecha"
                  {...register("fecha")}
                  className={errors.fecha ? "border-destructive" : ""}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="nombreAnimal">
                  Nombre Animal<span className="text-destructive">*</span>
                </Label>
                <Input
                  id="nombreAnimal"
                  {...register("nombreAnimal")}
                  className={errors.nombreAnimal ? "border-destructive" : ""}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="grid grid-cols-2 gap-2">
                <div className="space-y-2">
                  <Label htmlFor="edad">
                    Edad<span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="edad"
                    {...register("edad")}
                    className={errors.edad ? "border-destructive" : ""}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="unidadEdad">
                    Unidad<span className="text-destructive">*</span>
                  </Label>
                  <Select
                    defaultValue="years"
                    onValueChange={(v) => setValue("unidadEdad", v)}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="years">Año/s</SelectItem>
                      <SelectItem value="months">Mes/es</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="especie">
                  Especie<span className="text-destructive">*</span>
                </Label>
                <Select
                  defaultValue="felino"
                  onValueChange={(v) => setValue("especie", v)}
                >
                  <SelectTrigger className={errors.especie ? "border-destructive" : ""}>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="felino">Felino</SelectItem>
                    <SelectItem value="canino">Canino</SelectItem>
                    <SelectItem value="equino">Equino</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="raza">Raza</Label>
                <Select
                  defaultValue="comun_europeo"
                  onValueChange={(v) => setValue("raza", v)}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="comun_europeo">Comun Europeo</SelectItem>
                    <SelectItem value="persa">Persa</SelectItem>
                    <SelectItem value="siames">Siamés</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="space-y-2">
                  <Label htmlFor="peso">Peso</Label>
                  <Input id="peso" {...register("peso")} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="unidadPeso">Unidad</Label>
                  <Select
                    defaultValue="kg"
                    onValueChange={(v) => setValue("unidadPeso", v)}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="kg">kg</SelectItem>
                      <SelectItem value="lb">lb</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="genero">
                  Género<span className="text-destructive">*</span>
                </Label>
                <Select
                  defaultValue="hembra"
                  onValueChange={(v) => setValue("genero", v)}
                >
                  <SelectTrigger className={errors.genero ? "border-destructive" : ""}>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="hembra">Hembra</SelectItem>
                    <SelectItem value="macho">Macho</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-end pb-2">
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="castrado"
                    defaultChecked
                    onCheckedChange={(checked) =>
                      setValue("castrado", checked as boolean)
                    }
                  />
                  <Label htmlFor="castrado" className="cursor-pointer">
                    Castrado
                  </Label>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="profesionalDerivante">Profesional derivante</Label>
                <Select
                  defaultValue="cardozo_guadalupe"
                  onValueChange={(v) => setValue("profesionalDerivante", v)}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cardozo_guadalupe">Cardozo Guadalupe</SelectItem>
                    <SelectItem value="otro">Otro</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="emailProfesional">
                  Email del profesional<span className="text-destructive">*</span>
                </Label>
                <Input
                  id="emailProfesional"
                  {...register("emailProfesional")}
                  disabled
                  className="bg-muted"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="tutor">
                  Tutor<span className="text-destructive">*</span>
                </Label>
                <Input
                  id="tutor"
                  {...register("tutor")}
                  className={errors.tutor ? "border-destructive" : "bg-yellow-50"}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="emailTutor">Email del tutor</Label>
                <Input id="emailTutor" {...register("emailTutor")} />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="tipoEstudio">
                Tipo de estudio<span className="text-destructive">*</span>
              </Label>
              <Select
                defaultValue="ecografia"
                onValueChange={(v) => setValue("tipoEstudio", v)}
              >
                <SelectTrigger className={errors.tipoEstudio ? "border-destructive" : ""}>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ecografia">Ecografía</SelectItem>
                  <SelectItem value="radiografia">Radiografía</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button
              type="button"
              variant="outline"
              className="w-full bg-foreground text-background hover:bg-foreground/90"
              onClick={() => setHasImages(!hasImages)}
            >
              <Cloud className="w-4 h-4 mr-2" />
              Agregar imágenes
            </Button>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <Button
                type="button"
                variant="destructive"
                className="bg-red-500 hover:bg-red-600"
              >
                <Trash2 className="w-4 h-4 mr-2" />
                Limpiar
              </Button>
              <Button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-white"
              >
                Continuar
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </form>
        </div>
      </div>

      {/* Right Panel - Images */}
      <div className="w-full md:w-[400px] lg:w-[500px] bg-muted/30 p-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Imágenes ({images.length})</CardTitle>
            <p className="text-sm text-muted-foreground">Arrastra para reordenar</p>
          </CardHeader>
          <CardContent>
            {hasImages && images.length > 10 && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4 flex items-start gap-2">
                <Lightbulb className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                <p className="text-sm text-green-700">
                  Tienes muchas imágenes. El grid se ajusta automáticamente al ancho disponible.
                </p>
              </div>
            )}

            {hasImages && images.length > 0 ? (
              <div className="grid grid-cols-4 gap-2">
                {images.map((image, index) => (
                  <div
                    key={image.id}
                    className="relative aspect-square bg-gray-800 rounded-lg overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-gray-700 flex items-center justify-center">
                      <span className="text-white/50 text-xs">Ultrasound</span>
                    </div>
                    <div className="absolute top-1 left-1 bg-blue-600 text-white text-xs font-medium px-1.5 py-0.5 rounded">
                      {index + 1}
                    </div>
                    <button
                      type="button"
                      onClick={() => removeImage(image.id)}
                      className="absolute top-1 right-1 bg-black/60 text-white rounded-full p-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="border-2 border-dashed border-border rounded-lg p-12 flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center mb-4">
                  <Upload className="w-8 h-8 text-muted-foreground" />
                </div>
                <p className="text-muted-foreground">Upload images to start</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
