'use client';

import { useState } from 'react';

interface ChatMessage {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  time: string;
}

export function AIChatPanel() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      sender: 'ai',
      text: "Welcome back. I've finished auditing the behavioral logs. There's a 12% drift detected in user engagement metrics.",
      time: '10:42 AM'
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: input,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMessage.text }),
      });

      if (response.ok) {
        const data = await response.json();
        const aiMessage: ChatMessage = {
          id: (Date.now() + 1).toString(),
          sender: 'ai',
          text: data.reply || "I couldn't process that request.",
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages((prev) => [...prev, aiMessage]);
      } else {
        console.error('Failed to send message');
      }
    } catch (error) {
      console.error('Error in chat API:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <aside className="w-96 glass-panel border-l border-slate-800 flex flex-col shrink-0">
      <div className="p-6 border-b border-slate-800 flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-accent-purple/20 flex items-center justify-center">
          <span className="material-symbols-outlined text-accent-purple text-sm">smart_toy</span>
        </div>
        <div>
          <h3 className="font-bold text-sm">AI Copilot</h3>
          <p className="text-[10px] text-primary font-medium animate-pulse">SYSTEM ONLINE</p>
        </div>
      </div>

      <div className="flex-1 p-6 space-y-6 overflow-y-auto">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex flex-col gap-2 max-w-[85%] ${
              msg.sender === 'user' ? 'self-end items-end' : ''
            }`}
          >
            <div
              className={`p-4 rounded-xl ${
                msg.sender === 'user'
                  ? 'bg-primary/20 border border-primary/50 rounded-tr-none'
                  : 'bg-slate-800/50 rounded-tl-none border border-slate-700/50'
              }`}
            >
              <p
                className={`text-sm ${
                  msg.sender === 'user' ? 'text-primary font-medium' : 'text-slate-300'
                }`}
              >
                {msg.text}
              </p>
            </div>
            <span
              className={`text-[10px] text-slate-500 ${
                msg.sender === 'user' ? 'mr-1' : 'ml-1'
              }`}
            >
              {msg.time}
            </span>
          </div>
        ))}
        {loading && (
          <div className="flex flex-col gap-2 max-w-[85%]">
            <div className="bg-slate-800/50 p-4 rounded-xl rounded-tl-none border border-slate-700/50 flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-ping"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" style={{ animationDelay: '150ms' }}></div>
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" style={{ animationDelay: '300ms' }}></div>
            </div>
          </div>
        )}
      </div>

      <div className="p-6 mt-auto border-t border-slate-800/50">
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent-purple rounded-xl opacity-20 blur group-focus-within:opacity-40 transition-opacity"></div>
          <div className="relative flex items-center bg-slate-900 border border-slate-800 rounded-xl overflow-hidden px-4 py-1">
            <input
              className="flex-1 bg-transparent border-none text-sm focus:outline-none focus:ring-0 text-slate-200 py-3"
              placeholder="Ask AI anything..."
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleSend();
              }}
            />
            <button
              className="text-slate-400 hover:text-primary transition-colors disabled:opacity-50"
              onClick={handleSend}
              disabled={loading || !input.trim()}
            >
              <span className="material-symbols-outlined">send</span>
            </button>
          </div>
        </div>
        <div className="mt-4 flex gap-2 justify-center flex-wrap">
          <button className="px-3 py-1.5 rounded-full border border-slate-800 text-[10px] text-slate-400 hover:bg-slate-800 hover:text-white transition-colors">Summarize dataset</button>
          <button className="px-3 py-1.5 rounded-full border border-slate-800 text-[10px] text-slate-400 hover:bg-slate-800 hover:text-white transition-colors">Check pipeline</button>
        </div>
      </div>
    </aside>
  );
}
