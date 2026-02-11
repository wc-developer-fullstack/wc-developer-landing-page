
import React from 'react';
import { Github, Linkedin, Instagram, Code2, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 px-6 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="flex flex-col items-center md:items-start gap-4">
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-emerald-500 rounded flex items-center justify-center">
              <Code2 className="text-zinc-950 w-5 h-5" />
            </div>
            <span className="text-lg font-bold tracking-tighter text-white">
              WC<span className="text-emerald-500">Developer</span>
            </span>
          </a>
          <p className="text-zinc-500 text-sm max-w-xs text-center md:text-left">
            Especialista em desenvolvimento web de alta performance com foco em resultados reais.
          </p>
        </div>

        <div className="flex gap-6">
          <a href="https://github.com/wc-developer-fullstack" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center text-zinc-400 hover:text-emerald-400 hover:border-emerald-500/50 border border-zinc-800 transition-all">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/willian-carlos-31a436237" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center text-zinc-400 hover:text-emerald-400 hover:border-emerald-500/50 border border-zinc-800 transition-all">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="https://www.instagram.com/programadorwc" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center text-zinc-400 hover:text-emerald-400 hover:border-emerald-500/50 border border-zinc-800 transition-all">
            <Instagram className="w-5 h-5" />
          </a>
        </div>

        <div className="text-center md:text-right">
          <div className="text-sm text-zinc-500 mb-2">Copyright © 2024 WC Developer.</div>
          <div className="text-xs text-zinc-600 flex items-center justify-center md:justify-end gap-1">
            Feito com <Heart className="w-3 h-3 text-red-500 fill-red-500" /> e café.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
