import React from 'react';

export default function SocialProof() {
  // Dummy data focused entirely on mathematical ROI and enterprise KPIs
  const deployments = [
    {
      id: 1,
      client: 'Apex Media Group',
      industry: 'Global Publishing',
      primaryMetric: '+312%',
      metricLabel: 'Increase in Qualified Lead Volume',
      context: 'Migrated from a legacy WordPress monolith to AuraSync headless architecture.',
      quote: "The zero-latency edge delivery entirely eliminated our mobile bounce rate. We are capturing and routing three times the deal flow without increasing our ad spend.",
      author: 'Sarah Jenkins',
      role: 'Chief Revenue Officer',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
      )
    },
    {
      id: 2,
      client: 'CreatorGrid Inc.',
      industry: 'B2B Creator Network',
      primaryMetric: '-42%',
      metricLabel: 'Reduction in Blended CAC',
      context: 'Deployed automated Hub-and-Spoke SEO and PWA infrastructure.',
      quote: "By automating our spoke channels, we captured massive organic reach that we previously had to pay for via paid social. The platform paid for itself in week three.",
      author: 'David Chen',
      role: 'VP of Growth',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      )
    },
    {
      id: 3,
      client: 'TechStream Network',
      industry: 'SaaS Video Education',
      primaryMetric: '$2.4M',
      metricLabel: 'Incremental Pipeline Generated',
      context: 'Integrated zero-code CRM middleware and AI-driven ABM personalization.',
      quote: "The personalized intent engine completely transformed our inbound sales. Prospects see exactly what they need, and the data is routed perfectly into Salesforce.",
      author: 'Elena Rostova',
      role: 'Chief Technology Officer',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
      )
    }
  ];

  return (
    <section className="py-24 bg-enterprise-navy border-b border-enterprise-blue/30 relative" id="proof">
      
      {/* Background radial gradient for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-enterprise-blue/10 via-enterprise-navy to-enterprise-navy pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-growth-accent uppercase tracking-widest mb-3">Empirical Social Proof</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Verified <span className="text-transparent bg-clip-text bg-gradient-to-r from-growth-accent to-growth-hover">Deployments</span>
          </h3>
          <p className="text-lg text-enterprise-light font-light">
            We don't deal in hypotheticals. Review the exact mathematical impact our infrastructure has delivered to leading enterprise networks.
          </p>
        </div>

        {/* The Impact Reports Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {deployments.map((deployment) => (
            <div 
              key={deployment.id} 
              className="bg-[#0f1c35] border border-enterprise-blue/50 rounded-2xl p-8 hover:border-growth-accent/50 transition-colors duration-300 flex flex-col group relative overflow-hidden"
            >
              {/* Subtle hover glow effect */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-growth-accent/5 rounded-full blur-[50px] group-hover:bg-growth-accent/10 transition-colors duration-500"></div>

              {/* Client & Industry Header */}
              <div className="flex justify-between items-start mb-8 border-b border-enterprise-blue/30 pb-4">
                <div>
                  <h4 className="text-xl font-bold text-white tracking-tight">{deployment.client}</h4>
                  <p className="text-xs text-enterprise-light/70 uppercase tracking-widest mt-1">{deployment.industry}</p>
                </div>
                <div className="text-growth-accent bg-growth-accent/10 p-2 rounded-lg border border-growth-accent/20">
                  {deployment.icon}
                </div>
              </div>

              {/* The Hard Metric (The Core Focus) */}
              <div className="mb-6">
                <span className="block text-5xl font-extrabold text-white font-mono tracking-tighter drop-shadow-lg group-hover:text-growth-accent transition-colors duration-300">
                  {deployment.primaryMetric}
                </span>
                <span className="block text-sm font-semibold text-enterprise-light uppercase tracking-wide mt-2">
                  {deployment.metricLabel}
                </span>
              </div>

              {/* Deployment Context */}
              <div className="mb-8 p-4 bg-enterprise-navy rounded-lg border border-enterprise-blue/30 shadow-inner">
                <span className="block text-[10px] text-enterprise-light/50 uppercase tracking-widest mb-1 font-semibold">Infrastructure Deployed</span>
                <p className="text-xs text-enterprise-light font-mono leading-relaxed">
                  {deployment.context}
                </p>
              </div>

              {/* The Executive Quote */}
              <div className="mt-auto border-t border-enterprise-blue/30 pt-6">
                <p className="text-enterprise-light italic leading-relaxed mb-6">
                  "{deployment.quote}"
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-enterprise-blue rounded-full flex items-center justify-center border border-enterprise-blue/50 text-white font-bold text-sm">
                    {deployment.author.charAt(0)}
                  </div>
                  <div>
                    <span className="block text-sm font-bold text-white">{deployment.author}</span>
                    <span className="block text-xs text-enterprise-light">{deployment.role}</span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
