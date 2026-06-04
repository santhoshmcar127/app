import React, { useState, useEffect } from 'react';
import { Play, RotateCcw, Server, Bot, Compass, Database, Globe, Mail, MessageSquare, Send } from 'lucide-react';

interface Option {
  id: string;
  name: string;
  desc: string;
  icon: any;
}

const triggers: Option[] = [
  { id: 'webhook', name: 'Webhook Request', desc: 'Runs when custom external payload arrives', icon: Globe },
  { id: 'git', name: 'GitHub Push Event', desc: 'Triggered by a push to main branch', icon: Compass },
  { id: 'payment', name: 'Stripe Sale Successful', desc: 'Fires when user purchases plan', icon: Database },
];

const actions: Option[] = [
  { id: 'summarize', name: 'AI Synthesize', desc: 'Extract key insights & metrics via AI model', icon: Bot },
  { id: 'verify', name: 'Auto Quality Test', desc: 'Lints and runs unit test coverage check', icon: Server },
  { id: 'enrich', name: 'User Info Enrichment', desc: 'Appends public LinkedIn profiles to profile data', icon: Compass },
];

const endpoints: Option[] = [
  { id: 'slack', name: 'Post Slack Alert', desc: 'Alert engineering team channel', icon: MessageSquare },
  { id: 'email', name: 'Send Client Email', desc: 'Emails PDF report digest to client', icon: Mail },
  { id: 'api', name: 'Dispatch REST API Call', desc: 'Synchronizes custom external webhook database', icon: Send },
];

export default function WorkflowDemo() {
  const [selectedTrigger, setSelectedTrigger] = useState(triggers[0]);
  const [selectedAction, setSelectedAction] = useState(actions[0]);
  const [selectedEndpoint, setSelectedEndpoint] = useState(endpoints[0]);
  
  const [isRunning, setIsRunning] = useState(false);
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [logs, setLogs] = useState<string[]>([]);

  const startSimulation = () => {
    if (isRunning) return;
    setIsRunning(true);
    setLogs([]);
    setActiveStep(0);
  };

  const resetSimulation = () => {
    setIsRunning(false);
    setActiveStep(null);
    setLogs([]);
  };

  useEffect(() => {
    if (!isRunning || activeStep === null) return;

    let timer: any;

    if (activeStep === 0) {
      setLogs([`[0.0s] 🟢 INITIALIZED: Trigger source "${selectedTrigger.name}" detected.`]);
      timer = setTimeout(() => {
        setLogs(prev => [
          ...prev,
          `[0.8s] 📨 PAYLOAD RECEIVED: Parsing headers and loading secure environment...`,
          `[1.5s] ⚡ FLOW ROUTED: Forwarding payload variables to operational step.`
        ]);
        setActiveStep(1);
      }, 1800);
    } else if (activeStep === 1) {
      timer = setTimeout(() => {
        setLogs(prev => [
          ...prev,
          `[2.0s] 🧠 AI ENGINE: Commencing task "${selectedAction.name}"...`,
          `[2.8s] 🧬 PROCESSING: Optimizing weights, resolving tokens, executing subroutines...`,
          `[3.6s] ✅ SUCCESS: Agent output verified without faults.`
        ]);
        setActiveStep(2);
      }, 2200);
    } else if (activeStep === 2) {
      timer = setTimeout(() => {
        setLogs(prev => [
          ...prev,
          `[4.0s] 📤 DISPATCH: Preparing target protocol for "${selectedEndpoint.name}"...`,
          `[4.6s] 🔗 SYNCHRONIZED: Successfully synced remote host databases.`,
          `[5.0s] 🎉 COMPLETE: Workflow pipeline finished execution successfully.`
        ]);
        setActiveStep(3);
        setIsRunning(false);
      }, 2000);
    }

    return () => clearTimeout(timer);
  }, [isRunning, activeStep]);

  return (
    <section 
      id="simulator"
      style={{
        padding: '100px 24px',
        background: 'rgba(10, 11, 16, 0.5)',
        position: 'relative'
      }}
    >
      <div className="glow-blob blob-purple" />
      
      <div 
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 10
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '16px' }}>
            Interactive <span className="text-gradient">Workflow Console</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
            Choose triggering events, configure an autonomous action step, and dispatch updates instantly. Run the builder console to see it stream live executions.
          </p>
        </div>

        {/* Console Box Layout */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '32px',
          }}
          className="simulator-grid"
        >
          {/* Configuration Workspace */}
          <div className="glass-panel" style={{ padding: '24px' }}>
            <h3 style={{ marginBottom: '24px', fontSize: '1.25rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Server size={18} style={{ color: 'var(--primary)' }} />
              Pipeline Configuration
            </h3>

            {/* Triggers Selector */}
            <div style={{ marginBottom: '24px' }}>
              <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px' }}>
                1. Select Trigger Event
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px' }}>
                {triggers.map((item) => {
                  const Icon = item.icon;
                  const isSelected = selectedTrigger.id === item.id;
                  return (
                    <div
                      key={item.id}
                      onClick={() => !isRunning && setSelectedTrigger(item)}
                      style={{
                        padding: '16px',
                        borderRadius: '12px',
                        border: isSelected ? '1px solid var(--primary)' : '1px solid var(--border-color)',
                        background: isSelected ? 'rgba(99, 102, 241, 0.08)' : 'rgba(255, 255, 255, 0.02)',
                        cursor: isRunning ? 'not-allowed' : 'pointer',
                        transition: 'var(--transition-smooth)',
                        opacity: isRunning && !isSelected ? 0.5 : 1
                      }}
                      onMouseEnter={(e) => {
                        if (!isRunning && !isSelected) {
                          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isRunning && !isSelected) {
                          e.currentTarget.style.borderColor = 'var(--border-color)';
                        }
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                        <Icon size={16} style={{ color: isSelected ? 'var(--primary)' : 'var(--text-secondary)' }} />
                        <span style={{ fontWeight: 600, fontSize: '0.95rem' }}>{item.name}</span>
                      </div>
                      <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{item.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Actions Selector */}
            <div style={{ marginBottom: '24px' }}>
              <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px' }}>
                2. Select Automation Action
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px' }}>
                {actions.map((item) => {
                  const Icon = item.icon;
                  const isSelected = selectedAction.id === item.id;
                  return (
                    <div
                      key={item.id}
                      onClick={() => !isRunning && setSelectedAction(item)}
                      style={{
                        padding: '16px',
                        borderRadius: '12px',
                        border: isSelected ? '1px solid var(--secondary)' : '1px solid var(--border-color)',
                        background: isSelected ? 'rgba(6, 182, 212, 0.08)' : 'rgba(255, 255, 255, 0.02)',
                        cursor: isRunning ? 'not-allowed' : 'pointer',
                        transition: 'var(--transition-smooth)',
                        opacity: isRunning && !isSelected ? 0.5 : 1
                      }}
                      onMouseEnter={(e) => {
                        if (!isRunning && !isSelected) {
                          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isRunning && !isSelected) {
                          e.currentTarget.style.borderColor = 'var(--border-color)';
                        }
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                        <Icon size={16} style={{ color: isSelected ? 'var(--secondary)' : 'var(--text-secondary)' }} />
                        <span style={{ fontWeight: 600, fontSize: '0.95rem' }}>{item.name}</span>
                      </div>
                      <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{item.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Endpoints Selector */}
            <div style={{ marginBottom: '32px' }}>
              <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px' }}>
                3. Select Integration Destination
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px' }}>
                {endpoints.map((item) => {
                  const Icon = item.icon;
                  const isSelected = selectedEndpoint.id === item.id;
                  return (
                    <div
                      key={item.id}
                      onClick={() => !isRunning && setSelectedEndpoint(item)}
                      style={{
                        padding: '16px',
                        borderRadius: '12px',
                        border: isSelected ? '1px solid var(--accent)' : '1px solid var(--border-color)',
                        background: isSelected ? 'rgba(217, 70, 239, 0.08)' : 'rgba(255, 255, 255, 0.02)',
                        cursor: isRunning ? 'not-allowed' : 'pointer',
                        transition: 'var(--transition-smooth)',
                        opacity: isRunning && !isSelected ? 0.5 : 1
                      }}
                      onMouseEnter={(e) => {
                        if (!isRunning && !isSelected) {
                          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isRunning && !isSelected) {
                          e.currentTarget.style.borderColor = 'var(--border-color)';
                        }
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                        <Icon size={16} style={{ color: isSelected ? 'var(--accent)' : 'var(--text-secondary)' }} />
                        <span style={{ fontWeight: 600, fontSize: '0.95rem' }}>{item.name}</span>
                      </div>
                      <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{item.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Run Actions */}
            <div style={{ display: 'flex', gap: '16px' }}>
              <button 
                onClick={startSimulation}
                className="btn-primary"
                disabled={isRunning}
                style={{
                  opacity: isRunning ? 0.7 : 1,
                  cursor: isRunning ? 'not-allowed' : 'pointer',
                  flex: 1,
                  justifyContent: 'center'
                }}
              >
                <Play size={18} fill="white" />
                {isRunning ? 'Running Simulation...' : 'Execute AI Pipeline'}
              </button>
              
              <button 
                onClick={resetSimulation}
                className="btn-secondary"
                disabled={logs.length === 0}
                style={{
                  opacity: logs.length === 0 ? 0.4 : 1,
                  cursor: logs.length === 0 ? 'default' : 'pointer'
                }}
              >
                <RotateCcw size={18} />
              </button>
            </div>
          </div>

          {/* Interactive Pipeline Visualizer and Live Terminal Logs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Visual Node Diagram */}
            <div className="glass-panel" style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '12px',
                  position: 'relative',
                  padding: '20px 0'
                }}
                className="pipeline-visualizer"
              >
                {/* Node 1: Trigger */}
                <div 
                  style={{
                    flex: 1,
                    textAlign: 'center',
                    padding: '16px 8px',
                    borderRadius: '12px',
                    border: '1px solid var(--border-color)',
                    background: activeStep === 0 ? 'rgba(99, 102, 241, 0.15)' : 'rgba(255, 255, 255, 0.02)',
                    borderColor: activeStep === 0 ? 'var(--primary)' : 'var(--border-color)',
                    boxShadow: activeStep === 0 ? '0 0 20px rgba(99, 102, 241, 0.3)' : 'none',
                    transition: 'var(--transition-smooth)',
                    zIndex: 2
                  }}
                >
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(99, 102, 241, 0.15)', display: 'flex', alignItems: 'center', justifySelf: 'center', justifyContent: 'center', marginBottom: '8px' }}>
                    {React.createElement(selectedTrigger.icon, { size: 20, style: { color: 'var(--primary)' } })}
                  </div>
                  <div style={{ fontWeight: 600, fontSize: '0.85rem' }}>{selectedTrigger.name}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Trigger Source</div>
                </div>

                {/* Line 1 */}
                <div style={{ flex: '0 0 40px', height: '2px', background: 'var(--border-color)', position: 'relative' }} className="connector-line">
                  <div 
                    style={{
                      position: 'absolute',
                      left: 0,
                      top: 0,
                      height: '100%',
                      width: activeStep !== null && activeStep >= 1 ? '100%' : '0%',
                      background: 'var(--secondary)',
                      transition: 'width 1s ease'
                    }}
                  />
                </div>

                {/* Node 2: Action */}
                <div 
                  style={{
                    flex: 1,
                    textAlign: 'center',
                    padding: '16px 8px',
                    borderRadius: '12px',
                    border: '1px solid var(--border-color)',
                    background: activeStep === 1 ? 'rgba(6, 182, 212, 0.15)' : 'rgba(255, 255, 255, 0.02)',
                    borderColor: activeStep === 1 ? 'var(--secondary)' : 'var(--border-color)',
                    boxShadow: activeStep === 1 ? '0 0 20px rgba(6, 182, 212, 0.3)' : 'none',
                    transition: 'var(--transition-smooth)',
                    zIndex: 2
                  }}
                >
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(6, 182, 212, 0.15)', display: 'flex', alignItems: 'center', justifySelf: 'center', justifyContent: 'center', marginBottom: '8px' }}>
                    {React.createElement(selectedAction.icon, { size: 20, style: { color: 'var(--secondary)' } })}
                  </div>
                  <div style={{ fontWeight: 600, fontSize: '0.85rem' }}>{selectedAction.name}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>AI Processing</div>
                </div>

                {/* Line 2 */}
                <div style={{ flex: '0 0 40px', height: '2px', background: 'var(--border-color)', position: 'relative' }} className="connector-line">
                  <div 
                    style={{
                      position: 'absolute',
                      left: 0,
                      top: 0,
                      height: '100%',
                      width: activeStep !== null && activeStep >= 2 ? '100%' : '0%',
                      background: 'var(--accent)',
                      transition: 'width 1s ease'
                    }}
                  />
                </div>

                {/* Node 3: Endpoint */}
                <div 
                  style={{
                    flex: 1,
                    textAlign: 'center',
                    padding: '16px 8px',
                    borderRadius: '12px',
                    border: '1px solid var(--border-color)',
                    background: activeStep === 2 ? 'rgba(217, 70, 239, 0.15)' : 'rgba(255, 255, 255, 0.02)',
                    borderColor: activeStep === 2 ? 'var(--accent)' : 'var(--border-color)',
                    boxShadow: activeStep === 2 ? '0 0 20px rgba(217, 70, 239, 0.3)' : 'none',
                    transition: 'var(--transition-smooth)',
                    zIndex: 2
                  }}
                >
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(217, 70, 239, 0.15)', display: 'flex', alignItems: 'center', justifySelf: 'center', justifyContent: 'center', marginBottom: '8px' }}>
                    {React.createElement(selectedEndpoint.icon, { size: 20, style: { color: 'var(--accent)' } })}
                  </div>
                  <div style={{ fontWeight: 600, fontSize: '0.85rem' }}>{selectedEndpoint.name}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Target Host</div>
                </div>
              </div>
            </div>

            {/* Terminal Panel */}
            <div 
              style={{
                flex: 1,
                minHeight: '260px',
                background: '#040508',
                border: '1px solid var(--border-color)',
                borderRadius: '16px',
                fontFamily: 'monospace',
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: 'inset 0 0 15px rgba(0, 0, 0, 0.8)'
              }}
            >
              {/* Terminal Header */}
              <div 
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderBottom: '1px solid rgba(255,255,255,0.05)',
                  paddingBottom: '12px',
                  marginBottom: '16px'
                }}
              >
                <div style={{ display: 'flex', gap: '6px' }}>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ef4444' }} />
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#f59e0b' }} />
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#10b981' }} />
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>system_logs_shell</div>
              </div>

              {/* Terminal Content */}
              <div 
                style={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  fontSize: '0.85rem',
                  overflowY: 'auto',
                  maxHeight: '180px'
                }}
              >
                {logs.length === 0 ? (
                  <div style={{ color: 'var(--text-muted)' }}>
                    &gt; Console is idle. Select nodes above and trigger execution pipeline to view logs.
                  </div>
                ) : (
                  logs.map((log, index) => {
                    let color = 'var(--text-secondary)';
                    if (log.includes('🟢') || log.includes('✅') || log.includes('🎉')) {
                      color = 'var(--success)';
                    } else if (log.includes('🧠') || log.includes('📨')) {
                      color = 'var(--secondary)';
                    } else if (log.includes('⚡') || log.includes('⚙️')) {
                      color = 'var(--primary)';
                    }
                    return (
                      <div key={index} style={{ color }}>
                        {log}
                      </div>
                    );
                  })
                )}
                {isRunning && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary)' }}>
                    <span className="blink-cursor">&gt;</span> Running execution steps...
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .simulator-grid {
            grid-template-columns: 1.2fr 1fr !important;
          }
        }
        @media (max-width: 576px) {
          .pipeline-visualizer {
            flex-direction: column !important;
            gap: 20px !important;
          }
          .connector-line {
            display: none !important;
          }
        }
        .blink-cursor {
          animation: blink 1s step-end infinite;
        }
        @keyframes blink {
          from, to { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  );
}
