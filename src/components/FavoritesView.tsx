import { Search, MapPin, Star, MoreVertical, Heart } from 'lucide-react';
import { motion } from 'motion/react';
import IOSStatusBar from './IOSStatusBar';


export default function FavorisView({ onClose, favoriteIds, onToggleFavorite, onPlaceClick, properties }: { onClose: () => void, favoriteIds: string[], onToggleFavorite: (id: string) => void, onPlaceClick?: (id: string) => void, properties: any[] }) {
  const favoriteItems = properties.filter(p => favoriteIds.includes(p.id));

  return (
    <motion.div 
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: 'spring', damping: 28, stiffness: 220 }}
      className="absolute inset-0 bg-[#F5F5F5] z-[30] flex flex-col"
    >
      <IOSStatusBar theme="dark" />
      
      {/* Header */}
      <div className="pt-12 px-6 pb-2">
        <div className="flex justify-between items-center mb-4">
          <button onClick={onClose} className="text-[#1C1C1C] font-medium tracking-tight active:opacity-70 transition-opacity">
            Close
          </button>
          <button className="w-8 h-8 flex items-center justify-center active:scale-95 transition-transform">
            <MoreVertical className="w-6 h-6 text-[#1C1C1C]" strokeWidth={2} />
          </button>
        </div>

        <div className="flex justify-between items-center mb-6">
          <h1 className="text-[32px] font-bold text-[#1C1C1C] tracking-tight leading-tight">Favoris</h1>
        </div>

        <div className="bg-white rounded-[20px] px-4 py-3 flex items-center mb-6 shadow-sm border border-[#EBEBEB]">
          <Search className="w-[20px] h-[20px] text-[#A3A3A3] shrink-0" strokeWidth={2} />
          <input 
            type="text" 
            placeholder="Search favorites" 
            className="bg-transparent border-none outline-none ml-2.5 flex-1 text-[16px] text-[#1C1C1C] placeholder:text-[#A3A3A3]"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto hide-scrollbar px-6 pb-32">
        {favoriteItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center pb-20">
            <div className="w-16 h-16 bg-[#EBEBEB] rounded-full flex items-center justify-center mb-4">
              <Heart className="w-8 h-8 text-[#A3A3A3]" />
            </div>
            <h3 className="text-[18px] font-bold text-[#1C1C1C] tracking-tight mb-2">No favorites yet</h3>
            <p className="text-[#8E8E93] text-[15px] font-medium tracking-tight max-w-[240px]">
              Tap the heart icon on properties you like to save them here.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {favoriteItems.map((item) => (
              <div key={item.id} onClick={() => onPlaceClick?.(item.id)} className="bg-white rounded-[24px] p-3 shadow-sm border border-[#EBEBEB] flex items-center gap-4 cursor-pointer">
                <div className="w-[100px] h-[100px] rounded-[16px] overflow-hidden shrink-0 relative">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                  <button onClick={(e) => { e.stopPropagation(); onToggleFavorite(item.id); }} className="absolute top-2 right-2 w-6 h-6 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center shadow-sm active:scale-95 transition-transform">
                    <Heart className="w-3.5 h-3.5 fill-[#E44B4B] text-[#E44B4B]" />
                  </button>
                </div>
                
                <div className="flex-1 min-w-0 py-1">
                  <div className="flex items-center space-x-1.5 mb-1">
                    <Star className="w-[14px] h-[14px] fill-[#FF8A00] text-[#FF8A00]" />
                    <span className="text-[#1C1C1C] font-bold text-[13px]">{item.rating}</span>
                  </div>
                  <h3 className="text-[16px] font-bold text-[#1C1C1C] tracking-tight truncate">{item.title}</h3>
                  <div className="flex items-center text-[#8E8E93] mt-0.5 mb-2 truncate">
                    <MapPin className="w-3.5 h-3.5 mr-1 shrink-0" strokeWidth={2.5} />
                    <span className="text-[13px] font-medium tracking-tight truncate">{item.location}</span>
                  </div>
                  <div className="text-[16px] font-bold text-[#1C1C1C] tracking-tight">
                    {item.price}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      
      {/* iOS Home Indicator */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[130px] h-[5px] bg-[#1C1C1C] rounded-full z-50 pointer-events-none"></div>
    </motion.div>
  );
}
