import React, { useState } from 'react';
import { ChevronDown, Search } from 'lucide-react';

const mainTabs = [
    { id: 'faq', label: 'FAQ' },
    { id: 'tc', label: 'T&C' },
    { id: 'bet-rules', label: 'Bet Rules & Regulations' },
];

const subCategoryTabs = [
    { id: 'general', label: 'General' },
    { id: 'account', label: 'My Account' },
    { id: 'payment', label: 'Payment' },
    { id: 'promotions', label: 'Promotions' },
    { id: 'fair-play', label: 'Fair Play' },
    { id: 'games', label: 'Games Category' },
    { id: 'technical', label: 'Technical' },
];

const faqItems = [
    { id: 1, question: 'How do I create an account?', answer: 'Click the Register button in the top right corner, fill in your details, and verify your email. You can start playing within minutes.' },
    { id: 2, question: 'What payment methods are accepted?', answer: 'We accept major e-wallets, bank transfers, and credit/debit cards. All transactions are encrypted and secure.' },
    { id: 3, question: 'How do I withdraw my winnings?', answer: 'Go to your account dashboard, select Withdraw, choose your preferred method, and follow the verification steps. Withdrawals are typically processed within 24–48 hours.' },
    { id: 4, question: 'Is my personal information secure?', answer: 'Yes. We use industry-standard encryption and never share your data with third parties. Your account is protected by secure login and optional 2FA.' },
    { id: 5, question: 'How can I contact customer support?', answer: 'Use our 24/7 Live Chat from any page, or email support@riocity.com. Our team typically responds within minutes.' },
];

function AccordionItem({ index, question, answer, isOpen, onToggle }) {
    return (
        <div className="surface-card overflow-hidden rounded-2xl">
            <button
                type="button"
                onClick={onToggle}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition hover:bg-[var(--color-surface-muted)]"
            >
                <span className="text-base font-bold text-[var(--color-text-strong)]">
                    {index}. {question}
                </span>
                <ChevronDown
                    size={20}
                    className={`shrink-0 text-[var(--color-text-muted)] transition-transform ${isOpen ? 'rotate-180' : ''}`}
                />
            </button>
            {isOpen && (
                <div className="border-t border-[var(--color-border-default)] px-5 py-4">
                    <p className="text-sm font-medium leading-relaxed text-[var(--color-text-muted)]">{answer}</p>
                </div>
            )}
        </div>
    );
}

export default function HelpCenterPage() {
    const [mainTab, setMainTab] = useState('faq');
    const [subTab, setSubTab] = useState('general');
    const [searchQuery, setSearchQuery] = useState('');
    const [expandedId, setExpandedId] = useState(null);

    const toggleExpand = (id) => {
        setExpandedId((current) => (current === id ? null : id));
    };

    const filteredFaq = searchQuery.trim()
        ? faqItems.filter(
              (item) =>
                  item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  item.answer.toLowerCase().includes(searchQuery.toLowerCase())
          )
        : faqItems;

    return (
        <div className="page-container">
            <h1 className="page-title">Help Center</h1>

            <div className="mt-8 space-y-6">
                <label className="relative block">
                    <span className="sr-only">Search help topics</span>
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search for help..."
                        className="h-12 w-full rounded-xl border border-[var(--color-border-default)] bg-[var(--color-surface-base)] pl-4 pr-12 text-sm text-[var(--color-text-strong)] shadow-[var(--shadow-subtle)] outline-none placeholder:text-[var(--color-text-soft)] ring-[var(--color-accent-400)] focus:border-[var(--color-accent-400)] focus:ring-2 focus:ring-[rgb(96_165_250_/_0.2)]"
                    />
                    <Search size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--color-text-soft)]" />
                </label>

                <div className="flex flex-wrap gap-2 rounded-xl border border-[var(--color-border-default)] bg-[var(--color-surface-base)] p-1 shadow-[var(--shadow-subtle)]">
                    {mainTabs.map(({ id, label }) => (
                        <button
                            key={id}
                            type="button"
                            onClick={() => setMainTab(id)}
                            className={`rounded-lg px-4 py-2.5 text-sm font-semibold transition ${
                                mainTab === id
                                    ? 'btn-theme-primary shadow-sm'
                                    : 'bg-[var(--color-surface-muted)] text-[var(--color-text-muted)] hover:bg-[var(--color-accent-50)] hover:text-[var(--color-accent-600)]'
                            }`}
                        >
                            {label}
                        </button>
                    ))}
                </div>

                <div className="flex flex-wrap gap-2">
                    {subCategoryTabs.map(({ id, label }) => (
                        <button
                            key={id}
                            type="button"
                            onClick={() => setSubTab(id)}
                            className={`rounded-xl px-4 py-2.5 text-sm font-medium transition ${
                                subTab === id
                                    ? 'border-2 border-[var(--color-accent-500)] bg-[var(--color-surface-base)] text-[var(--color-accent-600)] shadow-sm'
                                    : 'border border-transparent bg-[var(--color-surface-muted)] text-[var(--color-text-muted)] hover:border-[var(--color-accent-200)] hover:bg-[var(--color-accent-50)] hover:text-[var(--color-accent-600)]'
                            }`}
                        >
                            {label}
                        </button>
                    ))}
                </div>

                <div className="space-y-3">
                    {mainTab === 'faq' && filteredFaq.length > 0 &&
                        filteredFaq.map((item, idx) => (
                            <AccordionItem
                                key={item.id}
                                index={idx + 1}
                                question={item.question}
                                answer={item.answer}
                                isOpen={expandedId === item.id}
                                onToggle={() => toggleExpand(item.id)}
                            />
                        ))}
                    {mainTab === 'faq' && filteredFaq.length === 0 && (
                        <div className="surface-card rounded-2xl p-8 text-center">
                            <p className="text-sm font-medium text-[var(--color-text-muted)]">No results found for &quot;{searchQuery}&quot;</p>
                        </div>
                    )}
                    {mainTab === 'tc' && (
                        <div className="surface-card rounded-2xl p-6 md:p-8">
                            <p className="text-sm font-medium leading-relaxed text-[var(--color-text-muted)]">
                                Terms and Conditions content will appear here. This section covers account rules, user responsibilities, and platform policies.
                            </p>
                        </div>
                    )}
                    {mainTab === 'bet-rules' && (
                        <div className="surface-card rounded-2xl p-6 md:p-8">
                            <p className="text-sm font-medium leading-relaxed text-[var(--color-text-muted)]">
                                Bet Rules and Regulations content will appear here. This section covers betting limits, settlement rules, and dispute resolution.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
