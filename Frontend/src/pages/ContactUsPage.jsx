import BreadCrumbSection from "../components/BreadCrumbSection/BreadCrumbSection";
import { SubscribeWithEmail } from "../components/SmallCompo/SmallCompo";
import buttonImage from "../assets/images/icons/up-right-arrow.svg";
import { useState } from "react";
import { submitContactUsForm } from "../apiCall/apiClient";


function ContactUsPage()
{
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });


    const [status, setStatus] = useState("idle");
    const [data, setData] = useState(null);
    const [error,setError] = useState("");

    
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
            const res=await submitContactUsForm(formData);
            setData(res);
            setStatus("success");
            setFormData({
                name: "",
                email: "",
                phone: "",
                subject: "",
                message: "",
            });
        } catch (err) {
            console.log(err.message);
            setStatus("error");
            setError(err.message || "Something went wrong");
        }
    };

    return <>
        <BreadCrumbSection title={"Contact Us"}></BreadCrumbSection>
        <div className="container pt-100 pb-75">
            <div className="row">
                <div className="col-xl-8 col-lg-7 mb-25">
                    <div className="main_area_section_title mb-15">
                        <h2 className="fw-normal mb-0">Send A Message</h2>
                    </div>
                    <form action="#" id="contact_form" className="my_account_form mb-25" onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form_group mb-15">
                                    <label htmlFor="name" className="d-block js_title-color mb-2">Your name</label>
                                    <input type="text" name="name" value={formData.name} onChange={handleChange} id="name" className="bg-transparent w-100 js_text-para" placeholder="Thomas Gillies" required data-error="Please enter your name" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form_group mb-15">
                                    <label htmlFor="email" className="d-block js_title-color mb-2">Email</label>
                                    <input type="text" name="email" value={formData.email} onChange={handleChange} id="email" className="bg-transparent w-100 js_text-para" placeholder="gillies@torado.com" required data-error="Please enter your email"/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form_group mb-15">
                                    <label htmlFor="phone_no" className="d-block js_text-title mb-2">Phone</label>
                                    <input type="number" name="phone" id="phone_no" value={formData.phone} onChange={handleChange} className="bg-transparent w-100 js_text-para" placeholder="+01 947 847 4488"/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form_group mb-15">
                                    <label htmlFor="subject" className="d-block js_text-title mb-2">Subject</label>
                                    <input type="text" name="subject" id="subject" value={formData.subject} onChange={handleChange} className="bg-transparent w-100 js_text-para" placeholder="Write subject here" required data-error="Please enter Subject here"/>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form_group mb-25">
                                    <label htmlFor="review_msg" className="d-block js_text-title mb-2">Message</label>
                                    <textarea name="message" id="review_msg" value={formData.message} onChange={handleChange} className="bg-transparent w-100 js_text-para" placeholder="Write your messge here..." required data-error="Please enter Message here"></textarea>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-check checkbox style-two mb-20"><label className="form-check-label">I'm confirming that I've read &amp; agree with <a href="/" className="js_link style-one">Terms &amp; Conditions</a> and  <a href="/" className="js_link style-one">Privacy Policy</a>  </label></div>
                            </div>
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

                        <button type="submit" className="js-btn style-two" disabled={status === "loading"}>
                            {status==="loading" ? "Sending..." : "Post A Comment"}
                            <img alt="image" src={buttonImage} />
                        </button>
                    </form>
                </div>
                <div className="col-xl-4 col-lg-5 mb-25">
                    <div className="main_area_section_title mb-15">
                        <h2 className="fw-normal mb-0">Contact Details</h2>
                    </div>
                    <ul className="footer_contact_ul list-unstyled mb-50 pe-xxl-5 me-xxl-5">
                        <li className="position-relative"><i className="bx bx-map"></i>94 East 84th Street, 9th Floor, New York, GA 30030</li>
                        <li className="position-relative"><i className="bx bx-envelope"></i>support@torado.com</li>
                        <li className="position-relative"><i className="bx bx-phone"></i>+01 947 847 4488</li>
                    </ul>
                    <h6 className="fs-18 fw-normal mb-20">Hours Of Operations</h6>
                    <ul className="js-office-hrs list-unstyled mb-0">
                        <li>Monday–Friday: 8:00AM–8:00PM</li>
                        <li>Saturday: 9:00AM–6:00PM</li>
                        <li>Sunday: 8:00AM–3:00PM</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="js-comp-map style-one">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8385385572983!2d144.95358331584498!3d-37.81725074201705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4dd5a05d97%3A0x3e64f855a564844d!2s121%20King%20St%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sbd!4v1612419490850!5m2!1sen!2sbd">
            </iframe>
        </div>
        <SubscribeWithEmail></SubscribeWithEmail>
    </>
}

export default ContactUsPage;