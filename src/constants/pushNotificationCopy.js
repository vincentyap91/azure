/**
 * Copy + variant for in-app / browser push notifications (Allow Push = on).
 * `formatMoney(amount)` uses MYR — align with cashier UI.
 */

export const PUSH_VARIANT = {
    success: 'success',
    warning: 'warning',
    error: 'error',
    info: 'info',
};

/** @typedef {'transaction' | 'auth' | 'security'} PushCategory */

export const PUSH_EVENT = {
    DEPOSIT_PENDING: 'deposit_pending',
    DEPOSIT_SUCCESS: 'deposit_success',
    DEPOSIT_FAILED: 'deposit_failed',
    WITHDRAWAL_PENDING: 'withdrawal_pending',
    WITHDRAWAL_SUCCESS: 'withdrawal_success',
    WITHDRAWAL_FAILED: 'withdrawal_failed',
    LOGIN_SUCCESS: 'login_success',
    LOGOUT: 'logout',
    REGISTER_SUCCESS: 'register_success',
    SESSION_TIMEOUT: 'session_timeout',
    AUTO_LOGOUT: 'auto_logout',
};

const money = (amount, currency = 'MYR') => {
    if (amount == null || amount === '' || Number.isNaN(Number(amount))) return `${currency} —`;
    const n = Number(amount);
    const s = n.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    return `${currency} ${s}`;
};

/**
 * @param {string} eventId
 * @param {object} [vars]
 * @param {string|number} [vars.amount]
 * @param {string} [vars.currency]
 * @param {string} [vars.userName]
 * @param {string} [vars.reason]
 * @returns {{ title: string, message: string, variant: string, category: PushCategory }}
 */
export function resolvePushNotification(eventId, vars = {}) {
    const c = vars.currency ?? 'MYR';
    const amt = money(vars.amount, c);

    const map = {
        [PUSH_EVENT.DEPOSIT_PENDING]: {
            title: 'Deposit pending',
            message: `We're processing your deposit of ${amt}. You'll get another alert when it's done.`,
            variant: PUSH_VARIANT.info,
            category: 'transaction',
        },
        [PUSH_EVENT.DEPOSIT_SUCCESS]: {
            title: 'Deposit successful',
            message: `Your deposit of ${amt} has been credited to your wallet.`,
            variant: PUSH_VARIANT.success,
            category: 'transaction',
        },
        [PUSH_EVENT.DEPOSIT_FAILED]: {
            title: 'Deposit unsuccessful',
            message: vars.reason || "We couldn't complete this deposit. Please try again or contact support.",
            variant: PUSH_VARIANT.error,
            category: 'transaction',
        },
        [PUSH_EVENT.WITHDRAWAL_PENDING]: {
            title: 'Withdrawal pending',
            message: `Your withdrawal of ${amt} is being processed. This may take a short while.`,
            variant: PUSH_VARIANT.info,
            category: 'transaction',
        },
        [PUSH_EVENT.WITHDRAWAL_SUCCESS]: {
            title: 'Withdrawal successful',
            message: `Your withdrawal of ${amt} has been sent to your chosen account.`,
            variant: PUSH_VARIANT.success,
            category: 'transaction',
        },
        [PUSH_EVENT.WITHDRAWAL_FAILED]: {
            title: 'Withdrawal unsuccessful',
            message: vars.reason || "We couldn't complete this withdrawal. Check your details or try again later.",
            variant: PUSH_VARIANT.error,
            category: 'transaction',
        },
        [PUSH_EVENT.LOGIN_SUCCESS]: {
            title: 'Signed in',
            message: vars.userName ? `Welcome back, ${vars.userName}.` : "Welcome back. You're signed in securely.",
            variant: PUSH_VARIANT.success,
            category: 'auth',
        },
        [PUSH_EVENT.LOGOUT]: {
            title: 'Signed out',
            message: 'You have been logged out. See you next time.',
            variant: PUSH_VARIANT.info,
            category: 'auth',
        },
        [PUSH_EVENT.REGISTER_SUCCESS]: {
            title: 'Registration successful',
            message: vars.userName
                ? `Account created for ${vars.userName}. You can sign in anytime.`
                : 'Your account was created. You can sign in anytime.',
            variant: PUSH_VARIANT.success,
            category: 'auth',
        },
        [PUSH_EVENT.SESSION_TIMEOUT]: {
            title: 'Session expired',
            message: 'Your session timed out. Please sign in again to continue.',
            variant: PUSH_VARIANT.warning,
            category: 'security',
        },
        [PUSH_EVENT.AUTO_LOGOUT]: {
            title: 'Signed out automatically',
            message: 'You were signed out after a period of inactivity to protect your account.',
            variant: PUSH_VARIANT.warning,
            category: 'security',
        },
    };

    const row = map[eventId];
    if (!row) {
        return {
            title: 'Notification',
            message: vars.message ?? 'Something changed on your account.',
            variant: PUSH_VARIANT.info,
            category: 'auth',
        };
    }
    return { ...row };
}
