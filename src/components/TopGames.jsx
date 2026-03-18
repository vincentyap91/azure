import React from 'react';
import SectionHeader from './SectionHeader';
import { Crown } from 'lucide-react';

export default function TopGames({ onNavigate }) {
    const games = [
        { name: 'Gates of Olympus', imgUrl: 'https://pksoftcdn.azureedge.net/games/PragmaticPlayT/vs20olympgate.png', provider: 'X', page: 'slots' },
        { name: 'WCasino', imgUrl: 'https://pksoftcdn.azureedge.net/media/200x200_providerbanner_wcasino-202408150920123718.png', provider: 'PG', page: 'live-casino' },
        { name: 'Dream Gaming', imgUrl: 'https://pksoftcdn.azureedge.net/media/dream gaming_casino-202603051120541084.png', provider: 'PG', page: 'live-casino' },
        { name: "Dragon's Luck", imgUrl: 'https://pksoftcdn.azureedge.net/games/PragmaticPlayT/vs20olympgate.png', provider: 'PG', page: 'slots' },
        { name: 'Nomikai Fever', imgUrl: 'https://gamifystaging.blob.core.windows.net/staging/common/8eb11693-ad04-40f3-b2f1-cd7989c7fcc6.png', provider: 'X', page: 'slots' },
        { name: 'Lucky Sports', imgUrl: 'https://pksoftcdn.azureedge.net/media/200x200_providerbanner_luckysport-202407260917076261-202408060821509512-202410241125136236.png', provider: 'JOKER', page: 'sports' }
    ];

    return (
        <section className="w-full pt-4">
            <SectionHeader
                title="Top Games"
                icon={<Crown size={22} fill="currentColor" className="text-[var(--color-brand-secondary)]" />}
                rightLink="See all"
                rightLinkTo="slots"
                onNavigate={onNavigate}
            />

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 pt-2">
                {games.map((game, idx) => (
                    <button
                        key={idx}
                        type="button"
                        onClick={() => game.page && onNavigate?.(game.page)}
                        className="group relative flex flex-col overflow-hidden rounded-xl border-b-4 border-[var(--color-brand-primary)] bg-[var(--color-surface-base)] shadow-[var(--shadow-brand-card)] transition-transform hover:-translate-y-1 text-left w-full"
                    >
                        {/* Image Box - aspect-square scales with grid cell width */}
                        <div className="relative w-full aspect-square overflow-hidden">
                            <div
                                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-110"
                                style={{ backgroundImage: `url("${game.imgUrl}")` }}
                            />

                            {/* Provider Badge Tag */}
                            <div className="absolute top-0 left-0 z-20 flex items-center justify-center rounded-br-lg bg-white px-2 py-0.5 shadow-sm">
                                <span className="text-xs font-black italic text-[var(--color-brand-secondary)]">{game.provider}</span>
                            </div>
                        </div>

                        {/* Bottom Title Bar */}
                        <div className="flex min-h-[40px] items-center justify-center bg-[var(--color-brand-primary)] px-2 py-2">
                            <span className="block truncate text-center text-xs font-bold text-white">{game.name}</span>
                        </div>
                    </button>
                ))}
            </div>
        </section>
    );
}
