import React from 'react';
import {
    AlertTriangle,
    ArrowDownToLine,
    ArrowUpFromLine,
    CheckCircle2,
    Info,
    Loader2,
    LogIn,
    LogOut,
    ShieldAlert,
    UserPlus,
    X,
    XCircle,
} from 'lucide-react';
import { PUSH_VARIANT } from '../../constants/pushNotificationCopy';

const DURATION_MS_DEFAULT = 5200;
const DURATION_MS_AUTH = 4200;

const variantStyles = {
    [PUSH_VARIANT.success]: {
        iconWrap: 'bg-[rgb(220_252_231)] text-[var(--color-success-main)]',
        bar: 'bg-[var(--color-success-main)]',
        border: 'border-[var(--color-success-main)]/35',
    },
    [PUSH_VARIANT.error]: {
        iconWrap: 'bg-[rgb(254_226_226)] text-[var(--color-danger-main)]',
        bar: 'bg-[var(--color-danger-main)]',
        border: 'border-[rgb(248_113_113_/_0.35)]',
    },
    [PUSH_VARIANT.warning]: {
        iconWrap: 'bg-[rgb(254_249_195)] text-[var(--color-hot-main)]',
        bar: 'bg-[var(--color-hot-main)]',
        border: 'border-[rgb(250_204_21_/_0.4)]',
    },
    [PUSH_VARIANT.info]: {
        iconWrap: 'bg-[var(--color-accent-50)] text-[var(--color-accent-600)]',
        bar: 'bg-[var(--color-accent-500)]',
        border: 'border-[var(--color-border-brand)]',
    },
};

function pickIcon({ variant, category, showPending, eventId }) {
    if (showPending) return Loader2;
    if (eventId?.includes('deposit')) return ArrowDownToLine;
    if (eventId?.includes('withdrawal')) return ArrowUpFromLine;
    if (eventId?.includes('login')) return LogIn;
    if (eventId === 'logout') return LogOut;
    if (eventId?.includes('register')) return UserPlus;
    if (eventId === 'session_timeout' || eventId === 'auto_logout') return ShieldAlert;
    if (variant === PUSH_VARIANT.success) return CheckCircle2;
    if (variant === PUSH_VARIANT.error) return XCircle;
    if (variant === PUSH_VARIANT.warning) return AlertTriangle;
    if (category === 'transaction') return Info;
    return Info;
}

/**
 * Reusable slide-in toast: title + message, variant-driven accents. Matches surface-card / brand UI.
 */
export function PushNotificationToast({
    variant = PUSH_VARIANT.info,
    category = 'auth',
    title,
    message,
    eventId = '',
    showPending = false,
    statusLabel,
    durationMs = DURATION_MS_DEFAULT,
    onDismiss,
}) {
    const vs = variantStyles[variant] ?? variantStyles[PUSH_VARIANT.info];
    const Icon = pickIcon({ variant, category, showPending, eventId });

    return (
        <div
            role="status"
            aria-live="polite"
            className={`push-notification-toast-enter pointer-events-auto w-full overflow-hidden rounded-2xl border bg-[var(--color-surface-base)] shadow-[0_12px_40px_rgba(15,23,42,0.18)] ${vs.border}`}
        >
            <div className="flex gap-3 p-4">
                <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${vs.iconWrap}`}>
                    {showPending ? (
                        <Icon size={22} strokeWidth={2.25} className="animate-spin" aria-hidden />
                    ) : (
                        <Icon size={22} strokeWidth={2.25} aria-hidden />
                    )}
                </div>
                <div className="min-w-0 flex-1 pt-0.5">
                    <div className="flex flex-wrap items-center gap-2">
                        <p className="text-sm font-extrabold text-[var(--color-text-strong)]">{title}</p>
                        {statusLabel ? (
                            <span
                                className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide ${
                                    showPending
                                        ? 'bg-[var(--color-accent-100)] text-[var(--color-accent-700)]'
                                        : 'bg-[var(--color-surface-muted)] text-[var(--color-text-muted)]'
                                }`}
                            >
                                {showPending ? (
                                    <Loader2 size={12} className="animate-spin" aria-hidden />
                                ) : null}
                                {statusLabel}
                            </span>
                        ) : null}
                    </div>
                    <p className="mt-1 text-xs leading-relaxed text-[var(--color-text-muted)]">{message}</p>
                </div>
                <button
                    type="button"
                    onClick={onDismiss}
                    className="shrink-0 -mr-1 -mt-1 inline-flex h-8 w-8 items-center justify-center rounded-lg text-[var(--color-text-muted)] transition hover:bg-[var(--color-surface-muted)] hover:text-[var(--color-text-strong)]"
                    aria-label="Dismiss notification"
                >
                    <X size={16} />
                </button>
            </div>
            <div className="h-1 w-full overflow-hidden bg-[var(--color-surface-muted)]">
                <div
                    className={`h-full origin-left ${vs.bar}`}
                    style={{
                        animation: `push-toast-progress ${durationMs}ms linear forwards`,
                    }}
                />
            </div>
            <style>
                {`
                  @keyframes push-notification-enter {
                    from { transform: translateX(110%); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                  }
                  @keyframes push-toast-progress {
                    from { transform: scaleX(1); }
                    to { transform: scaleX(0); }
                  }
                  .push-notification-toast-enter {
                    animation: push-notification-enter 0.35s ease-out forwards;
                  }
                `}
            </style>
        </div>
    );
}

export const PUSH_TOAST_DURATION_DEFAULT_MS = DURATION_MS_DEFAULT;
export const PUSH_TOAST_DURATION_AUTH_MS = DURATION_MS_AUTH;
export const ACTION_NOTIFICATION_DURATION_MS = DURATION_MS_DEFAULT;
