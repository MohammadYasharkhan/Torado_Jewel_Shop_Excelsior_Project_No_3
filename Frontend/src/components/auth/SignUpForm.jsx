import './auth.css';
import buttonImage from "../../assets/images/icons/up-right-arrow.svg";
function SignUpForm() {
    return <form className='my_account_form mb-25'>
        <div className='form_group mb-15'>
            <label htmlFor="name" className='d-block mb-2 js_title-color'>Your Name</label>
            <input type="text" name='name' id='name' className='w-100 bg-transparent' placeholder='Thomas Gillies' />
        </div>

        <div className='form_group mb-15'>
            <label htmlFor="email" className='d-block mb-2 js_title-color'>Email</label>
            <input type="text" name='email' id='signup-email' className='w-100 bg-transparent' placeholder='gillies@torado.com' />
        </div>

        <div className='form_group mb-15'>
            <label htmlFor="password" className='d-block mb-2 js_title-color'>Password</label>
            <input type="text" name='password' id='signup-password' className='w-100 bg-transparent' placeholder='*****' />
        </div>

        <div className='form_group mb-15'>
            <label htmlFor="repassword" className='d-block mb-2 js_title-color'>Re-enter Password</label>
            <input type="text" name='repassword' id='signup-repassword' className='w-100 bg-transparent' placeholder='*****' />
        </div>

        <div className='d-flex flex-wrap align-items-center justify-content-between mb-20'>
            <div className='form-check checkbox style-two'>
                {/* <input class="form-check-input" type="checkbox" id="test_20"></input> */}
                <label className='form-check-label'>I'm confirming that I've read & agree with <a href="/" className="js_link style-one">Terms & Conditions</a> and  <a href="/" className="js_link style-one">Privacy Policy</a>  </label>
            </div>
        </div>

        <button type='submit' className='js-btn style-two'>Create An Account <img src={buttonImage} alt="image" /></button>
    </form>;
}

export default SignUpForm;
