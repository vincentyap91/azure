import React, { useEffect, useState } from 'react';
import { Lock, Send, UserRound, X } from 'lucide-react';

export default function LoginModal({ open, onClose, logoText = 'LOGO', onRegisterClick, onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        if (!open) {
            return undefined;
        }

        const handleEscape = (event) => {
            if (event.key === 'Escape') {
                onClose?.();
            }
        };

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', handleEscape);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener('keydown', handleEscape);
        };
    }, [open, onClose]);

    if (!open) {
        return null;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onLogin?.(username.trim());
    };

    return (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6">
            <button
                type="button"
                aria-label="Close login modal"
                onClick={onClose}
                className="absolute inset-0 bg-black/70 backdrop-blur-[1px]"
            />

            <section
                role="dialog"
                aria-modal="true"
                aria-label="Login"
                className="relative z-[1] w-full max-w-[600px] rounded-2xl border border-[#cfe0f9] bg-[linear-gradient(180deg,#e8f4ff_0%,#d9ecff_52%,#c9e5ff_100%)] px-5 pb-6 pt-8 shadow-[0_24px_50px_rgba(10,42,97,0.22)] sm:px-8 sm:pb-8 sm:pt-10"
                onClick={(event) => event.stopPropagation()}
            >
                <button
                    type="button"
                    aria-label="Close"
                    onClick={onClose}
                    className="absolute right-4 top-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#1f5da8] text-white transition hover:brightness-95"
                >
                    <X size={18} strokeWidth={3} />
                </button>

                <h1 className="text-center text-2xl sm:text-2xl font-black tracking-tight text-[#123f80]">
                    {logoText}
                </h1>

                <form onSubmit={handleSubmit} className="mx-auto mt-6 w-full max-w-[420px]">
                    <label className="flex items-center gap-3 rounded-md border border-[#9fc9ee] bg-white/80 px-3 py-2 shadow-[inset_0_1px_2px_rgba(31,93,168,0.08)]">
                        <span className="inline-flex h-8 w-9 items-center justify-center rounded-full bg-[#1f5da8] text-white">
                            <UserRound size={16} />
                        </span>
                        <input
                            value={username}
                            onChange={(event) => setUsername(event.target.value)}
                            placeholder="Username"
                            className="w-full bg-transparent text-lg font-semibold text-[#23406a] outline-none placeholder:text-[#6f85a8]"
                            autoComplete="username"
                        />
                    </label>

                    <div className="mt-4">
                        <label className="flex items-center gap-3 rounded-md border border-[#9fc9ee] bg-white/80 px-3 py-2 shadow-[inset_0_1px_2px_rgba(31,93,168,0.08)]">
                            <span className="inline-flex h-8 w-9 items-center justify-center rounded-full bg-[#1f5da8] text-white">
                                <Lock size={16} />
                            </span>
                            <input
                                type="password"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                                placeholder="Password"
                                className="w-full bg-transparent text-lg font-semibold text-[#23406a] outline-none placeholder:text-[#6f85a8]"
                                autoComplete="current-password"
                            />
                        </label>
                        <div className="mt-2 flex items-center justify-between gap-3">
                            <button type="button" className="text-sm sm:text-base font-semibold text-[#355b8f] hover:underline">
                                Forgot Password?
                            </button>

                            <button
                                type="submit"
                                className="h-10 min-w-[100px] rounded-md bg-[linear-gradient(180deg,#ffb255_0%,#ff8e24_100%)] px-5 text-sm sm:text-base font-bold tracking-[0.03em] text-white shadow-[0_10px_16px_rgba(255,142,36,0.2)] transition hover:brightness-105"
                            >
                                LOGIN
                            </button>
                        </div>
                    </div>
                </form>

                <div className="mx-auto mt-7 flex w-full max-w-[420px] items-center gap-4 text-base sm:text-lg font-medium text-[#5f7396]">
                    <div className="h-px flex-1 bg-[#abcceb]" />
                    <span>or</span>
                    <div className="h-px flex-1 bg-[#abcceb]" />
                </div>

                <div className="mt-6 flex justify-center">
                    <button
                        type="button"
                        className="inline-flex h-12 items-center gap-3 rounded-lg border border-[#98c6ee] bg-[#1f5da8] px-7 text-base sm:text-lg font-semibold text-white transition hover:brightness-110"
                    >
                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#37aee2] text-white">
                            <Send size={18} fill="currentColor" className="-rotate-12" />
                        </span>
                        Telegram
                    </button>
                </div>

                <p className="mx-auto mt-8 max-w-[480px] text-center text-sm sm:text-base font-medium text-[#50698d]">
                    Don't have an account yet? Click{' '}
                    <button
                        type="button"
                        onClick={() => {
                            onClose?.();
                            onRegisterClick?.();
                        }}
                        className="text-[#ff5200] hover:underline"
                    >
                        here
                    </button>{' '}
                    to register now!
                </p>

                <div className="mx-auto mt-4 h-px w-full max-w-[520px] bg-[#abcceb]" />

                <p className="mx-auto mt-4 max-w-[520px] text-center text-sm sm:text-base font-medium leading-[1.35] text-[#50698d]">
                    If you encounter any issues while logging in,
                    <br />
                    Please contact our{' '}
                    <button type="button" className="text-[#ff5200] hover:underline">
                        Customer Service
                    </button>{' '}
                    for further assistance
                </p>
            </section>
        </div>
    );
}
