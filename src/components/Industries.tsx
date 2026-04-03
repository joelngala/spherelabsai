"use client";

import {
  Wrench,
  Home,
  Zap as ZapIcon,
  Scissors,
  Scale,
  Stethoscope,
  SmilePlus,
  Truck,
  Building2,
  ShoppingBag,
  GraduationCap,
  Landmark,
} from "lucide-react";
import { motion } from "framer-motion";

const industries = [
  { icon: Scale, label: "Law Firms" },
  { icon: Stethoscope, label: "Healthcare" },
  { icon: SmilePlus, label: "Dental" },
  { icon: Home, label: "Real Estate" },
  { icon: Wrench, label: "Home Services" },
  { icon: Truck, label: "HVAC" },
  { icon: ZapIcon, label: "Electricians" },
  { icon: Scissors, label: "Salons & Spas" },
  { icon: Building2, label: "Agencies" },
  { icon: ShoppingBag, label: "E-Commerce" },
  { icon: GraduationCap, label: "Education" },
  { icon: Landmark, label: "Finance" },
];

export default function Industries() {
  return (
    <section id="industries" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent-light text-sm font-semibold uppercase tracking-widest mb-3">
            Industries
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            We Work With Businesses
            <br />
            Ready to Move Faster
          </h2>
          <p className="text-muted max-w-xl mx-auto">
            Whether you&apos;re a solo practice or a growing team, we build AI
            systems that fit your industry and scale with you.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {industries.map((ind, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="flex flex-col items-center gap-3 p-5 rounded-2xl bg-card-bg border border-card-border hover:border-accent/40 transition-colors group cursor-default"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <ind.icon className="w-5 h-5 text-accent-light" />
              </div>
              <span className="text-xs font-medium text-muted group-hover:text-foreground transition-colors text-center">
                {ind.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
