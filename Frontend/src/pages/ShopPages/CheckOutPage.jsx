import BreadCrumbSection from "../../components/BreadCrumbSection/BreadCrumbSection";
import { SubscribeWithEmail } from "../../components/SmallCompo/SmallCompo";
import { PaymentImages } from "../../assets/assetsExporter";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useCart } from "../../context/CartContext";
import { placeOrderAPI } from "../../apiCall/order.api";

function CheckOutPage() {

    const navigate = useNavigate();
    const [status, setStatus] = useState("idle");
    const [error, setError] = useState("");
    const [resData, setResData] = useState(null);
    const [showPopup, setShowPopup] = useState(false);

    const { cartMeta } = useCart();

    const { isLoggedIn } = useAuth();

    const [formData, setFormData] = useState({
        country: 'US',
        firstName: '',
        lastName: '',
        address: '',
        city: 'New York',
        division: 'New York',
        street: '',
        phone: '',
        orderNote: ''
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!isLoggedIn) {
            setShowPopup(true);  // ← Show popup if not logged in
            console.log(showPopup);
            return;
        }

        console.log(formData);
        try {
            setStatus("loading");
            const res = await placeOrderAPI({ orderData: formData });
            setResData(res);
            setStatus("success");
            // navigate(`/order-confirmed/${res.order_id}`);
        } catch (err) {
            setStatus("error");
            setError(err.message || "Something went wrong");
        }
    };


    return <>
        <BreadCrumbSection title={"Checkout"}></BreadCrumbSection>

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


        <div className="container pt-100 pb-75">
            <div className="row">
                <div className="col-lg-8">
                    <div className="main_area_section_title mb-2">
                        <h2 className="fw-normal mb-0">Contact Information</h2>
                    </div>
                    <form action="#" className="my_account_form pb-75">
                        <div className="form_group mb-15">
                            <label htmlFor="email" className="d-block js_text-title mb-2">Email or Phone Number</label>
                            <input type="email" name="email" id="email" className="bg-transparent w-100 js_text_para" placeholder="gillies@torado.com" />
                        </div>
                    </form>
                    <div className="main_area_section_title mb-2">
                        <h2 className="fw-normal mb-0">Shipping Address</h2>
                    </div>
                    <form onSubmit={handleSubmit} id="checkout-form" className="my_account_form">
                        <div className="row">
                            <div className="col-12">
                                <div className="form_group mb-15">
                                    <label for="country" class="d-block js_text-title mb-2">Country</label>
                                    <select name="country" id="country" value={formData.country} onChange={handleChange} className="form-select bg-transparent w-100 js_text_para">
                                        <option value="UK">UK</option>
                                        <option value="US">US</option>
                                        <option value="Canada">Canada</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form_group mb-15">
                                    <label for="fname" className="d-block js_text-title mb-2">First name</label>
                                    <input type="text" id="fname" name="firstName" value={formData.firstName} onChange={handleChange} className="bg-transparent w-100 js_text_para" placeholder="Thomas"></input>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div class="form_group mb-15">
                                    <label for="lname" className="d-block js_text-title mb-2">Last name</label>
                                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} id="lname" className="bg-transparent w-100 js_text_para" placeholder="Gillies" />
                                </div>
                            </div>
                            <div className="col-12">
                                <div class="form_group mb-15">
                                    <label for="address" className="d-block js_text-title mb-2">Address</label>
                                    <input type="text" name="address" value={formData.address} onChange={handleChange} id="address" className="bg-transparent w-100 js_text_para" placeholder="94 East 84th Street, 9th Floor, New York, GA 30030" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div class="form_group mb-15">
                                    <label for="city" className="d-block js_text-title mb-2">City</label>
                                    <select name="city" value={formData.city} onChange={handleChange} id="city" className="form-select bg-transparent w-100 js_text_para">
                                        <option value="New York">New York</option>
                                        <option value="Florida">Florida</option>
                                        <option value="Kentucky">Kentucky</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div class="form_group mb-15">
                                    <label for="post_code" className="d-block js_text-title mb-2">Post Code</label>
                                    <input type="text" name="postCode" value={formData.postCode} onChange={handleChange} id="post_code" class="bg-transparent w-100 js_text_para" placeholder="****" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form_group mb-15">
                                    <label for="division" className="d-block js_text-title mb-2">Division</label>
                                    <select name="division" value={formData.division} onChange={handleChange} id="division" className="form-select bg-transparent w-100 js_text_para">
                                        <option value="New York">New York</option>
                                        <option value="Florida">Florida</option>
                                        <option value="Kentucky">Kentucky</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form_group mb-15">
                                    <label for="street" className="d-block js_text-title mb-2">Street</label>
                                    <input type="text" name="street" value={formData.street} onChange={handleChange} id="street" className="bg-transparent w-100 js_text_para" placeholder="321 devison street" />
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form_group mb-15">
                                    <label for="phone" className="d-block js_text-title mb-2">Phone</label>
                                    <input type="number" name="phone" value={formData.phone} onChange={handleChange} id="phone" className="bg-transparent w-100 js_text_para" placeholder="+01 947 847 4488" />
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-check checkbox style-two mb-25">
                                    <label className="form-check-label"> Save this information for next time. </label>
                                </div>
                                <div className="form-check checkbox style-two mb-20">
                                    <label className="form-check-label"> I've read &amp; agree to the <a href="terms-conditions.html" class="js_link style-one fs-15">Terms &amp; Conditions</a> and <a href="privacy-policy.html" class="js_link style-one fs-15">Privacy Policy</a> </label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form_group mb-25">
                                    <label for="order_note" className="d-block js_text-title mb-2">Order Notes(Optional)</label>
                                    <textarea name="orderNote" id="order_note" value={formData.orderNote} onChange={handleChange} className="bg-transparent w-100 js_text_para" placeholder="Write your notes here..."></textarea> </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-lg-4">
                    <div className="js-checkout-totals-box">
                        <h2 className="fs-20 fw-normal mb-3">Cart Totals</h2>
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
                                <span className="fw-medium js_text-title">Payable Total</span>
                                <span className="fw-medium js_text-title">${cartMeta?.subtotal ?? "0.00"}</span>
                            </li>
                        </ul>
                        <h2 className="fs-20 fw-normal mb-3">Payment Method</h2>
                        <div className="js-payment-method-wrap mb-45">
                            <div className="js-payment-method">
                                <div className="checkbox style-one">
                                    <input type="radio" id="check_1" name="radio_btn_one" defaultChecked />
                                    <label htmlFor="check_1">Direct Bank Transfer</label>
                                </div>
                                <p className="fs-14">Make your payment directly into our bank account. Please use your order ID as the payment reference.</p>
                            </div>
                            <div className="js-payment-method">
                                <div className="checkbox style-one">
                                    <input type="radio" id="check_2" name="radio_btn_one" defaultChecked />
                                    <label htmlFor="check_2">Cash On Delivery</label>
                                </div>
                            </div>
                            <div className="js-payment-method">
                                <div className="checkbox style-one">
                                    <input type="radio" id="check_3" name="radio_btn_one" defaultChecked />
                                    <label htmlFor="check_3">Check Payment</label>
                                </div>
                            </div>
                        </div>
                        <h2 className="fs-20 fw-normal mb-20">Accepted payment method</h2>
                        <ul className="js-payment-logo d-flex align-items-center list-unstyled mb-0">
                            <li><img src={PaymentImages.maestarCard} alt="Maestar Card" /></li>
                            <li><img src={PaymentImages.visa} alt="Visa" /></li>
                            <li><img src={PaymentImages.paypal} alt="PayPal" /></li>
                            <li><img src={PaymentImages.americanExpress} alt="American Express" /></li>
                            <li><img src={PaymentImages.discover} alt="Discover" /></li>
                        </ul>
                        <div className="checkout-btn mb-25">
                            <button
                                type="submit"
                                form="checkout-form"
                                disabled={status === "loading"}
                                className="js-btn style-one d-block w-100"
                            >
                                {status === "loading" ? "Placing Order..." : "Place Order"}
                            </button>
                        </div>
                    </div>

                    {status === "error" && (
                        <div className="text-danger fs-2 mb-2">
                            {error}
                        </div>
                    )}

                    {status === "success" && (
                        <div className="text-success fs-2 mb-2">
                            {resData?.message ?? "Successfully Placed Order"}
                        </div>
                    )}
                </div>
            </div >
        </div >
        <SubscribeWithEmail></SubscribeWithEmail>
    </>
}

export default CheckOutPage;
