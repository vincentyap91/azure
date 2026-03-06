import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function Navbar({ onNavigate, activePage = 'home' }) {
    const mainLinks = [
        'Home', 'Casino', 'Slots', 'Sports', 'E-Sports', 'Lottery',
        'Fishing', 'Poker', '3D Games', 'Cockfight', '4D', 'Fast Games',
        'Promotion', 'VIP', 'More'
    ];
    const navTargets = { Home: 'home', Casino: 'live-casino' };

    return (
        <nav className="w-full relative z-50 shadow-md">
            {/* Top Bar (Dark Blue) */}
            <div className="w-full bg-[#0072BC] h-8 flex justify-between items-center px-4 md:px-10 text-[11px] text-white">
                {/* Left Side Links */}
                <div className="flex gap-4 items-center h-full">
                    <a href="#" className="flex items-center gap-1 hover:text-white/80 h-full px-2 border-r border-[#00AEEF]">
                        <span className="text-sm">📱</span> Mobile
                    </a>
                    <a href="#" className="flex items-center gap-1 hover:text-white/80 h-full">
                        <span className="text-sm">👥</span> Affiliate
                    </a>
                </div>

                {/* Right Side Buttons */}
                <div className="flex items-center gap-2 h-full py-1">
                    <button className="h-full px-6 rounded border border-white/50 hover:bg-white/10 transition-colors font-semibold">
                        Login
                    </button>
                    <button className="h-full px-6 rounded bg-[#39B54A] shadow-[0_0_8px_rgba(57,181,74,0.6)] hover:bg-[#2e9e3c] transition-colors font-semibold shadow-inner">
                        Join Now
                    </button>
                    <button className="h-full px-2 border border-white/30 rounded flex items-center justify-center opacity-90 mx-1">
                        <span className="text-sm shadow-sm">🇹🇭</span>
                    </button>
                </div>
            </div>

            {/* Main Bar (Cyan) */}
            <div className="w-full bg-[#00AEEF] h-14 flex items-center px-4 md:px-10">
                <div className="w-full max-w-[1400px] mx-auto flex items-center justify-between">
                    {/* LOGO */}
                    <button
                        type="button"
                        onClick={() => onNavigate?.('home')}
                        className="text-3xl font-black text-white/90 drop-shadow-sm tracking-wide mr-8 cursor-pointer hover:opacity-80"
                    >
                        LOGO
                    </button>

                    {/* Navigation Links */}
                    <div className="hidden lg:flex flex-1 justify-center items-center gap-x-[14px]">
                        {mainLinks.map((link, idx) => (
                            <a
                                key={idx}
                                href={link === 'Casino' ? '#casino' : link === 'Home' ? '#home' : '#'}
                                onClick={(event) => {
                                    const target = navTargets[link];
                                    if (target) {
                                        event.preventDefault();
                                        onNavigate?.(target);
                                    }
                                }}
                                className={`text-white text-[12px] font-medium hover:text-yellow-300 transition-colors whitespace-nowrap drop-shadow-sm 
                    ${link === 'More' ? 'flex items-center group' : ''}
                    ${activePage === 'home' && link === 'Home' ? 'text-yellow-300' : ''}
                    ${activePage === 'live-casino' && link === 'Casino' ? 'text-yellow-300' : ''}`}
                            >
                                {link}
                                {link === 'More' && <ChevronDown size={14} className="ml-0.5 group-hover:rotate-180 transition-transform" strokeWidth={3} />}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
}
