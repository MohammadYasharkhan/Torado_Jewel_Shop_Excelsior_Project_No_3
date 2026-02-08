import './TestimonialSection.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSwiperControls } from '../../hooks/useSwiperControl';
import { EffectFade, Autoplay } from 'swiper/modules';
import { Icons } from '../../assets/assetsExporter';

const testimonialCardData = [
    { infoPara: "Proin eget tortor risus. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem." },
    { infoPara: "Elementum id enim Proin eget tortor risus. Quisque velit nisi, pretium ut lacinia in. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem." },
    { infoPara: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.Proin eget tortor risus. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem." }
];

function TestimonialSection({ variant="one" }) {
    return <section className='testimonial_section' id='testimonial_area'>
        {variant=="one" && (
            <>
            <div className='main_area_section_title mb-45 text-center px-3'>
                <h2 className='mb-0'>Our Happy Clients</h2>
            </div>
            <TestimonialSectionStyleOne></TestimonialSectionStyleOne>
            </>
        )}

        {variant=="two" && (<TestimonialSectionStyleTwo></TestimonialSectionStyleTwo>)}
    </section>
}


function TestimonialSectionStyleOne() {
    const { onSwiper, next, prev } = useSwiperControls();
    return <div className='testimonial_section_sub_wrap position-relative z-1'>
        <div className='testimonial_bg bg-f start-0 top-0'></div>
        <div className='container ptb-100'>
            <div className="row">
                <div className="offset-lg-3 col-lg-9 offset-md-1 col-md-11 ps-xxl-3 pe-xxl-0">
                    <div className="testimonial_slider_wrap position-relative z-1">
                        <Swiper
                            className="collection_slider"
                            modules={[EffectFade, Autoplay]}
                            effect="fade"
                            fadeEffect={{ crossFade: true }}
                            speed={1000}
                            loop={true}
                            onSwiper={onSwiper}>
                            {testimonialCardData.map((slide, index) => (<SwiperSlide key={index}>
                                <TestimonialCard data={slide}></TestimonialCard>
                            </SwiperSlide>))}
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
                </div>
            </div>
        </div>
    </div>;
}



function TestimonialSectionStyleTwo() {
    const { onSwiper, next, prev } = useSwiperControls();
    return <div className='testimonial_section_sub_wrap style-two position-relative z-1'>
        <div className='testimonial_bg bg-f end-0 top-0'></div>
        <div className='container'>
            <div className='main_area_section_title mb-40'>
                <h2 className='fw-normal mb-0'>Our Happy Clients</h2>
            </div>
            <div className="row">
                <div className="col-lg-9 col-md-11 pe-xxl-3 pb-100">
                    <div className="testimonial_slider_wrap position-relative z-1">
                        <Swiper
                            className="collection_slider"
                            modules={[EffectFade, Autoplay]}
                            effect="fade"
                            fadeEffect={{ crossFade: true }}
                            speed={1000}
                            loop={true}
                            onSwiper={onSwiper}>
                            {testimonialCardData.map((slide, index) => (<SwiperSlide key={index}>
                                <TestimonialCard data={slide}></TestimonialCard>
                            </SwiperSlide>))}
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
                </div>
            </div>
        </div>
    </div>;
}

function TestimonialCard({ data }) {
    return <div className='testimonial_card text-center'>
        <img src={Icons.quote} alt="icon image" className='d-block mx-auto' />
        <p className='js_text-title'>{data.infoPara}</p>
        <h5 className='fw-normal js_text_primary'>Douglas Robledo</h5>
        <span>Manager</span>
    </div>
}

export default TestimonialSection;