import React, { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';
import {
    PushNotificationToast,
    PUSH_TOAST_DURATION_AUTH_MS,
    PUSH_TOAST_DURATION_DEFAULT_MS,
} from '../components/notifications/PushNotificationToast';
import { PUSH_EVENT, resolvePushNotification } from '../constants/pushNotificationCopy';
import { isPushNotificationsEnabled } from '../utils/notificationPreferences';
import { tryNativePush } from '../utils/browserNativeNotification';
import { recordPushNotificationEntry } from '../utils/recentNotifications';

const noop = () => {};

const ActionNotificationsContext = createContext({
    showPushNotification: noop,
    dismissPushNotification: noop,
    showTransactionNotification: noop,
});

/**
 * In-app toasts + optional native Notification when tab hidden. Respects “Allow Push Notifications”.
 */
export function ActionNotificationsProvider({ children }) {
    const [payload, setPayload] = useState(null);
    const timeoutRef = useRef(undefined);

    const dismiss = useCallback(() => {
        if (timeoutRef.current != null) {
            window.clearTimeout(timeoutRef.current);
            timeoutRef.current = undefined;
        }
        setPayload(null);
    }, []);

    useEffect(
        () => () => {
            if (timeoutRef.current != null) window.clearTimeout(timeoutRef.current);
        },
        []
    );

    const showPushNotification = useCallback((raw) => {
        const event = typeof raw === 'string' ? raw : raw?.event;
        if (!event) return;

        const vars = typeof raw === 'object' && raw !== null ? raw : {};
        const { title, message, variant, category } = resolvePushNotification(event, vars);

        const durationMs =
            category === 'auth' || category === 'security'
                ? PUSH_TOAST_DURATION_AUTH_MS
                : PUSH_TOAST_DURATION_DEFAULT_MS;

        const showPending = Boolean(vars.pending);
        const statusLabel = vars.statusLabel ?? (showPending ? 'Pending' : undefined);

        const recordRecent =
            event.startsWith('deposit') ||
            event.startsWith('withdrawal') ||
            event === PUSH_EVENT.SESSION_TIMEOUT ||
            event === PUSH_EVENT.AUTO_LOGOUT;

        if (recordRecent) {
            recordPushNotificationEntry({
                title,
                message,
                status: showPending ? 'ongoing' : variant,
                kind: event.includes('deposit') ? 'deposit' : event.includes('withdrawal') ? 'withdrawal' : 'push',
            });
        }

        if (!isPushNotificationsEnabled()) return;

        tryNativePush({ title, body: message });

        if (timeoutRef.current != null) window.clearTimeout(timeoutRef.current);

        setPayload({
            id: `${Date.now()}-${event}`,
            event,
            title,
            message,
            variant,
            category,
            showPending,
            statusLabel,
            durationMs,
        });

        timeoutRef.current = window.setTimeout(() => {
            setPayload(null);
            timeoutRef.current = undefined;
        }, durationMs);
    }, []);

    /** Back-compat: deposit / withdrawal modal submitted (maps to pending). Pass `amount` when known. */
    const showTransactionNotification = useCallback(
        ({ kind, amount }) => {
            if (!kind || (kind !== 'deposit' && kind !== 'withdrawal')) return;
            const event = kind === 'deposit' ? PUSH_EVENT.DEPOSIT_PENDING : PUSH_EVENT.WITHDRAWAL_PENDING;
            showPushNotification({ event, pending: true, amount });
        },
        [showPushNotification]
    );

    return (
        <ActionNotificationsContext.Provider
            value={{ showPushNotification, dismissPushNotification: dismiss, showTransactionNotification }}
        >
            {children}
            {payload ? (
                <div
                    className="pointer-events-none fixed left-4 right-4 top-[calc(113px+8px)] z-[320] sm:left-auto sm:right-4 sm:w-[min(100vw-2rem,20rem)]"
                    aria-hidden={false}
                >
                    <PushNotificationToast
                        key={payload.id}
                        eventId={payload.event}
                        variant={payload.variant}
                        category={payload.category}
                        title={payload.title}
                        message={payload.message}
                        showPending={payload.showPending}
                        statusLabel={payload.statusLabel}
                        durationMs={payload.durationMs}
                        onDismiss={dismiss}
                    />
                </div>
            ) : null}
        </ActionNotificationsContext.Provider>
    );
}

export function useActionNotifications() {
    return useContext(ActionNotificationsContext);
}
