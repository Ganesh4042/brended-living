"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Building2,
  CreditCard,
  Check,
  ArrowLeft,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const plans = {
  basic: { name: "Basic", price: 350 },
  standard: { name: "Standard", price: 550 },
  premium: { name: "Premium", price: 750 },
};

function PaymentContent() {
  const searchParams = useSearchParams();
  const { t } = useLanguage();
  const [step, setStep] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<keyof typeof plans>("standard");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    propertyType: "apartment",
    propertySize: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    const planParam = searchParams.get("plan");
    if (planParam && planParam in plans) {
      setSelectedPlan(planParam as keyof typeof plans);
    }
  }, [searchParams]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validateStep = (currentStep: number): boolean => {
    const newErrors: Record<string, string> = {};

    if (currentStep === 1) {
      if (!formData.name.trim()) newErrors.name = "Name is required";
      if (!formData.email.trim()) newErrors.email = "Email is required";
      else if (!/\S+@\S+\.\S+/.test(formData.email))
        newErrors.email = "Invalid email format";
    }

    if (currentStep === 2) {
      if (!formData.address.trim()) newErrors.address = "Address is required";
      if (!formData.propertySize.trim())
        newErrors.propertySize = "Property size is required";
    }

    if (currentStep === 4) {
      if (!formData.cardNumber.trim())
        newErrors.cardNumber = "Card number is required";
      else if (formData.cardNumber.replace(/\s/g, "").length < 16)
        newErrors.cardNumber = "Invalid card number";
      if (!formData.expiry.trim()) newErrors.expiry = "Expiry date is required";
      if (!formData.cvv.trim()) newErrors.cvv = "CVV is required";
      else if (formData.cvv.length < 3) newErrors.cvv = "Invalid CVV";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleSubmit = () => {
    if (validateStep(4)) {
      setShowSuccess(true);
    }
  };

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || "";
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    return parts.length ? parts.join(" ") : value;
  };

  const steps = [
    { num: 1, label: t("payment.step1"), icon: User },
    { num: 2, label: t("payment.step2"), icon: Building2 },
    { num: 3, label: t("payment.step3"), icon: Check },
    { num: 4, label: t("payment.step4"), icon: CreditCard },
  ];

  return (
    <div className="min-h-screen bg-[#F5F2EC] py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-[#071E40] text-center mb-8">
            {t("payment.title")}
          </h1>

          {/* Progress Steps */}
          <div className="flex items-center justify-center mb-12">
            {steps.map((s, index) => (
              <React.Fragment key={s.num}>
                <div
                  className={`flex flex-col items-center ${
                    step >= s.num ? "text-[#071E40]" : "text-gray-400"
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 transition-all ${
                      step >= s.num
                        ? "bg-[#071E40] text-white"
                        : "bg-gray-200 text-gray-400"
                    }`}
                  >
                    <s.icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-medium hidden sm:block">
                    {s.label}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`w-12 md:w-24 h-1 mx-2 rounded ${
                      step > s.num ? "bg-[#071E40]" : "bg-gray-200"
                    }`}
                  />
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form Section */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <AnimatePresence mode="wait">
                  {/* Step 1: Customer Details */}
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <h2 className="text-xl font-semibold text-[#071E40] mb-6">
                        {t("payment.step1")}
                      </h2>
                      <div>
                        <label className="block text-sm font-medium text-[#071E40] mb-2">
                          {t("payment.name")}
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-xl border ${
                            errors.name ? "border-red-500" : "border-gray-200"
                          } focus:border-[#476A6F] focus:ring-2 focus:ring-[#476A6F]/20 outline-none transition-all`}
                          placeholder="John Doe"
                        />
                        {errors.name && (
                          <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#071E40] mb-2">
                          {t("payment.email")}
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-xl border ${
                            errors.email ? "border-red-500" : "border-gray-200"
                          } focus:border-[#476A6F] focus:ring-2 focus:ring-[#476A6F]/20 outline-none transition-all`}
                          placeholder="john@example.com"
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#071E40] mb-2">
                          {t("payment.phone")}
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#476A6F] focus:ring-2 focus:ring-[#476A6F]/20 outline-none transition-all"
                          placeholder="+49 123 456 7890"
                        />
                      </div>
                    </motion.div>
                  )}

                  {/* Step 2: Property Information */}
                  {step === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <h2 className="text-xl font-semibold text-[#071E40] mb-6">
                        {t("payment.step2")}
                      </h2>
                      <div>
                        <label className="block text-sm font-medium text-[#071E40] mb-2">
                          {t("payment.address")}
                        </label>
                        <input
                          type="text"
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-xl border ${
                            errors.address ? "border-red-500" : "border-gray-200"
                          } focus:border-[#476A6F] focus:ring-2 focus:ring-[#476A6F]/20 outline-none transition-all`}
                          placeholder="Friedrichstraße 123, Berlin"
                        />
                        {errors.address && (
                          <p className="text-red-500 text-sm mt-1">{errors.address}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#071E40] mb-2">
                          {t("payment.propertyType")}
                        </label>
                        <select
                          name="propertyType"
                          value={formData.propertyType}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#476A6F] focus:ring-2 focus:ring-[#476A6F]/20 outline-none transition-all bg-white"
                        >
                          <option value="apartment">
                            {t("payment.propertyType.apartment")}
                          </option>
                          <option value="house">
                            {t("payment.propertyType.house")}
                          </option>
                          <option value="commercial">
                            {t("payment.propertyType.commercial")}
                          </option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#071E40] mb-2">
                          {t("payment.propertySize")}
                        </label>
                        <input
                          type="number"
                          name="propertySize"
                          value={formData.propertySize}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-xl border ${
                            errors.propertySize ? "border-red-500" : "border-gray-200"
                          } focus:border-[#476A6F] focus:ring-2 focus:ring-[#476A6F]/20 outline-none transition-all`}
                          placeholder="75"
                        />
                        {errors.propertySize && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.propertySize}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3: Plan Selection */}
                  {step === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <h2 className="text-xl font-semibold text-[#071E40] mb-6">
                        {t("payment.selectPlan")}
                      </h2>
                      <div className="space-y-4">
                        {Object.entries(plans).map(([key, plan]) => (
                          <div
                            key={key}
                            onClick={() => setSelectedPlan(key as keyof typeof plans)}
                            className={`p-6 rounded-xl border-2 cursor-pointer transition-all ${
                              selectedPlan === key
                                ? "border-[#071E40] bg-[#071E40]/5"
                                : "border-gray-200 hover:border-[#476A6F]"
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <div>
                                <h3 className="font-semibold text-[#071E40] text-lg">
                                  {plan.name}
                                </h3>
                                <p className="text-[#476A6F]">
                                  €{plan.price}/month
                                </p>
                              </div>
                              <div
                                className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                                  selectedPlan === key
                                    ? "border-[#071E40] bg-[#071E40]"
                                    : "border-gray-300"
                                }`}
                              >
                                {selectedPlan === key && (
                                  <Check className="w-4 h-4 text-white" />
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Step 4: Payment Details */}
                  {step === 4 && (
                    <motion.div
                      key="step4"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <h2 className="text-xl font-semibold text-[#071E40] mb-6">
                        {t("payment.step4")}
                      </h2>
                      <div>
                        <label className="block text-sm font-medium text-[#071E40] mb-2">
                          {t("payment.cardNumber")}
                        </label>
                        <input
                          type="text"
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              cardNumber: formatCardNumber(e.target.value),
                            })
                          }
                          maxLength={19}
                          className={`w-full px-4 py-3 rounded-xl border ${
                            errors.cardNumber ? "border-red-500" : "border-gray-200"
                          } focus:border-[#476A6F] focus:ring-2 focus:ring-[#476A6F]/20 outline-none transition-all`}
                          placeholder="1234 5678 9012 3456"
                        />
                        {errors.cardNumber && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.cardNumber}
                          </p>
                        )}
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-[#071E40] mb-2">
                            {t("payment.expiry")}
                          </label>
                          <input
                            type="text"
                            name="expiry"
                            value={formData.expiry}
                            onChange={handleChange}
                            maxLength={5}
                            className={`w-full px-4 py-3 rounded-xl border ${
                              errors.expiry ? "border-red-500" : "border-gray-200"
                            } focus:border-[#476A6F] focus:ring-2 focus:ring-[#476A6F]/20 outline-none transition-all`}
                            placeholder="MM/YY"
                          />
                          {errors.expiry && (
                            <p className="text-red-500 text-sm mt-1">
                              {errors.expiry}
                            </p>
                          )}
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-[#071E40] mb-2">
                            {t("payment.cvv")}
                          </label>
                          <input
                            type="text"
                            name="cvv"
                            value={formData.cvv}
                            onChange={handleChange}
                            maxLength={4}
                            className={`w-full px-4 py-3 rounded-xl border ${
                              errors.cvv ? "border-red-500" : "border-gray-200"
                            } focus:border-[#476A6F] focus:ring-2 focus:ring-[#476A6F]/20 outline-none transition-all`}
                            placeholder="123"
                          />
                          {errors.cvv && (
                            <p className="text-red-500 text-sm mt-1">{errors.cvv}</p>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8 pt-6 border-t border-gray-100">
                  {step > 1 ? (
                    <button
                      onClick={handleBack}
                      className="flex items-center space-x-2 text-[#476A6F] hover:text-[#071E40] transition-colors"
                    >
                      <ArrowLeft className="w-5 h-5" />
                      <span>{t("payment.back")}</span>
                    </button>
                  ) : (
                    <div />
                  )}
                  {step < 4 ? (
                    <button
                      onClick={handleNext}
                      className="flex items-center space-x-2 bg-[#071E40] hover:bg-[#0F3641] text-white px-6 py-3 rounded-xl font-semibold transition-all"
                    >
                      <span>{t("payment.next")}</span>
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  ) : (
                    <button
                      onClick={handleSubmit}
                      className="flex items-center space-x-2 bg-[#D4C9A1] hover:bg-[#c4b991] text-[#071E40] px-6 py-3 rounded-xl font-semibold transition-all"
                    >
                      <CreditCard className="w-5 h-5" />
                      <span>{t("payment.payNow")}</span>
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Summary Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl p-6 shadow-lg sticky top-24">
                <h3 className="text-lg font-semibold text-[#071E40] mb-6">
                  {t("payment.summary")}
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between text-[#476A6F]">
                    <span>Plan</span>
                    <span className="font-medium text-[#071E40]">
                      {plans[selectedPlan].name}
                    </span>
                  </div>
                  <div className="flex justify-between text-[#476A6F]">
                    <span>Monthly Fee</span>
                    <span className="font-medium text-[#071E40]">
                      €{plans[selectedPlan].price}
                    </span>
                  </div>
                  <div className="border-t border-gray-100 pt-4">
                    <div className="flex justify-between">
                      <span className="font-semibold text-[#071E40]">
                        {t("payment.total")}
                      </span>
                      <span className="font-bold text-xl text-[#071E40]">
                        €{plans[selectedPlan].price}
                      </span>
                    </div>
                    <p className="text-xs text-[#476A6F] mt-1">per month</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl p-8 max-w-md w-full text-center relative overflow-hidden"
            >
              {/* Confetti Effect */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{
                      opacity: 1,
                      y: -20,
                      x: Math.random() * 400 - 200,
                      rotate: 0,
                    }}
                    animate={{
                      opacity: 0,
                      y: 400,
                      rotate: Math.random() * 360,
                    }}
                    transition={{
                      duration: 2,
                      delay: Math.random() * 0.5,
                      ease: "easeOut",
                    }}
                    className="absolute top-0 left-1/2"
                    style={{
                      width: 10,
                      height: 10,
                      backgroundColor: ["#D4C9A1", "#071E40", "#476A6F", "#0F3641"][
                        Math.floor(Math.random() * 4)
                      ],
                      borderRadius: Math.random() > 0.5 ? "50%" : "0",
                    }}
                  />
                ))}
              </div>

              <div className="relative z-10">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="w-10 h-10 text-green-500" />
                </div>
                <h2 className="text-2xl font-bold text-[#071E40] mb-4">
                  {t("payment.success.title")}
                </h2>
                <p className="text-[#476A6F] mb-8">
                  {t("payment.success.message")}
                </p>
                <button
                  onClick={() => {
                    setShowSuccess(false);
                    window.location.href = "/";
                  }}
                  className="bg-[#071E40] hover:bg-[#0F3641] text-white px-8 py-3 rounded-xl font-semibold transition-all"
                >
                  {t("payment.success.close")}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function PaymentPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#F5F2EC] flex items-center justify-center">Loading...</div>}>
      <PaymentContent />
    </Suspense>
  );
}
