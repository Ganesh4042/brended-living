"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { Menu, X, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const { language, toggleLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: t("nav.home") },
    { href: "/what-we-do", label: t("nav.whatWeDo") },
    { href: "/dashboard", label: t("nav.dashboard") },
    { href: "/why-choose-us", label: t("nav.whyChooseUs") },
    { href: "/pricing", label: t("nav.pricing") },
    { href: "/contact", label: t("nav.contact") },
    { href: "/about", label: t("nav.about") },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#050509]/70 border-b border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#F4D58D] to-[#D4AF37] flex items-center justify-center shadow-[0_0_25px_rgba(244,213,141,0.6)]">
              <span className="text-[#050509] font-extrabold text-xl">B</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-[0.18em] uppercase text-[#9CA3AF]">
                Brandenbed
              </span>
              <span className="text-xs text-[#6B7280] hidden sm:block">
                Living Spaces
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium tracking-wide text-[#9CA3AF] hover:text-[#F4D58D] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side: language + mobile menu */}
          <div className="flex items-center space-x-3">
            <button
              onClick={toggleLanguage}
              className="hidden sm:flex items-center space-x-2 rounded-full border border-white/10 px-4 py-2 text-xs font-medium text-[#E5E7EB] hover:border-[#F4D58D]/60 hover:text-[#F4D58D] transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span>{language.toUpperCase()}</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-[#E5E7EB]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#050509]/95 border-t border-white/10 backdrop-blur-xl"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[#D1D5DB] hover:text-[#F4D58D] text-sm font-medium py-2"
                >
                  {link.label}
                </Link>
              ))}

              <button
                onClick={toggleLanguage}
                className="mt-4 inline-flex items-center space-x-2 rounded-full border border-white/10 px-4 py-2 text-xs font-medium text-[#E5E7EB] hover:border-[#F4D58D]/60 hover:text-[#F4D58D] transition-colors w-fit"
              >
                <Globe className="w-4 h-4" />
                <span>{language.toUpperCase()}</span>
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
