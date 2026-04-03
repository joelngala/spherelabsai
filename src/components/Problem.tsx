"use client";

import { Clock, Layers, ShieldAlert } from "lucide-react";
import { motion } from "framer-motion";

const painPoints = [
  {
    icon: Clock,
    title: "Manual Work is Eating Your Time",
    description:
      "Your team spends hours on repetitive tasks that AI could handle in seconds — data entry, lead follow-up, document review, scheduling.",
  },
  {
    icon: Layers,
    title: "Off-the-Shelf Tools Don't Fit",
    description:
      "Generic SaaS products force you into their workflow. You need systems designed around how your business actually operates.",
  },
  {
    icon: ShieldAlert,
    title: "Your Competitors are Moving Faster",
    description:
      "Businesses that adopt AI early capture more leads, serve clients faster, and operate at a fraction of the overhead.",
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
            Your Business Has Unique Problems.
            <br />
            <span className="text-accent-light">You Deserve Unique Solutions.</span>
          </h2>
          <p className="text-muted max-w-xl mx-auto">
            Most businesses know AI can help — they just don&apos;t know where to
            start or who to trust to build it right.
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
