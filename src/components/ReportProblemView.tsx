import React, { useState } from 'react';
import { ChevronLeft, AlertCircle, UploadCloud, Send } from 'lucide-react';
import { motion } from 'motion/react';
import IOSStatusBar from './IOSStatusBar';

interface ReportProblemViewProps {
  onBack: () => void;
}

export const ReportProblemView: React.FC<ReportProblemViewProps> = ({ onBack }) => {
  const [formData, setFormData] = useState({
    subject: '',
    description: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic to send the report
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
        <h1 className="text-[17px] font-bold text-[#1C1C1C] tracking-tight absolute left-0 right-0 text-center">Signaler un problème</h1>
        <div className="w-10 z-10"></div> {/* Spacer for centering */}
      </div>

      <div className="px-5 flex flex-col gap-6 items-center pb-8">
        <form onSubmit={handleSubmit} className="w-full bg-white rounded-[24px] p-6 shadow-[0_2px_16px_rgba(0,0,0,0.04)] border border-[#EBEBEB]">
          <div className="bg-[#FFF4E5] border border-[#FFE0B2] rounded-[16px] p-4 mb-6 flex gap-3 items-start">
            <AlertCircle size={20} className="text-[#FF8A00] shrink-0 mt-0.5" strokeWidth={2.5} />
            <p className="text-[13px] text-[#A65B00] font-medium leading-snug">
              Veuillez décrire le problème rencontré avec le plus de détails possible pour que nous puissions vous aider efficacement.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-1.5">
              <label className="text-[12px] font-bold text-[#8E8E93] uppercase tracking-wider pl-1">Sujet du problème</label>
              <input 
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Ex: Erreur lors de la réservation..."
                required
                className="w-full bg-[#F5F5F5] border border-transparent rounded-[16px] px-4 py-4 text-[15px] font-medium text-[#1C1C1C] placeholder-[#A3A3A3] focus:outline-none focus:border-[#1C1C1C] focus:bg-white transition-colors"
              />
            </div>
            
            <div className="flex flex-col gap-1.5">
              <label className="text-[12px] font-bold text-[#8E8E93] uppercase tracking-wider pl-1">Description détaillée</label>
              <textarea 
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Décrivez ce qu'il s'est passé..."
                required
                rows={5}
                className="w-full bg-[#F5F5F5] border border-transparent rounded-[16px] px-4 py-4 text-[15px] font-medium text-[#1C1C1C] placeholder-[#A3A3A3] focus:outline-none focus:border-[#1C1C1C] focus:bg-white transition-colors resize-none"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[12px] font-bold text-[#8E8E93] uppercase tracking-wider pl-1">Pièces jointes (Optionnel)</label>
              <div className="w-full bg-[#F5F5F5] border-2 border-[#EBEBEB] border-dashed rounded-[16px] p-6 flex flex-col items-center justify-center gap-2 cursor-pointer active:bg-[#EBEBEB] transition-colors">
                <UploadCloud size={32} className="text-[#A3A3A3]" strokeWidth={1.5} />
                <span className="text-[13px] font-medium text-[#8E8E93]">Appuyez pour ajouter une capture d'écran</span>
              </div>
            </div>
          </div>
          
          <button type="submit" className="w-full mt-8 py-4 bg-[#1C1C1C] hover:bg-[#2C2C2E] rounded-full text-white font-bold text-[15px] shadow-[0_4px_20px_rgba(0,0,0,0.1)] flex items-center justify-center gap-2 transition-transform active:scale-[0.98]">
            <Send size={18} />
            Envoyer le rapport
          </button>
        </form>
      </div>
    </motion.div>
  );
};
