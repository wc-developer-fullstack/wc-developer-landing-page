
import React from 'react';

const ExperienceStats: React.FC = () => {
  const stats = [
    { label: 'Anos de Experiência', value: '10+' },
    { label: 'Sistemas Full Stack', value: '150+' },
    { label: 'Automações Ativas', value: '500+' },
    { label: 'Satisfação Total', value: '100%' },
  ];

  return (
    <section className="py-20 px-6 bg-zinc-900/50 border-y border-zinc-900">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, idx) => (
          <div key={stat.label} className="text-center group reveal" style={{ transitionDelay: `${idx * 100}ms` }}>
            <div className="text-4xl md:text-5xl font-black text-emerald-400 mb-2 group-hover:scale-110 transition-transform duration-300">
              {stat.value}
            </div>
            <div className="text-zinc-500 text-xs md:text-sm uppercase tracking-widest font-semibold">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceStats;
