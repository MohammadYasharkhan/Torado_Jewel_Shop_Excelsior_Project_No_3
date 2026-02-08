import './AboutUsPage.css';
import BreadCrumbSection from '../../components/BreadCrumbSection/BreadCrumbSection';
import { SubscribeWithEmail } from '../../components/SmallCompo/SmallCompo';
import InstagramSliderSection from '../../components/InstagramSliderSection/InstagramSliderSection';
import TestimonialSection from '../../components/Testimonial/TestimonialSection';
import ShopByCategory from '../../components/ShopByCategory/ShopByCategory';
import { TeamImages,BrandImages } from '../../assets/assetsExporter';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const teamData = [
    {
        name: "Catherine Hilley",
        role: "CEO & Founder",
        image: TeamImages.team1
    },
    {
        name: "Sheryl Killian",
        role: "Fashion Design",
        image: TeamImages.team2
    },
    {
        name: "Shanna Thomas",
        role: "Photographer",
        image: TeamImages.team3
    }
];

const brands = [
    BrandImages.brand1,
    BrandImages.brand2,
    BrandImages.brand3,
    BrandImages.brand4,
    BrandImages.brand5,
    BrandImages.brand6,
];

function AboutUsPage() {
    return <>
        <BreadCrumbSection title={"About Us"}></BreadCrumbSection>
        <ShopByCategory variant='two'></ShopByCategory>
        <div className='container pb-75'>
            <div className="main_area_section_title text-center mb-40">
                <h2 className="fw-normal mb-0">Our Founder</h2>
            </div>
            <div className='row justify-content-center'>
                {teamData.map((data, index) => (
                    <div className='col-xl-4 col-md-6' key={index}>
                        <div class="js-team-card mb-25">
                            <div class="js-team-img d-block mb-25">
                                <img src={data.image} alt="Team" />
                            </div>
                            <div class="js-team-info">
                                <h3 class="fs-20 fw-normal mb-3">{data.name}</h3>
                                <span class="js_text_primary">{data.role}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

            <TestimonialSection variant='two'></TestimonialSection>
        <div className='container pt-100'>
            <div className='main_area_section_title text-center mb-40'>
                <h2 class="fw-normal mb-0">Popular Brands</h2>
            </div>
            <div className='pb-100'>

            <Swiper
                modules={[Autoplay]}
                loop={true}
                speed={9000}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                }}
                slidesPerView={5}
                spaceBetween={10}
                grabCursor={true}
                breakpoints={{
                    0: { slidesPerView: 1.4 },
                    576: { slidesPerView: 2.6 },
                    767:{slidesPerView: 3.2},
                    992: { slidesPerView: 4 },
                    1200: { slidesPerView: 4.4 },
                    1400:{slidesPerView:6},
                }}
                wrapperClass="align-items-center"
                className="js-brand-slider swiper"
                >
                {brands.map((brand, index) => (
                    <SwiperSlide key={index}>
                        <div className="brand-logo">
                            <img src={brand} alt="Brand" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            </div>

        </div>
        <InstagramSliderSection></InstagramSliderSection>
        <SubscribeWithEmail></SubscribeWithEmail>
    </>
}

export default AboutUsPage;