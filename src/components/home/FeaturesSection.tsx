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
    <section className="py-20 bg-[#F5F2EC]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#071E40] mb-4">
            {t("home.solutions.title")}
          </h2>
          <p className="text-[#476A6F] max-w-2xl mx-auto text-lg">
            {t("home.solutions.description")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#071E40] to-[#0F3641] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-[#D4C9A1]" />
              </div>
              <h3 className="text-xl font-semibold text-[#071E40] mb-3">
                {t(feature.titleKey)}
              </h3>
              <p className="text-[#476A6F] leading-relaxed">
                {t(feature.descKey)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
