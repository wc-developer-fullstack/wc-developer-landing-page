
import React, { useState, useEffect } from 'react';
import { Menu, X, Code2, ArrowRight, Github, Linkedin, Instagram, Mail } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  // Scroll Lock Logic
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      // Background and scroll progress logic
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
      setIsScrolled(window.scrollY > 20);

      // Active section detection
      const sections = ['home', 'services', 'projects', 'tech', 'testimonials', 'faq'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home', id: 'home' },
    { name: 'Serviços', href: '#services', id: 'services' },
    { name: 'Portfólio', href: '#projects', id: 'projects' },
    { name: 'Stack', href: '#tech', id: 'tech' },
    { name: 'FAQ', href: '#faq', id: 'faq' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = isScrolled ? 80 : 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 md:px-6 ${isScrolled ? 'pt-3' : 'pt-6'}`}>
      {/* Reading Progress Bar */}
      <div className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-emerald-500 to-teal-400 z-[60] transition-all duration-150 ease-out" style={{ width: `${scrollProgress}%` }} />

      <header 
        className={`max-w-7xl mx-auto transition-all duration-500 rounded-[2rem] border relative overflow-hidden ${
          isScrolled 
            ? 'bg-zinc-950/80 backdrop-blur-2xl border-zinc-800/80 shadow-[0_20px_50px_rgba(0,0,0,0.4)] py-2.5 px-6' 
            : 'bg-transparent border-transparent py-4 px-2'
        }`}
      >
        {/* Subtle radial glow inside the header */}
        <div className={`absolute -bottom-1/2 left-1/2 -translate-x-1/2 w-1/2 h-full bg-emerald-500/5 blur-[40px] rounded-full -z-10 transition-opacity duration-500 ${isScrolled ? 'opacity-100' : 'opacity-0'}`} />

        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <a 
            href="#home" 
            onClick={(e) => handleLinkClick(e, 'home')}
            className="flex items-center gap-3 group shrink-0"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-500 blur-md opacity-20 group-hover:opacity-40 transition-opacity" />
              <div className="relative w-10 h-10 bg-zinc-900 border border-zinc-800 rounded-xl flex items-center justify-center transition-all group-hover:scale-110 group-hover:border-emerald-500/50 group-hover:rotate-6">
                <Code2 className="text-emerald-500 w-6 h-6" />
              </div>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-lg font-black tracking-tighter text-white">
                WC<span className="text-emerald-500">Developer</span>
              </span>
              <span className="text-[9px] uppercase tracking-[0.3em] text-zinc-500 font-bold group-hover:text-emerald-400/70 transition-colors">Full Stack Expert</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center bg-zinc-900/40 border border-zinc-800/50 rounded-full px-1.5 py-1 backdrop-blur-sm">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={(e) => handleLinkClick(e, link.id)}
                className={`px-5 py-2 text-[11px] font-black uppercase tracking-widest transition-all relative rounded-full group ${
                  activeSection === link.id 
                    ? 'text-emerald-400' 
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                <span className="relative z-10">{link.name}</span>
                {activeSection === link.id && (
                  <div className="absolute inset-0 bg-emerald-500/10 rounded-full border border-emerald-500/20 shadow-lg" />
                )}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-emerald-500 rounded-full transition-all group-hover:w-1/2 opacity-0 group-hover:opacity-100" />
              </a>
            ))}
          </nav>

          {/* Action Button */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="https://wa.me/5519997603480"
              className="group relative flex items-center gap-2 bg-emerald-500 text-zinc-950 px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-wider transition-all hover:scale-105 hover:bg-emerald-400 active:scale-95 shadow-lg shadow-emerald-500/20 overflow-hidden"
            >
              <span className="relative z-10">Orçamento</span>
              <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={`md:hidden w-11 h-11 border rounded-xl flex items-center justify-center transition-all active:scale-90 z-[60] ${
              isMenuOpen 
                ? 'bg-emerald-500 border-emerald-400 text-zinc-950' 
                : 'bg-zinc-900 border-zinc-800 text-zinc-100 hover:border-zinc-700'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Overlay Menu - Full Experience */}
      <div 
        className={`fixed inset-0 bg-zinc-950/98 backdrop-blur-3xl z-40 md:hidden transition-all duration-700 cubic-bezier(0.16, 1, 0.3, 1) ${
          isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'
        }`}
      >
        <div className="flex flex-col h-full pt-32 pb-12 px-8 relative overflow-y-auto">
          {/* Background Decor */}
          <div className="absolute top-1/4 -right-20 w-80 h-80 bg-emerald-500/5 blur-[100px] rounded-full" />
          
          <div className="flex-1 flex flex-col justify-center gap-6">
             <div className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.5em] mb-4 opacity-50">Navegação</div>
            {navLinks.map((link, idx) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={(e) => handleLinkClick(e, link.id)}
                className={`text-5xl font-black transition-all duration-700 cubic-bezier(0.16, 1, 0.3, 1) ${
                  activeSection === link.id ? 'text-emerald-500' : 'text-zinc-600'
                } ${isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
                style={{ transitionDelay: isMenuOpen ? `${idx * 100 + 100}ms` : '0ms' }}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className={`mt-12 transition-all duration-700 delay-500 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.5em] mb-6 opacity-50">Contato & Social</div>
            <div className="flex flex-wrap gap-4 mb-8">
               <a href="#" className="w-12 h-12 bg-zinc-900 border border-zinc-800 rounded-2xl flex items-center justify-center text-zinc-400 hover:text-emerald-400 transition-colors">
                  <Github className="w-5 h-5" />
               </a>
               <a href="#" className="w-12 h-12 bg-zinc-900 border border-zinc-800 rounded-2xl flex items-center justify-center text-zinc-400 hover:text-emerald-400 transition-colors">
                  <Linkedin className="w-5 h-5" />
               </a>
               <a href="#" className="w-12 h-12 bg-zinc-900 border border-zinc-800 rounded-2xl flex items-center justify-center text-zinc-400 hover:text-emerald-400 transition-colors">
                  <Instagram className="w-5 h-5" />
               </a>
               <a href="mailto:contato@wcdv.com.br" className="flex items-center gap-3 bg-zinc-900 border border-zinc-800 px-6 rounded-2xl text-zinc-400 hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                  <span className="text-sm font-bold">E-mail</span>
               </a>
            </div>

            <a 
              href="https://wa.me/5519997603480"
              className="bg-emerald-500 text-zinc-950 w-full py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 shadow-[0_20px_40px_rgba(16,185,129,0.2)] hover:bg-emerald-400 transition-all"
            >
              Iniciar Projeto
              <ArrowRight className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
