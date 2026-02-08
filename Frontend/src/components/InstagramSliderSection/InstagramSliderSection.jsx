import './InstagramSliderSection.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { InstagramImages,Icons } from '../../assets/assetsExporter';


const InstagramSwiperData = [
    { image: InstagramImages.insta1 },
    { image: InstagramImages.insta2 },
    { image: InstagramImages.insta3 },
    { image: InstagramImages.insta4 },
    { image: InstagramImages.insta5 },
    { image: InstagramImages.insta6 },
    { image: InstagramImages.insta7 },
    { image: InstagramImages.insta8 },
]


function InstagramSliderSection() {
    return <section className='instagram_slider_section ptb-100' id='instagram_slider_area'>
        <div className='container'>
            <div className='row align-items-center mb-45'>
                <div className="col-md-9">
                    <div className='main_area_section_title style-two mb-sm-15'>
                        <h2 className='position-relative mb-0'>
                            <i class="bx bxl-instagram-alt"></i>
                            #Love Torado On Instagram
                        </h2>
                    </div>
                </div>
                <div className="col-md-3 text-md-end">
                    <a href="/" class="js_link style-three">View Gallery <img src={Icons.upRightArrowBlack} alt="Icon" /></a>
                </div>
            </div>
        </div>
        <div className='container-fluid style-two'>
            <div className='row'>
                <div className="col-12 pe-lg-0">
                    <Swiper
                        className='instagram_slider'
                        slidesPerView={4.9}
                        spaceBetween={24}
                        loop={false}
                        speed={2000}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={
                            {
                                0:{
                                    slidesPerView:1.7,
                                    spaceBetween:15,
                                },
                                576:{
                                    slidesPerView:2,
                                },
                                767:{
                                    slidesPerView:2.7,
                                },
                                992:{
                                    slidesPerView:3.5,
                                },
                                1200:{
                                    slidesPerView:4.4,
                                },
                                1400:{
                                    slidesPerView:4.9,
                                }
                            }
                        }
                        modules={[Autoplay]}
                    >
                        {InstagramSwiperData.map((data, index) => (
                            <SwiperSlide key={index}>
                                <InstaCard data={data}></InstaCard>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    </section>;
}


function InstaCard({ data }) {
    return <div className='insta_card position-relative overflow-hidden'>
        <img src={data.image} alt="slider img" />
        <a href="/" className="position-absolute top-0 start-0 w-100 h-100"></a>
    </div>
}


export default InstagramSliderSection;