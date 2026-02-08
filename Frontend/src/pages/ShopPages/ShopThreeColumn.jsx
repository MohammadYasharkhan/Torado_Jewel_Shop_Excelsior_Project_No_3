import BreadCrumbSection from '../../components/BreadCrumbSection/BreadCrumbSection';
import { SubscribeWithEmail } from '../../components/SmallCompo/SmallCompo';
import SideBarProduct from '../../components/SideBarProduct/SideBarProduct';
import ShopProductDisplay from '../../components/ShopProductDisplay/ShopProductDisplay';
import FilterBox from '../../components/FilterBox/FilterBox';
import PaginationArea from '../../components/PaginationArea/PaginationArea';

function ShopThreeColumn()
{
    return <>
        <BreadCrumbSection title={"Shop 3 Columns"} linkTitle={"Shop"}></BreadCrumbSection>
        <div className='container ptb-100'>
            <div className='row'>
                <div className='col-xl-3 col-lg-4'>
                    <SideBarProduct></SideBarProduct>
                </div>
                <div className='col-xl-9 col-lg-8'>
                    <FilterBox activeView='grid-3'></FilterBox>
                    <ShopProductDisplay withLoadMoreBtn={false}></ShopProductDisplay>
                    <PaginationArea></PaginationArea>
                </div>
            </div>
        </div>
        <SubscribeWithEmail />
    </>;
}

export default ShopThreeColumn;