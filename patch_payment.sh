sed -i '/{isCallPanelOpen && (/i \
        {isPaymentPanelOpen && (\
          <>\
            <motion.div\
              initial={{ opacity: 0 }}\
              animate={{ opacity: 1 }}\
              exit={{ opacity: 0 }}\
              onClick={() => setIsPaymentPanelOpen(false)}\
              className="absolute inset-0 bg-black/20 z-[80]"\
            />\
            <motion.div\
              initial={{ y: '\''100%'\'' }}\
              animate={{ y: 0 }}\
              exit={{ y: '\''100%'\'' }}\
              transition={{ type: '\''spring'\'', damping: 30, stiffness: 300 }}\
              className="absolute bottom-0 left-0 right-0 bg-white rounded-t-[32px] z-[90] pb-8 pt-2"\
            >\
              <div className="w-12 h-1.5 bg-[#EBEBEB] rounded-full mx-auto mb-6"></div>\
              <div className="px-6 space-y-1">\
                <div className="flex items-center justify-between py-2 mb-4">\
                  <div>\
                    <h3 className="font-bold text-[#1C1C1C] text-[18px] tracking-tight">Accès Complet</h3>\
                    <p className="text-[#8E8E93] text-[15px] font-medium tracking-tight mt-0.5">Vidéos et photos haute résolution</p>\
                  </div>\
                  <button onClick={() => setIsPaymentPanelOpen(false)} className="w-8 h-8 flex items-center justify-center rounded-full bg-[#F5F5F5] active:scale-95 transition-transform">\
                    <X className="w-5 h-5 text-[#1C1C1C]" strokeWidth={2.5} />\
                  </button>\
                </div>\
                <button onClick={() => setIsPaymentPanelOpen(false)} className="w-full flex items-center justify-center space-x-2 py-[16px] bg-[#1C1C1C] text-white rounded-[16px] active:scale-[0.98] transition-transform shadow-[0_4px_20px_rgba(0,0,0,0.2)]">\
                  <Play className="w-5 h-5 fill-white" strokeWidth={2} />\
                  <span className="text-[16px] font-bold tracking-tight">Payer 1000 Fr</span>\
                </button>\
              </div>\
            </motion.div>\
          </>\
        )}' src/components/DetailView.tsx
