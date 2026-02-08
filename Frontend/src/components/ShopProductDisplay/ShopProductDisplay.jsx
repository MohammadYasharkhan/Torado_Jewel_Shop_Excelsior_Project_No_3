import './ShopProductDisplay.css';
import ProductCard from '../Product/ProductCard/ProductCard';
import { ProductImages } from '../../assets/assetsExporter';


const allProducts = [
    { itemImage: ProductImages.product1, itemName: "New Fashion Earring", itemPrice: 600, isSaleAvailable: true },
    { itemImage: ProductImages.product5, itemName: "New Fashion Earring", itemPrice: 600, isSaleAvailable: true },
    { itemImage: ProductImages.product6, itemName: "Color Diamond Ring", itemPrice: 900, isSaleAvailable: false },
    { itemImage: ProductImages.product7, itemName: "Stacking Ring", itemPrice: 200, isSaleAvailable: true },
    { itemImage: ProductImages.product8, itemName: "New Sliver Ring", itemPrice: 400, isSaleAvailable: false },
    { itemImage: ProductImages.product9, itemName: "Modern Crystal Ring", itemPrice: 450, isSaleAvailable: true },
    { itemImage: ProductImages.product10, itemName: "Shiny Diamond Ring", itemPrice: 540, isSaleAvailable: false },
    { itemImage: ProductImages.product11, itemName: "Modern Stone Ring", itemPrice: 300, isSaleAvailable: true },
    { itemImage: ProductImages.product12, itemName: "Anniversary Ring", itemPrice: 450, isSaleAvailable: false },
    { itemImage: ProductImages.product13, itemName: "Silver Diamond Ring", itemPrice: 750, isSaleAvailable: true },
    { itemImage: ProductImages.product14, itemName: "Silver Ring", itemPrice: 400, isSaleAvailable: false },
    { itemImage: ProductImages.product15, itemName: "Natural Stone Ring", itemPrice: 200, isSaleAvailable: true },
    { itemImage: ProductImages.product16, itemName: "Gold Plated Diamond Ring", itemPrice: 350, isSaleAvailable: false },
    { itemImage: ProductImages.product17, itemName: "Modern Crystal Ring", itemPrice: 450, isSaleAvailable: true },
    { itemImage: ProductImages.product18, itemName: "Shiny Diamond Ring", itemPrice: 500, isSaleAvailable: false },
    { itemImage: ProductImages.product19, itemName: "Modern Stone Ring", itemPrice: 430, isSaleAvailable: true },
    { itemImage: ProductImages.product20, itemName: "Modern Crystal Ring", itemPrice: 450, isSaleAvailable: true },
    { itemImage: ProductImages.product21, itemName: "Shiny Diamond Ring", itemPrice: 500, isSaleAvailable: false },
    { itemImage: ProductImages.product22, itemName: "Modern Stone Ring", itemPrice: 430, isSaleAvailable: true },
    { itemImage: ProductImages.product23, itemName: "Shiny Diamond Ring", itemPrice: 500, isSaleAvailable: false },
    { itemImage: ProductImages.product24, itemName: "Modern Stone Ring", itemPrice: 430, isSaleAvailable: true },
    { itemImage: ProductImages.product25, itemName: "Modern Crystal Ring", itemPrice: 450, isSaleAvailable: true },
    { itemImage: ProductImages.product26, itemName: "Shiny Diamond Ring", itemPrice: 500, isSaleAvailable: false },
    { itemImage: ProductImages.product27, itemName: "Modern Stone Ring", itemPrice: 430, isSaleAvailable: true },
    { itemImage: ProductImages.product28, itemName: "Shiny Diamond Ring", itemPrice: 500, isSaleAvailable: false },
];


const listViewData = allProducts.slice(0, 8);
const gridTwoData = allProducts.slice(0, 12);
const gridThreeData = allProducts.slice(0, 18);
const gridFourData = allProducts.slice(0, 20);
const gridFiveData = allProducts.slice(0, 25);




function ShopProductDisplay({ withLoadMoreBtn = true, activeView = "grid-3" }) {
    return <div className='tab-content shop_product_tab_content'>
        <div className={`tab-pane fade ${activeView == "list-view" ? "show active" : ""}`} id='list-view' role='tabpanel'>
            <div className='shop_product_list_wrap'>
                {listViewData.map((data, index) => (
                    <ProductCard variant='three' data={data} key={index}></ProductCard>
                ))}
            </div>
        </div>

        <div className={`tab-pane fade ${activeView == "grid-2" ? "show active" : ""}`} role='tabpanel' id='grid-2'>
            <div className='row justify-content-center'>
                {gridTwoData.map((data, index) => (
                    <div className='col-md-6' key={index}>
                        <ProductCard variant='one' data={data} mb='mb-45'></ProductCard>
                    </div>
                ))}
            </div>
        </div>


        <div className={`tab-pane fade ${activeView == "grid-3" ? "show active" : ""}`} id='grid-3' role='tabpanel'>
            <div className='row justify-content-center'>
                {gridThreeData.map((data, index) => (
                    <div className='col-xl-4 col-md-6' key={index}>
                        <ProductCard variant='one' data={data} mb='mb-45'></ProductCard>
                    </div>
                ))}
            </div>
        </div>


        <div className={`tab-pane fade ${activeView == "grid-4" ? "show active" : ""}`} id='grid-4' role='tabpanel'>
            <div className='row justify-content-center'>
                {gridFourData.map((data, index) => (
                    <div className='col-xxl-3 col-xl-4 col-md-6' key={index}>
                        <ProductCard variant='one' data={data} mb='mb-45'></ProductCard>
                    </div>
                ))}
            </div>
        </div>



        <div className={`tab-pane fade ${activeView == "grid-5" ? "show active" : ""}`} id='grid-5' role='tabpanel'>
            <div className='row justify-content-center'>
                <div className='large_view_product_card_wrap'>
                    {gridFiveData.map((data, index) => (
                        <ProductCard variant='one' data={data} key={index} mb='mb-45' fontSize='fs-16'></ProductCard>
                    ))}
                </div>
            </div>
        </div>

        {withLoadMoreBtn && <div className='text-center'>
            <a href="/shop" className='js-btn style-two'>Load More</a>
        </div>}

    </div>
}

export default ShopProductDisplay;