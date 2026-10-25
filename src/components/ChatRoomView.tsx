import { ChevronLeft, MoreVertical, Phone, Search, Paperclip, Mic, Smile, Play, Check, CheckCheck } from 'lucide-react';
import { motion } from 'motion/react';
import IOSStatusBar from './IOSStatusBar';

export default function ChatRoomView({ onClose, chatId }: { onClose: () => void, chatId: string }) {
  const isHost = chatId === 'host';
  const name = isHost ? 'Isabelle' : 'Henna Beck';
  const avatar = isHost ? 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop' : 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop';
  
  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: 'spring', damping: 28, stiffness: 220 }}
      className="absolute inset-0 bg-white z-[70] flex flex-col"
    >
      <IOSStatusBar theme="dark" />
      
      {/* Header */}
      <div className="pt-12 px-4 pb-2 border-b border-[#F0F0F0] shrink-0">
        <div className="flex justify-between items-center mb-4">
          <button onClick={onClose} className="w-8 h-8 flex items-center justify-center -ml-2 active:scale-95 transition-transform">
            <ChevronLeft className="w-7 h-7 text-[#1C1C1C]" strokeWidth={2} />
          </button>
          <button className="w-8 h-8 flex items-center justify-center -mr-2 active:scale-95 transition-transform">
            <MoreVertical className="w-5 h-5 text-[#1C1C1C]" strokeWidth={2} />
          </button>
        </div>
        
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-[46px] h-[46px] rounded-full overflow-hidden bg-[#C2E0F9] p-0.5">
              <img src={avatar} alt={name} className="w-full h-full object-cover rounded-full mix-blend-multiply" />
            </div>
            <div>
              <h2 className="text-[17px] font-bold text-[#1C1C1C] leading-tight tracking-tight">{name}</h2>
              <span className="text-[#25C834] text-[13px] font-bold tracking-tight">Online</span>
            </div>
          </div>
          <div className="flex space-x-4 pr-1">
            <button className="active:scale-95 transition-transform">
              <Phone className="w-5 h-5 text-[#1C1C1C]" strokeWidth={2.5} />
            </button>
            <button className="active:scale-95 transition-transform">
              <Search className="w-5 h-5 text-[#1C1C1C]" strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto hide-scrollbar px-4 pt-6 pb-24 bg-[#FAFAFA]">
        <div className="text-center mb-6">
          <span className="text-[#A3A3A3] text-[13px] font-medium tracking-tight">Today</span>
        </div>

        {/* Messages */}
        <div className="flex justify-end mb-4">
          <div className="bg-gradient-to-r from-[#FFD3D5] to-[#FFD1BE] rounded-t-[20px] rounded-bl-[20px] rounded-br-[4px] px-4 py-2.5 max-w-[75%] shadow-sm text-[#1C1C1C]">
            <div className="flex items-end justify-between space-x-3">
              <p className="text-[15px] font-medium tracking-tight leading-snug">Hi {isHost ? 'Isabelle' : 'Henna'}, how you</p>
              <div className="flex items-center space-x-1 shrink-0 mb-0.5">
                <Check className="w-[14px] h-[14px] text-[#A3A3A3]" strokeWidth={3} />
                <span className="text-[11px] text-[#A3A3A3] font-bold">16:12</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-start mb-4">
          <div className="bg-[#EBEBEB] rounded-t-[20px] rounded-br-[20px] rounded-bl-[4px] px-3 py-2.5 w-[220px] shadow-sm text-[#1C1C1C]">
            <div className="flex items-center space-x-3">
              <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm active:scale-95 transition-transform">
                <Play className="w-4 h-4 text-[#1C1C1C] fill-[#1C1C1C] ml-0.5" />
              </button>
              <div className="flex-1">
                <div className="flex items-center justify-between h-6 px-1">
                  {/* Fake waveform */}
                  {[2, 4, 3, 5, 8, 5, 4, 6, 9, 6, 4, 3, 2, 4, 5, 3].map((h, i) => (
                    <div key={i} className={`w-1 rounded-full ${i < 6 ? 'bg-[#1C1C1C]' : 'bg-[#1C1C1C]/30'}`} style={{ height: `${h * 2.5}px` }}></div>
                  ))}
                </div>
                <div className="flex justify-between mt-1 px-1">
                  <span className="text-[11px] text-[#8E8E93] font-bold">0:03</span>
                  <span className="text-[11px] text-[#8E8E93] font-bold">16:34</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-start mb-4">
          <div className="bg-[#EBEBEB] rounded-t-[20px] rounded-br-[20px] rounded-bl-[4px] px-4 py-2.5 max-w-[75%] shadow-sm text-[#1C1C1C]">
            <div className="flex items-end justify-between space-x-3">
              <p className="text-[15px] font-medium tracking-tight leading-snug">I finally found a job! 😁</p>
              <span className="text-[11px] text-[#8E8E93] font-bold shrink-0 mb-0.5">16:35</span>
            </div>
          </div>
        </div>

        <div className="flex justify-end mb-4">
          <div className="bg-gradient-to-r from-[#FFD3D5] to-[#FFD1BE] rounded-t-[20px] rounded-bl-[20px] rounded-br-[4px] px-4 py-2.5 max-w-[80%] shadow-sm text-[#1C1C1C]">
            <div className="flex items-end justify-between space-x-3">
              <p className="text-[15px] font-medium tracking-tight leading-snug">Congrats! After all this searches you finally made it! 🥳</p>
              <div className="flex items-center space-x-1 shrink-0 mb-0.5">
                <CheckCheck className="w-[14px] h-[14px] text-[#A3A3A3]" strokeWidth={3} />
                <span className="text-[11px] text-[#A3A3A3] font-bold">16:41</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end mb-4">
          <div className="bg-gradient-to-r from-[#FFD3D5] to-[#FFD1BE] rounded-t-[20px] rounded-bl-[20px] rounded-br-[4px] px-4 py-2.5 max-w-[75%] shadow-sm text-[#1C1C1C]">
            <div className="flex items-end justify-between space-x-3">
              <p className="text-[15px] font-medium tracking-tight leading-snug">In which company btw? 🤔</p>
              <div className="flex items-center space-x-1 shrink-0 mb-0.5">
                <Check className="w-[14px] h-[14px] text-[#A3A3A3]" strokeWidth={3} />
                <span className="text-[11px] text-[#A3A3A3] font-bold">16:42</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-start mb-4">
          <div className="bg-[#EBEBEB] rounded-t-[20px] rounded-br-[20px] rounded-bl-[4px] px-4 py-2.5 max-w-[75%] shadow-sm text-[#1C1C1C]">
            <div className="flex items-end justify-between space-x-3">
              <p className="text-[15px] font-medium tracking-tight leading-snug">UI Designer in Facebook!</p>
              <span className="text-[11px] text-[#8E8E93] font-bold shrink-0 mb-0.5">16:45</span>
            </div>
          </div>
        </div>

        <div className="flex justify-end mb-4">
          <div className="bg-gradient-to-r from-[#FFD3D5] to-[#FFD1BE] rounded-t-[20px] rounded-bl-[20px] rounded-br-[4px] px-4 py-2.5 max-w-[75%] shadow-sm text-[#1C1C1C]">
            <div className="flex items-end justify-between space-x-3">
              <p className="text-[15px] font-medium tracking-tight leading-snug">Great!</p>
              <div className="flex items-center space-x-1 shrink-0 mb-0.5">
                <Check className="w-[14px] h-[14px] text-[#A3A3A3]" strokeWidth={3} />
                <span className="text-[11px] text-[#A3A3A3] font-bold">16:57</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Input Area */}
      <div className="absolute bottom-0 left-0 right-0 bg-[#FAFAFA] px-4 pt-2 pb-8 flex items-center space-x-3 z-10 border-t border-[#F0F0F0]/50">
        <button className="active:scale-95 transition-transform shrink-0">
          <Paperclip className="w-6 h-6 text-[#A3A3A3]" strokeWidth={2} />
        </button>
        <div className="flex-1 bg-white rounded-full px-4 py-3 flex items-center shadow-sm border border-[#EBEBEB]">
          <input type="text" placeholder="Message..." className="bg-transparent flex-1 outline-none text-[15px] font-medium text-[#1C1C1C] placeholder:text-[#A3A3A3] tracking-tight" />
          <button className="active:scale-95 transition-transform shrink-0 ml-2">
            <Smile className="w-5 h-5 text-[#A3A3A3]" strokeWidth={2} />
          </button>
        </div>
        <button className="active:scale-95 transition-transform shrink-0">
          <Mic className="w-6 h-6 text-[#A3A3A3]" strokeWidth={2} />
        </button>
      </div>

      {/* iOS Home Indicator */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[130px] h-[5px] bg-[#1C1C1C] rounded-full z-50 pointer-events-none"></div>
    </motion.div>
  );
}
