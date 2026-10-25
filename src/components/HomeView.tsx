import { Navigation, Search, Heart, Star, User } from 'lucide-react';
import IOSStatusBar from './IOSStatusBar';

interface HomeViewProps {
  onSearchClick: () => void;
  onPlaceClick: (id: string) => void;
  onProfileClick: () => void;
  favoriteIds: string[];
  onToggleFavorite: (id: string) => void;
  userRole?: 'client' | 'demarcheur' | null;
}

export default function HomeView({ onSearchClick, onPlaceClick, onProfileClick, favoriteIds, onToggleFavorite, userRole }: HomeViewProps) {
  return (
    <div className="flex-1 overflow-y-auto hide-scrollbar pb-28">
      
      {/* Hero Section */}
      <div className="relative h-[410px] rounded-b-[48px] overflow-hidden shrink-0">
        {/* Background Image */}
        <img 
          src="https://images.unsplash.com/photo-1448518184296-a22facb4446f?q=80&w=1000&auto=format&fit=crop" 
          alt="Norway Landscape" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80"></div>
        
        <IOSStatusBar />

        {/* Hero Content */}
        <div className="relative z-10 p-6 pt-20 flex flex-col h-full justify-between">
          
          {/* Top Bar */}
          <div className="flex justify-between items-center px-1">
            <div className="flex items-center space-x-2 text-white">
              <Navigation className="w-4 h-4 fill-white text-white rotate-45" />
              <span className="text-[15px] font-medium tracking-wide">Norway</span>
            </div>
            <button onClick={onProfileClick} className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-md bg-white/10 active:scale-95 transition-transform">
              <User className="w-5 h-5 text-white" strokeWidth={1.5} />
            </button>
          </div>

          {/* Greeting Text */}
          <div className="mt-auto mb-6 px-1">
            <h1 className="text-white text-[34px] leading-[1.1] font-semibold tracking-tight">
              Salut, Martin ! Dites-nous où<br />vous voulez aller
            </h1>
          </div>

          {/* Search Pill */}
          <div 
            className="mb-2 flex items-center bg-[#1A1A1A]/80 backdrop-blur-2xl rounded-[32px] py-4 px-5 shadow-lg border border-white/5 cursor-pointer active:scale-[0.98] transition-transform"
            onClick={onSearchClick}
          >
            <Search className="w-5 h-5 text-white shrink-0 ml-1" strokeWidth={2.5} />
            <div className="flex-1 ml-3.5">
              <div className="text-white font-semibold text-[15px] tracking-tight">Rechercher des lieux</div>
              <div className="text-white/60 text-[13px] mt-0.5 font-medium tracking-tight">Type de bien • Budget</div>
            </div>
          </div>
        </div>
      </div>

      {/* Section: Les plus pertinents */}
      <div className="mt-8">
        <h2 className="text-[#1C1C1C] text-[22px] font-bold px-6 mb-5 tracking-tight">Les plus pertinents</h2>
        
        {/* Horizontal Scroll List */}
        <div className="flex overflow-x-auto hide-scrollbar gap-5 px-6 snap-x snap-mandatory pb-4">
          
          {/* Card 1 */}
          <div 
            className="snap-start shrink-0 w-[290px] bg-white rounded-[32px] p-3.5 shadow-[0_2px_20px_rgba(0,0,0,0.04)] cursor-pointer"
            onClick={() => onPlaceClick('h1')}
          >
            <div className="relative h-[200px] rounded-[24px] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=800&auto=format&fit=crop" 
                alt="Tiny home" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Heart button */}
              <button onClick={(e) => { e.stopPropagation(); onToggleFavorite('h1'); }} className="absolute top-3.5 right-3.5 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center transition-transform active:scale-95 border border-white/20">
                <Heart className={`w-4.5 h-4.5 ${favoriteIds.includes('h1') ? 'fill-[#E44B4B] text-[#E44B4B]' : 'text-white'}`} />
              </button>
            </div>
            
            <div className="mt-4 px-1">
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-[#1C1C1C] text-[16px] tracking-tight">Petite maison à Rælingen</h3>
                <div className="flex items-center space-x-1 mt-0.5">
                  <Star className="w-3.5 h-3.5 fill-[#1C1C1C] text-[#1C1C1C]" />
                  <span className="text-[14px] font-bold text-[#1C1C1C]">4.95 <span className="text-[#8E8E93] font-normal">(217)</span></span>
                </div>
              </div>
              <p className="text-[#8E8E93] text-[14px] mt-1.5 font-medium tracking-tight">120 m² • 4 pièces • 2 chambres • 1 salle de bain</p>
              
              <div className="mt-3 text-[15px] font-medium">
                <span className="line-through text-[#8E8E93]">180.000 FCFA</span>
                <span className="font-bold text-[#1C1C1C] ml-1.5">150.000 FCFA / mois</span>
                <span className="text-[#8E8E93] ml-1.5">• 450.000 FCFA total</span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div 
            className="snap-start shrink-0 w-[290px] bg-white rounded-[32px] p-3.5 shadow-[0_2px_20px_rgba(0,0,0,0.04)] cursor-pointer"
            onClick={() => onPlaceClick('h2')}
          >
             <div className="relative h-[200px] rounded-[24px] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1505832018823-50331d70d237?q=80&w=800&auto=format&fit=crop" 
                alt="Cabin" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <button onClick={(e) => { e.stopPropagation(); onToggleFavorite('h2'); }} className="absolute top-3.5 right-3.5 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center transition-transform active:scale-95 border border-white/20">
                <Heart className={`w-4.5 h-4.5 ${favoriteIds.includes('h2') ? 'fill-[#E44B4B] text-[#E44B4B]' : 'text-white'}`} />
              </button>
            </div>
            <div className="mt-4 px-1">
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-[#1C1C1C] text-[16px] tracking-tight">Cabane à Tromsø</h3>
                <div className="flex items-center space-x-1 mt-0.5">
                  <Star className="w-3.5 h-3.5 fill-[#1C1C1C] text-[#1C1C1C]" />
                  <span className="text-[14px] font-bold text-[#1C1C1C]">4.88 <span className="text-[#8E8E93] font-normal">(142)</span></span>
                </div>
              </div>
              <p className="text-[#8E8E93] text-[14px] mt-1.5 font-medium tracking-tight">80 m² • 2 pièces • 1 chambre • 1 salle de bain</p>
              <div className="mt-3 text-[15px] font-medium">
                <span className="line-through text-[#8E8E93]">150.000 FCFA</span>
                <span className="font-bold text-[#1C1C1C] ml-1.5">120.000 FCFA / mois</span>
                <span className="text-[#8E8E93] ml-1.5">• 360.000 FCFA total</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Section: Découvrir de nouveaux lieux */}
      <div className="mt-6 mb-8">
        <h2 className="text-[#1C1C1C] text-[22px] font-bold px-6 mb-5 tracking-tight">Découvrir de nouveaux lieux</h2>
        
        {/* Horizontal Scroll List */}
        <div className="flex overflow-x-auto hide-scrollbar gap-5 px-6 snap-x snap-mandatory pb-4">
          
          {/* Card 1 */}
          <div 
            className="snap-start shrink-0 w-[290px] bg-white rounded-[32px] p-3.5 shadow-[0_2px_20px_rgba(0,0,0,0.04)] cursor-pointer"
            onClick={() => onPlaceClick('1')}
          >
            <div className="relative h-[200px] rounded-[24px] overflow-hidden">
              <img 
                 src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop" 
                 alt="Appartement romantique" 
                 className="absolute inset-0 w-full h-full object-cover"
              />
              <button onClick={(e) => { e.stopPropagation(); onToggleFavorite('1'); }} className="absolute top-3.5 right-3.5 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center transition-transform active:scale-95 border border-white/20">
                <Heart className={`w-4.5 h-4.5 ${favoriteIds.includes('1') ? 'fill-[#E44B4B] text-[#E44B4B]' : 'text-white'}`} />
              </button>
            </div>
            
            <div className="mt-4 px-1">
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-[#1C1C1C] text-[16px] tracking-tight">Appartement romantique</h3>
                <div className="flex items-center space-x-1 mt-0.5">
                  <Star className="w-3.5 h-3.5 fill-[#1C1C1C] text-[#1C1C1C]" />
                  <span className="text-[14px] font-bold text-[#1C1C1C]">4.8 <span className="text-[#8E8E93] font-normal">(112)</span></span>
                </div>
              </div>
              <p className="text-[#8E8E93] text-[14px] mt-1.5 font-medium tracking-tight">Paris, France</p>
              
              <div className="mt-3 text-[15px] font-medium">
                <span className="font-bold text-[#1C1C1C] ml-1.5">180.000 FCFA / mois</span>
                <span className="text-[#8E8E93] ml-1.5">• 540.000 FCFA total</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
