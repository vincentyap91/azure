import { Gift, Headset, House, Plus, UserCircle2 } from 'lucide-react';
import { HISTORY_RECORD_PAGE_IDS } from '../../constants/historyRecordPages';

const ACCOUNT_ACTIVE_PAGES = new Set([
    'profile',
    'verification',
    'favourites',
    'my-bets',
    'loyalty-rewards',
    'feedback',
    'help-center',
    'security',
    'notifications',
    'rebate',
    'referral-commission',
    'deposit',
    'withdrawal',
    ...HISTORY_RECORD_PAGE_IDS,
]);

const TABS = [
    { id: 'home', label: 'Home', page: 'home', icon: House },
    { id: 'promotion', label: 'Promotion', page: 'promotion', icon: Gift },
    { id: 'deposit', label: 'Deposit', page: 'deposit', icon: Plus },
    { id: 'contact', label: 'Contact', action: 'liveChat', icon: Headset },
    { id: 'account', label: 'Account', page: 'profile', icon: UserCircle2 },
];

export default function MobileHomeBottomNav({ activePage, authUser, onNavigate, onLiveChatClick, onLoginClick }) {
    const isAccountActive = activePage && ACCOUNT_ACTIVE_PAGES.has(activePage);

    return (
        <nav
            aria-label="Home quick navigation"
            className="mobile-home-bottom-nav fixed inset-x-0 bottom-0 z-[85] border-t border-[rgb(168_226_251)] bg-[var(--color-surface-base)] shadow-[0_-4px_16px_rgba(15,23,42,0.08)] transition duration-200 md:hidden"
        >
            <div className="mx-auto flex w-full max-w-screen-2xl items-stretch pb-[max(0.375rem,env(safe-area-inset-bottom,0px))] pt-1">
                {TABS.map(({ id, label, page, action, icon: Icon }) => {
                    const isActive =
                        (id === 'home' && activePage === 'home') ||
                        (page && activePage === page) ||
                        (id === 'account' && isAccountActive);

                    if (id === 'deposit') {
                        return (
                            <div key={id} className="relative flex flex-1 flex-col items-center">
                                <button
                                    type="button"
                                    onClick={() => onNavigate?.('deposit')}
                                    className="absolute -top-7 flex h-14 w-14 items-center justify-center rounded-full border-4 border-white bg-[linear-gradient(180deg,var(--color-cta-strong-start)_0%,var(--color-cta-strong-end)_100%)] text-white transition active:scale-95"
                                    aria-label="Deposit"
                                >
                                    <Icon size={30} strokeWidth={3} />
                                </button>
                                <div className="mt-auto flex flex-col items-center pb-1">
                                    <span className={`text-[10px] font-medium tracking-tighter ${activePage === 'deposit' ? 'text-[var(--color-brand-secondary)]' : 'text-[var(--color-text-muted)]'
                                        }`}>
                                        {label}
                                    </span>
                                </div>
                            </div>
                        );
                    }

                    return (
                        <button
                            key={id}
                            type="button"
                            onClick={() => {
                                if (action === 'liveChat') {
                                    onLiveChatClick?.();
                                    return;
                                }
                                if (id === 'account' && !authUser) {
                                    onLoginClick?.();
                                    return;
                                }
                                if (page) {
                                    onNavigate?.(page);
                                }
                            }}
                            className={`flex min-h-11 min-w-0 flex-1 flex-col items-center justify-center gap-1 px-0.5 py-1.5 transition select-none active:opacity-85 ${isActive
                                ? 'text-[var(--color-brand-secondary)]'
                                : 'text-[var(--color-text-muted)]'
                                }`}
                        >
                            <div className="relative">
                                <Icon
                                    size={20}
                                    strokeWidth={isActive ? 2.5 : 2}
                                    className="shrink-0"
                                    aria-hidden
                                />
                                {id === 'account' && authUser?.notifications > 0 && (
                                    <span className="absolute -right-1.5 -top-1 flex h-4 min-w-[1rem] items-center justify-center rounded-full bg-[var(--color-danger-main)] px-0.5 text-[9px] font-bold text-white ring-2 ring-[var(--color-surface-base)]">
                                        {authUser.notifications}
                                    </span>
                                )}
                            </div>
                            <span
                                className={`w-full max-w-full truncate text-center text-[11px] leading-none ${isActive ? 'font-bold text-[var(--color-brand-secondary)]' : 'font-medium'
                                    }`}
                            >
                                {label}
                            </span>
                        </button>
                    );
                })}
            </div>
        </nav>
    );
}
