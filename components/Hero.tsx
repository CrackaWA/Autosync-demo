'use client';
import { ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 text-center">
      <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full mb-8 backdrop-blur-md">
        <ShieldCheck className="w-4 h-4 text-[#00E676]" />
        <span className="text-xs font-medium tracking-widest uppercase text-slate-400">Next-Gen Orchestration</span>
      </div>
      
      <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter leading-tight text-gradient">
        Build Networks.<br />Not Just Channels.
      </h1>
      
      <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
        The AuraSync framework automates the friction of scale. Deploy a hub-and-spoke infrastructure that breathes with your brand.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button className="px-8 py-4 bg-white text-black font-bold rounded-2xl hover:scale-105 transition-all duration-500">
          Begin Deployment
        </button>
        <button className="px-8 py-4 glass-card rounded-2xl text-white font-medium hover:bg-white/5 transition-all">
          View Architecture
        </button>
      </div>
    </section>
  );
}
