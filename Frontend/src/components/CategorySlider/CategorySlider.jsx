import './CategorySlider.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSwiperControls } from '../../hooks/useSwiperControl';

// ✅ centralized images
import { CategoryImages,Icons } from '../../assets/assetsExporter';

const categoryDisplayData = [
    { itemImage: CategoryImages.necklace, itemName: "Necklace", itemQty: "08" },
    { itemImage: CategoryImages.ring, itemName: "Ring", itemQty: "25" },
    { itemImage: CategoryImages.earrings, itemName: "Earrings", itemQty: "12" },
    { itemImage: CategoryImages.locket, itemName: "Locket", itemQty: "18" },
    { itemImage: CategoryImages.bracelets, itemName: "Bracelets", itemQty: "15" },
    { itemImage: CategoryImages.bundleSet, itemName: "Bundle Set", itemQty: "23" },
    { itemImage: CategoryImages.ring, itemName: "Accessories", itemQty: "14" },
];

function CategorySlider() {
    const { onSwiper, next, prev } = useSwiperControls();

    return (
        <div className="category_slider_wrap position-relative pb-100">
            <Swiper
                className="category_slider"
                slidesPerView={6}
                spaceBetween={20}
                speed={2000}
                grabCursor={true}
                loop={true}
                onSwiper={onSwiper}
                breakpoints={{
                    0: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    992: { slidesPerView: 4 },
                    1200: { slidesPerView: 5 },
                    1400: { slidesPerView: 6 },
                }}
            >
                {categoryDisplayData.map((data, index) => (
                    <SwiperSlide key={index}>
                        <div className="category_card text-center">
                            <div className="category_card_img rounded-circle position-relative">
                                <img
                                    src={data.itemImage}
                                    alt={data.itemName}
                                    className="rounded-circle"
                                />
                            </div>
                            <h3 className="fw-normal fs-20">
                                <a href="/">{data.itemName}</a>
                            </h3>
                            <span className="js_text_primary">
                                {data.itemQty} Product
                            </span>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="slider_btn">
                <button
                    className="prev_btn d-flex rounded-circle justify-content-center align-items-center"
                    onClick={prev}
                >
                    <img src={Icons.leftArrow} alt="Previous" />
                </button>

                <button
                    className="next_btn d-flex rounded-circle justify-content-center align-items-center"
                    onClick={next}
                >
                    <img src={Icons.rightArrow} alt="Next" />
                </button>
            </div>
        </div>
    );
}

export default CategorySlider;
