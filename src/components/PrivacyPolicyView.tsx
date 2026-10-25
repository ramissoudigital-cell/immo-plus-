import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Shield, Lock, Eye, FileText, Database, TrendingUp, Users, Mail, ChevronRight, CheckCircle, ChevronLeft } from 'lucide-react';
import IOSStatusBar from './IOSStatusBar';

const sections = [
  {
    id: 'introduction',
    icon: Shield,
    title: '1. Introduction',
    content: 'Immo-Plus est une plateforme de réservation et de mise en relation entre clients et démarcheurs immobiliers. Cette politique explique comment nous collectons, utilisons et protégeons vos informations.'
  },
  {
    id: 'app-type',
    icon: TrendingUp,
    title: '2. Type d\'Application',
    content: 'Immo-Plus est une application de réservation immobilière. Elle facilite la publication d\'annonces par les démarcheurs et la recherche de biens immobiliers par les clients.',
    highlight: true
  },
  {
    id: 'data-collected',
    icon: Database,
    title: '3. Données Collectées',
    content: 'Nous pouvons collecter les données suivantes :',
    list: [
      'Informations de profil (nom, email, téléphone, rôle)',
      'Préférences de l\'application (favoris, alertes)',
      'Données de localisation (pour la carte et les biens à proximité)',
      'Historique des réservations et transactions'
    ]
  },
  {
    id: 'data-usage',
    icon: Eye,
    title: '4. Utilisation des Données',
    content: 'Les données collectées sont utilisées pour :',
    list: [
      'Fournir les fonctionnalités de base de l\'application',
      'Personnaliser votre expérience (recommandations de biens immobiliers)',
      'Améliorer nos services et la sécurité',
      'Faciliter la communication entre clients et démarcheurs'
    ]
  },
  {
    id: 'security',
    icon: Lock,
    title: '5. Sécurité',
    content: 'Mesures de sécurité mises en place :',
    list: [
      'Vos données personnelles sont stockées sur des serveurs sécurisés',
      'Les communications sont chiffrées de bout en bout',
      'L\'accès biométrique ou par mot de passe reste confidentiel'
    ]
  },
  {
    id: 'data-sharing',
    icon: Users,
    title: '6. Partage des Données',
    content: 'Nous ne vendons ni ne partageons vos données personnelles à des tiers à des fins de marketing sans votre consentement explicite.'
  },
  {
    id: 'your-rights',
    icon: FileText,
    title: '7. Vos Droits',
    content: 'En tant qu\'utilisateur d\'Immo-Plus, vous avez les droits suivants :',
    list: [
      'Accéder à vos données',
      'Mettre à jour vos informations',
      'Supprimer votre compte et vos données',
      'Gérer vos préférences de notification'
    ]
  },
  {
    id: 'contact',
    icon: Mail,
    title: '8. Contact',
    content: 'Pour toute question concernant cette politique, n\'hésitez pas à nous contacter :',
    contact: 'contact@immo-plus.com'
  }
];

interface PrivacyPolicyViewProps {
  onBack: () => void;
}

export const PrivacyPolicyView: React.FC<PrivacyPolicyViewProps> = ({ onBack }) => {
  const [lastUpdated, setLastUpdated] = useState('');
  const [activeSection, setActiveSection] = useState('introduction');

  useEffect(() => {
    setLastUpdated(
      new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })
    );

    const handleScroll = () => {
      const scrollContainer = document.getElementById('privacy-scroll-area');
      if (!scrollContainer) return;

      const sectionElements = sections.map(s => document.getElementById(s.id));
      let currentActive = sections[0].id;
      
      for (const el of sectionElements) {
        if (el && scrollContainer.scrollTop >= el.offsetTop - 250) {
          currentActive = el.id;
        }
      }
      setActiveSection(currentActive);
    };

    const scrollContainer = document.getElementById('privacy-scroll-area');
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
    }
    
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    const scrollContainer = document.getElementById('privacy-scroll-area');
    if (el && scrollContainer) {
      scrollContainer.scrollTo({
        top: el.offsetTop - 120,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.div 
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: 'spring', damping: 28, stiffness: 220 }}
      className="absolute inset-0 z-[110] h-full bg-[#F7F7F9] overflow-hidden flex flex-col"
    >
      <IOSStatusBar theme="dark" />
      
      {/* Header (Fixed) */}
      <div className="pt-16 pb-4 px-6 flex items-center justify-between shrink-0 bg-[#F7F7F9] z-20">
        <button 
          onClick={onBack}
          className="w-10 h-10 flex items-center justify-center -ml-2 active:scale-95 transition-transform z-10"
        >
          <ChevronLeft className="w-6 h-6 text-[#1C1C1C]" strokeWidth={2} />
        </button>
        <h1 className="text-[17px] font-bold text-[#1C1C1C] tracking-tight absolute left-0 right-0 text-center truncate px-12">Confidentialité</h1>
        <div className="w-10 z-10"></div>
      </div>

      {/* Scrollable Content Area */}
      <div id="privacy-scroll-area" className="flex-1 overflow-y-auto hide-scrollbar px-5 pb-24">
        
        <main className="w-full max-w-[1200px] mx-auto">
          {/* Main Title Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 mt-4 text-center"
          >
            <div className="inline-flex items-center gap-2 bg-white border border-[#EBEBEB] shadow-sm rounded-full px-4 py-1.5 mb-6">
              <Shield className="w-4 h-4 text-[#1C1C1C]" />
              <span className="text-[11px] font-bold text-[#1C1C1C] tracking-widest uppercase">Légal & Confidentialité</span>
            </div>

            <h1 className="text-[28px] font-bold mb-4 tracking-tight text-[#1C1C1C] leading-tight">
              Politique de<br/>Confidentialité
            </h1>
            
            <p className="text-[15px] text-[#8E8E93] max-w-2xl font-medium mx-auto">
              Nous nous engageons à protéger votre vie privée et à sécuriser vos données. 
              Dernière mise à jour le <span className="text-[#1C1C1C] font-bold">{lastUpdated || '—'}</span>.
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 relative">
            
            {/* Left Sidebar - Table of Contents (Hidden on mobile) */}
            <div className="hidden lg:block w-64 shrink-0">
              <div className="sticky top-8 bg-white border border-[#EBEBEB] shadow-[0_2px_16px_rgba(0,0,0,0.04)] rounded-[24px] p-4">
                <h4 className="text-[11px] font-bold text-[#8E8E93] uppercase tracking-widest mb-4 px-3">
                  Sommaire
                </h4>
                <div className="flex flex-col space-y-1">
                  {sections.map((section) => {
                    const isActive = activeSection === section.id;
                    return (
                      <button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className={`text-left px-3 py-2.5 rounded-xl text-[13px] font-bold transition-all duration-300 flex items-center gap-2 ${
                          isActive 
                            ? 'bg-[#F5F5F5] text-[#1C1C1C]' 
                            : 'text-[#8E8E93] hover:text-[#1C1C1C] hover:bg-[#F5F5F5]'
                        }`}
                      >
                        {isActive && <motion.div layoutId="activeIndicator" className="w-1.5 h-4 bg-[#1C1C1C] rounded-full" />}
                        {!isActive && <div className="w-1.5 h-4 bg-transparent" />}
                        {section.title.split('. ')[1]}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="flex-1 max-w-3xl">
              <div className="space-y-6">
                {sections.map((section, index) => {
                  const Icon = section.icon;
                  return (
                    <motion.section
                      id={section.id}
                      key={section.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.5 }}
                      className="scroll-mt-32 bg-white border border-[#EBEBEB] shadow-[0_2px_16px_rgba(0,0,0,0.04)] rounded-[24px] p-6"
                    >
                      <div className="flex items-center gap-4 mb-5">
                        <div className="w-12 h-12 rounded-[16px] bg-[#F5F5F5] flex items-center justify-center shrink-0">
                          <Icon className="w-6 h-6 text-[#1C1C1C]" />
                        </div>
                        <h2 className="text-[18px] font-bold text-[#1C1C1C] tracking-tight">
                          {section.title}
                        </h2>
                      </div>
                      
                      <div className="prose prose-slate max-w-none">
                        <p className={`text-[15px] leading-relaxed ${section.highlight ? 'text-[#1C1C1C] font-bold' : 'text-[#4A4A4C] font-medium'}`}>
                          {section.content}
                        </p>

                        {section.list && (
                          <ul className="mt-5 space-y-3 pl-2">
                            {section.list.map((item, i) => (
                              <li key={i} className="flex items-start gap-3 text-[#4A4A4C] text-[15px] font-medium">
                                <div className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-[#1C1C1C]" />
                                <span className="leading-relaxed">{item}</span>
                              </li>
                            ))}
                          </ul>
                        )}

                        {section.contact && (
                          <div className="mt-6 p-5 rounded-[16px] bg-[#F7F7F9] border border-[#EBEBEB]">
                            <p className="text-[14px] font-bold text-[#8E8E93] mb-2">Contactez-nous :</p>
                            <a
                              href={`mailto:${section.contact}`}
                              className="text-[#1C1C1C] hover:opacity-70 font-bold transition-opacity inline-flex items-center gap-2 group text-[15px]"
                            >
                              {section.contact}
                              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                          </div>
                        )}
                      </div>
                    </motion.section>
                  );
                })}

                {/* Info Banner Appended */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mt-8 p-6 rounded-[24px] bg-[#1C1C1C] relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-8 opacity-[0.03]">
                    <CheckCircle className="w-48 h-48 text-white" />
                  </div>
                  
                  <div className="relative z-10 w-full">
                    <div className="inline-flex items-center gap-2 mb-4">
                      <div className="w-2 h-2 rounded-full bg-[#25C834]" />
                      <span className="text-[11px] font-bold tracking-widest text-[#25C834] uppercase">Information</span>
                    </div>
                    
                    <h3 className="text-[20px] font-bold text-white mb-3 tracking-tight">
                      Votre Confiance Avant Tout
                    </h3>
                    
                    <p className="text-white/80 font-medium text-[15px] leading-relaxed mb-6">
                      Immo-Plus a été conçu pour offrir un environnement sûr et transparent. Nous ne vendrons jamais vos données personnelles et mettons tout en oeuvre pour vous garantir une expérience professionnelle de haute qualité.
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {['Sécurisé', 'Transparent', 'Professionnel'].map((tag, i) => (
                        <div key={i} className="px-3 py-1.5 rounded-full bg-white/10 text-[13px] font-bold text-white tracking-tight">
                          {tag}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>

              </div>
            </div>
            
          </div>
        </main>
      </div>
    </motion.div>
  );
}
