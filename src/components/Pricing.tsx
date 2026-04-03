"use client";

import { Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const BOOKING_URL = "https://calendly.com";

const tiers = [
  {
    name: "Single Project",
    price: "From $1,500",
    period: "",
    description: "A focused build for one specific problem or workflow.",
    features: [
      "Discovery call & requirements gathering",
      "Custom-built AI system or tool",
      "Deployment & handoff",
      "You own the source code",
      "30 days of post-launch support",
    ],
    cta: "Get Started",
    featured: false,
  },
  {
    name: "Growth Partner",
    price: "Custom",
    period: "/mo",
    description:
      "Ongoing development, support, and new features as your business scales.",
    features: [
      "Everything in Single Project",
      "Dedicated monthly dev hours",
      "Priority support & bug fixes",
      "New features & iterations",
      "Performance monitoring",
      "Strategy & roadmap sessions",
    ],
    cta: "Book a Call",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Let's Talk",
    period: "",
    description:
      "For multi-location businesses or complex compliance environments.",
    features: [
      "Everything in Growth Partner",
      "Multi-system architecture",
      "Private infrastructure & hosting",
      "Compliance & security review",
      "Team training & onboarding",
      "SLA & dedicated account manager",
    ],
    cta: "Contact Us",
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent-light text-sm font-semibold uppercase tracking-widest mb-3">
            Pricing
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Flexible Pricing for Every Stage
          </h2>
          <p className="text-muted max-w-xl mx-auto">
            Whether you need a single system or a long-term technology partner,
            we have a plan that fits.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {tiers.map((tier, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-2xl p-8 flex flex-col ${
                tier.featured
                  ? "bg-accent/10 border-2 border-accent relative"
                  : "bg-card-bg border border-card-border"
              }`}
            >
              {tier.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-bold uppercase tracking-widest bg-accent text-white rounded-full">
                  Most Popular
                </span>
              )}

              <h3 className="text-lg font-bold mb-1">{tier.name}</h3>
              <div className="flex items-baseline gap-1 mb-3">
                <span className="text-3xl font-bold">{tier.price}</span>
                {tier.period && (
                  <span className="text-muted text-sm">{tier.period}</span>
                )}
              </div>
              <p className="text-muted text-sm mb-6">{tier.description}</p>

              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-sm">
                    <Check className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                    <span className="text-muted">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all group ${
                  tier.featured
                    ? "bg-accent hover:bg-accent-light text-white"
                    : "border border-card-border hover:border-accent/50 text-foreground"
                }`}
              >
                {tier.cta}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
