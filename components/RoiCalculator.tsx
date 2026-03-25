'use client';

import React, { useState, useEffect } from 'react';

export default function RoiCalculator() {
  // State for the client's current baseline metrics
  const [viewers, setViewers] = useState(500000);
  const [cpm, setCpm] = useState(12);
  const [brandDealValue, setBrandDealValue] = useState(5000);

  // State for calculated financial outcomes
  const [currentRevenue, setCurrentRevenue] = useState(0);
  const [projectedRevenue, setProjectedRevenue] = useState(0);
  const [costOfInaction, setCostOfInaction] = useState(0);

  // The Mathematical Engine: Calculating the Hub-and-Spoke Multiplier
  useEffect(() => {
    // Current Baseline
    const currentAdRev = (viewers / 1000) * cpm;
    const currentBrandRev = brandDealValue * 2; // Assuming 2 deals closed per month manually
    const totalCurrent = currentAdRev + currentBrandRev;

    // Projected AuraSync Scaling (The €15k Justification)
    // 1. Spoke automation multiplies viewership across 10-100 micro-channels
    const projectedViewers = viewers * 4.5; 
    // 2. Direct-to-brand packaging increases effective CPM
    const projectedCpm = cpm * 1.3; 
    // 3. Automated lead routing closes more brand deals
    const projectedBrandDeals = 6; 

    const projectedAdRev = (projectedViewers / 1000) * projectedCpm;
    const projectedBrandRev = brandDealValue * projectedBrandDeals;
    const totalProjected = projectedAdRev + projectedBrandRev;

    setCurrentRevenue(totalCurrent);
    setProjectedRevenue(totalProjected);
    setCostOfInaction(totalProjected - totalCurrent);
  }, [viewers, cpm, brandDealValue]);

  // Utility to format numbers as premium currency
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <section className="py-20 bg-enterprise-navy border-b border-enterprise-blue/30" id="roi-calculator">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Calculate Your Cost of Inaction
          </h2>
          <p className="text-enterprise-light text-lg">
            See exactly how much revenue you are losing by relying on manual editing and fragmented channel management.
          </p>
        </div>

        <div className="bg-enterprise-blue/20 border border-enterprise-blue/50 rounded-2xl p-8 shadow-2xl backdrop-blur-sm flex flex-col lg:flex-row gap-12">
          
          {/* Interactive Sliders (The Client Input) */}
          <div className="flex-1 space-y-8">
            
            {/* Viewers Slider */}
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-semibold text-enterprise-light uppercase tracking-wide">Current Monthly Viewers</label>
                <span className="text-growth-accent font-mono font-bold">{viewers.toLocaleString()}</span>
              </div>
              <input 
                type="range" 
                min="50000" 
                max="5000000" 
                step="50000"
                value={viewers} 
                onChange={(e) => setViewers(Number(e.target.value))}
                className="w-full h-2 bg-enterprise-navy rounded-lg appearance-none cursor-pointer accent-growth-accent"
              />
            </div>

            {/* CPM Slider */}
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-semibold text-enterprise-light uppercase tracking-wide">Impression CPM ($)</label>
                <span className="text-growth-accent font-mono font-bold">{formatCurrency(cpm)}</span>
              </div>
              <input 
                type="range" 
                min="1" 
                max="50" 
                step="1"
                value={cpm} 
                onChange={(e) => setCpm(Number(e.target.value))}
                className="w-full h-2 bg-enterprise-navy rounded-lg appearance-none cursor-pointer accent-growth-accent"
              />
            </div>

            {/* Brand Deal Slider */}
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-semibold text-enterprise-light uppercase tracking-wide">Avg. Brand Deal Value</label>
                <span className="text-growth-accent font-mono font-bold">{formatCurrency(brandDealValue)}</span>
              </div>
              <input 
                type="range" 
                min="1000" 
                max="50000" 
                step="1000"
                value={brandDealValue} 
                onChange={(e) => setBrandDealValue(Number(e.target.value))}
                className="w-full h-2 bg-enterprise-navy rounded-lg appearance-none cursor-pointer accent-growth-accent"
              />
            </div>
          </div>

          {/* Mathematical Proof Output (The Pitch) */}
          <div className="flex-1 bg-enterprise-navy/50 rounded-xl p-8 border border-enterprise-blue">
            <div className="space-y-6">
              
              <div className="flex justify-between items-center border-b border-enterprise-blue/50 pb-4">
                <span className="text-enterprise-light font-medium">Current Monthly Revenue</span>
                <span className="text-white font-mono text-xl">{formatCurrency(currentRevenue)}</span>
              </div>

              <div className="flex justify-between items-center border-b border-enterprise-blue/50 pb-4">
                <span className="text-enterprise-light font-medium">Projected Hub-and-Spoke Revenue</span>
                <span className="text-growth-accent font-mono text-xl">{formatCurrency(projectedRevenue)}</span>
              </div>

              <div className="pt-4">
                <span className="block text-sm font-bold text-red-400 uppercase tracking-wider mb-2">Monthly Cost of Inaction</span>
                <span className="block text-5xl font-extrabold text-white tracking-tighter drop-shadow-lg">
                  {formatCurrency(costOfInaction)}
                </span>
                <p className="text-xs text-enterprise-light mt-4 leading-relaxed">
                  *Projection based on automating 10+ spoke channels and increasing direct-to-brand ad inventory via our proprietary infrastructure.
                </p>
              </div>

            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
              }
