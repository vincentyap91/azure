import React from 'react';

export default function SectionHeader({ title, icon, rightLink, rightLinkTo, onNavigate }) {
    const handleRightClick = () => {
        if (rightLinkTo && onNavigate) onNavigate(rightLinkTo);
    };

    return (
        <div className="section-header-theme mb-4 flex w-full items-end justify-between pb-1">
            <div className="flex items-center gap-2">
                <div className="flex items-center justify-center text-[var(--color-brand-primary)]">
                    {icon}
                </div>
                <h2 className="text-lg font-bold text-[var(--color-brand-primary)]">{title}</h2>
                <div className="flex gap-1 ml-4 mt-1 relative top-1">
                    <div className="h-5 w-4 skew-x-[-20deg] bg-[var(--color-brand-primary)]"></div>
                    <div className="h-5 w-2 skew-x-[-20deg] bg-[var(--color-brand-primary)]"></div>
                    <div className="h-5 w-1 skew-x-[-20deg] bg-[var(--color-brand-primary)]"></div>
                </div>
            </div>
            {rightLink && (
                rightLinkTo && onNavigate ? (
                    <button
                        type="button"
                        onClick={handleRightClick}
                        className="mb-1 text-xs font-medium text-[var(--color-brand-primary)] hover:underline"
                    >
                        {rightLink}
                    </button>
                ) : (
                    <a href="#" className="mb-1 text-xs text-[var(--color-brand-primary)] hover:underline">
                        {rightLink}
                    </a>
                )
            )}
        </div>
    );
}
