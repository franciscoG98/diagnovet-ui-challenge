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
  date: z.string().min(1, "Date is required"),
  animalName: z.string().min(1, "Animal name is required"),
  age: z.string().min(1, "Age is required"),
  ageUnit: z.string().min(1, "Unit is required"),
  species: z.string().min(1, "Species is required"),
  breed: z.string().optional(),
  weight: z.string().optional(),
  weightUnit: z.string().optional(),
  gender: z.string().min(1, "Gender is required"),
  neutered: z.boolean().optional(),
  referringProfessional: z.string().optional(),
  professionalEmail: z.string().optional(),
  guardian: z.string().min(1, "Guardian is required"),
  guardianEmail: z.string().optional(),
  studyType: z.string().min(1, "Study type is required"),
})

type AnalyzeFormData = z.infer<typeof analyzeSchema>

// @todo: USER_ACTION - Replace placeholder images with real ultrasound images
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
      date: "11/13/2025",
      animalName: "Pony",
      age: "10",
      ageUnit: "years",
      species: "feline",
      breed: "european_shorthair",
      weight: "5",
      weightUnit: "kg",
      gender: "female",
      neutered: true,
      referringProfessional: "cardozo_guadalupe",
      professionalEmail: "veteocampo@gmail.com",
      guardian: "Nieto",
      studyType: "ultrasound",
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
            <h1 className="text-xl font-semibold text-foreground">Analyze patient</h1>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="date">
                  Date<span className="text-destructive">*</span>
                </Label>
                <Input
                  id="date"
                  {...register("date")}
                  className={errors.date ? "border-destructive" : ""}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="animalName">
                  Animal Name<span className="text-destructive">*</span>
                </Label>
                <Input
                  id="animalName"
                  {...register("animalName")}
                  className={errors.animalName ? "border-destructive" : ""}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="grid grid-cols-2 gap-2">
                <div className="space-y-2">
                  <Label htmlFor="age">
                    Age<span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="age"
                    {...register("age")}
                    className={errors.age ? "border-destructive" : ""}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="ageUnit">
                    Unit<span className="text-destructive">*</span>
                  </Label>
                  <Select defaultValue="years" onValueChange={(v) => setValue("ageUnit", v)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="years">Year(s)</SelectItem>
                      <SelectItem value="months">Month(s)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="species">
                  Species<span className="text-destructive">*</span>
                </Label>
                <Select defaultValue="feline" onValueChange={(v) => setValue("species", v)}>
                  <SelectTrigger className={errors.species ? "border-destructive" : ""}>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="feline">Feline</SelectItem>
                    <SelectItem value="canine">Canine</SelectItem>
                    <SelectItem value="equine">Equine</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="breed">Breed</Label>
                <Select
                  defaultValue="european_shorthair"
                  onValueChange={(v) => setValue("breed", v)}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="european_shorthair">European Shorthair</SelectItem>
                    <SelectItem value="persian">Persian</SelectItem>
                    <SelectItem value="siamese">Siamese</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="space-y-2">
                  <Label htmlFor="weight">Weight</Label>
                  <Input id="weight" {...register("weight")} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="weightUnit">Unit</Label>
                  <Select defaultValue="kg" onValueChange={(v) => setValue("weightUnit", v)}>
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
                <Label htmlFor="gender">
                  Gender<span className="text-destructive">*</span>
                </Label>
                <Select defaultValue="female" onValueChange={(v) => setValue("gender", v)}>
                  <SelectTrigger className={errors.gender ? "border-destructive" : ""}>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="male">Male</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-end pb-2">
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="neutered"
                    defaultChecked
                    onCheckedChange={(checked) => setValue("neutered", checked as boolean)}
                  />
                  <Label htmlFor="neutered" className="cursor-pointer">
                    Neutered
                  </Label>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="referringProfessional">Referring Professional</Label>
                <Select
                  defaultValue="cardozo_guadalupe"
                  onValueChange={(v) => setValue("referringProfessional", v)}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cardozo_guadalupe">Cardozo Guadalupe</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="professionalEmail">
                  Professional Email<span className="text-destructive">*</span>
                </Label>
                <Input
                  id="professionalEmail"
                  {...register("professionalEmail")}
                  disabled
                  className="bg-muted"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="guardian">
                  Guardian<span className="text-destructive">*</span>
                </Label>
                <Input
                  id="guardian"
                  {...register("guardian")}
                  className={errors.guardian ? "border-destructive" : "bg-yellow-50"}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="guardianEmail">Guardian Email</Label>
                <Input id="guardianEmail" {...register("guardianEmail")} />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="studyType">
                Study Type<span className="text-destructive">*</span>
              </Label>
              <Select defaultValue="ultrasound" onValueChange={(v) => setValue("studyType", v)}>
                <SelectTrigger className={errors.studyType ? "border-destructive" : ""}>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ultrasound">Ultrasound</SelectItem>
                  <SelectItem value="xray">X-Ray</SelectItem>
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
              Add Images
            </Button>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <Button type="button" variant="destructive" className="bg-red-500 hover:bg-red-600">
                <Trash2 className="w-4 h-4 mr-2" />
                Clear
              </Button>
              <Button type="submit" className="bg-green-500 hover:bg-green-600 text-white">
                Continue
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
            <CardTitle className="text-lg">Images ({images.length})</CardTitle>
            <p className="text-sm text-muted-foreground">Drag to reorder</p>
          </CardHeader>
          <CardContent>
            {hasImages && images.length > 10 && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-3 border-l-4 border-l-green-600 mb-4 flex items-start gap-2">
                <Lightbulb className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                <p className="text-sm text-green-700">
                  You have many images. The grid adjusts automatically to the available width.
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
