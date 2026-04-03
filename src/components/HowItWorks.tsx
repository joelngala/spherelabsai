"use client";

import { MessageCircle, Pencil, Rocket, Headphones, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: MessageCircle,
    step: "01",
    title: "Discovery Call",
    description:
      "We learn about your business, your bottlenecks, and what success looks like. No jargon, no pressure — just a conversation about where AI can actually move the needle.",
    color: "text-accent-light",
    bg: "bg-accent/10",
  },
  {
    icon: Pencil,
    step: "02",
    title: "Custom Design & Build",
    description:
      "We architect a solution tailored to your workflow and build it from the ground up. You get updates throughout and can give feedback at every stage.",
    color: "text-violet-400",
    bg: "bg-violet-500/10",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Launch & Deliver",
    description:
      "We deploy your system, walk your team through it, and make sure everything runs smoothly. You own the code — no lock-in, no surprises.",
    color: "text-green-400",
    bg: "bg-green-500/10",
  },
  {
    icon: Headphones,
    step: "04",
    title: "Ongoing Support",
    description:
      "Need updates, new features, or ongoing maintenance? We offer flexible retainers so your system grows as your business grows.",
    color: "text-amber-400",
    bg: "bg-amber-500/10",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent-light text-sm font-semibold uppercase tracking-widest mb-3">
            How It Works
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold">
            From Idea to Deployed System
          </h2>
        </motion.div>

        <div className="space-y-6">
          {steps.map((s, i) => (
            <div key={i}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="flex items-start gap-6 p-6 rounded-2xl bg-card-bg border border-card-border"
              >
                <div
                  className={`w-14 h-14 rounded-xl ${s.bg} flex items-center justify-center shrink-0`}
                >
                  <s.icon className={`w-7 h-7 ${s.color}`} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-muted uppercase tracking-widest mb-1">
                    Step {s.step}
                  </p>
                  <h3 className="text-xl font-bold mb-1">{s.title}</h3>
                  <p className="text-muted leading-relaxed">{s.description}</p>
                </div>
              </motion.div>
              {i < steps.length - 1 && (
                <div className="flex justify-center py-2">
                  <ArrowDown className="w-5 h-5 text-card-border" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
