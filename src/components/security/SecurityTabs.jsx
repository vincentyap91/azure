import React from 'react';

/**
 * @param {'default' | 'equal-mobile'} [props.layout] — `equal-mobile`: single row of equal tabs on small screens (md+ matches default flex wrap).
 */
export default function SecurityTabs({ activeTab, onTabChange, tabs, layout = 'default' }) {
    const equalMobile = layout === 'equal-mobile';

    return (
        <div
            className={`rounded-xl border border-[var(--color-border-default)] bg-[var(--color-surface-base)] p-1 shadow-[var(--shadow-subtle)] ${
                equalMobile
                    ? 'grid grid-cols-3 gap-1 md:flex md:flex-wrap md:gap-2'
                    : 'flex flex-wrap gap-2'
            }`}
        >
            {tabs.map(({ id, label }) => (
                <button
                    key={id}
                    type="button"
                    onClick={() => onTabChange(id)}
                    className={`rounded-lg text-sm font-semibold transition ${
                        equalMobile
                            ? `flex min-h-[48px] w-full items-center justify-center px-2 py-2 leading-tight md:min-h-0 md:min-w-[140px] md:flex-1 md:px-4 md:py-2.5 ${
                                  activeTab === id
                                      ? 'btn-theme-primary shadow-sm'
                                      : 'bg-[var(--color-surface-muted)] text-[var(--color-text-muted)] hover:bg-[var(--color-accent-50)] hover:text-[var(--color-accent-600)]'
                              }`
                            : `flex-1 min-w-[140px] px-4 py-2.5 ${
                                  activeTab === id
                                      ? 'btn-theme-primary shadow-sm'
                                      : 'bg-[var(--color-surface-muted)] text-[var(--color-text-muted)] hover:bg-[var(--color-accent-50)] hover:text-[var(--color-accent-600)]'
                              }`
                    }`}
                >
                    {label}
                </button>
            ))}
        </div>
    );
}
