export type Locale = "id" | "en"

export const translations = {
  id: {
    nav: {
      home: "Beranda",
      about: "Tentang",
      skills: "Keahlian",
      projects: "Proyek",
      education: "Pendidikan & Pengalaman",
      certificates: "Sertifikat",
      contact: "Kontak",
    },
    hero: {
      title: "Ludfi Eric Fernando",
      greeting: "Hai! Saya Ludfi.",
      subtitle: "Web Developer",
      tagline:
        "Lulusan S1 Informatika yang membangun aplikasi web dengan Next.js, TypeScript, dan Laravel. Terbuka untuk magang dan full-time.",
      status: "🟢 Tersedia sekarang · Magang & Full-time · WFO / Hybrid / Remote",
      ctaProjects: "Lihat Proyek",
      ctaContact: "Hubungi Saya",
    },
    about: {
      heading: "Tentang Saya",
      titleA: "Saya terbuka untuk",
      titleB: "proyek web developer",
      subtitle: "Mengenal lebih dekat siapa saya dan apa yang saya lakukan.",
      description1:
        "Saya lulusan S1 Informatika Universitas Teknokrat Indonesia dengan minat di pengembangan web fullstack. Saya sudah membangun enam proyek web, di antaranya platform booking, sistem kasir restoran, dan sistem informasi sekolah, menggunakan Next.js, TypeScript, Laravel, dan database relasional.",
      description2:
        "Lewat perkuliahan serta program Bangkit Academy dan MSIB, saya terbiasa bekerja dalam tim, memakai Git, menerima feedback, dan belajar teknologi baru secara mandiri. Saya juga punya dasar pengembangan Android dengan Kotlin. Saya mencari lingkungan profesional, baik lewat program magang maupun posisi full-time, untuk terus berkembang dan berkontribusi lewat proyek nyata.",
      stat1Label: "Informatika (IPK 3.71)",
      stat2Label: "Proyek Web",
      stat3Label: "Sertifikat",
      stat4Label: "Program Bersertifikat (Bangkit & MSIB)",
      strengths: [
        {
          title: "Cepat Belajar",
          desc: "Beralih dari Laravel ke Next.js dan TypeScript secara mandiri.",
        },
        {
          title: "Clean Code",
          desc: "Kode terstruktur dan terdokumentasi, memakai Git untuk versioning.",
        },
        {
          title: "Kolaboratif",
          desc: "Pengalaman kerja tim di Bangkit Academy dan MSIB.",
        },
        {
          title: "Problem Solving",
          desc: "Menganalisis kebutuhan dan menerjemahkannya jadi solusi teknis.",
        },
      ],
    },
    skills: {
      heading: "Keahlian",
      subtitle: "Teknologi dan tools yang saya kuasai.",
      titleA: "Yang ",
      titleB: "saya kuasai",
      frontend: "Frontend",
      backend: "Backend",
      database: "Database",
      mobile: "Mobile",
      tools: "Tools",
    },
    education: {
      heading: "Pendidikan & Pengalaman",
      subtitle: "Riwayat pendidikan dan pengalaman saya.",
      titleA: "Pendidikan ",
      titleB: "& pengalaman",
      groups: [
        {
          label: "Pendidikan",
          items: [
            {
              period: "2022 – 2026",
              title: "S1 Informatika",
              org: "Universitas Teknokrat Indonesia",
              desc: "IPK: 3.71 · Mata kuliah relevan: Pemrograman Web, Basis Data, Analisis & Perancangan Sistem, Algoritma dan Struktur Data",
            },
          ],
        },
        {
          label: "Pengalaman",
          items: [
            {
              period: "Sep – Des 2024",
              title: "Peserta Bangkit Academy 2024 Batch 2, Mobile Development",
              org: "Bangkit Academy (Google, GoTo, & Traveloka)",
              desc: "Membangun aplikasi Android dengan Kotlin, integrasi REST API, database lokal, dan proyek capstone dalam tim.",
            },
            {
              period: "Sep – Des 2024",
              title: "Peserta MSIB — Studi Independen",
              org: "Kampus Merdeka",
              desc: "Pembelajaran berbasis proyek dan kolaborasi tim.",
            },
            {
              period: "Nov 2025 – Mei 2026",
              title: "Proyek Tugas Akhir (SPADA)",
              org: "",
              desc: "Sistem informasi akademik untuk sekolah, dari analisis kebutuhan sampai implementasi.",
            },
          ],
        },
      ],
    },
    projects: {
      heading: "Proyek",
      subtitle: "Beberapa proyek yang telah saya kerjakan.",
      eyebrow: "Karya Saya",
      titleA: "Proyek ",
      titleB: "terbaru",
      demo: "Demo",
      github: "GitHub",
    },
    certificates: {
      heading: "Sertifikat",
      subtitle: "Sertifikasi profesional dan pencapaian saya.",
      titleA: "Sertifikasi ",
      titleB: "& pencapaian",
      prev: "Scroll kiri",
      next: "Scroll kanan",
      enlarge: "Perbesar sertifikat",
    },
    contact: {
      heading: "Hubungi Saya",
      subtitle: "Jangan ragu untuk menghubungi saya.",
      titleA: "Jangan ragu ",
      titleB: "menghubungi saya",
    },
    footer: {
      copyright: "All rights reserved.",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      education: "Education & Experience",
      certificates: "Certificates",
      contact: "Contact",
    },
    hero: {
      title: "Ludfi Eric Fernando",
      greeting: "Hi! I'm Ludfi.",
      subtitle: "Web Developer",
      tagline:
        "Informatics graduate who builds web applications with Next.js, TypeScript, and Laravel. Open to internships and full-time roles.",
      status: "🟢 Available now · Internship & Full-time · On-site / Hybrid / Remote",
      ctaProjects: "View Projects",
      ctaContact: "Get in Touch",
    },
    about: {
      heading: "About Me",
      titleA: "I am available for",
      titleB: "web developer projects",
      subtitle: "Get to know who I am and what I do.",
      description1:
        "I am a graduate of a Bachelor's degree in Informatics at Universitas Teknokrat Indonesia with an interest in fullstack web development. I have built six web projects, including a booking platform, a restaurant cashier system, and a school information system, using Next.js, TypeScript, Laravel, and relational databases.",
      description2:
        "Through coursework and the Bangkit Academy and MSIB programs, I am used to working in teams, using Git, receiving feedback, and learning new technologies independently. I also have a foundation in Android development with Kotlin. I am looking for a professional environment, whether through an internship or a full-time position, to keep growing and contribute through real projects.",
      stat1Label: "Informatics (GPA 3.71)",
      stat2Label: "Web Projects",
      stat3Label: "Certificates",
      stat4Label: "Certified Programs (Bangkit & MSIB)",
      strengths: [
        {
          title: "Quick Learner",
          desc: "Self-taught the switch from Laravel to Next.js and TypeScript.",
        },
        {
          title: "Clean Code",
          desc: "Structured, documented code with Git for version control.",
        },
        {
          title: "Collaborative",
          desc: "Teamwork experience from Bangkit Academy and MSIB.",
        },
        {
          title: "Problem Solving",
          desc: "Analyzing needs and translating them into technical solutions.",
        },
      ],
    },
    skills: {
      heading: "Skills",
      subtitle: "Technologies and tools I work with.",
      titleA: "What ",
      titleB: "I work with",
      frontend: "Frontend",
      backend: "Backend",
      database: "Database",
      mobile: "Mobile",
      tools: "Tools",
    },
    education: {
      heading: "Education & Experience",
      subtitle: "My educational and professional background.",
      titleA: "Education ",
      titleB: "& experience",
      groups: [
        {
          label: "Education",
          items: [
            {
              period: "2022 – 2026",
              title: "Bachelor's in Informatics",
              org: "Universitas Teknokrat Indonesia",
              desc: "GPA: 3.71 · Relevant coursework: Web Programming, Database Systems, Systems Analysis & Design, Algorithms and Data Structures",
            },
          ],
        },
        {
          label: "Experience",
          items: [
            {
              period: "Sep – Dec 2024",
              title: "Participant, Bangkit Academy 2024 Batch 2, Mobile Development",
              org: "Bangkit Academy (Google, GoTo, & Traveloka)",
              desc: "Built an Android app with Kotlin, REST API integration, local database, and a collaborative capstone project.",
            },
            {
              period: "Sep – Dec 2024",
              title: "Participant, MSIB — Independent Study",
              org: "Kampus Merdeka",
              desc: "Project-based learning and team collaboration.",
            },
            {
              period: "Nov 2025 – May 2026",
              title: "Final Project (SPADA)",
              org: "",
              desc: "Academic information system for a school, from requirements analysis to implementation.",
            },
          ],
        },
      ],
    },
    projects: {
      heading: "Projects",
      subtitle: "Some of the projects I have worked on.",
      eyebrow: "My Work",
      titleA: "Recent ",
      titleB: "projects",
      demo: "Demo",
      github: "GitHub",
    },
    certificates: {
      heading: "Certificates",
      subtitle: "Professional certifications and achievements.",
      titleA: "Certifications ",
      titleB: "& achievements",
      prev: "Scroll left",
      next: "Scroll right",
      enlarge: "Enlarge certificate",
    },
    contact: {
      heading: "Get in Touch",
      subtitle: "Feel free to reach out to me.",
      titleA: "Feel free to ",
      titleB: "reach out",
    },
    footer: {
      copyright: "All rights reserved.",
    },
  },
}
