"use client";

import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import {
  Building2,
  Wrench,
  FileText,
  TrendingUp,
  Clock,
  CheckCircle,
  AlertCircle,
  DollarSign,
  Users,
  Calendar,
} from "lucide-react";

const mockProperties = [
  { id: 1, name: "Apartment 1A", address: "Friedrichstraße 123, Berlin", status: "Occupied", rent: 1200 },
  { id: 2, name: "Apartment 2B", address: "Alexanderplatz 45, Berlin", status: "Occupied", rent: 1450 },
  { id: 3, name: "Studio 3C", address: "Prenzlauer Berg 78, Berlin", status: "Vacant", rent: 850 },
];

const mockTickets = [
  { id: 1, property: "Apartment 1A", issue: "Heating repair", status: "In Progress", date: "2024-01-15" },
  { id: 2, property: "Apartment 2B", issue: "Plumbing check", status: "Resolved", date: "2024-01-12" },
  { id: 3, property: "Studio 3C", issue: "Paint touch-up", status: "Pending", date: "2024-01-18" },
];

const mockFinancials = {
  totalRent: 3500,
  collected: 2650,
  pending: 850,
  expenses: 320,
};

export default function DashboardPage() {
  const { t } = useLanguage();

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Resolved":
      case "Occupied":
        return "bg-green-100 text-green-700";
      case "In Progress":
        return "bg-yellow-100 text-yellow-700";
      case "Pending":
      case "Vacant":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F2EC]">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#071E40] to-[#0F3641] py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t("dashboard.title")}
            </h1>
            <p className="text-xl text-white/70">
              {t("dashboard.subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Dashboard Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Stats Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
          >
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-[#071E40]/10 rounded-xl flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-[#071E40]" />
                </div>
                <span className="text-sm text-[#476A6F]">Properties</span>
              </div>
              <div className="text-3xl font-bold text-[#071E40]">3</div>
              <div className="text-sm text-[#476A6F]">Total Units</div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-green-600" />
                </div>
                <span className="text-sm text-[#476A6F]">This Month</span>
              </div>
              <div className="text-3xl font-bold text-[#071E40]">€{mockFinancials.collected}</div>
              <div className="text-sm text-green-600">Rent Collected</div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                  <Wrench className="w-6 h-6 text-yellow-600" />
                </div>
                <span className="text-sm text-[#476A6F]">Active</span>
              </div>
              <div className="text-3xl font-bold text-[#071E40]">2</div>
              <div className="text-sm text-[#476A6F]">Open Tickets</div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-[#D4C9A1]/30 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-[#071E40]" />
                </div>
                <span className="text-sm text-[#476A6F]">Occupancy</span>
              </div>
              <div className="text-3xl font-bold text-[#071E40]">67%</div>
              <div className="text-sm text-[#476A6F]">2 of 3 Units</div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Properties Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-[#071E40]">
                  {t("dashboard.properties.title")}
                </h2>
                <Building2 className="w-5 h-5 text-[#476A6F]" />
              </div>
              <div className="space-y-4">
                {mockProperties.map((property) => (
                  <div
                    key={property.id}
                    className="flex items-center justify-between p-4 bg-[#F5F2EC] rounded-xl hover:bg-[#F5F2EC]/70 transition-colors"
                  >
                    <div>
                      <h3 className="font-semibold text-[#071E40]">{property.name}</h3>
                      <p className="text-sm text-[#476A6F]">{property.address}</p>
                    </div>
                    <div className="text-right">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(property.status)}`}>
                        {property.status}
                      </span>
                      <p className="text-sm font-semibold text-[#071E40] mt-1">€{property.rent}/mo</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Maintenance Tickets */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-sm"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-[#071E40]">
                  {t("dashboard.tickets.title")}
                </h2>
                <Wrench className="w-5 h-5 text-[#476A6F]" />
              </div>
              <div className="space-y-4">
                {mockTickets.map((ticket) => (
                  <div
                    key={ticket.id}
                    className="flex items-center justify-between p-4 bg-[#F5F2EC] rounded-xl"
                  >
                    <div className="flex items-center space-x-3">
                      {ticket.status === "Resolved" ? (
                        <CheckCircle className="w-5 h-5 text-green-500" />
                      ) : ticket.status === "In Progress" ? (
                        <Clock className="w-5 h-5 text-yellow-500" />
                      ) : (
                        <AlertCircle className="w-5 h-5 text-red-500" />
                      )}
                      <div>
                        <h3 className="font-semibold text-[#071E40]">{ticket.issue}</h3>
                        <p className="text-sm text-[#476A6F]">{ticket.property}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(ticket.status)}`}>
                        {ticket.status}
                      </span>
                      <p className="text-xs text-[#476A6F] mt-1">{ticket.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Financial Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-2xl p-6 shadow-sm"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-[#071E40]">
                  {t("dashboard.financial.title")}
                </h2>
                <TrendingUp className="w-5 h-5 text-[#476A6F]" />
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-[#F5F2EC] rounded-xl">
                  <span className="text-[#476A6F]">Total Expected Rent</span>
                  <span className="font-bold text-[#071E40]">€{mockFinancials.totalRent}</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-green-50 rounded-xl">
                  <span className="text-green-700">Collected</span>
                  <span className="font-bold text-green-700">€{mockFinancials.collected}</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-yellow-50 rounded-xl">
                  <span className="text-yellow-700">Pending</span>
                  <span className="font-bold text-yellow-700">€{mockFinancials.pending}</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-red-50 rounded-xl">
                  <span className="text-red-700">Expenses</span>
                  <span className="font-bold text-red-700">-€{mockFinancials.expenses}</span>
                </div>
              </div>
            </motion.div>

            {/* Documents */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white rounded-2xl p-6 shadow-sm"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-[#071E40]">
                  {t("dashboard.documents.title")}
                </h2>
                <FileText className="w-5 h-5 text-[#476A6F]" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: "Rental Contracts", count: 3, icon: FileText },
                  { name: "Inspection Reports", count: 5, icon: CheckCircle },
                  { name: "Invoices", count: 12, icon: DollarSign },
                  { name: "Photos", count: 24, icon: Calendar },
                ].map((doc, index) => (
                  <div
                    key={index}
                    className="p-4 bg-[#F5F2EC] rounded-xl hover:bg-[#F5F2EC]/70 transition-colors cursor-pointer"
                  >
                    <doc.icon className="w-6 h-6 text-[#476A6F] mb-2" />
                    <h3 className="font-semibold text-[#071E40] text-sm">{doc.name}</h3>
                    <p className="text-xs text-[#476A6F]">{doc.count} files</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
