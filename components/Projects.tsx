
import React from 'react';
import { ExternalLink, Bot, Mic, TrendingUp, Zap } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'BotFlow Telegram',
      url: 'https://botflowtelegram.netlify.app/',
      description: 'Uma solução SaaS completa para automação de vendas e atendimento via Telegram. Neste projeto, foquei em uma arquitetura robusta de fluxos lógicos, onde o usuário pode criar caminhos de conversa complexos. Destaque para a integração de API de alta latência e gerenciamento de estado global com React.',
      tags: ['React', 'Automação', 'API Integration', 'UI/UX'],
      features: ['Editor de Fluxos', 'Automação Full-time', 'Webhooks'],
      icon: Bot,
      color: 'from-emerald-500/20 to-teal-500/5'
    },
    {
      title: 'Contei App',
      url: 'https://contei.netlify.app/',
      description: 'Plataforma disruptiva de gestão financeira pessoal que utiliza comandos de voz para simplificar o controle de gastos. Inclui funcionalidades de cofrinho virtual, metas de economia e relatórios analíticos gerados automaticamente. Foco total em acessibilidade e rapidez operacional através de UX fluida.',
      tags: ['React', 'Voice Control', 'Financial', 'PWA'],
      features: ['Comando de Voz', 'Cofrinho Virtual', 'Relatórios'],
      icon: Mic,
      color: 'from-blue-500/20 to-indigo-500/5'
    },
    {
      title: 'WR Agência',
      url: 'https://wragencia.netlify.app/',
      description: 'Ecossistema avançado de Social Media Marketing (SMM) projetado para escala. Oferece painel de controle completo para gestão de engajamento social (likes, seguidores, views), estratégias de ranqueamento algorítmico e automação de serviços digitais em tempo real.',
      tags: ['SMM Panel', 'Marketing', 'Dashboards', 'Performance'],
      features: ['Painel de Pedidos', 'Ranking de Redes', 'Serviços Avulsos'],
      icon: TrendingUp,
      color: 'from-purple-500/20 to-pink-500/5'
    }
  ];

  return (
    <section id="projects" className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 reveal">
          <h2 className="text-emerald-400 text-sm font-black uppercase tracking-[0.4em] mb-4">Portfólio</h2>
          <h3 className="text-5xl md:text-6xl font-bold text-white tracking-tighter">Projetos em Destaque.</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div 
              key={idx} 
              className={`group relative p-1 rounded-[2.5rem] bg-gradient-to-br transition-all duration-700 hover:scale-[1.02] reveal h-full`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className="bg-zinc-950 rounded-[2.4rem] p-8 md:p-10 h-full flex flex-col border border-zinc-900 overflow-hidden relative">
                {/* Background Decor */}
                <div className={`absolute -right-20 -top-20 w-64 h-64 bg-gradient-to-br ${project.color} blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center shadow-inner group-hover:border-emerald-500/50 transition-colors">
                      <project.icon className="w-7 h-7 text-emerald-400" />
                    </div>
                    <a 
                      href={project.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-emerald-400 hover:border-emerald-500/50 transition-all"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>

                  <h4 className="text-2xl font-black text-white mb-4 group-hover:text-emerald-400 transition-colors">{project.title}</h4>
                  <p className="text-zinc-400 leading-relaxed mb-8 text-sm md:text-base font-light flex-grow">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-2.5 py-1 rounded-full bg-emerald-500/5 border border-emerald-500/10 text-emerald-400/70 text-[9px] font-bold uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto grid grid-cols-1 gap-3 border-t border-zinc-900 pt-6">
                    {project.features.map(feature => (
                      <div key={feature} className="flex items-center gap-2 text-zinc-500 text-[11px] font-medium uppercase tracking-tighter">
                        <Zap className="w-3 h-3 text-emerald-500" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
