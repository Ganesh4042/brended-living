"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { Mail, Globe, MapPin } from "lucide-react";

export default function Footer() {
  const { t } = useLanguage();

  const quickLinks = [
    { href: "/", label: t("nav.home") },
    { href: "/what-we-do", label: t("nav.whatWeDo") },
    { href: "/pricing", label: t("nav.pricing") },
    { href: "/contact", label: t("nav.contact") },
  ];

  return (
    <footer className="bg-[#071E40] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-[#476A6F] to-[#0F3641] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">B</span>
              </div>
              <span className="font-bold text-lg">Brandenbed Living Spaces</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Smart, Simple, Stress-Free Property Ownership
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-[#D4C9A1]">
              {t("footer.quickLinks")}
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-[#D4C9A1]">
              {t("footer.contact")}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-white/70 text-sm">
                <Mail className="w-4 h-4" />
                <span>contact@brandenbedlivingspaces.com</span>
              </li>
              <li className="flex items-center space-x-2 text-white/70 text-sm">
                <Globe className="w-4 h-4" />
                <span>brandenbedlivingspace.com</span>
              </li>
            </ul>
          </div>

          {/* Legal Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-[#D4C9A1]">
              {t("footer.legal")}
            </h3>
            <ul className="space-y-2 text-white/70 text-xs">
              <li>Brandenbed Living Spaces UG (Haftungsbeschränkt)</li>
              <li>Registration: HRB 274551 B</li>
              <li>Tax ID: 30/238/50491</li>
              <li>VAT ID: DE455265164</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#476A6F]/30 mt-8 pt-8 text-center">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Brandenbed Living Spaces UG. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
