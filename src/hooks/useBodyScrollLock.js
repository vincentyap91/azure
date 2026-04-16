import { useEffect } from 'react';

let activeBodyScrollLocks = 0;
let originalBodyOverflow = '';
let originalBodyPosition = '';
let originalBodyTop = '';
let originalBodyLeft = '';
let originalBodyRight = '';
let originalBodyWidth = '';
let lockedScrollY = 0;

function lockBodyScroll() {
    if (typeof document === 'undefined' || !document.body) {
        return () => {};
    }

    if (activeBodyScrollLocks === 0) {
        originalBodyOverflow = document.body.style.overflow;
        originalBodyPosition = document.body.style.position;
        originalBodyTop = document.body.style.top;
        originalBodyLeft = document.body.style.left;
        originalBodyRight = document.body.style.right;
        originalBodyWidth = document.body.style.width;
        lockedScrollY = window.scrollY || document.documentElement.scrollTop || 0;
    }

    activeBodyScrollLocks += 1;
    // Preserve scroll position on mobile (keyboard + overflow changes can "jump" the page)
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = `-${lockedScrollY}px`;
    document.body.style.left = '0';
    document.body.style.right = '0';
    document.body.style.width = '100%';

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
            document.body.style.position = originalBodyPosition;
            document.body.style.top = originalBodyTop;
            document.body.style.left = originalBodyLeft;
            document.body.style.right = originalBodyRight;
            document.body.style.width = originalBodyWidth;
            const restoreTo = lockedScrollY;
            lockedScrollY = 0;
            originalBodyPosition = '';
            originalBodyTop = '';
            originalBodyLeft = '';
            originalBodyRight = '';
            originalBodyWidth = '';
            window.scrollTo(0, restoreTo);
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
