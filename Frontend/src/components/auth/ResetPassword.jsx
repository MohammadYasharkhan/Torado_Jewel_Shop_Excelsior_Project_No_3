import './auth.css';
import buttonImage from "../../assets/images/icons/up-right-arrow.svg";
function ResetPasswordForm() {
    return <form className='my_account_form'>
        <div className='form_group mb-15'>
            <label htmlFor="email" className='d-block mb-2 js_title-color'>Email</label>
            <input type="email" name='email' id='email' className='w-100 bg-transparent' placeholder='gillies@torado.com' />
        </div>
        <div className='form-check checkbox style-two mb-25'>
            {/* <input class="form-check-input" type="checkbox" id="test_20"></input> */}
            <label className='form-check-label'>I'm not a robot</label>
        </div>
        <button type='submit' className='js-btn style-two'>Reset Password<img src={buttonImage} alt="image" /></button>
    </form>;
}

export default ResetPasswordForm;