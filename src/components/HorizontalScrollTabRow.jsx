import React from 'react';

/**
 * Single-row pill/tab controls on narrow viewports: horizontal scroll with hidden scrollbar.
 * From `sm` and up, children lay out with wrapping (default) or pass `wrapBreakpoint` to customize.
 *
 * @param {Object} props
 * @param {import('react').ReactNode} props.children — tab buttons (use `shrink-0 whitespace-nowrap` on each)
 * @param {string} [props.className] — outer scroll container
 * @param {string} [props.innerClassName] — inner flex row
 * @param {'sm'|'md'|'lg'} [props.wrapBreakpoint='sm'] — viewport at which wrapping replaces horizontal scroll
 * @param {boolean} [props.scrollSnap=true] — subtle snap to each tab while dragging (narrow only)
 * @param {import('react').HTMLAttributes<HTMLDivElement>} [props.innerListProps] — spread onto the inner flex row (e.g. `role="tablist"` so tabs are direct children for a11y)
 */
export default function HorizontalScrollTabRow({
    children,
    className = '',
    innerClassName = '',
    wrapBreakpoint = 'sm',
    scrollSnap = true,
    innerListProps = undefined,
}) {
    const wrap = wrapBreakpoint === 'md' ? 'md:flex-wrap' : wrapBreakpoint === 'lg' ? 'lg:flex-wrap' : 'sm:flex-wrap';
    const scroll = wrapBreakpoint === 'md' ? 'md:overflow-visible' : wrapBreakpoint === 'lg' ? 'lg:overflow-visible' : 'sm:overflow-visible';
    const mx = wrapBreakpoint === 'md' ? 'md:mx-0 md:px-0' : wrapBreakpoint === 'lg' ? 'lg:mx-0 lg:px-0' : 'sm:mx-0 sm:px-0';
    const snapOuter =
        scrollSnap &&
        (wrapBreakpoint === 'md'
            ? 'max-md:snap-x max-md:snap-mandatory'
            : wrapBreakpoint === 'lg'
              ? 'max-lg:snap-x max-lg:snap-mandatory'
              : 'max-sm:snap-x max-sm:snap-mandatory');

    const paddingEnd =
        wrapBreakpoint === 'md' ? 'max-md:pr-3' : wrapBreakpoint === 'lg' ? 'max-lg:pr-3' : 'max-sm:pr-3';

    const { className: innerListClassName, ...restInnerList } = innerListProps ?? {};

    return (
        <div
            className={[
                '-mx-1 overflow-x-auto overflow-y-hidden px-1',
                '[scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden',
                scroll,
                mx,
                snapOuter,
                'overscroll-x-contain',
                className,
            ]
                .filter(Boolean)
                .join(' ')}
            style={{ WebkitOverflowScrolling: 'touch' }}
        >
            <div
                role={innerListProps ? undefined : 'presentation'}
                {...restInnerList}
                className={[
                    'flex min-w-0 flex-nowrap gap-2.5',
                    wrap,
                    wrapBreakpoint === 'md' ? 'max-md:gap-2.5 md:gap-2' : wrapBreakpoint === 'lg' ? 'max-lg:gap-2.5 lg:gap-2' : 'max-sm:gap-2.5 sm:gap-2',
                    paddingEnd,
                    innerListClassName,
                    innerClassName,
                ]
                    .filter(Boolean)
                    .join(' ')}
            >
                {children}
            </div>
        </div>
    );
}

/**
 * Call after selecting a tab so it stays visible inside a horizontal scroll row.
 * @param {HTMLElement | null} element
 */
export function scrollTabIntoViewSmooth(element) {
    if (!element) return;
    requestAnimationFrame(() => {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center',
        });
    });
}
