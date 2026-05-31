"use client";

import { motion } from "framer-motion";
import { Code2, Rocket, Users } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { SITE_CONFIG } from "@/lib/data";

const highlights = [
  { icon: Code2, label: "Pengalaman", value: "Web Developer" },
  { icon: Rocket, label: "Fokus", value: "Website Modern & Cepat" },
  { icon: Users, label: "Klien", value: "UMKM, Bisnis, Personal" },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Tentang Saya"
          subtitle="Mengenal lebih dekat siapa saya dan apa yang saya lakukan."
        />

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <img
                src="/foto.jpg"
                alt={SITE_CONFIG.name}
                className="aspect-square rounded-2xl object-cover w-full"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-xl bg-accent/20 border border-accent/30 flex items-center justify-center backdrop-blur-sm">
                <span className="text-3xl font-bold text-accent">5+</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-secondary dark:text-white">
              Halo, saya{" "}
              <span className="gradient-text">{SITE_CONFIG.name}</span>
            </h3>
            <p className="text-muted dark:text-zinc-400 leading-relaxed">
              {SITE_CONFIG.description}
            </p>
            <p className="text-muted dark:text-zinc-400 leading-relaxed">
              Dengan pengalaman dalam berbagai teknologi web modern, saya
              berkomitmen untuk memberikan hasil terbaik yang tidak hanya
              memenuhi kebutuhan fungsional, tetapi juga memberikan pengalaman
              pengguna yang luar biasa. Setiap proyek saya tangani dengan
              pendekatan yang profesional, terstruktur, dan penuh dedikasi.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-4">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="text-center p-4 rounded-xl bg-zinc-50 dark:bg-white/5 border border-border dark:border-zinc-800"
                  >
                    <Icon className="w-5 h-5 mx-auto text-primary mb-2" />
                    <div className="text-xs text-muted dark:text-zinc-500">
                      {item.label}
                    </div>
                    <div className="text-sm font-semibold text-secondary dark:text-white">
                      {item.value}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
