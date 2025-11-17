import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Sparkles, ShoppingCart } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-fuchsia-600 via-violet-600 to-indigo-700 text-white">
      <div className="absolute inset-0">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.18),transparent_50%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,255,255,0.12),transparent_50%)]" />
      </div>

      <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:block">
        <div className="h-[80vh] w-[80vw] max-w-[1200px]">
          <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pt-24 md:pt-28 lg:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-md ring-1 ring-white/20"
        >
          <Sparkles className="h-4 w-4 text-yellow-300" />
          <span className="text-sm">All‑new M‑series power. Up to 22 hours of battery life.</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-6 text-center text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-6xl"
        >
          MacBook, made for makers
          <span className="block bg-gradient-to-r from-amber-200 via-rose-200 to-teal-200 bg-clip-text text-transparent">Colorful. Powerful. Playful.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 max-w-2xl text-center text-lg text-white/80"
        >
          Supercharged by Apple silicon with mind‑bending performance, stunning Liquid Retina display, and a vibrant finish to match your vibe.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#buy"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-base font-semibold text-indigo-700 shadow-lg shadow-indigo-900/30 transition hover:-translate-y-0.5 hover:shadow-xl"
          >
            <ShoppingCart className="h-5 w-5" /> Buy now
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-base font-semibold text-white ring-1 ring-white/20 backdrop-blur transition hover:bg-white/20"
          >
            Explore features
          </a>
        </motion.div>

        <div className="pointer-events-none relative mt-12 h-40 w-full max-w-5xl md:hidden">
          <div className="absolute inset-0 rounded-3xl border border-white/20 bg-white/5" />
          <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>
    </section>
  );
}
