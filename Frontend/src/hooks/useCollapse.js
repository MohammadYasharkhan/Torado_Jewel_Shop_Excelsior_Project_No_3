// // useCollapse.js
// import { useRef, useState } from 'react';

// export function useCollapse(defaultOpen = true) {
//     const [open, setOpen] = useState(defaultOpen);
//     const ref = useRef(null);

//     const toggle = () => {
//         const el = ref.current;
//         if (!el) return;

//         if (open) {
//             // CLOSE
//             el.style.height = `${el.scrollHeight}px`;
//             requestAnimationFrame(() => {
//                 el.style.height = '0px';
//                 el.style.paddingTop = '0px';
//                 el.style.paddingBottom = '0px';
//                 el.style.marginTop = '0px';
//                 el.style.marginBottom = '0px';
//             });
//         } else {
//             // OPEN
//             el.style.height = `${el.scrollHeight}px`;
//             el.style.paddingTop = '';
//             el.style.paddingBottom = '';
//             el.style.marginTop = '';
//             el.style.marginBottom = '';
//         }

//         setOpen(prev => !prev);
//     };

//     return { ref, open, toggle };
// }



// useCollapse.js
import { useRef, useState } from 'react';

export function useCollapse(defaultOpen = true) {
    const [open, setOpen] = useState(defaultOpen);
    const ref = useRef(null);

    const toggle = () => {
        const el = ref.current;
        if (!el) return;

        // Ensure transition exists
        el.style.transition = 'height 0.5s ease';

        if (open) {
            // -------- CLOSE --------
            el.style.height = `${el.scrollHeight}px`;

            requestAnimationFrame(() => {
                el.style.height = '0px';
            });

            const onEnd = () => {
                el.style.display = 'none';
                el.removeEventListener('transitionend', onEnd);
            };

            el.addEventListener('transitionend', onEnd);
        } else {
            // -------- OPEN --------
            el.style.display = 'block';
            el.style.height = '0px';

            requestAnimationFrame(() => {
                el.style.height = `${el.scrollHeight}px`;
            });
        }

        setOpen(prev => !prev);
    };

    return { ref, open, toggle };
}
