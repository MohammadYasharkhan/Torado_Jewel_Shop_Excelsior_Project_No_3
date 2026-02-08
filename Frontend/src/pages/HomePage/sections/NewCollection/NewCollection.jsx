import './NewCollection.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CollectionImages, ProductImages ,Icons } from '../../../../assets/assetsExporter';
import { useSwiperControls } from '../../../../hooks/useSwiperControl';
import ProductCard from '../../../../components/Product/ProductCard/ProductCard';
import CollectionCard from '../../../../components/CollectionCard/CollectionCard';
import ShopByCategory from '../../../../components/ShopByCategory/ShopByCategory';

const collections = [
    {
        title: 'Wedding Ring',
        image: CollectionImages.collection1,
    },
    {
        title: 'Necklaces',
        image: CollectionImages.collection2,
    },
    {
        title: 'Bracelets',
        image: CollectionImages.collection3,
    },
    {
        title: 'Bridal Ring',
        image: CollectionImages.collection4,
    },
    {
        title: 'Accessories',
        image: CollectionImages.collection5,
    },
];


const collectionCardThreeData=[
    {
        image:CollectionImages.collection7,
        info:{
            title:"Classic Diamond Ring",
            subTitle:"Upto 80% Off",
        }
    },
    {
        image: CollectionImages.collection8,
        info:{
            title:"Make Your Style Everyday",
            subTitle:"100% Original",
        }
    },
];


// const categoryData=[
//     {title:'Necklaces ',noOfProducts:'08',categoryImage:categoryImage1},
//     {title:'Earrings ',noOfProducts:'35',categoryImage:categoryImage2},
//     {title:'Ring ',noOfProducts:'27',categoryImage:categoryImage3},
//     {title:'Bracelets ',noOfProducts:'12',categoryImage:categoryImage4},
//     {title:'Bundel Set ',noOfProducts:'18',categoryImage:categoryImage5},
//     {title:'Locket ',noOfProducts:'07',categoryImage:categoryImage6},
// ];



const exploreCollectionCardData=[
    {title:'Ring',price:150,image:ProductImages.product41},
    {title:'Necklace',price:300,image:ProductImages.product42},
    {title:'Earring',price:100,image:ProductImages.product43},
    {title:'Bracelet',price:120,image:ProductImages.product44},
];  

function NewCollection() {
    const { onSwiper, next, prev } = useSwiperControls();
    return <>
        <section className='new_collection_area' id='new_collection_section'>
            <div className='container'>
                <div className='main_area_section_title text-center mb-45'>
                    <h2 className='mb-0'>New Collection</h2>
                </div>
                <div className='collection_slider_wrap position-relative z-1'>
                    <Swiper
                        className="collection_slider"
                        slidesPerView={3}
                        spaceBetween={20}
                        speed={2000}
                        grabCursor={true}
                        loop={true}
                        onSwiper={onSwiper}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            576: {
                                slidesPerView: 2,
                            },
                            992: {
                                slidesPerView: 2,
                            },
                            1200: {
                                slidesPerView: 3,
                            },
                        }}
                    >
                        {collections.map((item, index) => (
                            <SwiperSlide key={index}>
                                <CollectionCard variant='one' data={item}></CollectionCard>
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
        </section>

        
        {/* <section className='shop_by_category_section' id='shop_by_category_area'>
            <div className='container pt-100'>
                <div className='row'>
                    <div className='offset-xl-1 col-xl-10 px-xxl-5'>
                        <div className='main_area_section_title text-center mb-45'>
                            <h2 className='mb-30 fw-normal'>We Provide The Highest Quality Jewelry To Our Customer</h2>
                            <a href="#" className='js_link style-three'>Know More About Us <img src={uprightarrowImage} alt="img" /></a>
                        </div>
                    </div>
                </div>
            <div className='shop_by_category_wrap position-relative pb-100'>
                <div className='shop_by_category_bg bg-f'></div>
                <div className='row'>
                    <div className='col-xl-7 offset-xl-5 col-lg-8 offset-lg-4 col-md-9 offset-md-3'>
                        <div className='main_area_section_title text-end mt-50'>
                            <h2 className='mb-4 fw-normal'>Shop By Category</h2>
                        </div>
                        <div className='category-box'>
                            <ul className='category_list list-unstyled mb-0'>
                                {categoryData.map((data,index)=>(
                                    <li className='position-relative'>
                                        {data.title} 
                                        <span>{data.noOfProducts} Products</span>
                                        <span className='category-img rounded-circle'>
                                            <img src={data.categoryImage} alt="img" />
                                        </span>
                                        <a href="#" onClick={(e)=>{e.preventDefault()}} className='position-absolute top-0 start-0 w-100 h-100'></a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </section> */}
        <ShopByCategory></ShopByCategory>


        <section className='explore_collection_section pt-100' id='explore_collection_area'>
            <div className='container-fluid style-two'>
                <div className='main_area_section_title mb-45'>
                    <h2 className='mb-0'>Explore Collection</h2>
                </div>
                <div className='row'>
                    <div className='col-xl-7 col-lg-6 pe-xxl-5'>
                        <div className='row'>
                            {exploreCollectionCardData.map((data,index)=>(
                                <div className='col-md-6' key={index}>
                                    <ProductCard data={data} variant='two'></ProductCard>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='col-xl-5 col-lg-6 pe-lg-0'>
                            <CollectionCard variant='two'></CollectionCard>
                    </div>
                </div>
            </div>
            <div className='container pb-75'>
                    <div className='row'>
                            {collectionCardThreeData.map((data,index)=>(
                                <div className="col-lg-6" key={index}>
                                    <CollectionCard data={data} variant='three'></CollectionCard>
                                </div>
                            ))}
                    </div>
            </div>
        </section>
    </>
}

export default NewCollection;