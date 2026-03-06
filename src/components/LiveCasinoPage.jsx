import React, { useMemo, useState } from 'react';
import { Monitor, Search, ShieldCheck, Zap } from 'lucide-react';
import liveCasinoBanner from '../assets/live-casino.jpg';
import wcasinoLogo from '../assets/wcasino-2x-min-202505280008599013-202506250016539240.png';
import sagamingLogo from '../assets/sagaming2025_wh-202510270604321830.png';
import playtechLogo from '../assets/playtech-202505140443475046-202506242335087315.svg';
import sexygamingLogo from '../assets/sexygaming-202505140447445395-202506240659312869.svg';
import dreamgamingLogo from '../assets/dreamgaming-min-202506201545375005-202506250034043371.png';
import evolutionLogo from '../assets/evolution-202505140444284259-202506242322200281.svg';
import pragmaticLiveLogo from '../assets/pp-live-casino-202505140447187176-202506240700358930.svg';
import wmcasinoLogo from '../assets/wmcasino-202505140442522647-202506242346230340.svg';
import biggamingLogo from '../assets/biggaming-min-202506201446479379-202506250032270399.png';
import allbetLogo from '../assets/allbet-1-202505132310053829-202506250015492361.svg';
import yeebetLogo from '../assets/yeebet-min-202506201536311077-202506250033163315.png';
import wecasinoLogo from '../assets/worldent-min-202507141449569526-202507170806057662.png';
import mtLogo from '../assets/download-202506250034489694.png';

const providerLogos = [
    { name: 'W Casino', src: wcasinoLogo, categories: ['Baccarat', 'Game Shows'], featured: true },
    { name: 'SA Gaming', src: sagamingLogo, categories: ['Baccarat', 'Dragon Tiger'], featured: true },
    { name: 'Playtech LiveCasino', src: playtechLogo, categories: ['Roulette', 'Blackjack'], featured: true },
    { name: 'Sexy Gaming', src: sexygamingLogo, categories: ['Baccarat', 'Blackjack'], featured: true },
    { name: 'DreamGaming', src: dreamgamingLogo, categories: ['Baccarat', 'Roulette'], featured: true },
    { name: 'Evolution Gaming', src: evolutionLogo, categories: ['Roulette', 'Game Shows'], featured: true },
    { name: 'Pragmatic Play Live Casino', src: pragmaticLiveLogo, categories: ['Game Shows', 'Roulette'], featured: true },
    { name: 'WM Casino', src: wmcasinoLogo, categories: ['Baccarat'], featured: false },
    { name: 'Big Gaming', src: biggamingLogo, categories: ['Game Shows'], featured: false },
    { name: 'AllBet', src: allbetLogo, categories: ['Blackjack', 'Baccarat'], featured: false },
    { name: 'YeeBet', src: yeebetLogo, categories: ['Baccarat'], featured: false },
    { name: 'WECasino', src: wecasinoLogo, categories: ['Game Shows'], featured: false },
    { name: 'MT', src: mtLogo, categories: ['Dragon Tiger'], featured: false }
];

const quickStats = [
    { value: '350+', label: 'Live Tables', icon: Monitor },
    { value: '24/7', label: 'Real Dealers', icon: ShieldCheck },
    { value: '1s', label: 'Instant Bet Sync', icon: Zap }
];

const providerTags = ['All', 'Trending', 'Baccarat', 'Roulette', 'Dragon Tiger', 'Blackjack', 'Game Shows'];

export default function LiveCasinoPage() {
    const [activeTag, setActiveTag] = useState('All');
    const [query, setQuery] = useState('');

    const filteredProviders = useMemo(() => {
        const text = query.trim().toLowerCase();

        return providerLogos.filter((provider) => {
            const tagMatch =
                activeTag === 'All'
                    ? true
                    : activeTag === 'Trending'
                        ? provider.featured
                        : provider.categories.includes(activeTag);
            const textMatch = text ? provider.name.toLowerCase().includes(text) : true;
            return tagMatch && textMatch;
        });
    }, [activeTag, query]);

    return (
        <main
            className="w-full pb-14 bg-[linear-gradient(180deg,#eaf0ff_0%,#f6f9ff_36%,#ecf1f9_100%)]"
            style={{ fontFamily: 'Bahnschrift, "Trebuchet MS", Verdana, sans-serif' }}
        >
            <section className="w-full border-y border-[#dbe2f0] bg-white/85 backdrop-blur">
                <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8 h-12 flex items-center justify-between">
                    <div className="text-[11px] font-semibold tracking-[0.16em] text-[#667086] uppercase">
                        Premium Live Casino Lounge
                    </div>
                    <div className="hidden sm:flex items-center gap-3 text-[12px] text-[#53607a] font-semibold">
                        <span>High Definition Stream</span>
                        <span className="w-1 h-1 rounded-full bg-[#99a6be]"></span>
                        <span>Fast Payout</span>
                    </div>
                </div>
            </section>

            <section className="w-full pt-4 md:pt-7">
                <div className="w-full max-w-[1400px] mx-auto px-0 md:px-8">
                    <div className="relative overflow-hidden md:rounded-[30px] border border-[#d5deef] shadow-[0_14px_34px_rgba(16,32,72,0.16)]">
                        <img
                            src={liveCasinoBanner}
                            alt="Live Casino Banner"
                            className="w-full h-auto block bg-[#dde8f8]"
                        />
                    </div>
                </div>
            </section>

            <section className="w-full max-w-[1400px] mx-auto px-4 md:px-8 mt-4">
                <div className="grid grid-cols-3 gap-2 md:gap-3">
                    {quickStats.map((stat) => {
                        const Icon = stat.icon;
                        return (
                            <article
                                key={stat.label}
                                className="rounded-xl md:rounded-2xl border border-[#d8e1f2] bg-[linear-gradient(180deg,#ffffff_0%,#f4f8ff_100%)] px-2 py-2 md:px-4 md:py-3 text-[#23314d] shadow-[0_8px_18px_rgba(4,16,44,0.09)]"
                            >
                                <div className="flex items-center gap-2">
                                    <Icon size={14} className="md:w-[18px] md:h-[18px] text-[#3560aa]" />
                                    <p className="text-[16px] md:text-[26px] font-extrabold leading-none">{stat.value}</p>
                                </div>
                                <p className="text-[10px] md:text-[12px] tracking-[0.08em] uppercase mt-1 opacity-90">{stat.label}</p>
                            </article>
                        );
                    })}
                </div>
            </section>

            <section className="w-full max-w-[1400px] mx-auto px-4 md:px-8 mt-4 md:mt-6">
                <div className="rounded-2xl border border-[#dbe4f3] bg-white/80 backdrop-blur-sm shadow-[0_6px_18px_rgba(20,43,87,0.09)] p-4 md:p-5">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                        <div>
                            <p className="text-[#1c2841] text-[20px] md:text-[28px] font-extrabold tracking-[0.02em]">Live Casino Providers</p>
                            <p className="text-[#5d6780] text-[12px] md:text-[14px] mt-1">
                                Choose from top brands with real-time action and studio-grade stream quality.
                            </p>
                        </div>
                        <label className="w-full lg:w-[330px] h-11 rounded-xl border border-[#d5deef] bg-white px-3 flex items-center gap-2 shadow-[inset_0_1px_2px_rgba(9,30,66,0.06)]">
                            <Search size={16} className="text-[#5f6e8b]" />
                            <input
                                value={query}
                                onChange={(event) => setQuery(event.target.value)}
                                placeholder="Search provider"
                                className="w-full bg-transparent outline-none text-[13px] text-[#2a3a58] placeholder:text-[#8b97ae] font-semibold"
                            />
                        </label>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-4">
                        {providerTags.map((tag) => {
                            const selected = activeTag === tag;
                            return (
                                <button
                                    key={tag}
                                    type="button"
                                    onClick={() => setActiveTag(tag)}
                                    className={`px-3 py-1.5 rounded-full text-[11px] md:text-[12px] font-bold tracking-wide border transition ${
                                        selected
                                            ? 'bg-[linear-gradient(180deg,#ffd86f_0%,#ffb038_100%)] text-[#2d1a00] border-[#ffbf53] shadow-[0_5px_10px_rgba(255,176,56,0.2)]'
                                            : 'bg-white text-[#405172] border-[#d7e0ef] hover:border-[#b8c6e2] hover:text-[#22335a]'
                                    }`}
                                >
                                    {tag}
                                </button>
                            );
                        })}
                    </div>

                    <p className="mt-3 text-[11px] md:text-[12px] font-bold tracking-[0.08em] text-[#6a7590] uppercase">
                        {filteredProviders.length} provider{filteredProviders.length === 1 ? '' : 's'} found
                    </p>
                </div>
            </section>

            <section className="w-full max-w-[1400px] mx-auto px-4 md:px-8 mt-5 md:mt-6">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
                    {filteredProviders.map((provider, index) => (
                        <article
                            key={provider.name}
                            className={`group relative h-[86px] md:h-[104px] rounded-3xl border bg-[#f2f3f5] shadow-[0_8px_16px_rgba(18,34,66,0.08)] flex items-center justify-center px-3 transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_24px_rgba(14,35,79,0.18)] ${
                                provider.name === 'SA Gaming'
                                    ? 'border-[#2f68ff] ring-1 ring-[#2f68ff]/30'
                                    : 'border-[#d1d8e5] hover:border-[#b7c2d7]'
                            }`}
                        >
                            {provider.featured && (
                                <span className="absolute right-2 top-2 rounded-full bg-[#ff4d00] text-white text-[9px] md:text-[10px] font-black px-2.5 py-0.5 tracking-wide shadow-[0_4px_8px_rgba(255,77,0,0.35)]">
                                    HOT
                                </span>
                            )}
                            <div className="w-full h-full flex items-center justify-center pt-1">
                                <img
                                    src={provider.src}
                                    alt={provider.name}
                                    loading={index < 12 ? 'eager' : 'lazy'}
                                    className="max-w-full max-h-[34px] md:max-h-[50px] object-contain saturate-110 contrast-110 group-hover:scale-105 transition duration-300"
                                />
                            </div>
                        </article>
                    ))}
                </div>
                {filteredProviders.length === 0 && (
                    <div className="mt-6 rounded-2xl border border-[#dce4f2] bg-white px-4 py-7 text-center">
                        <p className="text-[#2b3a57] font-extrabold text-[16px]">No providers match your search.</p>
                        <p className="text-[#6a7590] text-[12px] mt-1">Try a different keyword or switch filter.</p>
                    </div>
                )}
            </section>
        </main>
    );
}
