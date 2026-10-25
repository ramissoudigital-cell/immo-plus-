import React from 'react';
import { ChevronLeft, Info, Shield, FileText, Globe, Home } from 'lucide-react';
import { motion } from 'motion/react';
import IOSStatusBar from './IOSStatusBar';

interface AboutViewProps {
  onBack: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onBack }) => {
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
        <h1 className="text-[17px] font-bold text-[#1C1C1C] tracking-tight absolute left-0 right-0 text-center">À propos</h1>
        <div className="w-10 z-10"></div> {/* Spacer for centering */}
      </div>

      <div className="px-5 flex flex-col gap-6 items-center">
        {/* Logo and App Name */}
        <div className="flex flex-col items-center gap-3 mt-4 mb-2">
          <div className="w-24 h-24 bg-white rounded-[28px] shadow-[0_2px_16px_rgba(0,0,0,0.04)] border border-[#EBEBEB] flex items-center justify-center overflow-hidden">
            <Home size={40} className="text-[#1C1C1C]" strokeWidth={1.5} />
          </div>
          <h2 className="text-[24px] font-bold text-[#1C1C1C]">Immo-Plus</h2>
          <p className="text-[14px] font-bold text-[#8E8E93]">Version 1.0.0</p>
        </div>

        {/* Description Section */}
        <div className="w-full bg-white rounded-[24px] p-6 shadow-[0_2px_16px_rgba(0,0,0,0.04)] border border-[#EBEBEB]">
          <h3 className="text-[16px] font-bold text-[#1C1C1C] mb-3 flex items-center gap-2">
            <Info size={20} className="text-[#1C1C1C]" />
            Notre mission
          </h3>
          <p className="text-[14px] text-[#4A4A4C] leading-relaxed font-medium">
            Immo-Plus est la plateforme de référence pour la réservation immobilière. Notre application connecte instantanément les personnes recherchant un bien immobilier avec des démarcheurs qualifiés.
            <br/><br/>
            Notre objectif est de faciliter les échanges, de créer de la valeur et de simplifier vos recherches en toute sécurité.
          </p>
        </div>

        {/* Links Section */}
        <div className="w-full bg-white rounded-[24px] overflow-hidden shadow-[0_2px_16px_rgba(0,0,0,0.04)] border border-[#EBEBEB]">
          <div className="flex flex-col px-2 py-2">
            <AboutItem icon={<Shield size={20} />} label="Politique de confidentialité" />
            <div className="h-[1px] bg-[#EBEBEB] mx-4"></div>
            <AboutItem icon={<FileText size={20} />} label="Conditions d'utilisation" />
            <div className="h-[1px] bg-[#EBEBEB] mx-4"></div>
            <AboutItem icon={<Globe size={20} />} label="Site Web Officiel" />
          </div>
        </div>

        {/* Footer info */}
        <div className="mt-8 text-center flex flex-col gap-1">
          <p className="text-[14px] text-[#8E8E93] font-bold">© 2026 Immo-Plus. Tous droits réservés.</p>
          <p className="text-[12px] text-[#A3A3A3] font-medium">Conçu pour simplifier la réservation immobilière.</p>
        </div>
      </div>
    </motion.div>
  );
};

const AboutItem = ({ icon, label }: { icon: React.ReactNode, label: string }) => {
  return (
    <div className="flex items-center justify-between p-4 py-4.5 group active:bg-[#F5F5F5] transition-colors cursor-pointer rounded-[16px]">
      <div className="flex items-center gap-4">
        <div className="text-[#8E8E93]">{icon}</div>
        <span className="text-[16px] font-bold text-[#1C1C1C]">{label}</span>
      </div>
      <div className="text-[#1C1C1C] transition-colors">
        <ChevronLeft size={20} className="rotate-180" strokeWidth={2.5} />
      </div>
    </div>
  );
};
