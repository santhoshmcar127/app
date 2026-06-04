import React from 'react';
import { ArrowRight, Terminal, Sparkles, ShieldCheck, Zap } from 'lucide-react';

export default function Hero() {
  const handleScrollTo = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section 
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '120px 24px 80px 24px',
        overflow: 'hidden',
        background: 'radial-gradient(circle at 50% 30%, rgba(99, 102, 241, 0.08), transparent 60%)'
      }}
    >
      {/* Background Tech Grid */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          backgroundPosition: 'center center',
          maskImage: 'radial-gradient(ellipse 60% 50% at 50% 50%, #000 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 60% 50% at 50% 50%, #000 40%, transparent 100%)',
          pointerEvents: 'none'
        }}
      />

      <div 
        style={{
          maxWidth: '1000px',
          width: '100%',
          textAlign: 'center',
          zIndex: 10,
          position: 'relative'
        }}
      >
        {/* Release Version Badge */}
        <div 
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(99, 102, 241, 0.1)',
            border: '1px solid rgba(99, 102, 241, 0.25)',
            padding: '6px 14px',
            borderRadius: '100px',
            marginBottom: '28px',
            fontSize: '0.85rem',
            fontWeight: 600,
            color: 'var(--text-primary)',
            boxShadow: '0 0 15px rgba(99, 102, 241, 0.1)'
          }}
          className="pulse-border"
        >
          <Sparkles size={14} style={{ color: 'var(--secondary)' }} />
          <span>v3.0 Next-Gen Agent Engine Live</span>
        </div>

        {/* Heading */}
        <h1 
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            lineHeight: 1.15,
            fontWeight: 800,
            marginBottom: '20px',
            letterSpacing: '-0.03em'
          }}
        >
          Orchestrate AI Workflows <br />
          <span className="text-gradient-neon">With absolute autonomy.</span>
        </h1>

        {/* Subtitle */}
        <p 
          style={{
            fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
            color: 'var(--text-secondary)',
            maxWidth: '650px',
            margin: '0 auto 40px auto',
            fontWeight: 400
          }}
        >
          Design, simulate, and deploy self-healing AI agent fleets that seamlessly automate your development pipelines, analytics, and ops workflows.
        </p>

        {/* Hero Actions */}
        <div 
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '16px',
            marginBottom: '60px'
          }}
        >
          <button 
            onClick={() => handleScrollTo('simulator')}
            className="btn-primary"
            style={{ fontSize: '1.05rem' }}
          >
            Launch Live Builder <ArrowRight size={18} />
          </button>
          
          <button 
            onClick={() => handleScrollTo('features')}
            className="btn-secondary"
            style={{ fontSize: '1.05rem' }}
          >
            Explore Capabilities
          </button>
        </div>

        {/* Feature quick stats */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '24px',
            maxWidth: '800px',
            margin: '0 auto',
            padding: '24px',
            borderTop: '1px solid var(--border-color)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', justifyContent: 'center' }}>
            <Zap size={20} style={{ color: 'var(--secondary)' }} />
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontWeight: 700, fontSize: '1.1rem' }}>99.98%</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Uptime Reliability</div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', justifyContent: 'center' }}>
            <Terminal size={20} style={{ color: 'var(--primary)' }} />
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontWeight: 700, fontSize: '1.1rem' }}>&lt; 50ms</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Execution Latency</div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', justifyContent: 'center' }}>
            <ShieldCheck size={20} style={{ color: 'var(--success)' }} />
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontWeight: 700, fontSize: '1.1rem' }}>SOC-2 Type II</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Enterprise Secure</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
