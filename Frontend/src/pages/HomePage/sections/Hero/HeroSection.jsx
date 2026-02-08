import './HeroSection.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Pagination, Autoplay } from 'swiper/modules';
import { HeroImages } from '../../../../assets/assetsExporter';
import { Icons } from '../../../../assets/assetsExporter';
import { useSwiperControls } from '../../../../hooks/useSwiperControl';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';


const heroSlides = [
    {
        id: 1,
        tag: 'The art of beauty',
        title: 'Essential Jewelry Collection',
        image: HeroImages.slide1,
    },
    {
        id: 2,
        tag: 'Grab your favourite',
        title: 'New Arrivals 15% OFF',
        image: HeroImages.slide2,
    },
    {
        id: 3,
        tag: 'The art of beauty',
        title: 'The Perfect Essential Style',
        image: HeroImages.slide3,
    },
];

function HeroSection() {

    const { onSwiper, next, prev } = useSwiperControls();

    return <section className='hero_section' id='hero_section_area'>
        <div className='container-fluid position-relative'>
            <Swiper
                modules={[EffectFade, Pagination, Autoplay]}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                autoHeight
                speed={1000}
                // autoplay={{ delay: 4000, disableOnInteraction: false }}
                pagination={{
                    type: 'fraction',
                    el: '.js-hero-pagination',
                }}
                onSwiper={onSwiper}
                loop={true}
                className="js-hero-slider"
            >
                {heroSlides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className="js-hero-slide-item">
                            <div className="row align-items-center">
                                <div className="col-md-6">
                                    <div className="hero-content">
                                        <span className="js_text_primary">{slide.tag}</span>
                                        <h1 className="fw-normal">{slide.title}</h1>
                                        <a href="#" className="js-btn style-two">Show Collection<img src={Icons.upRightArrow} alt="image"/></a>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="hero-img">
                                        <img src={slide.image} alt={slide.title} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}

                {/* Fraction pagination */}
                <div className="js-hero-pagination swiper-pagination-fraction"></div>
            </Swiper>
            <div className='slider_btn'>
                <button className='prev_btn d-flex rounded-circle justify-content-center align-items-center' onClick={prev}>
                    <img src={Icons.leftArrow} alt="icon btn" />
                </button>
                <button className='next_btn d-flex rounded-circle justify-content-center align-items-center' onClick={next}>
                    <img src={Icons.rightArrow} alt="icon btn" />
                </button>
            </div>
        </div>
    </section>;
}



function SupportOptions({dataObject})
{
    return <section className='support_options pt-100 pb-75'>
        <div className='container'>
            <div className='row justify-content-center'>
                {dataObject.map((item,index)=>(<div className='col-xl-3 col-lg-4 col-sm-6' key={index}>
                    <SupportPromoCard data={item}></SupportPromoCard>
                </div>))}
            </div>
        </div>
    </section>
}


function SupportPromoCard({data})
{
    return <div className='support_promo_card d-flex flex-wrap mb-25'>
        <div className='support_promo_icon position-relative'>
            <img src={data.icon} alt="icon img" />
        </div>
        <div className='support_promo_text'>
            <h3 className='fs-20 fw-normal'>{data.title}</h3>
            <p className='mb-0'>{data.description}</p>
        </div>
    </div>
}

export default HeroSection;
export {SupportOptions};