/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { FeatureSection } from './components/FeatureSection';
import { BentoGrid } from './components/BentoGrid';
import { FlippaBanner } from './components/FlippaBanner';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-dark-900 selection:bg-brand-500/30">
      <Navbar />
      
      <main>
        <HeroSection />
        <FeatureSection />
        <BentoGrid />
        <FlippaBanner />
      </main>
      
      <Footer />
    </div>
  );
}
