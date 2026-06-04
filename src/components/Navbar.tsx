import React, { useState, useEffect } from 'react';
import { Menu, X, Cpu, ChevronRight } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Monitor scroll for visual depth & progress bar
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
      
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'var(--transition-smooth)',
        background: scrolled ? 'rgba(10, 11, 16, 0.85)' : 'transparent',
        backdropFilter: scrolled ? 'var(--backdrop-blur)' : 'none',
        WebkitBackdropFilter: scrolled ? 'var(--backdrop-blur)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border-color)' : '1px solid transparent',
        padding: scrolled ? '12px 0' : '20px 0'
      }}
    >
      {/* Scroll Progress Bar */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: `${scrollProgress}%`,
          height: '3px',
          background: 'linear-gradient(90deg, var(--secondary), var(--primary), var(--accent))',
          transition: 'width 0.1s ease-out'
        }}
      />

      <div 
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        {/* Brand Logo */}
        <a 
          href="#" 
          onClick={(e) => handleLinkClick(e, 'hero')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            textDecoration: 'none',
            color: 'var(--text-primary)',
            fontFamily: 'var(--font-heading)',
            fontSize: '1.25rem',
            fontWeight: 800,
            letterSpacing: '-0.03em'
          }}
        >
          <div 
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 15px rgba(99, 102, 241, 0.4)'
            }}
          >
            <Cpu size={22} color="white" />
          </div>
          <span>Quantum<span style={{ color: 'var(--secondary)' }}>Flow</span></span>
        </a>

        {/* Desktop Links */}
        <div 
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '32px'
          }}
          className="desktop-menu"
        >
          {['features', 'simulator', 'pricing', 'reviews', 'contact'].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={(e) => handleLinkClick(e, item)}
              style={{
                textDecoration: 'none',
                color: 'var(--text-secondary)',
                fontSize: '0.95rem',
                fontWeight: 500,
                textTransform: 'capitalize',
                transition: 'var(--transition-smooth)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
            >
              {item}
            </a>
          ))}
          
          <a
            href="#simulator"
            onClick={(e) => handleLinkClick(e, 'simulator')}
            className="btn-primary"
            style={{
              padding: '8px 20px',
              fontSize: '0.9rem',
              borderRadius: '8px'
            }}
          >
            Launch Console <ChevronRight size={16} />
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            display: 'block',
            background: 'none',
            border: 'none',
            color: 'var(--text-primary)',
            cursor: 'pointer',
            padding: '4px'
          }}
          className="mobile-menu-toggle"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            top: '70px',
            left: 0,
            width: '100%',
            height: 'calc(100vh - 70px)',
            background: 'rgba(10, 11, 16, 0.95)',
            backdropFilter: 'var(--backdrop-blur)',
            zIndex: 99,
            display: 'flex',
            flexDirection: 'column',
            padding: '40px 24px',
            gap: '24px',
            animation: 'fadeIn 0.2s ease-out'
          }}
        >
          {['features', 'simulator', 'pricing', 'reviews', 'contact'].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={(e) => handleLinkClick(e, item)}
              style={{
                textDecoration: 'none',
                color: 'var(--text-secondary)',
                fontSize: '1.25rem',
                fontWeight: 600,
                textTransform: 'capitalize',
                borderBottom: '1px solid var(--border-color)',
                paddingBottom: '12px'
              }}
            >
              {item}
            </a>
          ))}
          <a
            href="#simulator"
            onClick={(e) => handleLinkClick(e, 'simulator')}
            className="btn-primary"
            style={{
              justifyContent: 'center',
              marginTop: '16px'
            }}
          >
            Launch Console <ChevronRight size={18} />
          </a>
        </div>
      )}

      {/* Custom responsive styling rule injection */}
      <style>{`
        @media (min-width: 768px) {
          .desktop-menu {
            display: flex !important;
          }
          .mobile-menu-toggle {
            display: none !important;
          }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </nav>
  );
}
