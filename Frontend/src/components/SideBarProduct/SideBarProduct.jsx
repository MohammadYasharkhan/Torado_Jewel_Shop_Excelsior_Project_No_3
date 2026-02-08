import './SideBarProduct.css';
import { useCollapse } from '../../hooks/useCollapse';
import { BlogImages,ProductImages } from '../../assets/assetsExporter';

const latestPosts = [
    {
        id: 1,
        title: "Design all kinds of jewelry sets as your own",
        date: "January 23, 2025",
        image: BlogImages.postThumb1
    },
    {
        id: 2,
        title: "Most popular jewelry this new year 2025",
        date: "January 21, 2025",
        image: BlogImages.postThumb2
    },
    {
        id: 3,
        title: "What is the price of new dimond jewelry in 2025?",
        date: "January 20, 2025",
        image: BlogImages.postThumb3
    }
];




function SideBarProduct() {

    const category = useCollapse(true);
    const price = useCollapse(true);
    const stock = useCollapse(true);
    const color = useCollapse(true);
    const popular = useCollapse(true);


    return <aside className='sidebar_product'>
        <div className='sidebar_widget mb-45'>
            <form action="#" className='sidebar_search-form position-relative'>
                <input type="search" className='border-0 w-100 js_text-para fw-light' placeholder='Search products...' />
                <button type='submit' className='position-absolute bg-transparent border-0'>
                    <i class="bx bx-search"></i>
                </button>
            </form>
        </div>

        <div className='collapse_widget widget_categories mb-45'>
            <h3 className='collapse_widget_title fs-20 fw-normal position-relative' onClick={category.toggle}>
                Product Categories
                <span className='rounded-circle d-flex align-item-center justify-content-center position-absolute top-0 end-0'>
                    <i class="bx bx-minus"></i>
                </span>
            </h3>
            <ul className='checked_list style-one list-unstyled mb-0' ref={category.ref} style={{
                overflow: 'hidden'
            }}>
                <li>
                    <a href="#" className='position-relative checked_list_item active'>Rings</a>
                </li>
                <li>
                    <a href="#" className='position-relative checked_list_item'>Earring</a>
                </li>
                <li>
                    <a href="#" className='position-relative checked_list_item'>Bracelet</a>
                </li>
                <li>
                    <a href="#" className='position-relative checked_list_item'>Necklace</a>
                </li>
                <li>
                    <a href="#" className='position-relative checked_list_item'>Locket</a>
                </li>
                <li>
                    <a href="#" className='position-relative checked_list_item'>Bundel Set</a>
                </li>
                <li>
                    <a href="#" className='position-relative checked_list_item'>Accessories</a>
                </li>
            </ul>
        </div>


        <div className='collapse_widget widget_price_filter mb-45'>
            <h3 className='collapse_widget_title fs-20 fw-normal position-relative' onClick={price.toggle}>
                Filter By Price
                <span className='rounded-circle d-flex align-item-center justify-content-center position-absolute top-0 end-0'>
                    <i class="bx bx-minus"></i>
                </span>
            </h3>


            <ul className='checked_list style-two list-unstyled mb-0' ref={price.ref}
                style={{
                    overflow: 'hidden',
                }}>
                <li>
                    <div className='checked_list_item'>
                        <input type="radio" id='check_1' name='radio_btn_one' />
                        <label htmlFor="check_1" className='position-relative'>Under $100</label>
                    </div>
                </li>
                <li>
                    <div className='checked_list_item'>
                        <input type="radio" id='check_2' name='radio_btn_one' />
                        <label htmlFor="check_2" className='position-relative'>$101-$500</label>
                    </div>
                </li>
                <li>
                    <div className='checked_list_item'>
                        <input type="radio" id='check_3' name='radio_btn_one' />
                        <label htmlFor="check_3" className='position-relative'>$501-$1000</label>
                    </div>
                </li>
                <li>
                    <div className='checked_list_item'>
                        <input type="radio" id='check_4' name='radio_btn_one' />
                        <label htmlFor="check_4" className='position-relative'>$1001-$3000</label>
                    </div>
                </li>
                <li>
                    <div className='checked_list_item'>
                        <input type="radio" id='check_5' name='radio_btn_one' />
                        <label htmlFor="check_5" className='position-relative'>$3000-$4000</label>
                    </div>
                </li>
                <li>
                    <div className='checked_list_item'>
                        <input type="radio" id='check_6' name='radio_btn_one' />
                        <label htmlFor="check_6" className='position-relative'>$4000-$5000</label>
                    </div>
                </li>
                <li>
                    <div className='checked_list_item'>
                        <input type="radio" id='check_7' name='radio_btn_one' />
                        <label htmlFor="check_7" className='position-relative'>Above $5000</label>
                    </div>
                </li>
            </ul>
        </div>


        <div className='collapse_widget widget_stock_filter mb-45'>
            <h3 className='collapse_widget_title fs-20 fw-normal position-relative' onClick={stock.toggle}>
                Availability
                <span className='rounded-circle d-flex align-item-center justify-content-center position-absolute top-0 end-0'>
                    <i class="bx bx-minus"></i>
                </span>
            </h3>


            <ul className='checked_list style-two list-unstyled mb-0' ref={stock.ref}
                style={{
                    overflow: 'hidden'
                }}>
                <li>
                    <div className='checked_list_item'>
                        <input type="radio" id='check_8' name='radio_btn_two' />
                        <label htmlFor="check_8" className='position-relative'>In Stock</label>
                    </div>
                </li>
                <li>
                    <div className='checked_list_item'>
                        <input type="radio" id='check_9' name='radio_btn_two' />
                        <label htmlFor="check_9" className='position-relative'>Out Of Stock</label>
                    </div>
                </li>
            </ul>
        </div>


        <div className='collapse_widget widget_color_filter mb-45'>
            <h3 className='collapse_widget_title fs-20 fw-normal position-relative' onClick={color.toggle}>
                Filter By Color
                <span className='rounded-circle d-flex align-item-center justify-content-center position-absolute top-0 end-0'>
                    <i class="bx bx-minus"></i>
                </span>
            </h3>


            <ul className='checked_list style-two list-unstyled mb-0' ref={color.ref}
                style={{
                    overflow: 'hidden'
                }}>
                <li>
                    <div className='checked_list_item'>
                        <input type="radio" id='check_10' name='radio_btn_three' />
                        <label htmlFor="check_10" className='position-relative'>Black</label>
                    </div>
                </li>
                <li>
                    <div className='checked_list_item'>
                        <input type="radio" id='check_11' name='radio_btn_three' />
                        <label htmlFor="check_11" className='position-relative'>Red</label>
                    </div>
                </li>
                <li>
                    <div className='checked_list_item'>
                        <input type="radio" id='check_12' name='radio_btn_three' />
                        <label htmlFor="check_12" className='position-relative'>Green</label>
                    </div>
                </li>
                <li>
                    <div className='checked_list_item'>
                        <input type="radio" id='check_13' name='radio_btn_three' />
                        <label htmlFor="check_13" className='position-relative'>Blue</label>
                    </div>
                </li>
                <li>
                    <div className='checked_list_item'>
                        <input type="radio" id='check_14' name='radio_btn_three' />
                        <label htmlFor="check_14" className='position-relative'>Yellow</label>
                    </div>
                </li>
                <li>
                    <div className='checked_list_item'>
                        <input type="radio" id='check_15' name='radio_btn_three' />
                        <label htmlFor="check_15" className='position-relative'>White</label>
                    </div>
                </li>
                <li>
                    <div className='checked_list_item'>
                        <input type="radio" id='check_16' name='radio_btn_three' />
                        <label htmlFor="check_16" className='position-relative'>Brown</label>
                    </div>
                </li>
            </ul>
        </div>

        <div className='collapse_widget widget_popular_products mb-45'>
            <h3 className='collapse_widget_title fs-20 fw-normal position-relative' onClick={popular.toggle} >
                Best Selling Products
                <span className='rounded-circle d-flex align-item-center justify-content-center position-absolute top-0 end-0'>
                    <i class="bx bx-minus"></i>
                </span>
            </h3>
            <div className='pp_product_card_wrap' ref={popular.ref}
                style={{
                    overflow: 'hidden'
                }}>
                <div className='pp_product_card d-flex flex-wrap align-items-center'>
                    <div className='product_img position-relative'>
                        <img src={ProductImages.thumbs.thumb1} alt="img" />
                        <a href="#" class="position-absolute top-0 start-0 w-100 h-100"></a>
                    </div>
                    <div className='product_info'>
                        <h6>
                            <a href="#">New Fashion Earring</a>
                        </h6>
                        <span class="js_text_primary">$200.00</span>
                    </div>
                </div>

                <div className='pp_product_card d-flex flex-wrap align-items-center'>
                    <div className='product_img position-relative'>
                        <img src={ProductImages.thumbs.thumb2} alt="img" />
                        <a href="#" class="position-absolute top-0 start-0 w-100 h-100"></a>
                    </div>
                    <div className='product_info'>
                        <h6>
                            <a href="#">New Stone Bracelet</a>
                        </h6>
                        <span class="js_text_primary">$170.00</span>
                    </div>
                </div>

                <div className='pp_product_card d-flex flex-wrap align-items-center'>
                    <div className='product_img position-relative'>
                        <img src={ProductImages.thumbs.thumb3} alt="img" />
                        <a href="#" class="position-absolute top-0 start-0 w-100 h-100"></a>
                    </div>
                    <div className='product_info'>
                        <h6>
                            <a href="#">Engagement Lady Ring</a>
                        </h6>
                        <span class="js_text_primary">$150.00</span>
                    </div>
                </div>

                <div className='pp_product_card d-flex flex-wrap align-items-center'>
                    <div className='product_img position-relative'>
                        <img src={ProductImages.thumbs.thumb4} alt="img" />
                        <a href="#" class="position-absolute top-0 start-0 w-100 h-100"></a>
                    </div>
                    <div className='product_info'>
                        <h6>
                            <a href="#">High Quality Necklace</a>
                        </h6>
                        <span class="js_text_primary">$350.00</span>
                    </div>
                </div>
            </div>
        </div>
    </aside>
}



function SideBarBlog() {
    return <div className='sidebar_product mt-md-30'>
        <div className='sidebar_widget mb-45'>
            <h3 className="sidebar_widget_title fs-20 fw-normal mb-15">Search</h3>
            <form action="#" className='sidebar_search-form position-relative'>
                <input type="search" className='border-0 w-100 js_text-para fw-light' placeholder='Search products...' />
                <button type='submit' className='position-absolute bg-transparent border-0'>
                    <i className="bx bx-search"></i>
                </button>
            </form>
        </div>


        <div className="collapse_widget widget_categories mb-45">
            <h3 className="sidebar-widget-title fs-20 fw-normal mb-20">Product Categories</h3>
            <ul className="checked_list style-one list-unstyled mb-0">
                <li><a href="#" className="position-relative checked_list_item active ">Rings <span>(3)</span></a></li>
                <li><a href="#" className="position-relative checked_list_item">Earrings<span>(5)</span></a></li>
                <li><a href="#" className="position-relative checked_list_item">Bracelets<span>(2)</span></a></li>
                <li><a href="#" className="position-relative checked_list_item">Necklaces<span>(4)</span></a></li>
                <li><a href="#" className="position-relative checked_list_item">Locket<span>(1)</span></a></li>
                <li><a href="#" className="position-relative checked_list_item">Bundle Set<span>(6)</span></a></li>
                <li><a href="#" className="position-relative checked_list_item">Accessories<span>(2)</span></a></li>
            </ul>
        </div>

        <div className='collapse_wiget mb-45'>
            <h3 className="sidebar-widget-title fs-20 fw-normal mb-20">Latest Posts</h3>
            <div className="js-pp-post-card-wrap">
                {latestPosts.map((data, index) => (
                    <div className="js-pp-post-card d-flex flex-wrap align-items-center" key={index}>
                        <div className="js-post-img">
                            <img src={data.image} alt="Image" />
                        </div>
                        <div className="js-post-info">
                            <a href="/" className="fs-14 js_text_primary pp-post-date mb-2 d-block">{data.date}</a>
                            <h6 className="fs-16 fw-normal mb-0"><a href="/" className='js_text-title'>{data.title}</a></h6>
                        </div>
                    </div>
                ))}
            </div>
        </div>


        <div className='collapse_wiget'>
            <h3 className="sidebar-widget-title fs-20 fw-normal mb-20">Tags</h3>
            <ul class="js-tag-list list-unstyled mb-0">
                <li><a href="/">Jewelry</a></li>
                <li><a href="/">Diamond</a></li>
                <li><a href="/">Ring</a></li>
                <li><a href="/">Necklace</a></li>
                <li><a href="/">Bracelets</a></li>
                <li><a href="/">Locket</a></li>
                <li><a href="/">Bundle Set</a></li>
                <li><a href="/">Accessories</a></li>
                <li><a href="/">Fashion</a></li>
            </ul>
        </div>
    </div>
}

export { SideBarBlog };
export default SideBarProduct;