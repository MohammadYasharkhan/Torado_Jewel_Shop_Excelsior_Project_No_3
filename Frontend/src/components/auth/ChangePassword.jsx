import './auth.css';
import buttonImage from "../../assets/images/icons/up-right-arrow.svg";
import { useState } from 'react';
import { resetPasswordAPI } from '../../apiCall/auth.api';
function ChangePasswordForm({token}) {
    const [form, setForm] = useState({
        password: "",
        repassword: "",
    });

    const [status, setStatus] = useState("idle");
    const [data, setData] = useState(null);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();


        if (form.password !== form.repassword) {
            setStatus("error");
            return;
        }

        const payload = {
            token:token,
            password: form.password,
        };

        try {
            setStatus("loading");
            const res = await resetPasswordAPI(payload);
            setData(res);
            setStatus("success");
            setForm({
                password :"",
                repassword: "",
            });
        }
        catch (err) {
            console.error(err);
            setStatus("error");
            setError(err.message || "Something went wrong");
        }
    }
    return <form className='my_account_form' onSubmit={handleSubmit}>
        <div className='form_group mb-15'>
            <label htmlFor="password" className='d-block mb-2 js_title-color'>New Password</label>
            <input type="text" name='password' id='password' className='w-100 bg-transparent' placeholder='******' value={form.password} onChange={handleChange} required />
        </div>

        <div className='form_group mb-15'>
            <label htmlFor="repassword" className='d-block mb-2 js_title-color'>Re-enter New Password</label>
            <input type="text" name='repassword' id='repassword' className='w-100 bg-transparent' placeholder='******' value={form.repassword} onChange={handleChange} required />
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
                Password Change Success.
            </div>
        )}
    </form>;
}

export default ChangePasswordForm;

