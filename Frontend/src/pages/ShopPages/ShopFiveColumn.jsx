import BreadCrumbSection from '../../components/BreadCrumbSection/BreadCrumbSection';
import { SubscribeWithEmail } from '../../components/SmallCompo/SmallCompo';
import SideBarProduct from '../../components/SideBarProduct/SideBarProduct';
import ShopProductDisplay from '../../components/ShopProductDisplay/ShopProductDisplay';
import FilterBox from '../../components/FilterBox/FilterBox';
import PaginationArea from '../../components/PaginationArea/PaginationArea';

function ShopFiveColumn()
{
    return <>
        <BreadCrumbSection title={"Shop 5 Columns"} linkTitle={"Shop"}></BreadCrumbSection>
        <div className='container ptb-100'>
            <div className='row'>
                <div className='col-xl-3 col-lg-4'>
                    <SideBarProduct></SideBarProduct>
                </div>
                <div className='col-xl-9 col-lg-8'>
                    <FilterBox activeView='grid-5'></FilterBox>
                    <ShopProductDisplay withLoadMoreBtn={false} activeView='grid-5'></ShopProductDisplay>
                    <PaginationArea></PaginationArea>
                </div>
            </div>
        </div>
        <SubscribeWithEmail />
    </>;
}

export default ShopFiveColumn;