import './ShopProductDisplay.css';
import ProductCard from '../Product/ProductCard/ProductCard';
// import { ProductImages } from '../../assets/assetsExporter';
import { getAllProducts } from '../../apiCall/apiClient';
import { useState,useEffect,useMemo } from 'react';


function ShopProductDisplay({ withLoadMoreBtn = true, activeView = "grid-3" }) {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let isMounted = true;

        setLoading(true);
        getAllProducts()
            .then((data) => {
                if (isMounted) setProducts(data);
                console.log(products);
            })
            .catch((err) => {
                console.error(err);
                if (isMounted) setError("Failed to load products");
            })
            .finally(() => {
                if (isMounted) setLoading(false);
            });

        return () => {
            isMounted = false;
        };
    }, []);

    const listViewData = useMemo(() => products.slice(0, 8), [products]);
    const gridTwoData = useMemo(() => products.slice(0, 12), [products]);
    const gridThreeData = useMemo(() => products.slice(0, 18), [products]);
    const gridFourData = useMemo(() => products.slice(0, 20), [products]);
    const gridFiveData = useMemo(() => products.slice(0, 25), [products]);

    if (loading) {
        return (
            <div className="text-center py-5">
                <h4>Loading products...</h4>
            </div>
        );
    }

    /* 🔹 Error state */
    if (error) {
        return (
            <div className="text-center py-5">
                <h4 className='text-danger'>{error}</h4>
            </div>
        );
    }


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