"use client";

import React, { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Mail, Globe, Phone, MapPin, Send, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "general",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        inquiryType: "general",
        message: "",
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
              {t("contact.title")}
            </h1>
            <p className="text-xl text-white/70">
              {t("contact.subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full py-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="w-10 h-10 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#071E40] mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-[#476A6F] text-center">
                    {t("contact.success")}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-[#071E40] mb-2">
                      {t("contact.name")}
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#476A6F] focus:ring-2 focus:ring-[#476A6F]/20 outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#071E40] mb-2">
                      {t("contact.email")}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#476A6F] focus:ring-2 focus:ring-[#476A6F]/20 outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#071E40] mb-2">
                      {t("contact.phone")}
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

                  <div>
                    <label className="block text-sm font-medium text-[#071E40] mb-2">
                      {t("contact.inquiryType")}
                    </label>
                    <select
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#476A6F] focus:ring-2 focus:ring-[#476A6F]/20 outline-none transition-all bg-white"
                    >
                      <option value="general">{t("contact.inquiry.general")}</option>
                      <option value="pricing">{t("contact.inquiry.pricing")}</option>
                      <option value="support">{t("contact.inquiry.support")}</option>
                      <option value="partnership">{t("contact.inquiry.partnership")}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#071E40] mb-2">
                      {t("contact.message")}
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#476A6F] focus:ring-2 focus:ring-[#476A6F]/20 outline-none transition-all resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center space-x-2 bg-[#071E40] hover:bg-[#0F3641] text-white py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-[1.02]"
                  >
                    <Send className="w-5 h-5" />
                    <span>{t("contact.submit")}</span>
                  </button>
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold text-[#071E40] mb-6">
                  Get in Touch
                </h2>
                <p className="text-[#476A6F] leading-relaxed">
                  Have questions about our property management services? We're here to help.
                  Reach out to us through any of the channels below.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#071E40] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#D4C9A1]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#071E40] mb-1">Email</h3>
                    <p className="text-[#476A6F]">contact@brandenbedlivingspaces.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#071E40] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-[#D4C9A1]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#071E40] mb-1">Website</h3>
                    <p className="text-[#476A6F]">brandenbedlivingspace.com / .de</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#071E40] rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#D4C9A1]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#071E40] mb-1">Location</h3>
                    <p className="text-[#476A6F]">Berlin, Germany</p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-semibold text-[#071E40] mb-4">Business Hours</h3>
                <div className="space-y-2 text-[#476A6F]">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
                <p className="text-sm text-[#476A6F] mt-4">
                  * Emergency support available 24/7 for existing clients
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
