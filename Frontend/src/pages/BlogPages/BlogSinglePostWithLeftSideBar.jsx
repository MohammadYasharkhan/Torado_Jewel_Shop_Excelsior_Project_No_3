import BlogSinglePost from "../../components/BlogSinglePost/BlogSinglePost";
import BreadCrumbSection from "../../components/BreadCrumbSection/BreadCrumbSection";
import { SideBarBlog } from "../../components/SideBarProduct/SideBarProduct";
import { SubscribeWithEmail } from "../../components/SmallCompo/SmallCompo";


function BlogSinglePostWithLeftSideBar()
{
    return <>
        <BreadCrumbSection title={"Blog Detail"}></BreadCrumbSection>
        <div className="js-blog-details-area ptb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <SideBarBlog></SideBarBlog>
                    </div>
                    <div className="col-lg-8">
                        <BlogSinglePost></BlogSinglePost>
                    </div>
                </div>
            </div>
        </div>
        <SubscribeWithEmail></SubscribeWithEmail>
    </>
}

export default BlogSinglePostWithLeftSideBar;