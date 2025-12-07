"use client";

import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Users, Wallet, Wrench, FileText, Headphones } from "lucide-react";

const features = [
  {
    icon: Users,
    titleKey: "whatWeDo.tenant.title",
    descKey: "whatWeDo.tenant.description",
  },
  {
    icon: Wallet,
    titleKey: "whatWeDo.rent.title",
    descKey: "whatWeDo.rent.description",
  },
  {
    icon: Wrench,
    titleKey: "whatWeDo.maintenance.title",
    descKey: "whatWeDo.maintenance.description",
  },
  {
    icon: FileText,
    titleKey: "whatWeDo.legal.title",
    descKey: "whatWeDo.legal.description",
  },
  {
    icon: Headphones,
    titleKey: "whatWeDo.support.title",
    descKey: "whatWeDo.support.description",
  },
];

export default function FeaturesSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-[#050509] relative overflow-hidden">
      {/* Subtle top border glow */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#F4D58D]/60 to-transparent" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-xs font-semibold tracking-[0.35em] uppercase text-[#6B7280] mb-3">
            {t("home.solutions.kicker") ?? "SERVICES"}
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
            {t("home.solutions.title")}
          </h2>
          <p className="text-[#9CA3AF] max-w-2xl mx-auto text-sm md:text-base">
            {t("home.solutions.description")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.titleKey}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg p-7 shadow-[0_18px_35px_rgba(0,0,0,0.6)] hover:border-[#F4D58D]/70 hover:-translate-y-1 transition-all"
            >
              <div className="mb-5 flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-[#111827] flex items-center justify-center border border-white/10">
                  <feature.icon className="w-6 h-6 text-[#F4D58D]" />
                </div>
                <span className="text-[0.65rem] uppercase tracking-widest text-[#6B7280]">
                  0{index + 1}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-white mb-2">
                {t(feature.titleKey)}
              </h3>
              <p className="text-sm text-[#9CA3AF] leading-relaxed">
                {t(feature.descKey)}
              </p>

              <div className="mt-5 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <p className="mt-3 text-[0.7rem] text-[#6B7280] uppercase tracking-[0.2em]">
                Tailored for modern property owners
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
