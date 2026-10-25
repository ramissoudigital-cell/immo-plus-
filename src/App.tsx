import { propertiesData } from "./data";
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Plus } from 'lucide-react';
import { Capacitor } from '@capacitor/core';
import { StatusBar, Style } from '@capacitor/status-bar';
import HomeView from './components/HomeView';
import DetailView from './components/DetailView';
import SearchView from './components/SearchView';
import ExploreView from './components/ExploreView';
import MessagesView from './components/MessagesView';
import ChatRoomView from './components/ChatRoomView';
import ProfileView from './components/ProfileView';
import FavoritesView from './components/FavoritesView';
import BottomNavigation from './components/BottomNavigation';
import WelcomeView from './components/WelcomeView';
import AuthView from './components/AuthView';
import AddPropertyView from './components/AddPropertyView';

export default function App() {
  useEffect(() => {
    const initStatusBar = async () => {
      if (Capacitor.isNativePlatform()) {
        try {
          await StatusBar.setOverlaysWebView({ overlay: true });
          // Optionally set the style (Dark means dark text/icons)
          await StatusBar.setStyle({ style: Style.Dark });
        } catch (error) {
          console.error('Error setting status bar:', error);
        }
      }
    };
    initStatusBar();
  }, []);

  const [showWelcome, setShowWelcome] = useState<boolean>(true);
  const [showAuth, setShowAuth] = useState<boolean>(false);
  const [showAddProperty, setShowAddProperty] = useState<boolean>(false);
  const [userRole, setUserRole] = useState<'client' | 'demarcheur' | 'proprietaire' | 'agence' | 'juriste' | 'admin' | null>(null);
  const [selectedPlace, setSelectedPlace] = useState<string | null>(null);
  const [selectedChatId, setSelectedChatId] = useState<string | null>(null);
  const [searchActive, setSearchActive] = useState<boolean>(false);
  const [exploreActive, setExploreActive] = useState<boolean>(false);
  const [messagesActive, setMessagesActive] = useState<boolean>(false);
  const [profileActive, setProfileActive] = useState<boolean>(false);
  const [favoritesActive, setFavoritesActive] = useState<boolean>(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState<boolean>(false);
  const [favoriteIds, setFavoriteIds] = useState<string[]>(['1']);
  const [properties, setProperties] = useState(propertiesData);

  const toggleFavorite = (id: string) => {
    setFavoriteIds(prev => 
      prev.includes(id) ? prev.filter(fId => fId !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-[#E5E5E5] sm:py-8 flex justify-center items-center font-sans">
      {/* Mobile Device Simulator Container */}
      <div className="w-full h-screen sm:h-[852px] sm:max-w-[393px] bg-[#F7F7F9] sm:rounded-[40px] shadow-2xl relative overflow-hidden flex flex-col">
        
        {/* Scrollable Content */}
        <HomeView 
          userRole={userRole}
          onSearchClick={() => setSearchActive(true)}
          onPlaceClick={(id) => setSelectedPlace(id)}
          onProfileClick={() => {
            setProfileActive(true);
            setExploreActive(false);
            setMessagesActive(false);
            setFavoritesActive(false);
          }}
          favoriteIds={favoriteIds}
          onToggleFavorite={toggleFavorite}
        />

        {/* Add Property FAB */}
        <AnimatePresence>
          {(userRole === 'demarcheur' || userRole === 'proprietaire' || userRole === 'agence') && !exploreActive && !messagesActive && !profileActive && !favoritesActive && !searchActive && !selectedPlace && !showWelcome && !showAuth && !showAddProperty && (
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              onClick={() => setShowAddProperty(true)}
              className="absolute bottom-28 right-6 w-14 h-14 bg-[#1C1C1C] text-white rounded-full flex items-center justify-center shadow-lg shadow-black/20 z-30 active:scale-95 transition-transform"
            >
              <Plus size={24} strokeWidth={2.5} />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Bottom Navigation */}
        <motion.div
          animate={{ y: isProfileMenuOpen ? 100 : 0, opacity: isProfileMenuOpen ? 0 : 1 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="absolute bottom-0 left-0 right-0 z-40"
        >
          <BottomNavigation 
            activeTab={exploreActive ? 'explore' : messagesActive ? 'messages' : profileActive ? 'profile' : favoritesActive ? 'favorites' : 'home'}
            onHomeClick={() => {
              setExploreActive(false);
              setMessagesActive(false);
              setProfileActive(false);
              setFavoritesActive(false);
            }}
            onExploreClick={() => {
              setExploreActive(true);
              setMessagesActive(false);
              setProfileActive(false);
              setFavoritesActive(false);
            }} 
            onMessagesClick={() => {
              setMessagesActive(true);
              setExploreActive(false);
              setProfileActive(false);
              setFavoritesActive(false);
            }}
            onProfileClick={() => {
              setProfileActive(true);
              setExploreActive(false);
              setMessagesActive(false);
              setFavoritesActive(false);
            }}
            onFavoritesClick={() => {
              setFavoritesActive(true);
              setExploreActive(false);
              setMessagesActive(false);
              setProfileActive(false);
            }}
          />
        </motion.div>

        {/* iOS Home Indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[130px] h-[5px] bg-[#4A4A4C] rounded-full z-50"></div>

        {/* Profile View Overlay */}
        <AnimatePresence>
          {profileActive && (
            <ProfileView 
              role={userRole}
              onClose={() => {
                setProfileActive(false);
                setIsProfileMenuOpen(false); // Reset when closed
              }}
              onMenuOpenChange={setIsProfileMenuOpen}
            />
          )}
        </AnimatePresence>

        {/* Favorites View Overlay */}
        <AnimatePresence>
          {favoritesActive && (
            <FavoritesView properties={properties} 
              onClose={() => setFavoritesActive(false)} 
              favoriteIds={favoriteIds}
              onToggleFavorite={toggleFavorite}
              onPlaceClick={(id) => setSelectedPlace(id)}
            />
          )}
        </AnimatePresence>

        {/* Explore View Overlay */}
        <AnimatePresence>
          {exploreActive && (
            <ExploreView properties={properties} 
              onClose={() => setExploreActive(false)} 
              onPlaceClick={(id) => setSelectedPlace(id)}
              favoriteIds={favoriteIds}
              onToggleFavorite={toggleFavorite}
            />
          )}
        </AnimatePresence>

        {/* Messages View Overlay */}
        <AnimatePresence>
          {messagesActive && (
            <MessagesView onClose={() => setMessagesActive(false)} onChatClick={(id) => setSelectedChatId(id)} />
          )}
        </AnimatePresence>

        {/* Chat Room Overlay */}
        <AnimatePresence>
          {selectedChatId && (
            <ChatRoomView chatId={selectedChatId} onClose={() => setSelectedChatId(null)} />
          )}
        </AnimatePresence>

        {/* Detail View Overlay */}
        <AnimatePresence>
          {selectedPlace && (
            <DetailView properties={properties} 
              propertyId={selectedPlace} 
              onClose={() => setSelectedPlace(null)} 
              favoriteIds={favoriteIds}
              onToggleFavorite={toggleFavorite}
              onMessageClick={() => setSelectedChatId('host')}
            />
          )}
        </AnimatePresence>

        {/* Search View Overlay */}
        <AnimatePresence>
          {searchActive && (
            <SearchView 
              onClose={() => setSearchActive(false)} 
              onPlaceClick={(id) => setSelectedPlace(id)}
              favoriteIds={favoriteIds}
              onToggleFavorite={toggleFavorite}
            />
          )}
        </AnimatePresence>

        {/* Welcome View Overlay */}
        <AnimatePresence>
          {showWelcome && (
            <WelcomeView 
              onSelectRole={(role) => {
                setUserRole(role);
                setShowWelcome(false);
                setShowAuth(true);
              }} 
            />
          )}
        </AnimatePresence>

        {/* Auth View Overlay */}
        <AnimatePresence>
          {showAuth && (
            <AuthView 
              role={userRole}
              onComplete={() => setShowAuth(false)} 
            />
          )}
        </AnimatePresence>

        {/* Add Property View Overlay */}
        <AnimatePresence>
          {showAddProperty && (
            <AddPropertyView onClose={() => setShowAddProperty(false)} onAddProperty={(newProp) => setProperties(prev => [newProp, ...prev])} />
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
