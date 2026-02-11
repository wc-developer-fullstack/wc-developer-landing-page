
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ExperienceStats from './components/ExperienceStats';
import Services from './components/Services';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import { ChevronUp } from 'lucide-react';

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.438 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.63 1.438h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const App: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-zinc-100 selection:bg-emerald-500/30 selection:text-emerald-400 overflow-x-hidden">
      {/* Cinematic Background */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.05)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] brightness-100" />
      </div>

      <Header />
      
      <main className="relative z-10">
        <Hero />
        
        <div className="reveal"><ExperienceStats /></div>
        <div className="reveal"><Services /></div>
        <div className="reveal"><Projects /></div>
        <div className="reveal"><TechStack /></div>
        <div className="reveal"><Testimonials /></div>
        <div className="reveal"><FAQ /></div>
      </main>

      <Footer />
      
      {/* Modern Action Buttons */}
      <div className="fixed bottom-8 right-6 md:bottom-10 md:right-10 z-[100] flex flex-col items-center gap-4">
        {/* Scroll to Top */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className={`w-10 h-10 md:w-11 md:h-11 glass rounded-full flex items-center justify-center text-zinc-400 transition-all duration-700 hover:text-white hover:border-zinc-600 shadow-xl ${
            showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
          }`}
          aria-label="Voltar ao topo"
        >
          <ChevronUp className="w-5 h-5" />
        </button>

        {/* WhatsApp Button - Corrected and Refined */}
        <a 
          href="https://wa.me/5519998295069"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center"
        >
          {/* Kinetic Sonar Rings - Perfectly centered */}
          <div className="kinetic-ring" />
          <div className="kinetic-ring kinetic-ring-delayed" />
          
          <div className="relative w-12 h-12 md:w-14 md:h-14 bg-zinc-950 border border-emerald-500/30 text-emerald-500 rounded-2xl flex items-center justify-center transition-all duration-500 whatsapp-btn-active group-hover:scale-110 group-hover:border-emerald-500 group-hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] overflow-hidden shadow-2xl">
            {/* Glossy overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity" />
            
            {/* Custom SVG WhatsApp Icon */}
            <WhatsAppIcon className="w-6 h-6 md:w-7 md:h-7 transition-transform duration-500 group-hover:scale-110" />
            
            {/* Tooltip */}
            <div className="absolute right-[130%] opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none translate-x-4 group-hover:translate-x-0 hidden md:block">
              <div className="bg-zinc-900/95 backdrop-blur-xl px-4 py-2 rounded-xl border border-white/5 whitespace-nowrap shadow-2xl">
                <span className="text-zinc-100 text-[10px] font-black uppercase tracking-[0.2em]">Falar com Especialista</span>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default App;
