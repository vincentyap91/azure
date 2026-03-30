/**
 * Referral “Game commission rate” rows by category (How it works accordion).
 * Shape matches ReferralGameCommissionTable.
 */

export const DEFAULT_COMMISSION_LEVEL_LABELS = ['Downlines L1', 'Downlines L2', 'Downlines L3'];

export const REFERRAL_GAME_COMMISSION_ROWS = {
    'live-casino': [
        { id: 'pp-live', provider: 'Pragmatic Play Casino', l1: '0.7', l2: '0.6', l3: '0.4' },
        { id: 'sexy', provider: 'Sexy Baccarat', l1: '0.7', l2: '0.6', l3: '0.4' },
        { id: 'sa', provider: 'SA Gaming', l1: '0.7', l2: '0.6', l3: '0.4' },
        { id: 'wcasino', provider: 'WCasino', l1: '0.7', l2: '0.6', l3: '0.4' },
        { id: 'afb', provider: 'AFB Gaming Casino', l1: '0.7', l2: '0.6', l3: '0.4' },
        { id: 'bg', provider: 'Big Gaming', l1: '0.7', l2: '0.6', l3: '0.4' },
        { id: 'ct855', provider: 'CT855', l1: '0.7', l2: '0.6', l3: '0.4' },
        { id: 'yeebet', provider: 'Yee Bet', l1: '0.8', l2: '0.6', l3: '0.4' },
        { id: 'allbet', provider: 'AllBet', l1: '0.7', l2: '0.6', l3: '0.4' },
        { id: 'wm', provider: 'WM Casino', l1: '0', l2: '0', l3: '0' },
        { id: 'pt', provider: 'PlayTech Live', l1: '0', l2: '0', l3: '0' },
        { id: 'vgb', provider: 'Very Good Bet', l1: '0', l2: '0', l3: '0' },
        { id: 'marbula', provider: 'Marbula2', l1: '0', l2: '0', l3: '0' },
        { id: 'gp', provider: 'GamePlay Casino', l1: '0', l2: '0', l3: '0' },
        { id: 'ezugi', provider: 'Ezugi', l1: '0', l2: '0', l3: '0' },
        { id: 'afb2', provider: 'AFB Casino', l1: '0', l2: '0', l3: '0' },
        { id: 'dg', provider: 'Dream Gaming', l1: '0', l2: '0', l3: '0' },
    ],
    slots: [
        { id: 'pps', provider: 'Pragmatic Play', l1: '0.6', l2: '0.5', l3: '0.35' },
        { id: 'pg', provider: 'PG Soft', l1: '0.55', l2: '0.45', l3: '0.3' },
        { id: 'jili', provider: 'JILI', l1: '0.5', l2: '0.4', l3: '0.28' },
        { id: 'habanero', provider: 'Habanero', l1: '0.5', l2: '0.4', l3: '0.28' },
    ],
    'fish-hunt': [
        { id: 'jili-fish', provider: 'JILI Fishing', l1: '0.45', l2: '0.38', l3: '0.25' },
        { id: 'fa', provider: 'FA Chai', l1: '0.42', l2: '0.35', l3: '0.22' },
    ],
    sports: [
        { id: 'sb', provider: 'Sportsbook (main)', l1: '0.35', l2: '0.28', l3: '0.18' },
        { id: 'tf', provider: 'TF Gaming', l1: '0.32', l2: '0.26', l3: '0.16' },
    ],
    lottery: [
        { id: 'lotto', provider: 'Platform lottery', l1: '0.25', l2: '0.2', l3: '0.12' },
    ],
    all: [],
    esport: [
        { id: 'es-main', provider: 'E-Sports (main)', l1: '0.3', l2: '0.24', l3: '0.15' },
    ],
    poker: [
        { id: 'pk-main', provider: 'Poker (main)', l1: '0.28', l2: '0.22', l3: '0.14' },
    ],
    crash: [
        { id: 'crash-main', provider: 'Crash / instant', l1: '0.32', l2: '0.26', l3: '0.17' },
    ],
};
