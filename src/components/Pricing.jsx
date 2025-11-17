import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import ColorPicker from './ColorPicker';

const configs = [
  { tier: 'Air', chip: 'M2', ram: 8, storage: 256, price: 999 },
  { tier: 'Pro 14"', chip: 'M3', ram: 16, storage: 512, price: 1999 },
  { tier: 'Pro 16"', chip: 'M3 Max', ram: 32, storage: 1024, price: 2999 },
];

export default function Pricing() {
  const [color, setColor] = useState({ name: 'Space Gray', value: '#707070' });
  const [selected, setSelected] = useState(configs[1]);

  return (
    <section id="buy" className="relative z-10 bg-gradient-to-b from-indigo-900 to-black py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center text-3xl font-bold sm:text-4xl"
        >
          Pick your powerhouse
        </motion.h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {configs.map((cfg) => (
            <button
              key={cfg.tier}
              onClick={() => setSelected(cfg)}
              className={`rounded-2xl border p-6 text-left transition ${
                selected.tier === cfg.tier
                  ? 'border-indigo-400 bg-white/10'
                  : 'border-white/10 bg-white/5 hover:bg-white/10'
              }`}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">{cfg.tier}</h3>
                {selected.tier === cfg.tier && <Check className="h-5 w-5 text-emerald-300" />}
              </div>
              <p className="mt-2 text-sm text-white/80">{cfg.chip} • {cfg.ram}GB • {cfg.storage}GB SSD</p>
              <p className="mt-4 text-3xl font-bold">${cfg.price}</p>
            </button>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h4 className="text-lg font-semibold">Choose your color</h4>
              <p className="text-sm text-white/70">Make it yours with a finish that fits your vibe.</p>
            </div>
            <ColorPicker onSelect={setColor} />
          </div>
          <div className="mt-8 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="text-white/80">
              <div className="text-sm">Configuration</div>
              <div className="mt-1 font-medium">{selected.tier} • {selected.chip} • {selected.ram}GB • {selected.storage}GB • {color.name}</div>
            </div>
            <motion.a
              whileTap={{ scale: 0.98 }}
              href="#"
              className="inline-flex items-center rounded-full bg-white px-6 py-3 font-semibold text-indigo-700 shadow-lg shadow-indigo-900/30"
            >
              Continue to checkout
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
