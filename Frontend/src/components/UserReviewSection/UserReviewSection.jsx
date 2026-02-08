import './UserReviewSection.css';
import { ClientImages,Icons } from '../../assets/assetsExporter';

const userReviewCardData = [
    {
        userImg: ClientImages.client1,
        userName: "Deborah Underwood",
        date: "13 Nov, 2025",
        review: "The quality is great"
    },
    {
        userImg: ClientImages.client2,
        userName: "Helen Miles",
        date: "12 Nov, 2025",
        review: "Product is great, sale support is 100%"
    },
    {
        userImg: ClientImages.client3,
        userName: "Deborah Baker",
        date: "11 Nov, 2025",
        review: "Amazing product."
    },
    {
        userImg: ClientImages.client4,
        userName: "Rachel Cluck",
        date: "7 Nov, 2025",
        review: "Good service excellent quality"
    },
    {
        userImg: ClientImages.client5,
        userName: "Jacqueline Padilla",
        date: "3 Nov, 2025",
        review: "Quick ship and great customer service"
    }
];


function UserReviewSection() {
    return <div className='row'>
        <div className='col-12'>
            <ul className='nav nav-tabs border-0 list-unstyled product_tablist d-flex align-items-center justify-content-center' role='tablist'>
                <li className='nav-item border-0' role='presentation'>
                    <button className='nav-link' type='button' role='tab' data-bs-toggle="tab" data-bs-target="#product_desc" aria-selected="false" tabIndex={-1}>Description</button>
                </li>
                <li className='nav-item border-0' role='presentation'>
                    <button className='nav-link' type='button' role='tab' data-bs-toggle="tab" data-bs-target="#product_additionalinfo" aria-selected="false" tabIndex={-1}>Additional Information</button>
                </li>
                <li className='nav-item border-0' role='presentation'>
                    <button className='nav-link active' type='button' role='tab' data-bs-toggle="tab" data-bs-target="#product_reviews" aria-selected="false" tabIndex={-1}>Reviews</button>
                </li>
            </ul>

            <div className='tab-content product_tab_content'>
                <div className='tab-pane fade js-product-desc' id='product_desc' role='tabpanel'>
                    <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Proin eget tortor risus. Curabitur aliquet quam id dui posuere blandit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.</p>
                    <p>Vivamus suscipit tortor eget felis porttitor volutpat. Donec rutrum congue leo eget malesuada. Sed porttitor lectus nibh. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla porttitor accumsan tincidunt. Donec sollicitudin molestie malesuada. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className='tab-pane fade js-product-desc' id='product_additionalinfo' role='tabpanel'>
                    <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Proin eget tortor risus. Curabitur aliquet quam id dui posuere blandit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.</p>
                    <ul className='list-unstyled mb-0 product-additional-info'>
                        <li>
                            <span className='js_text-title fw-medium me-1'>Style:</span>
                            <span>3 Stone</span>
                        </li>
                        <li>
                            <span className='js_text-title fw-medium me-1'>Metal Type:</span>
                            <span>14k Gold</span>
                        </li>
                        <li>
                            <span className='js_text-title fw-medium me-1'>Atonic No:</span>
                            <span>55</span>
                        </li>
                        <li>
                            <span className='js_text-title fw-medium me-1'>Weight:</span>
                            <span>About 5.5kg</span>
                        </li>
                        <li>
                            <span className='js_text-title fw-medium me-1'>Ring Size:</span>
                            <span>15.5 mm</span>
                        </li>
                    </ul>
                </div>
                <div className='tab-pane fade show active js-product-reviews-wrap' id='product_reviews' role='tabpanel'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='js-product-reviews'>
                                {userReviewCardData.map((data, index) => (
                                    <div className='js-product-review-card d-flex flex-wrap' key={index}>
                                        <div className='client-avatar rounded-circle'>
                                            <img src={data.userImg} alt="avatar" className='rounded-circle' />
                                        </div>
                                        <div className='client-review'>
                                            <ul className='rating list-unstyled d-flex align-items-center mb-0'>
                                                <li><i className="bx bxs-star"></i></li>
                                                <li><i className="bx bxs-star"></i></li>
                                                <li><i className="bx bxs-star"></i></li>
                                                <li><i className="bx bxs-star"></i></li>
                                                <li><i className="bx bxs-star"></i></li>
                                            </ul>
                                            <h6 className='fw-medium fs-16'>{data.userName}</h6>
                                            <span className='fs-14'>{data.date}</span>
                                            <p className='mb-0'>{data.review}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className="main_area_section_title"><h2 className="mb-3">Write A Review</h2></div>
                            <form action="#" className='my_account_form'>
                                <div className='form_group mb-15'>
                                    <label htmlFor="rev_name" className='d-block js_text-title mb-2'>Name</label>
                                    <input type="text" name="name" id="rev_name" className="bg-transparent w-100 js_text-para" placeholder="Thomas Gillies" required data-error="Please enter your name"></input>
                                </div>
                                <div className='form_group mb-15'>
                                    <label htmlFor="rev_email" className='d-block js_text-title mb-2'>Email</label>
                                    <input type="text" name="email" id="rev_email" className="bg-transparent w-100 js_text-para" placeholder="gillies@torado.com" data-error="Please enter your email"></input>
                                </div>

                                <div className='form_group mb-15'>
                                    <label className='d-block js_text-title mb-2'>Rating</label>
                                    <div className='star-rating'>
                                        <input type="radio" name="rating" value="5" id="star-5" />
                                        <label htmlFor="star-5"></label>
                                        <input type="radio" name="rating" value="4" id="star-4" />
                                        <label htmlFor="star-4"></label>
                                        <input type="radio" name="rating" value="3" id="star-3" />
                                        <label htmlFor="star-3"></label>
                                        <input type="radio" name="rating" value="2" id="star-2" />
                                        <label htmlFor="star-2"></label>
                                        <input type="radio" name="rating" value="1" id="star-1" />
                                        <label htmlFor="star-1"></label>
                                    </div>
                                </div>

                                <div className='form_group mb-15'>
                                    <label htmlFor="review_title" className='d-block js_text-title mb-2'>Review Title</label>
                                    <input type="text" name="title" id="review_title" className="bg-transparent w-100 js_text-para" placeholder="Write your review title here..."></input>
                                </div>
                                <div className='form_group mb-25'>
                                    <label htmlFor="review_message" className='d-block js_text-title mb-2'>Re-enter Password</label>
                                    <textarea type="text" name="message" id="review_message" className="bg-transparent w-100 js_text-para" placeholder="Write your comment here..."></textarea>
                                </div>
                                <button className='js-btn style-two'>
                                    Submit Review
                                    <img src={Icons.upRightArrow} alt="img" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>;
}

export default UserReviewSection;