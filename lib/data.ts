import type {
  NavLink,
  Skill,
  Service,
  Project,
  Certificate,
  ProcessStep,
  Testimonial,
} from "./types";

export const SITE_CONFIG = {
  name: "Ludfi Eric Fernando",
  title: "Fresh Graduate Informatika",
  tagline:
    "Lulusan Informatika siap berkontribusi dalam pengembangan teknologi digital yang inovatif dan berdampak.",
  description:
    "Saya adalah lulusan Informatika yang antusias dalam pengembangan web dan teknologi digital. Memiliki pengalaman dalam membangun berbagai aplikasi web modern menggunakan framework terkini. Siap untuk belajar, tumbuh, dan memberikan kontribusi terbaik dalam tim pengembangan yang dinamis dan profesional.",
  email: "ericludfi19@gmail.com",
  phone: "6285832800738",
  whatsapp: "6285832800738",
  github: "https://github.com/ericfernando19",
  linkedin: "https://www.linkedin.com/in/ludfi-eric-fernando-38a15428b/",
} as const;

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Keahlian", href: "#keahlian" },
  { label: "Certificates", href: "#certificates" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Approach", href: "#approach" },
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
    title: "Web Development",
    description:
      "Membangun aplikasi web modern menggunakan React, Next.js, dan teknologi terkini.",
    icon: "Code2",
  },
  {
    title: "Frontend Engineering",
    description:
      "Mengembangkan antarmuka pengguna yang responsif, interaktif, dan accessible.",
    icon: "Layout",
  },
  {
    title: "UI/UX Design",
    description:
      "Merancang tampilan antarmuka yang intuitif dengan pendekatan user-centered design.",
    icon: "Palette",
  },
  {
    title: "Backend & API",
    description:
      "Mengembangkan REST API dan sistem backend yang scalable menggunakan Laravel.",
    icon: "Database",
  },
  {
    title: "Database Design",
    description:
      "Merancang skema database yang efisien dan terstruktur untuk aplikasi berskala.",
    icon: "Building2",
  },
  {
    title: "Analisis Sistem",
    description:
      "Menganalisis kebutuhan dan merancang solusi teknis yang efektif dan efisien.",
    icon: "Search",
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

export const CERTIFICATES: Certificate[] = [
  {
    title: "Memulai Pemrograman Dengan Kotlin",
    organization: "Dicoding Indonesia",
    issueDate: "Sep 2024",
    category: "Programming",
    description:
      "Mempelajari dasar-dasar bahasa pemrograman Kotlin, dari syntax dasar hingga konsep object-oriented programming.",
    image: "/Memulai%20Pemograman%20dengan%20Kotlin.jpg",
  },
  {
    title: "Belajar Dasar SQL Query Language",
    organization: "Dicoding Indonesia",
    issueDate: "Sep 2023",
    category: "Database",
    description:
      "Memahami konsep database relasional dan penulisan query SQL untuk manipulasi dan pengelolaan data.",
    image: "/Belajar%20Dasar%20Sql%20Query%20Language.jpg",
  },
  {
    title: "Belajar Fundamental Aplikasi Android",
    organization: "Dicoding Indonesia",
    issueDate: "Okt 2024",
    category: "Programming",
    description:
      "Mempelajari fundamental pengembangan aplikasi Android menggunakan Kotlin dan Android Studio.",
    image: "/Belajar%20Fundamental%20Aplikasi%20Android.png",
  },
  {
    title: "Belajar Membuat Aplikasi Android Pemula",
    organization: "Dicoding Indonesia",
    issueDate: "Sep 2024",
    category: "Programming",
    description:
      "Panduan langkah demi langkah membuat aplikasi Android pertama dengan antarmuka yang interaktif.",
    image: "/Belajar%20Membuat%20Aplikasi%20Android%20Pemula.png",
  },
  {
    title: "Belajar Penerapan Machine Learning pada Android",
    organization: "Dicoding Indonesia",
    issueDate: "Nov 2024",
    category: "AI",
    description:
      "Mengintegrasikan model machine learning ke dalam aplikasi Android menggunakan TensorFlow Lite.",
    image: "/Belajar%20Penerapan%20Machine%20Learning%20pada%20Android.png",
  },
  {
    title: "Dasar AI",
    organization: "Dicoding Indonesia",
    issueDate: "Okt 2024",
    category: "AI",
    description:
      "Pengenalan konsep kecerdasan buatan, machine learning, dan penerapannya dalam berbagai bidang.",
    image: "/Dasar%20Ai.png",
  },
  {
    title: "Memulai Dasar Pemrograman Untuk Menjadi Pengembang Software",
    organization: "Dicoding Indonesia",
    issueDate: "Sep 2024",
    category: "Programming",
    description:
      "Fundamental pemrograman yang menjadi pondasi untuk memulai karir sebagai pengembang perangkat lunak profesional.",
    image:
      "/Memulai%20Dasar%20Pemograman%20Untuk%20Menjadi%20Pemograman%20Software.jpg",
  },
];

export const WHY_CHOOSE_ME = [
  {
    title: "Cepat Belajar",
    description:
      "Mampu beradaptasi dengan teknologi baru secara cepat dan mandiri.",
    icon: "Zap",
  },
  {
    title: "Teliti & Terstruktur",
    description:
      "Menerapkan prinsip clean code dan dokumentasi yang rapi dalam setiap proyek.",
    icon: "FileCode",
  },
  {
    title: "Kolaboratif",
    description:
      "Pengalaman kerja tim yang baik dan komunikasi yang efektif dalam pengembangan.",
    icon: "Headphones",
  },
  {
    title: "Problem Solving",
    description:
      "Mampu menganalisis masalah dan menemukan solusi teknis yang tepat sasaran.",
    icon: "Search",
  },
  {
    title: "Modern Tech Stack",
    description:
      "Menguasai teknologi terkini seperti Next.js, TypeScript, dan Tailwind CSS.",
    icon: "Layers",
  },
  {
    title: "Portofolio Terbukti",
    description:
      "Telah mengerjakan berbagai proyek nyata dari UMKM hingga institusi pendidikan.",
    icon: "Smartphone",
  },
  {
    title: "UI/UX Mindset",
    description:
      "Memperhatikan pengalaman pengguna dan desain antarmuka yang modern.",
    icon: "Palette",
  },
  {
    title: "Berkomitmen",
    description:
      "Dedikasi tinggi terhadap target dan kualitas hasil kerja yang diberikan.",
    icon: "Shield",
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: "Analisis & Riset",
    description: "Memahami kebutuhan pengguna dan merancang solusi yang tepat.",
  },
  {
    step: 2,
    title: "Perancangan Sistem",
    description: "Membuat arsitektur dan desain teknis yang terstruktur.",
  },
  {
    step: 3,
    title: "Development",
    description:
      "Mengembangkan aplikasi dengan kode berkualitas tinggi dan teknologi modern.",
  },
  {
    step: 4,
    title: "Testing & QA",
    description:
      "Pengujian menyeluruh untuk memastikan kualitas dan keandalan sistem.",
  },
  {
    step: 5,
    title: "Deployment",
    description:
      "Meluncurkan aplikasi ke production dengan proses yang terkontrol.",
  },
  {
    step: 6,
    title: "Monitoring",
    description: "Pemantauan berkala dan perbaikan berkelanjutan.",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Dr. Andi Pratama",
    role: "Dosen Pembimbing",
    company: "Universitas Informatika",
    content:
      "Mahasiswa yang tekun dan memiliki pemahaman kuat dalam pengembangan web. Proyek-proyek yang dikerjakan menunjukkan kualitas dan dedikasi tinggi.",
    rating: 5,
    avatar: "/avatar-placeholder.svg",
  },
  {
    name: "Rina Marlina",
    role: "Project Lead",
    company: "PT. Teknologi Digital",
    content:
      "Eric menunjukkan kemampuan teknis yang baik dalam magang. Cepat belajar, komunikatif, dan mampu menyelesaikan tugas dengan tepat waktu.",
    rating: 5,
    avatar: "/avatar-placeholder.svg",
  },
  {
    name: "Hendra Kusuma",
    role: "Rekan Tim",
    company: "Pengembangan Sistem Informasi",
    content:
      "Kerja sama tim yang solid. Eric sangat membantu dalam pengembangan sistem informasi akademik, dengan kode yang bersih dan terdokumentasi dengan baik.",
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
