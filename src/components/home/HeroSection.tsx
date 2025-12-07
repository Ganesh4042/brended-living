"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[90vh] flex items-center bg-[#050509] overflow-hidden">
      {/* Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-10 w-80 h-80 bg-[#F4D58D]/15 blur-[110px]" />
        <div className="absolute top-40 right-[-6rem] w-[28rem] h-[28rem] bg-[#4C1D95]/60 blur-[140px]" />
        <div className="absolute bottom-[-6rem] left-20 w-72 h-72 bg-[#D4AF37]/25 blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center rounded-full border border-[#F4D58D]/30 bg-white/5 px-4 py-1 text-xs font-medium text-[#E5E7EB] backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#F4D58D] mr-2" />
              <span>Premium Property Management • Berlin</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
              {t("hero.heading")}
            </h1>

            <p className="text-base md:text-lg text-[#9CA3AF] max-w-xl">
              {t("hero.subheading")}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/pricing"
                className="group inline-flex items-center space-x-2 rounded-full bg-[#F4D58D] px-7 py-3 text-sm font-semibold text-[#111827] shadow-[0_0_35px_rgba(244,213,141,0.55)] hover:bg-[#e7c777] transition-all"
              >
                <span>{t("hero.cta.explore")}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 rounded-full border border-white/15 bg-white/5 px-7 py-3 text-sm font-semibold text-[#E5E7EB] hover:border-[#F4D58D]/60 hover:text-[#F4D58D] transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>{t("hero.cta.contact")}</span>
              </Link>
            </div>

            {/* Small trust bar */}
            <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-white/10 max-w-xl">
              <div className="text-xs text-[#9CA3AF]">
                <span className="font-semibold text-[#F4D58D]">100+ </span>
                properties under dedicated management.
              </div>
              <div className="h-8 w-px bg-white/10 hidden sm:block" />
              <div className="flex items-center space-x-2 text-xs text-[#9CA3AF]">
                <span className="w-6 h-6 rounded-full bg-[#111827] flex items-center justify-center text-[0.6rem] border border-white/10">
                  24/7
                </span>
                <span>Owner & tenant support.</span>
              </div>
            </div>
          </motion.div>

          {/* Right: “Dashboard” style preview card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:justify-self-end w-full max-w-md"
          >
            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_25px_60px_rgba(0,0,0,0.75)] p-6 space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-[#9CA3AF]">
                  Portfolio Snapshot
                </span>
                <span className="inline-flex items-center rounded-full bg-[#111827] px-3 py-1 text-[0.65rem] text-[#F4D58D] border border-[#F4D58D]/40">
                  Live Sync
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <MiniStat label="Occupancy" value="98%" tone="gold" />
                <MiniStat label="Monthly Rent" value="€3,500" tone="neutral" />
                <MiniStat label="Open Tickets" value="02" tone="alert" />
                <MiniStat label="Avg. Stay" value="24 mo" tone="muted" />
              </div>

              <div className="mt-4 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent" />

              <p className="text-[0.75rem] text-[#9CA3AF] leading-relaxed">
                Track returns, tenant status, and maintenance in one elegant, secure
                owner dashboard — designed for low-effort, high-clarity ownership.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function MiniStat({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone: "gold" | "neutral" | "alert" | "muted";
}) {
  const toneClasses: Record<string, string> = {
    gold: "bg-[#F4D58D]/10 text-[#F4D58D] border-[#F4D58D]/30",
    neutral: "bg-white/5 text-[#E5E7EB] border-white/15",
    alert: "bg-[#7F1D1D]/30 text-[#FCA5A5] border-[#B91C1C]/40",
    muted: "bg-[#111827]/60 text-[#9CA3AF] border-white/5",
  };

  return (
    <div
      className={`rounded-2xl border px-3 py-3 flex flex-col ${toneClasses[tone]}`}
    >
      <span className="text-[0.65rem] uppercase tracking-wide opacity-80">
        {label}
      </span>
      <span className="mt-1 text-base font-semibold">{value}</span>
    </div>
  );
}
