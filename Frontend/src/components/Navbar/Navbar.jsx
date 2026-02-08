import './Navbar.css';
import { ProductImages,Icons } from '../../assets/assetsExporter';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../Product/ProductCard/ProductCard';



const productDataFeatures = [
    {
        itemImage: ProductImages.product8,
        itemName: "Engagement Ring",
        itemPrice: 700,
        shopNowLink: "/",
    },
    {
        itemImage: ProductImages.product18,
        itemName: "Shiny Diamond Ring",
        itemPrice: 500,
        shopNowLink: "/",
    },
    {
        itemImage: ProductImages.product5,
        itemName: "New Fashion Ring",
        itemPrice: 600,
        shopNowLink: "/",
    },
    {
        itemImage: ProductImages.product6,
        itemName: "Color Diamond Ring",
        itemPrice: 900,
        shopNowLink: "/",
    },
    {
        itemImage: ProductImages.product13,
        itemName: "Lady Ring",
        itemPrice: 460,
        shopNowLink: "/",
    },
    {
        itemImage: ProductImages.product15,
        itemName: "Silver Diamond Ring",
        itemPrice: 400,
        shopNowLink: "/",
    },
];

const megaMenuSubListData = [
    {
        items: [
            {
                itemName: "Shop Default",
                itemLink: "/shop",
            },
            {
                itemName: "Shop Left SideBar",
                itemLink: "/shopWithLeftSideBar",
            },
            {
                itemName: "Shop Right SideBar",
                itemLink: "/shopWithRightSideBar",
            },
            {
                itemName: "Shop Banner",
                itemLink: "/shopWithBanner",
            },
            {
                itemName: "Shop Grid 2 Columns",
                itemLink: "/shopTwoColumn",
            },
            {
                itemName: "Shop Grid 3 Columns",
                itemLink: "/shopThreeColumn",
            }
        ]
    },
    {
        items: [
            {
                itemName: "Shop Grid 4 Columns",
                itemLink: "/shopFourColumn",
            },
            {
                itemName: "Shop Grid 5 Columns",
                itemLink: "/shopFiveColumn",
            },
            {
                itemName: "Shop List View",
                itemLink: "/shopListView",
            },
            {
                itemName: "Shop Without Sidebar",
                itemLink: "/shopWithoutSidebar",
            },
            {
                itemName: "Product Default",
                itemLink: "/productDefault",
            },
            {
                itemName: "Product Preorders",
                itemLink: "/productPreOrder",
            }
        ]
    },
    {
        items: [
            {
                itemName: "Product Gallery Thumbnails",
                itemLink: "/productGalleryThumbnails",
            },
            {
                itemName: "Product Bottom Thumbnails",
                itemLink: "/productBottomThumbnails",
            },
            {
                itemName: "Product Left Thumbnails",
                itemLink: "/productLeftThumbnails",
            },
            {
                itemName: "Product Right Thumbnails",
                itemLink: "/productRightThumbnails",
            },
            {
                itemName: "Product Drawer Sidebar",
                itemLink: "/productDrawer",
            },
            {
                itemName: "Product Countdown",
                itemLink: "/productCountdown",
            }
        ]
    },
    {
        items: [
            {
                itemName: "Cart",
                itemLink: "/cartPage",
            },
            {
                itemName: "Wishlist",
                itemLink: "/wishlist",
            },
            {
                itemName: "Check Out",
                itemLink: "/checkOut",
            },
            {
                itemName: "Track My Order",
                itemLink: "/trackMyOrder",
            },
            {
                itemName: "Find A Store",
                itemLink: "/findStore",
            }
        ]
    },
];



const pageSubListData = [
    { itemName: "About Us", itemLink: "/aboutUs" },
    { itemName: "Gallery", itemLink: "/gallery" },
    { itemName: "FAQ", itemLink: "/faqPage" },
    { itemName: "My Account", itemLink: "/", children: [{ itemName: "My Account", itemLink: "/signup" }, { itemName: "Reset Password", itemLink: "/resetpassword" }] },
    { itemName: "Terms & Condition", itemLink: "/termsAndConditions" },
    { itemName: "Refund Policy", itemLink: "/refundPolicy" },
    { itemName: "Privacy Policy", itemLink: "/privacyPolicy" },
    { itemName: "404 Error", itemLink: "/error404" },
];

const blogSubListData = [
    { itemName: "Standard", itemLink: "/standardBlog" },
    { itemName: "Blog Grid", itemLink: "/blogGrid" },
    { itemName: "Blog Grid Mix", itemLink: "/blogGridMix" },
    { itemName: "Right Sidebar", itemLink: "/blogWithRightSideBar" },
    { itemName: "Left Sidebar", itemLink: "/blogWithLeftSideBar" },
    { itemName: "List View", itemLink: "/blogListView" },
    { itemName: "Other", itemLink: "/", children: [{ itemName: "Author", itemLink: "/blogWithRightSideBar" }, { itemName: "Categories", itemLink: "/blogWithRightSideBar" }, { itemName: "Tag", itemLink: "/blogWithRightSideBar" }, { itemName: "Date", itemLink: "/blogWithRightSideBar" }] },
    { itemName: "Single Post", itemLink: "/", children: [{ itemName: "Without Sidebar", itemLink: "/blogSinglePost" }, { itemName: "Right Sidebar", itemLink: "/blogSinglePostRightSideBar" }, { itemName: "Left Sidebar", itemLink: "/blogSinglePostLeftSideBar" },] },
];



const productCardData = [
    { itemName: "New Fashion Earring", itemPrice: 100, itemImage: ProductImages.product1, isSaleAvailable: true },
    { itemName: "Natural Stone Bracelet", itemPrice: 200, itemImage: ProductImages.product2, isSaleAvailable: false },
    { itemName: "Engagement Lady Ring", itemPrice: 150, itemImage: ProductImages.product3, isSaleAvailable: true },
    { itemName: "High Quality Necklace", itemPrice: 350, itemImage: ProductImages.product4, isSaleAvailable: false },
]


function Navbar() {
    const [langButton, setLangButton] = useState(false);
    const langDropRef = useRef(null);

    const [isScrolled, setIsScrolled] = useState(false);


    const [isMeanNav, setIsMeanNav] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [isOpacityOpen, setIsOpacityOpen] = useState(false);
    const [isOptionActive, setIsOptionActive] = useState(false);


    const toggleMenu = () => {
        if (isMeanNav) {
            setIsClosing(true);
            setIsMeanNav(false);
            setTimeout(() => {
                setIsClosing(false);
                setIsOpacityOpen(false);
            }, 800); // same as animation duration
        } else {
            setIsMeanNav(true);
            setIsOpacityOpen(true);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            setIsScrolled(offset > 300);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    function handleClickOutSide(event, refName, closeFn) {
        if (refName.current && !refName.current.contains(event.target)) {
            if (typeof closeFn === "function") {
                closeFn();
            }
        }
    }

    useEffect(() => {
        const handler = (event) => {
            handleClickOutSide(event, langDropRef, () => { setLangButton(false) });
        };
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        };
    }, []);

    return <>
        <section className='top_small_bar_area' id='top_small_bar'>
            <div className='container-fluid'>
                <div className='row justify-content-center align-items-center'>
                    <div className='col-lg-4 col-md-6'>
                        <div className='top_bar_info d-flex align-items-center justify-content-md-start justify-content-center'>
                            <span className='text-white fs-14 me-1'>Follow us:</span>
                            <ul className='top_bar_social list-unstyled mb-0 lh-1'>
                                <li>
                                    <a href="/">
                                        <i className='bx bxl-facebook'></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        <i className='bx bxl-instagram-alt'></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        <i className='bx bxl-twitter'></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        <i className='bx bxl-youtube'></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6'>
                        <p className='top_bar_content text-white text-lg-center text-md-end text-center fs-14'>
                            Free shipping on all orders over $50
                        </p>
                    </div>
                    <div className='col-lg-4 col-md-6'>
                        <ul className='top_bar_action list-unstyled text-lg-end text-center'>
                            <li>
                                <Link to='/signup'>
                                    <img src={Icons.user} alt="users icon" />
                                    My Account
                                </Link>
                            </li>
                            <li className='dropdown top_dropdown_option'>
                                <button onClick={() => setLangButton(prev => !prev)}>
                                    <span>Eng</span>
                                </button>
                                <div className={`${langButton ? "show" : ""} dropdown-menu top_dropdown_menu`} ref={langDropRef} >
                                    <a className='dropdown-item' href='#' onClick={(e) => e.preventDefault()}>Eng</a>
                                    <a className='dropdown-item' href='#' onClick={(e) => e.preventDefault()}>简体</a>
                                    <a className='dropdown-item' href='#' onClick={(e) => e.preventDefault()}>Spa</a>
                                    <a className='dropdown-item' href='#' onClick={(e) => e.preventDefault()}>Rus</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <section className={`navigation_bar_area ${isScrolled ? "isSticky" : ""}`} id='navigation_bar'>
            <div className='bg-transparent'>
                <div className='container-fluid'>
                    <nav className='navbar navbar-expand-md navbar-light'>
                        <a href="/" className='navbar-brand m-0 p-0'>
                            <img src={Icons.logo} alt="logo image" />
                        </a>
                        <div className='collapse navbar-collapse mean-menu'>
                            <NavBarUl currentRenderState={"MainNav"}></NavBarUl>
                        </div>
                        <OtherOptionsSection></OtherOptionsSection>
                    </nav>
                </div>
            </div>
        </section>


        <section className={`resposive_navigation_area ${isScrolled ? "isSticky" : ""}`} id='resposive_navigation_bar'>
            <div className='container'>
                <div className='resposive_navigation_nav position-relative d-flex justify-content-between'>
                    <div className='rnav_logo'>
                        <a href="/">
                            <img src={Icons.logo} alt="logo" />
                        </a>
                    </div>
                    <div className='rnav_button d-flex align-items-center gap-2'>
                        <button type='button' className='dot_revel_btn d-flex align-items-center position-relative'>
                            <span className='d-flex' onClick={() => setIsOptionActive(prev => !prev)}>
                                <div className='circle'></div>
                                <div className='circle'></div>
                                <div className='circle'></div>
                            </span>
                        </button>
                        <div className={`container ${isOptionActive === true ? 'option_active' : ''}`}>
                            <div className='other_option_warp text-align-center'>
                                <OtherOptionsSection></OtherOptionsSection>
                            </div>
                        </div>

                        <button type='button' className='menu_revel_btn' onClick={toggleMenu}>
                            {isMeanNav === false ? (<><span></span>
                                <span></span>
                                <span></span></>) : ("X")}
                        </button>
                    </div>

                    <nav className={`menu_revel_nav ${isMeanNav ? 'show' : ''} ${isClosing ? 'closing' : ''} ${isOpacityOpen ? 'open' : ''}`}>
                        <NavBarUl currentRenderState={"MeanMenuNav"}></NavBarUl>
                    </nav>
                </div>
            </div>
        </section>

        <div className='modal fade feature_modal right' id='feature_modal' tabIndex={-1} aria-labelledby="feature_modalLabel" aria-hidden="true">
            <div className='modal-dialog'>
                <div className="modal-content">
                    <button type='button' data-bs-dismiss="modal" aria-label='Close' className='close'>
                        <span aria-hidden="true">
                            <i className="bx bx-x"></i>
                        </span>
                    </button>
                    <div className='modal-body'>
                        <h4 className='fw-normal fs-20 mb-20'>Featured Products</h4>
                        <div className='product_cart_content'>
                            {productDataFeatures.map((data, index) => (
                                <ProductCart productData={data} key={index} produtType={"featureCartProduct"}></ProductCart>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div className='modal fade shopping_modal right' id='shopping_modal' tabIndex={-1} aria-labelledby='shopping_modalLabel' aria-hidden='true'>
            <div className='modal-dialog'>
                <div className='modal-content'>
                    <button type='button' data-bs-dismiss="modal" aria-label='Close' className='close'>
                        <span aria-hidden="true">
                            <i className="bx bx-x"></i>
                        </span>
                    </button>
                    <div className='modal-body'>
                        <h4 className='fw-normal fs-20 mb-20'>Shopping Cart</h4>
                        <div className='product_cart_content'>
                            {productDataFeatures.map((data, index) => (
                                <ProductCart productData={data} key={index} produtType={"shoppingCartProduct"}></ProductCart>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='modal fade search_modal' id='search_modal' tabIndex={-1} aria-labelledby='shopping_modalLabel' aria-hidden='true'>
            <div className='modal-dialog modal-dialog-scrollable'>
                <div className='modal-content'>
                    <button type='button' className='close' data-bs-dismiss="modal" aria-label='Close'>
                        <span aria-hidden="true"><i className="bx bx-x"></i></span>
                    </button>
                    <div className='modal-body'>
                        <div className='modal-search-form'>
                            <form className='position-relative'>
                                <input type="text" className='form-control' placeholder='Search here' />
                                <button type='submit'><i className="bx bx-search"></i></button>
                            </form>
                            <ul className='list-unstyled mb-0 list'>
                                <li><span>Recent Searches:</span></li>
                                <li><a href="/">Necklace</a></li>
                                <li><a href="/">Bracelet</a></li>
                                <li><a href="/">Ring</a></li>
                            </ul>
                        </div>
                        <div className='modal-search-inner-area'>
                            <div className='title d-flex align-items-center justify-content-between'>
                                <span>4 Results</span>
                                <a href="/" className='js_para_color'>View All</a>
                            </div>

                            <div className='row justify-content-center mt-4'>
                                {productCardData.map((data, index) => (<div className='col-xl-3 col-lg-4 col-md-6' key={index}>
                                    <ProductCard data={data}></ProductCard>
                                </div>))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}



function ProductCart({ productData, produtType }) {
    return <div className='product_cart d-flex align-items-center'>
        <div className='product_image'>
            <a href="/" className='d-block'>
                <img src={productData.itemImage} alt="product img" />
            </a>
        </div>
        <div className='product_content'>
            {produtType === "featureCartProduct" && (<ul className='product_rating list-unstyled d-flex align-items-center mb-1'>
                <li className='d-inline-block js_text_primary'><i className="bx bxs-star"></i></li>
                <li className='d-inline-block js_text_primary'><i className="bx bxs-star"></i></li>
                <li className='d-inline-block js_text_primary'><i className="bx bxs-star"></i></li>
                <li className='d-inline-block js_text_primary'><i className="bx bxs-star"></i></li>
                <li className='d-inline-block js_text_primary'><i className="bx bxs-star"></i></li>
            </ul>)}


            <h3><a href="/" className='d-inline-block js_text-title'>{productData.itemName}</a></h3>
            <span className='d-block mb-1 js js_text_primary'>${productData.itemPrice}</span>
            {produtType === "featureCartProduct" && (<a href={productData.shopNowLink} className='js_link style-three'>Shop Now <img src={Icons.upRightArrowBlack} alt="icon" /></a>)}
            {produtType === "shoppingCartProduct" && (<><div className="input-counter">
                <span className="minus-btn"><i className="bx bx-minus"></i></span>
                <input type="text" value="1" />
                <span className="plus-btn"><i className="bx bx-plus"></i></span>
            </div>
                <button type="button" className="delete-btn bg-transparent border-0 p-0">
                    <i className="bx bx-trash"></i>
                </button></>)}
        </div>
    </div>
}



function OtherOptionsSection() {
    return <div className='other_options d-flex align-items-center justify-content-between'>
        <div className='option_item'>
            <button className='bg-transparent border-0 p-0' data-bs-toggle="modal" data-bs-target="#search_modal">
                <img src={Icons.search} alt="icon" />
            </button>
        </div>
        <div className='option_item'>
            <Link to="/wishlist" className='wishlist_btn'>
                <img src={Icons.heart} alt="icon" />
                <span className='wishlist_counter d-flex flex-column align-items-center justify-content-center rounded-circle'>2</span>
            </Link>
        </div>
        <div className='option_item'>
            <button className='cart_btn bg-transparent border-0 position-relative' data-bs-toggle="modal" data-bs-target="#shopping_modal">
                <img src={Icons.cart} alt="icon" />
                <span className='cart_counter d-flex flex-column align-items-center justify-content-center rounded-circle'>3</span>
            </button>
        </div>
        <div className='option_item'>
            <button className='bg-transparent border-0 p-0' data-bs-toggle="modal" data-bs-target="#feature_modal">
                <img src={Icons.gridView} alt="icon" />
            </button>
        </div>
    </div>;
}


function NavBarUl({ currentRenderState }) {

    const [isMeanSubOpen, setIsMeanSubOpen] = useState(false);

    return <ul className='navbar-nav me-auto'>
        <li className='nav_item'>
            <a href="/" className='active nav-link'>Home</a>
        </li>
        <li className='nav_item megamenu'>
            <a href="#" onClick={(e) => { e.preventDefault() }} className='nav-link'>Shop {currentRenderState === "MainNav" && (<i className='bx bx-chevron-down'></i>)}</a>
            {currentRenderState === "MeanMenuNav" && (<a className="sub-mean-expand" href="#" onClick={(e) => { e.preventDefault(); setIsMeanSubOpen((prev) => !prev) }} style={{ fontSize: "18px" }}>{isMeanSubOpen === true ? "-" : "+"} </a>)}
            <ul className='dropdown-menu' style={currentRenderState === "MeanMenuNav" ? { display: isMeanSubOpen ? "block" : "none" } : {}} >
                <li className='nav_item'>
                    <div className='row justify-content-center'>
                        {megaMenuSubListData.map((data, index) => (
                            <div className='col' key={index}>
                                <ul className='megamenu_submenu'>
                                    {data.items.map((item, i) => (<li className='nav_item' key={i}><a href={item.itemLink} className='nav-link'>{item.itemName}</a></li>))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </li>
            </ul>
        </li>
        <li className='nav_item'>
            <a href="/category" className='nav-link'>Category</a>
        </li>
        
        <NavBarSubUl title={"Pages"} data={pageSubListData} currentRenderState={currentRenderState}></NavBarSubUl>
        <NavBarSubUl title={"Blog"} data={blogSubListData} currentRenderState={currentRenderState}></NavBarSubUl>
        <li className='nav_item'>
            <a href="/contactUs" className='nav-link'>Contact Us</a>
        </li>
    </ul>;
};




function NavBarSubUl({ title, data, currentRenderState }) {
    const [isMeanSubOpen, setIsMeanSubOpen] = useState(false);
    return (<li className="nav_item">
        <a href="#" onClick={(e) => { e.preventDefault() }} className='nav-link'>{title} {currentRenderState === "MainNav" && (<i className='bx bx-chevron-down'></i>)}</a>
        {currentRenderState === "MeanMenuNav" && (<a className="sub-mean-expand" href="#" onClick={(e) => { e.preventDefault(); setIsMeanSubOpen((prev) => !prev) }} style={{ fontSize: "18px" }}>{isMeanSubOpen === true ? "-" : "+"} </a>)}
        <ul className='dropdown-menu' style={currentRenderState === "MeanMenuNav" ? { display: isMeanSubOpen ? "block" : "none" } : {}}>
            {data?.map((item, index) => {
                const hasChildren = item.children?.length > 0;

                return hasChildren ? (
                    <NavBarSubUl
                        key={index}
                        title={item.itemName}
                        data={item.children}
                        currentRenderState={currentRenderState}
                    />
                ) : (
                    <li className="nav_item" key={index}>
                        <a href={item.itemLink} className="nav-link">
                            {item.itemName}
                        </a>
                    </li>
                );
            })}
        </ul>
    </li>)
}


export default Navbar;