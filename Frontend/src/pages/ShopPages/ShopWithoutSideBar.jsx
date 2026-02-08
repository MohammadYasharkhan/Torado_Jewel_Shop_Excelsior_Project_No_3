import BreadCrumbSection from '../../components/BreadCrumbSection/BreadCrumbSection';
import { SubscribeWithEmail } from '../../components/SmallCompo/SmallCompo';
import ShopProductDisplay from '../../components/ShopProductDisplay/ShopProductDisplay';
import FilterBox from '../../components/FilterBox/FilterBox';
import PaginationArea from '../../components/PaginationArea/PaginationArea';

function ShopWithoutSideBar()
{
    return <>
        <BreadCrumbSection title={"Shop Without SideBar"} linkTitle={"Shop"}></BreadCrumbSection>
        <div className='container ptb-100'>
            <FilterBox></FilterBox>
            <ShopProductDisplay withLoadMoreBtn={false}></ShopProductDisplay>
            <PaginationArea></PaginationArea>
        </div>
        <SubscribeWithEmail />
    </>;
}

export default ShopWithoutSideBar;