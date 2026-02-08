import './ShopByCategory.css';
import { CategoryImages,Icons } from '../../assets/assetsExporter';

const categoryData = [
    { title: 'Necklaces ', noOfProducts: '08', categoryImage: CategoryImages.necklace },
    { title: 'Earrings ', noOfProducts: '35', categoryImage: CategoryImages.earrings },
    { title: 'Ring ', noOfProducts: '27', categoryImage: CategoryImages.ring },
    { title: 'Bracelets ', noOfProducts: '12', categoryImage: CategoryImages.bracelets },
    { title: 'Bundel Set ', noOfProducts: '18', categoryImage: CategoryImages.bundleSet },
    { title: 'Locket ', noOfProducts: '07', categoryImage: CategoryImages.locket },
];



function ShopByCategory({ variant = "one" }) {
    return <section className='shop_by_category_section' id='shop_by_category_area'>
        <div className={`container ${variant === "two" ? "ptb-100" : "pt-100"}`}>
            <div className='row'>
                {variant == "one" && (<div className='offset-xl-1 col-xl-10 px-xxl-5'>
                    <div className='main_area_section_title text-center mb-45'>
                        <h2 className='mb-30 fw-normal'>We Provide The Highest Quality Jewelry To Our Customer</h2>
                        <a href="#" className='js_link style-three'>Know More About Us <img src={Icons.upRightArrowBlack} alt="img" /></a>
                    </div>
                </div>)}

                {variant == "two" && (<div className='col-lg-10 offset-lg-1'>
                    <div className='main_area_section_title text-center mb-40 px-xxl-5'>
                        <h2 class="fw-normal mb-0">We Provide The Highest Quality Jewelry To Our Customers</h2>
                    </div>
                </div>)}
            </div>
            <div className='shop_by_category_wrap position-relative pb-100'>
                <div className='shop_by_category_bg bg-f'></div>
                <div className='row'>
                    {variant=="one" && <ShopByCategoryStyleOne></ShopByCategoryStyleOne>}
                    {variant=="two" && <ShopByCategoryStyleTwo></ShopByCategoryStyleTwo>}
                </div>
            </div>
        </div>
    </section>;
}



function ShopByCategoryStyleOne() {
    return <div className='col-xl-7 offset-xl-5 col-lg-8 offset-lg-4 col-md-9 offset-md-3'>
        <div className='main_area_section_title text-end mt-50'>
            <h2 className='mb-4 fw-normal'>Shop By Category</h2>
        </div>
        <div className='category-box'>
            <ul className='category_list list-unstyled mb-0'>
                {categoryData.map((data, index) => (
                    <li className='position-relative' key={index}>
                        {data.title}
                        <span>{data.noOfProducts} Products</span>
                        <span className='category-img rounded-circle'>
                            <img src={data.categoryImage} alt="img" />
                        </span>
                        <a href="#" onClick={(e) => { e.preventDefault() }} className='position-absolute top-0 start-0 w-100 h-100'></a>
                    </li>
                ))}
            </ul>
        </div>
    </div>;
}


function ShopByCategoryStyleTwo() {
    return <div className='col-xl-7 offset-xl-5 col-lg-9 offset-lg-3 col-md-10 offset-md-2'>
        <div className='main_area_section_title text-center mb-35 mt-5'>
            <h2 className='fw-normal mb-0'>Our Story</h2>
        </div>
        <div className='js-about-content-box'>
            <div className="single-para">
            <p>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec sollicitudin molestie malesuada.</p>
            <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Donec rutrum congue leo eget malesuada. Proin eget tortor risus. Nulla quis lorem ut libero malesuada feugiat.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Donec rutrum congue leo eget malesuada.</p>
            </div>
            <h5 className="fs-20 fw-normal mb-3">Our Philosophy</h5>
            <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Donec rutrum congue leo eget malesuada. Proin eget tortor risus. Nulla quis lorem ut libero malesuada feugiat.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia.</p>
        </div>
    </div>;
}

export default ShopByCategory;