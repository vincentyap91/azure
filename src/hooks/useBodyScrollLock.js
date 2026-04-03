import { useEffect } from 'react';

let activeBodyScrollLocks = 0;
let originalBodyOverflow = '';

function lockBodyScroll() {
    if (typeof document === 'undefined' || !document.body) {
        return () => {};
    }

    if (activeBodyScrollLocks === 0) {
        originalBodyOverflow = document.body.style.overflow;
    }

    activeBodyScrollLocks += 1;
    document.body.style.overflow = 'hidden';

    let released = false;

    return () => {
        if (released || typeof document === 'undefined' || !document.body) {
            return;
        }

        released = true;
        activeBodyScrollLocks = Math.max(0, activeBodyScrollLocks - 1);

        if (activeBodyScrollLocks === 0) {
            document.body.style.overflow = originalBodyOverflow;
            originalBodyOverflow = '';
        }
    };
}

export default function useBodyScrollLock(locked) {
    useEffect(() => {
        if (!locked) {
            return undefined;
        }

        return lockBodyScroll();
    }, [locked]);
}
