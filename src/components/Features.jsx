import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, BatteryCharging, Feather, Sparkles, Shield, Monitor } from 'lucide-react';

const items = [
  {
    icon: Cpu,
    title: 'Blazing Apple silicon',
    text: 'Next‑gen M‑series chips deliver up to 18x faster performance for heavy multitasking and creative workflows.'
  },
  {
    icon: BatteryCharging,
    title: 'Battery for days',
    text: 'Up to 22 hours of battery life so you can create, code, and play all day and all night.'
  },
  {
    icon: Monitor,
    title: 'Liquid Retina display',
    text: 'True Tone technology and P3 wide color for vibrant visuals and pin‑sharp detail.'
  },
  {
    icon: Feather,
    title: 'Featherlight design',
    text: 'A sleek, durable unibody chassis that slips effortlessly into your bag.'
  },
  {
    icon: Shield,
    title: 'Secure by design',
    text: 'Privacy and security baked into every layer, with Touch ID for instant unlock.'
  },
  {
    icon: Sparkles,
    title: 'macOS magic',
    text: 'Seamless continuity with your iPhone and iPad plus powerful built‑in apps.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative z-10 bg-gradient-to-b from-indigo-700 to-indigo-900 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center text-3xl font-bold sm:text-4xl"
        >
          Why you’ll love MacBook
        </motion.h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, text }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm hover:bg-white/10"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-white/10 p-3 ring-1 ring-white/20">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold">{title}</h3>
              </div>
              <p className="mt-3 text-white/80">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
