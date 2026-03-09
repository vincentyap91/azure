import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesRow from './components/FeaturesRow';
import PlayersPromo from './components/PlayersPromo';
import GameCategories from './components/GameCategories';
import TopGames from './components/TopGames';
import VipTier from './components/VipTier';
import AppDownload from './components/AppDownload';
import Promos from './components/Promos';
import LiveCasinoPage from './components/LiveCasinoPage';
import RegisterPage from './components/RegisterPage';
import Footer from './components/Footer';
import FloatingSocials from './components/FloatingSocials';
import LoginModal from './components/LoginModal';
import './index.css';

function resolvePageFromPath() {
  const pathname = window.location.pathname.toLowerCase();
  if (pathname === '/casino' || pathname === '/live-casino') {
    return 'live-casino';
  }
  if (pathname === '/register') {
    return 'register';
  }
  return 'home';
}

function App() {
  const [page, setPage] = useState(resolvePageFromPath);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const onPopState = () => setPage(resolvePageFromPath());
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const handleNavigate = (targetPage) => {
    const pathByPage = {
      home: '/',
      'live-casino': '/casino',
      register: '/register',
    };
    const nextPath = pathByPage[targetPage] ?? '/';
    setPage(targetPage);

    if (window.location.pathname !== nextPath) {
      window.history.pushState({}, '', nextPath);
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`w-full min-h-screen font-sans overflow-x-hidden relative ${page === 'home' ? 'bg-[#e6f4fd]' : page === 'register' ? 'bg-[#edf4ff]' : 'bg-[#f2f4f8]'}`}>
      {page === 'home' && <FloatingSocials />}

      {/* Navbar sits at the standard document flow but controls its own absolute positioning if needed */}
      <Navbar
        onNavigate={handleNavigate}
        activePage={page}
        onLoginClick={() => setLoginModalOpen(true)}
        onRegisterClick={() => handleNavigate('register')}
        authUser={authUser}
        onLogout={() => setAuthUser(null)}
      />

      {page === 'home' ? (
        <>
          {/* Hero sits just underneath */}
          <HeroSection />

          {/* Main Content Area */}
          <div className="w-full max-w-[1200px] mx-auto px-4 md:px-8 flex flex-col gap-8 pb-10">
            <FeaturesRow />
            <PlayersPromo />
            <GameCategories />
            <TopGames />
            <VipTier />
            <AppDownload />
            <Promos />
          </div>
        </>
      ) : page === 'live-casino' ? (
        <LiveCasinoPage />
      ) : (
        <RegisterPage onLoginClick={() => setLoginModalOpen(true)} />
      )}

      <Footer />

      <LoginModal
        open={loginModalOpen}
        onClose={() => setLoginModalOpen(false)}
        logoText="LOGO"
        onLogin={(username) => {
          setAuthUser({
            name: username || 'vincentzo',
            balance: 'MYR 0.00',
            notifications: 1,
          });
          setLoginModalOpen(false);
        }}
        onRegisterClick={() => {
          setLoginModalOpen(false);
          handleNavigate('register');
        }}
      />
    </div>
  );
}

export default App;
