import './FeatureProductSwiper.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSwiperControls } from '../../../hooks/useSwiperControl';
import { ProductImages,Icons } from '../../../assets/assetsExporter';
import ProductCard from '../ProductCard/ProductCard';

const productCardData = [
    { name: "New Fashion Earring", price: 100, image: ProductImages.product1, is_sale_available: true },
    { name: "Natural Stone Bracelet",price: 200, image: ProductImages.product2, is_sale_available: false },
    { name: "Engagement Lady Ring", price: 150, image: ProductImages.product3, is_sale_available: true },
    { name: "High Quality Necklace",price: 350, image: ProductImages.product4, is_sale_available: false },
    { name: "New Fashion Earring", price: 100, image: ProductImages.product5, is_sale_available: false },
]


function FeatureProductSwiper({title="Feature Products",padding="pt-100"}) {
    const { onSwiper, next, prev } = useSwiperControls();
    return <section className='product_swiper_section' id='product_swiper_area'>
        <div className={`container ${padding}`}>
            <div className='main_area_section_title mb-45 text-center'>
                <h2 className='mb-0 fw-normal'>{title}</h2>
            </div>
            <div className='product_slider_wrap position-relative z-1'>
                <Swiper className='product_slider_one'
                    slidesPerView={4}
                    spaceBetween={20}
                    speed={2000}
                    grabCursor={true} 
                    loop={true}
                    onSwiper={onSwiper}
                    breakpoints={
                        {
                            0:{
                                slidesPerView:1,
                            },
                            578:{
                                slidesPerView:2,
                            },
                            992:{
                                slidesPerView:3,
                            },
                            1200:{
                                slidesPerView:4,
                            }
                        }
                    }
                >
                    {productCardData.map((data,index)=>(
                        <SwiperSlide key={index}>
                            <ProductCard variant='one' data={data}></ProductCard>
                        </SwiperSlide>
                    ))}
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
    </section>;
}

export default FeatureProductSwiper;