"use client";

import { PhoneOff, TrendingDown, UserX } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  {
    icon: PhoneOff,
    stat: "62%",
    label: "of calls to small businesses go unanswered",
  },
  {
    icon: UserX,
    stat: "85%",
    label: "of callers won't leave a voicemail",
  },
  {
    icon: TrendingDown,
    stat: "$1,000+",
    label: "lost per week from missed calls",
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
            Every Missed Call Is a Customer
            <br />
            <span className="text-red-400">Calling Your Competitor</span>
          </h2>
          <p className="text-muted max-w-xl mx-auto">
            When you&apos;re on a job site, with a client, or simply busy — your
            phone rings and nobody picks up. Here&apos;s what happens next:
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-8 rounded-2xl bg-card-bg border border-card-border"
            >
              <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center mx-auto mb-4">
                <s.icon className="w-6 h-6 text-red-400" />
              </div>
              <p className="text-4xl font-bold mb-2">{s.stat}</p>
              <p className="text-muted text-sm">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
