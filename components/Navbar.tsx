import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full bg-enterprise-navy border-b border-enterprise-blue/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Brand Logo Area */}
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <span className="text-white font-bold text-2xl tracking-tighter">
              Aura<span className="text-growth-accent">Sync</span>
            </span>
          </div>

          {/* Minimalist Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="#automation" className="text-enterprise-light hover:text-white transition-colors text-sm font-medium">
              Channel Automation
            </Link>
            <Link href="#hub-and-spoke" className="text-enterprise-light hover:text-white transition-colors text-sm font-medium">
              Hub-and-Spoke Intelligence
            </Link>
            <Link href="#monetization" className="text-enterprise-light hover:text-white transition-colors text-sm font-medium">
              Direct Brand Sales
            </Link>
          </div>

          {/* Primary CTA */}
          <div className="hidden md:flex items-center">
            <Link 
              href="#discovery" 
              className="bg-growth-accent hover:bg-growth-hover text-enterprise-navy font-bold py-3 px-6 rounded-md transition-all duration-200 transform hover:scale-105 shadow-[0_0_15px_rgba(0,230,118,0.3)] text-sm uppercase tracking-wide"
            >
              Book Discovery Call
            </Link>
          </div>

          {/* Mobile Menu Button (Simplified for Demo) */}
          <div className="md:hidden flex items-center">
            <button className="text-enterprise-light hover:text-white">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
