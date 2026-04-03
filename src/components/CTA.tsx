"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const BOOKING_URL = "https://calendly.com/spherelabsai/30min";

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="gradient-orb w-[500px] h-[500px] bg-indigo-600 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-5xl font-bold mb-6 leading-tight">
            Ready to Give Your Team
            <br />
            <span className="gradient-text">an Unfair Advantage?</span>
          </h2>
          <p className="text-muted text-lg mb-10 max-w-xl mx-auto">
            Book a free consultation. Tell us where your team is spending
            too much time, and we&apos;ll show you how to get those hours back.
          </p>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group inline-flex items-center gap-2 px-10 py-5 rounded-full bg-accent hover:bg-accent-light text-white font-semibold text-lg transition-all pulse-ring"
          >
            Book Your Free Consultation
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <p className="text-muted text-sm mt-6">
            No commitment. No pressure. Just a conversation about what&apos;s possible.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
