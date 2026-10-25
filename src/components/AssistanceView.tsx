import React from 'react';
import { ChevronLeft, Paperclip, Send, PenSquare, Play, MoreVertical } from 'lucide-react';
import { motion } from 'motion/react';
import IOSStatusBar from './IOSStatusBar';

interface AssistanceViewProps {
  onBack: () => void;
}

export const AssistanceView: React.FC<AssistanceViewProps> = ({ onBack }) => {
  return (
    <motion.div 
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: 'spring', damping: 28, stiffness: 220 }}
      className="absolute inset-0 z-[110] h-full bg-[#F7F7F9] overflow-hidden flex flex-col font-sans"
    >
      <IOSStatusBar theme="dark" />
      {/* Header */}
      <div className="pt-16 px-6 flex items-center justify-between pb-6 shrink-0">
        <button 
          onClick={onBack}
          className="w-10 h-10 flex items-center justify-start text-[#1C1C1C] transition-opacity active:opacity-50 -ml-2"
        >
          <ChevronLeft size={24} strokeWidth={2.5} />
        </button>
        <button className="w-10 h-10 flex items-center justify-end text-[#1C1C1C] transition-opacity active:opacity-50 -mr-2">
          <MoreVertical size={24} strokeWidth={2} />
        </button>
      </div>

      <div className="px-6 flex-1 overflow-y-auto hide-scrollbar flex flex-col pb-36">
        {/* Title Section */}
        <h1 className="text-[32px] font-bold text-[#1C1C1C] leading-tight mb-2 tracking-tight">Assistance</h1>
        <p className="text-[14px] text-[#8E8E93] mb-8 font-medium">Comment pouvons-nous vous aider aujourd'hui ?</p>

        {/* Members Section */}
        <h2 className="text-[16px] font-bold text-[#1C1C1C] mb-4">Équipe de support</h2>
        <div className="flex flex-row items-center mb-10">
          <div className="flex -space-x-3">
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80" className="relative z-40 w-11 h-11 rounded-full border-[2.5px] border-[#F7F7F9] object-cover shadow-sm" alt="Member" />
            <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80" className="relative z-30 w-11 h-11 rounded-full border-[2.5px] border-[#F7F7F9] object-cover shadow-sm bg-yellow-100" alt="Member" />
            <img src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?auto=format&fit=crop&q=80" className="relative z-20 w-11 h-11 rounded-full border-[2.5px] border-[#F7F7F9] object-cover shadow-sm bg-orange-100" alt="Member" />
            <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80" className="relative z-10 w-11 h-11 rounded-full border-[2.5px] border-[#F7F7F9] object-cover shadow-sm bg-teal-900" alt="Member" />
            
            <div className="relative z-0 w-11 h-11 rounded-full bg-white flex items-center justify-center text-[#1C1C1C] font-bold border-[1.5px] border-dashed border-[#EBEBEB] shadow-sm ml-2">
              <span className="text-[13px] tracking-tight">+5</span>
            </div>
          </div>
        </div>

        {/* Chat Timeline */}
        <div className="flex flex-col gap-6 w-full">
          {/* Text Message (Left) */}
          <div className="flex gap-4 w-full justify-start items-start mt-2">
            <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80" className="w-[48px] h-[48px] rounded-[16px] object-cover shrink-0 shadow-sm mt-1 bg-pink-100" alt="Support" />
            <div className="flex flex-col gap-1 items-end max-w-[75%]">
              <div className="bg-white rounded-[20px] rounded-tl-[6px] p-4 px-5 shadow-[0_2px_16px_rgba(0,0,0,0.04)] border border-[#EBEBEB]">
                 <p className="text-[14px] text-[#1C1C1C] font-medium leading-relaxed">Bonjour ! Avez-vous besoin d'aide avec l'application Immo-Plus ?</p>
              </div>
              <span className="text-[11px] font-medium text-[#8E8E93] mr-2 mt-1">10:42</span>
            </div>
          </div>

          {/* Text Message (Right) */}
          <div className="flex gap-4 w-full justify-end items-start mt-2">
            <div className="flex flex-col gap-1 items-start max-w-[75%]">
              <div className="bg-[#1C1C1C] text-white rounded-[20px] rounded-br-[6px] p-4 px-5 shadow-[0_8px_20px_rgba(0,0,0,0.12)]">
                <p className="text-[14px] font-medium leading-relaxed">Oui, comment puis-je modifier mon annonce publiée ?</p>
              </div>
              <span className="text-[11px] font-medium text-[#8E8E93] ml-2 mt-1">10:45</span>
            </div>
            <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop" className="w-[48px] h-[48px] rounded-[16px] object-cover shrink-0 shadow-sm mt-1" alt="Me" />
          </div>

          {/* Text Message (Left) */}
          <div className="flex gap-4 w-full justify-start items-start mt-2">
            <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80" className="w-[48px] h-[48px] rounded-[16px] object-cover shrink-0 shadow-sm mt-1 bg-pink-100" alt="Support" />
            <div className="flex flex-col gap-1 items-end max-w-[75%]">
              <div className="bg-white rounded-[20px] rounded-tl-[6px] p-4 px-5 shadow-[0_2px_16px_rgba(0,0,0,0.04)] border border-[#EBEBEB]">
                 <p className="text-[14px] text-[#1C1C1C] font-medium leading-relaxed">Allez dans votre profil, puis sous "Mes annonces", vous trouverez un bouton pour les modifier !</p>
              </div>
              <span className="text-[11px] font-medium text-[#8E8E93] mr-2 mt-1">10:47</span>
            </div>
          </div>

          {/* Typing indicator */}
          <div className="flex items-center gap-2 mt-2 ml-2 pb-2">
            <PenSquare size={14} className="text-[#8E8E93]" strokeWidth={2.5} />
            <span className="text-[14px] font-medium text-[#8E8E93] italic">Le support écrit...</span>
          </div>
        </div>
      </div>

      {/* Bottom Input Area */}
      <div className="absolute inset-x-0 bottom-0 px-6 pb-8 pt-12 bg-gradient-to-t from-[#F7F7F9] via-[#F7F7F9] to-transparent pointer-events-none">
        <div className="bg-white rounded-[24px] h-[72px] flex items-center justify-between px-3 shadow-[0_2px_24px_rgba(0,0,0,0.06)] border border-[#EBEBEB] pointer-events-auto">
          <button className="w-12 h-12 flex items-center justify-center text-[#8E8E93] hover:text-[#1C1C1C] rounded-xl transition-colors ml-1">
            <Paperclip size={20} className="-rotate-45" strokeWidth={2.5} />
          </button>
          
          <input 
            type="text" 
            placeholder="Écrire un message..." 
            className="flex-1 bg-transparent text-[15px] outline-none placeholder-[#A3A3A3] px-2 text-[#1C1C1C] font-medium h-full"
          />
          
          <button className="w-12 h-12 rounded-full bg-[#1C1C1C] flex items-center justify-center text-white active:scale-95 shadow-sm transition-transform mr-1">
            <Send size={18} className="translate-x-[1px] translate-y-[1px]" strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};
