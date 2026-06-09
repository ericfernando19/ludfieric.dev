"use client";

import { motion } from "framer-motion";
import { PROCESS_STEPS } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function Process() {
  return (
    <section id="approach" className="relative py-24 md:py-32 bg-zinc-50/50 dark:bg-white/[0.02]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Pendekatan Kerja"
          subtitle="Metode pengembangan yang saya terapkan dalam setiap proyek untuk hasil yang optimal."
        />

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border dark:bg-zinc-800 hidden md:block" />
          <div className="space-y-10">
            {PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-0 md:pl-20"
              >
                <div className="hidden md:flex absolute left-4 top-1 w-8 h-8 rounded-full gradient-bg items-center justify-center -translate-x-1/2">
                  <span className="text-sm font-bold text-white">{step.step}</span>
                </div>
                <div className="md:hidden flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full gradient-bg flex items-center justify-center">
                    <span className="text-sm font-bold text-white">{step.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-secondary dark:text-white">{step.title}</h3>
                </div>
                <div className="p-5 rounded-xl bg-white dark:bg-white/5 border border-border dark:border-zinc-800">
                  <h3 className="text-lg font-semibold text-secondary dark:text-white mb-1 hidden md:block">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted dark:text-zinc-400 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
