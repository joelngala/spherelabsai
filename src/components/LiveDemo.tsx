"use client";

import { ArrowUpRight, FileSearch, MessageSquare, FileDown, Shield } from "lucide-react";
import { motion } from "framer-motion";

const DEMO_URL = "https://joelngala.github.io/SphericalAnalyzer/";

const capabilities = [
  {
    icon: FileSearch,
    title: "Upload Any Document",
    description: "Drop in PDFs, DOCX, or text files — no page limits, no file size restrictions.",
  },
  {
    icon: MessageSquare,
    title: "Chat With Your Files",
    description: "Ask questions in plain English. The AI reads the full document and gives sourced answers.",
  },
  {
    icon: FileDown,
    title: "Auto-Generate Reports",
    description: "One click extracts structured intake data and generates a professional PDF report.",
  },
  {
    icon: Shield,
    title: "Secure & Confidential",
    description: "Your documents are processed in the browser. Nothing is stored on our servers.",
  },
];

export default function LiveDemo() {
  return (
    <section id="demo" className="py-24 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="gradient-orb w-[400px] h-[400px] bg-violet-600 top-0 right-[-100px]" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-accent-light text-sm font-semibold uppercase tracking-widest mb-3">
            Live Demo
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Try Spherical Analyzer
          </h2>
          <p className="text-muted max-w-2xl mx-auto mb-8">
            Our AI-powered document analyzer reads legal files, answers your
            questions, and auto-generates structured intake reports — something
            Adobe Acrobat can&apos;t do. Try it live, right now.
          </p>
          <a
            href={DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent hover:bg-accent-light text-white font-semibold text-lg transition-all pulse-ring"
          >
            Launch the Demo
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>

        {/* Browser mockup with iframe */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="rounded-xl border border-card-border overflow-hidden shadow-2xl shadow-accent/5">
            {/* Browser bar */}
            <div className="bg-card-bg border-b border-card-border px-4 py-3 flex items-center gap-3">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/70" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <span className="w-3 h-3 rounded-full bg-green-500/70" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="px-4 py-1 rounded-md bg-background/50 text-xs text-muted font-mono truncate max-w-md">
                  joelngala.github.io/SphericalAnalyzer
                </div>
              </div>
              <a
                href={DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-foreground transition-colors"
              >
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
            {/* Preview frame */}
            <div className="relative bg-[#0a0a0f] aspect-[16/9] flex items-center justify-center">
              <iframe
                src={DEMO_URL}
                title="Spherical Analyzer Demo"
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>
          </div>
        </motion.div>

        {/* Capability cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {capabilities.map((cap, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="p-6 rounded-2xl bg-card-bg border border-card-border"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <cap.icon className="w-5 h-5 text-accent-light" />
              </div>
              <h3 className="text-sm font-bold mb-1.5">{cap.title}</h3>
              <p className="text-muted text-xs leading-relaxed">
                {cap.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
