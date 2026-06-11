import { useState, useEffect } from 'react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const sections = ['hero', 'about', 'why-work-with-me', 'process', 'services', 'tools', 'sample-works', 'connect'];
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          setActiveSection(id);
        }
      });
    }, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const navLinks = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Process', href: '#process', id: 'process' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Sample Works', href: '#sample-works', id: 'sample-works' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-cream-light/90 backdrop-blur-md border-b border-outline-variant">
      <nav className="flex justify-between items-center w-full px-6 md:px-8 py-4 max-w-[1280px] mx-auto">
        {/* Brand logo */}
        <a 
          href="#hero" 
          className="font-headline text-2xl md:text-3xl text-primary uppercase font-black tracking-wide"
        >
          Velynne Castro
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`font-body text-[14px] uppercase tracking-widest transition-colors duration-200 ${
                  isActive
                    ? 'text-primary font-extrabold border-b-2 border-primary pb-1'
                    : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        {/* CTA Button / Mobile Menu Toggle */}
        <div className="flex items-center gap-4">
          <a
            href="https://calendly.com/velynnecastro/30min?month=2026-06"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-block bg-primary text-white px-6 py-2.5 rounded-lg font-body text-xs uppercase tracking-widest hover:bg-primary/95 transition-all active:scale-95 duration-150 shadow-sm hover:shadow"
          >
            Book a call
          </a>
          
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-charcoal hover:text-primary focus:outline-none p-1.5"
            aria-label="Toggle Menu"
          >
            <span className="material-symbols-outlined text-[28px]">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#FFF8F5] border-b border-outline-variant shadow-lg py-6 px-8 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`font-body text-[16px] uppercase tracking-widest py-2 border-b border-outline-variant/30 ${
                activeSection === link.id ? 'text-primary font-bold' : 'text-on-surface-variant'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://calendly.com/velynnecastro/30min?month=2026-06"
            target="_blank"
            rel="noreferrer"
            onClick={() => setIsMobileMenuOpen(false)}
            className="bg-primary text-white text-center py-3 rounded-lg font-body text-sm uppercase tracking-widest hover:bg-primary/90 transition-all active:scale-95"
          >
            Book a call
          </a>
        </div>
      )}
    </header>
  );
}
