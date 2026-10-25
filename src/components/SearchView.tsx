import { useState } from 'react';
import { X, SlidersHorizontal, Search, Heart, Star, MapPin, Building, Home, Check, CheckSquare, Square } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import IOSStatusBar from './IOSStatusBar';

export default function SearchView({ onClose, onPlaceClick, favoriteIds, onToggleFavorite }: { onClose: () => void, onPlaceClick: (id: string) => void, favoriteIds: string[], onToggleFavorite: (id: string) => void }) {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [filterType, setFilterType] = useState('location'); // 'location' ou 'vente'
  const [filterFurnished, setFilterFurnished] = useState(false);
  const [selectedProximities, setSelectedProximities] = useState<string[]>([]);

  const toggleProximity = (prox: string) => {
    setSelectedProximities(prev => 
      prev.includes(prox) ? prev.filter(p => p !== prox) : [...prev, prox]
    );
  };

  return (
    <motion.div 
      initial={{ y: '100%' }}
      animate={{ y: 0 }}
      exit={{ y: '100%' }}
      transition={{ type: 'spring', damping: 28, stiffness: 220 }}
      className="absolute inset-0 bg-[#F7F7F9] z-[60] flex flex-col"
    >
      <IOSStatusBar theme="dark" />
      
      {/* Header */}
      <div className="pt-16 pb-4 px-6 flex justify-between items-center shrink-0">
        <button onClick={onClose} className="w-10 h-10 flex items-center justify-center -ml-2 active:scale-95 transition-transform">
          <X className="w-6 h-6 text-[#1C1C1C]" strokeWidth={2} />
        </button>
        <div className="text-[17px] font-bold text-[#1C1C1C] tracking-tight">Recherche</div>
        <button onClick={() => setIsFiltersOpen(true)} className="w-10 h-10 flex items-center justify-center -mr-2 active:scale-95 transition-transform">
          <SlidersHorizontal className="w-5 h-5 text-[#1C1C1C]" strokeWidth={2} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto hide-scrollbar pb-28">
        {/* Recherche Input Box */}
        <div className="px-6 mb-6">
          <div className="bg-white rounded-[32px] p-4 px-5 flex items-center shadow-[0_2px_16px_rgba(0,0,0,0.04)] border border-[#EBEBEB]">
            <Search className="w-5 h-5 text-[#1C1C1C] shrink-0" strokeWidth={2.5} />
            <div className="ml-3.5 flex-1">
              <div className="text-[#1C1C1C] font-bold text-[15px] tracking-tight">Norway</div>
              <div className="text-[#8E8E93] text-[13px] font-medium tracking-tight mt-0.5">Villa, Appartement • A louer</div>
            </div>
          </div>
        </div>

        {/* Filter Chips */}
        <div className="px-6 mb-8 flex gap-3 overflow-x-auto hide-scrollbar">
          <button className="bg-[#1C1C1C] text-white px-6 py-3 rounded-full text-[15px] font-bold tracking-tight whitespace-nowrap active:scale-95 transition-transform">
            Tout type
          </button>
          <button className="bg-white text-[#1C1C1C] border border-[#EBEBEB] px-6 py-3 rounded-full text-[15px] font-medium tracking-tight whitespace-nowrap active:scale-95 transition-transform">
            Chambre
          </button>
          <button className="bg-white text-[#1C1C1C] border border-[#EBEBEB] px-6 py-3 rounded-full text-[15px] font-medium tracking-tight whitespace-nowrap active:scale-95 transition-transform">
            Logement entier
          </button>
        </div>

        {/* Vertical Results List */}
        <div className="px-6 space-y-6">
          {/* Result 1 */}
          <div onClick={() => onPlaceClick('h1')} className="bg-white rounded-[32px] p-3.5 shadow-[0_2px_20px_rgba(0,0,0,0.04)] cursor-pointer">
            <div className="relative h-[220px] rounded-[24px] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=800&auto=format&fit=crop" 
                alt="The WonderInn Riverside Retreat" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <button onClick={(e) => { e.stopPropagation(); onToggleFavorite('h1'); }} className="absolute top-3.5 right-3.5 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center transition-transform active:scale-95 border border-white/20">
                <Heart className={`w-5 h-5 ${favoriteIds.includes('h1') ? 'fill-[#E44B4B] text-[#E44B4B]' : 'text-white'}`} />
              </button>
            </div>
            <div className="mt-4 px-1.5">
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-[#1C1C1C] text-[17px] tracking-tight">The WonderInn Riverside Retreat</h3>
                <div className="flex items-center space-x-1 mt-0.5 shrink-0 ml-2">
                  <Star className="w-3.5 h-3.5 fill-[#1C1C1C] text-[#1C1C1C]" />
                  <span className="text-[14px] font-bold text-[#1C1C1C]">4.93 <span className="text-[#8E8E93] font-normal">(167)</span></span>
                </div>
              </div>
              <p className="text-[#8E8E93] text-[14px] mt-1.5 font-medium tracking-tight">2 chambres • 2 lits • 1 salle de bain</p>
              <div className="mt-3 text-[15px] font-medium">
                <span className="line-through text-[#8E8E93]">180.000 FCFA</span>
                <span className="font-bold text-[#1C1C1C] ml-1.5">150.000 FCFA / mois</span>
                <span className="text-[#8E8E93] ml-1.5">• 540.000 FCFA total</span>
              </div>
            </div>
          </div>

          {/* Result 2 */}
          <div onClick={() => onPlaceClick('h2')} className="bg-white rounded-[32px] p-3.5 shadow-[0_2px_20px_rgba(0,0,0,0.04)] cursor-pointer">
            <div className="relative h-[220px] rounded-[24px] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1505832018823-50331d70d237?q=80&w=800&auto=format&fit=crop" 
                alt="Lillehammer Cabin" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <button onClick={(e) => { e.stopPropagation(); onToggleFavorite('h2'); }} className="absolute top-3.5 right-3.5 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center transition-transform active:scale-95 border border-white/20">
                <Heart className={`w-5 h-5 ${favoriteIds.includes('h2') ? 'fill-[#E44B4B] text-[#E44B4B]' : 'text-white'}`} />
              </button>
            </div>
            <div className="mt-4 px-1.5">
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-[#1C1C1C] text-[17px] tracking-tight">Entire cabin in Lillehammer</h3>
                <div className="flex items-center space-x-1 mt-0.5 shrink-0 ml-2">
                  <Star className="w-3.5 h-3.5 fill-[#1C1C1C] text-[#1C1C1C]" />
                  <span className="text-[14px] font-bold text-[#1C1C1C]">4.92 <span className="text-[#8E8E93] font-normal">(115)</span></span>
                </div>
              </div>
              <p className="text-[#8E8E93] text-[14px] mt-1.5 font-medium tracking-tight">3 chambres • 4 lits • 2 salle de bains</p>
              <div className="mt-3 text-[15px] font-medium">
                <span className="font-bold text-[#1C1C1C]">200.000 FCFA / mois</span>
                <span className="text-[#8E8E93] ml-1.5">• 720.000 FCFA total</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* iOS Home Indicator for Recherche View */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[130px] h-[5px] bg-[#1C1C1C] rounded-full z-50"></div>

      {/* Filter Bottom Sheet */}
      <AnimatePresence>
        {isFiltersOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsFiltersOpen(false)}
              className="absolute inset-0 bg-black/20 z-[70]"
            />
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="absolute bottom-0 left-0 right-0 bg-white rounded-t-[32px] z-[80] flex flex-col max-h-[85vh]"
            >
              <div className="shrink-0 pt-2 pb-4">
                <div className="w-12 h-1.5 bg-[#EBEBEB] rounded-full mx-auto mb-4"></div>
                <div className="px-6 flex justify-between items-center">
                  <h2 className="text-[18px] font-bold text-[#1C1C1C] tracking-tight">Filtres avancés</h2>
                  <button onClick={() => setIsFiltersOpen(false)} className="w-8 h-8 flex items-center justify-center rounded-full bg-[#F5F5F5] active:scale-95 transition-transform">
                    <X className="w-5 h-5 text-[#1C1C1C]" strokeWidth={2.5} />
                  </button>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto px-6 pb-24 space-y-6">
                {/* Ville / Quartier */}
                <div>
                  <h3 className="text-[15px] font-bold text-[#1C1C1C] mb-3">Ville / Quartier</h3>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8E8E93]" />
                    <input 
                      type="text" 
                      placeholder="Ex: Cocody, Abidjan" 
                      className="w-full bg-[#F5F5F5] text-[#1C1C1C] rounded-[16px] py-3.5 pl-12 pr-4 font-medium text-[15px] focus:outline-none focus:ring-2 focus:ring-[#1C1C1C]/20"
                    />
                  </div>
                </div>

                {/* Type de transaction */}
                <div>
                  <h3 className="text-[15px] font-bold text-[#1C1C1C] mb-3">Type de transaction</h3>
                  <div className="flex bg-[#F5F5F5] rounded-[16px] p-1">
                    <button 
                      onClick={() => setFilterType('location')}
                      className={`flex-1 py-2.5 rounded-[12px] text-[14px] font-bold transition-all ${filterType === 'location' ? 'bg-white text-[#1C1C1C] shadow-sm' : 'text-[#8E8E93]'}`}
                    >
                      Location
                    </button>
                    <button 
                      onClick={() => setFilterType('vente')}
                      className={`flex-1 py-2.5 rounded-[12px] text-[14px] font-bold transition-all ${filterType === 'vente' ? 'bg-white text-[#1C1C1C] shadow-sm' : 'text-[#8E8E93]'}`}
                    >
                      Vente
                    </button>
                  </div>
                </div>

                {/* Budget */}
                <div>
                  <h3 className="text-[15px] font-bold text-[#1C1C1C] mb-3">Budget max (FCFA)</h3>
                  <input 
                    type="number" 
                    placeholder="Ex: 500000" 
                    className="w-full bg-[#F5F5F5] text-[#1C1C1C] rounded-[16px] py-3.5 px-4 font-medium text-[15px] focus:outline-none focus:ring-2 focus:ring-[#1C1C1C]/20"
                  />
                </div>

                {/* Nombre de pièces */}
                <div>
                  <h3 className="text-[15px] font-bold text-[#1C1C1C] mb-3">Nombre de pièces</h3>
                  <div className="flex gap-2 overflow-x-auto hide-scrollbar">
                    {['1+', '2+', '3+', '4+', '5+'].map(num => (
                      <button key={num} className="shrink-0 w-12 h-12 rounded-full border border-[#EBEBEB] flex items-center justify-center text-[15px] font-medium text-[#1C1C1C] active:bg-[#F5F5F5] transition-colors">
                        {num}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Options supplémentaires */}
                <div>
                  <h3 className="text-[15px] font-bold text-[#1C1C1C] mb-3">Options</h3>
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <button onClick={() => setFilterFurnished(!filterFurnished)} className="flex items-center justify-center">
                      {filterFurnished ? <CheckSquare className="w-6 h-6 text-[#1C1C1C]" /> : <Square className="w-6 h-6 text-[#8E8E93]" />}
                    </button>
                    <span className="text-[15px] font-medium text-[#1C1C1C]">Meublé</span>
                  </label>
                </div>

                {/* Proximités */}
                <div>
                  <h3 className="text-[15px] font-bold text-[#1C1C1C] mb-3">Proximité</h3>
                  <div className="flex flex-wrap gap-2">
                    {['École', 'Route principale', 'Commerce', 'Hôpital', 'Transport'].map(prox => {
                      const isSelected = selectedProximities.includes(prox);
                      return (
                        <button 
                          key={prox}
                          onClick={() => toggleProximity(prox)}
                          className={`px-4 py-2 rounded-full border text-[14px] font-medium transition-all ${isSelected ? 'border-[#1C1C1C] bg-[#1C1C1C] text-white' : 'border-[#EBEBEB] bg-white text-[#1C1C1C]'}`}
                        >
                          {prox}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-white border-t border-[#EBEBEB]">
                <button onClick={() => setIsFiltersOpen(false)} className="w-full bg-[#1C1C1C] text-white py-[16px] rounded-[16px] font-bold text-[16px] shadow-[0_4px_20px_rgba(0,0,0,0.2)] active:scale-[0.98] transition-transform">
                  Afficher les résultats
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
