import React from 'react';
import sexyBaccaratImage from '../assets/live-casino/0c18a14e6167ec42bcf217a4281816aa37029ff4-hn68wwhU.png';
import yeebetLiveImage from '../assets/live-casino/11b3a08ee3b214daab6882a4382a2db797b54ae5-CmmdDJHQ.png';
import gameplayInteractiveImage from '../assets/live-casino/1b526547f23589a0effd96c6158392e2d6fb3935-CJWQcfSu.png';
import afb777Image from '../assets/live-casino/8b952f4f8efc7ab9452d911891a11049cf045587-B7NtWx9i.png';
import wCasinoImage from '../assets/live-casino/809fa51dd86ce47eaf28b331fe1d6bbd63e199cd-qJzlSpbk.png';
import afbSexyCasinoImage from '../assets/live-casino/afb_casino-202603031128335784.png';
import bigGamingImage from '../assets/live-casino/cb906b3bf03cc6acfcb7ea2ab7374623421bb8cc-CBcBnR99.png';
import dreamGamingImage from '../assets/live-casino/dream gaming_casino-202603051120541084.png';
import allbetImage from '../assets/live-casino/e7bffee978d2e07b7503abbca2bba3aa68d0f266-CyMbS0oy.png';
import veryGoodImage from '../assets/live-casino/e4f88b3752ff1601da28db10545c860015afa477-DKaq8d8M.png';
import saGamingImage from '../assets/live-casino/f63292375b3d6510a02ecd0751e8fefb6c545a34-ClN-a0_K.png';
import ct855Image from '../assets/live-casino/f63800b44ca9b6f3d38f0aac7dfd1f2ec040af43-CtCycX3u.png';
import pragmaticPlayImage from '../assets/live-casino/d962173d340d1f347cd214f08272d88852cf6e32-D12hrNcd.png';

const defaultProviders = [
    { id: 'sexy-gaming', name: 'Sexy Baccarat', image: sexyBaccaratImage, hot: true },
    { id: 'yeebet-live', name: 'YB Live', image: yeebetLiveImage, hot: true },
    { id: 'big-gaming', name: 'Big Gaming', image: bigGamingImage, hot: true },
    { id: 'playtech', name: 'AFB777', image: afb777Image, hot: true },
    { id: 'dream-gaming', name: 'DreamGaming', image: dreamGamingImage, hot: true },
    { id: 'pragmatic-play', name: 'Pragmatic Play', image: pragmaticPlayImage, hot: true },
    { id: 'sagaming', name: 'SA Gaming', image: saGamingImage, hot: true },
    { id: 'evolution', name: 'CT855', image: ct855Image, hot: false },
    { id: 'allbet', name: 'AllBet', image: allbetImage, hot: false },
    { id: 'wm-casino', name: 'AFB Sexy Casino', image: afbSexyCasinoImage, hot: false },
    { id: 'world-entertainment', name: 'Gameplay Interactive', image: gameplayInteractiveImage, hot: false },
    { id: 'casino', name: 'W Casino', image: wCasinoImage, hot: false },
    { id: 'mt-live', name: 'Very Good', image: veryGoodImage, hot: false }
];

export default function LiveCasinoMenu({ open = true, providers = defaultProviders, onProviderClick }) {
    if (!open) {
        return null;
    }

    return (
        <section className="absolute left-1/2 top-full z-[80] w-screen -translate-x-1/2 border-t border-[rgb(26_59_114)]">
            <div className="mx-auto w-full max-w-[1400px] px-4 py-5 md:px-8 md:py-7">
                <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-7">
                    {providers.map((provider) => (
                        <button
                            key={provider.id}
                            type="button"
                            onClick={() => onProviderClick?.(provider)}
                            className="group relative h-[160px] w-[160px] justify-self-center overflow-hidden rounded-2xl border border-white/10 bg-[rgb(10_28_63)] text-left transition duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-[rgb(158_199_255_/_0.7)] hover:shadow-[0_0_0_1px_rgba(120,178,255,0.45),0_14px_24px_rgba(7,19,44,0.75),0_0_24px_rgba(97,156,255,0.35)]"
                        >
                            <img
                                src={provider.image}
                                alt={provider.name}
                                className="absolute inset-0 h-full w-full object-fill transition duration-500 group-hover:scale-105"
                                draggable="false"
                            />

                            {provider.hot && (
                                <span className="absolute right-2 top-2 rounded-full bg-[var(--color-hot-main)] px-2 py-0.5 text-xs font-black tracking-[0.06em] text-white shadow-[0_4px_10px_rgba(255,77,0,0.4)]">
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
