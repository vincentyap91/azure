import React from 'react';
import SectionHeader from './SectionHeader';
import { Crown } from 'lucide-react';
import slotsImage from '../assets/slots.jpg';
import casinoImage from '../assets/casino.jpg';
import sportsImage from '../assets/sports.jpg';
import fishingImage from '../assets/fishing.png';
import eSportsImage from '../assets/e-sports.png';
import cockfightImage from '../assets/cockfight.jpg';

export default function GameCategories() {
    const categories = [
        { name: 'Slots', icon: '🎰', bgUrl: slotsImage },
        { name: 'Casino', icon: '🃏', bgUrl: casinoImage },
        { name: 'Sports', icon: '⚽', bgUrl: sportsImage },
        { name: 'Fishing', icon: '🐟', bgUrl: fishingImage },
        { name: 'E-Sports', icon: '🎮', bgUrl: eSportsImage },
        { name: 'Cockfight', icon: '🐓', bgUrl: cockfightImage }
    ];

    return (
        <section className="w-full pt-4">
            <SectionHeader
                title="Popular Games"
                icon={<Crown size={22} fill="currentColor" className="text-[#0072BC]" />}
            />

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 pt-6">
                {categories.map((cat, idx) => (
                    <div
                        key={idx}
                        className="flex flex-col relative rounded-[15px] bg-[#E5F6FF] p-1.5 shadow-[0_5px_15px_rgba(0,174,239,0.1)] group hover:-translate-y-1 transition-transform border border-white"
                    >
                        {/* Title Ribbon - overlaps top edge */}
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20 w-[86%]">
                            <div className="relative w-full">
                                <div className="absolute inset-x-2 -bottom-1.5 h-2 rounded-full bg-[#0072BC]/35 blur-sm"></div>
                                <div className="relative overflow-hidden rounded-[10px] border border-[#8ce6ff] bg-gradient-to-r from-[#008ed6] via-[#00aef0] to-[#00bdf9] px-2 py-1.5 shadow-[0_8px_14px_rgba(0,114,188,0.35)]">
                                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.4),rgba(255,255,255,0)_45%)]"></div>
                                    <span className="relative block text-center text-white text-[10px] uppercase font-extrabold tracking-[0.14em] drop-shadow-[0_1px_2px_rgba(0,0,0,0.45)]">
                                        {cat.name}
                                    </span>
                                </div>
                                <div className="absolute top-1/2 -right-2 -translate-y-1/2 w-0 h-0 border-y-[11px] border-y-transparent border-l-[12px] border-l-[#46d1ff] drop-shadow-[0_2px_3px_rgba(0,95,158,0.35)]"></div>
                            </div>
                        </div>

                        {/* Image Container */}
                        <div className="w-full h-[220px] rounded-[10px] overflow-hidden relative">
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{ backgroundImage: `url(${cat.bgUrl})` }}
                            ></div>

                            {/* Bottom inner glow/overlay */}
                            {/* <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div> */}

                            {/* Center Icon */}
                            <div className="absolute bottom-4 left-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-xl shadow-[0_0_15px_rgba(255,255,255,0.4)] border border-white/40">
                                {cat.icon}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
