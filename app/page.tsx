import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import RoiCalculator from '../components/RoiCalculator';
import FeaturesToValue from '../components/FeaturesToValue';
import AiPersonalization from '../components/AiPersonalization';
import ResourceHub from '../components/ResourceHub';
import SocialProof from '../components/SocialProof';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A1428] text-white">
      <Navbar />
      <Hero />
      <SocialProof />
      <div className="py-10">
        <RoiCalculator />
      </div>
      <FeaturesToValue />
      <AiPersonalization />
      <ResourceHub />
      <Footer />
    </main>
  );
}
