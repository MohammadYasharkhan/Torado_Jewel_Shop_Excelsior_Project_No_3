import './SmallCompo.css';
import { Icons, ProductImages } from '../../assets/assetsExporter';
import { useState } from 'react';
import { newsletterSubscribe } from '../../apiCall/newsLetter.api';

function MainAreaHeading({ title }) {
    return <div className='main_area_section_title mb-20'>
        <h2 className="fw-normal mb-0">{title}</h2>
    </div>;
}

const productDataFeatures = [
    {
        itemImage: ProductImages.product8,
        itemName: "Engagement Ring",
        itemPrice: 700,
        shopNowLink: "/",
    },
    {
        itemImage: ProductImages.product18,
        itemName: "Shiny Diamond Ring",
        itemPrice: 500,
        shopNowLink: "/",
    },
    {
        itemImage: ProductImages.product5,
        itemName: "New Fashion Ring",
        itemPrice: 600,
        shopNowLink: "/",
    },
    {
        itemImage: ProductImages.product6,
        itemName: "Color Diamond Ring",
        itemPrice: 900,
        shopNowLink: "/",
    },
    {
        itemImage: ProductImages.product13,
        itemName: "Lady Ring",
        itemPrice: 460,
        shopNowLink: "/",
    },
    {
        itemImage: ProductImages.product15,
        itemName: "Silver Diamond Ring",
        itemPrice: 400,
        shopNowLink: "/",
    },
];


function SubscribeWithEmail() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState("idle");
    const [data, setData] = useState(null);
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email) {
            setStatus("error");
            return;
        }

        try {
            setStatus("loading");
            const res=await newsletterSubscribe({ email });
            setData(res);
            setStatus("success");
            setEmail("");
        } catch (err) {
            console.log(err);
            setStatus("error");
        }
    };

    return <div className='subscribe_area bg-f ptb-100'>
        <div className='container'>
            <div className='row'>
                <div className='col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 px-xxl-1'>
                    <div className='main_area_section_title text-center'>
                        <h2 className="fw-normal mb-2">Sign Up To Love Torado</h2>
                        <p className='mb-0'>Join the Torado family and you'll get access to exclusive discounts, special offers and more!</p>
                    </div>
                    <form className='subscribe_now_form' onSubmit={handleSubmit}>
                        <div className='form_group position-relative'>
                            <input type="email" className='input_subscribe w-100 bg-white js_text-para' placeholder='Your email address' name='email' value={email} onChange={(e) => setEmail(e.target.value)} disabled={status === "loading"} required />
                            <button type='submit' className='js-btn style-one border-0' style={{ pointerEvents: "all", cursor: "pointer" }} disabled={status === "loading"}>
                                {status === "loading" ? "Submitting..." : "Subscribe Now"}
                                <img src={Icons.upRightArrow} alt="img" />
                            </button>
                        </div>

                        {status === "error" && (
                            <div className="validation-danger">
                                Please enter your email correctly.
                            </div>
                        )}

                        {status === "success" && (
                            <div className="validation-success">
                                {data.alreadySubscribed===true ? "Email Already Exist" : "Check your email to confirm your subscription." }
                            </div>
                        )}
                    </form>
                    <p className="mb-0 text-center">We’ll never share your email address with a third-party</p>
                </div>
            </div>
        </div>
    </div>
}



function CartTable({ variant = "one" }) {
    switch (variant) {
        case "two":
            return <CartTableStyleTwo />;
        default:
            return <CartTableStyleOne />;
    }
}


function CartTableStyleOne() {
    return <div className='cart_table_area table-responsive'>
        <table className="table mb-0">
            <thead>
                <tr>
                    <th>Items</th>
                    <th>Price</th>
                    <th>Add</th>
                    <th className='text-center'>Total</th>
                    <th className='text-center'>Remove</th>
                </tr>
            </thead>
            <tbody>
                {productDataFeatures.map((data, index) => (<tr key={index}>
                    <td className='product_thumbnail d-flex align-items-center'>
                        <div className='image'>
                            <a href="/">
                                <img src={data.itemImage} alt="image" />
                            </a>
                        </div>
                        <div className='title'>
                            <h3 className='mb-0'><a href="/" className='js_text-title'>{data.itemName}</a></h3>
                        </div>
                    </td>
                    <td className='product_subtotal text-center'>
                        <span className='js_text-title'>${data.itemPrice}</span>
                    </td>
                    <td>
                        <button className='js-btn style-one'>
                            Add To Cart
                            <img src={Icons.upRightArrow} alt="icon" />
                        </button>
                    </td>
                    <td className='text-center'>
                        <span className='js_text-title'>${data.itemPrice}</span>
                    </td>
                    <td className='text-center'>
                        <button className='delete-btn js_delete-btn-color bg-transparent border-0'>
                            <i class="bx bx-trash"></i>
                            Delete
                        </button>
                    </td>
                </tr>))}

            </tbody>
        </table>
    </div>
};



function CartTableStyleTwo() {
    return <div className='cart_table_area table-responsive'>
        <table className="table mb-0">
            <thead>
                <tr>
                    <th>Items</th>
                    <th className='text-center'>Price</th>
                    <th className='text-center'>Quantity</th>
                    <th className='text-center'>Total</th>
                </tr>
            </thead>
            <tbody>
                {productDataFeatures.map((data, index) => (<tr key={index}>
                    <td className='product_thumbnail d-flex align-items-center'>
                        <div className='image'>
                            <a href="/">
                                <img src={data.itemImage} alt="image" />
                            </a>
                        </div>
                        <div className='title'>
                            <h3><a href="/" className='js_text-title'>{data.itemName}</a></h3>
                            <ul className='list-unstyled mb-0'>
                                <li>
                                    <button className='delete-btn js_delete-btn-color bg-transparent border-0'>
                                        <i className="bx bx-trash"></i>
                                        Delete
                                    </button>
                                </li>
                                <li>
                                    <button className='js-save-btn bg-transparent border-0'>
                                        <i className="bx bx-heart"></i>
                                        Save for later
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </td>
                    <td className='product_subtotal text-center'>
                        <span className='js_text-title'>${data.itemPrice}</span>
                    </td>
                    <td className='product-quantity'>
                        <div className="input-counter">
                            <span className="minus-btn">
                                <i className="bx bx-minus"></i>
                            </span>
                            <input type="text" value="1" />
                            <span className="plus-btn">
                                <i className="bx bx-plus"></i>
                            </span>
                        </div>
                    </td>
                    <td className='text-center'>
                        <span className='js_text-title'>${data.itemPrice}</span>
                    </td>
                </tr>))}
            </tbody>
        </table>
    </div>
}



export { MainAreaHeading, SubscribeWithEmail, CartTable };