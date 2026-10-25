cat << 'INNEREOF' > src/components/WelcomeView.tsx
import React from 'react';
import { motion } from 'motion/react';
import { Building2, User, Key, Briefcase, Scale, Shield } from 'lucide-react';
import IOSStatusBar from './IOSStatusBar';

interface WelcomeViewProps {
  onSelectRole: (role: 'client' | 'demarcheur' | 'proprietaire' | 'agence' | 'juriste' | 'admin') => void;
}

export default function WelcomeView({ onSelectRole }: WelcomeViewProps) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, pointerEvents: 'auto' }}
      exit={{ opacity: 0, pointerEvents: 'none' }}
      className="absolute inset-0 z-[200] h-full bg-white overflow-hidden flex flex-col"
    >
      <IOSStatusBar theme="light" />
      
      {/* Background Image Area */}
      <div className="relative h-[30vh] shrink-0 bg-gray-900">
        <img 
          src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1000&auto=format&fit=crop" 
          alt="Luxury Real Estate" 
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent"></div>
        
        <div className="absolute inset-0 flex flex-col items-center justify-center pt-8 px-6">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-2xl mb-4"
          >
            <Building2 className="w-8 h-8 text-[#1C1C1C]" strokeWidth={2} />
          </motion.div>
          
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-4xl font-bold text-white tracking-tight drop-shadow-lg mb-1 text-center"
          >
            Immo-Plus
          </motion.h1>
        </div>
      </div>

      {/* Action Area */}
      <div className="bg-white flex-1 rounded-t-[32px] px-5 pt-8 pb-8 -mt-6 relative z-10 overflow-y-auto hide-scrollbar">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center mb-6"
        >
          <h2 className="text-[22px] font-bold text-[#1C1C1C] tracking-tight mb-2">
            Bienvenue
          </h2>
          <p className="text-[#8E8E93] text-[14px] px-2">
            Choisissez votre profil pour commencer.
          </p>
        </motion.div>

        <div className="space-y-3 pb-8">
          <motion.button 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            onClick={() => onSelectRole('client')}
            className="w-full flex items-center p-3.5 bg-[#F7F7F9] rounded-2xl active:scale-[0.98] transition-transform border border-[#EBEBEB]"
          >
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm mr-4 shrink-0">
              <User className="w-5 h-5 text-[#1C1C1C]" />
            </div>
            <div className="flex-1 text-left">
              <div className="text-[15px] font-bold text-[#1C1C1C]">Client</div>
              <div className="text-[12px] text-[#8E8E93] font-medium leading-tight mt-0.5">Rechercher, visiter et louer</div>
            </div>
          </motion.button>

          <motion.button 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.55 }}
            onClick={() => onSelectRole('demarcheur')}
            className="w-full flex items-center p-3.5 bg-[#F7F7F9] rounded-2xl active:scale-[0.98] transition-transform border border-[#EBEBEB]"
          >
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm mr-4 shrink-0">
              <Briefcase className="w-5 h-5 text-[#1C1C1C]" />
            </div>
            <div className="flex-1 text-left">
              <div className="text-[15px] font-bold text-[#1C1C1C]">Démarcheur</div>
              <div className="text-[12px] text-[#8E8E93] font-medium leading-tight mt-0.5">Publier des biens et gérer les visites</div>
            </div>
          </motion.button>

          <motion.button 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            onClick={() => onSelectRole('proprietaire')}
            className="w-full flex items-center p-3.5 bg-[#F7F7F9] rounded-2xl active:scale-[0.98] transition-transform border border-[#EBEBEB]"
          >
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm mr-4 shrink-0">
              <Key className="w-5 h-5 text-[#1C1C1C]" />
            </div>
            <div className="flex-1 text-left">
              <div className="text-[15px] font-bold text-[#1C1C1C]">Propriétaire</div>
              <div className="text-[12px] text-[#8E8E93] font-medium leading-tight mt-0.5">Gérer ses biens et démarcheurs</div>
            </div>
          </motion.button>

          <motion.button 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.65 }}
            onClick={() => onSelectRole('juriste')}
            className="w-full flex items-center p-3.5 bg-[#F7F7F9] rounded-2xl active:scale-[0.98] transition-transform border border-[#EBEBEB]"
          >
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm mr-4 shrink-0">
              <Scale className="w-5 h-5 text-[#1C1C1C]" />
            </div>
            <div className="flex-1 text-left">
              <div className="text-[15px] font-bold text-[#1C1C1C]">Juriste</div>
              <div className="text-[12px] text-[#8E8E93] font-medium leading-tight mt-0.5">Générer contrats et signatures</div>
            </div>
          </motion.button>

          <motion.button 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            onClick={() => onSelectRole('admin')}
            className="w-full flex items-center p-3.5 bg-[#1C1C1C] rounded-2xl active:scale-[0.98] transition-transform shadow-md"
          >
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mr-4 shrink-0">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1 text-left">
              <div className="text-[15px] font-bold text-white">Administrateur</div>
              <div className="text-[12px] text-white/70 font-medium leading-tight mt-0.5">Gestion de la plateforme</div>
            </div>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
INNEREOF
sh patch_welcome2.sh