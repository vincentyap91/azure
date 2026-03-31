/** Optional OS notification when tab is in background and permission granted */

export function canUseNativeNotifications() {
    return typeof window !== 'undefined' && 'Notification' in window;
}

export function getNotificationPermission() {
    if (!canUseNativeNotifications()) return 'denied';
    return Notification.permission;
}

/**
 * Fire a native Notification when document is hidden and permission is granted.
 */
export function tryNativePush({ title, body, tag = 'riocity-account' }) {
    if (!canUseNativeNotifications() || Notification.permission !== 'granted') return;
    if (typeof document !== 'undefined' && document.visibilityState === 'visible') return;
    try {
        // eslint-disable-next-line no-new
        new Notification(title, { body, tag });
    } catch {
        /* ignore */
    }
}
