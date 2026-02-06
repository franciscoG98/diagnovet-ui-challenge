/**
 * Core type definitions for DiagnoVET UI
 * These interfaces define the structure for mock data
 */

// ============================================
// Patient Types
// ============================================

export type Species = "canine" | "feline" | "equine" | "exotic"
export type Gender = "male" | "female"

export interface Patient {
  id: string
  name: string
  species: Species
  breed: string
  age: number
  ageUnit: "years" | "months"
  gender: Gender
  neutered: boolean
  weight?: number
  weightUnit?: "kg" | "lb"
  // @todo: USER_ACTION - Add patient image URL here
  imageUrl?: string
}

export interface Guardian {
  id: string
  name: string
  email?: string
  phone?: string
}

// ============================================
// Report & Study Types
// ============================================

export type ReportStatus = "in_progress" | "completed" | "pending_review"
export type StudyType = "ultrasound" | "xray" | "lab" | "other"

export interface Report {
  id: string
  patient: Patient
  guardian: Guardian
  studyType: StudyType
  status: ReportStatus
  createdAt: string
  updatedAt: string
  veterinarian: string
  referringProfessional?: string
  // @todo: USER_ACTION - Add study images here
  images: ScanImage[]
  diagnosis?: string
  findings?: string
}

export interface ScanImage {
  id: string
  // @todo: USER_ACTION - Replace placeholder URL with real ultrasound image
  url: string
  alt: string
  thumbnail?: string
  order: number
  metadata?: {
    device?: string
    timestamp?: string
    patientId?: string
  }
}

// ============================================
// Lab Result Types (for future reference)
// ============================================

export type ResultFlag = "normal" | "low" | "high" | "critical"

export interface LabResult {
  id: string
  testName: string
  value: number
  unit: string
  referenceMin: number
  referenceMax: number
  flag: ResultFlag
  previousValue?: number
  previousDate?: string
  category: string
}

// ============================================
// User Types
// ============================================

export interface User {
  id: string
  firstName: string
  lastName: string
  email: string
  phone?: string
  title?: string
  license?: string
  clinicName: string
  // @@todo: USER_ACTION - Add user avatar and signature URLs
  avatarUrl?: string
  signatureUrl?: string
}
