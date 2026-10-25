import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, Camera, Home, DollarSign, MapPin } from 'lucide-react';
import IOSStatusBar from './IOSStatusBar';

interface AddPropertyViewProps {
  onClose: () => void;
  onAddProperty: (property: any) => void;
}

const AMENITIES_LIST = [
  'Wi-Fi',
  'TV HD 65"',
  'Cheminée intérieure',
  'Sèche-cheveux',
  'Lave-linge',
  'Sèche-linge',
  'Réfrigérateur',
  'Lave-vaisselle'
];

export default function AddPropertyView({ onClose, onAddProperty }: AddPropertyViewProps) {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
  const [premiumMediaAdded, setPremiumMediaAdded] = useState(false);

  const handleToggleAmenity = (amenity: string) => {
    setSelectedAmenities(prev => 
      prev.includes(amenity) ? prev.filter(a => a !== amenity) : [...prev, amenity]
    );
  };

  const handlePublish = () => {
    if (!title || !price || !location) {
      alert("Veuillez remplir tous les champs obligatoires (Titre, Prix, Localisation).");
      return;
    }
    if (!premiumMediaAdded) {
      alert("Veuillez ajouter des photos et vidéos premium. C'est obligatoire pour publier l'annonce.");
      return;
    }

    const newProperty = {
      id: `p${Date.now()}`,
      title,
      location,
      price: `${price} FCFA / mois`, // Just a formatting example
      rating: '5.00',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop',
      type: 'For Rent',
      tags: selectedAmenities.length > 0 ? selectedAmenities.slice(0, 3) : ['2 bedrooms']
    };

    onAddProperty(newProperty);
    onClose();
  };

  return (
    <motion.div 
      initial={{ y: '100%' }}
      animate={{ y: 0 }}
      exit={{ y: '100%' }}
      transition={{ type: 'spring', damping: 28, stiffness: 220 }}
      className="absolute inset-0 z-[100] h-full bg-[#F7F7F9] overflow-y-auto hide-scrollbar pb-12"
    >
      <IOSStatusBar theme="dark" />
      
      {/* Header */}
      <div className="pt-16 px-6 flex items-center justify-between relative mb-8">
        <button 
          onClick={onClose}
          className="w-10 h-10 flex items-center justify-center -ml-2 active:scale-95 transition-transform"
        >
          <ChevronLeft className="w-6 h-6 text-[#1C1C1C]" strokeWidth={2} />
        </button>
        <h1 className="text-[17px] font-bold text-[#1C1C1C] tracking-tight">Ajouter un bien</h1>
        <div className="w-10 h-10" /> {/* Spacer */}
      </div>

      <div className="px-5 flex flex-col gap-6">
        
        {/* Photo upload placeholder */}
        <div>
          <label className="text-[14px] font-bold text-[#1C1C1C] mb-1.5 block ml-1">Photo de présentation (Obligatoire)</label>
          <div className="w-full h-[180px] bg-[#EBEBEB] rounded-[24px] flex flex-col items-center justify-center border-2 border-dashed border-[#A0AABF] cursor-pointer active:bg-[#E2E8F0] transition-colors">
            <Camera className="w-8 h-8 text-[#8E8E93] mb-2" />
            <span className="text-[14px] font-medium text-[#8E8E93]">Ajouter une photo</span>
          </div>
        </div>

        {/* Premium Media upload placeholder */}
        <div>
          <label className="text-[14px] font-bold text-[#1C1C1C] block ml-1">Photos & Vidéos Premium (Obligatoire)</label>
          <p className="text-[12px] text-[#8E8E93] mb-1.5 ml-1 leading-snug">Ces médias seront débloqués pour le client après un paiement de 1000 FCFA.</p>
          <div 
            onClick={() => setPremiumMediaAdded(true)}
            className={`w-full h-[120px] rounded-[24px] flex flex-col items-center justify-center border-2 border-dashed cursor-pointer transition-colors ${premiumMediaAdded ? 'bg-[#E8F5E9] border-[#4CAF50]' : 'bg-[#EBEBEB] border-[#A0AABF] active:bg-[#E2E8F0]'}`}
          >
            <Camera className={`w-8 h-8 mb-2 ${premiumMediaAdded ? 'text-[#4CAF50]' : 'text-[#8E8E93]'}`} />
            <span className={`text-[14px] font-medium ${premiumMediaAdded ? 'text-[#4CAF50]' : 'text-[#8E8E93]'}`}>
              {premiumMediaAdded ? 'Médias ajoutés' : 'Ajouter photos/vidéos premium'}
            </span>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="text-[14px] font-bold text-[#1C1C1C] mb-1.5 block ml-1">Titre de l'annonce</label>
            <div className="relative">
              <Home className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8E8E93]" />
              <input 
                type="text" 
                value={title}
                onChange={e => setTitle(e.target.value)}
                placeholder="Ex: Belle villa avec piscine" 
                className="w-full bg-white border border-[#EBEBEB] rounded-[16px] pl-12 pr-4 py-4 text-[15px] font-medium text-[#1C1C1C] placeholder:text-[#8E8E93] focus:border-[#1C1C1C] transition-colors outline-none shadow-sm" 
              />
            </div>
          </div>
          
          <div>
            <label className="text-[14px] font-bold text-[#1C1C1C] mb-1.5 block ml-1">Prix (FCFA)</label>
            <div className="relative">
              <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8E8E93]" />
              <input 
                type="number" 
                value={price}
                onChange={e => setPrice(e.target.value)}
                placeholder="0" 
                className="w-full bg-white border border-[#EBEBEB] rounded-[16px] pl-12 pr-4 py-4 text-[15px] font-medium text-[#1C1C1C] placeholder:text-[#8E8E93] focus:border-[#1C1C1C] transition-colors outline-none shadow-sm" 
              />
            </div>
          </div>

          <div>
            <label className="text-[14px] font-bold text-[#1C1C1C] mb-1.5 block ml-1">Localisation</label>
            <div className="relative">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8E8E93]" />
              <input 
                type="text" 
                value={location}
                onChange={e => setLocation(e.target.value)}
                placeholder="Ex: Abidjan, Cocody" 
                className="w-full bg-white border border-[#EBEBEB] rounded-[16px] pl-12 pr-4 py-4 text-[15px] font-medium text-[#1C1C1C] placeholder:text-[#8E8E93] focus:border-[#1C1C1C] transition-colors outline-none shadow-sm" 
              />
            </div>
          </div>

          <div>
            <label className="text-[14px] font-bold text-[#1C1C1C] mb-1.5 block ml-1">Description</label>
            <textarea 
              placeholder="Décrivez le bien..." 
              value={description}
              onChange={e => setDescription(e.target.value)}
              rows={4}
              className="w-full bg-white border border-[#EBEBEB] rounded-[16px] px-4 py-4 text-[15px] font-medium text-[#1C1C1C] placeholder:text-[#8E8E93] focus:border-[#1C1C1C] transition-colors outline-none shadow-sm resize-none" 
            />
          </div>

          {/* Amenities (Optional) */}
          <div className="mt-6 mb-2">
            <label className="text-[14px] font-bold text-[#1C1C1C] mb-2.5 block ml-1">Équipements (Optionnel)</label>
            <div className="flex flex-wrap gap-2">
              {AMENITIES_LIST.map(amenity => (
                <button
                  key={amenity}
                  onClick={() => handleToggleAmenity(amenity)}
                  className={`px-4 py-2 rounded-full text-[13px] font-bold border transition-colors active:scale-95 ${
                    selectedAmenities.includes(amenity)
                      ? 'bg-[#1C1C1C] text-white border-[#1C1C1C]'
                      : 'bg-white text-[#4A4A4C] border-[#EBEBEB]'
                  }`}
                >
                  {amenity}
                </button>
              ))}
            </div>
          </div>
        </div>

        <button 
          onClick={handlePublish}
          className="w-full bg-[#1C1C1C] text-white font-bold text-[16px] py-4 rounded-full shadow-lg shadow-black/10 active:scale-[0.98] transition-transform mt-4"
        >
          Publier l'annonce
        </button>
      </div>
    </motion.div>
  );
}
