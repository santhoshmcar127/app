import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    quote: "Integrating QuantumFlow into our software pipelines completely altered our releases. We went from manual test scripts to fully autonomous self-correcting integrations, reducing our pipeline cycle time by 75%.",
    name: "Sarah Chen",
    role: "VP of Engineering",
    company: "SaaSify Systems",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80",
    rating: 5
  },
  {
    quote: "The multi-agent orchestration mesh is like having a fleet of junior developers running checkouts and validation rounds 24/7. It catches database sync inconsistencies immediately before client-facing deploys.",
    name: "Marcus Vance",
    role: "Lead DevOps Architect",
    company: "Apex Ledger",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
    rating: 5
  },
  {
    quote: "The slider pricing engine allowed us to match our infrastructure budget exactly to daily webhook calls. We run close to 400K AI summarizes monthly, saving $12,000 in monthly server overhead.",
    name: "Elena Rostova",
    role: "Director of Product Operations",
    company: "Kinetix AI",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80",
    rating: 5
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 400);
    return () => clearTimeout(timer);
  }, [activeIndex]);

  // Autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const active = testimonials[activeIndex];

  return (
    <section 
      id="reviews"
      style={{
        padding: '100px 24px',
        position: 'relative'
      }}
    >
      <div 
        style={{
          maxWidth: '800px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 10
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '16px' }}>
            Trusted by <span className="text-gradient">Industry Pioneers</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            Read how engineering organizations leverage QuantumFlow AI to automate high-impact tasks.
          </p>
        </div>

        <div 
          className="glass-panel"
          style={{
            padding: '48px 32px',
            position: 'relative',
            minHeight: '340px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            borderTop: '1px solid rgba(255, 255, 255, 0.15)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
            overflow: 'hidden'
          }}
        >
          <div style={{ position: 'absolute', top: '24px', right: '32px', opacity: 0.05, color: 'var(--text-primary)', pointerEvents: 'none' }}>
            <Quote size={120} />
          </div>

          <div 
            style={{
              opacity: isTransitioning ? 0 : 1,
              transform: isTransitioning ? 'translateY(10px)' : 'translateY(0)',
              transition: 'opacity 0.4s ease, transform 0.4s ease'
            }}
          >
            <div style={{ display: 'flex', gap: '4px', marginBottom: '24px' }}>
              {[...Array(active.rating)].map((_, i) => (
                <Star key={i} size={18} fill="currentColor" style={{ color: 'var(--secondary)' }} />
              ))}
            </div>

            <blockquote 
              style={{
                fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
                fontWeight: 400,
                lineHeight: 1.5,
                color: 'var(--text-primary)',
                marginBottom: '32px',
                fontStyle: 'italic'
              }}
            >
              "{active.quote}"
            </blockquote>
          </div>

          <div 
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '20px',
              borderTop: '1px solid var(--border-color)',
              paddingTop: '24px',
              opacity: isTransitioning ? 0 : 1,
              transition: 'opacity 0.4s ease'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div 
                style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: '50%',
                  padding: '2px',
                  background: 'linear-gradient(135deg, var(--secondary), var(--primary))',
                  boxShadow: '0 0 10px rgba(6, 182, 212, 0.2)'
                }}
              >
                <img 
                  src={active.avatar} 
                  alt={active.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    objectFit: 'cover'
                  }} 
                />
              </div>

              <div>
                <div style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '1.05rem' }}>{active.name}</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{active.role}, <span style={{ color: 'var(--primary)', fontWeight: 500 }}>{active.company}</span></div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px' }}>
              <button 
                onClick={handlePrev}
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-primary)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'var(--transition-smooth)'
                }}
              >
                <ChevronLeft size={20} />
              </button>

              <button 
                onClick={handleNext}
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-primary)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'var(--transition-smooth)'
                }}
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '24px' }}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!isTransitioning && index !== activeIndex) {
                  setIsTransitioning(true);
                  setActiveIndex(index);
                }
              }}
              style={{
                width: index === activeIndex ? '24px' : '8px',
                height: '8px',
                borderRadius: '4px',
                background: index === activeIndex ? 'var(--secondary)' : 'rgba(255, 255, 255, 0.2)',
                border: 'none',
                cursor: 'pointer',
                transition: 'var(--transition-smooth)'
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
