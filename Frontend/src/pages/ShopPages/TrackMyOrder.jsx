import BreadCrumbSection from "../../components/BreadCrumbSection/BreadCrumbSection";
import { SubscribeWithEmail } from "../../components/SmallCompo/SmallCompo";
import trackOrderIcon1 from "../../assets/images/icons/check-3.svg";
import trackOrderIcon2 from "../../assets/images/icons/car.svg";
import trackOrderIcon3 from "../../assets/images/icons/bx_gift.svg";


function TrackMyOrder()
{
    return <>
        <BreadCrumbSection title={"Track My Order"}></BreadCrumbSection>
        <div className="container ptb-100">
            <div className="row">
                <div className="col-lg-8">
                    <div className="main_area_section_title style-three mb-2">
                        <h2 className="fw-normal mb-0">Order Details</h2>
                    </div>
                    <div className="js-order-box d-flex flex-wrap align-items-center mb-50">
                        <div>
                            <span className="d-block">Tracking #:DAS758942LKJB15</span>
                            <span className="d-block">Order placed: Jan 25, 2025</span>
                        </div>
                        <p className="text-end mb-0">Subtotal: <span className="fw-medium js_text-title">$2700.00</span></p>
                    </div>

                    <div className="main_area_section_title style-three mb-20">
                        <h2 className="fw-normal mb-0">Order Tracking</h2>
                    </div>

                    <div className="js-track-order d-flex flex-wrap align-items-center mb-40">
                        <div className="js-order-stage finished">
                            <span className="order-stat-icon d-flex flex-column align-items-center justify-content-center rounded-circle"><img src={trackOrderIcon1} alt="Check"/></span>
                            <div className="order-stat text-center">
                                Order placed
                                <span className="js_text-title fs-14 fw-medium d-block">Jan 25</span>
                            </div>
                        </div>
                        <div className="js-order-stage finished">
                            <span className="order-stat-icon d-flex flex-column align-items-center justify-content-center rounded-circle"><img src={trackOrderIcon2} alt="Check"/></span>
                            <div className="order-stat text-center">
                                Dispatched
                                <span className="js_text-title fs-14 fw-medium d-block">Jan 25</span>
                            </div>
                        </div>
                        <div className="js-order-stage">
                            <span className="order-stat-icon d-flex flex-column align-items-center justify-content-center rounded-circle"><img src={trackOrderIcon3} alt="Check"/></span>
                            <div className="order-stat text-center">
                                Will Deliver
                                <span className="js_text-title fs-14 fw-medium d-block">Jan 25 - Jan 30</span>
                            </div>
                        </div>
                    </div>

                    <div className="js-order-status mb-md-30">
                        <p className="js_text-title mb-1">Order Status: <span className="js_text_primary">Shipped</span></p>
                        <p className="mb-0">Estimated delivery date:<span className="js_text-title">Jan 25- Jan 30</span></p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="js-checkout-totals-box">
                        <h2 className="fs-20 fw-normal mb-3">Cart Totals</h2>
                        <ul className="list-unstyled mb-45">
                            <li className="fs-14 d-flex align-items-center justify-content-between">
                                <span>Total</span>
                                <span>4 Items</span>
                            </li>
                            <li className="fs-14 d-flex align-items-center justify-content-between">
                                <span className="js_text-title fw-medium">Subtotal:</span>
                                <span className="js_text-title fw-medium">$2700.00</span>
                            </li>
                            <li className="fs-14 d-flex align-items-center justify-content-between">
                                <span>Shipping</span>
                                <span>$0.00</span>
                            </li>
                            <li className="fs-14 d-flex align-items-center justify-content-between">
                                <span className="semi-bold">Payble Total</span>
                                <span className="js_text-title">$2700.00</span>
                            </li>
                        </ul>
                        <h2 className="fs-20 fw-normal mb-3">Shipping Information</h2>
                        <div className="js-contact-box mb-50">
                            <h6 className="fs-16 mb-2 js_font_primary fw-semibold">Dominique Smith</h6>
                            <ul className="footer_contact_ul list-unstyled mb-0">
                                <li className="position-relative">
                                    <i className="bx bx-map"></i>
                                    22 Fraserburgh Rd, 9th floor, GA 30030, New York, USA
                                </li>
                                <li className="position-relative">
                                    <i className="bx bx-phone"></i>
                                    <a href="tel:019478474488" className="js_para_color">+01 947 847 4488</a>
                                </li>
                            </ul>
                        </div>
                        <h2 className="fs-20 fw-normal mb-3">Billing Information</h2>
                        <div className="js-contact-box">
                            <h6 className="fs-16 mb-2 js_font_primary fw-semibold">Della Vaughn</h6>
                            <ul className="footer_contact_ul list-unstyled mb-0">
                                <li className="position-relative">
                                    <i className="bx bx-map"></i>
                                    86 Telford Street, 7th floor, MK 07005 New York, USA
                                </li>
                                <li className="position-relative">
                                    <i className="bx bx-phone"></i>
                                    <a href="tel:019478474488" className="js_para_color">+01 947 847 4488</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <SubscribeWithEmail></SubscribeWithEmail>
    </>
}

export default TrackMyOrder;