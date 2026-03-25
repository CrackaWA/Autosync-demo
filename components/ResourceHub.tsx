import React from 'react';

export default function ResourceHub() {
  // Dummy data structured around the Hub-and-Spoke high-CPM niches
  const resources = [
    {
      id: 1,
      type: 'Video Masterclass',
      hub: 'AI-Driven Video Scaling',
      title: 'Automating 100+ YouTube Shorts via Serverless Architecture',
      description: 'Learn how to utilize edge computing to render and deploy micro-content across multiple platforms simultaneously.',
      metric: '12 Min Watch',
      featured: true,
    },
    {
      id: 2,
      type: 'Technical Guide',
      hub: 'SaaS Tech Infrastructure',
      title: 'Headless Next.js vs. Monolithic: The ROI of Zero-Latency',
      description: 'An empirical breakdown of how migrating to a decoupled CMS infrastructure increases enterprise lead velocity.',
      metric: '8 Min Read',
      featured: false,
    },
    {
      id: 3,
      type: 'Strategy Blueprint',
      hub: 'Direct-to-Brand Ad Sales',
      title: 'Bypassing AdSense: Packaging Premium B2B Impressions',
      description: 'The exact CRM middleware workflows required to capture, enrich, and route direct sponsorship leads.',
      metric: '15 Min Read',
      featured: false,
    },
    {
      id: 4,
      type: 'Case Study',
      hub: 'AI-Driven Video Scaling',
      title: 'Scaling from 2M to 15M Monthly Views with AI Asset Generation',
      description: 'How one media network eliminated human editing bottlenecks and tripled their output.',
      metric: '5 Min Read',
      featured: false,
    }
  ];

  return (
    <section className="py-24 bg-enterprise-navy" id="resources">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hub Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-enterprise-blue/50 pb-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
              Intelligence <span className="text-transparent bg-clip-text bg-gradient-to-r from-growth-accent to-growth-hover">Hub</span>
            </h2>
            <p className="text-enterprise-light text-lg font-light">
              Explore our proprietary research on enterprise infrastructure, AI orchestration, and high-CPM media monetization.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <button className="text-sm font-bold text-growth-accent hover:text-white uppercase tracking-wider flex items-center transition-colors">
              Explore All Hubs 
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </button>
          </div>
        </div>

        {/* Dynamic Category Filters (The 'Hubs') */}
        <div className="flex flex-wrap gap-4 mb-12">
          {['All Content', 'AI-Driven Video Scaling', 'SaaS Tech Infrastructure', 'Direct-to-Brand Ad Sales'].map((hub, index) => (
            <button 
              key={index}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider border transition-all ${index === 0 ? 'bg-growth-accent text-enterprise-navy border-growth-accent shadow-[0_0_15px_rgba(0,230,118,0.3)]' : 'bg-transparent text-enterprise-light border-enterprise-blue hover:border-growth-accent hover:text-white'}`}
            >
              {hub}
            </button>
          ))}
        </div>

        {/* The Grid (The 'Spokes') */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((item) => (
            <div 
              key={item.id} 
              className={`group flex flex-col bg-[#0f1c35] border border-enterprise-blue/50 rounded-2xl overflow-hidden hover:border-growth-accent/50 transition-all duration-300 transform hover:-translate-y-1 ${item.featured ? 'md:col-span-2 lg:col-span-2' : ''}`}
            >
              {/* Dummy Thumbnail Area */}
              <div className={`relative w-full bg-[#0a1120] border-b border-enterprise-blue/30 flex items-center justify-center overflow-hidden ${item.featured ? 'h-64' : 'h-48'}`}>
                 <div className="absolute inset-0 bg-gradient-to-br from-enterprise-blue/20 to-transparent z-10"></div>
                 {/* Abstract visual pattern simulating a tech thumbnail */}
                 <svg className="absolute w-full h-full opacity-20 group-hover:opacity-40 transition-opacity duration-500 group-hover:scale-105 transform" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0,100 L100,0 L100,100 Z" fill="currentColor" className="text-enterprise-blue"></path>
                    <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="2" className="text-growth-accent"></circle>
                 </svg>
                 
                 {/* Play Button Overlay for Videos */}
                 {item.type.includes('Video') && (
                   <div className="relative z-20 w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:bg-growth-accent transition-colors duration-300">
                     <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                   </div>
                 )}
              </div>

              {/* Content Area */}
              <div className="p-8 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="px-3 py-1 bg-enterprise-navy border border-enterprise-blue/50 rounded-full text-[10px] font-mono text-growth-accent uppercase tracking-widest">
                      {item.type}
                    </span>
                    <span className="text-xs text-enterprise-light/70 font-mono">
                      {item.metric}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-growth-accent transition-colors duration-300 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-enterprise-light leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>
                
                <div className="mt-auto pt-6 border-t border-enterprise-blue/30 flex items-center text-xs font-bold text-enterprise-light uppercase tracking-widest group-hover:text-white transition-colors">
                  Read Payload 
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
