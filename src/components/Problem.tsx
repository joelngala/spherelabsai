"use client";

import { Clock, Layers, ShieldAlert } from "lucide-react";
import { motion } from "framer-motion";

const painPoints = [
  {
    icon: Clock,
    title: "Your Team's Time is Too Valuable",
    description:
      "Hours spent on data entry, document review, and scheduling are hours not spent on clients. AI handles the busywork so your people can focus on high-value work.",
  },
  {
    icon: Layers,
    title: "Off-the-Shelf Tools Don't Fit",
    description:
      "Generic software forces your team into someone else's workflow. You need tools designed around how your business actually operates.",
  },
  {
    icon: ShieldAlert,
    title: "You Shouldn't Need a Tech Team to Use AI",
    description:
      "AI should feel like a helpful teammate, not a complicated project. We build tools your staff can use on day one — no training manuals required.",
  },
];

export default function Problem() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Your Team is Great.
            <br />
            <span className="text-accent-light">We Just Make Them Faster.</span>
          </h2>
          <p className="text-muted max-w-xl mx-auto">
            AI doesn&apos;t replace your team — it removes the bottlenecks
            that slow them down.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {painPoints.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-2xl bg-card-bg border border-card-border"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                <p.icon className="w-6 h-6 text-accent-light" />
              </div>
              <h3 className="text-lg font-bold mb-2">{p.title}</h3>
              <p className="text-muted text-sm leading-relaxed">
                {p.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
