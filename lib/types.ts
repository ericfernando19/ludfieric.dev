export interface NavLink {
  label: string
  href: string
}

export interface Skill {
  name: string
  category: "frontend" | "backend" | "database" | "tools"
  level?: number
}

export interface Service {
  title: string
  description: string
  icon: string
}

export interface Project {
  title: string
  description: string
  tech: string[]
  image: string
  demoUrl?: string
  githubUrl?: string
}

export interface ProcessStep {
  step: number
  title: string
  description: string
}

export interface Testimonial {
  name: string
  role: string
  company: string
  content: string
  rating: number
  avatar: string
}

export interface SocialLink {
  label: string
  href: string
  icon: string
}

export type CertificateCategory =
  | "Web Development"
  | "Programming"
  | "Backend"
  | "Frontend"
  | "Database"
  | "Cloud"
  | "AI"

export interface Certificate {
  title: string
  organization: string
  issueDate: string
  category: CertificateCategory
  description: string
  image?: string
  certificateUrl?: string
  credentialUrl?: string
}
