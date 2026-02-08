import './CookiesModal.css';
import { Icons } from '../../../assets/assetsExporter';

function CookiesModal({ onClose }) {
    return (
        <div className='cookies_popup'>
            <h5 class="fs-20 fw-normal text-white">Before You Start Shopping</h5>
            <p class="text-white fs-14 mb-2">By clicking Accept Cookies, we can continue to display personalized offers based on your preferences.</p>
            <p class="fs-14 text-white mb-3">If you want to know more about cookies, visit our Privacy Policy page.</p>
            <button className="js-btn style-five bg-transparent mb-3 d-block w-100">Accept <img src={Icons.upRightArrow} alt="arrow" /></button>  
            <button className="js-btn style-six bg-transparent d-block w-100">Decline</button>  
        </div>
    );
}

export default CookiesModal;