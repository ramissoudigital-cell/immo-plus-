import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Eye, EyeOff } from 'lucide-react';
import IOSStatusBar from './IOSStatusBar';

interface AuthViewProps {
  onComplete: () => void;
  role: 'client' | 'demarcheur' | 'proprietaire' | 'agence' | 'juriste' | 'admin' | null;
}

export default function AuthView({ onComplete, role }: AuthViewProps) {
  const [mode, setMode] = useState<'login' | 'signup'>('signup');
  const [showPassword, setShowPassword] = useState(false);

  const getRoleText = () => {
    switch (role) {
      case 'demarcheur': return 'démarcheur';
      case 'proprietaire': return 'propriétaire';
      case 'agence': return 'agence';
      case 'juriste': return 'juriste';
      case 'admin': return 'administrateur';
      default: return 'client';
    }
  };

  return (
    <motion.div
      initial={{ y: '100%' }}
      animate={{ y: 0 }}
      exit={{ y: '100%' }}
      transition={{ type: 'spring', damping: 25, stiffness: 200 }}
      className="absolute inset-0 z-[150] bg-[#1C1C1C] flex flex-col overflow-hidden"
    >
      <IOSStatusBar theme="dark" />
      
      {/* Spacer for the blue top background */}
      <div className="h-[12vh] shrink-0" />

      {/* Main Card */}
      <div className="bg-white flex-1 rounded-t-[40px] overflow-y-auto hide-scrollbar flex flex-col relative shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
        <div className="min-h-full flex flex-col px-6 pt-10 pb-8">
          <h1 className="text-[28px] font-bold text-[#1C1C1C] mb-2 text-center tracking-tight">
            {mode === 'signup' ? 'Créer un compte' : 'Connexion'}
          </h1>
          <p className="text-[#8E8E93] text-[15px] text-center mb-8 px-4 font-medium leading-snug">
            {mode === 'signup'
              ? `Devenez membre en tant que ${getRoleText()} et profitez d'avantages exclusifs !`
              : 'Heureux de vous revoir ! Connectez-vous pour continuer.'}
          </p>

          {/* Form Fields */}
          <div className="space-y-4">

            {mode === 'signup' && (
              <label className="flex items-center space-x-2.5 mt-2 ml-1 cursor-pointer">
                <input type="checkbox" className="w-5 h-5 accent-[#1C1C1C] text-[#1C1C1C] cursor-pointer" />
                <span className="text-[13px] text-[#8E8E93] font-medium">
                  J'ai lu et j'accepte les <span className="text-[#1C1C1C] font-bold underline">Conditions d'utilisation</span>
                </span>
              </label>
            )}

            {mode === 'signup' && role === 'demarcheur' && (
              <>
                <div>
                  <label className="text-[14px] font-bold text-[#1C1C1C] mb-1.5 block ml-1">Numéro de téléphone</label>
                  <input 
                    type="tel" 
                    placeholder="+225 00 00 00 00 00" 
                    className="w-full bg-[#F7F7F9] border border-transparent rounded-[16px] px-4 py-4 text-[15px] font-medium text-[#1C1C1C] placeholder:text-[#8E8E93] focus:border-[#1C1C1C] focus:bg-white transition-colors outline-none" 
                  />
                </div>
                <div>
                  <label className="text-[14px] font-bold text-[#1C1C1C] mb-1.5 block ml-1">Lieu de résidence</label>
                  <input 
                    type="text" 
                    placeholder="Ex: Paris" 
                    className="w-full bg-[#F7F7F9] border border-transparent rounded-[16px] px-4 py-4 text-[15px] font-medium text-[#1C1C1C] placeholder:text-[#8E8E93] focus:border-[#1C1C1C] focus:bg-white transition-colors outline-none" 
                  />
                </div>
                <div>
                  <label className="text-[14px] font-bold text-[#1C1C1C] mb-1.5 block ml-1">Type de compte</label>
                  <div className="flex space-x-4">
                    <label className="flex-1 flex items-center p-3 bg-[#F7F7F9] border border-transparent rounded-[16px] cursor-pointer">
                      <input type="radio" name="accountType" value="agence" className="w-4 h-4 accent-[#1C1C1C] text-[#1C1C1C]" defaultChecked />
                      <span className="ml-2 text-[15px] font-medium text-[#1C1C1C]">Agence</span>
                    </label>
                    <label className="flex-1 flex items-center p-3 bg-[#F7F7F9] border border-transparent rounded-[16px] cursor-pointer">
                      <input type="radio" name="accountType" value="seul" className="w-4 h-4 accent-[#1C1C1C] text-[#1C1C1C]" />
                      <span className="ml-2 text-[15px] font-medium text-[#1C1C1C]">Seul</span>
                    </label>
                  </div>
                </div>
              </>
            )}

            <div>
              <label className="text-[14px] font-bold text-[#1C1C1C] mb-1.5 block ml-1">Adresse Email</label>
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full bg-[#F7F7F9] border border-transparent rounded-[16px] px-4 py-4 text-[15px] font-medium text-[#1C1C1C] placeholder:text-[#8E8E93] focus:border-[#1C1C1C] focus:bg-white transition-colors outline-none" 
              />
            </div>

            <div>
              <label className="text-[14px] font-bold text-[#1C1C1C] mb-1.5 block ml-1">Mot de passe</label>
              <div className="relative">
                <input 
                  type={showPassword ? 'text' : 'password'} 
                  placeholder="••••••" 
                  className="w-full bg-[#F7F7F9] border border-transparent rounded-[16px] px-4 py-4 pr-12 text-[15px] font-medium text-[#1C1C1C] placeholder:text-[#8E8E93] focus:border-[#1C1C1C] focus:bg-white transition-colors outline-none" 
                />
                <button 
                  type="button" 
                  onClick={() => setShowPassword(!showPassword)} 
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#1C1C1C] active:opacity-70 transition-opacity"
                >
                  {showPassword ? <EyeOff size={20} strokeWidth={2.5} /> : <Eye size={20} strokeWidth={2.5} />}
                </button>
              </div>
            </div>

            {mode === 'signup' && (
              <label className="flex items-center space-x-2.5 mt-2 ml-1 cursor-pointer">
                <input type="checkbox" className="w-5 h-5 accent-[#1C1C1C] text-[#1C1C1C] cursor-pointer" />
                <span className="text-[13px] text-[#8E8E93] font-medium">
                  J'ai lu et j'accepte les <span className="text-[#1C1C1C] font-bold underline">Conditions d'utilisation</span>
                </span>
              </label>
            )}
          </div>

          <div className="my-8 flex items-center">
            <div className="flex-1 h-[1px] bg-[#EBEBEB]"></div>
            <span className="mx-4 text-[#8E8E93] text-[13px] font-bold tracking-widest">OU</span>
            <div className="flex-1 h-[1px] bg-[#EBEBEB]"></div>
          </div>

          <div className="flex space-x-4 mb-4">
            <button className="flex-1 flex items-center justify-center space-x-2.5 border-2 border-[#EBEBEB] rounded-[16px] py-3.5 active:bg-[#F7F7F9] transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              <span className="text-[15px] font-bold text-[#1C1C1C]">Google</span>
            </button>
            <button className="flex-1 flex items-center justify-center space-x-2.5 border-2 border-[#EBEBEB] rounded-[16px] py-3.5 active:bg-[#F7F7F9] transition-colors">
              <svg className="w-5 h-5 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span className="text-[15px] font-bold text-[#1C1C1C]">Facebook</span>
            </button>
          </div>
          
          <div className="mt-auto pt-6 bg-white pb-6">
            <button 
              onClick={onComplete} 
              className="w-full bg-[#1C1C1C] text-white font-bold text-[16px] py-4 rounded-full shadow-lg shadow-black/10 active:scale-[0.98] transition-transform mb-4"
            >
              {mode === 'signup' ? "S'inscrire" : "Se connecter"}
            </button>
            <div className="text-center flex items-center justify-center space-x-1">
              <span className="text-[#8E8E93] text-[14px] font-medium">
                {mode === 'signup' ? 'Déjà membre ?' : 'Pas encore membre ?'}
              </span>
              <button 
                onClick={() => setMode(mode === 'signup' ? 'login' : 'signup')} 
                className="text-[#1C1C1C] font-bold text-[14px] underline underline-offset-2 active:opacity-70 transition-opacity"
              >
                {mode === 'signup' ? 'Se connecter' : "S'inscrire"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
