import BreadCrumbSection from '../../components/BreadCrumbSection/BreadCrumbSection';
import { CartTable, SubscribeWithEmail } from '../../components/SmallCompo/SmallCompo';
import { Icons, PaymentImages } from '../../assets/assetsExporter';

import { useRef,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

function CartPage() {

    const cartRef = useRef(null);
    const { cartMeta } = useCart();
    const navigate = useNavigate();
    return <>
        <BreadCrumbSection title={"Cart"}></BreadCrumbSection>
        <div className='js-cart-area ptb-100'>
            <div className='container'>
                <div className='row'>
                    <div className='col-xxl-8 offset-xxl-2 col-lg-10 offset-lg-1'>
                        <CartTable variant='two' ref={cartRef} ></CartTable>
                        <div className='row align-items-start mt-4 pb-75'>
                            <div className='col-xl-6 col-lg-7 col-md-8 mb-25'>
                                <div className='js-coupon-code position-relative'>
                                    <input type="text" placeholder='Enter Coupon Code' className='bg-transparent js_text_para w-100' />
                                    <button type='button' className='js-btn style-one'>Apply <img src={Icons.upRightArrow} alt="icon" /></button>
                                </div>
                                <span className="d-block mt-2">Coupon code will be applied on the checkout page</span>
                            </div>
                            <div className='col-xl-6 col-lg-5 col-md-4 text-md-end mb-25'>
                                <button className='js-btn style-one update-cart' onClick={() => cartRef.current?.updateCart()}>Update Cart <img src={Icons.upRightArrow} alt="icon" /></button>
                            </div>
                        </div>
                    </div>
                    <div className='col-xxl-4 offset-xxl-6 col-xl-4 offset-xl-8 col-lg-5 offset-lg-6 col-md-6 offset-md-6'>
                        <div className="js-checkout-totals-box">
                            <h2 className="fs-20 fw-normal mb-3">Order Summary</h2>
                            <ul className="list-unstyled mb-45">
                                <li className="fs-14 d-flex align-items-center justify-content-between">
                                    <span>Total</span>
                                    <span>{cartMeta?.total_items ?? 0} Items</span>
                                </li>
                                <li className="fs-14 d-flex align-items-center justify-content-between">
                                    <span className="js_text-title fw-medium">Subtotal:</span>
                                    <span className="js_text-title fw-medium">${cartMeta?.subtotal ?? "0.00"}</span>
                                </li>
                                <li className="fs-14 d-flex align-items-center justify-content-between">
                                    <span>Shipping</span>
                                    <span>$0.00</span>
                                </li>
                                <li className="fs-14 d-flex align-items-center justify-content-between">
                                    <span >Payble Total</span>
                                    <span className="js_text-title">${cartMeta?.subtotal ?? "0.00"}</span>
                                </li>
                            </ul>
                            <div className="checkout-btn mb-25">
                                <button type="button" className="js-btn style-one d-block w-100"  onClick={() => navigate('/checkOut')}>Proceed to checkout <img src={Icons.upRightArrow} alt="icon" /></button>
                            </div>
                            <div className='col-12'>
                                <div className="form-check checkbox style-two mb-20">
                                    <input className="form-check-input" type="checkbox" id="test_20" />
                                    <label className="form-check-label" htmlFor="test_20">
                                        I accept to the <a href="/" className="js_link style-one fs-15">Terms & Conditions</a> and <a href="/" className="js_link style-one fs-15">Privacy Policy</a>
                                    </label>
                                </div>
                            </div>
                            <h2 className="fs-20 fw-normal mb-20">Accepted payment method</h2>
                            <ul className="js-payment-logo d-flex align-items-center list-unstyled mb-0">
                                <li>
                                    <img src={PaymentImages.maestarCard} alt="Mastercard" />
                                </li>
                                <li>
                                    <img src={PaymentImages.visa} alt="Mastercard" />
                                </li>
                                <li>
                                    <img src={PaymentImages.paypal} alt="Mastercard" />
                                </li>
                                <li>
                                    <img src={PaymentImages.americanExpress} alt="Mastercard" />
                                </li>
                                <li>
                                    <img src={PaymentImages.discover} alt="Mastercard" />
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

export default CartPage;