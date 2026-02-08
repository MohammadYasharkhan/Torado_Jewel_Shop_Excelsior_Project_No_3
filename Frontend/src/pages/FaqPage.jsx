import BreadCrumbSection from "../components/BreadCrumbSection/BreadCrumbSection";
import { SubscribeWithEmail } from "../components/SmallCompo/SmallCompo";
import rightArrowImage from "../assets/images/icons/right-arrow-2.svg";
import upRightBtnImage from "../assets/images/icons/up-right-arrow.svg";
import { submitAskQuestionForm } from "../apiCall/apiClient";
import { useState } from "react";


const faqData1 = [
    { id: "One", open: true, question: "What shipping methods are available?" },
    { id: "Two", question: "Can I return the product after purchase?" },
    { id: "Three", question: "Do you ship internationally?" },
    { id: "Four", question: "How long will it take to get my package?" },
    { id: "Five", question: "Is it possible to pay for an order with visa and mastercard payment cards?" },
    { id: "Six", question: "How can I request a refund?" },
    { id: "Seven", question: "What payment methods do you accept?" },
    { id: "Eight", question: "How can I request a refund?" },
    { id: "Nine", question: "What payment methods do you accept?" }
];


const faqData2 = [
    { id: "one", open: true, question: "How do I place an order on your site?" },
    { id: "two", question: "Can I ship to multiple addresses?" },
    { id: "three", question: "Do you ship internationally?" },
    { id: "four", question: "How long will it take to get my package?" },
    { id: "five", question: "Is it possible to pay for an order with visa and mastercard payment cards?" },
    { id: "six", question: "How can I request a refund?" },
    { id: "seven", question: "What payment methods do you accept?" }
];


const faqData3 = [
    { id: "one", open: true, question: "What shipping methods are available?" },
    { id: "two", question: "Can I return the product after purchase?" },
    { id: "three", question: "Do you ship internationally?" },
    { id: "four", question: "How long will it take to get my package?" },
    { id: "five", question: "Is it possible to pay for an order with visa and mastercard payment cards?" },
    { id: "six", question: "How can I request a refund?" },
    { id: "seven", question: "What payment methods do you accept?" }
];



function FaqPage() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });


    const [status, setStatus] = useState("idle");
    const [data, setData] = useState(null);
    const [error, setError] = useState("");


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log("HELLO");
        setStatus("loading");
        try {
            const res = await submitAskQuestionForm(formData);
            setData(res);
            setStatus("success");
            setFormData({
                name: "",
                email: "",
                phone: "",
                message: "",
            });
        } catch (err) {
            console.log(err.message);
            setStatus("error");
            setError(err.message || "Something went wrong");
        }
    };

    return <>
        <BreadCrumbSection title={"FAQ"}></BreadCrumbSection>

        <div className="js-faq-wrap position-relative z-1 pt-100 pb-75">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 pe-xl-0">
                        <div className="main_area_section_title mb-30">
                            <h2 class="fw-normal mb-0">Frequently Asked Questions</h2>
                        </div>
                        <ul className="nav nav-tabs list-unstyled js-faq-tablist border-0 w-100" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active w-100" data-bs-toggle="tab" data-bs-target="#tab_1" type="button" role="tab" aria-selected="true">All questions<img src={rightArrowImage} alt="Arrow" /></button>
                            </li>

                            <li className="nav-item" role="presentation">
                                <button className="nav-link w-100" data-bs-toggle="tab" data-bs-target="#tab_2" type="button" role="tab" aria-selected="true">My Account<img src={rightArrowImage} alt="Arrow" /></button>
                            </li>

                            <li className="nav-item" role="presentation">
                                <button className="nav-link w-100" data-bs-toggle="tab" data-bs-target="#tab_3" type="button" role="tab" aria-selected="true">How To Shop<img src={rightArrowImage} alt="Arrow" /></button>
                            </li>

                            <li className="nav-item" role="presentation">
                                <button className="nav-link w-100" data-bs-toggle="tab" data-bs-target="#tab_4" type="button" role="tab" aria-selected="true">The Order<img src={rightArrowImage} alt="Arrow" /></button>
                            </li>

                            <li className="nav-item" role="presentation">
                                <button className="nav-link w-100" data-bs-toggle="tab" data-bs-target="#tab_5" type="button" role="tab" aria-selected="true">Shipment<img src={rightArrowImage} alt="Arrow" /></button>
                            </li>

                            <li className="nav-item" role="presentation">
                                <button className="nav-link w-100" data-bs-toggle="tab" data-bs-target="#tab_6" type="button" role="tab" aria-selected="true">Security<img src={rightArrowImage} alt="Arrow" /></button>
                            </li>

                            <li className="nav-item" role="presentation">
                                <button className="nav-link w-100" data-bs-toggle="tab" data-bs-target="#tab_7" type="button" role="tab" aria-selected="true">Payment<img src={rightArrowImage} alt="Arrow" /></button>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-8 col-xl-7 offset-xl-1">
                        <div className="faq-content pb-100">
                            <div className="tab-content about-tab-content">
                                <div className="tab-pane fade show active" id="tab_1" role="tabpanel">
                                    <AccordinoExampleOne faqData={faqData1}></AccordinoExampleOne>
                                </div>

                                <div className="tab-pane fade" id="tab_2" role="tabpanel">
                                    <AccordinoExampleOne exampleId="two" faqData={faqData2}></AccordinoExampleOne>
                                </div>

                                <div className="tab-pane fade" id="tab_3" role="tabpanel">
                                    <AccordinoExampleOne exampleId="three" faqData={faqData3}></AccordinoExampleOne>
                                </div>

                                <div className="tab-pane fade" id="tab_4" role="tabpanel">
                                    <AccordinoExampleOne exampleId="four" faqData={faqData3}></AccordinoExampleOne>
                                </div>

                                <div className="tab-pane fade" id="tab_5" role="tabpanel">
                                    <AccordinoExampleOne exampleId="five" faqData={faqData3}></AccordinoExampleOne>
                                </div>

                                <div className="tab-pane fade" id="tab_6" role="tabpanel">
                                    <AccordinoExampleOne exampleId="six" faqData={faqData3}></AccordinoExampleOne>
                                </div>
                                <div className="tab-pane fade" id="tab_7" role="tabpanel">
                                    <AccordinoExampleOne exampleId="seven" faqData={faqData3}></AccordinoExampleOne>
                                </div>
                            </div>
                        </div>


                        <div className="main_area_section_title mb-15">
                            <h2 className="fw-normal mb-0">Ask A Question</h2>
                        </div>

                        <form id="faqpage_question_form" className="my_account_form mb-25" novalidate="true" onSubmit={handleSubmit}>
                            <div className="form_group mb-15">
                                <label htmlFor="name" className="d-block js_text-title mb-2">Your name</label>
                                <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} className="bg-transparent w-100 js_text_para" placeholder="Thomas Gillies" required data-error="Please enter your name" />
                            </div>
                            <div className="form_group mb-15">
                                <label htmlFor="email" className="d-block js_text-title mb-2">Email</label>
                                <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className="bg-transparent w-100 js_text_para" placeholder="gillies@torado.com" required data-error="Please enter your email" />
                            </div>
                            <div className="form_group mb-15">
                                <label htmlFor="phone_no" className="d-block js_text-title mb-2">Phone</label>
                                <input type="number" name="phone" id="phone_no" value={formData.phone} onChange={handleChange} className="bg-transparent w-100 js_text_para" placeholder="+01 947 847 4488" required data-error="Please enter your phone number" />
                            </div>
                            <div className="form_group mb-25">
                                <label htmlFor="review_msg" className="d-block js_text-title mb-2">Message</label>
                                <textarea name="message" id="review_msg" value={formData.message} onChange={handleChange} className="bg-transparent w-100 js_text_para" placeholder="Write your messge here..."></textarea>
                            </div>
                            <div className="form-check checkbox style-two mb-20">
                                <label className="form-check-label">
                                    I accept to the <a href="/termsAndCondition" className="js_link style-one fs-15">Terms &amp; Conditions</a> and <a href="/privacyPolicy" className="js_link style-one fs-15">Privacy Policy</a>
                                </label>
                            </div>

                            {status === "error" && (
                                <div className="text-danger fs-3 mb-2">
                                    {error}
                                </div>
                            )}

                            {status === "success" && (
                                <div className="text-success fs-3 mb-2">
                                    Message Send Successfully
                                </div>
                            )}

                            <button type="submit" className="js-btn style-two" disabled={status === "loading"}>{status === "loading" ? "Sending..." : "Post A Question"}<img src={upRightBtnImage} alt="Arrow" /></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <SubscribeWithEmail></SubscribeWithEmail>
    </>
}



function AccordinoExampleOne({ exampleId = "one", faqData }) {

    const accordionId = `accordionExample_${exampleId}`;

    return <div className="js-accordion" id={accordionId}>
        {faqData.map((item, index) => {
            const collapseId = `collapse_${exampleId}_${item.id}`;
            const headingId = `heading_${exampleId}_${item.id}`;
            return (
                <div
                    key={item.id}
                    className={`accordion-item bg-transparent round-5 ${!item.open ? "collapsed" : ""}`}
                    data-bs-toggle="collapse"
                    data-bs-target={`#${collapseId}`}
                    aria-expanded={item.open ? "true" : "false"}
                    aria-controls={collapseId}
                    role="button"
                >
                    <div className="accordion-header" id={headingId}>
                        <div className="accordion-button text-title">
                            <span>
                                <i className="bx bx-plus plus"></i>
                                <i className="bx bx-minus minus"></i>
                            </span>
                            {item.question}
                        </div>
                    </div>

                    <div
                        id={collapseId}
                        className={`accordion-collapse collapse ${item.open ? "show" : ""}`}
                        aria-labelledby={headingId}
                        data-bs-parent="#accordionExample_one"
                    >
                        <div className="accordion-body">
                            <p>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec sollicitudin molestie malesuada. Pellentesque in ipsum id orci porta dapibus. Donec sollicitudin molestie malesuada.</p>
                            <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Donec rutrum congue leo eget malesuada. Proin eget tortor risus. Nulla quis lorem ut libero malesuada feugiat.</p>
                        </div>
                    </div>
                </div>
            );
        })}
    </div>
}



export default FaqPage;