import BreadCrumbSection from '../../components/BreadCrumbSection/BreadCrumbSection';
import { SubscribeWithEmail } from '../../components/SmallCompo/SmallCompo';
import SideBarProduct from '../../components/SideBarProduct/SideBarProduct';
import ShopProductDisplay from '../../components/ShopProductDisplay/ShopProductDisplay';
import FilterBox from '../../components/FilterBox/FilterBox';
import PaginationArea from '../../components/PaginationArea/PaginationArea';
import CollectionCard from '../../components/CollectionCard/CollectionCard';
import { CollectionImages } from '../../assets/assetsExporter';



const collectionCardThreeData = [
    {
        image: CollectionImages.collection7,
        info: {
            title: "Classic Diamond Ring",
            subTitle: "Upto 80% Off",
        }
    },
    {
        image: CollectionImages.collection8,
        info: {
            title: "Make Your Style Everyday",
            subTitle: "100% Original",
        }
    },
];



function ShopWithBanner() {
    return <>
        <BreadCrumbSection title={"Shop With Banner"} linkTitle={"Shop"}></BreadCrumbSection>
        <div className='container ptb-100'>
            <div className='row mb-20'>
                {collectionCardThreeData.map((data, index) => (
                    <div className="col-lg-6" key={index}>
                        <CollectionCard data={data} variant='three'></CollectionCard>
                    </div>
                ))}
            </div>
            <div className='row'>
                <div className='col-xl-3 col-lg-4'>
                    <SideBarProduct></SideBarProduct>
                </div>
                <div className='col-xl-9 col-lg-8'>
                    <FilterBox></FilterBox>
                    <ShopProductDisplay withLoadMoreBtn={false}></ShopProductDisplay>
                    <PaginationArea></PaginationArea>
                </div>
            </div>
        </div>
        <SubscribeWithEmail />
    </>;
}

export default ShopWithBanner;