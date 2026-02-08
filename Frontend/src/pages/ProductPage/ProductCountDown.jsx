import BreadCrumbSection from "../../components/BreadCrumbSection/BreadCrumbSection";
import FeatureProductSwiper from "../../components/Product/FeatureProductSwiper/FeatureProductSwiper";
import ProductCard from "../../components/Product/ProductCard/ProductCard";
import { SubscribeWithEmail } from "../../components/SmallCompo/SmallCompo";
import UserReviewSection from "../../components/UserReviewSection/UserReviewSection";

function ProductCountDown()
{   
    return <>
        <BreadCrumbSection title={"Product Countdown"}></BreadCrumbSection>
        <div className="container ptb-100">
            <ProductCard variant="four" subVariant="two" saleEnd={true}></ProductCard>
            <UserReviewSection></UserReviewSection>
        </div>
        <FeatureProductSwiper title="You May Also Like" padding="pb-100"></FeatureProductSwiper>
        <SubscribeWithEmail></SubscribeWithEmail>
    </>
}

export default  ProductCountDown;