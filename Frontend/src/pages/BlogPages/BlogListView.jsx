import BreadCrumbSection from "../../components/BreadCrumbSection/BreadCrumbSection";
import { SideBarBlog } from "../../components/SideBarProduct/SideBarProduct";
import { SubscribeWithEmail } from "../../components/SmallCompo/SmallCompo";
import { BlogImages } from "../../assets/assetsExporter";
import BlogCard from "../../components/BlogCard/BlogCard";
import PaginationArea from "../../components/PaginationArea/PaginationArea";

const blogPosts = [
    {
        id: 1,
        title: "Design all kinds of jewelry sets as your own",
        author: "Jimmy Welsch",
        date: {
            day: "25",
            month: "January",
            year: "2025",
        },
        image: BlogImages.blog12,
    },
    {
        id: 2,
        title: "In 2025, new jewelry will enter the market",
        author: "Teresa Bridges",
        date: {
            day: "24",
            month: "January",
            year: "2025",
        },
        image: BlogImages.blog13,
    },
    {
        id: 3,
        title: "How do I choose a jewelry gift for my friend?",
        author: "Jenifer Walker",
        date: {
            day: "21",
            month: "January",
            year: "2025",
        },
        image: BlogImages.blog14,
    },
    {
        id: 4,
        title: "Make your moments memorable by jewelry",
        author: "Joe Ladner",
        date: {
            day: "17",
            month: "January",
            year: "2025",
        },
        image: BlogImages.blog15,
    },
    {
        id: 5,
        title: "Some simple rules to find the best online jewelry",
        author: "Harvey Gear",
        date: {
            day: "15",
            month: "January",
            year: "2025",
        },
        image: BlogImages.blog16,
    },
];



function BlogListView()
{
    return <>
        <BreadCrumbSection title={"Blog"}></BreadCrumbSection>
        <div className="js-blog-area ptb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <SideBarBlog></SideBarBlog>
                    </div>
                    <div className="col-lg-8">
                        {blogPosts.map((data,index)=>(
                            <BlogCard variant="two" data={data} key={index}></BlogCard>
                        ))}
                        <PaginationArea variant="two"></PaginationArea>
                    </div>
                </div>
            </div>
        </div>
        <SubscribeWithEmail></SubscribeWithEmail>
    </>
}

export default BlogListView;