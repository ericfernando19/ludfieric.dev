export interface NavLink {
  label: string
  href: string
}

export interface Skill {
  name: string
  category: "frontend" | "backend" | "database" | "tools"
}

export interface Project {
  title: string
  description: string
  tech: string[]
  image: string
  demoUrl?: string
  githubUrl?: string
}

export type CertificateCategory =
  | "Web Development"
  | "Programming"
  | "Backend"
  | "Frontend"
  | "Database"
  | "Cloud"
  | "AI"
  | "Mobile Development"
  | "Studi Independen"

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

export interface SocialLink {
  label: string
  href: string
  icon: string
}
