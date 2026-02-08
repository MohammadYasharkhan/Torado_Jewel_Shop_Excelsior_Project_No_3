import HeroSection, { SupportOptions } from './sections/Hero/HeroSection';
import { SubscribeWithEmail } from '../../components/SmallCompo/SmallCompo';
import './HomePage.css';
import { Icons } from '../../assets/assetsExporter';
import Modal from '../../components/Modal/Modal';
import { useEffect, useState } from 'react';
import CookiesModal from '../../components/Modal/CookiesModal/CookiesModal';
import SubscribeModal from '../../components/Modal/SubscribeModal/SubscribeModal';
import ProductModal from '../../components/Modal/ProductModal/ProductModal';
import NewCollection from './sections/NewCollection/NewCollection';
import TestimonialSection from '../../components/Testimonial/TestimonialSection';
import FeatureProductSwiper from '../../components/Product/FeatureProductSwiper/FeatureProductSwiper';
import InstagramSliderSection from '../../components/InstagramSliderSection/InstagramSliderSection';

const serviceFeatures = [
    {
        id: 1,
        title: 'Free Shipping',
        description: 'What you want, delivered to where you want',
        icon: Icons.freeDelivery,
    },
    {
        id: 2,
        title: 'Support 24/7',
        description: '24/7 We are customer care best support',
        icon: Icons.support,
    },
    {
        id: 3,
        title: 'Flexible Payment',
        description: "Pay with the world's top payment methods",
        icon: Icons.paymentMethod,
    },
    {
        id: 4,
        title: '30 Days Return',
        description: 'There is a return facility within 30 days',
        icon: Icons.returnBox,
    },
];


function HomePage() {
    const [cookiesOpen, setCookiesOpen] = useState(false);
    const [subscribeOpen, setSubscribeOpen] = useState(false);
    const [productOpen, setProductOpen] = useState(false);

    useEffect(() => {
        const t1 = setTimeout(() => setCookiesOpen(true), 1500);
        const t2 = setTimeout(() => setSubscribeOpen(true), 5500);
        const t3 = setTimeout(() => setProductOpen(true), 8000);

        return () => {
            clearTimeout(t1);
            clearTimeout(t2);
            clearTimeout(t3);
        };
    }, []);


    return (
        <>
            <HeroSection />
            <SupportOptions dataObject={serviceFeatures} />
            <NewCollection></NewCollection>
            <TestimonialSection></TestimonialSection>
            <FeatureProductSwiper></FeatureProductSwiper>
            <InstagramSliderSection></InstagramSliderSection>
            <SubscribeWithEmail />

            {cookiesOpen && (
                <Modal
                    isOpen
                    modalId="cookies"
                    size="md"
                    zIndex={1050}
                    onClose={() => setCookiesOpen(false)}
                >
                    <CookiesModal />
                </Modal>
            )}

            {subscribeOpen && (
                <Modal
                    isOpen
                    modalId="subscribe"
                    size="lg"
                    zIndex={1040}
                    onClose={() => setSubscribeOpen(false)}
                >
                    <SubscribeModal />
                </Modal>
            )}

            {productOpen && (
                <Modal
                    isOpen
                    modalId="product"
                    size="md"
                    zIndex={1060}
                    onClose={() => setProductOpen(false)}
                >
                    <ProductModal />
                </Modal>
            )}
        </>
    );
}

export default HomePage;
