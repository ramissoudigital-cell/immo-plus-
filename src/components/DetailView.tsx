import { useState } from 'react';
import { ArrowLeft, Heart, Play, MessageCircle, Phone, Star, KeyRound, Award, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import IOSStatusBar from './IOSStatusBar';


export default function DetailView({ onClose, propertyId, favoriteIds, onToggleFavorite, onMessageClick, properties }: { onClose: () => void, propertyId: string, favoriteIds: string[], onToggleFavorite: (id: string) => void, onMessageClick: () => void, properties: any[] }) {
  const property = properties.find(p => p.id === propertyId) || properties[0];
  const [isCallPanelOpen, setIsCallPanelOpen] = useState(false);
  const [isPaymentPanelOpen, setIsPaymentPanelOpen] = useState(false);
  const [hasPaidPremium, setHasPaidPremium] = useState(false);

  const handlePayment = () => {
    setHasPaidPremium(true);
    setIsPaymentPanelOpen(false);
  };

  return (
    <motion.div 
      initial={{ y: '100%' }}
      animate={{ y: 0 }}
      exit={{ y: '100%' }}
      transition={{ type: 'spring', damping: 28, stiffness: 220 }}
      className="absolute inset-0 bg-[#F5F5F5] z-[60] flex flex-col"
    >
      <div className="flex-1 overflow-y-auto hide-scrollbar pb-32">
        {/* Main Image taking full top space */}
        <div className="relative h-[380px] shrink-0 mb-6 rounded-b-[36px] overflow-hidden shadow-sm">
          <img 
            src={property.image} 
            className="w-full h-full object-cover" 
            alt={property.title} 
          />
          
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/40 to-transparent"></div>
          <IOSStatusBar />
          
          {/* Header Buttons over image */}
          <div className="absolute top-[60px] left-6 right-6 flex justify-between items-center">
            <button onClick={onClose} className="w-[42px] h-[42px] rounded-full bg-white/30 backdrop-blur-md border border-white/20 flex items-center justify-center transition-transform active:scale-95 shadow-sm">
              <ArrowLeft className="w-5 h-5 text-white" strokeWidth={2} />
            </button>
            <button onClick={() => onToggleFavorite(property.id)} className="w-[42px] h-[42px] rounded-full bg-white/30 backdrop-blur-md border border-white/20 flex items-center justify-center transition-transform active:scale-95 shadow-sm">
              <Heart className={`w-5 h-5 ${favoriteIds.includes(property.id) ? 'fill-[#E44B4B] text-[#E44B4B]' : 'text-white'}`} />
            </button>
          </div>

          {/* Bottom Icons over image */}
          <div className="absolute bottom-5 left-5">
             <button onClick={() => setIsPaymentPanelOpen(true)} className="w-11 h-11 rounded-full bg-white/40 backdrop-blur-md flex items-center justify-center border border-white/30">
               <Play className="w-5 h-5 text-white fill-white ml-0.5" />
             </button>
          </div>
          <div className="absolute bottom-5 right-5 flex space-x-2.5">
             <button onClick={onMessageClick} className="w-11 h-11 rounded-full bg-white/40 backdrop-blur-md flex items-center justify-center border border-white/30">
               <MessageCircle className="w-5 h-5 text-white" strokeWidth={2.5} />
             </button>
             <button onClick={() => setIsCallPanelOpen(true)} className="w-11 h-11 rounded-full bg-white/40 backdrop-blur-md flex items-center justify-center border border-white/30">
               <Phone className="w-5 h-5 text-white" strokeWidth={2.5} />
             </button>
          </div>
        </div>

        {/* Title and Reviews */}
        <div className="px-6 mb-5">
           <h1 className="text-[22px] font-bold text-[#1C1C1C] leading-tight tracking-tight">{property.title}</h1>
           <div className="flex items-center mt-2 space-x-1.5">
             <Star className="w-[18px] h-[18px] fill-[#1C1C1C] text-[#1C1C1C]" />
             <span className="text-[#1C1C1C] font-bold text-[14px]">{property.rating}</span>
             <span className="text-[#8E8E93] text-[14px] font-medium">(116 avis)</span>
           </div>
        </div>

        <div className="mx-6 h-[1px] bg-[#EBEBEB]"></div>

        {/* Host Info */}
        <div className="px-6 py-5 flex justify-between items-center">
          <div>
            <h2 className="text-[16px] font-bold text-[#1C1C1C] tracking-tight">Logement entier</h2>
            <p className="text-[#8E8E93] text-[14px] mt-0.5 font-medium tracking-tight">Propriétaire : Isabelle</p>
          </div>
          <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop" className="w-[46px] h-[46px] rounded-full object-cover" alt="Host avatar" />
        </div>

        <div className="mx-6 h-[1px] bg-[#EBEBEB]"></div>

        {/* Équipements */}
        <div className="px-6 py-5">
          <h2 className="text-[16px] font-bold text-[#1C1C1C] tracking-tight mb-3.5">Équipements</h2>
          <div className="flex flex-wrap gap-2">
            {['Wi-Fi', 'TV HD 65"', 'Cheminée intérieure', 'Sèche-cheveux', 'Lave-linge', 'Sèche-linge', 'Réfrigérateur', 'Lave-vaisselle'].map(tag => (
              <div key={tag} className="px-3.5 py-1.5 rounded-full bg-white text-[#1C1C1C] text-[12px] font-medium border border-[#EBEBEB] shadow-[0_1px_2px_rgba(0,0,0,0.02)] tracking-tight">
                {tag}
              </div>
            ))}
          </div>
        </div>

        <div className="mx-6 h-[1px] bg-[#EBEBEB]"></div>

        {/* Info Sections */}
        <div className="px-6 py-5 space-y-6">
          <div className="flex items-start gap-4">
            <KeyRound className="w-[22px] h-[22px] text-[#1C1C1C] shrink-0 mt-0.5" strokeWidth={2} />
            <div>
              <h3 className="font-bold text-[#1C1C1C] text-[15px] tracking-tight">Visite facilitée</h3>
              <p className="text-[#8E8E93] text-[13px] mt-0.5 leading-snug font-medium tracking-tight">Clés disponibles en agence</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Award className="w-[22px] h-[22px] text-[#1C1C1C] shrink-0 mt-0.5" strokeWidth={2} />
            <div>
              <h3 className="font-bold text-[#1C1C1C] text-[15px] tracking-tight">Excellent retour client</h3>
              <p className="text-[#8E8E93] text-[13px] mt-0.5 leading-snug font-medium tracking-tight">Propriété très prisée, visites récentes très positives</p>
            </div>
          </div>
        </div>

        {/* Galerie */}
        <div className="px-6 mb-12">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-[18px] font-medium text-[#1C1C1C] tracking-tight">Galerie Premium</h2>
            {!hasPaidPremium && (
              <span className="text-[12px] font-bold text-white bg-[#1C1C1C] px-2.5 py-1 rounded-full">
                Verrouillé
              </span>
            )}
          </div>
          <div className="flex space-x-3 overflow-x-auto hide-scrollbar pb-2">
             <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=200&auto=format&fit=crop" className="w-[100px] h-[80px] rounded-[20px] object-cover shrink-0 shadow-sm" />
             <div className="relative shrink-0">
               <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=200&auto=format&fit=crop" className={`w-[100px] h-[80px] rounded-[20px] object-cover shadow-sm transition-all ${hasPaidPremium ? '' : 'blur-md opacity-70'}`} />
               {!hasPaidPremium && (
                 <button onClick={() => setIsPaymentPanelOpen(true)} className="absolute inset-0 flex items-center justify-center bg-black/10 rounded-[20px]">
                   <Play className="w-6 h-6 text-white drop-shadow-md" />
                 </button>
               )}
             </div>
             <div className="relative shrink-0">
               <img src="https://images.unsplash.com/photo-1600566753086-00f18efc2291?q=80&w=200&auto=format&fit=crop" className={`w-[100px] h-[80px] rounded-[20px] object-cover shadow-sm transition-all ${hasPaidPremium ? '' : 'blur-md opacity-70'}`} />
               {!hasPaidPremium && (
                 <button onClick={() => setIsPaymentPanelOpen(true)} className="absolute inset-0 flex items-center justify-center bg-black/10 rounded-[20px]">
                   <Play className="w-6 h-6 text-white drop-shadow-md" />
                 </button>
               )}
             </div>
             <div className="relative shrink-0">
               <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=200&auto=format&fit=crop" className={`w-[100px] h-[80px] rounded-[20px] object-cover shadow-sm transition-all ${hasPaidPremium ? '' : 'blur-md opacity-70'}`} />
               {!hasPaidPremium && (
                 <button onClick={() => setIsPaymentPanelOpen(true)} className="absolute inset-0 flex items-center justify-center bg-black/10 rounded-[20px]">
                   <Play className="w-6 h-6 text-white drop-shadow-md" />
                 </button>
               )}
             </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#F5F5F5] via-[#F5F5F5] to-transparent pt-12 pb-8 px-6 pointer-events-none">
         <div className="flex space-x-4 pointer-events-auto">
           <button className="flex-1 bg-white text-[#1C1C1C] py-[18px] rounded-[16px] font-medium text-[15px] shadow-[0_2px_10px_rgba(0,0,0,0.04)] border border-[#EBEBEB] tracking-tight active:scale-95 transition-transform flex items-center justify-center space-x-2">
             <span>Visiter</span>
           </button>
           <button className="flex-[1.5] bg-[#1C1C1C] text-white py-[18px] rounded-[16px] font-medium text-[15px] shadow-[0_4px_20px_rgba(0,0,0,0.2)] tracking-tight active:scale-95 transition-transform">
             Louer / Acheter
           </button>
         </div>
      </div>
      {/* iOS Home Indicator for Detail View */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[130px] h-[5px] bg-[#1C1C1C] rounded-full z-[100] pointer-events-none"></div>

      {/* Call Panel Overlay */}
      <AnimatePresence>
        {isPaymentPanelOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsPaymentPanelOpen(false)}
              className="absolute inset-0 bg-black/20 z-[80]"
            />
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="absolute bottom-0 left-0 right-0 bg-white rounded-t-[32px] z-[90] pb-8 pt-2"
            >
              <div className="w-12 h-1.5 bg-[#EBEBEB] rounded-full mx-auto mb-6"></div>
              <div className="px-6 space-y-1">
                <div className="flex items-center justify-between py-2 mb-4">
                  <div>
                    <h3 className="font-bold text-[#1C1C1C] text-[18px] tracking-tight">Accès Complet</h3>
                    <p className="text-[#8E8E93] text-[15px] font-medium tracking-tight mt-0.5">Vidéos et photos haute résolution</p>
                  </div>
                  <button onClick={() => setIsPaymentPanelOpen(false)} className="w-8 h-8 flex items-center justify-center rounded-full bg-[#F5F5F5] active:scale-95 transition-transform">
                    <X className="w-5 h-5 text-[#1C1C1C]" strokeWidth={2.5} />
                  </button>
                </div>
                <button onClick={handlePayment} className="w-full flex items-center justify-center space-x-2 py-[16px] bg-[#1C1C1C] text-white rounded-[16px] active:scale-[0.98] transition-transform shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
                  <Play className="w-5 h-5 fill-white" strokeWidth={2} />
                  <span className="text-[16px] font-bold tracking-tight">Payer 1000 Fr</span>
                </button>
              </div>
            </motion.div>
          </>
        )}
        {isCallPanelOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCallPanelOpen(false)}
              className="absolute inset-0 bg-black/20 z-[80]"
            />
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="absolute bottom-0 left-0 right-0 bg-white rounded-t-[32px] z-[90] pb-8 pt-2"
            >
              <div className="w-12 h-1.5 bg-[#EBEBEB] rounded-full mx-auto mb-6"></div>
              
              <div className="px-6 space-y-1">
                <div className="flex items-center justify-between py-2 mb-4">
                  <div className="flex items-center space-x-4">
                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop" className="w-[50px] h-[50px] rounded-full object-cover shadow-sm" alt="Host avatar" />
                    <div>
                      <h3 className="font-bold text-[#1C1C1C] text-[18px] tracking-tight">Isabelle</h3>
                      <p className="text-[#8E8E93] text-[15px] font-medium tracking-tight mt-0.5">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <button onClick={() => setIsCallPanelOpen(false)} className="w-8 h-8 flex items-center justify-center rounded-full bg-[#F5F5F5] active:scale-95 transition-transform">
                    <X className="w-5 h-5 text-[#1C1C1C]" strokeWidth={2.5} />
                  </button>
                </div>

                <a href="tel:+15551234567" className="w-full flex items-center justify-center space-x-2 py-[16px] bg-[#1C1C1C] text-white rounded-[16px] active:scale-[0.98] transition-transform shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
                  <Phone className="w-5 h-5 fill-white" strokeWidth={2} />
                  <span className="text-[16px] font-bold tracking-tight">Contacter l'agence</span>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
