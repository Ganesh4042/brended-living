"use client";

import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Building2, Users, Award, Target, Shield, Heart } from "lucide-react";

export default function AboutPage() {
  const { t } = useLanguage();

  const values = [
    {
      icon: Shield,
      title: "Trust & Transparency",
      description: "We believe in complete openness with our clients. No hidden fees, no surprises.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for the highest standards in property management services.",
    },
    {
      icon: Heart,
      title: "Care",
      description: "We treat every property as if it were our own, with attention to detail.",
    },
    {
      icon: Target,
      title: "Results",
      description: "Our focus is on delivering measurable outcomes for property owners.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F2EC]">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#071E40] to-[#0F3641] py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t("about.title")}
            </h1>
            <p className="text-xl text-white/70">
              Modern property management for the digital age
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 md:p-12 shadow-lg mb-12"
            >
              <div className="flex items-center justify-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-[#071E40] to-[#0F3641] rounded-2xl flex items-center justify-center">
                  <Building2 className="w-10 h-10 text-[#D4C9A1]" />
                </div>
              </div>
              <h2 className="text-3xl font-bold text-[#071E40] text-center mb-6">
                Our Story
              </h2>
              <p className="text-[#476A6F] text-lg leading-relaxed text-center">
                {t("about.description")}
              </p>
            </motion.div>

            {/* Values */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-[#071E40] text-center mb-12">
                Our Values
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {values.map((value, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-[#071E40] to-[#0F3641] rounded-xl flex items-center justify-center mb-4">
                      <value.icon className="w-6 h-6 text-[#D4C9A1]" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#071E40] mb-2">
                      {value.title}
                    </h3>
                    <p className="text-[#476A6F]">{value.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#071E40] rounded-2xl p-8 md:p-12 text-white"
            >
              <h2 className="text-2xl font-bold mb-8 text-center">
                Company Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <p className="text-[#D4C9A1] text-sm mb-2">{t("about.registration")}</p>
                  <p className="font-semibold">HRB 274551 B</p>
                </div>
                <div className="text-center">
                  <p className="text-[#D4C9A1] text-sm mb-2">{t("about.taxId")}</p>
                  <p className="font-semibold">30/238/50491</p>
                </div>
                <div className="text-center">
                  <p className="text-[#D4C9A1] text-sm mb-2">{t("about.vatId")}</p>
                  <p className="font-semibold">DE455265164</p>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-white/20 text-center">
                <p className="text-white/70 text-sm">
                  Brandenbed Living Spaces UG (Haftungsbeschränkt)
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-[#071E40] to-[#0F3641] rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-[#D4C9A1]" />
            </div>
            <h2 className="text-3xl font-bold text-[#071E40] mb-6">
              Our Team
            </h2>
            <p className="text-[#476A6F] text-lg leading-relaxed">
              Our dedicated team of property management professionals brings years of experience
              in real estate, tenant relations, and property maintenance. We're committed to
              providing exceptional service to every property owner we work with.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#0F3641] to-[#071E40]">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-white/70 mb-8 max-w-2xl mx-auto">
              Let us show you how stress-free property ownership can be.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/contact"
                className="bg-[#D4C9A1] hover:bg-[#c4b991] text-[#071E40] px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Contact Us
              </a>
              <a
                href="/pricing"
                className="border-2 border-white/30 hover:border-white/60 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300"
              >
                View Plans
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
