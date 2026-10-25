import React, { useState } from 'react';
import { ChevronLeft, Camera, User, Mail, Phone, MapPin, Briefcase } from 'lucide-react';
import { motion } from 'motion/react';
import IOSStatusBar from './IOSStatusBar';

interface ProfileDetailViewProps {
  onBack: () => void;
  userProfile?: any;
}

export const ProfileDetailView: React.FC<ProfileDetailViewProps> = ({ onBack, userProfile }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: userProfile?.firstName || 'Jane',
    lastName: userProfile?.lastName || 'Cooper',
    email: userProfile?.email || 'jane.cooper@example.com',
    phone: '+33 6 12 34 56 78',
    location: userProfile?.location || 'Paris, France',
    profession: userProfile?.profession || 'Client',
    bio: userProfile?.bio || '',
  });

  const profilePhoto = userProfile?.agentAvatar || "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <motion.div 
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: 'spring', damping: 28, stiffness: 220 }}
      className="absolute inset-0 z-[110] h-full bg-[#F7F7F9] overflow-y-auto hide-scrollbar pb-12"
    >
      <IOSStatusBar theme="dark" />
      {/* Header */}
      <div className="pt-16 px-6 flex items-center justify-between relative mb-8">
        <button 
          onClick={onBack}
          className="w-10 h-10 flex items-center justify-center -ml-2 active:scale-95 transition-transform z-10"
        >
          <ChevronLeft className="w-6 h-6 text-[#1C1C1C]" strokeWidth={2} />
        </button>
        <h1 className="text-[17px] font-bold text-[#1C1C1C] tracking-tight absolute left-0 right-0 text-center">Détails du profil</h1>
        <button 
          onClick={() => setIsEditing(!isEditing)}
          className="px-4 py-2 bg-[#1C1C1C] rounded-full text-[13px] font-bold text-white shadow-sm active:scale-95 transition-transform z-10"
        >
          {isEditing ? 'Enregistrer' : 'Modifier'}
        </button>
      </div>

      <div className="px-5 flex flex-col gap-6 items-center">
        {/* Profile Picture */}
        <div className="relative mb-4">
          <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-sm">
            <img 
              src={profilePhoto} 
              alt="Profile" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          {isEditing && (
            <button className="absolute bottom-0 right-0 w-8 h-8 bg-[#1C1C1C] rounded-full flex items-center justify-center border-2 border-white text-white active:scale-95 transition-transform shadow-sm">
              <Camera size={14} />
            </button>
          )}
        </div>

        {/* Form Fields */}
        <div className="w-full bg-white rounded-[24px] p-6 shadow-[0_2px_16px_rgba(0,0,0,0.04)] border border-[#EBEBEB]">
          <div className="flex flex-col gap-5">
            <InputField 
              icon={<User size={18} />} 
              label="Prénom" 
              name="firstName" 
              value={formData.firstName} 
              onChange={handleChange} 
              disabled={!isEditing} 
            />
            <div className="h-[1px] bg-[#EBEBEB]"></div>
            <InputField 
              icon={<User size={18} />} 
              label="Nom" 
              name="lastName" 
              value={formData.lastName} 
              onChange={handleChange} 
              disabled={!isEditing} 
            />
            <div className="h-[1px] bg-[#EBEBEB]"></div>
            <InputField 
              icon={<Briefcase size={18} />} 
              label="Profession" 
              name="profession" 
              value={formData.profession} 
              onChange={handleChange} 
              disabled={!isEditing} 
            />
            <div className="h-[1px] bg-[#EBEBEB]"></div>
            <InputField 
              icon={<Mail size={18} />} 
              label="Adresse e-mail" 
              name="email" 
              type="email"
              value={formData.email} 
              onChange={handleChange} 
              disabled={!isEditing} 
            />
            <div className="h-[1px] bg-[#EBEBEB]"></div>
            <InputField 
              icon={<Phone size={18} />} 
              label="Numéro de téléphone" 
              name="phone" 
              type="tel"
              value={formData.phone} 
              onChange={handleChange} 
              disabled={!isEditing} 
            />
            <div className="h-[1px] bg-[#EBEBEB]"></div>
            <InputField 
              icon={<MapPin size={18} />} 
              label="Localisation" 
              name="location" 
              value={formData.location} 
              onChange={handleChange} 
              disabled={!isEditing} 
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const InputField = ({ icon, label, name, value, onChange, disabled, type = 'text' }: any) => {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[12px] font-bold text-[#8E8E93] uppercase tracking-wider pl-1">{label}</label>
      <div className="flex items-center gap-3">
        <div className="text-[#8E8E93] w-5 flex justify-center">
          {icon}
        </div>
        <input 
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          disabled={disabled}
          className="flex-1 bg-transparent text-[15px] font-semibold text-[#1C1C1C] placeholder-[#8E8E93] focus:outline-none disabled:opacity-100 disabled:text-[#1C1C1C]"
        />
      </div>
    </div>
  );
};
