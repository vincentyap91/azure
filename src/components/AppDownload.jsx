import React from 'react';
import { Apple, Play } from 'lucide-react';

/* ── Inline SVG decorations ────────────────────────────── */

const GearSVG = () => (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
            <radialGradient id="g1" cx="38%" cy="28%" r="65%">
                <stop offset="0%" stopColor="#FFE066" />
                <stop offset="45%" stopColor="#FFB800" />
                <stop offset="100%" stopColor="#B87800" />
            </radialGradient>
            <filter id="gearShadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#FFB80066" />
            </filter>
        </defs>
        {/* Gear teeth path */}
        <path
            d="M40 10 L44 6 L48 10 L54 8 L56 14 L62 14 L63 20 L69 22 L68 28 L74 32 L71 38
               L76 43 L71 48 L74 54 L68 57 L69 63 L63 65 L62 71 L56 71 L54 76 L48 74
               L44 78 L40 74 L36 78 L32 74 L26 76 L24 71 L18 71 L17 65 L11 63 L12 57
               L6 54 L9 48 L4 43 L9 38 L6 32 L12 28 L11 22 L17 20 L18 14 L24 14
               L26 8 L32 10 L36 6 Z"
            fill="url(#g1)"
            filter="url(#gearShadow)"
        />
        {/* Center hole */}
        <circle cx="40" cy="42" r="12" fill="#E09000" />
        <circle cx="40" cy="42" r="9" fill="#FFD740" />
        {/* Highlight */}
        <ellipse cx="34" cy="34" rx="7" ry="4" fill="rgba(255,255,255,0.30)" transform="rotate(-25 34 34)" />
    </svg>
);

const ShieldSVG = () => (
    <svg viewBox="0 0 56 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
            <radialGradient id="sh1" cx="35%" cy="22%" r="70%">
                <stop offset="0%" stopColor="#6FE4FF" />
                <stop offset="50%" stopColor="#00AEEF" />
                <stop offset="100%" stopColor="#005FA0" />
            </radialGradient>
        </defs>
        <path d="M28 3L4 13v16c0 14.3 10.3 27.7 24 31C41.7 56.7 52 43.3 52 29V13L28 3z"
            fill="url(#sh1)" stroke="white" strokeWidth="2.5" />
        <path d="M17 30l7 7 15-14" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <ellipse cx="22" cy="17" rx="7" ry="3.5" fill="rgba(255,255,255,0.28)" transform="rotate(-20 22 17)" />
    </svg>
);

const BadgeSVG = () => (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
            <radialGradient id="bd1" cx="35%" cy="25%" r="70%">
                <stop offset="0%" stopColor="#FF9A80" />
                <stop offset="50%" stopColor="#F44336" />
                <stop offset="100%" stopColor="#A00000" />
            </radialGradient>
        </defs>
        <rect x="4" y="4" width="56" height="56" rx="16" fill="url(#bd1)" stroke="rgba(255,255,255,0.35)" strokeWidth="2" />
        <text x="32" y="31" textAnchor="middle" fill="white" fontSize="18" fontWeight="900" fontFamily="Arial, sans-serif">13</text>
        <line x1="14" y1="37" x2="50" y2="37" stroke="rgba(255,255,255,0.45)" strokeWidth="1.5" />
        <text x="32" y="50" textAnchor="middle" fill="rgba(255,255,255,0.85)" fontSize="9" fontWeight="700" fontFamily="Arial, sans-serif">BONUS</text>
        <ellipse cx="22" cy="14" rx="9" ry="4" fill="rgba(255,255,255,0.22)" transform="rotate(-15 22 14)" />
    </svg>
);

/* ── Phone screen content ───────────────────────────────── */

const PhoneBack = () => (
    <div className="w-full h-full bg-gradient-to-b from-[#48C8F0] to-[#006EB5] rounded-[20px] p-2 pt-8 flex flex-col gap-2 overflow-hidden">
        {/* Logo row */}
        <div className="flex items-center justify-between px-1">
            <div className="bg-white/20 rounded px-2 py-0.5 text-white font-black text-xs">LOGO</div>
            <div className="flex gap-1">
                <div className="w-3 h-3 bg-white/30 rounded-full" />
                <div className="w-3 h-3 bg-white/30 rounded-full" />
            </div>
        </div>
        {/* Hero */}
        <div className="w-full h-14 bg-white/15 rounded-lg border border-white/20 flex items-center justify-center gap-1">
            {[0, 1, 2].map(i => <div key={i} className="w-7 h-10 bg-white/20 rounded-md" />)}
        </div>
        {/* Grid */}
        <div className="grid grid-cols-3 gap-1 flex-1">
            {[...Array(9)].map((_, i) => (
                <div key={i} className="bg-white/15 border border-white/20 rounded-md" />
            ))}
        </div>
    </div>
);

const PhoneFront = () => (
    <div className="w-full h-full bg-gradient-to-b from-[#00AEEF] to-[#004E96] rounded-[22px] p-2 pt-9 flex flex-col gap-1.5 overflow-hidden">
        {/* Logo + top bar */}
        <div className="flex items-center justify-between px-1 py-0.5 bg-white/10 rounded-md">
            <div className="w-12 h-2.5 bg-white/60 rounded-sm" />
            <div className="flex gap-0.5">
                <div className="w-5 h-3 bg-[#FFB800] rounded-sm flex items-center justify-center text-xs font-black text-white">EN</div>
                <div className="w-3 h-3 bg-white/30 rounded-sm" />
            </div>
        </div>
        {/* Banner */}
        <div className="w-full h-12 bg-gradient-to-r from-[#0080C8] to-[#005090] rounded-lg border border-white/20 flex items-center justify-around px-1">
            <div className="w-7 h-9 bg-white/20 rounded-md" />
            <div className="w-7 h-9 bg-white/20 rounded-md" />
            <div className="w-7 h-9 bg-white/20 rounded-md" />
        </div>
        {/* Tab row */}
        <div className="flex gap-1">
            {['ALL', 'HOT', 'NEW'].map(t => (
                <div key={t} className="flex-1 h-3.5 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-white">{t}</span>
                </div>
            ))}
        </div>
        {/* Game grid */}
        <div className="grid grid-cols-3 gap-1 flex-1">
            {[...Array(12)].map((_, i) => (
                <div key={i} className="bg-white/15 border border-white/25 rounded-md flex items-center justify-center">
                    <div className="w-2 h-2 bg-white/30 rounded-sm" />
                </div>
            ))}
        </div>
    </div>
);

/* ── Main component ─────────────────────────────────────── */

export default function AppDownload() {
    return (
        <section className="w-full relative mt-16 mb-8 pt-8 px-4 flex flex-col md:flex-row items-center justify-between gap-12">

            {/* Background radial glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] bg-white/40 blur-3xl pointer-events-none rounded-[100%] z-0" />

            {/* ── Left: Text ────────────────────────────── */}
            <div className="flex-1 z-10 w-full max-w-sm">
                <h2 className="text-2xl font-bold text-[#004C80] mb-4 tracking-tight leading-tight">
                    Download the <span className="text-[#00AEEF]">Riocity9 APP</span>
                </h2>
                <p className="text-xs text-[#0072BC] font-semibold leading-relaxed opacity-80">
                    Playing through the application is more convenient than playing through the website.
                    You can definitely feel the difference. Register to receive free credit and many bonuses through this channel.
                </p>
            </div>

            {/* ── Center: Phone Mockups ─────────────────── */}
            <div className="flex-1 w-full flex justify-center items-center relative h-[320px] z-10">

                {/* Light blue background blob */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] h-[180px] bg-[#C6EEFF]/70 rounded-[60%] blur-2xl pointer-events-none" />

                {/* Spinning Gear — far left */}
                <div
                    className="absolute left-[-10px] top-1/2 -translate-y-1/2 w-16 h-16 z-10"
                    style={{ animation: 'spin 9s linear infinite' }}
                >
                    <GearSVG />
                </div>

                {/* Back phone — rotated right */}
                <div className="absolute right-[14%] top-4 z-10"
                    style={{ transform: 'rotate(10deg)', filter: 'drop-shadow(0 12px 24px rgba(0,100,180,0.22))' }}>
                    <div className="w-[118px] h-[238px] bg-white rounded-[22px] border-[4px] border-gray-100 overflow-hidden flex flex-col">
                        {/* Notch */}
                        <div className="flex justify-center pt-1.5">
                            <div className="w-9 h-2 bg-gray-200 rounded-full" />
                        </div>
                        <PhoneBack />
                    </div>
                </div>

                {/* Front phone — rotated left, on top */}
                <div className="absolute left-[14%] -top-2 z-20"
                    style={{ transform: 'rotate(-10deg)', filter: 'drop-shadow(0 16px 32px rgba(0,100,180,0.30))' }}>
                    <div className="w-[128px] h-[258px] bg-white rounded-[24px] border-[5px] border-white overflow-hidden flex flex-col">
                        {/* Notch */}
                        <div className="flex justify-center pt-1.5">
                            <div className="w-10 h-2.5 bg-black/10 rounded-full" />
                        </div>
                        <PhoneFront />
                    </div>
                </div>

                {/* Blue Shield badge — between phones */}
                <div className="absolute left-[42%] top-[30%] w-11 h-[52px] z-30 drop-shadow-xl">
                    <ShieldSVG />
                </div>

                {/* Red bonus badge — far right */}
                <div className="absolute right-[-4px] top-[28%] w-14 h-14 z-30 drop-shadow-xl"
                    style={{ transform: 'rotate(12deg)' }}>
                    <BadgeSVG />
                </div>
            </div>

            {/* ── Right: QR + Buttons ───────────────────── */}
            <div className="flex-1 w-full flex justify-center md:justify-end gap-6 z-10">
                {[
                    { icon: <Apple size={14} fill="currentColor" />, label: 'iOS Download' },
                    { icon: <Play size={10} fill="currentColor" className="ml-0.5" />, label: 'APK Download' },
                ].map(({ icon, label }) => (
                    <div key={label} className="flex flex-col gap-3 items-center">
                        <div className="w-[90px] h-[90px] bg-white p-1 rounded-lg border border-gray-200 shadow-sm relative group overflow-hidden">
                            <div className="w-full h-full border border-dashed border-gray-300 rounded flex items-center justify-center">
                                <span className="text-xs font-bold text-gray-300">QR CODE</span>
                            </div>
                            {/* Scan-line hover effect */}
                            <div className="absolute top-0 left-0 w-full h-[1px] bg-[#00AEEF] -translate-y-full group-hover:animate-[scan_1.5s_linear_infinite] shadow-[0_0_8px_#00a8e8]" />
                        </div>
                        <button className="flex items-center gap-1.5 text-xs bg-gradient-to-r from-[#00CFFF] to-[#00AEEF] text-white px-4 py-1.5 rounded-full font-bold shadow-md hover:scale-105 transition-transform">
                            {icon} {label}
                        </button>
                    </div>
                ))}
            </div>

        </section>
    );
}
