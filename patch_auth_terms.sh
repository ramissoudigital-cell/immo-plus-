sed -i '/{mode === '\''signup'\'' && (/,/)}/c\
            {mode === '\''signup'\'' && (\
              <label className="flex items-center space-x-2.5 mt-2 ml-1 cursor-pointer">\
                <input type="checkbox" className="w-5 h-5 accent-[#1C1C1C] text-[#1C1C1C] cursor-pointer" />\
                <span className="text-[13px] text-[#8E8E93] font-medium">\
                  J'\''ai lu et j'\''accepte les <span className="text-[#1C1C1C] font-bold underline">Conditions d'\''utilisation</span>\
                </span>\
              </label>\
            )}' src/components/AuthView.tsx
