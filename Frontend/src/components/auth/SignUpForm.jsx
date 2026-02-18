import './auth.css';
import buttonImage from "../../assets/images/icons/up-right-arrow.svg";
import { useState,useEffect } from 'react';
import { signupAPI } from '../../apiCall/auth.api';
function SignUpForm() {

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        repassword: "",
    });

    const [status, setStatus] = useState("idle");
    const [data, setData] = useState(null);
    const [error,setError] = useState("");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Frontend-only validation
        if (form.password !== form.repassword) {
            setStatus("error");
            return;
        }


        // ✅ Only send required backend fields
        const payload = {
            name: form.name,
            email: form.email,
            password: form.password,
        };

        try {
            setStatus("loading");
            const res=await signupAPI(payload);
            setData(res);
            setStatus("success");
            setForm({
                name: "",
                email: "",
                password :"",
                repassword: "",
            });
        } catch (err) {
            console.error(err);
            setStatus("error");
            setError(err.message || "Something went wrong");
        }
    };



    return <form className='my_account_form mb-25' onSubmit={handleSubmit}>
        <div className='form_group mb-15'>
            <label htmlFor="name" className='d-block mb-2 js_title-color'>Your Name</label>
            <input type="text" name='name' id='name' className='w-100 bg-transparent' placeholder='Thomas Gillies' value={form.name} onChange={handleChange} required/>
        </div>

        <div className='form_group mb-15'>
            <label htmlFor="email" className='d-block mb-2 js_title-color'>Email</label>
            <input type="text" name='email' id='signup-email' className='w-100 bg-transparent' placeholder='gillies@torado.com'  value={form.email} onChange={handleChange} required/>
        </div>

        <div className='form_group mb-15'>
            <label htmlFor="password" className='d-block mb-2 js_title-color'>Password</label>
            <input type="text" name='password' id='signup-password' className='w-100 bg-transparent' placeholder='*****' value={form.password} onChange={handleChange} required />
        </div>

        <div className='form_group mb-15'>
            <label htmlFor="repassword" className='d-block mb-2 js_title-color'>Re-enter Password</label>
            <input type="text" name='repassword' id='signup-repassword' className='w-100 bg-transparent' placeholder='*****' value={form.repassword} onChange={handleChange} required/>
        </div>

        <div className='d-flex flex-wrap align-items-center justify-content-between mb-20'>
            <div className='form-check checkbox style-two'>
                {/* <input class="form-check-input" type="checkbox" id="test_20"></input> */}
                <label className='form-check-label'>I'm confirming that I've read & agree with <a href="/" className="js_link style-one">Terms & Conditions</a> and  <a href="/" className="js_link style-one">Privacy Policy</a>  </label>
            </div>
        </div>

        <button type='submit' className='js-btn style-two'>{status === "loading" ? "Creating..." : "Create Account"} <img src={buttonImage} alt="image" /></button>

        {status === "error" && (
            <div className="text-danger fs-3 mb-2">
                {error}
            </div>
        )}

        {status === "success" && (
            <div className="text-success fs-3 mb-2">
                SIGNUP SUCCESS {data.name} & {data.email}
            </div>  
        )}
    </form>;
}

export default SignUpForm;
