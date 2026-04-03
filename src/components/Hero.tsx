"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const BOOKING_URL = "https://calendly.com";

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
          <Sparkles className="w-3.5 h-3.5 text-accent-light" />
          Custom AI Systems for Your Business
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
        >
          We Build AI That
          <br />
          <span className="gradient-text">Runs Your Business</span>
        </motion.h1>

        {/* Subline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg sm:text-xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          SphereLabs designs and deploys custom AI systems tailored to your
          exact workflow &mdash; from intelligent automation to data-driven
          dashboards. No templates. No one-size-fits-all. Just solutions
          built around the way you work.
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
            Book a Free Consultation
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-card-border hover:border-accent/50 text-muted hover:text-foreground font-medium transition-all"
          >
            See Our Work
          </a>
        </motion.div>

        {/* Trust signals */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 text-sm text-muted"
        >
          {[
            "Fully Custom-Built",
            "You Own the Code",
            "Tampa Bay Based",
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-light" />
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
