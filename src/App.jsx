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
import Footer from './components/Footer';
import FloatingSocials from './components/FloatingSocials';
import './index.css';

function resolvePageFromHash() {
  const hash = window.location.hash.toLowerCase();
  return hash === '#casino' || hash === '#live-casino' ? 'live-casino' : 'home';
}

function App() {
  const [page, setPage] = useState(resolvePageFromHash);

  useEffect(() => {
    const onHashChange = () => setPage(resolvePageFromHash());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const handleNavigate = (targetPage) => {
    const nextHash = targetPage === 'live-casino' ? '#casino' : '#home';
    setPage(targetPage);

    if (window.location.hash !== nextHash) {
      window.location.hash = nextHash;
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`w-full min-h-screen font-sans overflow-x-hidden relative ${page === 'home' ? 'bg-[#e6f4fd]' : 'bg-[#f2f4f8]'}`}>
      {page === 'home' && <FloatingSocials />}

      {/* Navbar sits at the standard document flow but controls its own absolute positioning if needed */}
      <Navbar onNavigate={handleNavigate} activePage={page} />

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
      ) : (
        <LiveCasinoPage />
      )}

      <Footer />
    </div>
  );
}

export default App;
