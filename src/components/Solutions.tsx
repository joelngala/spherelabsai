"use client";

import { MessageSquareText, Scale, FileSearch, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const BOOKING_URL = "https://calendly.com";

const solutions = [
  {
    icon: MessageSquareText,
    title: "Missed-Call AI Text-Back",
    audience: "For contractors, salons, & clinics",
    description:
      "The moment a call goes unanswered, our AI texts the customer back, engages them in a natural conversation, answers their questions, and books them on your calendar. No leads slip through the cracks.",
    features: [
      "Instant text-back in under 5 seconds",
      "AI-powered lead qualification",
      "Automated appointment booking",
      "Real-time notifications to your phone",
    ],
  },
  {
    icon: Scale,
    title: "AI Legal Intake",
    audience: "For boutique law firms",
    description:
      "When a potential client calls about a case and reaches voicemail, our AI instantly engages them via text, qualifies their case type, and schedules a consultation — before they can call a competing firm.",
    features: [
      "Automated case-type qualification",
      "Florida Bar compliant — zero legal advice",
      "Consultation scheduling integration",
      "After-hours lead capture",
    ],
  },
  {
    icon: FileSearch,
    title: "Document Intelligence",
    audience: "For law firms & medical offices",
    description:
      "Upload hundreds of pages of contracts, discovery files, or patient records. Ask questions across all documents and get instant, sourced answers — no page limits, no hallucinations.",
    features: [
      "No page limits — process 1,000+ pages",
      "Cross-reference multiple documents at once",
      "Source attribution on every answer",
      "Private, secure infrastructure",
    ],
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent-light text-sm font-semibold uppercase tracking-widest mb-3">
            Solutions
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            AI That Works While You Work
          </h2>
          <p className="text-muted max-w-xl mx-auto">
            Whether you&apos;re on a roof, in a courtroom, or with a patient — our
            systems keep your business running in the background.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {solutions.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-glow rounded-2xl bg-card-bg border border-card-border p-8 flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                <s.icon className="w-6 h-6 text-accent-light" />
              </div>
              <h3 className="text-xl font-bold mb-1">{s.title}</h3>
              <p className="text-xs text-accent-light font-semibold uppercase tracking-wider mb-3">
                {s.audience}
              </p>
              <p className="text-muted text-sm leading-relaxed mb-6">
                {s.description}
              </p>
              <ul className="space-y-2.5 mb-8 flex-1">
                {s.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-light mt-1.5 shrink-0" />
                    <span className="text-muted">{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-light hover:text-white transition-colors group"
              >
                Learn more
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
