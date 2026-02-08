import { Link } from "react-router-dom";
import './auth.css';
import buttonImage from "../../assets/images/icons/up-right-arrow.svg";
function SignInForm() {
    return <form className="my_account_form mb-25">
        <div className='form_group mb-15'>
            <label htmlFor="email" className='d-block mb-2 js_title-color'>Email</label>
            <input type="email" name='email' id='signin-email' className='w-100 bg-transparent' placeholder='gillies@torado.com' />
        </div>

        <div className='form_group mb-15'>
            <label htmlFor="password" className='d-block mb-2 js_title-color'>Password</label>
            <input type="password" name='password' id='signin-password' className='w-100 bg-transparent' placeholder='******' />
        </div>

        <div className='d-flex flex-wrap align-items-center justify-content-between mb-20'>
            <div className='form-check checkbox style-two'>
                {/* <input class="form-check-input" type="checkbox" id="test_20"></input> */}
                <label className='form-check-label'>Remember Me</label>
            </div>
            <Link to="/resetpassword" className='js_link style-two'>
                Forgot Your Password
            </Link>
        </div>

        <button type='submit' className='js-btn style-two'>Log In <img src={buttonImage} alt="image" /></button>
    </form>;
}


export default SignInForm;