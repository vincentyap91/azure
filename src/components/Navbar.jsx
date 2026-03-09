import React, { useEffect, useRef, useState } from 'react';
import {
    ChevronDown,
    CircleDollarSign,
    EllipsisVertical,
    Headset,
    Heart,
    LogOut,
    ReceiptText,
    ScrollText,
    Settings,
    ShieldCheck,
    UserCircle2,
    UserRound
} from 'lucide-react';
import LiveCasinoMenu from './LiveCasinoMenu';

export default function Navbar({ onNavigate, activePage = 'home', onLoginClick, onRegisterClick, authUser, onLogout }) {
    const [casinoMenuOpen, setCasinoMenuOpen] = useState(false);
    const [profileMenuOpen, setProfileMenuOpen] = useState(false);
    const profileMenuRef = useRef(null);

    const mainLinks = [
        'Home', 'Casino', 'Slots', 'Sports', 'E-Sports', 'Lottery',
        'Fishing', 'Poker', '3D Games', 'Cockfight', '4D', 'Fast Games',
        'Promotion', 'VIP', 'More'
    ];
    const navTargets = { Home: 'home', Casino: 'live-casino' };
    const navHrefs = { Home: '/', Casino: '/casino' };
    const accountCards = [
        { label: 'Account Details', icon: UserRound },
        { label: 'Verification', icon: ShieldCheck },
        { label: 'Favourites', icon: Heart },
        { label: 'Bet Slip', icon: ReceiptText },
        { label: 'My Bets', icon: ScrollText }
    ];

    useEffect(() => {
        if (!profileMenuOpen) {
            return undefined;
        }

        const handlePointerDown = (event) => {
            if (!profileMenuRef.current?.contains(event.target)) {
                setProfileMenuOpen(false);
            }
        };

        window.addEventListener('pointerdown', handlePointerDown);
        return () => window.removeEventListener('pointerdown', handlePointerDown);
    }, [profileMenuOpen]);

    return (
        <nav
            className="w-full relative z-50 shadow-md"
            onMouseLeave={() => setCasinoMenuOpen(false)}
        >
            <div className="w-full bg-[#0072BC] h-8 flex justify-between items-center px-4 md:px-10 text-xs text-white">
                <div className="flex gap-4 items-center h-full">
                    <a href="#" className="flex items-center gap-1 hover:text-white/80 h-full px-2 border-r border-[#00AEEF]">
                        <span className="text-sm">Mobile</span>
                    </a>
                    <a href="#" className="flex items-center gap-1 hover:text-white/80 h-full">
                        <span className="text-sm">Affiliate</span>
                    </a>
                </div>

                <div className="flex items-center gap-2 h-full py-1">
                    {authUser ? (
                        <div
                            ref={profileMenuRef}
                            className="relative flex h-full items-center gap-1 rounded-[12px] px-1 py-0.5 shadow-[0_8px_16px_rgba(0,73,156,0.2)]"
                        >
                            <div className="flex h-7 items-center gap-1.5 rounded-[9px] border border-white/10 bg-[#0e63bb] px-3 text-white">
                                <span className="font-bold tracking-[0.01em]">{authUser.balance}</span>
                                <CircleDollarSign size={14} className="text-[#ffd84d]" />
                            </div>
                            <button
                                type="button"
                                onClick={() => setProfileMenuOpen((open) => !open)}
                                className="flex h-7 items-center gap-1.5 rounded-[9px] px-2 text-white transition hover:bg-white/10"
                                aria-haspopup="menu"
                                aria-expanded={profileMenuOpen}
                            >
                                <span className="font-bold text-[#fff0a0]">{authUser.name}</span>
                                <div className="relative">
                                    <UserCircle2 size={20} className="text-white/90" />
                                    {authUser.notifications > 0 && (
                                        <span className="absolute -right-1 -top-1 inline-flex h-4 min-w-4 items-center justify-center rounded-full bg-[#ff5b2e] px-1 text-[10px] font-black text-white">
                                            {authUser.notifications}
                                        </span>
                                    )}
                                </div>
                                <ChevronDown
                                    size={13}
                                    className={`text-white/75 transition-transform ${profileMenuOpen ? 'rotate-180' : ''}`}
                                />
                            </button>
                            <button
                                type="button"
                                className="inline-flex h-7 w-7 items-center justify-center rounded-[9px] text-white/75 hover:bg-white/10 hover:text-white transition"
                                aria-label="More account options"
                            >
                                <EllipsisVertical size={15} />
                            </button>
                            <button
                                type="button"
                                className="h-7 rounded-[9px] bg-[linear-gradient(180deg,#ffcf4a_0%,#ffb22d_100%)] px-4 font-black tracking-wide text-[#0c4a8e] shadow-[0_6px_12px_rgba(255,174,39,0.22)] hover:brightness-105 transition"
                            >
                                DEPOSIT
                            </button>
                            <button
                                type="button"
                                onClick={() => onLogout?.()}
                                className="h-7 rounded-[9px] border border-white/40 bg-white/[0.03] px-4 font-bold text-white hover:bg-white/10 transition"
                            >
                                LOGOUT
                            </button>
                            <div className="flex h-7 items-center justify-center rounded-[9px] border border-white/18 bg-white/[0.03] px-2 text-white/90">
                                <span className="text-xs shadow-sm">TH</span>
                            </div>

                            {profileMenuOpen && (
                                <div className="absolute right-15 top-[calc(100%+10px)] z-[120] w-[312px] overflow-hidden rounded-[22px] border border-[#6ac8ff]/18 bg-[linear-gradient(180deg,#0d3f83_0%,#062754_100%)] p-4 text-white shadow-[0_20px_44px_rgba(0,16,56,0.4)]">
                                    <div className="absolute inset-x-0 top-0 h-20 bg-[radial-gradient(circle_at_top,#29bbff55_0%,transparent_72%)] pointer-events-none" />

                                    <div className="relative flex items-start gap-3">
                                        <div className="relative shrink-0">
                                            <div className="flex h-16 w-16 items-center justify-center rounded-full border-[3px] border-[#56b9ff]/30 bg-[linear-gradient(180deg,#1a5bb1_0%,#0b3e80_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]">
                                                <UserCircle2 size={40} className="text-white/90" />
                                            </div>
                                            <button
                                                type="button"
                                                className="absolute bottom-0 right-0 inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/15 bg-[#2c66c3] text-white shadow-[0_6px_12px_rgba(0,0,0,0.22)]"
                                                aria-label="Edit profile"
                                            >
                                                <ScrollText size={12} />
                                            </button>
                                        </div>

                                        <div className="min-w-0 pt-1">
                                            <p className="truncate text-xl font-extrabold leading-none text-white">
                                                Hi, {authUser.name}
                                            </p>
                                            <div className="mt-1.5 space-y-1 text-xs text-[#d3eaff]">
                                                <p className="flex items-center gap-2">
                                                    <span className="text-[#8ad4ff]">Joined:</span>
                                                    <span className="font-semibold">08/01/2026</span>
                                                </p>
                                                <p className="flex items-center gap-2">
                                                    <span className="text-[#8ad4ff]">Player ID:</span>
                                                    <span className="font-semibold">679129</span>
                                                </p>
                                            </div>
                                            <div className="mt-2 inline-flex items-center rounded-full border border-[#3d7dcb] bg-[linear-gradient(180deg,#143567_0%,#0e2547_100%)] px-2.5 py-1 text-xs font-bold text-[#dbeaff] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                                                Iron
                                            </div>
                                        </div>
                                    </div>

                                    <div className="relative mt-4 rounded-[18px] border border-[#6ac8ff]/12 bg-[linear-gradient(180deg,#103a79_0%,#08234a_100%)] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                                        <div className="mb-3 flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <div className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[linear-gradient(180deg,#2a87d6_0%,#1b58ae_100%)] text-[#ffcf4a] shadow-[0_8px_16px_rgba(1,22,63,0.25)]">
                                                    <UserRound size={14} />
                                                </div>
                                                <span className="text-lg font-bold text-white">My Account</span>
                                            </div>
                                            <ChevronDown size={16} className="text-white/80" />
                                        </div>

                                        <div className="grid grid-cols-3 gap-3">
                                            {accountCards.map(({ label, icon: Icon }) => (
                                                <button
                                                    key={label}
                                                    type="button"
                                                    className="group flex min-h-[72px] flex-col items-center justify-center rounded-[14px] border border-[#57b5ff]/10 bg-[linear-gradient(180deg,#092c5a_0%,#041c3b_100%)] px-2 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition hover:-translate-y-0.5 hover:border-[#66cbff]/30 hover:shadow-[0_14px_24px_rgba(3,22,58,0.34)]"
                                                >
                                                    <Icon size={18} className="mb-1.5 text-[#1f83ff] group-hover:text-[#5cc4ff]" />
                                                    <span className="text-xs font-bold leading-tight text-white">{label}</span>
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <button
                                        type="button"
                                        className="mt-3 flex w-full items-center justify-between rounded-[18px] border border-[#6ac8ff]/12 bg-[linear-gradient(180deg,#103a79_0%,#08234a_100%)] px-4 py-3 text-left shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition hover:border-[#66cbff]/24"
                                    >
                                        <span className="flex items-center gap-3">
                                            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[linear-gradient(180deg,#2a87d6_0%,#1b58ae_100%)] text-[#5ad0ff]">
                                                <Headset size={14} />
                                            </span>
                                            <span className="text-base font-bold text-white">Support</span>
                                        </span>
                                        <ChevronDown size={16} className="text-white/80" />
                                    </button>

                                    <button
                                        type="button"
                                        className="mt-3 flex w-full items-center justify-between rounded-[18px] border border-[#6ac8ff]/12 bg-[linear-gradient(180deg,#103a79_0%,#08234a_100%)] px-4 py-3 text-left shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition hover:border-[#66cbff]/24"
                                    >
                                        <span className="flex items-center gap-3">
                                            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[linear-gradient(180deg,#2a87d6_0%,#1b58ae_100%)] text-[#4b8dff]">
                                                <Settings size={14} />
                                            </span>
                                            <span className="text-base font-bold text-white">Settings</span>
                                        </span>
                                        <ChevronDown size={16} className="text-white/80" />
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() => {
                                            setProfileMenuOpen(false);
                                            onLogout?.();
                                        }}
                                        className="mt-4 inline-flex items-center gap-2.5 text-base font-extrabold text-[#ffd84d] transition hover:text-[#ffe27d]"
                                    >
                                        <LogOut size={16} />
                                        Log Out
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <>
                            <button
                                type="button"
                                onClick={() => onLoginClick?.()}
                                className="h-full px-6 rounded border border-white/50 hover:bg-white/10 transition-colors font-semibold"
                            >
                                Login
                            </button>
                            <button
                                type="button"
                                onClick={() => onRegisterClick?.()}
                                className="h-full px-6 rounded bg-[#39B54A] shadow-[0_0_8px_rgba(57,181,74,0.6)] hover:bg-[#2e9e3c] transition-colors font-semibold shadow-inner"
                            >
                                Join Now
                            </button>
                            <button type="button" className="h-full px-2 border border-white/30 rounded flex items-center justify-center opacity-90 mx-1">
                                <span className="text-sm shadow-sm">TH</span>
                            </button>
                        </>
                    )}
                </div>
            </div>

            <div className="w-full bg-[#00AEEF] h-14 flex items-center px-4 md:px-10">
                <div className="w-full max-w-[1400px] mx-auto flex items-center justify-between">
                    <button
                        type="button"
                        onClick={() => onNavigate?.('home')}
                        className="text-2xl font-black text-white/90 drop-shadow-sm tracking-wide mr-8 cursor-pointer hover:opacity-80"
                    >
                        LOGO
                    </button>

                    <div className="hidden lg:flex flex-1 justify-center items-center gap-x-[14px]">
                        {mainLinks.map((link, idx) => (
                            <a
                                key={idx}
                                href={navHrefs[link] ?? '#'}
                                onMouseEnter={() => {
                                    if (link === 'Casino') {
                                        setCasinoMenuOpen(true);
                                    } else {
                                        setCasinoMenuOpen(false);
                                    }
                                }}
                                onFocus={() => {
                                    if (link === 'Casino') {
                                        setCasinoMenuOpen(true);
                                    }
                                }}
                                onClick={(event) => {
                                    const target = navTargets[link];
                                    if (target) {
                                        event.preventDefault();
                                        onNavigate?.(target);
                                    }
                                }}
                                className={`text-white text-xs font-medium hover:text-yellow-300 transition-colors whitespace-nowrap drop-shadow-sm
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

            <LiveCasinoMenu
                open={casinoMenuOpen}
                onProviderClick={() => setCasinoMenuOpen(false)}
            />

            {casinoMenuOpen && (
                <div className="fixed inset-x-0 bottom-0 top-[88px] z-[70] bg-[#020b1f]/75 backdrop-blur-[1px] pointer-events-none" />
            )}
        </nav>
    );
}
