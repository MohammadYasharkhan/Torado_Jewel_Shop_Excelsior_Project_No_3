import './SubscribeModal.css';
import { Icons } from '../../../assets/assetsExporter';

function SubscribeModal({ onClose }) {
    return (
        <div className='subscribe_popup'>
            <div className='subscribe_popup_bg bg-f'></div> 
            <div className='subscribe_popup_sub_box'>
                <h5 class="fs-20 fw-normal text-white mb-1">Subscribe To Our Newsletter</h5>
                <p class="fs-14 mb-25 text-white">Enter your email to our newsletter and get 25% off your first purchase</p>
                <form className='subscribe_popup_form'> 
                    <input type="text" className='input-newsletter w-100 bg-transparent js_text-para' name='EMAIL' placeholder='Your email address' required autoComplete='off'/>
                    <button type='submit' className='js-btn style-five bg-transparent position-relative border-0'>Subscribe Now <img src={Icons.upRightArrow} alt="img" /></button>
                </form>    
            </div> 
        </div>
    );
}

export default SubscribeModal;