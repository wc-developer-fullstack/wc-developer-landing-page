
import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2 } from 'lucide-react';
import { getGeminiResponse } from '../services/gemini';

interface Message {
  role: 'user' | 'bot';
  text: string;
}

const AIAssistant: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', text: 'Olá! Sou o assistente da WC Developer. Como posso ajudar com seu projeto hoje?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const botMsg = await getGeminiResponse(userMsg);
    setMessages(prev => [...prev, { role: 'bot', text: botMsg || 'Erro na conexão.' }]);
    setIsLoading(false);
  };

  return (
    <div id="ai" className="w-full bg-zinc-950 rounded-3xl border border-zinc-800 shadow-2xl flex flex-col h-[500px] overflow-hidden">
      {/* Header */}
      <div className="p-4 border-b border-zinc-800 bg-zinc-900/50 flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30">
          <Bot className="w-5 h-5 text-emerald-400" />
        </div>
        <div>
          <h4 className="text-sm font-bold text-white">WC Dev Assistant</h4>
          <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
            Online
          </span>
        </div>
      </div>

      {/* Messages area */}
      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth"
      >
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] p-4 rounded-2xl text-sm ${
              m.role === 'user' 
                ? 'bg-emerald-500 text-zinc-950 font-medium' 
                : 'bg-zinc-900 text-zinc-300 border border-zinc-800'
            }`}>
              {m.text}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-2xl flex items-center gap-2">
              <Loader2 className="w-4 h-4 text-emerald-400 animate-spin" />
              <span className="text-xs text-zinc-500">Pensando...</span>
            </div>
          </div>
        )}
      </div>

      {/* Input area */}
      <div className="p-4 bg-zinc-900/50 border-t border-zinc-800">
        <form 
          onSubmit={(e) => { e.preventDefault(); handleSend(); }}
          className="relative"
        >
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Pergunte sobre tecnologias ou orçamentos..."
            className="w-full bg-zinc-950 border border-zinc-800 rounded-xl py-3 px-4 pr-12 text-sm text-zinc-200 focus:outline-none focus:border-emerald-500/50 transition-colors"
          />
          <button 
            type="submit"
            disabled={isLoading}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-emerald-400 hover:text-emerald-300 transition-colors disabled:opacity-50"
          >
            <Send className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AIAssistant;
