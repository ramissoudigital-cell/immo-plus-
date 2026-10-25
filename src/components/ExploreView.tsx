import { ArrowLeft, Bell, ChevronDown, Heart, ArrowUpRight, Filter, Star } from 'lucide-react';
import { motion } from 'motion/react';
import IOSStatusBar from './IOSStatusBar';


export default function ExploreView({ onClose, onPlaceClick, favoriteIds, onToggleFavorite, properties }: { onClose: () => void, onPlaceClick?: (id: string) => void, favoriteIds: string[], onToggleFavorite: (id: string) => void, properties: any[] }) {
  return (
    <motion.div 
      initial={{ y: '100%' }}
      animate={{ y: 0 }}
      exit={{ y: '100%' }}
      transition={{ type: 'spring', damping: 28, stiffness: 220 }}
      className="absolute inset-0 bg-[#F5F5F5] z-[60] flex flex-col"
    >
      <IOSStatusBar theme="dark" />
      
      {/* Header */}
      <div className="pt-14 pb-4 px-6 flex justify-between items-center shrink-0">
        <button onClick={onClose} className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-[#EBEBEB] shadow-sm active:scale-95 transition-transform">
          <ArrowLeft className="w-5 h-5 text-[#1C1C1C]" />
        </button>
        <div className="flex items-center space-x-1 cursor-pointer">
          <span className="text-[15px] font-semibold text-[#1C1C1C] tracking-tight">Abidjan, CI</span>
          <ChevronDown className="w-4 h-4 text-[#1C1C1C]" strokeWidth={2.5} />
        </div>
        <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-[#EBEBEB] shadow-sm active:scale-95 transition-transform relative">
          <Bell className="w-5 h-5 text-[#1C1C1C]" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto hide-scrollbar pb-32">
        {/* Greeting */}
        <div className="px-6 mt-4 mb-6">
          <h2 className="text-[#8E8E93] text-[24px] italic font-medium tracking-tight">Salut Orbix 👋</h2>
          <h1 className="text-[#1C1C1C] text-[32px] font-medium leading-tight tracking-tight mt-1">Bienvenue</h1>
        </div>

        {/* Filters */}
        <div className="px-6 flex items-center justify-between mb-8">
          <div className="flex space-x-2">
            <button className="px-5 py-2.5 bg-[#1C1C1C] text-white rounded-full text-[14px] font-medium tracking-tight shadow-sm">
              Rent
            </button>
            <button className="px-5 py-2.5 bg-white text-[#8E8E93] border border-[#EBEBEB] rounded-full text-[14px] font-medium tracking-tight shadow-sm">
              Buy
            </button>
            <button className="px-5 py-2.5 bg-white text-[#8E8E93] border border-[#EBEBEB] rounded-full text-[14px] font-medium tracking-tight shadow-sm">
              Sell
            </button>
          </div>
          <div className="flex space-x-2 items-center">
             <button className="px-4 py-2.5 bg-white text-[#8E8E93] border border-[#EBEBEB] rounded-full text-[14px] font-medium tracking-tight shadow-sm">
               Apartment
             </button>
             <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-[#EBEBEB] shadow-sm">
                <Filter className="w-4 h-4 text-[#1C1C1C]" fill="currentColor" strokeWidth={0} />
             </button>
          </div>
        </div>

        {/* Cards */}
        <div className="px-6 space-y-6">
          {properties.map((item) => (
            <div key={item.id} onClick={() => onPlaceClick?.(item.id)} className="bg-white rounded-[36px] p-3 shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-[#EBEBEB] cursor-pointer">
              <div className="relative h-[240px] rounded-[28px] overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent bottom-0 h-full"></div>
                
                <div className="absolute top-4 right-4 flex space-x-2">
                  <button onClick={(e) => { e.stopPropagation(); onToggleFavorite(item.id); }} className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-[#1C1C1C] transition-transform active:scale-95 shadow-sm">
                    <Heart className={`w-5 h-5 ${favoriteIds.includes(item.id) ? 'fill-[#E44B4B] text-[#E44B4B]' : ''}`} strokeWidth={2} />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-[#1C1C1C] flex items-center justify-center text-white transition-transform active:scale-95 shadow-sm">
                    <ArrowUpRight className="w-5 h-5" strokeWidth={2.5} />
                  </button>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                  <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#1C1C1C]"></div>
                    <span className="text-[#1C1C1C] font-medium text-[13px]">{item.type}</span>
                  </div>
                  <div className="flex items-center space-x-1.5 bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm">
                    <Star className="w-[14px] h-[14px] fill-[#FF8A00] text-[#FF8A00]" />
                    <span className="text-[#1C1C1C] font-bold text-[13px]">{item.rating}</span>
                  </div>
                </div>
              </div>

              <div className="pt-5 pb-3 px-3">
                <div className="flex justify-between items-start mb-2">
                  <div className="pr-4">
                    <h3 className="font-medium text-[#1C1C1C] text-[20px] tracking-tight">{item.title}</h3>
                    <p className="text-[#8E8E93] text-[13px] mt-1 font-medium tracking-tight truncate">{item.location}</p>
                  </div>
                  <div className="text-[18px] font-medium text-[#1C1C1C] tracking-tight shrink-0">
                    {item.price}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {item.tags.map(tag => (
                    <div key={tag} className="px-3 py-1.5 rounded-full bg-white text-[#8E8E93] text-[12px] font-medium border border-[#EBEBEB] tracking-tight">
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* iOS Home Indicator for Explore View */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[130px] h-[5px] bg-[#1C1C1C] rounded-full z-50 pointer-events-none"></div>
    </motion.div>
  );
}
