/**
 * Mock data for DiagnoVET UI Challenge
 *
 * @todo: USER_ACTION - Replace placeholder content with realistic veterinary data
 * Specifically:
 * - Add real ultrasound/scan images to the images arrays
 * - Update patient names and details to reflect real cases
 * - Add realistic diagnostic content
 */

import type {
  Patient,
  Guardian,
  Report,
  ScanImage,
  User,
  LabResult,
} from "./types"

// ============================================
// Current User (logged in veterinarian)
// ============================================

export const currentUser: User = {
  id: "user-1",
  firstName: "Fernanda",
  lastName: "Barbero",
  email: "fer.divet.test@gmail.com",
  phone: "4086504124",
  title: "DVM",
  license: "",
  clinicName: "DIVET Veterinary Diagnostic Center",
  // @todo: USER_ACTION - Add avatar image URL
  avatarUrl: undefined,
  // @todo: USER_ACTION - Add digital signature image URL
  signatureUrl: undefined,
}

// ============================================
// Sample Patients
// ============================================

export const patients: Patient[] = [
  {
    id: "patient-1",
    name: "Pony",
    species: "feline",
    breed: "European Shorthair",
    age: 10,
    ageUnit: "years",
    gender: "female",
    neutered: true,
    weight: 5,
    weightUnit: "kg",
    // @todo: USER_ACTION - Add patient photo URL
    imageUrl: undefined,
  },
  {
    id: "patient-2",
    name: "Eva",
    species: "canine",
    breed: "Mixed",
    age: 5,
    ageUnit: "years",
    gender: "female",
    neutered: false,
    weight: 12,
    weightUnit: "kg",
    imageUrl: undefined,
  },
  {
    id: "patient-3",
    name: "Luna",
    species: "canine",
    breed: "Golden Retriever",
    age: 3,
    ageUnit: "years",
    gender: "female",
    neutered: true,
    weight: 28,
    weightUnit: "kg",
    imageUrl: undefined,
  },
  {
    id: "patient-4",
    name: "Pulgita",
    species: "canine",
    breed: "Chihuahua",
    age: 8,
    ageUnit: "years",
    gender: "male",
    neutered: true,
    weight: 3,
    weightUnit: "kg",
    imageUrl: undefined,
  },
]

// ============================================
// Sample Guardians
// ============================================

export const guardians: Guardian[] = [
  {
    id: "guardian-1",
    name: "Nieto",
    email: "nieto@example.com",
    phone: "+1 555-0101",
  },
  {
    id: "guardian-2",
    name: "Martinez",
    email: "martinez@example.com",
    phone: "+1 555-0102",
  },
]

// ============================================
// Sample Scan Images
// @todo: USER_ACTION - Replace placeholder URLs with real ultrasound images
// ============================================

export const sampleImages: ScanImage[] = [
  {
    id: "img-1",
    url: "/placeholder-ultrasound-1.jpg",
    alt: "Abdominal ultrasound - Liver view",
    order: 1,
    metadata: {
      device: "SonoScape P40 Elite",
      timestamp: "2025-11-13T08:31:39",
    },
  },
  {
    id: "img-2",
    url: "/placeholder-ultrasound-2.jpg",
    alt: "Abdominal ultrasound - Spleen view",
    order: 2,
    metadata: {
      device: "SonoScape P40 Elite",
      timestamp: "2025-11-13T08:32:15",
    },
  },
  {
    id: "img-3",
    url: "/placeholder-ultrasound-3.jpg",
    alt: "Abdominal ultrasound - Gallbladder",
    order: 3,
    metadata: {
      device: "SonoScape P40 Elite",
      timestamp: "2025-11-13T08:33:00",
    },
  },
]

// ============================================
// Sample Reports
// ============================================

export const reports: Report[] = [
  {
    id: "report-1",
    patient: patients[0]!, // Pony
    guardian: guardians[0]!,
    studyType: "ultrasound",
    status: "completed",
    createdAt: "2025-11-13T08:00:00Z",
    updatedAt: "2025-11-13T10:30:00Z",
    veterinarian: "Dr. Fernanda Barbero",
    referringProfessional: "Cardozo Guadalupe",
    images: sampleImages,
    diagnosis: `• Multiple splenic nodules.
• Bilateral adrenomegaly with nodule in left adrenal gland.
• Gastric lymphadenomegaly.
• Inguinal hernia.`,
    findings: `Liver: Homogeneous parenchyma. Slightly granular texture. Smooth and regular contour, delineated by a thin hyperechoic capsule.

Gallbladder: Medium distension with anechoic content, with a volume of 6.61 cm³. Thin and smooth wall. Measures 41.54 mm x 15.70 mm x 19.35 mm.`,
  },
  {
    id: "report-2",
    patient: patients[1]!, // Eva
    guardian: guardians[0]!,
    studyType: "ultrasound",
    status: "in_progress",
    createdAt: "2025-11-20T09:00:00Z",
    updatedAt: "2025-11-20T09:15:00Z",
    veterinarian: "Dr. Fernanda Barbero",
    images: [],
    diagnosis: undefined,
    findings: undefined,
  },
  {
    id: "report-3",
    patient: patients[2]!, // Luna
    guardian: guardians[1]!,
    studyType: "ultrasound",
    status: "completed",
    createdAt: "2025-11-19T14:00:00Z",
    updatedAt: "2025-11-19T16:00:00Z",
    veterinarian: "Dr. Fernanda Barbero",
    images: sampleImages.slice(0, 2),
    diagnosis: "No significant abnormalities detected.",
    findings: "All organs within normal limits.",
  },
  {
    id: "report-4",
    patient: patients[3]!, // Pulgita
    guardian: guardians[0]!,
    studyType: "ultrasound",
    status: "in_progress",
    createdAt: "2025-11-19T10:00:00Z",
    updatedAt: "2025-11-19T10:30:00Z",
    veterinarian: "Dr. Fernanda Barbero",
    images: [],
    diagnosis: undefined,
    findings: undefined,
  },
]

// ============================================
// Sample Lab Results (for future expansion)
// ============================================

export const labResults: LabResult[] = [
  {
    id: "lab-1",
    testName: "RBC Count",
    value: 6.8,
    unit: "M/µL",
    referenceMin: 5.5,
    referenceMax: 8.5,
    flag: "normal",
    category: "Hematology",
  },
  {
    id: "lab-2",
    testName: "Hemoglobin",
    value: 15.2,
    unit: "g/dL",
    referenceMin: 12.0,
    referenceMax: 18.0,
    flag: "normal",
    category: "Hematology",
  },
  {
    id: "lab-3",
    testName: "BUN",
    value: 45,
    unit: "mg/dL",
    referenceMin: 7,
    referenceMax: 27,
    flag: "high",
    previousValue: 38,
    previousDate: "2025-10-15",
    category: "Renal",
  },
  {
    id: "lab-4",
    testName: "Creatinine",
    value: 2.8,
    unit: "mg/dL",
    referenceMin: 0.5,
    referenceMax: 1.8,
    flag: "critical",
    previousValue: 2.1,
    previousDate: "2025-10-15",
    category: "Renal",
  },
  {
    id: "lab-5",
    testName: "ALT",
    value: 52,
    unit: "U/L",
    referenceMin: 12,
    referenceMax: 118,
    flag: "normal",
    category: "Hepatic",
  },
]
