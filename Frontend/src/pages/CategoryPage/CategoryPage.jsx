import { SubscribeWithEmail } from '../../components/SmallCompo/SmallCompo';
import BreadCrumbSection from '../../components/BreadCrumbSection/BreadCrumbSection';
import './CategoryPage.css';
import CategorySlider from '../../components/CategorySlider/CategorySlider';
import FilterBox from "../../components/FilterBox/FilterBox";
import ShopProductDisplay from "../../components/ShopProductDisplay/ShopProductDisplay";
import PaginationArea from "../../components/PaginationArea/PaginationArea";

function CategoryPage() {
    return <>
        <BreadCrumbSection title={"Category"}></BreadCrumbSection>
        <div className='container ptb-100'>
            <CategorySlider></CategorySlider>
            <FilterBox activeView='grid-4'></FilterBox>
            <ShopProductDisplay withLoadMoreBtn={false} activeView='grid-4'></ShopProductDisplay>
            <PaginationArea></PaginationArea>
        </div>
        <SubscribeWithEmail></SubscribeWithEmail>
    </>;
}

export default CategoryPage;