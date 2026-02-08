import { useRef } from 'react';

export function useSwiperControls() {
    const swiperRef = useRef(null);

    const onSwiper = (swiper) => {
        swiperRef.current = swiper;
    };

    const next = () => swiperRef.current?.slideNext();
    const prev = () => swiperRef.current?.slidePrev();

    return { onSwiper, next, prev };
}
