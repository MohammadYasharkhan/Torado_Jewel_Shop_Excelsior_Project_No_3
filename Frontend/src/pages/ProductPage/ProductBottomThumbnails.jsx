import BreadCrumbSection from "../../components/BreadCrumbSection/BreadCrumbSection";
import { SubscribeWithEmail } from "../../components/SmallCompo/SmallCompo";
import FeatureProductSwiper from "../../components/Product/FeatureProductSwiper/FeatureProductSwiper";
import ProductCard from "../../components/Product/ProductCard/ProductCard";
import UserReviewSection from "../../components/UserReviewSection/UserReviewSection";

function ProductBottomThumbnails()
{
    return <>
        <BreadCrumbSection title={"Product Bottom Thumbnails"}></BreadCrumbSection>
        <div className="container ptb-100">
            <ProductCard variant="four" subVariant="three"></ProductCard>
            <UserReviewSection></UserReviewSection>
        </div>
        <FeatureProductSwiper title="You May Also Like" padding="pb-100"></FeatureProductSwiper>
        <SubscribeWithEmail></SubscribeWithEmail>
    </>
}

export default ProductBottomThumbnails;