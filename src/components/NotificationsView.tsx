import React from 'react';
import { ChevronLeft, Bell } from 'lucide-react';
import { motion } from 'motion/react';
import IOSStatusBar from './IOSStatusBar';

interface NotificationsViewProps {
  onBack: () => void;
}

export const NotificationsView: React.FC<NotificationsViewProps> = ({ onBack }) => {
  return (
    <motion.div 
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: 'spring', damping: 28, stiffness: 220 }}
      className="absolute inset-0 z-[110] h-full bg-[#F7F7F9] overflow-y-auto hide-scrollbar pb-12"
    >
      <IOSStatusBar theme="dark" />
      {/* Header */}
      <div className="pt-16 px-6 flex items-center justify-between relative mb-8">
        <button 
          onClick={onBack}
          className="w-10 h-10 flex items-center justify-center -ml-2 active:scale-95 transition-transform z-10"
        >
          <ChevronLeft className="w-6 h-6 text-[#1C1C1C]" strokeWidth={2} />
        </button>
        <h1 className="text-[17px] font-bold text-[#1C1C1C] tracking-tight absolute left-0 right-0 text-center">Notifications</h1>
        <div className="w-10 z-10"></div> {/* Spacer */}
      </div>

      <div className="px-5 flex flex-col gap-4 pb-20 mt-10">
        {/* Real data would map over a notifications array here */}
        <div className="flex flex-col items-center justify-center pt-20 pb-10 text-center opacity-70">
          <div className="w-16 h-16 rounded-full bg-[#EBEBEB] flex items-center justify-center mb-4 text-[#1C1C1C]">
            <Bell size={28} />
          </div>
          <p className="text-[#1C1C1C] font-bold text-[16px]">Aucune notification</p>
          <p className="text-[#8E8E93] text-[14px] mt-1 font-medium">Vous n'avez pas encore reçu de notifications.</p>
        </div>
      </div>
    </motion.div>
  );
};

const NotificationItem = ({ title, description, time, unread = false }: { title: string, description: string, time: string, unread?: boolean }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`w-full bg-white rounded-[20px] p-4 flex gap-4 ${unread ? 'border-2 border-[#1C1C1C]' : 'border border-[#EBEBEB] shadow-[0_2px_16px_rgba(0,0,0,0.04)]'}`}
    >
      <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${unread ? 'bg-[#1C1C1C] text-white' : 'bg-[#F5F5F5] text-[#8E8E93]'}`}>
        <Bell size={18} />
      </div>
      <div className="flex-1 flex flex-col gap-1">
        <div className="flex justify-between items-start gap-2">
          <span className={`text-[15px] font-bold leading-tight ${unread ? 'text-[#1C1C1C]' : 'text-[#4A4A4C]'}`}>{title}</span>
          <span className="text-[11px] font-medium text-[#8E8E93] whitespace-nowrap">{time}</span>
        </div>
        <p className="text-[13px] text-[#8E8E93] leading-snug line-clamp-2">{description}</p>
      </div>
    </motion.div>
  );
};
