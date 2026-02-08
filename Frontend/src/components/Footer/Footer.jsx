import './Footer.css';
import { Icons,PaymentImages } from '../../assets/assetsExporter';
import { Link } from 'react-router-dom';

const FooterListData = [
    {
        title: "Quick Links",
        list: [
            { name: "About Us", to: "/" },
            { name: "Contact Us", to: "/" },
            { name: "FAQ", to: "/" },
            { name: "Terms & Conditions", to: "/" },
            { name: "Privacy Policy", to: "/" }
        ]
    },
    {
        title: "Useful Links",
        list: [
            { name: "Latest News", to: "/" },
            { name: "View Cart", to: "/" },
            { name: "WishList", to: "/" },
            { name: "CheckOut", to: "/" },
            { name: "Store Locator", to: "/" }
        ]
    },
    {
        title: "Categories",
        list: [
            { name: "Ring", to: "/" },
            { name: "Bracelet", to: "/" },
            { name: "Earring", to: "/" },
            { name: "Necklace", to: "/" },
            { name: "Locket", to: "/" }
        ]
    },
];

function Footer() {
    return <section className='footer_section pt-100' id='footer_section_area'>
        <div className='container'>
            <div className='row pb-75'>
                <div className='col-xl-3 col-12 pe-xxl-5'>
                    <div className='single_footer_widget'>
                        <div className='footer_thumb'>
                            <a href="/">
                                <img src={Icons.logoFooter} alt="logo" />
                            </a>
                        </div>
                        <p className='mb-20'>We provide the highest quality jewelry to our customers.</p>
                        <ul className='social_profile list-unstyled style-one mb-0'>
                            <li><a href="/" className='d-flex align-items-center justify-content-center rounded-circle'>
                                <i className='bx bxl-facebook'></i>
                            </a></li>

                            <li><a href="/" className='d-flex align-items-center justify-content-center rounded-circle'>
                                <i className="bx bxl-instagram-alt"></i>
                            </a></li>

                            <li><a href="/" className='d-flex align-items-center justify-content-center rounded-circle'>
                                <i className="bx bxl-twitter"></i>
                            </a></li>

                            <li><a href="/" className='d-flex align-items-center justify-content-center rounded-circle'>
                                <i className="bx bxl-youtube"></i>
                            </a></li>
                        </ul>
                    </div>

                </div>
                <div className='col-xl-6 col-lg-8 col-12'>
                    <div className='row'>
                        <div className='col-sm-4'><FooterRepetedDiv title={FooterListData[0].title} listData={FooterListData[0].list}></FooterRepetedDiv></div>
                        <div className='col-sm-4'><FooterRepetedDiv title={FooterListData[1].title} listData={FooterListData[1].list}></FooterRepetedDiv></div>
                        <div className='col-sm-4'><FooterRepetedDiv title={FooterListData[2].title} listData={FooterListData[2].list}></FooterRepetedDiv></div>
                    </div>
                </div>
                <div className='col-xl-3 col-lg-3 col-md-6 pe-xxl-5 ps-xxl-4'>
                    <div className='single_footer_widget'>
                        <h3 className='footer_heading fw-normal fs-18'>Contact Info</h3>
                        <ul className='footer_contact_ul list-unstyled mb-0'>
                            <li className='position-relative'><i className="bx bx-map"></i>94 East 84th Street, 9th Floor, New York, GA 30030</li>
                            <li className='position-relative'><i className="bx bx-envelope"></i>support@torado.com</li>
                            <li className='position-relative'><i className="bx bx-phone"></i>+01 947 847 4488</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='footer_copyright_section'>
                <div className='row align-items-center'>
                    <div className='col-lg-6 col-12 text-lg-start text-center'>
                        <p className='fs-14 mb-0'>© Copyright <span className="js_text_primary">Torado</span>  All Rights Reserved by <a href="https://envytheme.com/" className="js_link style-one"> EnvyTheme</a></p>
                    </div>
                    <div className='col-lg-6 col-12'>
                        <div className='payment_method_list d-flex justify-content-lg-end justify-content-center align-items-center flex-wrap'>
                            <span className='js_text-title fw-medium fs-14 me-2 mb-sm-8 d-sm-inline d-block'>We accept:</span>
                            <ul className='d-flex align-items-center list-unstyled mb-0'>
                                <li className='me-2'>
                                    <img src={PaymentImages.maestarCard} alt="matercard" />
                                </li>
                                <li className='me-2'>
                                    <img src={PaymentImages.visa} alt="Visa" />
                                </li>
                                <li className='me-2'>
                                    <img src={PaymentImages.paypal} alt="paypal" />
                                </li>
                                <li className='me-2'>
                                    <img src={PaymentImages.americanExpress} alt="american exprees" />
                                </li>
                                <li className='me-2'>
                                    <img src={PaymentImages.discover} alt="discover" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}


function FooterRepetedDiv({ title, listData }) {
    return <div className='single_footer_widget'>
        <h3 className='footer_heading fw-normal fs-18'>{title}</h3>
        <ul className='list-unstyled mb-0 footer_menu_ul'>
            {listData.map((data, index) => (<li key={index}>
                <Link key={index} to={data.to} className='js_link style-two'>{data.name}</Link>
            </li>))}
        </ul>
    </div>;
}

export default Footer;