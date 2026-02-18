import { Link } from "react-router-dom";
import './auth.css';
import buttonImage from "../../assets/images/icons/up-right-arrow.svg";
import { useState,useEffect } from "react";
import { loginAPI } from "../../apiCall/auth.api";
import { useAuth } from "../../context/AuthContext";
function SignInForm() {

    const { login,user } = useAuth();

    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const [status, setStatus] = useState("idle");
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setStatus("loading");
            const res = await loginAPI(form);
            login(res);
            setStatus("success");
            setForm({
                email: "",
                password: "",
            });
        } catch (err) {
            console.error(err);
            setStatus("error");
            setError(err.message || "Something went wrong");
        }
    }

    return <form className="my_account_form mb-25" onSubmit={handleSubmit}>
        <div className='form_group mb-15'>
            <label htmlFor="email" className='d-block mb-2 js_title-color'>Email</label>
            <input type="email" name='email' id='signin-email' className='w-100 bg-transparent' placeholder='gillies@torado.com' value={form.email} onChange={handleChange} required />
        </div>

        <div className='form_group mb-15'>
            <label htmlFor="password" className='d-block mb-2 js_title-color'>Password</label>
            <input type="password" name='password' id='signin-password' className='w-100 bg-transparent' placeholder='******' value={form.password} onChange={handleChange} required />
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

        <button type='submit' className='js-btn style-two'>{status === "loading" ? "Submiting" : "Login"} <img src={buttonImage} alt="image" /></button>

        {status === "error" && (
            <div className="text-danger fs-3 mb-2">
                {error}
            </div>
        )}

        {status === "success" && (
            <div className="text-success fs-3 mb-2">
                Login Success {user?.email}
            </div>
        )}
    </form>;
}


export default SignInForm;