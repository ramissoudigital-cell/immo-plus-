import React, { useState } from "react";
import { ChevronLeft, ChevronRight, User, Lock, Bell, HeadphonesIcon, AlertCircle, HelpCircle, Globe, LogOut, Shield } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import IOSStatusBar from './IOSStatusBar';
import { ProfileDetailView } from './ProfileDetailView';
import { PasswordView } from './PasswordView';
import { NotificationsView } from './NotificationsView';
import { PrivacyPolicyView } from './PrivacyPolicyView';
import { AssistanceView } from './AssistanceView';
import { ReportProblemView } from './ReportProblemView';
import { AboutView } from './AboutView';
import { LanguageView } from './LanguageView';

interface MainSettingsViewProps {
  onBack: () => void;
  userProfile?: {
    firstName: string;
    lastName: string;
    profession: string;
    agentAvatar: string;
  };
}

export default function MainParamètresView({ onBack, userProfile }: MainSettingsViewProps) {
  const [isProfileDetailOpen, setIsProfileDetailOpen] = useState(false);
  const [isPasswordViewOpen, setIsPasswordViewOpen] = useState(false);
  const [isNotificationsViewOpen, setIsNotificationsViewOpen] = useState(false);
  const [isConfidentialitéPolicyViewOpen, setIsConfidentialitéPolicyViewOpen] = useState(false);
  const [isAssistanceViewOpen, setIsAssistanceViewOpen] = useState(false);
  const [isReportProblemViewOpen, setIsReportProblemViewOpen] = useState(false);
  const [isAboutViewOpen, setIsAboutViewOpen] = useState(false);
  const [isLangueViewOpen, setIsLangueViewOpen] = useState(false);

  const displayName = userProfile ? `${userProfile.firstName} ${userProfile.lastName}` : "Bob Randal";
  const displayProfession = userProfile ? userProfile.profession : "Economic";
  const profilePhoto = userProfile ? userProfile.agentAvatar : "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop";

  return (
    <>
    <motion.div 
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: 'spring', damping: 28, stiffness: 220 }}
      className="absolute inset-0 z-[100] h-full bg-[#F7F7F9] overflow-y-auto hide-scrollbar pb-12"
    >
      <IOSStatusBar theme="dark" />

      {/* Header */}
      <div className="pt-16 px-6 flex items-center justify-between relative mb-8">
        <button 
          onClick={onBack}
          className="w-10 h-10 flex items-center justify-center -ml-2 active:scale-95 transition-transform"
        >
          <ChevronLeft className="w-6 h-6 text-[#1C1C1C]" strokeWidth={2} />
        </button>
        <h1 className="text-[17px] font-bold text-[#1C1C1C] tracking-tight">Paramètres</h1>
        <div className="w-10 h-10" /> {/* Spacer */}
      </div>

      <div className="px-5 flex flex-col gap-6">
        {/* Profile Card */}
        <div 
          onClick={() => setIsProfileDetailOpen(true)}
          className="bg-white rounded-[24px] p-4 flex items-center justify-between shadow-[0_2px_16px_rgba(0,0,0,0.04)] border border-[#EBEBEB] cursor-pointer active:scale-95 transition-transform"
        >
          <div className="flex items-center gap-4">
            <div className="w-[52px] h-[52px] rounded-full overflow-hidden">
              <img 
                src={profilePhoto} 
                alt={displayName} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-[16px] text-[#1C1C1C] mb-0.5">{displayName}</span>
              <span className="text-[13px] text-[#8E8E93] font-medium">{displayProfession}</span>
            </div>
          </div>
          <ChevronRight size={20} className="text-[#8E8E93]" />
        </div>

        {/* Other Paramètres Section */}
        <div>
          <h2 className="text-[15px] font-bold text-[#1C1C1C] mb-3 px-2">Autres paramètres</h2>
          
          <div className="bg-white rounded-[24px] overflow-hidden shadow-[0_2px_16px_rgba(0,0,0,0.04)] border border-[#EBEBEB]">
            <div className="flex flex-col px-2 py-2">
              <div onClick={() => setIsProfileDetailOpen(true)}>
                <SettingItem icon={<User size={20} />} label="Détails du profil" />
              </div>
              <div className="h-[1px] bg-[#EBEBEB] mx-4"></div>
              <div onClick={() => setIsPasswordViewOpen(true)}>
                <SettingItem icon={<Lock size={20} />} label="Mot de passe" />
              </div>
              <div className="h-[1px] bg-[#EBEBEB] mx-4"></div>
              <div onClick={() => setIsNotificationsViewOpen(true)}>
                <SettingItem icon={<Bell size={20} />} label="Notifications" />
              </div>
              <div className="h-[1px] bg-[#EBEBEB] mx-4"></div>
              <div onClick={() => setIsConfidentialitéPolicyViewOpen(true)}>
                <SettingItem icon={<Shield size={20} />} label="Politique de confidentialité" />
              </div>
            </div>
          </div>
        </div>

        {/* Support Section */}
        <div className="bg-white rounded-[24px] overflow-hidden shadow-[0_2px_16px_rgba(0,0,0,0.04)] border border-[#EBEBEB]">
          <div className="flex flex-col px-2 py-2">
            <div onClick={() => setIsAssistanceViewOpen(true)}>
              <SettingItem icon={<HeadphonesIcon size={20} />} label="Assistance" />
            </div>
            <div className="h-[1px] bg-[#EBEBEB] mx-4"></div>
            <div onClick={() => setIsReportProblemViewOpen(true)}>
              <SettingItem icon={<AlertCircle size={20} />} label="Signaler un problème" />
            </div>
            <div className="h-[1px] bg-[#EBEBEB] mx-4"></div>
            <div onClick={() => setIsAboutViewOpen(true)}>
              <SettingItem icon={<HelpCircle size={20} />} label="À propos de nous" />
            </div>
            <div className="h-[1px] bg-[#EBEBEB] mx-4"></div>
            <div onClick={() => setIsLangueViewOpen(true)}>
              <SettingItem icon={<Globe size={20} />} label="Langue" />
            </div>
          </div>
        </div>
        
        {/* Log out Section */}
        <div className="bg-white rounded-[24px] overflow-hidden shadow-[0_2px_16px_rgba(0,0,0,0.04)] border border-[#EBEBEB] mb-8">
          <div className="flex items-center gap-4 p-4 cursor-pointer active:bg-[#F5F5F5] transition-colors">
            <div className="text-[#E44B4B]">
              <LogOut size={20} className="rotate-180" />
            </div>
            <span className="text-[15px] font-bold text-[#E44B4B]">Se déconnecter</span>
          </div>
        </div>

      </div>
    </motion.div>
    <AnimatePresence>
      {isProfileDetailOpen && (
        <ProfileDetailView 
          onBack={() => setIsProfileDetailOpen(false)} 
          userProfile={userProfile} 
        />
      )}
      {isPasswordViewOpen && (
        <PasswordView 
          onBack={() => setIsPasswordViewOpen(false)} 
        />
      )}
      {isNotificationsViewOpen && (
        <NotificationsView 
          onBack={() => setIsNotificationsViewOpen(false)} 
        />
      )}
      {isConfidentialitéPolicyViewOpen && (
        <PrivacyPolicyView 
          onBack={() => setIsConfidentialitéPolicyViewOpen(false)} 
        />
      )}
      {isAssistanceViewOpen && (
        <AssistanceView 
          onBack={() => setIsAssistanceViewOpen(false)} 
        />
      )}
      {isReportProblemViewOpen && (
        <ReportProblemView 
          onBack={() => setIsReportProblemViewOpen(false)} 
        />
      )}
      {isAboutViewOpen && (
        <AboutView 
          onBack={() => setIsAboutViewOpen(false)} 
        />
      )}
      {isLangueViewOpen && (
        <LanguageView 
          onBack={() => setIsLangueViewOpen(false)} 
        />
      )}
    </AnimatePresence>
    </>
  );
}

// Helper component for generic settings rows
const SettingItem = ({ icon, label }: { icon: React.ReactNode, label: string }) => {
  return (
    <div className="flex justify-between items-center p-3 py-3.5 group active:bg-[#F5F5F5] transition-colors cursor-pointer rounded-2xl">
      <div className="flex items-center gap-4">
        <div className="text-[#8E8E93] transition-colors">
          {icon}
        </div>
        <span className="text-[15px] font-medium text-[#1C1C1C] transition-colors tracking-tight">{label}</span>
      </div>
      <ChevronRight size={18} className="text-[#8E8E93] transition-colors" />
    </div>
  );
};
