
import React from 'react';
import { Layout, Zap, Cpu, Search, Layers, MousePointer2, BarChart3, ChevronRight, Database, Workflow } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Desenvolvimento Full Stack',
      desc: 'Sistemas completos ponta a ponta, unindo interfaces ágeis com backends escaláveis em C# ou Node.',
      icon: Cpu,
      color: 'from-blue-400 to-indigo-500'
    },
    {
      title: 'Soluções Supabase',
      desc: 'Implementação de banco de dados real-time, autenticação segura e Edge Functions para apps modernos.',
      icon: Database,
      color: 'from-emerald-400 to-teal-500'
    },
    {
      title: 'Automação com Google Script',
      desc: 'Integração inteligente de planilhas, emails e APIs para automatizar processos repetitivos da sua empresa.',
      icon: Workflow,
      color: 'from-yellow-400 to-orange-500'
    },
    {
      title: 'Interfaces de Alta Performance',
      desc: 'Landing Pages e Dashboards desenvolvidos com foco em Core Web Vitals e UX minimalista.',
      icon: Layout,
      color: 'from-purple-400 to-pink-500'
    },
    {
      title: 'Sistemas Legados & Desktop',
      desc: 'Manutenção e evolução de sistemas em Visual Basic e .NET, garantindo estabilidade e novas funcionalidades.',
      icon: Layers,
      color: 'from-zinc-400 to-zinc-600'
    },
    {
      title: 'Consultoria de Arquitetura',
      desc: 'Análise técnica para escolha da melhor stack e modelagem de dados para o crescimento do seu produto.',
      icon: BarChart3,
      color: 'from-red-400 to-rose-500'
    },
  ];

  return (
    <section id="services" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 reveal">
          <div className="max-w-xl">
            <h2 className="text-emerald-400 text-sm font-black uppercase tracking-[0.4em] mb-4">Especialidades</h2>
            <h3 className="text-5xl md:text-6xl font-bold text-white tracking-tighter">Onde a lógica encontra o design.</h3>
          </div>
          <p className="text-zinc-500 text-lg max-w-sm mb-2">
            Domínio completo do ciclo de desenvolvimento, do pixel no navegador ao dado no servidor.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div 
              key={idx}
              className="group relative p-10 rounded-[2.5rem] bg-zinc-900/40 border border-zinc-800/60 hover:border-emerald-500/30 transition-all duration-700 hover:-translate-y-3 overflow-hidden shadow-2xl reveal"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {/* Background Glow */}
              <div className={`absolute -right-8 -top-8 w-32 h-32 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-700`} />
              
              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-2xl bg-zinc-800 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-xl border border-zinc-700/50 group-hover:border-emerald-500/30`}>
                  <service.icon className={`w-8 h-8 group-hover:text-emerald-400 transition-colors duration-500 text-zinc-400`} />
                </div>
                <h4 className="text-2xl font-black text-white mb-4 group-hover:text-emerald-400 transition-colors">{service.title}</h4>
                <p className="text-zinc-400 leading-relaxed font-light">
                  {service.desc}
                </p>
                <div className="mt-8 pt-6 border-t border-zinc-800/50 flex items-center text-zinc-500 group-hover:text-emerald-400 transition-colors font-bold text-xs tracking-widest uppercase">
                  Consultar projeto <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
