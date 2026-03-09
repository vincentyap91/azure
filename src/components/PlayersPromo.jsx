import React from 'react';
import footballers from '../assets/footballers.png';

export default function PlayersPromo() {
    return (
        <section className="w-full flex flex-col md:flex-row gap-6 mt-4">
            {/* Left Column */}
            <div className="w-full md:w-1/2 bg-gradient-to-br from-[#eff8fd] to-[#d6effd] rounded-[30px] p-6 shadow-sm border border-white relative flex flex-col justify-end min-h-[250px]">
                {/* Logo and Trophy */}
                <div className="absolute top-6 left-6 z-10">
                    <h2 className="text-[#00AEEF] text-2xl font-black italic mb-2 tracking-wider drop-shadow-sm">LOGO</h2>
                    <div className="bg-gradient-to-r from-yellow-300 to-yellow-500 rounded-full p-2 w-10 h-10 flex items-center justify-center shadow-md mb-2">
                        <span className="text-lg leading-none">🏆</span>
                    </div>
                    <div className="text-xs text-[#0072BC] leading-snug max-w-[180px]">
                        <p className="mb-2"><span className="font-bold">Lionel Messi</span> : Won the<br />FIFA World Cup in 2022</p>
                        <p><span className="font-bold">Erling Haaland</span> : Won the treble<br />with Manchester City</p>
                    </div>
                </div>

                {/* Players Artwork */}
                <div className="absolute bottom-0 right-[-10px] w-[260px] md:w-[320px] h-full flex items-end pointer-events-none z-0 overflow-visible">
                    <img
                        src={footballers}
                        alt="Football Players"
                        className="w-full h-[120%] object-contain object-bottom drop-shadow-xl"
                        style={{ maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)", WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent 100%)" }}
                    />
                </div>
            </div>

            {/* Right Column / Video Thumbnail */}
            <div className="w-full md:w-1/2 h-[250px] rounded-[30px] overflow-hidden relative shadow-md group cursor-pointer border-4 border-white">
                <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522778119026-d647f0596c20?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80')" }}
                ></div>
                {/* Video gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent"></div>

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/30 backdrop-blur-md rounded-full border border-white/50 flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.4)] group-hover:bg-white/50 transition-colors">
                        <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
