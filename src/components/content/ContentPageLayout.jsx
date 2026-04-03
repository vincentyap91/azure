import React from 'react';

export function ContentHighlightList({ items = [] }) {
    if (!items.length) return null;

    return (
        <div className="mt-4 flex max-w-[30rem] flex-wrap gap-2.5 md:mt-5 md:max-w-[33rem] md:gap-3">
            {items.map((item) => (
                <span
                    key={item}
                    className="inline-flex items-center rounded-full border border-[var(--color-accent-100)] bg-white/88 px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--color-accent-700)] shadow-[var(--shadow-subtle)] sm:px-4"
                >
                    {item}
                </span>
            ))}
        </div>
    );
}

export function ContentSectionCard({ title, description, icon: Icon, children, className = '' }) {
    return (
        <section className={`surface-card rounded-[24px] p-5 md:p-6 ${className}`.trim()}>
            <div className="flex items-start gap-4">
                {Icon ? (
                    <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[var(--color-accent-100)] bg-[var(--color-accent-50)] text-[var(--color-accent-600)] shadow-[var(--shadow-subtle)]">
                        <Icon size={22} strokeWidth={2.1} />
                    </span>
                ) : null}
                <div className="min-w-0 flex-1">
                    <h2 className="text-lg font-bold tracking-tight text-[var(--color-text-strong)] md:text-xl">{title}</h2>
                    {description ? (
                        <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)] md:text-[15px]">{description}</p>
                    ) : null}
                    {children ? <div className="mt-4">{children}</div> : null}
                </div>
            </div>
        </section>
    );
}

export default function ContentPageLayout({
    eyebrow,
    title,
    lead,
    highlights = [],
    heroVisualSrc = null,
    heroVisualAlt = '',
    children,
}) {
    return (
        <main className="w-full bg-[linear-gradient(180deg,var(--gradient-live-page-start)_0%,var(--gradient-live-page-mid)_42%,var(--gradient-live-page-end)_100%)] pb-14 md:pb-20">
            <div className="page-container pt-6 md:pt-8">
                <section className="surface-card soft-blue-panel relative overflow-hidden rounded-[28px] border-[var(--color-border-brand)] px-5 py-5 shadow-[var(--shadow-card-raised)] sm:px-6 sm:py-6 md:px-8 md:py-7 lg:px-9 lg:py-8">
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[radial-gradient(circle_at_top,rgba(96,165,250,0.16)_0%,transparent_72%)]" />
                    <div className="pointer-events-none absolute bottom-[-5rem] left-[-3rem] h-40 w-56 rounded-full bg-[radial-gradient(circle,rgba(224,235,255,0.72)_0%,rgba(224,235,255,0.26)_48%,rgba(224,235,255,0)_76%)] blur-3xl md:bottom-[-4rem] md:left-[-1rem] md:h-48 md:w-72" />
                    {heroVisualSrc ? (
                        <>
                            <div className="pointer-events-none absolute inset-y-0 right-0 w-[72%] sm:w-[63%] md:w-[47%] lg:w-[70%]">
                                <div className="absolute inset-0 overflow-hidden rounded-r-[28px]">
                                    <img
                                        src={heroVisualSrc}
                                        alt={heroVisualAlt}
                                        className="absolute inset-0 h-full w-full object-cover object-[84%_center] sm:object-[85%_center] md:object-[81%_center] lg:object-[80%_center]"
                                    />
                                </div>
                            </div>
                            <div className="pointer-events-none absolute inset-x-0 inset-y-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.99)_0%,rgba(255,255,255,0.96)_34%,rgba(255,255,255,0.82)_51%,rgba(255,255,255,0.32)_72%,rgba(255,255,255,0)_100%)] md:bg-[linear-gradient(90deg,rgba(255,255,255,0.99)_0%,rgba(255,255,255,0.96)_38%,rgba(255,255,255,0.74)_57%,rgba(255,255,255,0.20)_60%,rgba(255,255,255,0)_100%)]" />
                            <div
                                className="pointer-events-none absolute left-[22%] top-[4%] h-20 w-24 bg-[radial-gradient(circle,rgba(255,255,255,0.98)_0%,rgba(255,255,255,0.78)_42%,rgba(255,255,255,0.20)_62%,rgba(255,255,255,0)_92%)] blur-[44px] sm:left-[24%] sm:h-24 sm:w-28 md:left-[31%] md:top-[6%] md:h-28 md:w-32 lg:left-[34%]"
                            />
                        </>
                    ) : null}
                    <div className={`relative z-[1] flex min-h-[248px] items-center sm:min-h-[264px] md:min-h-[282px] lg:min-h-[300px] ${heroVisualSrc ? '' : ''}`}>
                        <div className={`${heroVisualSrc ? 'max-w-[28rem] pr-10 sm:max-w-[31rem] sm:pr-16 md:max-w-[57%] md:pr-8 lg:max-w-[54%]' : 'max-w-4xl'}`}>
                        {eyebrow ? (
                            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-accent-700)]">{eyebrow}</p>
                        ) : null}
                        <h1 className="page-title mt-2.5 text-[var(--color-text-strong)] md:mt-3 md:text-[2rem]">{title}</h1>
                        {lead ? (
                            <p className="mt-3 max-w-[34rem] text-sm leading-7 text-[var(--color-text-muted)] md:mt-4 md:max-w-[32rem] md:text-base">
                                {lead}
                            </p>
                        ) : null}
                        <ContentHighlightList items={highlights} />
                        </div>
                    </div>
                </section>

                <div className="mt-5 space-y-5 md:mt-7 md:space-y-6">{children}</div>
            </div>
        </main>
    );
}
