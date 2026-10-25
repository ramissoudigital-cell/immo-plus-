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
      <div className="relative flex-1 bg-gray-900">
        <img 
          src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1000&auto=format&fit=crop" 
          alt="Luxury Real Estate" 
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-white"></div>
        
        <div className="absolute inset-0 flex flex-col items-center justify-center pt-20 px-6">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-2xl mb-6"
          >
            <Building2 className="w-10 h-10 text-[#1C1C1C]" strokeWidth={2} />
          </motion.div>
          
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-5xl font-bold text-white tracking-tight drop-shadow-lg mb-2 text-center"
          >
            Immo-Plus
          </motion.h1>
          
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-white/90 text-lg font-medium text-center drop-shadow-md"
          >
            L'immobilier repensé pour vous.
          </motion.p>
        </div>
      </div>

      {/* Action Area */}
      <div className="bg-white rounded-t-[40px] px-6 pt-10 pb-12 -mt-10 relative z-10">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-[24px] font-bold text-[#1C1C1C] tracking-tight mb-2">
            Bienvenue
          </h2>
          <p className="text-[#8E8E93] text-[15px] px-4">
            Choisissez votre profil pour commencer votre expérience Immo-plus.
          </p>
        </motion.div>

        <div className="space-y-3">
          <motion.button 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            onClick={() => onSelectRole('client')}
            className="w-full flex items-center p-3.5 bg-[#F7F7F9] rounded-2xl active:scale-[0.98] transition-transform border border-[#EBEBEB]"
          >
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm mr-4">
              <User className="w-5 h-5 text-[#1C1C1C]" />
            </div>
            <div className="flex-1 text-left">
              <div className="text-[16px] font-bold text-[#1C1C1C]">Je suis un Client</div>
              <div className="text-[13px] text-[#8E8E93] font-medium">Rechercher des biens</div>
            </div>
          </motion.button>

          <motion.button 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.65 }}
            onClick={() => onSelectRole('proprietaire')}
            className="w-full flex items-center p-3.5 bg-[#F7F7F9] rounded-2xl active:scale-[0.98] transition-transform border border-[#EBEBEB]"
          >
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm mr-4">
              <Key className="w-5 h-5 text-[#1C1C1C]" />
            </div>
            <div className="flex-1 text-left">
              <div className="text-[16px] font-bold text-[#1C1C1C]">Je suis un Propriétaire</div>
              <div className="text-[13px] text-[#8E8E93] font-medium">Mettre en gestion ou louer</div>
            </div>
          </motion.button>

          <motion.button 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            onClick={() => onSelectRole('demarcheur')}
            className="w-full flex items-center p-3.5 bg-[#F7F7F9] rounded-2xl active:scale-[0.98] transition-transform border border-[#EBEBEB]"
          >
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm mr-4">
              <Briefcase className="w-5 h-5 text-[#1C1C1C]" />
            </div>
            <div className="flex-1 text-left">
              <div className="text-[16px] font-bold text-[#1C1C1C]">Je suis un Démarcheur</div>
              <div className="text-[13px] text-[#8E8E93] font-medium">Proposer des biens</div>
            </div>
          </motion.button>

          <motion.button 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.75 }}
            onClick={() => onSelectRole('agence')}
            className="w-full flex items-center p-3.5 bg-[#1C1C1C] rounded-2xl active:scale-[0.98] transition-transform shadow-md"
          >
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mr-4">
              <Building2 className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1 text-left">
              <div className="text-[16px] font-bold text-white">Je suis une Agence</div>
              <div className="text-[13px] text-white/70 font-medium">Gérer notre parc immobilier</div>
            </div>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
