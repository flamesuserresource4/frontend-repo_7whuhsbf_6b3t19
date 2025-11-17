import React, { useState } from 'react';
import { motion } from 'framer-motion';

const COLORS = [
  { name: 'Space Gray', value: '#707070' },
  { name: 'Silver', value: '#D1D5DB' },
  { name: 'Midnight', value: '#0B1230' },
  { name: 'Starlight', value: '#F1E7D0' },
  { name: 'Rose', value: '#F43F5E' },
  { name: 'Blue', value: '#3B82F6' },
];

export default function ColorPicker({ onSelect }) {
  const [active, setActive] = useState(COLORS[0].name);

  const handle = (c) => {
    setActive(c.name);
    onSelect?.(c);
  };

  return (
    <div className="flex flex-wrap gap-3">
      {COLORS.map((c) => (
        <button
          key={c.name}
          onClick={() => handle(c)}
          className={`group relative h-11 w-11 rounded-full ring-2 transition ${
            active === c.name ? 'ring-white' : 'ring-white/30'
          }`}
          style={{ background: c.value }}
          aria-label={c.name}
          title={c.name}
        >
          <motion.span
            layoutId="dot"
            className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs text-white/90 opacity-0 transition group-hover:opacity-100"
          >
            {c.name}
          </motion.span>
        </button>
      ))}
    </div>
  );
}
