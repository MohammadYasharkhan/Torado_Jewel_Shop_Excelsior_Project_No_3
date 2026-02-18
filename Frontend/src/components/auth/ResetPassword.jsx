import './auth.css';
import buttonImage from "../../assets/images/icons/up-right-arrow.svg";
import { useState } from 'react';
import { forgetPasswordAPI } from '../../apiCall/auth.api';
function ResetPasswordForm() {

    const [email, setEmail] = useState("");

    const [status, setStatus] = useState("idle");
    const [data, setData] = useState(null);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setStatus("loading");
            const res = await forgetPasswordAPI({email});
            setData(res);
            setStatus("success");
        }
        catch (err) {
            console.error(err);
            setStatus("error");
            setError(err.message || "Something went wrong");
        }
    }
    return <form className='my_account_form' onSubmit={handleSubmit}>
        <div className='form_group mb-15'>
            <label htmlFor="email" className='d-block mb-2 js_title-color'>Email</label>
            <input type="email" name='email' id='email' className='w-100 bg-transparent' placeholder='gillies@torado.com' value={email} onChange={handleChange} required />
        </div>
        <div className='form-check checkbox style-two mb-25'>
            {/* <input class="form-check-input" type="checkbox" id="test_20"></input> */}
            <label className='form-check-label'>I'm not a robot</label>
        </div>
        <button type='submit' className='js-btn style-two'>{status === "loading" ? "Submiting" : "Reset Password"}<img src={buttonImage} alt="image" /></button>

        {status === "error" && (
            <div className="text-danger fs-3 mb-2">
                {error}
            </div>
        )}

        {status === "success" && (
            <div className="text-success fs-3 mb-2">
                Message Is Send If Email Exist In DB
            </div>
        )}
    </form>;
}

export default ResetPasswordForm;