
import './BlogSinglePost.css';
import BlogCard from "../../components/BlogCard/BlogCard";
import { BlogImages,Icons } from '../../assets/assetsExporter';



const blogDetailData = [
    {
        id: 1,
        title: "In 2025, new jewelry will enter the market",
        author: "Teresa Bridges",
        date: {
            day: "25",
            month: "January",
            year: "2025"
        },
        image: BlogImages.singleBlog,
    }
];

// console.log(blogDetailData[0]);

const commentsData = [
    {
        id: 1,
        name: "Zinia Farnandiz",
        date: "Dec 22, 2025",
        message:
            "As a UI/UX designer reporting directly to the CTO, your insights will have a direct impact on our product's direction. This role requires an insightful UI/UX Designer with a passion for creating seamless and engaging digital experiences.",
        avatar: BlogImages.author1,
        isReply: false
    },
    {
        id: 2,
        name: "Walter White",
        date: "Dec 17, 2025",
        message:
            "Employees who have the flexibility to work remotely often report higher job satisfaction. This can lead to increased employee retention and a more motivated workforce.",
        avatar: BlogImages.author2,
        isReply: false
    },
    {
        id: 3,
        name: "Loren Watson",
        date: "Dec 18, 2025",
        message:
            "Cover broad topic in web development industry. Explained a lot of basic programming knowledge with easy to understand explanation.",
        avatar: BlogImages.author3,
        isReply: true
    }
];





function BlogSinglePost() {
    return <>
        <BlogCard variant="three" data={blogDetailData[0]}></BlogCard>
        <div className="js-post-metaoption">
            <div className="row">
                <div className="col-md-6">
                    <div className="js-post-tags d-flex align-items-center">
                        <span className="js_font_secondary js_text-title lh-1 me-2">Tags:</span>
                        <ul className="js-tag-list style-two list-unstyled mb-0">
                            <li><a href="/">Jewelry</a></li>
                            <li><a href="/">Diamond</a></li>
                            <li><a href="/">Necklace</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="js-post-share d-flex align-items-center justify-content-md-end">
                        <span className="js_font_secondary js_text-title lh-1 me-2">Share:</span>
                        <ul className="js-social-profile list-unstyled mb-0">
                            <li>
                                <a href="#">
                                    <i className="bx bxl-facebook"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="bx bxl-instagram-alt"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="bx bxl-twitter"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div className="js-post-pagination">
            <div className="row">
                <div className="col-6">
                    <a href="/" className="js-prev-post">
                        <img src={BlogImages.postThumb4} alt="Image" />
                        <span><img src={Icons.upLeftArrowBlack} alt="Icon" />Prev</span>
                    </a>
                </div>
                <div className="col-6 text-end">
                    <a href="/" className="js-next-post">
                        <span>Next<img src={Icons.upRightArrowBlack} alt="Icon" /></span>
                        <img src={BlogImages.postThumb5} alt="Image" />
                    </a>
                </div>
            </div>
        </div>


        <div className='main_area_section_title mb-3 pt-100'>
            <h2 className="mb-0">03 Comments</h2>
        </div>

        <div className='js-comment-item-wrap pb-100'>
            {commentsData.map((comment) => (
                <CommentCard
                    key={comment.id}
                    data={comment}
                    variant={comment.isReply ? "reply" : "default"}
                />
            ))}
        </div>

        <div className="main_area_section_title mb-3">
            <h2 className="mb-0">Leave A Comment</h2>
        </div>

        <form action="#" className="my_account_form" id="cmt-form">
            <div className="row">
                <div className="col-md-6">
                    <div className="form_group mb-15">
                        <label for="name" className="d-block js_text-title mb-2">Your name</label>
                        <input type="text" name="name" id="name" className="bg-transparent w-100 js_text-para" placeholder="Thomas Gillies" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form_group mb-15">
                        <label for="phone_no" className="d-block js_text-title mb-2">Phone</label>
                        <input type="number" name="phone_no" id="phone_no" className="bg-transparent w-100 js_text-para" placeholder="+01 947 847 4488" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form_group mb-15">
                        <label for="website_url" className="d-block js_text-title mb-2">Website</label>
                        <input type="url" name="website_url" id="website_url" className="bg-transparent w-100 js_text-para" placeholder="gillies@torado.com" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form_group mb-15">
                        <label for="email" className="d-block js_text-title mb-2">Email</label>
                        <input type="email" name="email" id="email" className="bg-transparent w-100 js_text-para" placeholder="gillies@torado.com" />
                    </div>
                </div>
                <div className="col-12">
                    <div className="form_group mb-25">
                        <label for="review_msg" className="d-block js_text-title mb-2">Comment</label>
                        <textarea name="review_msg" id="review_msg" className="bg-transparent w-100 js_text-para" placeholder="Write your comment here..."></textarea>
                    </div>
                </div>
                <div className="col-12">
                    <div className="form-check checkbox style-two mb-25">
                        <input className="form-check-input" type="checkbox" id="test_2" />
                        <label className="form-check-label" for="test_2">
                            Save my name, email, and website in this browser for the next time I comment.
                        </label>
                    </div>
                </div>
            </div>
            <button className="js-btn style-two">post A Comment<img src={Icons.upRightArrow} alt="Arrow" /></button>
        </form>
    </>
}




function CommentCard({ data, variant = "default" }) {
    const { name, date, message, avatar } = data;

    return (
        <div
            className={`comment-item d-flex flex-wrap round-5 ${variant === "reply" ? "reply" : ""
                }`}
        >
            <div className="comment-author w-100 d-flex flex-wrap">
                <img
                    src={avatar}
                    alt={name}
                    className="rounded-circle"
                />
            </div>

            <div className="comment-author-info">
                <h5 className="fs-18 fw-normal">
                    {name}
                    <span className="fs-14 js_text-para fw-normal ms-2">
                        {date}
                    </span>
                </h5>

                <p>{message}</p>

                <a
                    href="#"
                    className="js_link style-three reply-btn fs-14"
                >
                    Reply
                </a>
            </div>
        </div>
    );
}

export { CommentCard };

export default BlogSinglePost;