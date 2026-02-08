import BreadCrumbSection from "../components/BreadCrumbSection/BreadCrumbSection";


function RefundPolicyPage() {
    return <>
        <BreadCrumbSection title={"Refund Policy"}></BreadCrumbSection>
        <div className="container ptb-100">
            <div className="row">
                <div className="col-xl-10 offset-xl-1">
                    <div className="terms_wrap">
                        <div className="single-para">
                            <h6 className="fw-normal">Returns &amp; exchanges</h6>
                            <p>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec sollicitudin molestie malesuada. Pellentesque in ipsum id orci porta dapibus. Donec sollicitudin molestie malesuada.</p>
                            <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Donec rutrum congue leo eget malesuada. Proin eget tortor risus. Nulla quis lorem ut libero malesuada feugiat.
                                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Donec rutrum congue leo eget malesuada.</p>
                        </div>

                        <div className="single-para">
                            <h6 className="fw-normal">Return conditions:</h6>
                            <p>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec sollicitudin molestie malesuada. Pellentesque in ipsum id orci porta dapibus. Donec sollicitudin molestie malesuada.</p>
                            <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.</p>
                            <ul className="content-feature-list style-two list-unstyled">
                                <li>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. </li>
                                <li>Sed porttitor lectus nibh. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. </li>
                                <li>Pellentesque in ipsum id orci porta dapibus. </li>
                                <li>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. </li>
                            </ul>
                        </div>

                        <div className="single-para">
                            <h6 className="fw-normal">Return address:</h6>
                            <p>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec sollicitudin molestie malesuada.</p>
                            <ul className="footer_contact_ul list-unstyled d-flex mb-0 flex-wrap">
                                <li className="position-relative me-5">
                                    <i className="bx bx-map"></i>
                                    94 East 84th Street, 9th Floor, New York, GA 30030
                                </li>
                                <li className="position-relative me-5">
                                    <i className="bx bx-envelope"></i>
                                    <a href="mailto:support@torado.com" className="js_para_color">support@torado.com</a>
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
    </>
}

export default RefundPolicyPage;