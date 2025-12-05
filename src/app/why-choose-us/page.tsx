"use client";

import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import {
  Users,
  Wallet,
  Wrench,
  Monitor,
  Headphones,
  TrendingUp,
  Shield,
  Clock,
  Award,
} from "lucide-react";

const benefits = [
  {
    icon: Users,
    key: "whyChooseUs.benefit1",
  },
  {
    icon: Wallet,
    key: "whyChooseUs.benefit2",
  },
  {
    icon: Wrench,
    key: "whyChooseUs.benefit3",
  },
  {
    icon: Monitor,
    key: "whyChooseUs.benefit4",
  },
  {
    icon: Headphones,
    key: "whyChooseUs.benefit5",
  },
  {
    icon: TrendingUp,
    key: "whyChooseUs.benefit6",
  },
];

const stats = [
  { value: "100+", label: "Properties Managed" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "5+", label: "Years Experience" },
  { value: "24/7", label: "Support Available" },
];

export default function WhyChooseUsPage() {
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
              {t("whyChooseUs.title")}
            </h1>
            <p className="text-xl text-white/70">
              {t("whyChooseUs.subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#071E40] to-[#0F3641] rounded-xl flex items-center justify-center mb-6">
                  <benefit.icon className="w-7 h-7 text-[#D4C9A1]" />
                </div>
                <p className="text-[#071E40] text-lg font-medium leading-relaxed">
                  {t(benefit.key)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#071E40]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#D4C9A1] mb-2">
                  {stat.value}
                </div>
                <div className="text-white/70">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
              <div className="flex items-center justify-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-[#071E40] to-[#0F3641] rounded-2xl flex items-center justify-center">
                  <Shield className="w-10 h-10 text-[#D4C9A1]" />
                </div>
              </div>
              <h2 className="text-3xl font-bold text-[#071E40] text-center mb-6">
                Built on Trust & Transparency
              </h2>
              <p className="text-[#476A6F] text-center text-lg leading-relaxed mb-8">
                We believe in complete transparency with our property owners. Our digital dashboard
                gives you real-time access to everything happening with your property - from tenant
                communications to financial reports. No hidden fees, no surprises.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-[#F5F2EC] rounded-xl">
                  <Clock className="w-8 h-8 text-[#476A6F] mx-auto mb-3" />
                  <h3 className="font-semibold text-[#071E40] mb-2">Real-Time Updates</h3>
                  <p className="text-sm text-[#476A6F]">Stay informed 24/7</p>
                </div>
                <div className="text-center p-6 bg-[#F5F2EC] rounded-xl">
                  <Award className="w-8 h-8 text-[#476A6F] mx-auto mb-3" />
                  <h3 className="font-semibold text-[#071E40] mb-2">Quality Service</h3>
                  <p className="text-sm text-[#476A6F]">Premium management</p>
                </div>
                <div className="text-center p-6 bg-[#F5F2EC] rounded-xl">
                  <TrendingUp className="w-8 h-8 text-[#476A6F] mx-auto mb-3" />
                  <h3 className="font-semibold text-[#071E40] mb-2">Better Returns</h3>
                  <p className="text-sm text-[#476A6F]">Maximize your income</p>
                </div>
              </div>
            </div>
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
              Ready to Experience Stress-Free Property Ownership?
            </h2>
            <p className="text-white/70 mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied property owners who trust us with their investments.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/pricing"
                className="bg-[#D4C9A1] hover:bg-[#c4b991] text-[#071E40] px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
              >
                View Our Plans
              </a>
              <a
                href="/contact"
                className="border-2 border-white/30 hover:border-white/60 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
