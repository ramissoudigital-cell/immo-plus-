import React, { useState } from 'react';
import { ChevronLeft, Lock } from 'lucide-react';
import { motion } from 'motion/react';
import IOSStatusBar from './IOSStatusBar';

interface PasswordViewProps {
  onBack: () => void;
}

export const PasswordView: React.FC<PasswordViewProps> = ({ onBack }) => {
  const [formData, setFormData] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.newPassword !== formData.confirmPassword) {
      alert("Les mots de passe ne correspondent pas");
      return;
    }
    onBack();
  };

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
        <h1 className="text-[17px] font-bold text-[#1C1C1C] tracking-tight absolute left-0 right-0 text-center">Mot de passe</h1>
        <div className="w-10 z-10"></div> {/* Spacer for centering */}
      </div>

      <div className="px-5 flex flex-col gap-6 items-center">
        <form onSubmit={handleSubmit} className="w-full bg-white rounded-[24px] p-6 shadow-[0_2px_16px_rgba(0,0,0,0.04)] border border-[#EBEBEB]">
          <div className="flex flex-col gap-5">
            <InputField 
              icon={<Lock size={18} />} 
              label="Mot de passe actuel" 
              name="oldPassword" 
              type="password"
              value={formData.oldPassword} 
              onChange={handleChange} 
            />
            <div className="h-[1px] bg-[#EBEBEB]"></div>
            <InputField 
              icon={<Lock size={18} />} 
              label="Nouveau mot de passe" 
              name="newPassword" 
              type="password"
              value={formData.newPassword} 
              onChange={handleChange} 
            />
            <div className="h-[1px] bg-[#EBEBEB]"></div>
            <InputField 
              icon={<Lock size={18} />} 
              label="Confirmer le nouveau" 
              name="confirmPassword" 
              type="password"
              value={formData.confirmPassword} 
              onChange={handleChange} 
            />
          </div>
          
          <button type="submit" className="w-full mt-8 py-4 bg-[#1C1C1C] hover:bg-[#2C2C2E] rounded-full text-white font-bold text-[15px] shadow-[0_4px_20px_rgba(0,0,0,0.1)] transition-transform active:scale-[0.98]">
            Mettre à jour
          </button>
        </form>
      </div>
    </motion.div>
  );
};

const InputField = ({ icon, label, name, type = 'text', value, onChange }: any) => {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[12px] font-bold text-[#8E8E93] uppercase tracking-wider pl-1">{label}</label>
      <div className="flex items-center gap-3">
        <div className="text-[#8E8E93] w-5 flex justify-center">
          {icon}
        </div>
        <input 
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder="••••••••"
          required
          className="flex-1 bg-transparent text-[15px] font-semibold text-[#1C1C1C] placeholder-[#A3A3A3] focus:outline-none"
        />
      </div>
    </div>
  );
};
