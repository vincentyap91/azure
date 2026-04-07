import React, { useCallback, useState } from 'react';
import { ChevronDown, Eye, EyeOff, Lock, Mail, Phone, UserRound } from 'lucide-react';
import promoImage from '../assets/register-banner.jpg';
import promoImageMobile from '../assets/register-banner-mobile.jpg';
import { PAGE_BANNER_IMG } from '../constants/pageBannerClasses';
import VerifyPhoneNumberStep from './verification/VerifyPhoneNumberStep';
import RegistrationCompletedModal from './verification/RegistrationCompletedModal';

function WhatsAppIcon({ size = 14, className }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={size}
            height={size}
            fill="currentColor"
            className={className}
            aria-hidden
        >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
    );
}

export default function RegisterPage({ onLoginClick, onRegisterSuccess, onContactCustomerService }) {
    const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState('');
    const [phone, setPhone] = useState('');
    const [phase, setPhase] = useState('form');
    const [verifyKey, setVerifyKey] = useState(0);

    const handleRegister = (e) => {
        e.preventDefault();
        setVerifyKey((k) => k + 1);
        setPhase('verify');
    };

    const handleVerified = useCallback(() => {
        setPhase('success');
    }, []);

    const handleRegistrationFlowComplete = useCallback(() => {
        onRegisterSuccess?.(username.trim() || 'Member');
    }, [username, onRegisterSuccess]);

    return (
        <main className="w-full bg-[linear-gradient(180deg,var(--gradient-register-page-start)_0%,var(--gradient-register-page-mid)_45%,var(--gradient-register-page-end)_100%)] py-6 md:py-10">
            <section className="page-container">
                <div className="overflow-hidden rounded-2xl border border-[var(--color-border-brand)] bg-[var(--color-surface-base)] shadow-[var(--shadow-register-card)]">
                    <div className="grid lg:grid-cols-[1.05fr_1fr]">
                        <article className="relative max-md:h-[135px] max-md:overflow-hidden text-white">
                            <div className="h-full min-h-0 overflow-hidden rounded-t-2xl md:rounded-l-xl">
                                <picture className="contents">
                                    <source media="(max-width: 767px)" srcSet={promoImageMobile} />
                                    <img
                                        src={promoImage}
                                        alt="Member benefit"
                                        className={PAGE_BANNER_IMG}
                                        decoding="async"
                                    />
                                </picture>
                            </div>
                        </article>

                        <article className="bg-[linear-gradient(180deg,var(--gradient-register-page-start)_0%,var(--gradient-register-panel-mid)_52%,var(--gradient-register-panel-end)_100%)] p-4 text-white md:p-6">
                            <div className="mx-auto w-full max-w-[420px]">
                                {phase === 'success' ? (
                                    <div className="flex min-h-[260px] flex-col items-center justify-center gap-2 px-2 py-10 text-center sm:min-h-[300px]">
                                        <p className="text-sm font-semibold text-[rgb(35_64_106)]">Finishing your registration…</p>
                                    </div>
                                ) : phase === 'verify' ? (
                                    <VerifyPhoneNumberStep
                                        key={verifyKey}
                                        phoneRaw={phone}
                                        onVerified={handleVerified}
                                        onBack={() => setPhase('form')}
                                        onContactCustomerService={onContactCustomerService}
                                    />
                                ) : (
                                    <>
                                <form className="space-y-3" onSubmit={handleRegister} noValidate>
                                    <label className="block">
                                        <span className="sr-only">Username</span>
                                        <div className="flex h-11 items-center gap-2 rounded-md border border-[rgb(159_201_238)] bg-[var(--color-surface-base-80)] px-3 shadow-[var(--inset-panel)]">
                                            <UserRound size={16} className="text-[rgb(79_125_183)]" />
                                            <input
                                                name="username"
                                                value={username}
                                                onChange={(ev) => setUsername(ev.target.value)}
                                                placeholder="Username *"
                                                autoComplete="username"
                                                className="w-full bg-transparent text-sm text-[rgb(35_64_106)] outline-none placeholder:text-[rgb(111_133_168)]"
                                            />
                                        </div>
                                    </label>

                                    <label className="block">
                                        <span className="sr-only">New Password</span>
                                        <div className="flex h-11 items-center gap-2 rounded-md border border-[rgb(159_201_238)] bg-[var(--color-surface-base-80)] px-3 shadow-[var(--inset-panel)]">
                                            <Lock size={16} className="text-[rgb(79_125_183)]" />
                                            <input
                                                type={showPassword ? 'text' : 'password'}
                                                placeholder="New Password *"
                                                className="w-full bg-transparent text-sm text-[rgb(35_64_106)] outline-none placeholder:text-[rgb(111_133_168)]"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowPassword((value) => !value)}
                                                className="text-[rgb(111_133_168)] hover:text-[rgb(35_64_106)]"
                                                aria-label="Toggle password visibility"
                                            >
                                                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                                            </button>
                                        </div>
                                    </label>

                                    <div className="grid grid-cols-[84px_1fr] gap-2">
                                        <label className="block">
                                            <span className="sr-only">Country code</span>
                                            <div className="flex h-11 items-center justify-between rounded-md border border-[rgb(159_201_238)] bg-[var(--color-surface-base-80)] px-3 text-sm text-[rgb(35_64_106)] shadow-[var(--inset-panel)]">
                                                +60
                                                <ChevronDown size={14} />
                                            </div>
                                        </label>
                                        <label className="block">
                                            <span className="sr-only">Telephone number</span>
                                            <div className="flex h-11 items-center gap-2 rounded-md border border-[rgb(159_201_238)] bg-[var(--color-surface-base-80)] px-3 shadow-[var(--inset-panel)]">
                                                <Phone size={16} className="text-[rgb(79_125_183)]" />
                                                <input
                                                    placeholder="Telephone Number *"
                                                    value={phone}
                                                    onChange={(ev) => setPhone(ev.target.value)}
                                                    inputMode="tel"
                                                    autoComplete="tel"
                                                    className="w-full bg-transparent text-sm text-[rgb(35_64_106)] outline-none placeholder:text-[rgb(111_133_168)]"
                                                />
                                            </div>
                                        </label>
                                    </div>

                                    <label className="block">
                                        <span className="sr-only">Full Name</span>
                                        <div className="flex h-11 items-center gap-2 rounded-md border border-[rgb(159_201_238)] bg-[var(--color-surface-base-80)] px-3 shadow-[var(--inset-panel)]">
                                            <UserRound size={16} className="text-[rgb(79_125_183)]" />
                                            <input
                                                placeholder="Full Name *"
                                                className="w-full bg-transparent text-sm text-[rgb(35_64_106)] outline-none placeholder:text-[rgb(111_133_168)]"
                                            />
                                        </div>
                                    </label>

                                    <label className="block">
                                        <span className="sr-only">Email</span>
                                        <div className="flex h-11 items-center gap-2 rounded-md border border-[rgb(159_201_238)] bg-[var(--color-surface-base-80)] px-3 shadow-[var(--inset-panel)]">
                                            <Mail size={16} className="text-[rgb(79_125_183)]" />
                                            <input
                                                placeholder="Email *"
                                                className="w-full bg-transparent text-sm text-[rgb(35_64_106)] outline-none placeholder:text-[rgb(111_133_168)]"
                                            />
                                        </div>
                                    </label>

                                    <label className="block">
                                        <span className="sr-only">Currency</span>
                                        <div className="flex h-11 items-center justify-between rounded-md border border-[rgb(159_201_238)] bg-[var(--color-surface-base-80)] px-3 text-sm text-[rgb(35_64_106)] shadow-[var(--inset-panel)]">
                                            Malaysian Ringgit (MYR)
                                            <ChevronDown size={14} />
                                        </div>
                                    </label>

                                    <label className="block">
                                        <span className="sr-only">Affiliate ID</span>
                                        <div className="flex h-11 items-center justify-between rounded-md border border-[rgb(159_201_238)] bg-[var(--color-surface-base-80)] px-3 text-sm text-[rgb(35_64_106)] shadow-[var(--inset-panel)]">
                                            Affiliate ID / Referral (Optional)
                                            <ChevronDown size={14} />
                                        </div>
                                    </label>

                                    <button
                                        type="submit"
                                        className="btn-theme-auth h-11 w-full rounded-md text-base font-bold tracking-wide transition hover:brightness-105"
                                    >
                                        REGISTER
                                    </button>
                                </form>

                                <p className="mt-3 text-xs text-[rgb(80_105_141)]">
                                    By clicking the <span className="font-bold text-[rgb(255_185_104)]">REGISTER</span> button, I acknowledge that I am above 18 years old and have read and accepted your Terms &amp; Conditions.
                                </p>
                                <p className="mt-3 text-sm text-[rgb(80_105_141)]">
                                    Already have account?{' '}
                                    <button type="button" onClick={() => onLoginClick?.()} className="font-bold text-[rgb(255_185_104)] hover:underline">
                                        LOGIN
                                    </button>
                                </p>

                                <div className="mt-5 flex w-full flex-col items-center border-t border-[rgb(171_204_235)] pt-5 text-center">
                                    <h2 className="text-xs font-medium leading-snug tracking-tight text-[rgb(111_133_168)] sm:text-sm">
                                        Register with WhatsApp
                                    </h2>
                                    <button
                                        type="button"
                                        className="mt-3 inline-flex h-10 items-center gap-2 rounded-md border border-[#1da851] bg-[#25D366] px-4 text-sm font-semibold text-white shadow-[0_1px_2px_rgb(0_0_0_/_10%)] transition hover:bg-[#20bd5a] hover:shadow-[0_2px_5px_rgb(37_211_102_/_28%)] active:brightness-[0.97]"
                                    >
                                        <WhatsAppIcon size={16} className="shrink-0 opacity-95" />
                                        WhatsApp
                                    </button>
                                </div>
                                    </>
                                )}
                            </div>
                        </article>
                    </div>
                </div>
            </section>
            {phase === 'success' ? (
                <RegistrationCompletedModal onComplete={handleRegistrationFlowComplete} />
            ) : null}
        </main>
    );
}

