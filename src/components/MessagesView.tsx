import { Search, Check, CheckCheck, BellOff } from 'lucide-react';
import { motion } from 'motion/react';
import IOSStatusBar from './IOSStatusBar';

const chats = [
  {
    id: '1',
    name: 'John Smith',
    message: 'Hi, John! 👋 How are you doing?',
    time: '14:32',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=150&auto=format&fit=crop',
    avatarBg: 'bg-[#F2E5ED]',
    statusColor: 'bg-[#F5B027]', // Yellow
    receipt: 'single',
    isYou: false
  },
  {
    id: '2',
    name: 'Mia Nguen',
    message: 'Cool! 😁 Let\'s meet at 16:00 near the shopping mall!',
    time: 'Yesterday',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop',
    avatarBg: 'bg-[#FCD8C1]',
    statusColor: 'bg-[#B4B4B4]', // Grey
    receipt: 'double',
    isYou: true
  },
  {
    id: '3',
    name: 'Henna Beck',
    message: "En train d'écrire...",
    time: '16:12',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop',
    avatarBg: 'bg-[#C2E0F9]',
    statusColor: 'bg-[#25C834]', // Green
    receipt: 'double',
    isTyping: true,
    isYou: false
  },
  {
    id: '4',
    name: 'Nuria Cortez',
    message: 'Hey, will you come to the party on Saturday? 😜',
    time: '14:32',
    avatar: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=150&auto=format&fit=crop',
    avatarBg: 'bg-[#FCE6B5]',
    statusColor: 'bg-[#F23A3A]', // Red
    receipt: 'double',
    isMuted: true,
    isYou: true
  },
  {
    id: '5',
    name: 'Owlivery Bot',
    message: 'Thank you for your order! Your or...',
    time: '2:47',
    avatar: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=150&auto=format&fit=crop',
    avatarBg: 'bg-[#5B21B6]',
    statusColor: 'bg-[#25C834]', // Green
    receipt: 'double',
    isYou: false
  }
];

export default function MessagesView({ onClose, onChatClick }: { onClose: () => void, onChatClick: (id: string) => void }) {
  return (
    <motion.div 
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: 'spring', damping: 28, stiffness: 220 }}
      className="absolute inset-0 bg-white z-[30] flex flex-col"
    >
      <IOSStatusBar theme="dark" />
      
      <div className="pt-12 px-6 pb-2">
        <div className="flex justify-between items-center mb-4">
          <button onClick={onClose} className="text-[#1C1C1C] font-medium tracking-tight active:opacity-70 transition-opacity">
            Close
          </button>
        </div>

        <div className="flex justify-between items-center mb-6">
          <h1 className="text-[32px] font-bold text-[#1C1C1C] tracking-tight leading-tight">Chats</h1>
        </div>

        <div className="bg-[#F5F5F5] rounded-[20px] px-4 py-3 flex items-center mb-6">
          <Search className="w-[20px] h-[20px] text-[#A3A3A3] shrink-0" strokeWidth={2} />
          <input 
            type="text" 
            placeholder="Rechercher des discussions et messages" 
            className="bg-transparent border-none outline-none ml-2.5 flex-1 text-[16px] text-[#1C1C1C] placeholder:text-[#A3A3A3]"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto hide-scrollbar px-4 pb-32">
        <div className="space-y-1">
          {chats.map((chat) => (
            <div key={chat.id} onClick={() => onChatClick(chat.id)} className="flex items-center px-2 py-3 active:bg-[#F5F5F5] rounded-2xl transition-colors cursor-pointer">
              {/* Avatar */}
              <div className="relative shrink-0">
                <div className={`w-[60px] h-[60px] rounded-full overflow-hidden p-1 ${chat.avatarBg}`}>
                  <img src={chat.avatar} alt={chat.name} className="w-full h-full object-cover rounded-full mix-blend-multiply" />
                </div>
                {/* Status Dot */}
                <div className={`absolute bottom-0 right-0 w-4 h-4 rounded-full border-[2.5px] border-white ${chat.statusColor}`}></div>
              </div>

              {/* Content */}
              <div className="flex-1 ml-4 min-w-0">
                <div className="flex justify-between items-start mb-1">
                  <div className="flex items-center space-x-1.5 truncate pr-2">
                    <h3 className="text-[17px] font-bold text-[#1C1C1C] tracking-tight truncate">{chat.name}</h3>
                    {chat.isMuted && (
                      <BellOff className="w-3.5 h-3.5 text-[#A3A3A3] shrink-0" strokeWidth={2.5} />
                    )}
                  </div>
                  <div className="flex items-center space-x-1 shrink-0 mt-1">
                    {chat.receipt === 'single' && <Check className="w-4 h-4 text-[#A3A3A3]" strokeWidth={2.5} />}
                    {chat.receipt === 'double' && <CheckCheck className="w-4 h-4 text-[#A3A3A3]" strokeWidth={2.5} />}
                    <span className="text-[13px] text-[#A3A3A3] font-medium tracking-tight ml-0.5">{chat.time}</span>
                  </div>
                </div>
                
                <div className="truncate">
                  {chat.isTyping ? (
                    <span className="text-[#F5B027] text-[15px] font-medium tracking-tight">En train d'écrire...</span>
                  ) : (
                    <p className="text-[#8E8E93] text-[15px] truncate tracking-tight">
                      {chat.isYou && <span className="font-medium text-[#1C1C1C]">You: </span>}
                      {chat.message}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* iOS Home Indicator */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[130px] h-[5px] bg-[#1C1C1C] rounded-full z-50 pointer-events-none"></div>
    </motion.div>
  );
}
