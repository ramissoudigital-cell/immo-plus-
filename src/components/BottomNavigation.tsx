import { Home, Heart, MessageCircle, User, Compass } from 'lucide-react';

export default function BottomNavigation({ activeTab, onHomeClick, onExploreClick, onMessagesClick, onProfileClick, onFavoritesClick }: { activeTab: 'home' | 'favorites' | 'explore' | 'messages' | 'profile', onHomeClick: () => void, onExploreClick: () => void, onMessagesClick: () => void, onProfileClick: () => void, onFavoritesClick: () => void }) {
  return (
    <div className="w-full h-[88px]">
      {/* SVG Background with Cutout */}
      <div className="absolute inset-0 drop-shadow-[0_-8px_24px_rgba(0,0,0,0.15)]">
        <svg width="100%" height="100%" viewBox="0 0 393 88" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0 H138.5 C 148.5 0 148.5 50 196.5 50 C 244.5 50 244.5 0 254.5 0 H393 V88 H0 V0Z" fill="#1C1C1C"/>
        </svg>
      </div>
      
      {/* Icons Container */}
      <div className="absolute inset-0 flex justify-between items-start px-6 pt-3">
          {/* Left Group */}
          <div className="flex space-x-3">
            <button onClick={onHomeClick} className={`w-[52px] h-[52px] rounded-full flex items-center justify-center transition-transform active:scale-95 ${activeTab === 'home' ? 'bg-white/10 shadow-inner' : 'bg-transparent hover:bg-white/5'}`}>
              <Home className={`w-[22px] h-[22px] ${activeTab === 'home' ? 'text-white fill-white' : 'text-[#8E8E93]'}`} strokeWidth={activeTab === 'home' ? 2 : 2.5} />
            </button>
            <button onClick={onFavoritesClick} className={`w-[52px] h-[52px] rounded-full flex items-center justify-center transition-transform active:scale-95 ${activeTab === 'favorites' ? 'bg-white/10 shadow-inner' : 'bg-transparent hover:bg-white/5'}`}>
              <Heart className={`w-[22px] h-[22px] ${activeTab === 'favorites' ? 'text-white fill-white' : 'text-[#8E8E93]'}`} strokeWidth={2.5} />
            </button>
          </div>

          {/* Right Group */}
          <div className="flex space-x-3">
            <button onClick={onMessagesClick} className={`w-[52px] h-[52px] rounded-full flex items-center justify-center transition-transform active:scale-95 ${activeTab === 'messages' ? 'bg-white/10 shadow-inner' : 'bg-transparent hover:bg-white/5'}`}>
              <MessageCircle className={`w-[22px] h-[22px] ${activeTab === 'messages' ? 'text-white fill-white' : 'text-[#8E8E93]'}`} strokeWidth={2.5} />
            </button>
            <button onClick={onProfileClick} className={`w-[52px] h-[52px] rounded-full flex items-center justify-center transition-transform active:scale-95 ${activeTab === 'profile' ? 'bg-white/10 shadow-inner' : 'bg-transparent hover:bg-white/5'}`}>
              <User className={`w-[22px] h-[22px] ${activeTab === 'profile' ? 'text-white fill-white' : 'text-[#8E8E93]'}`} strokeWidth={2.5} />
            </button>
          </div>
      </div>

      {/* Central FAB */}
      <div className="absolute left-1/2 -top-[24px] -translate-x-1/2">
        <button onClick={onExploreClick} className="w-[64px] h-[64px] rounded-full bg-white text-[#1C1C1C] flex items-center justify-center shadow-[0_8px_20px_rgba(0,0,0,0.12)] active:scale-[0.95] transition-transform">
          <Compass className="w-7 h-7" strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
}
