import React from 'react';
import { Github, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-black py-10 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="text-sm text-white/70">© {new Date().getFullYear()} MacBook Vibes. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#" className="rounded-full bg-white/5 p-2 ring-1 ring-white/10 hover:bg-white/10" aria-label="Twitter">
            <Twitter className="h-5 w-5" />
          </a>
          <a href="#" className="rounded-full bg-white/5 p-2 ring-1 ring-white/10 hover:bg-white/10" aria-label="GitHub">
            <Github className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
