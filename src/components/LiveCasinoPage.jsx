import React, { useEffect, useMemo, useRef, useState } from 'react';
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
    const [bannerProvider, setBannerProvider] = useState(
        () => providerLogos.find((provider) => provider.name === 'SA Gaming') ?? providerLogos[0]
    );
    const scrollAnimationFrameRef = useRef(null);
    const scrollDelayTimeoutRef = useRef(null);

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

    const handleSelectProvider = (provider) => {
        setBannerProvider(provider);

        if (scrollAnimationFrameRef.current) {
            cancelAnimationFrame(scrollAnimationFrameRef.current);
        }

        if (scrollDelayTimeoutRef.current) {
            window.clearTimeout(scrollDelayTimeoutRef.current);
        }

        scrollDelayTimeoutRef.current = window.setTimeout(() => {
            const startY = window.scrollY;
            const endY = 0;
            const distance = endY - startY;
            const duration = 500;
            const startTime = performance.now();

            const easeInOutCubic = (progress) => (
                progress < 0.5
                    ? 4 * progress * progress * progress
                    : 1 - Math.pow(-2 * progress + 2, 3) / 2
            );

            const animateScroll = (currentTime) => {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const easedProgress = easeInOutCubic(progress);

                window.scrollTo(0, startY + distance * easedProgress);

                if (progress < 1) {
                    scrollAnimationFrameRef.current = requestAnimationFrame(animateScroll);
                } else {
                    scrollAnimationFrameRef.current = null;
                }
            };

            scrollAnimationFrameRef.current = requestAnimationFrame(animateScroll);
            scrollDelayTimeoutRef.current = null;
        }, 140);
    };

    useEffect(() => () => {
        if (scrollAnimationFrameRef.current) {
            cancelAnimationFrame(scrollAnimationFrameRef.current);
        }

        if (scrollDelayTimeoutRef.current) {
            window.clearTimeout(scrollDelayTimeoutRef.current);
        }
    }, []);

    return (
        <main
            className="w-full pb-14 bg-[linear-gradient(180deg,#eaf0ff_0%,#f6f9ff_36%,#ecf1f9_100%)]"
            style={{ fontFamily: 'Bahnschrift, "Trebuchet MS", Verdana, sans-serif' }}
        >
            <section className="w-full border-y border-[#dbe2f0] bg-white/85 backdrop-blur">
                <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8 h-12 flex items-center justify-between">
                    <div className="text-xs font-semibold tracking-[0.16em] text-[#667086] uppercase">
                        Premium Live Casino Lounge
                    </div>
                    <div className="hidden sm:flex items-center gap-3 text-xs text-[#53607a] font-semibold">
                        <span>High Definition Stream</span>
                        <span className="w-1 h-1 rounded-full bg-[#99a6be]"></span>
                        <span>Fast Payout</span>
                    </div>
                </div>
            </section>

            <section className="w-full">
                <div className="w-full mx-auto">
                    <div className="relative overflow-hidden border border-[#d5deef] shadow-[0_14px_34px_rgba(16,32,72,0.16)]">
                        <img
                            src={liveCasinoBanner}
                            alt="Live Casino Banner"
                            className="w-full h-auto block bg-[#dde8f8]"
                        />
                        <div className="absolute inset-y-0 right-0 w-full md:w-[50%] flex items-center justify-start">
                            <div className="w-full max-w-[500px] px-4 py-4 md:px-8 md:py-7 text-center">
                                <div className="mt-4 md:mt-5 flex justify-center">
                                        <img
                                            src={bannerProvider.src}
                                            alt={bannerProvider.name}
                                            className="h-20 object-contain"
                                        />
                                </div>

                                <p className="mt-2 md:mt-4 mx-auto max-w-[420px] text-[#2a3548] text-sm md:text-xl leading-[1.35] md:leading-[1.32] font-semibold">
                                    Experience premium real-time casino games with top live dealers.
                                </p>
                                <a
                                    href="#"
                                    className="inline-flex mt-4 md:mt-6 h-10 md:h-14 min-w-[170px] md:min-w-[260px] px-7 md:px-12 items-center justify-center rounded-[10px] text-sm md:text-xl font-black tracking-[0.06em] text-white bg-[linear-gradient(180deg,#ffcc33_0%,#f29a00_100%)] border border-[#f0bb3d] shadow-[0_10px_20px_rgba(242,154,0,0.34)] hover:brightness-105 hover:-translate-y-0.5 active:translate-y-0 active:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffd166] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1d3354] transition"
                                    aria-label={`Play ${bannerProvider.name}`}
                                >
                                    PLAY LIVE
                                </a>
                            </div>
                        </div>
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
                                    <p className="text-base md:text-2xl font-extrabold leading-none">{stat.value}</p>
                                </div>
                                <p className="text-xs md:text-xs tracking-[0.08em] uppercase mt-1 opacity-90">{stat.label}</p>
                            </article>
                        );
                    })}
                </div>
            </section>

            <section id="live-casino-providers" className="w-full max-w-[1400px] mx-auto px-4 md:px-8 mt-4 md:mt-6">
                <div className="rounded-2xl border border-[#dbe4f3] bg-white/80 backdrop-blur-sm shadow-[0_6px_18px_rgba(20,43,87,0.09)] p-4 md:p-5">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                        <div>
                            <p className="text-[#1c2841] text-xl md:text-2xl font-extrabold tracking-[0.02em]">Live Casino Providers</p>
                            <p className="text-[#5d6780] text-xs md:text-sm mt-1">
                                Choose from top brands with real-time action and studio-grade stream quality.
                            </p>
                        </div>
                        <label className="w-full lg:w-[330px] h-11 rounded-xl border border-[#d5deef] bg-white px-3 flex items-center gap-2 shadow-[inset_0_1px_2px_rgba(9,30,66,0.06)]">
                            <Search size={16} className="text-[#5f6e8b]" />
                            <input
                                value={query}
                                onChange={(event) => setQuery(event.target.value)}
                                placeholder="Search provider"
                                className="w-full bg-transparent outline-none text-sm text-[#2a3a58] placeholder:text-[#8b97ae] font-semibold"
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
                                    className={`px-3 py-1.5 rounded-full text-xs md:text-xs font-bold tracking-wide border transition ${
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

                    <p className="mt-3 text-xs md:text-xs font-bold tracking-[0.08em] text-[#6a7590] uppercase">
                        {filteredProviders.length} provider{filteredProviders.length === 1 ? '' : 's'} found
                    </p>
                </div>
            </section>

            <section className="w-full max-w-[1400px] mx-auto px-4 md:px-8 mt-5 md:mt-6">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
                    {filteredProviders.map((provider, index) => (
                        <button
                            key={provider.name}
                            type="button"
                            onClick={() => handleSelectProvider(provider)}
                            className={`group relative h-[86px] md:h-[104px] rounded-3xl border bg-[#f2f3f5] shadow-[0_8px_16px_rgba(18,34,66,0.08)] flex items-center justify-center px-3 transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_24px_rgba(14,35,79,0.18)] ${
                                bannerProvider.name === provider.name
                                    ? 'border-[#1f5da8] ring-2 ring-[#1f5da8]/25'
                                    : 'border-[#d1d8e5] hover:border-[#b7c2d7]'
                            }`}
                            aria-label={`Show ${provider.name} in banner`}
                        >
                            {provider.featured && (
                                <span className="absolute right-2 top-2 rounded-full bg-[#ff4d00] text-white text-xs md:text-xs font-black px-2.5 py-0.5 tracking-wide shadow-[0_4px_8px_rgba(255,77,0,0.35)]">
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
                        </button>
                    ))}
                </div>
                {filteredProviders.length === 0 && (
                    <div className="mt-6 rounded-2xl border border-[#dce4f2] bg-white px-4 py-7 text-center">
                        <p className="text-[#2b3a57] font-extrabold text-base">No providers match your search.</p>
                        <p className="text-[#6a7590] text-xs mt-1">Try a different keyword or switch filter.</p>
                    </div>
                )}
            </section>
        </main>
    );
}
