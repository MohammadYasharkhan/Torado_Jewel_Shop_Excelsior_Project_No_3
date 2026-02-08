import BreadCrumbSection from '../../components/BreadCrumbSection/BreadCrumbSection';
import { CartTable, SubscribeWithEmail } from '../../components/SmallCompo/SmallCompo';
import upRighBlackIcon from "../../assets/images/icons/up-right-arrow-black.svg";
import './WishlistPage.css';
function WishlistPage() {
    return <>
        <BreadCrumbSection title={"Wishlist"}></BreadCrumbSection>
        <div className='main_cart_area ptb-100'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-10 offset-lg-1'>
                        <CartTable></CartTable>
                        <div className='row align-items-center mt-4'>
                            <div className='col-md-6 offset-md-6 text-md-end'>
                                <a href="/" className='js_link style-three'>Continue Shopping Cart <img src={upRighBlackIcon} alt="icon" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <SubscribeWithEmail></SubscribeWithEmail>
    </>;
}
export default WishlistPage;