import BreadCrumbSection from "../../components/BreadCrumbSection/BreadCrumbSection";
import PaginationArea from "../../components/PaginationArea/PaginationArea";
import { SideBarBlog } from "../../components/SideBarProduct/SideBarProduct";
import { SubscribeWithEmail } from "../../components/SmallCompo/SmallCompo";
import { BlogImages } from "../../assets/assetsExporter";
import BlogCard from "../../components/BlogCard/BlogCard";

const blogPosts = [
    {
        id: 1,
        title: "Collect your jewelry ring for the new year",
        author: "Komal Welsch",
        date: {
            day: "12",
            month: "January",
            year: "2025",
        },
        image: BlogImages.blog8, // blog-8.jpg
    },
    {
        id: 2,
        title: "Design all kinds of jewelry sets as your own",
        author: "Jimmy Welsch",
        date: {
            day: "25",
            month: "January",
            year: "2025",
        },
        image: BlogImages.blog1, // blog-1.jpg
    },
    {
        id: 3,
        title: "In 2025, new jewelry will enter the market",
        author: "Teresa Bridges",
        date: {
            day: "24",
            month: "January",
            year: "2025",
        },
        image: BlogImages.blog2,
    },
    {
        id: 4,
        title: "How do I choose a jewelry gift for my friend?",
        author: "Jenifer Walker",
        date: {
            day: "21",
            month: "January",
            year: "2025",
        },
        image: BlogImages.blog9,
    },
    {
        id: 5,
        title: "Make your moments memorable by jewelry",
        author: "Joe Ladner",
        date: {
            day: "17",
            month: "January",
            year: "2025",
        },
        image: BlogImages.blog3,
    },
    {
        id: 6,
        title: "Some simple rules to find the best online jewelry",
        author: "Harvey Gear",
        date: {
            day: "15",
            month: "January",
            year: "2025",
        },
        image: BlogImages.blog4,
    },
];





function BlogGridMix() {
    return <>
        <BreadCrumbSection title={"Blog"}></BreadCrumbSection>
        <div className="js-blog-area ptb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <SideBarBlog></SideBarBlog>
                    </div>
                    <div className="col-lg-8">
                        <div className="row justify-content-center">
                                {blogPosts.map((data, index) => {
                                    const isPrimary = index % 3 === 0;
                                    return (
                                        <div
                                            key={data.id}
                                            className={isPrimary ? "col-12" : "col-md-6"}
                                        >
                                            <BlogCard
                                                data={data}
                                                {...(!isPrimary && { subvariant: "two" })}
                                            />
                                        </div>
                                    );
                                })}
                        </div>
                        <PaginationArea></PaginationArea>
                    </div>
                </div>
            </div>
        </div>
        <SubscribeWithEmail></SubscribeWithEmail>
    </>
}

export default BlogGridMix;