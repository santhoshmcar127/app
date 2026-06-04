import React, { useState } from 'react';
import { Check, Info } from 'lucide-react';

export default function PricingSlider() {
  const [sliderVal, setSliderVal] = useState(30);

  const calculateMetrics = (val: number) => {
    const runs = Math.round(10000 + (val / 100) * 990000);
    
    let price = 29;
    let name = 'Developer Sandbox';
    let seats = 2;
    let savings = Math.round(runs * 0.04);
    let features = [
      '3 active AI agent pipelines',
      'Standard model routing (GPT-4o mini)',
      'Basic webhook triggers',
      'Community forum support'
    ];

    if (val > 25 && val <= 70) {
      price = Math.round(79 + ((val - 25) / 45) * 220);
      name = 'Growth Scale';
      seats = Math.round(5 + ((val - 25) / 45) * 15);
      features = [
        'Unlimited active agent pipelines',
        'Advanced model routing (Claude 3.5 Sonnet)',
        'Pre-allocation node instances',
        'Priority email/Slack support'
      ];
    } else if (val > 70) {
      price = Math.round(299 + ((val - 70) / 30) * 700);
      name = 'Enterprise Fleet';
      seats = Math.round(20 + ((val - 70) / 30) * 30);
      features = [
        'Custom private agent models',
        'SOC-2 audited security environment',
        'Guaranteed <15ms Edge SLAs',
        '24/7 dedicated solutions engineer'
      ];
    }

    return { runs, price, name, seats, savings, features };
  };

  const { runs, price, name, seats, savings, features } = calculateMetrics(sliderVal);

  const formatNumber = (num: number) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(0)}K`;
    return num.toString();
  };

  return (
    <section 
      id="pricing"
      style={{
        padding: '100px 24px',
        background: 'rgba(10, 11, 16, 0.3)',
        position: 'relative'
      }}
    >
      <div className="glow-blob blob-cyan" />

      <div 
        style={{
          maxWidth: '900px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 10
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '16px' }}>
            Scale-On-Demand <span className="text-gradient">Pricing Models</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
            Only pay for the computational workflow volume you consume. Drag the slider to configure your plan variables dynamically.
          </p>
        </div>

        <div 
          className="glass-panel pricing-card-grid"
          style={{
            padding: '36px',
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '32px'
          }}
        >
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '12px' }}>
              <span style={{ fontSize: '1.1rem', fontWeight: 600 }}>Workflow Executions</span>
              <span style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--secondary)' }}>
                {formatNumber(runs)} <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 400 }}>runs/mo</span>
              </span>
            </div>

            <div style={{ position: 'relative', marginBottom: '40px', padding: '10px 0' }}>
              <input
                type="range"
                min="0"
                max="100"
                value={sliderVal}
                onChange={(e) => setSliderVal(Number(e.target.value))}
                style={{
                  width: '100%',
                  height: '6px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '10px',
                  outline: 'none',
                  appearance: 'none',
                  cursor: 'pointer'
                }}
                className="custom-slider-input"
              />
              <div 
                style={{
                  position: 'absolute',
                  top: '12px',
                  left: 0,
                  width: `${sliderVal}%`,
                  height: '6px',
                  background: 'linear-gradient(90deg, var(--secondary), var(--primary))',
                  borderRadius: '10px',
                  pointerEvents: 'none'
                }}
              />
            </div>

            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '20px',
                marginBottom: '32px'
              }}
            >
              <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '16px' }}>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '4px' }}>Team Seats Included</div>
                <div style={{ fontSize: '1.25rem', fontWeight: 700 }}>{seats} Members</div>
              </div>
              
              <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '16px' }}>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '4px' }}>Est. Developer Savings</div>
                <div style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--success)' }}>${savings.toLocaleString()}/mo</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '0.8rem' }}>
              <Info size={14} style={{ color: 'var(--secondary)' }} />
              <span>Developer savings are computed at a median rate of $60/hr for engineering task assembly.</span>
            </div>
          </div>

          <div 
            style={{
              background: 'rgba(255, 255, 255, 0.01)',
              borderLeft: '1px solid var(--border-color)',
              paddingLeft: '32px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
            className="pricing-detail-panel"
          >
            <div>
              <div 
                style={{
                  display: 'inline-block',
                  background: 'rgba(6, 182, 212, 0.1)',
                  color: 'var(--secondary)',
                  padding: '4px 10px',
                  borderRadius: '6px',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  marginBottom: '16px'
                }}
              >
                {name}
              </div>

              <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '24px' }}>
                <span style={{ fontSize: '2.5rem', fontWeight: 800 }}>${price}</span>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>/month</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
                {features.map((feature, index) => (
                  <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.88rem' }}>
                    <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Check size={12} style={{ color: 'var(--success)' }} />
                    </div>
                    <span style={{ color: 'var(--text-secondary)' }}>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <button 
              className="btn-primary" 
              style={{ width: '100%', justifyContent: 'center' }}
              onClick={() => alert(`Starting setup for plan: ${name} (${formatNumber(runs)} runs)`)}
            >
              Provision Selected Plan
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .pricing-card-grid {
            grid-template-columns: 1.2fr 1fr !important;
          }
        }
        @media (max-width: 767px) {
          .pricing-detail-panel {
            border-left: none !important;
            border-top: 1px solid var(--border-color) !important;
            padding-left: 0 !important;
            padding-top: 32px !important;
          }
        }
        .custom-slider-input::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: var(--text-primary);
          border: 2px solid var(--primary);
          box-shadow: 0 0 10px rgba(99, 102, 241, 0.5);
          cursor: pointer;
          transition: transform 0.1s ease;
        }
        .custom-slider-input::-webkit-slider-thumb:hover {
          transform: scale(1.2);
        }
      `}</style>
    </section>
  );
}
