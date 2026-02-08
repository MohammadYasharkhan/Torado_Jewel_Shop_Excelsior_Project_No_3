import BlogSinglePost from "../../components/BlogSinglePost/BlogSinglePost";
import BreadCrumbSection from "../../components/BreadCrumbSection/BreadCrumbSection";
import { SubscribeWithEmail } from "../../components/SmallCompo/SmallCompo";

function BlogSinglePostDefault() {
    return <>
        <BreadCrumbSection title={"Blog Details"}></BreadCrumbSection>
        <div className="js-blog-details-area ptb-100">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
                        <BlogSinglePost></BlogSinglePost>
                    </div>
                </div>
            </div>
        </div>
        <SubscribeWithEmail></SubscribeWithEmail>
    </>
}

export default BlogSinglePostDefault;