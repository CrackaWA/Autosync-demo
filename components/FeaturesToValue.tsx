import React from 'react';

export default function FeaturesToValue() {
  return (
    <section className="py-24 bg-enterprise-navy border-b border-enterprise-blue/30 relative" id="features">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-full h-[500px] bg-enterprise-blue/10 blur-[150px] -translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Engineered for <span className="text-transparent bg-clip-text bg-gradient-to-r from-growth-accent to-growth-hover">Enterprise Yield</span>
          </h2>
          <p className="text-lg text-enterprise-light font-light">
            We don't just write code. We architect scalable infrastructure that eliminates operational friction and drives massive top-line revenue.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Card 1: Automated Edits -> Zero Bottlenecks */}
          <div className="bg-[#0f1c35] border border-enterprise-blue/50 rounded-2xl p-8 hover:border-growth-accent/50 transition-colors duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-enterprise-blue/50 rounded-lg text-growth-accent">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight">Zero Bottlenecks</h3>
              </div>
              <p className="text-enterprise-light mb-8">
                <strong className="text-white font-semibold">The Tech:</strong> AI-Driven Automated Video Orchestration.<br/>
                <strong className="text-white font-semibold">The Value:</strong> Eliminate human editing delays. Seamlessly process and deploy hundreds of long-form and short-form assets across your Hub-and-Spoke network simultaneously.
              </p>
            </div>
            
            {/* Mock Dashboard UI: Workflow Visualization */}
            <div className="bg-enterprise-navy rounded-xl p-4 border border-enterprise-blue/30 shadow-inner overflow-hidden">
              <div className="flex justify-between items-center mb-4 border-b border-enterprise-blue/30 pb-2">
                <span className="text-xs font-mono text-enterprise-light">Pipeline Status</span>
                <span className="text-xs font-bold text-growth-accent bg-growth-accent/10 px-2 py-1 rounded-full animate-pulse">Processing 142 Assets</span>
              </div>
              <div className="space-y-3">
                {/* Progress Bar 1 */}
                <div>
                  <div className="flex justify-between text-[10px] text-enterprise-light mb-1">
                    <span>Main Channel (Long-Form)</span><span>100%</span>
                  </div>
                  <div className="w-full h-1.5 bg-enterprise-blue rounded-full overflow-hidden">
                    <div className="w-full h-full bg-growth-accent"></div>
                  </div>
                </div>
                {/* Progress Bar 2 */}
                <div>
                  <div className="flex justify-between text-[10px] text-enterprise-light mb-1">
                    <span>Spoke Networks (Shorts/Reels)</span><span>84%</span>
                  </div>
                  <div className="w-full h-1.5 bg-enterprise-blue rounded-full overflow-hidden">
                    <div className="w-[84%] h-full bg-growth-hover relative">
                       <div className="absolute top-0 right-0 bottom-0 left-0 bg-white/20 animate-[shimmer_2s_infinite]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: PWA -> Zero-Latency */}
          <div className="bg-[#0f1c35] border border-enterprise-blue/50 rounded-2xl p-8 hover:border-growth-accent/50 transition-colors duration-300 flex flex-col justify-between group lg:col-span-1 lg:row-span-2">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-enterprise-blue/50 rounded-lg text-growth-accent">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight">Zero-Latency Load Times</h3>
              </div>
              <p className="text-enterprise-light mb-8">
                <strong className="text-white font-semibold">The Tech:</strong> Progressive Web App (PWA) & Edge Networking.<br/>
                <strong className="text-white font-semibold">The Value:</strong> In media and e-commerce, a delay of mere seconds destroys conversion rates. [span_2](start_span)We utilize Service Workers to intelligently cache assets, delivering instant rendering and offline reliability to capture every single lead[span_2](end_span).
              </p>
            </div>

            {/* Mock Dashboard UI: Performance Metric */}
            <div className="bg-enterprise-navy rounded-xl p-6 border border-enterprise-blue/30 shadow-inner flex flex-col items-center justify-center mt-auto">
               <div className="relative w-40 h-40 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                    <path className="text-enterprise-blue stroke-current" strokeWidth="3" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                    <path className="text-growth-accent stroke-current drop-shadow-[0_0_8px_rgba(0,230,118,0.8)]" strokeWidth="3" strokeDasharray="98, 100" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                  </svg>
                  <div className="absolute flex flex-col items-center justify-center text-center">
                    <span className="text-3xl font-bold text-white">99<span className="text-xl">.9%</span></span>
                    <span className="text-[10px] text-enterprise-light uppercase tracking-widest mt-1">Core Vitals</span>
                  </div>
               </div>
               <div className="flex w-full justify-between mt-6 pt-4 border-t border-enterprise-blue/40">
                 <div className="text-center">
                   <span className="block text-xs text-enterprise-light mb-1">LCP</span>
                   <span className="text-sm font-mono font-bold text-white">0.8s</span>
                 </div>
                 <div className="text-center">
                   <span className="block text-xs text-enterprise-light mb-1">INP</span>
                   <span className="text-sm font-mono font-bold text-white">42ms</span>
                 </div>
                 <div className="text-center">
                   <span className="block text-xs text-enterprise-light mb-1">Uptime</span>
                   <span className="text-sm font-mono font-bold text-growth-accent">100%</span>
                 </div>
               </div>
            </div>
          </div>

          {/* Card 3: Middleware -> Deal Flow Automation */}
          <div className="bg-[#0f1c35] border border-enterprise-blue/50 rounded-2xl p-8 hover:border-growth-accent/50 transition-colors duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-enterprise-blue/50 rounded-lg text-growth-accent">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight">Automated Deal Flow</h3>
              </div>
              <p className="text-enterprise-light mb-6">
                <strong className="text-white font-semibold">The Tech:</strong> Zero-Code API Middleware (Zapier/Make).<br/>
                <strong className="text-white font-semibold">The Value:</strong> Never leak a high-ticket lead. Brand inquiries from your website are instantly formatted, enriched, and routed directly into your Salesforce or HubSpot CRM.
              </p>
            </div>
            
            {/* Mock Dashboard UI: API Routing */}
            <div className="bg-enterprise-navy rounded-xl p-4 border border-enterprise-blue/30 shadow-inner flex items-center justify-between opacity-80">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 bg-[#0f1c35] border border-enterprise-blue rounded-lg flex items-center justify-center text-white text-xs font-bold">WEB</div>
                </div>
                <div className="flex-1 flex items-center justify-center relative">
                   <div className="w-full h-px bg-enterprise-blue border-dashed border-b border-enterprise-blue"></div>
                   <div className="absolute px-2 bg-enterprise-navy text-[10px] text-growth-accent font-mono border border-growth-accent/30 rounded-full">API / JSON</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 bg-[#0f1c35] border border-enterprise-blue rounded-lg flex items-center justify-center text-white text-xs font-bold">CRM</div>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
