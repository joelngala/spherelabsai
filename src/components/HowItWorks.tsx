"use client";

import { PhoneMissed, Bot, CalendarCheck, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: PhoneMissed,
    step: "01",
    title: "A Customer Calls",
    description:
      "You're busy on a job, with a patient, or in a meeting. The call goes unanswered.",
    color: "text-red-400",
    bg: "bg-red-500/10",
  },
  {
    icon: Bot,
    step: "02",
    title: "AI Engages Instantly",
    description:
      "Within seconds, our AI texts them back, answers their questions, and qualifies the lead — automatically.",
    color: "text-accent-light",
    bg: "bg-accent/10",
  },
  {
    icon: CalendarCheck,
    step: "03",
    title: "Appointment Booked",
    description:
      "The customer is booked on your calendar before they can dial your competitor. You see it all in your dashboard.",
    color: "text-green-400",
    bg: "bg-green-500/10",
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
            Three Steps. Zero Missed Leads.
          </h2>
        </motion.div>

        <div className="space-y-6">
          {steps.map((s, i) => (
            <div key={i}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex items-start gap-6 p-6 rounded-2xl bg-card-bg border border-card-border"
              >
                <div className={`w-14 h-14 rounded-xl ${s.bg} flex items-center justify-center shrink-0`}>
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
