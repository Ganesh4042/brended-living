"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

const plans = [
  {
    nameKey: "pricing.basic",
    price: "350",
    features: [
      "pricing.feature.tenantSearch",
      "pricing.feature.rentCollection",
      "pricing.feature.maintenanceBasic",
      "pricing.feature.digitalContracts",
      "pricing.feature.monthlyReport",
    ],
    popular: false,
  },
  {
    nameKey: "pricing.standard",
    price: "550",
    features: [
      "pricing.feature.tenantSearch",
      "pricing.feature.rentCollection",
      "pricing.feature.maintenanceFull",
      "pricing.feature.dashboardAccess",
      "pricing.feature.cleaning1",
      "pricing.feature.tenantChat",
      "pricing.feature.inspection1",
      "pricing.feature.checkInOut",
    ],
    popular: true,
  },
  {
    nameKey: "pricing.premium",
    price: "750",
    features: [
      "pricing.feature.tenantSearch",
      "pricing.feature.rentCollection",
      "pricing.feature.maintenancePriority",
      "pricing.feature.unlimitedDashboard",
      "pricing.feature.cleaning3",
      "pricing.feature.linenService",
      "pricing.feature.priorityChat",
      "pricing.feature.inspection2",
      "pricing.feature.checkInOut",
    ],
    popular: false,
  },
];

export default function PricingPreview() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#071E40] mb-4">
            {t("pricing.title")}
          </h2>
          <p className="text-[#476A6F] max-w-2xl mx-auto text-lg">
            {t("pricing.subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl p-8 ${
                plan.popular
                  ? "bg-gradient-to-br from-[#071E40] to-[#0F3641] text-white shadow-2xl scale-105"
                  : "bg-[#F5F2EC] text-[#071E40]"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#D4C9A1] text-[#071E40] px-4 py-1 rounded-full text-sm font-semibold">
                    {t("pricing.popular")}
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{t(plan.nameKey)}</h3>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold">€{plan.price}</span>
                  <span className={`ml-1 ${plan.popular ? "text-white/70" : "text-[#476A6F]"}`}>
                    {t("pricing.perMonth")}
                  </span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.slice(0, 5).map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <Check
                      className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        plan.popular ? "text-[#D4C9A1]" : "text-[#476A6F]"
                      }`}
                    />
                    <span className={plan.popular ? "text-white/90" : "text-[#476A6F]"}>
                      {t(feature)}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href={`/payment?plan=${plan.nameKey.split(".")[1]}`}
                className={`block w-full text-center py-3 rounded-xl font-semibold transition-all duration-300 ${
                  plan.popular
                    ? "bg-[#D4C9A1] text-[#071E40] hover:bg-[#c4b991]"
                    : "bg-[#071E40] text-white hover:bg-[#0F3641]"
                }`}
              >
                {t("pricing.selectPlan")}
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="/pricing"
            className="inline-flex items-center space-x-2 text-[#071E40] hover:text-[#0F3641] font-semibold transition-colors"
          >
            <span>View Full Pricing Details</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
