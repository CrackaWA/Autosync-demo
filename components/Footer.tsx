'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  // Simulated Webhook routing for Zapier/Make -> Salesforce/HubSpot
  const handleCrmSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // In a live production environment, this is where you post to your API route:
    // await fetch('/api/webhooks/zapier', { method: 'POST', body: JSON.stringify({ email }) })
    
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1500);
  };

  return (
    <>
      {/* Pre-Footer CTA: The API-Ready Data Capture Engine */}
      <section className="bg-[#0a1120] py-20 border-b border-enterprise-blue/40 relative overflow-hidden" id="discovery">
        
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-growth-accent/5 to-transparent pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
            Ready to Orchestrate Your Pipeline?
          </h2>
          <p className="text-enterprise-light text-lg mb-10 max-w-2xl mx-auto font-light">
            Skip the manual setup. Enter your work email below to schedule a rigorous discovery session and receive your custom Hub-and-Spoke deployment blueprint.
          </p>

          <form onSubmit={handleCrmSubmit} className="flex flex-col sm:flex-row max-w-xl mx-auto gap-4">
            <input 
              type="email" 
              required
              placeholder="CTO@enterprise.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status === 'success'}
              className="flex-1 bg-[#0f1c35] text-white border border-enterprise-blue/80 rounded-lg px-6 py-4 focus:outline-none focus:border-growth-accent focus:ring-1 focus:ring-growth-accent transition-all placeholder:text-enterprise-light/40"
            />
            <button 
              type="submit"
              disabled={status === 'success' || status === 'loading'}
              className="bg-growth-accent hover:bg-growth-hover text-enterprise-navy font-bold px-8 py-4 rounded-lg transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-70 disabled:transform-none disabled:cursor-not-allowed uppercase tracking-wide flex items-center justify-center min-w-[180px]"
            >
              {status === 'idle' && 'Initialize Build'}
              {status === 'loading' && (
                <svg className="animate-spin h-5 w-5 text-enterprise-navy" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
              )}
              {status === 'success' && 'Data Routed ✓'}
            </button>
          </form>
          {status === 'success' && (
             <p className="text-growth-accent text-sm mt-4 font-mono animate-[fadeIn_0.5s_ease-out]">
               Payload successfully routed to CRM. Our architects will contact you shortly.
             </p>
          )}
        </div>
      </section>

      {/* The Comprehensive Enterprise Footer */}
      <footer className="bg-enterprise-navy pt-20 pb-10 border-t border-enterprise-blue/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
            
            {/* Brand Column */}
            <div className="col-span-2 lg:col-span-2">
              <Link href="/" className="inline-block mb-6">
                <span className="text-white font-bold text-2xl tracking-tighter">
                  Aura<span className="text-growth-accent">Sync</span>
                </span>
              </Link>
              <p className="text-enterprise-light text-sm leading-relaxed max-w-xs mb-8">
                The premier zero-latency orchestration platform for enterprise media networks and B2B scale-ups.
              </p>
              {/* System Status Mockup */}
              <div className="flex items-center space-x-2 text-xs font-mono text-enterprise-light/70 bg-enterprise-blue/20 inline-flex px-3 py-1.5 rounded-full border border-enterprise-blue/30">
                <span className="w-2 h-2 rounded-full bg-growth-accent animate-pulse"></span>
                <span>All Systems Operational</span>
              </div>
            </div>

            {/* Column 1: Platform */}
            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-6">Platform</h4>
              <ul className="space-y-4">
                <li><Link href="#" className="text-enterprise-light hover:text-white transition-colors text-sm">Hub-and-Spoke Engine</Link></li>
                <li><Link href="#" className="text-enterprise-light hover:text-white transition-colors text-sm">AI Personalization</Link></li>
                <li><Link href="#" className="text-enterprise-light hover:text-white transition-colors text-sm">Automated Edits</Link></li>
                <li><Link href="#" className="text-enterprise-light hover:text-white transition-colors text-sm">Enterprise Pricing</Link></li>
              </ul>
            </div>

            {/* Column 2: Developers */}
            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-6">Developers</h4>
              <ul className="space-y-4">
                <li><Link href="#" className="text-enterprise-light hover:text-white transition-colors text-sm">API Documentation</Link></li>
                <li><Link href="#" className="text-enterprise-light hover:text-white transition-colors text-sm">CRM Webhooks</Link></li>
                <li><Link href="#" className="text-enterprise-light hover:text-white transition-colors text-sm">Next.js Boilerplates</Link></li>
                <li><Link href="#" className="text-enterprise-light hover:text-white transition-colors text-sm">Headless CMS Guide</Link></li>
              </ul>
            </div>

            {/* Column 3: Legal & Compliance */}
            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-6">Compliance</h4>
              <ul className="space-y-4">
                <li><Link href="#" className="text-enterprise-light hover:text-white transition-colors text-sm flex items-center">SOC 2 Report <svg className="w-3 h-3 ml-2 text-growth-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg></Link></li>
                <li><Link href="#" className="text-enterprise-light hover:text-white transition-colors text-sm">GDPR Framework</Link></li>
                <li><Link href="#" className="text-enterprise-light hover:text-white transition-colors text-sm">Privacy Policy</Link></li>
                <li><Link href="#" className="text-enterprise-light hover:text-white transition-colors text-sm">Terms of Service</Link></li>
              </ul>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="border-t border-enterprise-blue/30 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-enterprise-light/60 text-xs mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} AuraSync Infrastructure. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {/* Dummy Social Icons */}
              <Link href="#" className="text-enterprise-light/60 hover:text-white transition-colors">
                 <span className="sr-only">LinkedIn</span>
                 <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </Link>
              <Link href="#" className="text-enterprise-light/60 hover:text-white transition-colors">
                 <span className="sr-only">Twitter</span>
                 <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              </Link>
              <Link href="#" className="text-enterprise-light/60 hover:text-white transition-colors">
                 <span className="sr-only">GitHub</span>
                 <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
