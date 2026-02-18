import './ProductCard.css';
import { Icons, ProductImages } from '../../../assets/assetsExporter';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSwiperControls } from '../../../hooks/useSwiperControl';
import { Thumbs } from "swiper/modules";
import FsLightbox from "fslightbox-react";
import { Link } from "react-router-dom";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import { addToWishlistAPI } from '../../../apiCall/wishlist.api';
import { addToCartAPI } from '../../../apiCall/cart.api';

const IMAGE_BASE_URL = "http://localhost:4000";

const singleProductImages = [
    ProductImages.single.single1,
    ProductImages.single.single2,
    ProductImages.single.single3,
    ProductImages.single.single4,
];


function ProductCard({ data, variant = "one", subVariant = "one", mb = "mb-25", fontSize = "fs-20", saleEnd = false }) {
    switch (variant) {
        case "two":
            return <CardStyleTwo data={data} />;
        case "three":
            return <CardStyleThree data={data} />;
        case "four":
            return <CardStyleFour data={data} subVariant={subVariant} saleEnd={saleEnd} />;
        case "five":
            return <CardStyleFive data={data}></CardStyleFive>
        default:
            return <CardStyleOne data={data} mb={mb} fontSize={fontSize} />;
    }
}


function CardStyleOne({ data, mb, fontSize }) {

    const { isLoggedIn } = useAuth();
    const navigate = useNavigate();
    const [showPopup, setShowPopup] = useState(false);
    const [respData,setRespData] = useState(null);
    const [status, setStatus] = useState("idle");
    const [error, setError] = useState("");

    const handleWishlistClick = async (e) => {
        e.preventDefault();

        console.log(isLoggedIn);
        if (!isLoggedIn) {
            setShowPopup(true);  // ← Show popup if not logged in
            console.log(showPopup);
            return;
        }

        // TODO: Add to wishlist API call
        console.log('Adding to wishlist:', data.id);

        try
        {
            setStatus("loading");
            const res = await addToWishlistAPI({ productId: data.id });
            setRespData(res);
            console.log(res);
            setStatus("Success");
            navigate("/wishlist");
        }
        catch(err)
        {
            console.error(err);
            setStatus("error");
            setError(err.message || "Something went wrong");
        }
    };


    const handleCartClick = async (e) => {
        e.preventDefault();


        console.log(isLoggedIn);
        if (!isLoggedIn) {
            setShowPopup(true);  // ← Show popup if not logged in
            console.log(showPopup);
            return;
        }

        // TODO: Add to wishlist API call
        console.log('Adding to Cart:', data.id);

        try
        {
            setStatus("loading");
            const res = await addToCartAPI({ productId: data.id });
            setRespData(res);
            console.log(res);
            setStatus("Success");
            navigate("/cartPage");
        }
        catch(err)
        {
            console.error(err);
            setStatus("error");
            setError(err.message || "Something went wrong");
        }
    };



    const getImageUrl = (imageData) => {
        if (!imageData) return '';

        // Check if it's a string (backend data) or imported module (static data)
        if (imageData.startsWith('/uploads')) {
            return `${IMAGE_BASE_URL}${imageData}`;
        } else {
            // Static import - use directly
            return imageData;
        }
    };

    const normalizedData = {
        ...data,
        imageUrl: getImageUrl(data.image),
    };

    return <div className={`product_card style-one ${mb}`}>

        {showPopup && (
            <div
                className="wishlist_popup_overlay position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                style={{ zIndex: 9999, background: 'rgba(0,0,0,0.5)' }}
                onClick={() => setShowPopup(false)}  // Close on backdrop click
            >
                <div
                    className="wishlist_popup bg-white p-4 rounded text-center"
                    style={{ maxWidth: '450px', width: '90%' }}
                    onClick={(e) => e.stopPropagation()}  // Prevent closing when clicking popup
                >
                    <i className="bx bx-heart fs-1 js_text_primary mb-3 d-block"></i>
                    <h4 className="js_text-title mb-2">Please Login First!</h4>
                    <p className="text-muted mb-4">
                        You need to be logged in to Move Further.
                    </p>
                    <div className="d-flex gap-3 justify-content-center">
                        <button
                            className="js-btn style-two"
                            onClick={() => navigate('/signup')}
                        >
                            Login Now
                        </button>
                        <button
                            className="js-btn style-three text-danger"
                            onClick={() => setShowPopup(false)}
                        >
                            Maybe Later
                        </button>
                    </div>
                </div>
            </div>
        )}

        <div className='product_img position-relative z-1 overflow-hidden'>
            <img src={normalizedData.imageUrl} alt="product image" className='d-block mx-auto' />
            {!!normalizedData.is_sale_available && (
                <span className='product_promo fs-14 text-white position-absolute'>
                    Sale!
                </span>
            )}
            <ul className='product_options list-unstyled mb-0 position-absolute z-1 text-center'>
                <li>
                    <a href='#'
                        onClick={handleWishlistClick}
                        className='d-flex flex-column align-items-center justify-content-center rounded-circle'><i className="bx bx-heart"></i></a>
                </li>
                <li>
                    <button onClick={handleCartClick} type='button' className='d-flex flex-column align-items-center justify-content-center rounded-circle'><i className="bx bx-cart"></i></button>
                </li>
                <li>
                    <button type='button' className='d-flex flex-column align-items-center justify-content-center rounded-circle'><img src={Icons.view} alt="icon img" /></button>
                </li>
            </ul>
        </div>
        <ul className='product_rating list-unstyled d-flex align-items-center'>
            <li className='d-inline-block'>
                <i className='bx bxs-star js_text_primary'></i>
            </li>
            <li className='d-inline-block'>
                <i className='bx bxs-star js_text_primary'></i>
            </li>
            <li className='d-inline-block'>
                <i className='bx bxs-star js_text_primary'></i>
            </li>
            <li className='d-inline-block'>
                <i className='bx bxs-star js_text_primary'></i>
            </li>
            <li className='d-inline-block'>
                <i className='bx bxs-star js_text_primary'></i>
            </li>
        </ul>
        <h3 className={`fw-normal ${fontSize}`}>
            <a href="/" className='js_text-title'>{normalizedData.name}</a>
        </h3>
        <span className='product_price js_text_primary'>${normalizedData.price}</span>
    </div>;
}



function CardStyleTwo({ data }) {
    return <div className='product_card style-two position-relative mb-25'>
        <div className='product_img overflow-hidden'>
            <img src={data.image} alt="product image" />
        </div>

        <ul className='product_options list-unstyled mb-0 position-absolute'>
            <li>
                <a href='/' className='d-flex flex-column align-items-center justify-content-center rounded-circle'><i className="bx bx-heart"></i></a>
            </li>
            <li>
                <button type='button' className='d-flex flex-column align-items-center justify-content-center rounded-circle'><i className="bx bx-cart"></i></button>
            </li>
            <li>
                <button type='button' className='d-flex flex-column align-items-center justify-content-center rounded-circle'><img src={Icons.view} alt="icon img" /></button>
            </li>
        </ul>

        <div className="product_info">
            <h3 className='fw-normal fs-20'>
                <a href="/" className='js_text-title'>{data.title}</a>
            </h3>
            <span className='product_price js_text_primary'>${data.price}</span>
        </div>
    </div>;
}


function CardStyleThree({ data }) {
    return <div className='product_card style-three d-flex flex-warp align-items-center'>
        <div className='product_img position-relative z-1 overflow-hidden'>
            <a href="/">
                <img src={`${IMAGE_BASE_URL}${data.image}`} alt="product image" className='d-block mx-auto' />
            </a>
            {!!data.is_sale_available && (
                <span className='product_promo fs-14 text-white position-absolute'>
                    Sale!
                </span>
            )}
        </div>

        <div className="product_info">
            <ul className='product_rating list-unstyled d-flex align-items-center mb-2'>
                <li className='d-inline-block'>
                    <i className='bx bxs-star js_text_primary'></i>
                </li>
                <li className='d-inline-block'>
                    <i className='bx bxs-star js_text_primary'></i>
                </li>
                <li className='d-inline-block'>
                    <i className='bx bxs-star js_text_primary'></i>
                </li>
                <li className='d-inline-block'>
                    <i className='bx bxs-star js_text_primary'></i>
                </li>
                <li className='d-inline-block'>
                    <i className='bx bxs-star js_text_primary'></i>
                </li>
            </ul>
            <h3 className='fw-normal fs-20'>
                <a href="/" className='js_text-title'>{data.name}</a>
            </h3>
            <span className='product_price js_text_primary mb-2 d-block'>${data.price}</span>
            <p class="mb-30">Pellentesque in ipsum id orci porta dapibus. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Proin eget tortor risus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.</p>
            <ul className='product_options list-unstyled mb-0 d-flex align-items-center justify-content-between'>
                <li>
                    <button type='button' className='bg-transparent border-0'>
                        <img src={Icons.shopcart} alt="img" />
                    </button>
                </li>
                <li>
                    <Link to='/wishlist'>
                        <img src={Icons.heart2} alt="icon-img" />
                    </Link>
                </li>
                <li>
                    <button type='button' className='bg-transparent border-0 w-100'><img src={Icons.view2} alt="icon img" /></button>
                </li>
                <li>
                    <Link to='/wishlist'>
                        <img src={Icons.compare2} alt="icon-img" />
                    </Link>
                </li>
            </ul>
        </div>
    </div>;
}


function CardStyleFour({ data, subVariant, saleEnd }) {
    const [toggler, setToggler] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const lightboxSources = subVariant === "one" ? [ProductImages.single.single1] : singleProductImages;
    const lightboxSlide = subVariant === "one" ? 1 : activeIndex + 1;
    return <>
        <div className='row pb-100 align-items-center product_card style-four'>
            <div className='col-lg-6 pe-xxl-1 mb-md-30'>
                {subVariant == "one" && (<div className='product_img position-relative'>
                    <img src={ProductImages.single.single1} alt="img" />
                    <a href="#" onClick={(e) => { e.preventDefault(); setToggler(prev => !prev); }} className='zoom-btn d-flex flex-column align-items-center justify-content-center rounded-circle bg-white'>
                        <img src={Icons.zoom} alt="icon" />
                    </a>
                </div>)}

                {subVariant == "two" && (<SingleProductImageSliderOne onZoom={() => setToggler(prev => !prev)} onSlideChange={setActiveIndex}></SingleProductImageSliderOne>)}

                {subVariant == "three" && (<SingleProductImageSliderTwo onZoom={() => setToggler(prev => !prev)} onSlideChange={setActiveIndex}></SingleProductImageSliderTwo>)}

                {subVariant == "four" && (<SingleProductImageSliderThree onZoom={() => setToggler(prev => !prev)} onSlideChange={setActiveIndex}></SingleProductImageSliderThree>)}
            </div>
            <div className='col-xxl-5 offset-xxl-1 col-lg-6 ps-xxl-0 pe-xxl-2'>
                <ProductDescContent saleEnd={saleEnd}></ProductDescContent>
            </div>
        </div>
        <FsLightbox
            toggler={toggler}
            sources={lightboxSources}
            slide={lightboxSlide}
        />
    </>
}

function CardStyleFive({ data }) {
    const [toggler, setToggler] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    return <>
        <div className='row pb-100 align-items-center product_card style-four'>
            <div className='col-lg-6 pe-xxl-1'>
                <div className='row'>
                    {singleProductImages.map((image, index) =>
                    (<div className='col-6' key={index}>
                        <div className='product_img position-relative mb-25'>
                            <img src={image} alt="img" />
                            <a href="#" onClick={(e) => { e.preventDefault(); setActiveIndex(index); setToggler(prev => !prev); }} className='zoom-btn style-two d-flex flex-column align-items-center justify-content-center rounded-circle bg-white'>
                                <img src={Icons.zoom} alt="icon" />
                            </a>
                        </div>
                    </div>)
                    )}
                </div>
            </div>

            <div className='col-xxl-5 offset-xxl-1 col-lg-6 ps-xxl-0 pe-xxl-2'>
                <ProductDescContent></ProductDescContent>
            </div>
        </div>
        <FsLightbox
            toggler={toggler}
            sources={singleProductImages}
            slide={activeIndex + 1}
        />
    </>
}


function SingleProductImageSliderOne({ onZoom, onSlideChange }) {
    const { onSwiper, next, prev } = useSwiperControls();
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return <div className='js-single-product-slider-wrap style-one d-md-flex'>
        <Swiper
            onSwiper={setThumbsSwiper}
            direction="vertical"
            spaceBetween={10}
            slidesPerView={4}
            watchSlidesProgress
            modules={[Thumbs]}
            className="js-product-thumb-slider-two swiper pb-1"
        >
            {singleProductImages.map((img, index) => (
                <SwiperSlide key={index}>
                    <div className="js-product-thumb-img">
                        <img src={img} alt="Single Product" />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>

        <Swiper
            onSwiper={onSwiper}
            spaceBetween={20}
            thumbs={{ swiper: thumbsSwiper }}
            speed={2000}
            loop={true}
            modules={[Thumbs]}
            onSlideChange={(swiper) => {
                onSlideChange(swiper.realIndex);
            }}
            className="js-single-product-slider-two swiper ms-md-auto ms-0"
        >
            {singleProductImages.map((img, index) => (
                <SwiperSlide key={index}>
                    <div className="product_img position-relative">
                        <img src={img} alt="Single Product" />
                        <a href="#" onClick={(e) => { e.preventDefault(); onZoom(); }} className='zoom-btn d-flex flex-column align-items-center justify-content-center rounded-circle bg-white'>
                            <img src={Icons.zoom} alt="icon" />
                        </a>
                    </div>
                </SwiperSlide>
            ))}

            <div className='slider_btn'>
                <button className='prev_btn d-flex rounded-circle justify-content-center align-items-center' onClick={() => {
                    prev();
                }}>
                    <img src={Icons.leftArrow} alt="icon btn" />
                </button>
                <button className='next_btn d-flex rounded-circle justify-content-center align-items-center' onClick={() => {
                    next();
                }}>
                    <img src={Icons.rightArrow} alt="icon btn" />
                </button>
            </div>
        </Swiper>
    </div>
}






function SingleProductImageSliderTwo({ onZoom, onSlideChange }) {
    const { onSwiper, next, prev } = useSwiperControls();
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return <>
        <Swiper
            onSwiper={onSwiper}
            spaceBetween={20}
            thumbs={{ swiper: thumbsSwiper }}
            speed={2000}
            loop={true}
            modules={[Thumbs]}
            onSlideChange={(swiper) => {
                onSlideChange(swiper.realIndex);
            }}
            className="js-single-product-slider-one swiper ms-md-auto ms-0 mb-12"
        >
            {singleProductImages.map((img, index) => (
                <SwiperSlide key={index}>
                    <div className="product_img position-relative">
                        <img src={img} alt="Single Product" />
                        <a href="#" onClick={(e) => { e.preventDefault(); onZoom(); }} className='zoom-btn d-flex flex-column align-items-center justify-content-center rounded-circle bg-white'>
                            <img src={Icons.zoom} alt="icon" />
                        </a>
                    </div>
                </SwiperSlide>
            ))}

            <div className='slider_btn'>
                <button className='prev_btn d-flex rounded-circle justify-content-center align-items-center' onClick={() => {
                    prev();
                }}>
                    <img src={Icons.leftArrow} alt="icon btn" />
                </button>
                <button className='next_btn d-flex rounded-circle justify-content-center align-items-center' onClick={() => {
                    next();
                }}>
                    <img src={Icons.rightArrow} alt="icon btn" />
                </button>
            </div>
        </Swiper>

        <Swiper
            onSwiper={setThumbsSwiper}
            direction="horizontal"
            spaceBetween={10}
            slidesPerView={4}
            watchSlidesProgress
            modules={[Thumbs]}
            breakpoints={{
                0: {
                    slidesPerView: 3,
                },
                767: {
                    slidesPerView: 4,
                },
            }}
            className="js-product-thumb-slider-one swiper pb-1"
        >
            {singleProductImages.map((img, index) => (
                <SwiperSlide key={index}>
                    <div className="js-product-thumb-img">
                        <img src={img} alt="Single Product" />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    </>
}




function SingleProductImageSliderThree({ onZoom, onSlideChange }) {
    const { onSwiper, next, prev } = useSwiperControls();
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return <div className='js-single-product-slider-wrap style-one d-md-flex'>

        <Swiper
            onSwiper={onSwiper}
            spaceBetween={20}
            thumbs={{ swiper: thumbsSwiper }}
            speed={2000}
            loop={true}
            modules={[Thumbs]}
            onSlideChange={(swiper) => {
                onSlideChange(swiper.realIndex);
            }}
            className="js-single-product-slider-two swiper ms-md-auto ms-0"
        >
            {singleProductImages.map((img, index) => (
                <SwiperSlide key={index}>
                    <div className="product_img position-relative">
                        <img src={img} alt="Single Product" />
                        <a href="#" onClick={(e) => { e.preventDefault(); onZoom(); }} className='zoom-btn d-flex flex-column align-items-center justify-content-center rounded-circle bg-white'>
                            <img src={Icons.zoom} alt="icon" />
                        </a>
                    </div>
                </SwiperSlide>
            ))}

            <div className='slider_btn'>
                <button className='prev_btn d-flex rounded-circle justify-content-center align-items-center' onClick={() => {
                    prev();
                }}>
                    <img src={Icons.leftArrow} alt="icon btn" />
                </button>
                <button className='next_btn d-flex rounded-circle justify-content-center align-items-center' onClick={() => {
                    next();
                }}>
                    <img src={Icons.rightArrow} alt="icon btn" />
                </button>
            </div>
        </Swiper>
        <Swiper
            onSwiper={setThumbsSwiper}
            direction="vertical"
            spaceBetween={10}
            slidesPerView={4}
            watchSlidesProgress
            modules={[Thumbs]}
            className="js-product-thumb-slider-two swiper pb-1"
        >
            {singleProductImages.map((img, index) => (
                <SwiperSlide key={index}>
                    <div className="js-product-thumb-img">
                        <img src={img} alt="Single Product" />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
}

// function CardStyleFour({data})
// {
//     return ;
// }




function ProductDescContent({ saleEnd }) {
    return <div className='product_detail_content'>
        <span className='product_stock in-stock'>In Stock</span>
        <h1 className='fw-normal'>Engagement Ring</h1>
        <div className='product_rating_wrap d-flex align-item-center'>
            <ul className='product_rating list-unstyled d-flex align-items-center mb-0'>
                <li><i className="bx bxs-star"></i></li>
                <li><i className="bx bxs-star"></i></li>
                <li><i className="bx bxs-star"></i></li>
                <li><i className="bx bxs-star"></i></li>
                <li><i className="bx bxs-star"></i></li>
            </ul>
            <span className='fs-14'>4.9 <a href="/">(05 Customer Review)</a></span>
        </div>
        <h6 className='fs-16 fw-normal js_font_primary js_text_primary'>$700.00</h6>
        <p className='mb-15'>Pellentesque in ipsum id orci porta dapibus. Quisque velit nisi, pretium ut lacin in, elementum id enim. Curabitur arcu erat, accumsan id imperdiet et, portior at sem. Curabitur arcu erat, accumsan id imperdiet et, portitor at sem.</p>
        <p><span className='fw-medium js_text-title'>10 people</span> are currently viewing this item.</p>

        {saleEnd && (<div className="js-sale-end-time d-flex align-items-center">
            <span className="title">Hurry up! Sale ends in</span>
            <ul className="js-shop-countdown flex-wrap d-flex flex-wrap justify-content-between list-unstyled mb-0">
                <li>
                    <span className="days text-white hb-font-secondary fw-bold"></span>
                </li>
                <li>
                    <span className="hours text-white hb-font-secondary fw-bold"></span>
                </li>
                <li>
                    <span className="minutes text-white hb-font-secondary fw-bold"></span>
                </li>
                <li>
                    <span className="seconds text-white hb-font-secondary fw-bold"></span>
                </li>
            </ul>
        </div>)}


        <div className='add-to-cart-wrap d-flex flex-wrap align-items-center'>
            <span className='js_text-title fw-medium me-2'>Quantity:</span>
            <ul className='d-flex align-items-center list-unstyled mb-0'>
                <li>
                    <div className='input-counter'>
                        <span className='minus-btn'>
                            <i className="bx bx-minus"></i>
                        </span>
                        <input type="text" value="1" />
                        <span className='plus-btn'>
                            <i className="bx bx-plus"></i>
                        </span>
                    </div>
                </li>
                <li>
                    <button type='submit' className='js-btn style-one'>
                        {saleEnd == true ? "Pre Order" : "Add To Cart"} <img src={Icons.upRightArrow} alt="img" />
                    </button>
                </li>
                <li>
                    <a href="/" className='wishlist-btn'>
                        <i className="bx bx-heart"></i>
                        <span>Add To Wishlist</span>
                    </a>
                </li>
            </ul>
        </div>
        <ul className='product_metatag list-unstyled'>
            <li>
                <span className='js_text-title fw-medium'>Tags:</span>
                <a href="/">Jewelry</a> ,<a href="/">Engagement</a>
            </li>
            <li>
                <span className='js_text-title fw-medium'>SKU:</span>
                <span>MK0940084</span>
            </li>
            <li>
                <span className='js_text-title fw-medium'>Categories:</span>
                <a href="/">Wedding</a>
            </li>
            <li>
                <span className='js_text-title fw-medium'>Share:</span>
                <ul className='social-profile d-inline-flex list-unstyled mb-0'>
                    <li><a href="/"><i className="bx bxl-facebook"></i></a></li>
                    <li>
                        <a href="/">
                            <i className="bx bxl-instagram-alt"></i>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <i className="bx bxl-twitter"></i>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <i className="bx bxl-youtube"></i>
                        </a>
                    </li>
                </ul>
            </li>
            <li>
                <span className="js_text-title fw-medium">Estimated delivery:</span>
                <span>01/02/2025</span>
            </li>
            <li>
                <span className='js_text-title fw-medium'>Free shipping:</span>
                <span>Free express shipping on orders over $150.00</span>
            </li>
        </ul>
    </div>;
}

export default ProductCard;