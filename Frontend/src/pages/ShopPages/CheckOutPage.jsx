import BreadCrumbSection from "../../components/BreadCrumbSection/BreadCrumbSection";
import { SubscribeWithEmail } from "../../components/SmallCompo/SmallCompo";
import { PaymentImages } from "../../assets/assetsExporter";

function CheckOutPage() {
    return <>
        <BreadCrumbSection title={"Checkout"}></BreadCrumbSection>
        <div className="container pt-100 pb-75">
            <div className="row">
                <div className="col-lg-8">
                    <div className="main_area_section_title mb-2">
                        <h2 className="fw-normal mb-0">Contact Information</h2>
                    </div>
                    <form action="#" className="my_account_form pb-75">
                        <div className="form_group mb-15">
                            <label htmlFor="email" className="d-block js_text-title mb-2">Email or Phone Number</label>
                            <input type="email" name="email" id="email" className="bg-transparent w-100 js_text_para" placeholder="gillies@torado.com"/>
                        </div>
                    </form>
                    <div className="main_area_section_title mb-2">
                        <h2 className="fw-normal mb-0">Shipping Address</h2>
                    </div>
                    <form action="#" className="my_account_form">
                        <div className="row"> 
                            <div className="col-12"> 
                                <div className="form_group mb-15"> 
                                    <label for="country" class="d-block js_text-title mb-2">Country</label> 
                                    <select name="country" id="country" className="form-select bg-transparent w-100 js_text_para"> 
                                        <option value="1">United Kingdom</option> 
                                        <option value="2">United States</option> 
                                        <option value="3">Canada</option> 
                                    </select> 
                                </div> 
                            </div> 
                            <div className="col-md-6"> 
                                <div className="form_group mb-15"> 
                                    <label for="fname" className="d-block js_text-title mb-2">First name</label> 
                                    <input type="text" name="fname" id="fname" className="bg-transparent w-100 js_text_para" placeholder="Thomas"></input>
                                </div> 
                            </div> 
                            <div className="col-md-6"> 
                                <div class="form_group mb-15"> 
                                    <label for="lname" className="d-block js_text-title mb-2">Last name</label> 
                                    <input type="text" name="lname" id="lname" className="bg-transparent w-100 js_text_para" placeholder="Gillies"/>
                                </div>
                            </div> 
                            <div className="col-12"> 
                                <div class="form_group mb-15"> 
                                    <label for="address" className="d-block js_text-title mb-2">Address</label> 
                                    <input type="text" name="address" id="address" className="bg-transparent w-100 js_text_para" placeholder="94 East 84th Street, 9th Floor, New York, GA 30030"/> 
                                    </div> 
                                </div> 
                                <div className="col-md-6"> 
                                    <div class="form_group mb-15"> 
                                        <label for="city" className="d-block js_text-title mb-2">City</label> 
                                        <select name="city" id="city" className="form-select bg-transparent w-100 js_text_para"> 
                                            <option value="1">New York</option> 
                                            <option value="2">Florida</option> 
                                            <option value="3">Kentacky</option> 
                                        </select> 
                                    </div> 
                                </div> 
                                <div className="col-md-6"> 
                                    <div class="form_group mb-15"> 
                                        <label for="post_code" className="d-block js_text-title mb-2">Post Code</label>
                                        <input type="text" name="post_code" id="post_code" class="bg-transparent w-100 js_text_para" placeholder="****"/>
                                    </div> 
                                </div> 
                                <div className="col-md-6"> 
                                    <div className="form_group mb-15"> 
                                    <label for="division" className="d-block js_text-title mb-2">Division</label> 
                                    <select name="division" id="division" className="form-select bg-transparent w-100 js_text_para"> 
                                        <option value="1">New York</option> 
                                        <option value="2">Florida</option> 
                                        <option value="3">Kentacky</option> 
                                    </select> 
                                    </div> 
                                </div> 
                                <div className="col-md-6"> 
                                    <div className="form_group mb-15"> 
                                        <label for="street" className="d-block js_text-title mb-2">Street</label> 
                                        <input type="text" name="street" id="street" className="bg-transparent w-100 js_text_para" placeholder="321 devison street"/> 
                                    </div> 
                                </div> 
                                <div className="col-12"> 
                                    <div className="form_group mb-15"> 
                                        <label for="phone" className="d-block js_text-title mb-2">Phone</label> 
                                        <input type="number" name="phone" id="phone" className="bg-transparent w-100 js_text_para" placeholder="+01 947 847 4488"/> 
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
                                        <label for="order_notes" className="d-block js_text-title mb-2">Order Notes(Optional)</label> <textarea name="order_notes" id="order_notes" className="bg-transparent w-100 js_text_para" placeholder="Write your notes here..."></textarea> </div>
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
                                <span className="fw-medium js_text-title">Payable Total</span>
                                <span className="fw-medium js_text-title">$2700.00</span>
                            </li>
                        </ul>
                        <h2 className="fs-20 fw-normal mb-3">Payment Method</h2>
                        <div className="js-payment-method-wrap mb-45">
                            <div className="js-payment-method">
                                <div className="checkbox style-one">
                                    <input type="radio" id="check_1" name="radio_btn_one" defaultChecked/>
                                    <label htmlFor="check_1">Direct Bank Transfer</label>
                                </div>
                                <p className="fs-14">Make your payment directly into our bank account. Please use your order ID as the payment reference.</p>
                            </div>
                            <div className="js-payment-method">
                                <div className="checkbox style-one">
                                    <input type="radio" id="check_2" name="radio_btn_one" defaultChecked/>
                                    <label htmlFor="check_2">Cash On Delivery</label>
                                </div>
                            </div>
                            <div className="js-payment-method">
                                <div className="checkbox style-one">
                                    <input type="radio" id="check_3" name="radio_btn_one" defaultChecked/>
                                    <label htmlFor="check_3">Check Payment</label>
                                </div>
                            </div>
                        </div>
                        <h2 className="fs-20 fw-normal mb-20">Accepted payment method</h2>
                        <ul className="js-payment-logo d-flex align-items-center list-unstyled mb-0">
                            <li><img src={PaymentImages.maestarCard} alt="Maestar Card"/></li>
                            <li><img src={PaymentImages.visa} alt="Visa"/></li>
                            <li><img src={PaymentImages.paypal} alt="PayPal"/></li>
                            <li><img src={PaymentImages.americanExpress} alt="American Express"/></li>
                            <li><img src={PaymentImages.discover} alt="Discover"/></li>
                        </ul>
                        <div className="checkout-btn mb-25">
                            <button type="submit" className="js-btn style-one d-block w-100">Place Order</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <SubscribeWithEmail></SubscribeWithEmail>
    </>
}

export default CheckOutPage;
