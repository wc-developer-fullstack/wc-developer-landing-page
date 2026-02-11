
import React from 'react';
import { Rocket, ChevronRight, Sparkles, Terminal, ShieldCheck, Database, Code2 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 px-6 overflow-hidden min-h-[90vh] flex flex-col items-center justify-center">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 blur-[120px] rounded-full -z-10 animate-pulse" />

      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        
        {/* Profile Avatar with Refined Animations */}
        <div className="relative mb-12 animate__animated animate__fadeIn">
          {/* Subtle pulsing rings */}
          <div className="absolute inset-0 animate-pulse-ring rounded-full bg-emerald-500/10" />
          
          {/* Rotating gradient border - Slowed down and softened */}
          <div className="absolute -inset-3 bg-gradient-to-tr from-emerald-500/40 via-teal-400/20 to-emerald-600/40 rounded-full animate-spin-slow opacity-50 blur-[1px]" />
          
          <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full p-2 bg-zinc-950">
            <div className="w-full h-full rounded-full overflow-hidden border border-emerald-500/20 bg-zinc-900 shadow-2xl relative">
              <img 
                src="https://i.ibb.co/LhdX8fVy/IMG-20251007-133456-198.webp" 
                alt="WC Developer Profile" 
                className="w-full h-full object-cover transition-all duration-1000 scale-105 hover:scale-115"
              />
            </div>
          </div>
          
          {/* Floating badges with staggered float animations */}
          <div className="absolute -bottom-2 -right-2 bg-emerald-500 border-2 border-zinc-950 px-3 py-1 rounded-full flex items-center gap-1 shadow-xl animate-float z-20">
            <ShieldCheck className="w-4 h-4 text-zinc-950" />
            <span className="text-[10px] font-black text-zinc-950 uppercase tracking-tighter">Full Stack Expert</span>
          </div>
          <div className="absolute top-0 -left-6 bg-zinc-900 border border-zinc-800 p-2 rounded-xl shadow-2xl animate-float" style={{ animationDelay: '1.5s' }}>
            <Database className="w-5 h-5 text-emerald-400/70" />
          </div>
          <div className="absolute top-10 -right-8 bg-zinc-900 border border-zinc-800 p-2 rounded-xl shadow-2xl animate-float" style={{ animationDelay: '0.5s' }}>
            <Code2 className="w-5 h-5 text-teal-400/70" />
          </div>
        </div>

        <div className="inline-flex items-center gap-2 bg-emerald-500/5 border border-emerald-500/10 rounded-full px-4 py-1.5 mb-8 animate__animated animate__fadeIn">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
          </span>
          <span className="text-emerald-400/80 text-[10px] font-bold uppercase tracking-[0.3em]">Sistemas Web • Automação • Pagamentos</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1] tracking-tighter mb-8 animate__animated animate__fadeInUp" style={{ animationDuration: '1.2s' }}>
          Soluções <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">Full Stack</span> para desafios reais.
        </h1>

        <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mb-12 font-light leading-relaxed animate__animated animate__fadeInUp" style={{ animationDelay: '0.3s', animationDuration: '1.2s' }}>
          De interfaces impecáveis em <span className="text-emerald-400/80 font-medium">React</span> a backends robustos com <span className="text-emerald-400/80 font-medium">integração de pagamentos</span> e <span className="text-emerald-400/80 font-medium">Supabase</span>. 
          Mais de 10 anos orquestrando tecnologia para impulsionar negócios.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center animate__animated animate__fadeInUp" style={{ animationDelay: '0.5s', animationDuration: '1.2s' }}>
          <a 
            href="https://wa.me/5519998295069"
            className="group relative flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 px-10 py-5 rounded-2xl font-black text-lg transition-all hover:scale-105 active:scale-95 shadow-[0_20px_50px_rgba(16,185,129,0.2)] overflow-hidden"
          >
            INICIAR PROJETO
            <Rocket className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
          <a 
            href="#projects"
            className="flex items-center justify-center gap-2 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-100 px-10 py-5 rounded-2xl font-bold transition-all"
          >
            Explorar Portfólio
            <ChevronRight className="w-5 h-5" />
          </a>
        </div>

        {/* Tech list with staggered subtle floating animations */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 text-zinc-600 font-mono text-sm opacity-60 animate__animated animate__fadeIn" style={{ animationDelay: '0.8s' }}>
          <div className="flex items-center gap-2 animate-float hover:text-emerald-400 transition-colors">
            <Terminal className="w-4 h-4 text-emerald-500/50" /> .NET_Core
          </div>
          <div className="flex items-center gap-2 animate-float hover:text-emerald-400 transition-colors" style={{ animationDelay: '1.2s' }}>
            <Sparkles className="w-4 h-4 text-emerald-500/50" /> Gateway_Pagamentos
          </div>
          <div className="flex items-center gap-2 animate-float hover:text-emerald-400 transition-colors" style={{ animationDelay: '2.4s' }}>
            <Rocket className="w-4 h-4 text-emerald-500/50" /> Google_Apps_Script
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
