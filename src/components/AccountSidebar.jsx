import React, { useEffect, useState } from 'react';
import {
    ChevronDown,
    ChevronLeft,
    ChevronRight,
    Headset,
    Heart,
    LogOut,
    PencilLine,
    ScrollText,
    Settings,
    ShieldCheck,
    UserCircle2,
    UserRound,
} from 'lucide-react';
import { supportOptions } from '../constants/supportOptions';

const accountLinks = [
    { id: 'profile', label: 'Account Details', icon: UserRound },
    { id: 'verification', label: 'Verification', icon: ShieldCheck },
    { id: 'favourites', label: 'Favourites', icon: Heart },
    { id: 'my-bets', label: 'My Bets', icon: ScrollText },
];

export default function AccountSidebar({
    activePage = 'profile',
    authUser,
    onNavigate,
    onLogout,
    onLiveChatClick,
    sidebarCollapsed: controlledCollapsed,
    onSidebarCollapsedChange,
}) {
    const [internalCollapsed, setInternalCollapsed] = useState(false);
    const [openMenus, setOpenMenus] = useState({
        account: true,
        support: false,
        settings: false,
    });

    const sidebarCollapsed = controlledCollapsed ?? internalCollapsed;
    const setSidebarCollapsed = onSidebarCollapsedChange ?? setInternalCollapsed;

    useEffect(() => {
        if (activePage === 'feedback' || activePage === 'help-center') {
            setOpenMenus((m) => ({ ...m, support: true }));
        }
    }, [activePage]);

    const toggleMenu = (menuKey) => {
        setOpenMenus((current) => {
            const nextIsOpen = !current[menuKey];

            return {
                account: false,
                support: false,
                settings: false,
                [menuKey]: nextIsOpen,
            };
        });
    };

    const handleNavClick = (pageId) => {
        const pageMap = { profile: 'profile', verification: 'verification', favourites: 'favourites', 'my-bets': 'my-bets' };
        onNavigate?.(pageMap[pageId] ?? pageId);
    };

    const username = authUser?.name || 'vincentzo';

    const sidebarWidth = sidebarCollapsed ? 'lg:w-[104px]' : 'lg:w-[320px]';

    return (
        <>
            <aside
                className={`relative flex flex-col overflow-visible border-r border-[var(--color-accent-100)] bg-[var(--color-surface-base)] p-5 text-[var(--color-text-strong)] shadow-[var(--shadow-sidebar)] transition-transform duration-300 lg:sticky lg:top-24 lg:self-start lg:rounded-[24px] lg:border lg:border-[var(--color-border-default)] lg:p-6 lg:shadow-[var(--shadow-card-raised)] ${sidebarWidth} w-[320px] max-w-[88vw]`}
            >
                <button
                    type="button"
                    onClick={() => setSidebarCollapsed((c) => !c)}
                    className="absolute right-0 top-10 z-20 hidden h-10 w-10 translate-x-1/2 items-center justify-center rounded-[14px] border border-[var(--color-border-default)] bg-[var(--color-surface-muted)] text-[var(--color-text-main)] shadow-[0_10px_24px_rgba(15,23,42,0.1)] transition-all hover:bg-[var(--color-accent-50)] hover:text-[var(--color-accent-700)] hover:shadow-sm lg:inline-flex"
                    aria-label={sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
                >
                    {sidebarCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
                </button>

                <div>
                    <div className={`${sidebarCollapsed ? 'items-center' : 'items-start'} flex gap-4`}>
                        <div className="relative shrink-0">
                            <div className="blue-accent-avatar flex h-16 w-16 items-center justify-center rounded-full">
                                <UserCircle2 size={40} className="text-[var(--color-accent-600)]" />
                            </div>
                            <button
                                type="button"
                                className="absolute bottom-0 right-0 inline-flex h-7 w-7 items-center justify-center rounded-full border border-[var(--color-accent-100)] bg-[var(--color-surface-base)] text-[var(--color-accent-600)] shadow-sm transition hover:scale-105 hover:bg-[var(--color-accent-50)]"
                                aria-label="Edit profile"
                            >
                                <PencilLine size={12} />
                            </button>
                        </div>
                        {!sidebarCollapsed && (
                            <div className="min-w-0 flex-1 pt-1">
                                <p className="text-[1.6rem] font-bold leading-tight text-[var(--color-text-strong)]">Hi, {username}</p>
                                <div className="mt-2 space-y-1 text-sm font-medium text-[var(--color-text-muted)]">
                                    <p>Joined: 08/01/2026</p>
                                    <p>Player ID: 679129</p>
                                </div>
                                <div className="mt-3 inline-flex rounded-full border border-[var(--color-accent-200)] bg-[var(--color-accent-50)] px-3 py-1 text-xs font-semibold tracking-[0.08em] text-[var(--color-accent-700)]">
                                    Iron
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div className="mt-8 space-y-5">
                    <div className="rounded-[20px] border border-[var(--color-border-default)] bg-[var(--color-surface-muted-soft)] p-4">
                        <button
                            type="button"
                            onClick={() => toggleMenu('account')}
                            className={`flex w-full items-center ${sidebarCollapsed ? 'justify-center' : 'justify-between'} gap-3 text-left`}
                        >
                            <span className="flex items-center gap-3">
                                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-accent-100)] text-[var(--color-accent-600)]">
                                    <UserRound size={18} />
                                </span>
                                {!sidebarCollapsed && <span className="text-lg font-bold text-[var(--color-text-strong)]">My Account</span>}
                            </span>
                            {!sidebarCollapsed && (
                                <ChevronDown size={18} className={`text-[var(--color-text-soft)] transition-transform ${openMenus.account ? 'rotate-180' : ''}`} />
                            )}
                        </button>
                        {openMenus.account && !sidebarCollapsed && (
                            <div className="mt-4 space-y-1 overflow-hidden rounded-xl bg-[var(--color-surface-base)] p-1">
                                {accountLinks.map(({ id, label, icon: Icon }) => {
                                    const isActive = activePage === id;
                                    return (
                                        <button
                                            key={id}
                                            type="button"
                                            onClick={() => handleNavClick(id)}
                                            className={`group flex min-h-[48px] w-full items-center gap-3 rounded-xl border-l-4 px-4 py-3.5 text-left transition-all ${
                                                isActive
                                                    ? 'border-l-[var(--color-accent-500)] bg-[var(--color-accent-50)] text-[var(--color-accent-700)] shadow-sm'
                                                    : 'border-l-transparent bg-[var(--color-surface-base)] text-[var(--color-text-muted)] hover:scale-[1.02] hover:bg-[var(--color-accent-50)] hover:text-[var(--color-accent-700)]'
                                            }`}
                                        >
                                            <Icon size={18} className={`${isActive ? 'text-[var(--color-accent-600)]' : 'text-[var(--color-text-soft)] group-hover:text-[var(--color-accent-500)]'}`} />
                                            <span className="text-base font-normal">{label}</span>
                                        </button>
                                    );
                                })}
                            </div>
                        )}
                    </div>

                    <div className="rounded-[20px] border border-[var(--color-border-default)] bg-[var(--color-surface-muted-soft)] p-4">
                        <button
                            type="button"
                            onClick={() => toggleMenu('support')}
                            className={`flex w-full items-center ${sidebarCollapsed ? 'justify-center' : 'justify-between'} gap-3 text-left`}
                        >
                            <span className="flex items-center gap-3">
                                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-accent-100)] text-[var(--color-accent-600)]">
                                    <Headset size={18} />
                                </span>
                                {!sidebarCollapsed && <span className="text-lg font-bold text-[var(--color-text-strong)]">Support</span>}
                            </span>
                            {!sidebarCollapsed && (
                                <ChevronDown size={18} className={`text-[var(--color-text-soft)] transition-transform ${openMenus.support ? 'rotate-180' : ''}`} />
                            )}
                        </button>
                        {openMenus.support && !sidebarCollapsed && (
                            <div className="mt-4 space-y-1 overflow-hidden rounded-xl bg-[var(--color-surface-base)] p-1">
                                {supportOptions.map(({ label, icon: Icon }) => {
                                    const isActive =
                                        (activePage === 'feedback' && label === 'Share Feedback') ||
                                        (activePage === 'help-center' && label === 'Help Center');
                                    return (
                                        <button
                                            key={label}
                                            type="button"
                                            onClick={() => {
                                                if (label === 'Live Chat') onLiveChatClick?.();
                                                if (label === 'Share Feedback') onNavigate?.('feedback');
                                                if (label === 'Help Center') onNavigate?.('help-center');
                                            }}
                                            className={`group flex min-h-[48px] w-full items-center gap-3 rounded-xl border-l-4 px-4 py-3.5 text-left transition-all hover:scale-[1.02] ${
                                                isActive
                                                    ? 'border-l-[var(--color-accent-500)] bg-[var(--color-accent-50)] text-[var(--color-accent-700)]'
                                                    : 'border-l-transparent bg-[var(--color-surface-base)] text-[var(--color-text-muted)] hover:border-l-[var(--color-accent-500)] hover:bg-[var(--color-accent-50)] hover:text-[var(--color-accent-700)]'
                                            }`}
                                        >
                                            <Icon size={18} className={`${isActive ? 'text-[var(--color-accent-600)]' : 'text-[var(--color-text-soft)] group-hover:text-[var(--color-accent-500)]'}`} />
                                            <span className="text-base font-normal">{label}</span>
                                        </button>
                                    );
                                })}
                            </div>
                        )}
                    </div>

                    <div className="rounded-[20px] border border-[var(--color-border-default)] bg-[var(--color-surface-muted-soft)] p-4">
                        <button
                            type="button"
                            onClick={() => toggleMenu('settings')}
                            className={`flex w-full items-center ${sidebarCollapsed ? 'justify-center' : 'justify-between'} gap-3 text-left`}
                        >
                            <span className="flex items-center gap-3">
                                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-accent-100)] text-[var(--color-accent-600)]">
                                    <Settings size={18} />
                                </span>
                                {!sidebarCollapsed && <span className="text-lg font-bold text-[var(--color-text-strong)]">Settings</span>}
                            </span>
                            {!sidebarCollapsed && (
                                <ChevronDown size={18} className={`text-[var(--color-text-soft)] transition-transform ${openMenus.settings ? 'rotate-180' : ''}`} />
                            )}
                        </button>
                        {openMenus.settings && !sidebarCollapsed && (
                            <div className="mt-4 space-y-1 overflow-hidden rounded-xl bg-[var(--color-surface-base)] p-1">
                                <div className="flex min-h-[48px] w-full items-center gap-3 rounded-xl border-l-4 border-l-transparent bg-[var(--color-surface-base)] px-4 py-3.5 text-left text-[var(--color-text-muted)]">
                                    <span className="text-base font-normal">Preferences, security and notification controls.</span>
                                </div>
                            </div>
                        )}
                    </div>

                    <button
                        type="button"
                        onClick={onLogout}
                        className={`mt-2 inline-flex min-h-[48px] w-full items-center gap-3 rounded-xl border border-[var(--color-border-default)] bg-[var(--color-surface-base)] px-4 py-3.5 text-left text-sm font-semibold text-[var(--color-text-main)] shadow-[0_4px_12px_rgba(15,23,42,0.04)] transition-all hover:scale-[1.02] hover:border-[var(--color-accent-200)] hover:bg-[var(--color-accent-50)] hover:text-[var(--color-accent-700)] ${sidebarCollapsed ? 'justify-center px-3' : ''}`}
                    >
                        <LogOut size={18} />
                        {!sidebarCollapsed && 'Log Out'}
                    </button>
                </div>
            </aside>
        </>
    );
}
