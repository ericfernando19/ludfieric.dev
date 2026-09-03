import type { NavLink, Skill, Project, Certificate } from "./types";

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
  { label: "Projects", href: "#projects" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

export const SKILLS: Skill[] = [
  { name: "HTML5", category: "frontend" },
  { name: "CSS3", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "React", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "PHP", category: "backend" },
  { name: "Laravel", category: "backend" },
  { name: "REST API", category: "backend" },
  { name: "MySQL", category: "database" },
  { name: "PostgreSQL", category: "database" },
  { name: "Git", category: "tools" },
  { name: "GitHub", category: "tools" },
  { name: "VS Code", category: "tools" },
  { name: "Figma", category: "tools" },
];

export const PROJECTS: Project[] = [
  {
    title: "Company Profile Coffee Shop",
    description:
      "Website company profile premium dengan tampilan modern, responsive, dan elegan.",
    tech: ["Next.js", "Tailwind CSS"],
    image: "/coffeshop.png",
    demoUrl: "https://coffeeshop-kopi-kita.vercel.app/",
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
  {
    title: "Sistem Informasi Sekolah (SPADA)",
    description:
      "Sistem informasi akademik untuk manajemen data siswa, guru, dan nilai. Proyek Tugas Akhir kerja sama dengan sekolah, sehingga tidak tersedia link demo dan repository publik.",
    tech: ["Laravel", "Bootstrap"],
    image: "/spada.png",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Website Rental Mobil",
    description:
      "Platform rental mobil modern dengan fitur katalog kendaraan, booking online, kalkulasi harga otomatis, dashboard admin, dan integrasi WhatsApp.",
    tech: ["Laravel", "MySQL", "Bootstrap 5", "JavaScript"],
    image: "/rencar.png",
    demoUrl: "#",
    githubUrl: "https://github.com/ericfernando19/Sistem-Rental-Mobil",
  },
  {
    title: "MyFurni - Katalog Furniture",
    description:
      "Website katalog furniture modern dengan fitur kategori produk, detail produk, keranjang belanja, dashboard admin, dan checkout melalui WhatsApp.",
    tech: ["Next.js", "TypeScript", "Prisma", "SQLite"],
    image: "/myfurni.png",
    demoUrl: "https://myfurni-catalog.vercel.app/",
    githubUrl: "https://github.com/ericfernando19/luxury-furniture-catalog",
  },
  {
    title: "Sports Field Booking Platform",
    description:
      "Platform booking lapangan olahraga berbasis web yang memudahkan pengguna mencari lapangan, melihat jadwal, dan melakukan booking secara online. Dilengkapi dengan autentikasi, riwayat booking, pembayaran, serta dashboard admin untuk mengelola lapangan dan jadwal. Dibangun menggunakan Next.js, TypeScript, PostgreSQL, Prisma, dan Tailwind CSS.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS"],
    image: "/SportBook.png",
    demoUrl: "https://github.com/ericfernando19/sports-field-booking",
    githubUrl: "https://sports-field-booking19.vercel.app/",
  },
];

export const CERTIFICATES: Certificate[] = [
  {
    title: "Bangkit Academy 2024 Batch 2",
    organization: "Bangkit Academy (Google, GoTo, & Traveloka)",
    issueDate: "Des 2024",
    category: "Mobile Development",
    description:
      "Berhasil menyelesaikan program Bangkit Academy pada jalur Mobile Development dengan mempelajari pengembangan aplikasi Android menggunakan Kotlin, arsitektur aplikasi, integrasi REST API, database lokal, serta mengembangkan proyek capstone secara kolaboratif.",
    image: "/sertif_bangkit.jpg",
  },
  {
    title: "Magang dan Studi Independen Bersertifikat (MSIB)",
    organization: "Kampus Merdeka",
    issueDate: "Des 2024",
    category: "Studi Independen",
    description:
      "Berhasil menyelesaikan program Studi Independen Bersertifikat (MSIB) yang berfokus pada pembelajaran berbasis proyek, pengembangan keterampilan teknis, kolaborasi tim, serta kesiapan menghadapi dunia kerja.",
    image: "/sertif_msib.png",
  },
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
