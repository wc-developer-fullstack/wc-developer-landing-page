
import React from 'react';
import { Server, Monitor, Zap } from 'lucide-react';

const TechStack: React.FC = () => {
  const categories = [
    {
      title: 'Frontend & UI',
      icon: Monitor,
      techs: [
        { name: 'React / Next.js', level: '90%' },
        { name: 'Tailwind CSS', level: '98%' },
        { name: 'TypeScript', level: '88%' }
      ]
    },
    {
      title: 'Backend & DB',
      icon: Server,
      techs: [
        { name: 'C# / .NET', level: '85%' },
        { name: 'Supabase / PostgreSQL', level: '92%' },
        { name: 'Visual Basic', level: '95%' }
      ]
    },
    {
      title: 'Automação & Cloud',
      icon: Zap,
      techs: [
        { name: 'Google Apps Script', level: '96%' },
        { name: 'REST APIs', level: '94%' },
        { name: 'Git / CI-CD', level: '85%' }
      ]
    }
  ];

  return (
    <section id="tech" className="py-32 px-6 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 reveal">
          <h2 className="text-emerald-400 text-sm font-black uppercase tracking-[0.4em] mb-4">Ecosistema</h2>
          <h3 className="text-5xl md:text-6xl font-bold text-white tracking-tighter">Arsenal Tecnológico.</h3>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <div 
              key={idx} 
              className="p-8 rounded-[2.5rem] bg-zinc-900/30 border border-zinc-800/50 hover:border-emerald-500/20 transition-all duration-500 reveal"
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                  <cat.icon className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-white">{cat.title}</h4>
              </div>

              <div className="space-y-6">
                {cat.techs.map((tech) => (
                  <div key={tech.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-zinc-300 font-medium text-sm">{tech.name}</span>
                      <span className="text-emerald-500 text-xs font-mono">{tech.level}</span>
                    </div>
                    <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full transition-all duration-1000" 
                        style={{ width: tech.level }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
