import BreadCrumbSection from "../../components/BreadCrumbSection/BreadCrumbSection";
import FeatureProductSwiper from "../../components/Product/FeatureProductSwiper/FeatureProductSwiper";
import ProductCard from "../../components/Product/ProductCard/ProductCard";
import { SubscribeWithEmail } from "../../components/SmallCompo/SmallCompo";
import UserReviewSection from "../../components/UserReviewSection/UserReviewSection";

function ProductGalleryThumbnails()
{   
    return <>
        <BreadCrumbSection title={"Product Gallery Thumbnails"}></BreadCrumbSection>
        <div className="container ptb-100">
            <ProductCard variant="five"></ProductCard>
            <UserReviewSection></UserReviewSection>
        </div>
        <FeatureProductSwiper title="You May Also Like" padding="pb-100"></FeatureProductSwiper>
        <SubscribeWithEmail></SubscribeWithEmail>
    </>
}

export default ProductGalleryThumbnails;