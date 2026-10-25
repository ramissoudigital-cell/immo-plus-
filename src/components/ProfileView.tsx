import { useState } from 'react';
import { ChevronLeft, MoreVertical, Camera, SquarePen, ChevronDown, ChevronRight, Sun, Settings, Briefcase, User, Clock, Lock, Info, LogOut, X, Save, Bell, HeadphonesIcon, Shield, Globe, Calendar, Wallet, Home, PieChart, CreditCard, FileCheck, LayoutDashboard, Users, BarChart, Scale, FileSearch, PenTool, Database, Settings2, UserPlus, LineChart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import IOSStatusBar from './IOSStatusBar';
import MainSettingsView from './MainSettingsView';
import { PasswordView } from './PasswordView';
import { NotificationsView } from './NotificationsView';
import { PrivacyPolicyView } from './PrivacyPolicyView';
import { AssistanceView } from './AssistanceView';
import { ReportProblemView } from './ReportProblemView';
import { AboutView } from './AboutView';
import { LanguageView } from './LanguageView';

import { FileText } from 'lucide-react';
export default function ProfileView({ onClose, onMenuOpenChange, role }: { onClose: () => void, onMenuOpenChange?: (isOpen: boolean) => void, role?: 'client' | 'demarcheur' | 'proprietaire' | 'agence' | 'juriste' | 'admin' | null }) {
  const [showMenu, setShowMenu] = useState(false);
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isPasswordViewOpen, setIsPasswordViewOpen] = useState(false);
  const [isNotificationsViewOpen, setIsNotificationsViewOpen] = useState(false);
  const [isPrivacyPolicyViewOpen, setIsPrivacyPolicyViewOpen] = useState(false);
  const [isAssistanceViewOpen, setIsAssistanceViewOpen] = useState(false);
  const [isReportProblemViewOpen, setIsReportProblemViewOpen] = useState(false);
  const [isAboutViewOpen, setIsAboutViewOpen] = useState(false);
  const [isLanguageViewOpen, setIsLanguageViewOpen] = useState(false);
  
  const [userProfile, setUserProfile] = useState({
    firstName: 'Bob',
    lastName: 'Randal',
    profession: 'Entrepreneur',
    location: 'Abidjan, CI',
    website: '',
    agentAvatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop'
  });

  const [editForm, setEditForm] = useState({
    firstName: userProfile.firstName,
    lastName: userProfile.lastName,
    profession: userProfile.profession,
    location: userProfile.location,
    website: userProfile.website
  });

  const [activeTab, setActiveTab] = useState<'preferences' | 'notifications' | 'networks'>('preferences');
  const [language, setLanguage] = useState('English');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showComments, setShowComments] = useState(true);
  const [fontSize, setFontSize] = useState(50);
  const [zoom, setZoom] = useState('75%');
  const [brightness, setBrightness] = useState(75);

  const [pushNotifications, setPushNotifications] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(false);
  const [smsNotifications, setSmsNotifications] = useState(false);

  const [onlineStatus, setOnlineStatus] = useState(true);
  const [connectionRequests, setConnectionRequests] = useState(true);

  const handleMenuChange = (isOpen: boolean) => {
    setShowMenu(isOpen);
    if (onMenuOpenChange) {
      onMenuOpenChange(isOpen);
    }
  };

  const handleEditProfileChange = (isOpen: boolean) => {
    setIsEditProfileOpen(isOpen);
    if (onMenuOpenChange) {
      onMenuOpenChange(isOpen);
    }
  };

  const handleSettingsChange = (isOpen: boolean) => {
    setIsSettingsOpen(isOpen);
    if (onMenuOpenChange) {
      onMenuOpenChange(isOpen);
    }
  };

  return (
    <motion.div 
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: 'spring', damping: 28, stiffness: 220 }}
      className="absolute inset-0 bg-[#F8F9FA] z-[30] flex flex-col"
    >
      <IOSStatusBar theme="dark" />
      
      {/* Header */}
      <div className="pt-14 pb-4 px-4 flex justify-between items-center shrink-0">
        <button onClick={onClose} className="w-10 h-10 flex items-center justify-center active:opacity-70 transition-opacity">
          <ChevronLeft className="w-[28px] h-[28px] text-[#1C1C1C]" strokeWidth={2.5} />
        </button>
        <button onClick={() => handleMenuChange(true)} className="w-10 h-10 flex items-center justify-center active:opacity-70 transition-opacity">
          <MoreVertical className="w-6 h-6 text-[#1C1C1C]" strokeWidth={2} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto hide-scrollbar pb-32">
        {/* Profile Info */}
        <div className="px-6 flex items-center mb-6">
          <div className="relative">
            <img src={userProfile.agentAvatar} className="w-[72px] h-[72px] rounded-full object-cover shadow-sm" alt="Profile" />
            <div className="absolute bottom-0 right-0 w-[22px] h-[22px] bg-white rounded-full flex items-center justify-center shadow-sm border border-[#EBEBEB]">
              <Camera className="w-[12px] h-[12px] text-[#1C1C1C]" strokeWidth={2.5} />
            </div>
          </div>
          <div className="ml-5 flex-1">
            <h1 className="text-[20px] font-bold text-[#1C1C1C] tracking-tight">{userProfile.firstName} {userProfile.lastName}</h1>
            <div className="flex items-center text-[#8E8E93] mt-0.5">
              <span className="text-[14px] font-medium tracking-tight">{userProfile.profession}, {userProfile.location}</span>
              <SquarePen className="w-[14px] h-[14px] ml-1.5" strokeWidth={2} />
            </div>
          </div>
        </div>

        {/* Edit Button */}
        <div className="px-6 mb-8 flex justify-center">
          <button onClick={() => { setEditForm({ firstName: userProfile.firstName, lastName: userProfile.lastName, profession: userProfile.profession, location: userProfile.location, website: userProfile.website }); handleEditProfileChange(true); }} className="bg-[#1C1C1C] text-white font-bold text-[15px] py-3.5 px-8 rounded-[14px] shadow-sm active:scale-[0.98] transition-transform w-[220px]">
            Edit profile
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-[#EBEBEB] px-6 mb-2">
          <button onClick={() => setActiveTab('preferences')} className={`flex-1 pb-3 ${activeTab === 'preferences' ? 'border-b-2 border-[#1C1C1C] text-[#1C1C1C]' : 'text-[#8E8E93]'} text-[12px] font-bold tracking-wider uppercase transition-colors`}>
            Preferences
          </button>
          <button onClick={() => setActiveTab('notifications')} className={`flex-1 pb-3 ${activeTab === 'notifications' ? 'border-b-2 border-[#1C1C1C] text-[#1C1C1C]' : 'text-[#8E8E93]'} text-[12px] font-bold tracking-wider uppercase transition-colors`}>
            Notifications
          </button>
          <button onClick={() => setActiveTab('networks')} className={`flex-1 pb-3 ${activeTab === 'networks' ? 'border-b-2 border-[#1C1C1C] text-[#1C1C1C]' : 'text-[#8E8E93]'} text-[12px] font-bold tracking-wider uppercase transition-colors`}>
            Networks
          </button>
        </div>

        {/* List Items */}
        <div className="px-6">
          {activeTab === 'preferences' && (
            <>
              <div className="flex justify-between items-center py-4 cursor-pointer active:opacity-70 transition-opacity" onClick={() => setLanguage(language === 'English' ? 'French' : 'English')}>
                <span className="text-[#1C1C1C] text-[15px] font-bold tracking-tight">Langue</span>
                <div className="flex items-center text-[#8E8E93]">
                  <span className="text-[14px] font-bold mr-1 text-[#4A4A4C]">{language}</span>
                  <ChevronDown className="w-[18px] h-[18px] text-[#4A4A4C]" strokeWidth={2.5} />
                </div>
              </div>

              <div className="flex justify-between items-center py-4 cursor-pointer" onClick={() => setIsDarkMode(!isDarkMode)}>
                <span className="text-[#1C1C1C] text-[15px] font-bold tracking-tight">Dark mode</span>
                <div className={`w-[46px] h-[26px] rounded-full p-0.5 transition-colors flex ${isDarkMode ? 'bg-[#1C1C1C] justify-end' : 'bg-[#E5E5E5] justify-start'}`}>
                  <motion.div layout className="w-[22px] h-[22px] bg-white rounded-full shadow-[0_2px_4px_rgba(0,0,0,0.1)]"></motion.div>
                </div>
              </div>

              <div className="flex justify-between items-center py-4 cursor-pointer" onClick={() => setShowComments(!showComments)}>
                <span className="text-[#1C1C1C] text-[15px] font-bold tracking-tight">Show comments</span>
                <div className={`w-[46px] h-[26px] rounded-full p-0.5 transition-colors flex ${showComments ? 'bg-[#1C1C1C] justify-end' : 'bg-[#E5E5E5] justify-start'}`}>
                  <motion.div layout className="w-[22px] h-[22px] bg-white rounded-full shadow-[0_2px_4px_rgba(0,0,0,0.1)]"></motion.div>
                </div>
              </div>

              <div className="flex justify-between items-center py-4">
                <span className="text-[#1C1C1C] text-[15px] font-bold tracking-tight">Font size</span>
                <div className="flex items-center space-x-4 w-[160px]">
                  <span className="text-[14px] font-bold text-[#1C1C1C]">A</span>
                  <div 
                    className="flex-1 h-3 bg-transparent flex items-center relative cursor-pointer"
                    onClick={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      setFontSize(Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100)));
                    }}
                  >
                    <div className="w-full h-1 bg-[#EBEBEB] rounded-full pointer-events-none"></div>
                    <div className="absolute top-1/2 -translate-y-1/2 w-[18px] h-[18px] bg-white border border-[#EBEBEB] rounded-full shadow-sm pointer-events-none transition-all" style={{ left: `calc(${fontSize}% - 9px)` }}></div>
                  </div>
                  <span className="text-[18px] font-bold text-[#1C1C1C]">A</span>
                </div>
              </div>

              <div className="flex justify-between items-center py-4 cursor-pointer active:opacity-70 transition-opacity" onClick={() => setZoom(zoom === '75%' ? '100%' : zoom === '100%' ? '125%' : '75%')}>
                <span className="text-[#1C1C1C] text-[15px] font-bold tracking-tight">Page zoom</span>
                <div className="flex items-center text-[#8E8E93]">
                  <span className="text-[14px] font-bold mr-1 text-[#4A4A4C]">{zoom}</span>
                  <ChevronDown className="w-[18px] h-[18px] text-[#4A4A4C]" strokeWidth={2.5} />
                </div>
              </div>

              <div className="flex justify-between items-center py-4">
                <span className="text-[#1C1C1C] text-[15px] font-bold tracking-tight">Brightness</span>
                <div className="flex items-center space-x-4 w-[160px]">
                  <Sun className="w-4 h-4 text-[#8E8E93]" strokeWidth={2.5} />
                  <div 
                    className="flex-1 h-3 bg-transparent flex items-center relative cursor-pointer"
                    onClick={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      setBrightness(Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100)));
                    }}
                  >
                    <div className="w-full h-1 bg-[#EBEBEB] rounded-full pointer-events-none"></div>
                    <div className="absolute top-1/2 -translate-y-1/2 w-[18px] h-[18px] bg-white border border-[#EBEBEB] rounded-full shadow-sm pointer-events-none transition-all" style={{ left: `calc(${brightness}% - 9px)` }}></div>
                  </div>
                  <Sun className="w-[22px] h-[22px] text-[#8E8E93]" strokeWidth={2} />
                </div>
              </div>
            </>
          )}

          {activeTab === 'notifications' && (
            <>
              <div className="flex justify-between items-center py-4 cursor-pointer" onClick={() => setPushNotifications(!pushNotifications)}>
                <span className="text-[#1C1C1C] text-[15px] font-bold tracking-tight">Push notifications</span>
                <div className={`w-[46px] h-[26px] rounded-full p-0.5 transition-colors flex ${pushNotifications ? 'bg-[#1C1C1C] justify-end' : 'bg-[#E5E5E5] justify-start'}`}>
                  <motion.div layout className="w-[22px] h-[22px] bg-white rounded-full shadow-[0_2px_4px_rgba(0,0,0,0.1)]"></motion.div>
                </div>
              </div>

              <div className="flex justify-between items-center py-4 cursor-pointer" onClick={() => setEmailNotifications(!emailNotifications)}>
                <span className="text-[#1C1C1C] text-[15px] font-bold tracking-tight">Email notifications</span>
                <div className={`w-[46px] h-[26px] rounded-full p-0.5 transition-colors flex ${emailNotifications ? 'bg-[#1C1C1C] justify-end' : 'bg-[#E5E5E5] justify-start'}`}>
                  <motion.div layout className="w-[22px] h-[22px] bg-white rounded-full shadow-[0_2px_4px_rgba(0,0,0,0.1)]"></motion.div>
                </div>
              </div>

              <div className="flex justify-between items-center py-4 cursor-pointer" onClick={() => setSmsNotifications(!smsNotifications)}>
                <span className="text-[#1C1C1C] text-[15px] font-bold tracking-tight">SMS alerts</span>
                <div className={`w-[46px] h-[26px] rounded-full p-0.5 transition-colors flex ${smsNotifications ? 'bg-[#1C1C1C] justify-end' : 'bg-[#E5E5E5] justify-start'}`}>
                  <motion.div layout className="w-[22px] h-[22px] bg-white rounded-full shadow-[0_2px_4px_rgba(0,0,0,0.1)]"></motion.div>
                </div>
              </div>
            </>
          )}

          {activeTab === 'networks' && (
            <>
              <div className="flex justify-between items-center py-4 cursor-pointer" onClick={() => setOnlineStatus(!onlineStatus)}>
                <span className="text-[#1C1C1C] text-[15px] font-bold tracking-tight">Show online status</span>
                <div className={`w-[46px] h-[26px] rounded-full p-0.5 transition-colors flex ${onlineStatus ? 'bg-[#1C1C1C] justify-end' : 'bg-[#E5E5E5] justify-start'}`}>
                  <motion.div layout className="w-[22px] h-[22px] bg-white rounded-full shadow-[0_2px_4px_rgba(0,0,0,0.1)]"></motion.div>
                </div>
              </div>

              <div className="flex justify-between items-center py-4 cursor-pointer" onClick={() => setConnectionRequests(!connectionRequests)}>
                <span className="text-[#1C1C1C] text-[15px] font-bold tracking-tight">Allow connection requests</span>
                <div className={`w-[46px] h-[26px] rounded-full p-0.5 transition-colors flex ${connectionRequests ? 'bg-[#1C1C1C] justify-end' : 'bg-[#E5E5E5] justify-start'}`}>
                  <motion.div layout className="w-[22px] h-[22px] bg-white rounded-full shadow-[0_2px_4px_rgba(0,0,0,0.1)]"></motion.div>
                </div>
              </div>
            </>
          )}
        </div>

        <div className="mx-6 h-[1px] bg-[#EBEBEB] my-2"></div>

        <div className="px-6">
          <div className="flex justify-between items-center py-4 cursor-pointer active:opacity-70 transition-opacity" onClick={() => alert('Cache cleared successfully!')}>
            <span className="text-[#1C1C1C] text-[15px] font-bold tracking-tight">Clear cache</span>
            <ChevronRight className="w-[20px] h-[20px] text-[#1C1C1C]" strokeWidth={2.5} />
          </div>
          <div className="flex justify-between items-center py-4 cursor-pointer active:opacity-70 transition-opacity" onClick={() => alert('Browsing history deleted!')}>
            <span className="text-[#1C1C1C] text-[15px] font-bold tracking-tight">Delete browsing history</span>
            <ChevronRight className="w-[20px] h-[20px] text-[#1C1C1C]" strokeWidth={2.5} />
          </div>
        </div>

        <div className="mt-12 flex justify-center space-x-6">
          <span className="text-[#8E8E93] text-[13px] font-medium border-b border-[#8E8E93] pb-[1px]">User regulations</span>
          <span className="text-[#8E8E93] text-[13px] font-medium border-b border-[#8E8E93] pb-[1px]">Privacy and cookies</span>
        </div>

      </div>

      {/* Bottom Sheet Menu */}
      <AnimatePresence>
        {showMenu && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => handleMenuChange(false)}
              className="absolute inset-0 bg-black/20 z-[70]"
            />
            {/* Sheet */}
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="absolute bottom-0 left-0 right-0 bg-white rounded-t-[32px] z-[80] pb-8 pt-2"
            >
              <div className="w-12 h-1.5 bg-[#EBEBEB] rounded-full mx-auto mb-6"></div>
              
              <div className="px-6 space-y-1">
                <button onClick={() => { handleMenuChange(false); handleSettingsChange(true); }} className="w-full flex items-center justify-between py-4 active:bg-[#F5F5F5] transition-colors rounded-xl px-2 -mx-2">
                  <div className="flex items-center space-x-4">
                    <Settings className="w-6 h-6 text-[#8E8E93]" strokeWidth={2} />
                    <span className="text-[#1C1C1C] text-[16px] font-medium tracking-tight">Paramètres</span>
                  </div>
                  <ChevronRight className="w-[20px] h-[20px] text-[#1C1C1C]" strokeWidth={2.5} />
                </button>

                {role === 'client' && (
                  <button onClick={() => { handleMenuChange(false); alert("Vos contrats de location ou de vente s'afficheront ici."); }} className="w-full flex items-center justify-between py-4 active:bg-[#F5F5F5] transition-colors rounded-xl px-2 -mx-2">
                    <div className="flex items-center space-x-4">
                      <FileText className="w-6 h-6 text-[#8E8E93]" strokeWidth={2} />
                      <span className="text-[#1C1C1C] text-[16px] font-medium tracking-tight">Mes Contrats</span>
                    </div>
                    <ChevronRight className="w-[20px] h-[20px] text-[#1C1C1C]" strokeWidth={2.5} />
                  </button>
                )}

                {role === 'demarcheur' && (
                  <>
                    <button onClick={() => { handleMenuChange(false); alert("Gérez les demandes de visites et vos rendez-vous ici."); }} className="w-full flex items-center justify-between py-4 active:bg-[#F5F5F5] transition-colors rounded-xl px-2 -mx-2">
                      <div className="flex items-center space-x-4">
                        <Calendar className="w-6 h-6 text-[#8E8E93]" strokeWidth={2} />
                        <span className="text-[#1C1C1C] text-[16px] font-medium tracking-tight">Agenda & Visites</span>
                      </div>
                      <ChevronRight className="w-[20px] h-[20px] text-[#1C1C1C]" strokeWidth={2.5} />
                    </button>
                    <button onClick={() => { handleMenuChange(false); alert("Suivez vos commissions sur les transactions conclues ici."); }} className="w-full flex items-center justify-between py-4 active:bg-[#F5F5F5] transition-colors rounded-xl px-2 -mx-2">
                      <div className="flex items-center space-x-4">
                        <Wallet className="w-6 h-6 text-[#8E8E93]" strokeWidth={2} />
                        <span className="text-[#1C1C1C] text-[16px] font-medium tracking-tight">Mes Commissions</span>
                      </div>
                      <ChevronRight className="w-[20px] h-[20px] text-[#1C1C1C]" strokeWidth={2.5} />
                    </button>
                  </>
                )}

                {role === 'proprietaire' && (
                  <>
                    <button onClick={() => { handleMenuChange(false); alert("Consultez le tableau de bord de vos biens immobiliers."); }} className="w-full flex items-center justify-between py-4 active:bg-[#F5F5F5] transition-colors rounded-xl px-2 -mx-2">
                      <div className="flex items-center space-x-4">
                        <PieChart className="w-6 h-6 text-[#8E8E93]" strokeWidth={2} />
                        <span className="text-[#1C1C1C] text-[16px] font-medium tracking-tight">Tableau de bord</span>
                      </div>
                      <ChevronRight className="w-[20px] h-[20px] text-[#1C1C1C]" strokeWidth={2.5} />
                    </button>
                    <button onClick={() => { handleMenuChange(false); alert("Gérez vos annonces (modification, suppression)."); }} className="w-full flex items-center justify-between py-4 active:bg-[#F5F5F5] transition-colors rounded-xl px-2 -mx-2">
                      <div className="flex items-center space-x-4">
                        <Home className="w-6 h-6 text-[#8E8E93]" strokeWidth={2} />
                        <span className="text-[#1C1C1C] text-[16px] font-medium tracking-tight">Mes Annonces</span>
                      </div>
                      <ChevronRight className="w-[20px] h-[20px] text-[#1C1C1C]" strokeWidth={2.5} />
                    </button>
                    <button onClick={() => { handleMenuChange(false); alert("Choisissez et assignez des démarcheurs autorisés à gérer vos biens."); }} className="w-full flex items-center justify-between py-4 active:bg-[#F5F5F5] transition-colors rounded-xl px-2 -mx-2">
                      <div className="flex items-center space-x-4">
                        <UserPlus className="w-6 h-6 text-[#8E8E93]" strokeWidth={2} />
                        <span className="text-[#1C1C1C] text-[16px] font-medium tracking-tight">Assigner des démarcheurs</span>
                      </div>
                      <ChevronRight className="w-[20px] h-[20px] text-[#1C1C1C]" strokeWidth={2.5} />
                    </button>
                    <button onClick={() => { handleMenuChange(false); alert("Suivi en temps réel des visites et des transactions sur votre patrimoine."); }} className="w-full flex items-center justify-between py-4 active:bg-[#F5F5F5] transition-colors rounded-xl px-2 -mx-2">
                      <div className="flex items-center space-x-4">
                        <LineChart className="w-6 h-6 text-[#8E8E93]" strokeWidth={2} />
                        <span className="text-[#1C1C1C] text-[16px] font-medium tracking-tight">Suivi visites & transactions</span>
                      </div>
                      <ChevronRight className="w-[20px] h-[20px] text-[#1C1C1C]" strokeWidth={2.5} />
                    </button>
                    <button onClick={() => { handleMenuChange(false); alert("Gérez la réception de vos paiements et loyers."); }} className="w-full flex items-center justify-between py-4 active:bg-[#F5F5F5] transition-colors rounded-xl px-2 -mx-2">
                      <div className="flex items-center space-x-4">
                        <CreditCard className="w-6 h-6 text-[#8E8E93]" strokeWidth={2} />
                        <span className="text-[#1C1C1C] text-[16px] font-medium tracking-tight">Paiements & Loyers</span>
                      </div>
                      <ChevronRight className="w-[20px] h-[20px] text-[#1C1C1C]" strokeWidth={2.5} />
                    </button>
                    <button onClick={() => { handleMenuChange(false); alert("Consultez les rapports juridiques sur vos biens."); }} className="w-full flex items-center justify-between py-4 active:bg-[#F5F5F5] transition-colors rounded-xl px-2 -mx-2">
                      <div className="flex items-center space-x-4">
                        <FileCheck className="w-6 h-6 text-[#8E8E93]" strokeWidth={2} />
                        <span className="text-[#1C1C1C] text-[16px] font-medium tracking-tight">Rapports Juridiques</span>
                      </div>
                      <ChevronRight className="w-[20px] h-[20px] text-[#1C1C1C]" strokeWidth={2.5} />
                    </button>
                  </>
                )}

                {role === 'agence' && (
                  <>
                    <button onClick={() => { handleMenuChange(false); alert("Gérez votre parc immobilier (plusieurs biens et propriétaires)."); }} className="w-full flex items-center justify-between py-4 active:bg-[#F5F5F5] transition-colors rounded-xl px-2 -mx-2">
                      <div className="flex items-center space-x-4">
                        <LayoutDashboard className="w-6 h-6 text-[#8E8E93]" strokeWidth={2} />
                        <span className="text-[#1C1C1C] text-[16px] font-medium tracking-tight">Gestion Parc Immobilier</span>
                      </div>
                      <ChevronRight className="w-[20px] h-[20px] text-[#1C1C1C]" strokeWidth={2.5} />
                    </button>
                    <button onClick={() => { handleMenuChange(false); alert("Supervisez votre équipe de démarcheurs affiliés."); }} className="w-full flex items-center justify-between py-4 active:bg-[#F5F5F5] transition-colors rounded-xl px-2 -mx-2">
                      <div className="flex items-center space-x-4">
                        <Users className="w-6 h-6 text-[#8E8E93]" strokeWidth={2} />
                        <span className="text-[#1C1C1C] text-[16px] font-medium tracking-tight">Supervision Démarcheurs</span>
                      </div>
                      <ChevronRight className="w-[20px] h-[20px] text-[#1C1C1C]" strokeWidth={2.5} />
                    </button>
                    <button onClick={() => { handleMenuChange(false); alert("Pilotage centralisé des visites, des contrats et des commissions."); }} className="w-full flex items-center justify-between py-4 active:bg-[#F5F5F5] transition-colors rounded-xl px-2 -mx-2">
                      <div className="flex items-center space-x-4">
                        <BarChart className="w-6 h-6 text-[#8E8E93]" strokeWidth={2} />
                        <span className="text-[#1C1C1C] text-[16px] font-medium tracking-tight">Pilotage Centralisé</span>
                      </div>
                      <ChevronRight className="w-[20px] h-[20px] text-[#1C1C1C]" strokeWidth={2.5} />
                    </button>
                  </>
                )}

                {role === 'juriste' && (
                  <>
                    <button onClick={() => { handleMenuChange(false); alert("Vérifiez les titres fonciers et documents des propriétaires."); }} className="w-full flex items-center justify-between py-4 active:bg-[#F5F5F5] transition-colors rounded-xl px-2 -mx-2">
                      <div className="flex items-center space-x-4">
                        <FileSearch className="w-6 h-6 text-[#8E8E93]" strokeWidth={2} />
                        <span className="text-[#1C1C1C] text-[16px] font-medium tracking-tight">Vérification Foncière</span>
                      </div>
                      <ChevronRight className="w-[20px] h-[20px] text-[#1C1C1C]" strokeWidth={2.5} />
                    </button>
                    <button onClick={() => { handleMenuChange(false); alert("Rédigez et validez les contrats de bail ou de vente."); }} className="w-full flex items-center justify-between py-4 active:bg-[#F5F5F5] transition-colors rounded-xl px-2 -mx-2">
                      <div className="flex items-center space-x-4">
                        <PenTool className="w-6 h-6 text-[#8E8E93]" strokeWidth={2} />
                        <span className="text-[#1C1C1C] text-[16px] font-medium tracking-tight">Rédaction & Contrats</span>
                      </div>
                      <ChevronRight className="w-[20px] h-[20px] text-[#1C1C1C]" strokeWidth={2.5} />
                    </button>
                  </>
                )}

                {role === 'admin' && (
                  <>
                    <button onClick={() => { handleMenuChange(false); alert("Contrôle global des données, rôles et transactions."); }} className="w-full flex items-center justify-between py-4 active:bg-[#F5F5F5] transition-colors rounded-xl px-2 -mx-2">
                      <div className="flex items-center space-x-4">
                        <Database className="w-6 h-6 text-[#8E8E93]" strokeWidth={2} />
                        <span className="text-[#1C1C1C] text-[16px] font-medium tracking-tight">Gestion des Données</span>
                      </div>
                      <ChevronRight className="w-[20px] h-[20px] text-[#1C1C1C]" strokeWidth={2.5} />
                    </button>
                    <button onClick={() => { handleMenuChange(false); alert("Configurez le système et ses paramètres globaux."); }} className="w-full flex items-center justify-between py-4 active:bg-[#F5F5F5] transition-colors rounded-xl px-2 -mx-2">
                      <div className="flex items-center space-x-4">
                        <Settings2 className="w-6 h-6 text-[#8E8E93]" strokeWidth={2} />
                        <span className="text-[#1C1C1C] text-[16px] font-medium tracking-tight">Paramètres Système</span>
                      </div>
                      <ChevronRight className="w-[20px] h-[20px] text-[#1C1C1C]" strokeWidth={2.5} />
                    </button>
                  </>
                )}
                
                <button onClick={() => { handleMenuChange(false); setIsEditProfileOpen(true); }} className="w-full flex items-center justify-between py-4 active:bg-[#F5F5F5] transition-colors rounded-xl px-2 -mx-2">
                  <div className="flex items-center space-x-4">
                    <User className="w-6 h-6 text-[#8E8E93]" strokeWidth={2} />
                    <span className="text-[#1C1C1C] text-[16px] font-medium tracking-tight">Détails du profil</span>
                  </div>
                  <ChevronRight className="w-[20px] h-[20px] text-[#1C1C1C]" strokeWidth={2.5} />
                </button>
                
                <button onClick={() => { handleMenuChange(false); setIsPasswordViewOpen(true); }} className="w-full flex items-center justify-between py-4 active:bg-[#F5F5F5] transition-colors rounded-xl px-2 -mx-2">
                  <div className="flex items-center space-x-4">
                    <Lock className="w-6 h-6 text-[#8E8E93]" strokeWidth={2} />
                    <span className="text-[#1C1C1C] text-[16px] font-medium tracking-tight">Mot de passe</span>
                  </div>
                  <ChevronRight className="w-[20px] h-[20px] text-[#1C1C1C]" strokeWidth={2.5} />
                </button>
                
                <button onClick={() => { handleMenuChange(false); setIsNotificationsViewOpen(true); }} className="w-full flex items-center justify-between py-4 active:bg-[#F5F5F5] transition-colors rounded-xl px-2 -mx-2">
                  <div className="flex items-center space-x-4">
                    <Bell className="w-6 h-6 text-[#8E8E93]" strokeWidth={2} />
                    <span className="text-[#1C1C1C] text-[16px] font-medium tracking-tight">Notifications</span>
                  </div>
                  <ChevronRight className="w-[20px] h-[20px] text-[#1C1C1C]" strokeWidth={2.5} />
                </button>

                <button onClick={() => { handleMenuChange(false); setIsAssistanceViewOpen(true); }} className="w-full flex items-center justify-between py-4 active:bg-[#F5F5F5] transition-colors rounded-xl px-2 -mx-2">
                  <div className="flex items-center space-x-4">
                    <HeadphonesIcon className="w-6 h-6 text-[#8E8E93]" strokeWidth={2} />
                    <span className="text-[#1C1C1C] text-[16px] font-medium tracking-tight">Assistance</span>
                  </div>
                  <ChevronRight className="w-[20px] h-[20px] text-[#1C1C1C]" strokeWidth={2.5} />
                </button>

                <div className="mx-2 h-[1px] bg-[#EBEBEB] my-2"></div>
                
                <button onClick={() => { handleMenuChange(false); setIsPrivacyPolicyViewOpen(true); }} className="w-full flex items-center justify-between py-4 active:bg-[#F5F5F5] transition-colors rounded-xl px-2 -mx-2">
                  <div className="flex items-center space-x-4">
                    <Shield className="w-6 h-6 text-[#8E8E93]" strokeWidth={2} />
                    <span className="text-[#1C1C1C] text-[16px] font-medium tracking-tight">Politique de confidentialité</span>
                  </div>
                  <ChevronRight className="w-[20px] h-[20px] text-[#1C1C1C]" strokeWidth={2.5} />
                </button>
                
                <button onClick={() => { handleMenuChange(false); setIsAboutViewOpen(true); }} className="w-full flex items-center justify-between py-4 active:bg-[#F5F5F5] transition-colors rounded-xl px-2 -mx-2">
                  <div className="flex items-center space-x-4">
                    <Info className="w-6 h-6 text-[#8E8E93]" strokeWidth={2} />
                    <span className="text-[#1C1C1C] text-[16px] font-medium tracking-tight">Information</span>
                  </div>
                  <ChevronRight className="w-[20px] h-[20px] text-[#1C1C1C]" strokeWidth={2.5} />
                </button>
                
                <button onClick={() => { handleMenuChange(false); setIsLanguageViewOpen(true); }} className="w-full flex items-center justify-between py-4 active:bg-[#F5F5F5] transition-colors rounded-xl px-2 -mx-2">
                  <div className="flex items-center space-x-4">
                    <Globe className="w-6 h-6 text-[#8E8E93]" strokeWidth={2} />
                    <span className="text-[#1C1C1C] text-[16px] font-medium tracking-tight">Langue</span>
                  </div>
                  <ChevronRight className="w-[20px] h-[20px] text-[#1C1C1C]" strokeWidth={2.5} />
                </button>
                
                <button className="w-full flex items-center justify-between py-4 active:bg-[#F5F5F5] transition-colors rounded-xl px-2 -mx-2">
                  <div className="flex items-center space-x-4">
                    <LogOut className="w-6 h-6 text-[#E44B4B]" strokeWidth={2} />
                    <span className="text-[#E44B4B] text-[16px] font-medium tracking-tight">Déconnexion</span>
                  </div>
                  <ChevronRight className="w-[20px] h-[20px] text-[#1C1C1C]" strokeWidth={2.5} />
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* iOS Home Indicator */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[130px] h-[5px] bg-[#1C1C1C] rounded-full z-[100] pointer-events-none"></div>

      {/* Edit Profile Bottom Sheet */}
      <AnimatePresence>
        {isEditProfileOpen && (
          <div className="absolute inset-0 z-[9999] pointer-events-none">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/40 backdrop-blur-[2px] pointer-events-auto"
              onClick={() => handleEditProfileChange(false)}
            />
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute bottom-0 left-0 right-0 bg-white rounded-t-[32px] pt-3 pb-8 px-6 shadow-[0_-15px_40px_rgba(0,0,0,0.12)] max-h-[85vh] overflow-y-auto hide-scrollbar pointer-events-auto"
            >
                <div className="w-12 h-1.5 bg-gray-200 rounded-full mx-auto mb-6" />
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-[20px] font-bold text-gray-900">Modifier le profil</h2>
                  <button 
                    onClick={() => handleEditProfileChange(false)}
                    className="w-8 h-8 flex items-center justify-center bg-gray-100 text-gray-500 rounded-full hover:bg-gray-200 transition-colors active:scale-95"
                  >
                    <X size={18} />
                  </button>
                </div>

                <div className="space-y-5 pb-8">
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-100 shadow-sm">
                        <img src={userProfile.agentAvatar} alt="Avatar" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                      </div>
                      <button className="absolute bottom-0 right-0 w-8 h-8 bg-[#1C1C1C] text-white rounded-full flex items-center justify-center border-2 border-white shadow-sm active:scale-95 transition-transform">
                        <Camera size={14} />
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="text-[12px] font-bold text-gray-500 uppercase tracking-wider mb-2 block ml-1">Prénom</label>
                    <input type="text" value={editForm.firstName} onChange={(e) => setEditForm({...editForm, firstName: e.target.value})} className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-5 py-4 text-[15px] font-medium text-gray-900 focus:ring-2 focus:ring-[#1C1C1C]/20 outline-none transition-all" />
                  </div>
                  <div>
                    <label className="text-[12px] font-bold text-gray-500 uppercase tracking-wider mb-2 block ml-1">Nom</label>
                    <input type="text" value={editForm.lastName} onChange={(e) => setEditForm({...editForm, lastName: e.target.value})} className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-5 py-4 text-[15px] font-medium text-gray-900 focus:ring-2 focus:ring-[#1C1C1C]/20 outline-none transition-all" />
                  </div>
                  <div>
                    <label className="text-[12px] font-bold text-gray-500 uppercase tracking-wider mb-2 block ml-1">Profession</label>
                    <input type="text" value={editForm.profession} onChange={(e) => setEditForm({...editForm, profession: e.target.value})} className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-5 py-4 text-[15px] font-medium text-gray-900 focus:ring-2 focus:ring-[#1C1C1C]/20 outline-none transition-all" />
                  </div>
                  <div>
                    <label className="text-[12px] font-bold text-gray-500 uppercase tracking-wider mb-2 block ml-1">Localisation</label>
                    <input type="text" value={editForm.location} onChange={(e) => setEditForm({...editForm, location: e.target.value})} className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-5 py-4 text-[15px] font-medium text-gray-900 focus:ring-2 focus:ring-[#1C1C1C]/20 outline-none transition-all" />
                  </div>
                  <div>
                    <label className="text-[12px] font-bold text-gray-500 uppercase tracking-wider mb-2 block ml-1">Site Web</label>
                    <input type="text" value={editForm.website} onChange={(e) => setEditForm({...editForm, website: e.target.value})} className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-5 py-4 text-[15px] font-medium text-gray-900 focus:ring-2 focus:ring-[#1C1C1C]/20 outline-none transition-all" />
                  </div>

                  <div className="pt-4">
                    <button 
                      onClick={() => {
                        setUserProfile({...userProfile, ...editForm});
                        handleEditProfileChange(false);
                      }}
                      className="w-full bg-[#1C1C1C] text-white rounded-full py-4 text-[15px] font-bold flex items-center justify-center gap-2 active:scale-[0.98] transition-transform shadow-sm"
                    >
                      <Save size={18} />
                      Enregistrer les modifications
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      {/* Main Settings View */}
      <AnimatePresence>
        {isSettingsOpen && (
          <MainSettingsView 
            onBack={() => handleSettingsChange(false)} 
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
        {isPrivacyPolicyViewOpen && (
          <PrivacyPolicyView 
            onBack={() => setIsPrivacyPolicyViewOpen(false)} 
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
        {isLanguageViewOpen && (
          <LanguageView 
            onBack={() => setIsLanguageViewOpen(false)} 
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}
