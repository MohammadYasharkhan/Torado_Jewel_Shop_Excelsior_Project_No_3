import './ProductModal.css';
import { ProductImages } from '../../../assets/assetsExporter';

function ProductModal() {
    return <div className='exit_product_popup'>
        <div className='product_card style-three d-flex flex-wrap align-items-center'>
            <div className='product_image position-relative overflow-hidden z-1'>
                <img alt="product img" src={ProductImages.thumbs.thumb5} className='d-block mx-auto' />
            </div>
            <div className="product_content">
                <ul className="product_rating list-unstyled d-flex align-items-center mb-2">
                    <li className="d-inline-block js_text_primary"><i className="bx bxs-star"></i></li>
                    <li className="d-inline-block js_text_primary"><i className="bx bxs-star"></i></li>
                    <li className="d-inline-block js_text_primary"><i className="bx bxs-star"></i></li>
                    <li className="d-inline-block js_text_primary"><i className="bx bxs-star"></i></li>
                    <li className="d-inline-block js_text_primary"><i className="bx bxs-star"></i></li>
                </ul>
                <h3 className='fs-16 fw-normal mb-1'><a href="/" className="d-inline-block js_text-title">Weeding Ring</a></h3>
                <span className="d-block mb-15 js js_text_primary fs-14">$400</span>
                <p className='fs-14 js_text-title fw-medium mb-0 lh-1'>Purchased (Rosalina)</p>
                <span className="fs-12">05 minutes ago</span>
            </div>
        </div>
    </div>
}

export default ProductModal;