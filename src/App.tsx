import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import WorkflowDemo from './sections/WorkflowDemo';
import Features from './sections/Features';
import PricingSlider from './sections/PricingSlider';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh', overflowX: 'hidden' }}>
      {/* Absolute Ambient Background Blobs */}
      <div className="glow-blob blob-indigo" style={{ top: '5%', left: '-5%' }} />
      <div className="glow-blob blob-cyan" style={{ top: '25%', right: '-10%' }} />
      <div className="glow-blob blob-purple" style={{ top: '55%', left: '15%' }} />
      <div className="glow-blob blob-indigo" style={{ bottom: '15%', right: '5%' }} />

      {/* Navigation Header */}
      <Navbar />

      {/* Main Sections */}
      <main>
        <Hero />
        <Features />
        <WorkflowDemo />
        <PricingSlider />
        <Testimonials />
        <Contact />
      </main>

      {/* Footer Branding & Links */}
      <Footer />
    </div>
  );
}
