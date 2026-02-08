import { useEffect } from 'react';

let openModals = 0;

export function useBodyLock(isOpen) {
    useEffect(() => {
        if (!isOpen) return;

        openModals++;

        if (openModals === 1) {
            const scrollbarWidth =
                window.innerWidth - document.documentElement.clientWidth;

            document.body.classList.add('modal-open');
            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = `${scrollbarWidth}px`;
        }

        return () => {
            openModals--;

            if (openModals === 0) {
                document.body.classList.remove('modal-open');
                document.body.style.overflow = '';
                document.body.style.paddingRight = '';
            }
        };
    }, [isOpen]);
}
