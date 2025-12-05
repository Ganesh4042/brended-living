"use client";

import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Users, Wallet, Wrench, FileText, Headphones, Shield, Clock, TrendingUp } from "lucide-react";

const services = [
  {
    icon: Users,
    titleKey: "whatWeDo.tenant.title",
    descKey: "whatWeDo.tenant.description",
    details: [
      "Property marketing across multiple channels",
      "Thorough tenant screening and verification",
      "Professional viewings management",
      "Quick occupancy with reliable renters",
    ],
  },
  {
    icon: Wallet,
    titleKey: "whatWeDo.rent.title",
    descKey: "whatWeDo.rent.description",
    details: [
      "Automated rent collection system",
      "Transparent monthly payouts",
      "Real-time payment tracking",
      "Late payment follow-up",
    ],
  },
  {
    icon: Wrench,
    titleKey: "whatWeDo.maintenance.title",
    descKey: "whatWeDo.maintenance.description",
    details: [
      "Regular property inspections",
      "24/7 emergency repairs",
      "Vendor coordination",
      "Preventive maintenance planning",
    ],
  },
  {
    icon: FileText,
    titleKey: "whatWeDo.legal.title",
    descKey: "whatWeDo.legal.description",
    details: [
      "Professional rental agreements",
      "Tenant document verification",
      "Compliance management",
      "Digital record keeping",
    ],
  },
  {
    icon: Headphones,
    titleKey: "whatWeDo.support.title",
    descKey: "whatWeDo.support.description",
    details: [
      "Dedicated support team",
      "Quick issue resolution",
      "Clear communication channels",
      "Owner and tenant assistance",
    ],
  },
];

export default function WhatWeDoPage() {
  const { t } = useLanguage();

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
              {t("whatWeDo.title")}
            </h1>
            <p className="text-xl text-white/70">
              {t("whatWeDo.subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center gap-12`}
              >
                <div className="flex-1">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#071E40] to-[#0F3641] rounded-2xl flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-[#D4C9A1]" />
                  </div>
                  <h2 className="text-3xl font-bold text-[#071E40] mb-4">
                    {t(service.titleKey)}
                  </h2>
                  <p className="text-[#476A6F] text-lg mb-6">
                    {t(service.descKey)}
                  </p>
                  <ul className="space-y-3">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-[#D4C9A1] rounded-full" />
                        <span className="text-[#476A6F]">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1">
                  <div className="bg-white rounded-2xl p-8 shadow-lg">
                    <div className="aspect-video bg-gradient-to-br from-[#071E40]/5 to-[#0F3641]/10 rounded-xl flex items-center justify-center">
                      <service.icon className="w-24 h-24 text-[#476A6F]/30" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#071E40]">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-white/70 mb-8 max-w-2xl mx-auto">
              Let us handle your property management while you enjoy stress-free ownership.
            </p>
            <a
              href="/contact"
              className="inline-block bg-[#D4C9A1] hover:bg-[#c4b991] text-[#071E40] px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Contact Us Today
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
