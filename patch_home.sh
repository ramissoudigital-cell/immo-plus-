sed -i '/{\/\* Section: Découvrir de nouveaux lieux \*\//,$d' src/components/HomeView.tsx
cat << 'INNEREOF' >> src/components/HomeView.tsx
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
                 alt="Romance Living Rooms" 
                 className="absolute inset-0 w-full h-full object-cover"
              />
              <button onClick={(e) => { e.stopPropagation(); onToggleFavorite('1'); }} className="absolute top-3.5 right-3.5 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center transition-transform active:scale-95 border border-white/20">
                <Heart className={`w-4.5 h-4.5 ${favoriteIds.includes('1') ? 'fill-[#E44B4B] text-[#E44B4B]' : 'text-white'}`} />
              </button>
            </div>
            
            <div className="mt-4 px-1">
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-[#1C1C1C] text-[16px] tracking-tight">Romance Living Rooms</h3>
                <div className="flex items-center space-x-1 mt-0.5">
                  <Star className="w-3.5 h-3.5 fill-[#1C1C1C] text-[#1C1C1C]" />
                  <span className="text-[14px] font-bold text-[#1C1C1C]">4.8 <span className="text-[#8E8E93] font-normal">(112)</span></span>
                </div>
              </div>
              <p className="text-[#8E8E93] text-[14px] mt-1.5 font-medium tracking-tight">New York, NY</p>
              
              <div className="mt-3 text-[15px] font-medium">
                <span className="font-bold text-[#1C1C1C] ml-1.5">€120 nuit</span>
                <span className="text-[#8E8E93] ml-1.5">• €360 total</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
INNEREOF
