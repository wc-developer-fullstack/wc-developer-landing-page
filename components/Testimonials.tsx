
import React from 'react';
import { Quote, Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Ricardo Silveira',
      role: 'Fundador da TechFlux',
      content: 'Trabalhar com o WC Developer foi um divisor de águas. Ele não apenas entregou o código, mas trouxe soluções estratégicas que aumentaram nossa conversão em 40%.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150',
      stars: 5
    },
    {
      name: 'Camila Mendonça',
      role: 'CMO na Duo Finance',
      content: 'A atenção aos detalhes e a performance do dashboard que ele desenvolveu são impecáveis. É raro encontrar um profissional com tamanha bagagem técnica e visão de produto.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150',
      stars: 5
    },
    {
      name: 'André Santos',
      role: 'CEO da BotFlow',
      content: 'Dez anos de experiência fazem a diferença. O sistema de automação ficou extremamente rápido e intuitivo. Recomendo para qualquer projeto de alta complexidade.',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=150&h=150',
      stars: 5
    }
  ];

  return (
    <section id="testimonials" className="py-32 px-6 bg-zinc-950/50 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 blur-[120px] rounded-full -z-10" />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 reveal">
          <h2 className="text-emerald-400 text-sm font-black uppercase tracking-[0.4em] mb-4">Feedback</h2>
          <h3 className="text-5xl md:text-6xl font-bold text-white tracking-tighter">O que dizem os parceiros.</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div 
              key={idx}
              className="bg-zinc-900/40 border border-zinc-800/60 p-8 rounded-[2.5rem] relative group hover:border-emerald-500/30 transition-all duration-500 reveal"
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-emerald-500/10 group-hover:text-emerald-500/20 transition-colors" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(item.stars)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-emerald-500 fill-emerald-500" />
                ))}
              </div>

              <p className="text-zinc-300 text-lg italic mb-8 font-light leading-relaxed">
                "{item.content}"
              </p>

              <div className="flex items-center gap-4 border-t border-zinc-800/50 pt-6">
                <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-zinc-800">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-white font-bold">{item.name}</h4>
                  <p className="text-emerald-400 text-xs uppercase tracking-wider font-semibold">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
