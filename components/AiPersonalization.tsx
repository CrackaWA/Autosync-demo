'use client';

import React, { useState } from 'react';

export default function AiPersonalization() {
  const [activePersona, setActivePersona] = useState<'CTO' | 'CMO'>('CTO');

  // Dynamic content payloads simulating an AI intent engine
  const pageContent = {
    CTO: {
      detectedIntent: 'Infrastructure & Scaling',
      badge: 'IP Identified: Technical Executive',
      headline: 'Orchestrate Your Video Infrastructure at Scale.',
      subheadline: 'Deploy a headless Hub-and-Spoke video pipeline via our REST API. Achieve zero-latency edge delivery and 99.9% uptime across 100+ connected endpoints.',
      metric1: { label: 'API Latency', value: '<45ms' },
      metric2: { label: 'System Uptime', value: '99.99%' },
      theme: 'border-blue-500/50 shadow-[0_0_30px_rgba(59,130,246,0.15)]',
    },
    CMO: {
      detectedIntent: 'Audience Growth & Monetization',
      badge: 'IP Identified: Marketing Executive',
      headline: 'Multiply Your Brand Impressions & Ad Yield.',
      subheadline: 'Automate your Hub-and-Spoke content engine to triple your high-CPM audience. Turn a single macro-asset into hundreds of micro-assets to dominate brand share of voice.',
      metric1: { label: 'CPM Growth', value: '+135%' },
      metric2: { label: 'Brand Reach', value: '3.2x' },
      theme: 'border-growth-accent/50 shadow-[0_0_30px_rgba(0,230,118,0.15)]',
    }
  };

  const current = pageContent[activePersona];

  return (
    <section className="py-24 bg-enterprise-navy border-b border-enterprise-blue/30 overflow-hidden" id="ai-personalization">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Column: The Pitch */}
          <div className="lg:w-1/3 space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">
                Hyper-Personalized <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-growth-accent to-growth-hover">ABM Experiences</span>
              </h2>
              <p className="text-enterprise-light text-lg font-light leading-relaxed">
                Stop losing deals to generic messaging. Our integrated AI engine detects visitor IP and behavior, dynamically restructuring the UI to speak directly to the decision-maker's specific KPIs.
              </p>
            </div>

            {/* The Interactive Persona Toggle */}
            <div className="bg-[#0f1c35] p-2 rounded-xl border border-enterprise-blue/50 inline-flex relative w-full sm:w-auto">
              <div 
                className={`absolute top-2 bottom-2 w-[calc(50%-0.5rem)] bg-enterprise-blue rounded-lg transition-transform duration-300 ease-in-out ${activePersona === 'CMO' ? 'translate-x-full' : 'translate-x-0'}`}
              ></div>
              <button 
                onClick={() => setActivePersona('CTO')}
                className={`relative z-10 flex-1 px-6 py-3 text-sm font-bold uppercase tracking-wider rounded-lg transition-colors duration-300 ${activePersona === 'CTO' ? 'text-white' : 'text-enterprise-light/60 hover:text-white'}`}
              >
                Target CTO
              </button>
              <button 
                onClick={() => setActivePersona('CMO')}
                className={`relative z-10 flex-1 px-6 py-3 text-sm font-bold uppercase tracking-wider rounded-lg transition-colors duration-300 ${activePersona === 'CMO' ? 'text-white' : 'text-enterprise-light/60 hover:text-white'}`}
              >
                Target CMO
              </button>
            </div>
            
            <p className="text-xs text-enterprise-light/50 uppercase tracking-widest font-semibold flex items-center">
               <span className="w-2 h-2 rounded-full bg-growth-accent animate-pulse mr-2"></span>
               Live Intent Simulation
            </p>
          </div>

          {/* Right Column: The Dynamic UI Mockup */}
          <div className="lg:w-2/3 w-full">
            <div className={`relative bg-[#0a1120] rounded-2xl border transition-all duration-500 overflow-hidden ${current.theme}`}>
              
              {/* Browser Header Mockup */}
              <div className="bg-[#0f1c35] border-b border-enterprise-blue/50 px-4 py-3 flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                <div className="ml-4 px-3 py-1 bg-enterprise-navy rounded-md text-[10px] font-mono text-enterprise-light flex-1 text-center truncate border border-enterprise-blue/30">
                  aurasync.io/enterprise-solutions
                </div>
              </div>

              {/* Dynamic Content Area */}
              <div className="p-8 md:p-12 relative min-h-[400px] flex flex-col justify-center">
                
                {/* Floating AI Diagnostic Overlay */}
                <div className="absolute top-4 right-4 flex flex-col items-end space-y-2">
                  <span className="px-3 py-1 bg-enterprise-blue/40 border border-enterprise-blue rounded-full text-[10px] font-mono text-growth-accent uppercase tracking-wider backdrop-blur-sm">
                    {current.badge}
                  </span>
                  <span className="px-3 py-1 bg-enterprise-blue/40 border border-enterprise-blue rounded-full text-[10px] font-mono text-white uppercase tracking-wider backdrop-blur-sm">
                    Intent: {current.detectedIntent}
                  </span>
                </div>

                {/* Animated Text Block */}
                <div className="max-w-xl mt-8 transition-all duration-500" key={activePersona}>
                  <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight animate-[fadeIn_0.5s_ease-out]">
                    {current.headline}
                  </h3>
                  <p className="text-enterprise-light mb-8 leading-relaxed animate-[fadeIn_0.7s_ease-out]">
                    {current.subheadline}
                  </p>
                  
                  {/* Dynamic Metrics */}
                  <div className="flex space-x-8 border-t border-enterprise-blue/50 pt-6 animate-[fadeIn_0.9s_ease-out]">
                    <div>
                      <span className="block text-2xl font-bold text-white font-mono">{current.metric1.value}</span>
                      <span className="text-xs text-enterprise-light uppercase tracking-widest">{current.metric1.label}</span>
                    </div>
                    <div>
                      <span className="block text-2xl font-bold text-white font-mono">{current.metric2.value}</span>
                      <span className="text-xs text-enterprise-light uppercase tracking-widest">{current.metric2.label}</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
                }
