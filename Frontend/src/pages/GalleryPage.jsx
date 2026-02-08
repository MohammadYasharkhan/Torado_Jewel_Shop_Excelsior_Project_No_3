import BreadCrumbSection from "../components/BreadCrumbSection/BreadCrumbSection";
import { SubscribeWithEmail } from "../components/SmallCompo/SmallCompo";

import { Icons,InstagramImages } from "../assets/assetsExporter";

const galleryImages = [
    InstagramImages.insta1, InstagramImages.insta2, InstagramImages.insta3, InstagramImages.insta4,
    InstagramImages.insta5, InstagramImages.insta6, InstagramImages.insta7, InstagramImages.insta8,
    InstagramImages.insta9, InstagramImages.insta10, InstagramImages.insta11, InstagramImages.insta12,
    InstagramImages.insta13, InstagramImages.insta14, InstagramImages.insta15, InstagramImages.insta16,
];

const columns = [[], [], [], []];

galleryImages.forEach((img, index) => {
    columns[index % 4].push(img);
});

function GalleryPage() {
    return <>
        <BreadCrumbSection title={"Gallery"}></BreadCrumbSection>
        <div className="container ptb-100">
            <div className="main_area_section_title style-two text-center mb-40">
                <h2 className="position-relative d-inline-block mb-0"><i className="bx bxl-instagram-alt"></i>#Love Torado On Instagram</h2>
            </div>

            <div className="js-gallery-wrap">
                {columns.map((column, colIndex) => (
                    <div className="column size-1of4" key={colIndex}>
                        {column.map((img, imgIndex) => (
                            <div
                                className="js-gallery-card position-relative overflow-hidden mb-20"
                                key={imgIndex}
                            >
                                <img src={img} alt="Gallery" />
                                <a
                                    href="#"
                                    className="position-absolute top-0 start-0 w-100 h-100"
                                ></a>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            <div className="text-center">
                <button className="js-btn style-two border-0">Load More<img src={Icons.upRightArrow} alt="Arrow"/></button>
            </div>
        </div>
        <SubscribeWithEmail></SubscribeWithEmail>
        </>
}

export default GalleryPage;