"use client";

import {
  MessageSquareText,
  FileSearch,
  LayoutDashboard,
  Bot,
  Workflow,
  Globe,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

const BOOKING_URL = "https://calendly.com";

const projects = [
  {
    icon: MessageSquareText,
    title: "AI Receptionist & Lead Capture",
    description:
      "An AI agent that instantly responds to missed calls via text, qualifies leads through natural conversation, and books appointments directly on your calendar.",
    tags: ["Twilio", "AI Agent", "Calendar Integration"],
  },
  {
    icon: FileSearch,
    title: "Document Intelligence Platform",
    description:
      "Upload hundreds of pages of contracts, case files, or records. Ask questions across all documents and get instant, sourced answers — no page limits.",
    tags: ["RAG", "Vector Search", "Multi-Document"],
  },
  {
    icon: LayoutDashboard,
    title: "Custom Business Dashboards",
    description:
      "Real-time dashboards that pull data from your systems and give you a clear picture of your operations — patients, projects, KPIs, whatever matters to you.",
    tags: ["React", "Real-Time Data", "Custom UI"],
  },
  {
    icon: Bot,
    title: "AI-Powered Client Intake",
    description:
      "Automated intake systems for law firms, clinics, and service businesses that qualify leads, collect information, and route them to the right person.",
    tags: ["Compliance-Safe", "Lead Qualification", "CRM Integration"],
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description:
      "Connect your tools and eliminate repetitive tasks. From automated follow-ups to data syncing between platforms — we build the glue that makes your stack work together.",
    tags: ["API Integration", "Automation", "Custom Logic"],
  },
  {
    icon: Globe,
    title: "Websites & Web Applications",
    description:
      "Fast, modern websites and web apps built to convert. From marketing sites to full client portals with authentication, payments, and dashboards.",
    tags: ["Next.js", "Full-Stack", "SEO Optimized"],
  },
];

export default function Solutions() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent-light text-sm font-semibold uppercase tracking-widest mb-3">
            What We Build
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Custom AI Systems, Built for You
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Every business is different. Here are examples of the types of systems
            we design, build, and deploy — each one tailored to the client&apos;s
            exact needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="card-glow rounded-2xl bg-card-bg border border-card-border p-8 flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                <p.icon className="w-6 h-6 text-accent-light" />
              </div>
              <h3 className="text-lg font-bold mb-3">{p.title}</h3>
              <p className="text-muted text-sm leading-relaxed mb-5 flex-1">
                {p.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((tag, j) => (
                  <span
                    key={j}
                    className="px-2.5 py-1 text-xs rounded-full bg-accent/10 text-accent-light font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent-light hover:text-white font-semibold transition-colors group"
          >
            Have something else in mind? Let&apos;s talk
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
