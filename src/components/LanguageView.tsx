import React, { useState } from 'react';
import { ChevronLeft, Check, Globe } from 'lucide-react';
import { motion } from 'motion/react';
import IOSStatusBar from './IOSStatusBar';

interface LanguageViewProps {
  onBack: () => void;
}

const languages = [
  { id: 'fr', name: 'Français', region: 'France', prefix: 'FR' },
  { id: 'en', name: 'English', region: 'United States, UK', prefix: 'EN' },
  { id: 'es', name: 'Español', region: 'España, América Latina', prefix: 'ES' },
  { id: 'de', name: 'Deutsch', region: 'Deutschland', prefix: 'DE' },
  { id: 'it', name: 'Italiano', region: 'Italia', prefix: 'IT' },
  { id: 'pt', name: 'Português', region: 'Portugal, Brasil', prefix: 'PT' },
];

export const LanguageView: React.FC<LanguageViewProps> = ({ onBack }) => {
  const [selectedLanguage, setSelectedLanguage] = useState('fr');

  return (
    <motion.div 
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: 'spring', damping: 28, stiffness: 220 }}
      className="absolute inset-0 z-[110] h-full bg-[#F7F7F9] overflow-y-auto hide-scrollbar pb-12 w-full font-sans"
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
        <h1 className="text-[17px] font-bold text-[#1C1C1C] tracking-tight absolute left-0 right-0 text-center">Langue</h1>
        <div className="w-10 z-10"></div> {/* Spacer for centering */}
      </div>

      <div className="px-5 flex flex-col gap-6 items-center max-w-2xl mx-auto w-full pb-8">
        {/* Info Card */}
        <div className="w-full bg-white rounded-[24px] p-5 shadow-[0_2px_16px_rgba(0,0,0,0.04)] flex items-start gap-4 border border-[#EBEBEB]">
          <div className="w-10 h-10 bg-[#F5F5F5] rounded-full flex items-center justify-center text-[#1C1C1C] shrink-0 mt-0.5">
            <Globe size={20} strokeWidth={2} />
          </div>
          <div>
            <h3 className="text-[15px] font-bold text-[#1C1C1C] mb-1">Préférences linguistiques</h3>
            <p className="text-[13px] text-[#4A4A4C] font-medium leading-relaxed">
              Sélectionnez la langue dans laquelle vous souhaitez utiliser l'application. Ce paramètre s'appliquera à toute l'interface.
            </p>
          </div>
        </div>

        {/* Languages List */}
        <div className="w-full bg-white rounded-[24px] overflow-hidden shadow-[0_2px_16px_rgba(0,0,0,0.04)] border border-[#EBEBEB]">
          <div className="flex flex-col p-2">
            {languages.map((language, index) => {
              const isSelected = selectedLanguage === language.id;
              
              return (
                <React.Fragment key={language.id}>
                  <div 
                    onClick={() => setSelectedLanguage(language.id)}
                    className={`flex items-center justify-between p-3 px-4 rounded-[16px] cursor-pointer transition-colors active:bg-[#F5F5F5] ${isSelected ? 'bg-[#F5F5F5]' : 'hover:bg-[#F9F9F9]'}`}
                  >
                    <div className="flex items-center gap-4">
                      {/* Language Prefix Badge */}
                      <div className={`w-[42px] h-[42px] rounded-[14px] flex items-center justify-center font-bold text-[13px] tracking-wide transition-colors ${isSelected ? 'bg-[#1C1C1C] text-white shadow-sm' : 'bg-[#F5F5F5] text-[#8E8E93]'}`}>
                        {language.prefix}
                      </div>
                      
                      <div className="flex flex-col">
                        <span className={`text-[16px] font-bold transition-colors ${isSelected ? 'text-[#1C1C1C]' : 'text-[#1C1C1C]'}`}>
                          {language.name}
                        </span>
                        <span className="text-[12px] font-medium text-[#8E8E93]">
                          {language.region}
                        </span>
                      </div>
                    </div>
                    
                    {/* Checkmark */}
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${isSelected ? 'bg-[#1C1C1C] scale-100 opacity-100' : 'scale-50 opacity-0'}`}>
                      <Check size={14} className="text-white" strokeWidth={3} />
                    </div>
                  </div>
                  
                  {index < languages.length - 1 && (
                    <div className="h-[1px] bg-[#EBEBEB] mx-6 my-1"></div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
