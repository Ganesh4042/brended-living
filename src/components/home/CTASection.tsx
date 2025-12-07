"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

export default function CTASection() {
  const { t } = useLanguage();

  return (
    <section className="relative py-20 bg-[#050509] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-4rem] right-10 w-80 h-80 bg-[#F4D58D]/20 blur-[120px]" />
        <div className="absolute bottom-[-6rem] left-10 w-96 h-96 bg-[#4C1D95]/50 blur-[150px]" />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10 shadow-[0_25px_60px_rgba(0,0,0,0.75)]"
        >
          <p className="text-xs font-semibold tracking-[0.35em] uppercase text-[#9CA3AF] mb-2">
            NEXT STEP
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
            Ready to experience stress-free property ownership?
          </h2>

          <p className="text-sm md:text-base text-[#9CA3AF] mb-8">
            Let our team handle the tenants, maintenance, and reporting while you
            enjoy a calm, predictable return on your investment.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/pricing"
              className="group inline-flex items-center justify-center space-x-2 rounded-full bg-[#F4D58D] px-8 py-3 text-sm font-semibold text-[#111827] shadow-[0_0_30px_rgba(244,213,141,0.7)] hover:bg-[#e7c777] transition-all"
            >
              <span>{t("hero.cta.explore")}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center space-x-2 rounded-full border border-white/15 bg-transparent px-8 py-3 text-sm font-semibold text-[#E5E7EB] hover:border-[#F4D58D]/70 hover:text-[#F4D58D] transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>{t("hero.cta.contact")}</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
