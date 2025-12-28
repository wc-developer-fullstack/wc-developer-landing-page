
import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Qual o prazo médio para entrega de uma Landing Page?",
      answer: "O prazo varia conforme a complexidade, mas projetos padrão de Landing Pages de alta conversão costumam ser entregues entre 5 a 10 dias úteis, incluindo design e desenvolvimento mobile-first."
    },
    {
      question: "Você trabalha com React ou apenas HTML/JS puro?",
      answer: "Utilizo a ferramenta certa para cada objetivo. Para sites institucionais rápidos, foco em HTML/JS puro com Tailwind para performance extrema. Para sistemas complexos como Dashboards, utilizo React, Next.js e TypeScript."
    },
    {
      question: "O site terá boa performance no Google (SEO)?",
      answer: "Com certeza. Minha metodologia foca 100% em Core Web Vitals. Isso significa código semântico, imagens otimizadas e carregamento instantâneo, garantindo que o Google 'ame' seu site."
    },
    {
      question: "Como funciona o processo de pagamento?",
      answer: "Geralmente trabalho com 50% de entrada e 50% na entrega final após aprovação. Aceito PIX, Boleto e Cartão de Crédito. Todos os projetos acompanham nota fiscal e contrato."
    },
    {
      question: "Os sites são responsivos (funcionam no celular)?",
      answer: "Sim, 100%. Atualmente mais de 80% dos acessos vêm do mobile. Desenvolvo usando a filosofia Mobile-First, garantindo uma experiência perfeita em qualquer tamanho de tela."
    }
  ];

  return (
    <section id="faq" className="py-32 px-6 bg-zinc-950">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-1 mb-4">
            <HelpCircle className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest">Dúvidas Frequentes</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter">Perguntas Comuns.</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`border rounded-3xl transition-all duration-300 ${
                openIndex === index 
                  ? 'bg-zinc-900/50 border-emerald-500/30' 
                  : 'bg-zinc-900/20 border-zinc-800/50 hover:border-zinc-700'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left"
              >
                <span className={`text-lg md:text-xl font-bold transition-colors ${openIndex === index ? 'text-emerald-400' : 'text-white'}`}>
                  {faq.question}
                </span>
                <div className={`p-2 rounded-full transition-all ${openIndex === index ? 'bg-emerald-500 text-zinc-950' : 'bg-zinc-800 text-zinc-400'}`}>
                  {openIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </div>
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="p-6 md:p-8 pt-0 text-zinc-400 leading-relaxed text-lg font-light">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
