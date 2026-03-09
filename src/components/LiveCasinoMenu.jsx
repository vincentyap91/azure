import React from 'react';
import casinoImage from '../assets/live-casino/casino.png';
import sagamingImage from '../assets/live-casino/sagaming.png';
import playtechImage from '../assets/live-casino/playtech.png';
import sexyGamingImage from '../assets/live-casino/sexy-gaming.png';
import dreamGamingImage from '../assets/live-casino/dream-gaming.png';
import evolutionImage from '../assets/live-casino/evolution.png';
import pragmaticPlayImage from '../assets/live-casino/pragmatic-play.png';
import wmCasinoImage from '../assets/live-casino/wm-casino.png';
import bigGamingImage from '../assets/live-casino/big-gaming.png';
import allbetImage from '../assets/live-casino/allbet.png';
import yeebetLiveImage from '../assets/live-casino/yeebet-live.png';
import worldEntertainmentImage from '../assets/live-casino/world-entertainment.png';
import mtLiveImage from '../assets/live-casino/mt-live.png';

const defaultProviders = [
    { id: 'casino', name: 'W Casino', image: casinoImage, hot: true },
    { id: 'sagaming', name: 'SAGAMING', image: sagamingImage, hot: true },
    { id: 'playtech', name: 'Playtech', image: playtechImage, hot: true },
    { id: 'sexy-gaming', name: 'Sexy Gaming', image: sexyGamingImage, hot: true },
    { id: 'dream-gaming', name: 'DreamGaming', image: dreamGamingImage, hot: true },
    { id: 'evolution', name: 'Evolution Gaming', image: evolutionImage, hot: true },
    { id: 'pragmatic-play', name: 'Pragmatic Play', image: pragmaticPlayImage, hot: true },
    { id: 'wm-casino', name: 'WM Casino', image: wmCasinoImage, hot: false },
    { id: 'big-gaming', name: 'Big Gaming', image: bigGamingImage, hot: false },
    { id: 'allbet', name: 'AllBet', image: allbetImage, hot: false },
    { id: 'yeebet-live', name: 'YB Live', image: yeebetLiveImage, hot: false },
    { id: 'world-entertainment', name: 'World Entertainment', image: worldEntertainmentImage, hot: false },
    { id: 'mt-live', name: 'MT Live', image: mtLiveImage, hot: false }
];

export default function LiveCasinoMenu({ open = true, providers = defaultProviders, onProviderClick }) {
    if (!open) {
        return null;
    }

    return (
        <section className="absolute left-1/2 top-full z-[80] w-screen -translate-x-1/2 border-t border-[#1a3b72]">
            <div className="mx-auto w-full max-w-[1400px] px-4 py-5 md:px-8 md:py-7">
                <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-7">
                    {providers.map((provider) => (
                        <button
                            key={provider.id}
                            type="button"
                            onClick={() => onProviderClick?.(provider)}
                            className="group relative h-[160px] w-[160px] justify-self-center overflow-hidden rounded-2xl border border-white/10 bg-[#0a1c3f] text-left transition duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-[#9ec7ff]/70 hover:shadow-[0_0_0_1px_rgba(120,178,255,0.45),0_14px_24px_rgba(7,19,44,0.75),0_0_24px_rgba(97,156,255,0.35)]"
                        >
                            <img
                                src={provider.image}
                                alt={provider.name}
                                className="absolute inset-0 h-full w-full object-fill transition duration-500 group-hover:scale-105"
                                draggable="false"
                            />

                            {provider.hot && (
                                <span className="absolute right-2 top-2 rounded-full bg-[#ff4d00] px-2 py-0.5 text-xs font-black tracking-[0.06em] text-white shadow-[0_4px_10px_rgba(255,77,0,0.4)]">
                                    HOT
                                </span>
                            )}

                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}
