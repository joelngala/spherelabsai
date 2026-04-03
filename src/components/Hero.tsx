"use client";

import { ArrowRight, Phone, MessageSquare, CalendarCheck } from "lucide-react";
import { motion } from "framer-motion";

const BOOKING_URL = "https://calendly.com"; // Replace with your Calendly link

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background orbs */}
      <div className="gradient-orb w-[600px] h-[600px] bg-indigo-600 top-[-200px] left-[-200px]" />
      <div className="gradient-orb w-[400px] h-[400px] bg-violet-600 bottom-[-100px] right-[-100px]" />
      <div className="gradient-orb w-[300px] h-[300px] bg-indigo-500 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-card-border bg-card-bg/50 backdrop-blur-sm text-sm text-muted mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          Serving Tampa Bay Businesses
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
        >
          Stop Losing Customers
          <br />
          <span className="gradient-text">to Voicemail</span>
        </motion.h1>

        {/* Subline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg sm:text-xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          We build AI systems that instantly engage missed callers, qualify
          leads, and book appointments on your calendar &mdash; so every call
          turns into revenue, not a lost opportunity.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent hover:bg-accent-light text-white font-semibold text-lg transition-all pulse-ring"
          >
            Book a Free Demo
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-card-border hover:border-accent/50 text-muted hover:text-foreground font-medium transition-all"
          >
            See How It Works
          </a>
        </motion.div>

        {/* Mini visual: the flow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8"
        >
          {[
            { icon: Phone, label: "Customer calls", color: "text-red-400" },
            { icon: MessageSquare, label: "AI texts back instantly", color: "text-accent-light" },
            { icon: CalendarCheck, label: "Appointment booked", color: "text-green-400" },
          ].map((step, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-card-bg/60 backdrop-blur-sm border border-card-border">
                <step.icon className={`w-5 h-5 ${step.color}`} />
                <span className="text-sm font-medium">{step.label}</span>
              </div>
              {i < 2 && (
                <ArrowRight className="hidden sm:block w-4 h-4 text-muted" />
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
