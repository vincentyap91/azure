import React, { useState } from 'react';
import { ChevronDown, Eye, EyeOff, Lock, Mail, Phone, Send, UserRound } from 'lucide-react';
import promoImage from '../assets/register-banner.jpg';

export default function RegisterPage({ onLoginClick }) {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <main className="w-full bg-[linear-gradient(180deg,#e8f4ff_0%,#f3f7ff_45%,#ecf3ff_100%)] py-6 md:py-10">
            <section className="mx-auto w-full max-w-[1200px] px-4 md:px-8">
                <div className="overflow-hidden rounded-2xl border border-[#cfe0f9] bg-white shadow-[0_18px_35px_rgba(10,42,97,0.14)]">
                    <div className="grid lg:grid-cols-[1.05fr_1fr]">
                        <article className="relative text-white">
                            <div className="overflow-hidden rounded-l-xl">
                                <img src={promoImage} alt="Member benefit" className="h-full w-full object-cover" />
                            </div>
                        </article>

                        <article className="bg-[linear-gradient(180deg,#e8f4ff_0%,#d9ecff_52%,#c9e5ff_100%)] p-4 text-white md:p-6">
                            <div className="mx-auto w-full max-w-[420px]">
                                <button
                                    type="button"
                                    className="mx-auto inline-flex h-10 items-center gap-2 rounded-md border border-[#98c6ee] bg-[#1f5da8] px-4 text-sm font-semibold text-white transition hover:brightness-110"
                                >
                                    <Send size={14} fill="currentColor" className="-rotate-12" />
                                    Telegram
                                </button>

                                <div className="mt-4 flex items-center gap-3 text-sm text-[#5f7396]">
                                    <div className="h-px flex-1 bg-[#abcceb]" />
                                    <span>or</span>
                                    <div className="h-px flex-1 bg-[#abcceb]" />
                                </div>

                                <form className="mt-4 space-y-3">
                                    <label className="block">
                                        <span className="sr-only">Username</span>
                                        <div className="flex h-11 items-center gap-2 rounded-md border border-[#9fc9ee] bg-white/80 px-3 shadow-[inset_0_1px_2px_rgba(31,93,168,0.08)]">
                                            <UserRound size={16} className="text-[#4f7db7]" />
                                            <input
                                                placeholder="Username *"
                                                className="w-full bg-transparent text-sm text-[#23406a] outline-none placeholder:text-[#6f85a8]"
                                            />
                                        </div>
                                    </label>

                                    <label className="block">
                                        <span className="sr-only">New Password</span>
                                        <div className="flex h-11 items-center gap-2 rounded-md border border-[#9fc9ee] bg-white/80 px-3 shadow-[inset_0_1px_2px_rgba(31,93,168,0.08)]">
                                            <Lock size={16} className="text-[#4f7db7]" />
                                            <input
                                                type={showPassword ? 'text' : 'password'}
                                                placeholder="New Password *"
                                                className="w-full bg-transparent text-sm text-[#23406a] outline-none placeholder:text-[#6f85a8]"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowPassword((value) => !value)}
                                                className="text-[#6f85a8] hover:text-[#23406a]"
                                                aria-label="Toggle password visibility"
                                            >
                                                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                                            </button>
                                        </div>
                                    </label>

                                    <div className="grid grid-cols-[84px_1fr] gap-2">
                                        <label className="block">
                                            <span className="sr-only">Country code</span>
                                            <div className="flex h-11 items-center justify-between rounded-md border border-[#9fc9ee] bg-white/80 px-3 text-sm text-[#23406a] shadow-[inset_0_1px_2px_rgba(31,93,168,0.08)]">
                                                +60
                                                <ChevronDown size={14} />
                                            </div>
                                        </label>
                                        <label className="block">
                                            <span className="sr-only">Telephone number</span>
                                            <div className="flex h-11 items-center gap-2 rounded-md border border-[#9fc9ee] bg-white/80 px-3 shadow-[inset_0_1px_2px_rgba(31,93,168,0.08)]">
                                                <Phone size={16} className="text-[#4f7db7]" />
                                                <input
                                                    placeholder="Telephone Number *"
                                                    className="w-full bg-transparent text-sm text-[#23406a] outline-none placeholder:text-[#6f85a8]"
                                                />
                                            </div>
                                        </label>
                                    </div>

                                    <label className="block">
                                        <span className="sr-only">Full Name</span>
                                        <div className="flex h-11 items-center gap-2 rounded-md border border-[#9fc9ee] bg-white/80 px-3 shadow-[inset_0_1px_2px_rgba(31,93,168,0.08)]">
                                            <UserRound size={16} className="text-[#4f7db7]" />
                                            <input
                                                placeholder="Full Name *"
                                                className="w-full bg-transparent text-sm text-[#23406a] outline-none placeholder:text-[#6f85a8]"
                                            />
                                        </div>
                                    </label>

                                    <label className="block">
                                        <span className="sr-only">Email</span>
                                        <div className="flex h-11 items-center gap-2 rounded-md border border-[#9fc9ee] bg-white/80 px-3 shadow-[inset_0_1px_2px_rgba(31,93,168,0.08)]">
                                            <Mail size={16} className="text-[#4f7db7]" />
                                            <input
                                                placeholder="Email *"
                                                className="w-full bg-transparent text-sm text-[#23406a] outline-none placeholder:text-[#6f85a8]"
                                            />
                                        </div>
                                    </label>

                                    <label className="block">
                                        <span className="sr-only">Currency</span>
                                        <div className="flex h-11 items-center justify-between rounded-md border border-[#9fc9ee] bg-white/80 px-3 text-sm text-[#23406a] shadow-[inset_0_1px_2px_rgba(31,93,168,0.08)]">
                                            Malaysian Ringgit (MYR)
                                            <ChevronDown size={14} />
                                        </div>
                                    </label>

                                    <label className="block">
                                        <span className="sr-only">Affiliate ID</span>
                                        <div className="flex h-11 items-center justify-between rounded-md border border-[#9fc9ee] bg-white/80 px-3 text-sm text-[#23406a] shadow-[inset_0_1px_2px_rgba(31,93,168,0.08)]">
                                            Affiliate ID / Referral (Optional)
                                            <ChevronDown size={14} />
                                        </div>
                                    </label>

                                    <button
                                        type="button"
                                        className="h-11 w-full rounded-md bg-[linear-gradient(180deg,#ffb255_0%,#ff8e24_100%)] text-base font-black tracking-wide text-white shadow-[0_10px_16px_rgba(255,142,36,0.3)] transition hover:brightness-105"
                                    >
                                        REGISTER
                                    </button>
                                </form>

                                <p className="mt-3 text-xs text-[#50698d]">
                                    By clicking the <span className="font-bold text-[#ffb968]">REGISTER</span> button, I acknowledge that I am above 18 years old and have read and accepted your Terms &amp; Conditions.
                                </p>
                                <p className="mt-3 text-sm text-[#50698d]">
                                    Already have account?{' '}
                                    <button type="button" onClick={() => onLoginClick?.()} className="font-bold text-[#ffb968] hover:underline">
                                        LOGIN
                                    </button>
                                </p>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
        </main>
    );
}
