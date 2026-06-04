import React, { useState } from 'react';
import { Send, Bot, CheckCircle, Sparkles, Loader2 } from 'lucide-react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [objective, setObjective] = useState('data');
  const [message, setMessage] = useState('');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [aiAnalysis, setAiAnalysis] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      alert('Please fill out all required fields.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      let reply = '';
      if (objective === 'devops') {
        reply = `Hello ${name}! QuantumFlow Engine analyzed your objective. Recommendation: Deploy our "Continuous Deployment Mesh" with self-correcting rollback webhooks to secure your Git builds. Estimated setup time: 4 minutes.`;
      } else if (objective === 'data') {
        reply = `Hello ${name}! QuantumFlow Engine analyzed your objective. Recommendation: Utilize our "Edge Stream Weaver" to parse, clean, and pipe real-time transactional event data directly into your database.`;
      } else {
        reply = `Hello ${name}! QuantumFlow Engine analyzed your objective. Recommendation: Configure our "Intelligent Agent Scheduler" to synchronize multi-model queries across GPT and Claude models.`;
      }
      setAiAnalysis(reply);
    }, 2000);
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setObjective('data');
    setMessage('');
    setSubmitted(false);
    setAiAnalysis('');
  };

  return (
    <section 
      id="contact"
      style={{
        padding: '100px 24px',
        position: 'relative'
      }}
    >
      <div className="glow-blob blob-purple" />

      <div 
        style={{
          maxWidth: '900px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 10
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '16px' }}>
            Build Your <span className="text-gradient">Custom Pipeline</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '500px', margin: '0 auto' }}>
            Describe your engineering automation goals, and let our agents formulate your optimal setup roadmap.
          </p>
        </div>

        <div 
          className="glass-panel"
          style={{
            padding: '40px',
            boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3)'
          }}
        >
          {!submitted ? (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div 
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr',
                  gap: '24px'
                }}
                className="contact-fields-grid"
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label htmlFor="name" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>Full Name *</label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Jane Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{
                      background: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid var(--border-color)',
                      borderRadius: '8px',
                      padding: '12px 16px',
                      color: 'var(--text-primary)',
                      fontSize: '0.95rem',
                      outline: 'none',
                      transition: 'var(--transition-smooth)'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label htmlFor="email" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>Work Email *</label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="jane@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                      background: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid var(--border-color)',
                      borderRadius: '8px',
                      padding: '12px 16px',
                      color: 'var(--text-primary)',
                      fontSize: '0.95rem',
                      outline: 'none',
                      transition: 'var(--transition-smooth)'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
                  />
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label htmlFor="objective" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>Primary Automation Objective</label>
                <select
                  id="objective"
                  value={objective}
                  onChange={(e) => setObjective(e.target.value)}
                  style={{
                    background: 'rgba(18, 20, 30, 0.95)',
                    border: '1px solid var(--border-color)',
                    borderRadius: '8px',
                    padding: '12px 16px',
                    color: 'var(--text-primary)',
                    fontSize: '0.95rem',
                    outline: 'none',
                    cursor: 'pointer'
                  }}
                >
                  <option value="data">Data Processing & Synced Warehouses</option>
                  <option value="devops">Continuous DevOps Deployment Pipelines</option>
                  <option value="agent">Autonomous Customer Query Agents</option>
                </select>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label htmlFor="message" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>Describe your desired workflow in detail *</label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  placeholder="Tell us what you want to connect and what triggers your action..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  style={{
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid var(--border-color)',
                    borderRadius: '8px',
                    padding: '12px 16px',
                    color: 'var(--text-primary)',
                    fontSize: '0.95rem',
                    outline: 'none',
                    resize: 'vertical',
                    fontFamily: 'inherit',
                    transition: 'var(--transition-smooth)'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
                />
              </div>

              <button 
                type="submit"
                className="btn-primary"
                disabled={isSubmitting}
                style={{
                  justifyContent: 'center',
                  padding: '14px',
                  fontSize: '1.05rem',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer'
                }}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={18} style={{ animation: 'spin 1s linear infinite' }} />
                    Analyzing Workflow Requirements...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Submit & Dispatch Agent
                  </>
                )}
              </button>
            </form>
          ) : (
            <div style={{ textAlign: 'center', padding: '20px 0', animation: 'fadeIn 0.4s ease-out' }}>
              <div 
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: 'rgba(16, 185, 129, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 24px auto',
                  color: 'var(--success)'
                }}
              >
                <CheckCircle size={32} />
              </div>

              <h3 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>Requirements Dispatched!</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '32px' }}>
                Thank you, {name}. Our coordination node successfully parsed your objective.
              </p>

              <div 
                style={{
                  background: 'rgba(99, 102, 241, 0.05)',
                  border: '1px solid rgba(99, 102, 241, 0.2)',
                  borderRadius: '16px',
                  padding: '24px',
                  textAlign: 'left',
                  maxWidth: '600px',
                  margin: '0 auto 32px auto',
                  position: 'relative'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary)', fontWeight: 600, fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '12px' }}>
                  <Bot size={16} />
                  <span>QuantumFlow Advisor Engine v3.0</span>
                </div>
                
                <p style={{ fontSize: '0.92rem', color: 'var(--text-primary)', lineHeight: 1.5 }}>
                  {aiAnalysis}
                </p>

                <div 
                  style={{
                    position: 'absolute',
                    top: '-10px',
                    right: '20px',
                    background: 'linear-gradient(135deg, var(--secondary), var(--primary))',
                    color: 'white',
                    padding: '2px 8px',
                    borderRadius: '4px',
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  <Sparkles size={8} />
                  LIVE REC
                </div>
              </div>

              <button 
                onClick={handleReset}
                className="btn-secondary"
              >
                Submit Another Request
              </button>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .contact-fields-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
