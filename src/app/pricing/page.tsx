"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Check, X, ArrowRight } from "lucide-react";

const plans = [
  {
    nameKey: "pricing.basic",
    price: "350",
    description: "Perfect for low-cost landlords",
    features: [
      { key: "pricing.feature.tenantSearch", included: true },
      { key: "pricing.feature.rentCollection", included: true },
      { key: "pricing.feature.maintenanceBasic", included: true },
      { key: "pricing.feature.digitalContracts", included: true },
      { key: "pricing.feature.monthlyReport", included: true },
      { key: "pricing.feature.dashboardAccess", included: false },
      { key: "pricing.feature.cleaning1", included: false },
      { key: "pricing.feature.tenantChat", included: false },
      { key: "pricing.feature.inspection1", included: false },
      { key: "pricing.feature.checkInOut", included: false },
    ],
    popular: false,
  },
  {
    nameKey: "pricing.standard",
    price: "550",
    description: "Best for regular rental owners",
    features: [
      { key: "pricing.feature.tenantSearch", included: true },
      { key: "pricing.feature.rentCollection", included: true },
      { key: "pricing.feature.maintenanceFull", included: true },
      { key: "pricing.feature.digitalContracts", included: true },
      { key: "pricing.feature.dashboardReport", included: true },
      { key: "pricing.feature.dashboardAccess", included: true },
      { key: "pricing.feature.cleaning1", included: true },
      { key: "pricing.feature.tenantChat", included: true },
      { key: "pricing.feature.inspection1", included: true },
      { key: "pricing.feature.checkInOut", included: true },
    ],
    popular: true,
  },
  {
    nameKey: "pricing.premium",
    price: "750",
    description: "For premium, zero-involvement owners",
    features: [
      { key: "pricing.feature.tenantSearch", included: true },
      { key: "pricing.feature.rentCollection", included: true },
      { key: "pricing.feature.maintenancePriority", included: true },
      { key: "pricing.feature.digitalContracts", included: true },
      { key: "pricing.feature.detailedAnalytics", included: true },
      { key: "pricing.feature.unlimitedDashboard", included: true },
      { key: "pricing.feature.cleaning3", included: true },
      { key: "pricing.feature.priorityChat", included: true },
      { key: "pricing.feature.inspection2", included: true },
      { key: "pricing.feature.checkInOut", included: true },
      { key: "pricing.feature.linenService", included: true },
    ],
    popular: false,
  },
];

export default function PricingPage() {
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
              {t("pricing.title")}
            </h1>
            <p className="text-xl text-white/70">
              {t("pricing.subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative rounded-2xl overflow-hidden ${
                  plan.popular
                    ? "bg-gradient-to-br from-[#071E40] to-[#0F3641] text-white shadow-2xl scale-105 z-10"
                    : "bg-white text-[#071E40] shadow-lg"
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-[#D4C9A1] text-[#071E40] text-center py-2 text-sm font-semibold">
                    {t("pricing.popular")}
                  </div>
                )}

                <div className={`p-8 ${plan.popular ? "pt-14" : ""}`}>
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold mb-2">{t(plan.nameKey)}</h3>
                    <p className={`text-sm mb-4 ${plan.popular ? "text-white/70" : "text-[#476A6F]"}`}>
                      {plan.description}
                    </p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold">€{plan.price}</span>
                      <span className={`ml-2 ${plan.popular ? "text-white/70" : "text-[#476A6F]"}`}>
                        {t("pricing.perMonth")}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        {feature.included ? (
                          <Check
                            className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                              plan.popular ? "text-[#D4C9A1]" : "text-green-500"
                            }`}
                          />
                        ) : (
                          <X
                            className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                              plan.popular ? "text-white/30" : "text-gray-300"
                            }`}
                          />
                        )}
                        <span
                          className={`${
                            feature.included
                              ? plan.popular
                                ? "text-white/90"
                                : "text-[#476A6F]"
                              : plan.popular
                              ? "text-white/30"
                              : "text-gray-400"
                          }`}
                        >
                          {t(feature.key)}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/payment?plan=${plan.nameKey.split(".")[1]}`}
                    className={`flex items-center justify-center space-x-2 w-full py-4 rounded-xl font-semibold transition-all duration-300 ${
                      plan.popular
                        ? "bg-[#D4C9A1] text-[#071E40] hover:bg-[#c4b991]"
                        : "bg-[#071E40] text-white hover:bg-[#0F3641]"
                    }`}
                  >
                    <span>{t("pricing.selectPlan")}</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-[#071E40] text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: "Can I upgrade my plan later?",
                  a: "Yes, you can upgrade your plan at any time. The price difference will be prorated for the remaining month.",
                },
                {
                  q: "Is there a minimum contract period?",
                  a: "Our standard contracts are for 12 months, but we offer flexible terms for specific situations.",
                },
                {
                  q: "What happens if my property is vacant?",
                  a: "We actively market your property and work to minimize vacancy periods. Our tenant search is included in all plans.",
                },
                {
                  q: "Are there any hidden fees?",
                  a: "No hidden fees. The monthly price covers all services listed in your plan. Any additional services will be discussed and approved beforehand.",
                },
              ].map((faq, index) => (
                <div key={index} className="bg-[#F5F2EC] rounded-xl p-6">
                  <h3 className="font-semibold text-[#071E40] mb-2">{faq.q}</h3>
                  <p className="text-[#476A6F]">{faq.a}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
