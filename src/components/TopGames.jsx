import React from 'react';
import SectionHeader from './SectionHeader';
import { Crown } from 'lucide-react';

export default function TopGames() {
    const games = [
        { name: 'Gates of Olympus', imgUrl: 'https://pksoftcdn.azureedge.net/games/PragmaticPlayT/vs20olympgate.png', provider: 'X' },
        { name: 'WCasino', imgUrl: 'https://pksoftcdn.azureedge.net/media/200x200_providerbanner_wcasino-202408150920123718.png', provider: 'PG' },
        { name: 'Dream Gaming', imgUrl: 'https://pksoftcdn.azureedge.net/media/dream gaming_casino-202603051120541084.png', provider: 'PG' },
        { name: "Dragon's Luck", imgUrl: 'https://pksoftcdn.azureedge.net/games/PragmaticPlayT/vs20olympgate.png', provider: 'PG' },
        { name: 'Nomikai Fever', imgUrl: 'https://gamifystaging.blob.core.windows.net/staging/common/8eb11693-ad04-40f3-b2f1-cd7989c7fcc6.png', provider: 'X' },
        { name: 'Lucky Sports', imgUrl: 'https://pksoftcdn.azureedge.net/media/200x200_providerbanner_luckysport-202407260917076261-202408060821509512-202410241125136236.png', provider: 'JOKER' }
    ];

    return (
        <section className="w-full pt-4">
            <SectionHeader
                title="Top Games"
                icon={<Crown size={22} fill="currentColor" className="text-[#0072BC]" />}
                rightLink="See all"
            />

            <div className="grid grid-cols-2 md:grid-cols-6 gap-3 pt-2">
                {games.map((game, idx) => (
                    <div
                        key={idx}
                        className="flex flex-col bg-white rounded-xl shadow-[0_5px_15px_rgba(0,174,239,0.15)] group hover:-translate-y-1 transition-transform border-b-4 border-[#00AEEF] relative overflow-hidden h-[180px]"
                    >
                        {/* Top Image Box inside Gold Border */}
                        <div className="w-full h-full p-1.5 pb-0">
                            <div className="w-full h-full relative rounded-t-[10px] overflow-hidden border-2 border-[#FFD700]/70 z-10">

                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                    style={{ backgroundImage: `url("${game.imgUrl}")` }}
                                ></div>

                                {/* Provider Badge Tag */}
                                <div className="absolute top-0 left-0 bg-white px-2 py-0.5 rounded-br-lg z-20 shadow-sm flex items-center justify-center">
                                    <span className="text-[#0072BC] font-black text-xs italic">{game.provider}</span>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Title Bar (already has border-bottom set on parent) */}
                        <div className="bg-[#00AEEF] w-full py-1.5 text-center px-1 absolute bottom-0 z-30">
                            <span className="text-white text-[10px] font-bold block truncate">{game.name}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
