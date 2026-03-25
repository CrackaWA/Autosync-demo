import React from 'react';

export default function Hero() {
  return (
    <section className="relative bg-enterprise-navy pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden border-b border-enterprise-blue/30">
      
      {/* Background Glow Effect for Depth */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-enterprise-blue/40 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* The Concrete Pain Point Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto mb-6">
          Stop Burning Margin on Manual Edits. <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-growth-accent to-growth-hover">
            Scale to 100+ Channels Instantly.
          </span>
        </h1>

        {/* The Value Proposition Subheadline */}
        <p className="mt-4 text-lg md:text-xl text-enterprise-light max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          Deploy a fully automated Hub-and-Spoke architecture. Eliminate production bottlenecks, orchestrate your entire video pipeline, and start selling high-CPM impressions directly to enterprise brands.
        </p>

        {/* The Single, Unmistakable Primary CTA */}
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <a 
            href="#discovery" 
            className="w-full sm:w-auto px-8 py-4 text-base md:text-lg font-bold text-enterprise-navy bg-growth-accent hover:bg-growth-hover rounded-md shadow-[0_0_20px_rgba(0,230,118,0.25)] transition-all duration-300 transform hover:-translate-y-1 uppercase tracking-wide"
          >
            Deploy Your Network Blueprint
          </a>
          <p className="text-sm text-enterprise-light/70 font-medium">
            No credit card required for initial discovery.
          </p>
        </div>
      </div>

      {/* The Aggressive Trust Bar (Above the Fold) */}
      <div className="mt-20 pt-10 border-t border-enterprise-blue/40">
        <p className="text-sm text-center text-enterprise-light/60 font-semibold tracking-widest uppercase mb-8">
          Securing the infrastructure of elite media networks
        </p>
        
        <div className="flex justify-center items-center space-x-8 md:space-x-16 opacity-70 grayscale">
          {/* SOC 2 Type II Badge */}
          <div className="flex items-center space-x-2">
             <svg className="w-8 h-8 text-enterprise-light" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L3 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5zm0 10.5h7.53c-.3 3.97-2.9 7.42-7.53 8.94V12.5H4.5V8.4l7.5-4.16v8.26z"/></svg>
             <span className="text-white font-bold text-lg tracking-tight">SOC 2 <span className="text-sm font-normal">Type II</span></span>
          </div>

          {/* GDPR Compliance Badge */}
          <div className="flex items-center space-x-2">
             <svg className="w-8 h-8 text-enterprise-light" fill="currentColor" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/></svg>
             <span className="text-white font-bold text-lg tracking-tight">GDPR <span className="text-sm font-normal">Compliant</span></span>
          </div>

          {/* PCI DSS Badge */}
          <div className="flex items-center space-x-2">
             <svg className="w-8 h-8 text-enterprise-light" fill="currentColor" viewBox="0 0 24 24"><path d="M21 2H3c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 12H3V4h18v10zm-2-8H5v2h14V6zm-9 4H5v2h5v-2zm9 0h-7v2h7v-2z"/></svg>
             <span className="text-white font-bold text-lg tracking-tight">PCI DSS <span className="text-sm font-normal">Level 1</span></span>
          </div>
        </div>
      </div>
    </section>
  );
}
