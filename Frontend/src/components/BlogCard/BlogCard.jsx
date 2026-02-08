import "./BlogCard.css";
import arrowBlackBtn from "../../assets/images/icons/up-right-arrow-black.svg";

function BlogCard({ data, variant = "one", subvariant }) {
    switch (variant) {
        case "two":
            return <BlogCardStyleTwo data={data} />;
        case "three":
            return <BlogCardStyleThree data={data} />;
        default:
            return <BlogCardStyleOne data={data} subvariant={subvariant} />;
    }
}


function BlogCardStyleOne({ data, subvariant = "one" }) {
    return <div className="js-blog-card style-one mb-40">
        <div className="js-blog-img position-relative overflow-hidden">
            <img src={data.image} alt="Blog" />
            <div className="js-blog-date fs-14 text-white text-center position-absolute">
                <span className="d-block">{data.date.day}</span>
                {data.date.month} {data.date.year}
            </div>
        </div>
        <div className="js-blog-info">
            <a href="/" className="js_link style-two fs-14">{data.author}</a>
            <h3><a href="/" className="js_text-title" >{data.title}</a></h3>
            {subvariant == "one" && (<p>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec sollicitudin molestie malesuada. Pellentesque in ipsum id orci porta dapibus. Donec sollicitudin molestie malesuada...</p>)}
            <a href="/" className="js_link style-three">Read More <img src={arrowBlackBtn} alt="Arrow" /></a>
        </div>
    </div>
}


function BlogCardStyleTwo({ data }) {
    return <div className="js-blog-card style-two d-flex flex-wrap align-items-center mb-50">
        <div className="js-blog-img position-relative overflow-hidden">
            <img src={data.image} alt="Blog" />
            <div className="js-blog-date fs-14 text-white text-center position-absolute">
                <span className="d-block">{data.date.day}</span>
                {data.date.month} {data.date.year}
            </div>
        </div>
        <div className="js-blog-info">
            <a href="/" className="js_link style-two fs-14">{data.author}</a>
            <h3><a href="/" className="js_text-title">{data.title}</a></h3>
            <p>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec sollicitudin molestie malesuada.</p>
            <a href="/" className="js_link style-three">Read More <img src={arrowBlackBtn} alt="Arrow" /></a>
        </div>
    </div>
}



function BlogCardStyleThree({ data }) {
    return <div className="js-blog-desc">
        <div className="single-img position-relative d-block mb-30">
            <img src={data.image} alt="img" />
        <div className="js-blog-date fs-14 text-white text-center position-absolute">
            <span className="d-block">{data.date.day}</span>
            {data.date.month} {data.date.year}
        </div>
        </div>
        <div className="single-para">
            <a href="/" className="js_link style-two fs-14 d-inline-block mb-3">{data.author}</a>
            <h1>{data.title}</h1>
            <p>Curabitur aliquet quam id dui posuere blandit. Pellentesque in ipsum id orci porta dapibus. Vivamus suscipit tortor eget felis porttitor volutpat. Cras ultricies ligula sed magna dictum porta. Sed porttitor lectus nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Nulla quis lorem ut libero malesuada feugiat. Vivamus suscipit tortor eget felis porttitor volutpat.</p>
            <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vivamus suscipit tortor eget felis porttitor volutpat. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Pellentesque in ipsum id orci porta dapibus. Curabitur aliquet quam id dui posuere blandit. Curabitur aliquet quam id dui posuere blandit. Curabitur aliquet quam id dui posuere blandit. Nulla quis lorem ut libero malesuada feugiat.</p>
        </div>

        <div className="js-wp-blockquote">
            <p className="js_text-title">“ Curabitur aliquet quam id dui posuere blandit. Pellentesque in ipsum id orci porta dapibus. Vivamus suscipit tortor eget felis porttitor volutpat. Cras ultricies ligula sed magna dictum porta. Curabitur aliquet quam id dui posuere blandit. Nulla quis lorem ut libero malesuada feugiat.”</p>
            <h6 className="position-relative mb-0">Jesus Williams</h6>
        </div>

        <div className="single-para">
            <p>Curabitur aliquet quam id dui posuere blandit. Pellentesque in ipsum id orci porta dapibus. Vivamus suscipit tortor eget porttitor volutpat. Cras ultricies ligula sed magna dictum porta. Sed porttitor lectus nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Nulla quis lorem ut libero malesuada feugiat. Vivamus suscipit tortor eget felis porttitor volutpat.</p>
            <ul className="content-feature-list list-unstyled mb-30">
                <li className="position-relative">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel consectetur euismod aliquam. Quis urna.</li>
                <li className="position-relative">Scelerisque cras pellentesque euismod luctus et, viverra phasellus vel curabitur. Luctus nisi, quam massa quam varius.</li>
                <li className="position-relative">Pellentesque euismod luctus et, viverra phasellus vel curabitur. Luctus nisi, quam massa quam varius.</li>
                <li className="position-relative">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel consectetur euismod aliquam.</li>
            </ul>
            <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vivamus suscipit tortor eget felis porttitor volutpat. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Pellentesque in ipsum id orci porta dapibus. Curabitur aliquet quam id dui posuere blandit. Curabitur aliquet quam id dui posuere blandit. Curabitur aliquet quam id dui posuere blandit. Nulla quis lorem ut libero malesuada feugiat.</p>
        </div>
    </div>
}

export default BlogCard;