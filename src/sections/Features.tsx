import React from 'react';
import { Cpu, Share2, Activity, ShieldAlert, BarChart3, CloudLightning, ArrowUpRight } from 'lucide-react';

interface Feature {
  icon: any;
  title: string;
  desc: string;
  metric: string;
  metricLabel: string;
  color: string;
}

const featuresList: Feature[] = [
  {
    icon: Cpu,
    title: 'Autonomous Flow Engine',
    desc: 'Deploy self-healing workflow paths that adapt dynamically when schema definitions or target configurations shift.',
    metric: '99.98%',
    metricLabel: 'Self-Correction Rate',
    color: 'var(--primary)'
  },
  {
    icon: Share2,
    title: 'Multi-Agent Mesh',
    desc: 'Seamlessly coordinate between different agent models (GPT-4, Claude, Gemini) within a unified pipeline.',
    metric: '4x',
    metricLabel: 'Task Parallelism',
    color: 'var(--secondary)'
  },
  {
    icon: CloudLightning,
    title: 'Lightning Edge Network',
    desc: 'Workflows compile to optimized WebAssembly runtimes executing globally on cloud edge server nodes.',
    metric: '< 15ms',
    metricLabel: 'Global Latency',
    color: 'var(--accent)'
  },
  {
    icon: ShieldAlert,
    title: 'Enterprise Guardrails',
    desc: 'Audit execution security logs, enforce data privacy schemas, and restrict API permissions dynamically.',
    metric: 'SOC-2',
    metricLabel: 'Regulatory Standard',
    color: 'var(--success)'
  },
  {
    icon: BarChart3,
    title: 'Flow Telemetry Metrics',
    desc: 'Trace token counts, task completion latency, and third-party host status in our comprehensive control room.',
    metric: '1M+',
    metricLabel: 'Daily Trace Logs',
    color: 'var(--primary)'
  },
  {
    icon: Activity,
    title: 'Predictive Load Management',
    desc: 'Pre-allocate runner instances automatically based on historical load models to eliminate resource cold-starts.',
    metric: '-40%',
    metricLabel: 'Resource Savings',
    color: 'var(--secondary)'
  }
];

export default function Features() {
  return (
    <section 
      id="features"
      style={{
        padding: '100px 24px',
        position: 'relative'
      }}
    >
      <div className="glow-blob blob-indigo" />

      <div 
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 10
        }}
      >
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '16px' }}>
            Built for <span className="text-gradient-neon">Advanced AI Autonomy</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
            Our orchestration framework wraps powerful language models inside secure, deterministic guardrails to make workflow automation truly bulletproof.
          </p>
        </div>

        {/* Feature Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px'
          }}
        >
          {featuresList.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="glass-panel glass-panel-hover"
                style={{
                  padding: '32px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: '320px',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Feature Icon & Hover Decorator */}
                <div>
                  <div 
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      background: `rgba(255, 255, 255, 0.03)`,
                      border: '1px solid var(--border-color)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '24px',
                      color: item.color
                    }}
                  >
                    <Icon size={24} />
                  </div>

                  <h3 style={{ fontSize: '1.25rem', marginBottom: '12px', fontWeight: 600 }}>
                    {item.title}
                  </h3>
                  
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', marginBottom: '24px' }}>
                    {item.desc}
                  </p>
                </div>

                {/* Sub-panel metric */}
                <div 
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '20px',
                    borderTop: '1px solid var(--border-color)'
                  }}
                >
                  <div>
                    <div style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                      {item.metric}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                      {item.metricLabel}
                    </div>
                  </div>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.85rem', color: item.color, fontWeight: 500 }}>
                    <span>Details</span>
                    <ArrowUpRight size={14} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
