import type {
  NavLink,
  Skill,
  Service,
  Project,
  ProcessStep,
  Testimonial,
} from "./types";

export const SITE_CONFIG = {
  name: "Ludfi Eric Fernando",
  title: "Web Developer",
  tagline:
    "Membangun Website Modern, Cepat, dan Profesional untuk Bisnis dan Personal Brand.",
  description:
    "Saya adalah seorang Web Developer yang berfokus pada pengembangan website modern, responsif, dan berkinerja tinggi. Saya membantu UMKM, bisnis, organisasi, dan personal brand membangun kehadiran digital yang profesional melalui website yang menarik, cepat, dan mudah digunakan.",
  email: "ericludfi19@gmail.com",
  phone: "628583280038",
  whatsapp: "628583280038",
  github: "https://github.com/ericfernando19",
  linkedin: "https://www.linkedin.com/in/ludfi-eric-fernando-9b8a2523b/",
} as const;

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export const SKILLS: Skill[] = [
  { name: "HTML5", category: "frontend", level: 95 },
  { name: "CSS3", category: "frontend", level: 92 },
  { name: "JavaScript", category: "frontend", level: 88 },
  { name: "TypeScript", category: "frontend", level: 82 },
  { name: "React", category: "frontend", level: 85 },
  { name: "Next.js", category: "frontend", level: 80 },
  { name: "Tailwind CSS", category: "frontend", level: 90 },
  { name: "PHP", category: "backend", level: 78 },
  { name: "Laravel", category: "backend", level: 75 },
  { name: "REST API", category: "backend", level: 60 },
  { name: "MySQL", category: "database", level: 82 },
  { name: "PostgreSQL", category: "database", level: 65 },
  { name: "Git", category: "tools", level: 85 },
  { name: "GitHub", category: "tools", level: 85 },
  { name: "VS Code", category: "tools", level: 90 },
  { name: "Figma", category: "tools", level: 70 },
];

export const SERVICES: Service[] = [
  {
    title: "Company Profile Website",
    description: "Website profesional untuk perusahaan dan bisnis.",
    icon: "Building2",
  },
  {
    title: "Landing Page",
    description: "Landing page untuk promosi produk atau jasa.",
    icon: "Layout",
  },
  {
    title: "Website UMKM",
    description: "Website untuk membantu UMKM berkembang secara digital.",
    icon: "Store",
  },
  {
    title: "Website Portofolio",
    description: "Website personal branding profesional.",
    icon: "UserCheck",
  },
  {
    title: "Sistem Informasi",
    description: "Website berbasis dashboard dan manajemen data.",
    icon: "Database",
  },
  {
    title: "Website Custom",
    description: "Pengembangan website sesuai kebutuhan klien.",
    icon: "Code2",
  },
];

export const PROJECTS: Project[] = [
  {
    title: "Company Profile Coffee Shop",
    description:
      "Website company profile premium dengan tampilan modern, responsive, dan elegan.",
    tech: ["Next.js", "Tailwind CSS"],
    image: "/coffeshop.png",
    demoUrl: "#",
    githubUrl: "https://github.com/ericfernando19/company-profile-coffeeshop",
  },
  {
    title: "Sistem Kasir Restoran",
    description:
      "Website sistem kasir restoran modern dengan fitur transaksi, manajemen menu, meja, dan laporan penjualan.",
    tech: ["Laravel", "MySQL"],
    image: "/kasir-restoran.png",
    demoUrl: "#",
    githubUrl: "https://github.com/ericfernando19/Sistem_Kasir_Restoran",
  },
  // {
  //   title: "Website Katalog Produk",
  //   description:
  //     "Katalog produk interaktif dengan filter dan pencarian real-time.",
  //   tech: ["Next.js", "TypeScript"],
  //   image: "/project-placeholder.svg",
  //   demoUrl: "#",
  //   githubUrl: "#",
  // },
  {
    title: "Sistem Informasi Sekolah(SPADA)",
    description:
      "Sistem informasi akademik untuk manajemen data siswa, guru, dan nilai.",
    tech: ["Laravel", "Bootstrap"],
    image: "/spada.png",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Website Rental Mobil",
    description:
      "Platform rental mobil modern dengan fitur katalog kendaraan, booking online, kalkulasi harga otomatis, dashboard admin, dan integrasi WhatsApp untuk memudahkan pengelolaan penyewaan kendaraan.",
    tech: ["Laravel", "MySQL", "Bootstrap 5", "JavaScript"],
    image: "/rencar.png",
    demoUrl: "#",
    githubUrl: "https://github.com/ericfernando19/Sistem-Rental-Mobil",
  },
];

export const WHY_CHOOSE_ME = [
  {
    title: "Responsive Design",
    description: "Website optimal di semua perangkat.",
    icon: "Smartphone",
  },
  {
    title: "Fast Performance",
    description: "Optimasi kecepatan loading maksimal.",
    icon: "Zap",
  },
  {
    title: "SEO Friendly",
    description: "Struktur kode yang ramah mesin pencari.",
    icon: "Search",
  },
  {
    title: "Clean Code",
    description: "Kode yang rapi, terstruktur, dan mudah dikelola.",
    icon: "FileCode",
  },
  {
    title: "Modern UI/UX",
    description: "Desain antarmuka yang modern dan intuitif.",
    icon: "Palette",
  },
  {
    title: "Secure Development",
    description: "Praktik pengembangan yang aman dan terpercaya.",
    icon: "Shield",
  },
  {
    title: "Scalable Architecture",
    description: "Arsitektur yang dapat berkembang sesuai kebutuhan.",
    icon: "Layers",
  },
  {
    title: "Ongoing Support",
    description: "Dukungan dan pemeliharaan berkelanjutan.",
    icon: "Headphones",
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: "Diskusi Kebutuhan",
    description: "Memahami tujuan, visi, dan kebutuhan spesifik proyek Anda.",
  },
  {
    step: 2,
    title: "Perancangan UI/UX",
    description: "Membuat desain antarmuka yang menarik dan mudah digunakan.",
  },
  {
    step: 3,
    title: "Development",
    description:
      "Mengembangkan website dengan kode berkualitas tinggi dan teknologi modern.",
  },
  {
    step: 4,
    title: "Testing",
    description:
      "Pengujian menyeluruh untuk memastikan performa, keamanan, dan kompatibilitas.",
  },
  {
    step: 5,
    title: "Deployment",
    description:
      "Meluncurkan website ke production dengan proses deployment yang aman.",
  },
  {
    step: 6,
    title: "Maintenance",
    description: "Pemeliharaan berkala dan dukungan teknis berkelanjutan.",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Ahmad Rizki",
    role: "Owner",
    company: "Rizki Bakery",
    content:
      "Luar biasa! Website company profile yang dibuat sangat profesional dan meningkatkan kepercayaan pelanggan. Pelayanan cepat dan komunikatif.",
    rating: 5,
    avatar: "/avatar-placeholder.svg",
  },
  {
    name: "Dewi Sartika",
    role: "Founder",
    company: "Dewi Fashion",
    content:
      "Sistem kasir yang dibuat sangat membantu operasional toko saya. Fitur lengkap, mudah digunakan, dan supportnya sangat responsif.",
    rating: 5,
    avatar: "/avatar-placeholder.svg",
  },
  {
    name: "Budi Hartono",
    role: "Kepala Sekolah",
    company: "SMA Negeri 1",
    content:
      "Sistem informasi sekolah yang dikembangkan sangat memudahkan administrasi dan pengelolaan data akademik. Sangat direkomendasikan!",
    rating: 5,
    avatar: "/avatar-placeholder.svg",
  },
];

export const SOCIAL_LINKS = [
  { label: "GitHub", href: SITE_CONFIG.github, icon: "Github" },
  { label: "LinkedIn", href: SITE_CONFIG.linkedin, icon: "Linkedin" },
  { label: "Email", href: `mailto:${SITE_CONFIG.email}`, icon: "Mail" },
  {
    label: "WhatsApp",
    href: `https://wa.me/${SITE_CONFIG.whatsapp}`,
    icon: "MessageCircle",
  },
];
