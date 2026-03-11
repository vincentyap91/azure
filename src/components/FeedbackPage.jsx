import React, { useState } from 'react';
import { ChevronDown, FolderPlus } from 'lucide-react';

const feedbackCategories = ['Game selection', 'Payment', 'Account', 'Technical', 'Other'];

export default function FeedbackPage() {
    const [category, setCategory] = useState('');
    const [comments, setComments] = useState('');
    const [file, setFile] = useState(null);
    const [categoryOpen, setCategoryOpen] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Placeholder - would submit to API
    };

    const handleFileChange = (e) => {
        const f = e.target.files?.[0];
        if (f && f.size <= 5 * 1024 * 1024) setFile(f);
    };

    return (
        <div className="page-container">
            <h1 className="page-title">Share Feedback</h1>

            <div className="mt-8 max-w-xl">
                <div className="surface-card rounded-2xl p-6 md:p-8">
                    <p className="mb-6 text-sm font-medium leading-relaxed text-[var(--color-text-muted)]">
                        Your insights fuel an exceptional gaming experience for all. Share your thoughts now.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <label className="block">
                            <span className="mb-2 block text-sm font-medium text-[var(--color-text-muted)]">Feedback Category</span>
                            <div className="relative">
                                <button
                                    type="button"
                                    onClick={() => setCategoryOpen((o) => !o)}
                                    className="flex h-12 w-full items-center justify-between rounded-xl border border-[var(--color-border-default)] bg-[var(--color-surface-base)] px-4 text-left text-sm font-medium text-[var(--color-text-strong)] shadow-[var(--shadow-subtle)] outline-none ring-[var(--color-accent-400)] focus:border-[var(--color-accent-400)] focus:ring-2 focus:ring-[rgb(96_165_250_/_0.2)]"
                                >
                                    <span className={category ? 'text-[var(--color-text-strong)]' : 'text-[var(--color-text-soft)]'}>
                                        {category || 'Select category'}
                                    </span>
                                    <ChevronDown size={18} className="shrink-0 text-[var(--color-text-soft)]" />
                                </button>
                                {categoryOpen && (
                                    <>
                                        <div
                                            className="fixed inset-0 z-10"
                                            aria-hidden="true"
                                            onClick={() => setCategoryOpen(false)}
                                        />
                                        <div className="absolute left-0 top-full z-20 mt-1 w-full min-w-[180px] rounded-xl border border-[var(--color-border-default)] bg-[var(--color-surface-base)] py-2 shadow-[var(--shadow-card-soft)]">
                                            {feedbackCategories.map((opt) => (
                                                <button
                                                    key={opt}
                                                    type="button"
                                                    onClick={() => {
                                                        setCategory(opt);
                                                        setCategoryOpen(false);
                                                    }}
                                                    className={`w-full px-4 py-2.5 text-left text-sm font-medium ${
                                                        category === opt
                                                            ? 'bg-[var(--color-accent-50)] text-[var(--color-accent-700)]'
                                                            : 'text-[var(--color-text-main)] hover:bg-[var(--color-surface-muted)]'
                                                    }`}
                                                >
                                                    {opt}
                                                </button>
                                            ))}
                                        </div>
                                    </>
                                )}
                            </div>
                        </label>

                        <label className="block">
                            <span className="mb-2 block text-sm font-medium text-[var(--color-text-muted)]">Comments</span>
                            <textarea
                                value={comments}
                                onChange={(e) => setComments(e.target.value)}
                                placeholder="Write your comments"
                                rows={5}
                                className="w-full rounded-xl border border-[var(--color-border-default)] bg-[var(--color-surface-base)] px-4 py-3 text-sm font-medium text-[var(--color-text-strong)] shadow-[var(--shadow-subtle)] outline-none placeholder:text-[var(--color-text-soft)] ring-[var(--color-accent-400)] focus:border-[var(--color-accent-400)] focus:ring-2 focus:ring-[rgb(96_165_250_/_0.2)]"
                            />
                        </label>

                        <label className="block">
                            <span className="mb-2 block text-sm font-medium text-[var(--color-text-muted)]">Attachments (Optional)</span>
                            <div
                                className="flex min-h-[140px] flex-col items-center justify-center rounded-2xl border-2 border-dashed border-[var(--color-border-default)] bg-[var(--color-surface-muted)] px-4 py-6 transition hover:border-[var(--color-accent-300)] hover:bg-[var(--color-accent-50)]"
                                onClick={() => document.getElementById('feedback-file').click()}
                                onKeyDown={(e) => e.key === 'Enter' && document.getElementById('feedback-file').click()}
                                role="button"
                                tabIndex={0}
                                aria-label="Upload file"
                            >
                                <input
                                    id="feedback-file"
                                    type="file"
                                    accept=".jpg,.jpeg,.png,.pdf"
                                    onChange={handleFileChange}
                                    className="sr-only"
                                />
                                <FolderPlus size={40} className="text-[var(--color-text-soft)]" />
                                <p className="mt-3 text-sm font-medium text-[var(--color-text-main)]">
                                    Drag and drop or click to choose files (Optional)
                                </p>
                                <p className="mt-1 text-xs text-[var(--color-text-muted)]">(JPG, PDF or PNG) File size limit: 5MB</p>
                                {file && <p className="mt-2 text-xs font-medium text-[var(--color-accent-600)]">{file.name}</p>}
                            </div>
                        </label>

                        <button
                            type="submit"
                            className="btn-theme-cta flex h-12 w-full items-center justify-center rounded-xl px-4 text-base font-bold tracking-wide shadow-[var(--shadow-cta)] transition hover:-translate-y-0.5 hover:brightness-105"
                        >
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
