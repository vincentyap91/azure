import React, { useState } from 'react';
import { Gamepad2, Heart, Monitor, Trophy } from 'lucide-react';

const sportsSections = [
    { id: 'games', title: 'Favourite Games', emptyText: 'No favourite games' },
    { id: 'competitions', title: 'Favourite Competitions', emptyText: 'No favourite competitions' },
];

const casinoSections = [
    { id: 'live-casino', title: 'Live Casino', emptyText: 'No favourite games', icon: Monitor },
    { id: 'slots', title: 'Slots', emptyText: 'No favourite games', icon: Gamepad2 },
];

function EmptyCard({ text }) {
    return (
        <div className="surface-card flex min-h-[200px] flex-col items-center justify-center rounded-2xl p-8">
            <Heart size={48} className="text-[var(--color-text-soft)]" strokeWidth={1.5} />
            <p className="mt-4 text-sm font-medium text-[var(--color-text-muted)]">{text}</p>
        </div>
    );
}

export default function FavouritesPage() {
    const [category, setCategory] = useState('sports');

    return (
        <div className="page-container">
                <h1 className="page-title">Favourites</h1>

                <div className="mb-8 mt-8 flex justify-center">
                    <div className="inline-flex rounded-xl border border-[var(--color-border-default)] bg-[var(--color-surface-base)] p-1 shadow-[0_4px_12px_rgba(15,23,42,0.04)]">
                        <button
                            type="button"
                            onClick={() => setCategory('sports')}
                            className={`rounded-lg px-6 py-2.5 text-sm font-semibold transition ${
                                category === 'sports'
                                    ? 'bg-[var(--color-accent-600)] text-white shadow-sm'
                                    : 'text-[var(--color-text-muted)] hover:bg-[var(--color-surface-muted)]'
                            }`}
                        >
                            Sports
                        </button>
                        <button
                            type="button"
                            onClick={() => setCategory('casino')}
                            className={`rounded-lg px-6 py-2.5 text-sm font-semibold transition ${
                                category === 'casino'
                                    ? 'bg-[var(--color-accent-600)] text-white shadow-sm'
                                    : 'text-[var(--color-text-muted)] hover:bg-[var(--color-surface-muted)]'
                            }`}
                        >
                            Live Casino and Slots
                        </button>
                    </div>
                </div>

                <div className="space-y-8">
                    {category === 'sports' ? (
                        sportsSections.map(({ id, title, emptyText }) => (
                            <section key={id}>
                                <h2 className="mb-4 flex items-center gap-2 text-lg font-bold text-[var(--color-text-strong)]">
                                    <Trophy size={20} className="text-[var(--color-accent-600)]" />
                                    {title}
                                </h2>
                                <EmptyCard text={emptyText} />
                            </section>
                        ))
                    ) : (
                        casinoSections.map(({ id, title, emptyText, icon: Icon }) => (
                            <section key={id}>
                                <h2 className="mb-4 flex items-center gap-2 text-lg font-bold text-[var(--color-text-strong)]">
                                    <Icon size={20} className="text-[var(--color-accent-600)]" />
                                    {title}
                                </h2>
                                <EmptyCard text={emptyText} />
                            </section>
                        ))
                    )}
                </div>
        </div>
    );
}
