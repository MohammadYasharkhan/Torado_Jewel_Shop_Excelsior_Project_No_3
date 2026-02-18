import './SmallCompo.css';
import { forwardRef, useImperativeHandle } from 'react';
import { Icons, ProductImages } from '../../assets/assetsExporter';
import { useState, useEffect } from 'react';
import { newsletterSubscribe } from '../../apiCall/newsLetter.api';
import { useAuth } from "../../context/AuthContext";
import { getUserCartAPI, removeFromCartAPI, addToCartAPI, batchUpdateCartQtyAPI } from '../../apiCall/cart.api';
import { getUserWishlistAPI, removeFromWishlistAPI } from '../../apiCall/wishlist.api';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

function MainAreaHeading({ title }) {
    return <div className='main_area_section_title mb-20'>
        <h2 className="fw-normal mb-0">{title}</h2>
    </div>;
}

const productDataFeatures = [
    {
        product_image: ProductImages.product8,
        product_name: "Engagement Ring",
        price: 700,
        shopNowLink: "/",
    },
    {
        product_image: ProductImages.product18,
        product_name: "Shiny Diamond Ring",
        price: 500,
        shopNowLink: "/",
    },
    {
        product_image: ProductImages.product5,
        product_name: "New Fashion Ring",
        price: 600,
        shopNowLink: "/",
    },
    {
        product_image: ProductImages.product6,
        product_name: "Color Diamond Ring",
        price: 900,
        shopNowLink: "/",
    },
    {
        product_image: ProductImages.product13,
        product_name: "Lady Ring",
        price: 460,
        shopNowLink: "/",
    },
    {
        product_image: ProductImages.product15,
        product_name: "Silver Diamond Ring",
        price: 400,
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
            const res = await newsletterSubscribe({ email });
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
                                {data.alreadySubscribed === true ? "Email Already Exist" : "Check your email to confirm your subscription."}
                            </div>
                        )}
                    </form>
                    <p className="mb-0 text-center">We’ll never share your email address with a third-party</p>
                </div>
            </div>
        </div>
    </div>
}



const CartTable = forwardRef(({ variant = "one"}, ref) => {
    switch (variant) {
        case "two":
            return <CartTableStyleTwo ref={ref} />;
        default:
            return <CartTableStyleOne />;
    }
});


function CartTableStyleOne() {

    const { isLoggedIn, loading } = useAuth();
    const [items, setItems] = useState([]);
    const [status, setStatus] = useState("idle");

    const [addingToCartId, setAddingToCartId] = useState(null);

    useEffect(() => {

        if (loading) return;

        if (isLoggedIn) {
            console.log(isLoggedIn);
            fetchWishlist();
        } else {
            // Show static data when not logged in
            setItems(productDataFeatures);
            setStatus("success");
        }
    }, [isLoggedIn, loading]);  // ← Re-runs when login status changes



    const IMAGE_BASE_URL = "http://localhost:4000";

    const getImageUrl = (imageData) => {
        if (!imageData) return '';
        if (imageData.startsWith('/uploads')) {
            return `${IMAGE_BASE_URL}${imageData}`;
        } else {
            return imageData;
        }
    };

    const fetchWishlist = async () => {
        try {
            setStatus("loading");
            const res = await getUserWishlistAPI();
            console.log(res);

            const normalized = res.map(item => ({
                ...item,
                product_image: getImageUrl(item.product_image)
            }));

            setItems(normalized);
            setStatus("success");
        } catch (err) {
            console.error(err);
            setStatus("error");
        }
    };

    const handleDelete = async (productId) => {
        if (!isLoggedIn) return;
        try {
            await removeFromWishlistAPI(productId);
            // ✅ Remove from local state (no need to refetch)
            setItems(prev => prev.filter(item => item.product_id !== productId));
        } catch (err) {
            console.error(err);
        }
    };

    const [cartMessage, setCartMessage] = useState({ id: null, msg: "" });

    const handleAddToCart = async (productId) => {
        if (!isLoggedIn) return;
        try {
            setAddingToCartId(productId);
            const res = await addToCartAPI({ productId: productId });

            // adjust these conditions based on your actual API response shape
            if (res.message === "Already Exist record") {
                setCartMessage({ id: productId, msg: "Already in cart!" });
            } else if (res.message === "Record added successfully") {
                setCartMessage({ id: productId, msg: "Added to cart!" });
            }
            // clear message after 2 seconds
            setTimeout(() => setCartMessage({ id: null, msg: "" }), 2000);

        } catch (err) {
            console.error(err);
        } finally {
            setAddingToCartId(null);
        }
    };

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
                {status === "loading" && (
                    <tr>
                        <td colSpan="5" className="text-center">Loading...</td>
                    </tr>
                )}

                {status === "error" && (
                    <tr>
                        <td colSpan="5" className="text-center text-danger">
                            Something went wrong
                        </td>
                    </tr>
                )}

                {(status === "success") && (
                    items.length === 0
                        ? (
                            <tr>
                                <td colSpan="5" className="text-center py-5">
                                    <i className="bx bx-heart fs-1 text-muted d-block mb-2"></i>
                                    <p className="text-muted mb-0">No items wishlisted yet!</p>
                                </td>
                            </tr>
                        )
                        : (
                            items.map((data, index) => (<tr key={index}>
                                <td className='product_thumbnail d-flex align-items-center'>
                                    <div className='image'>
                                        <a href="/">
                                            <img src={data.product_image} alt="image" />
                                        </a>
                                    </div>
                                    <div className='title'>
                                        <h3 className='mb-0'><a href="/" className='js_text-title'>{data.product_name}</a></h3>
                                    </div>
                                </td>
                                <td className='product_subtotal text-center'>
                                    <span className='js_text-title'>${data.price}</span>
                                </td>
                                <td>
                                    <button
                                        className='js-btn style-one'
                                        onClick={() => handleAddToCart(data.product_id)}
                                        disabled={addingToCartId === data.product_id}
                                    >
                                        {addingToCartId === data.product_id ? "Adding..." : "Add To Cart"}
                                        <img src={Icons.upRightArrow} alt="icon" />
                                    </button>
                                    {cartMessage.id === data.product_id && (
                                        <small className={cartMessage.msg === "Already in cart!" ? "text-warning" : "text-success"}>
                                            {cartMessage.msg}
                                        </small>
                                    )}
                                </td>
                                <td className='text-center'>
                                    <span className='js_text-title'>
                                        ${data.item_total ?? data.price}
                                    </span>
                                </td>
                                <td className='text-center'>
                                    <button className='delete-btn js_delete-btn-color bg-transparent border-0' onClick={() => handleDelete(data.product_id)}>
                                        <i className="bx bx-trash"></i>
                                        Delete
                                    </button>
                                </td>
                            </tr>)))
                )}
            </tbody>
        </table>
    </div>
};



const CartTableStyleTwo = forwardRef((props, ref) => {

    const { isLoggedIn, loading } = useAuth();
    const [items, setItems] = useState([]);
    const [status, setStatus] = useState("idle");
    const { setCartMeta } = useCart();

    const [modifiedIds, setModifiedIds] = useState(new Set());

    const navigate = useNavigate();


    useEffect(() => {

        if (loading) return;

        if (isLoggedIn) {
            console.log(isLoggedIn);
            fetchCart();
        } else {
            // Show static data when not logged in
            setItems(productDataFeatures);
            setStatus("success");
        }
    }, [isLoggedIn, loading]);  // ← Re-runs when login status changes



    const IMAGE_BASE_URL = "http://localhost:4000";

    const getImageUrl = (imageData) => {
        if (!imageData) return '';
        if (imageData.startsWith('/uploads')) {
            return `${IMAGE_BASE_URL}${imageData}`;
        } else {
            return imageData;
        }
    };

    const fetchCart = async () => {
        try {
            setStatus("loading");
            const res = await getUserCartAPI();
            console.log(res);

            const normalized = res.items.map(item => ({
                ...item,
                product_image: getImageUrl(item.product_image)
            }));

            setItems(normalized);
            setCartMeta(res.meta);
            setStatus("success");
        } catch (err) {
            console.error(err);
            setStatus("error");
        }
    };



    const handleDelete = async (productId) => {
        if (!isLoggedIn) return;
        try {
            await removeFromCartAPI(productId);
            // ✅ Remove from local state (no need to refetch)
            setItems(prev => prev.filter(item => item.product_id !== productId));
        } catch (err) {
            console.error(err);
        }
    };



    const handleQuantityChange = (productId, delta) => {
        setItems(prev => prev.map(item =>
            item.product_id === productId
                ? { ...item, quantity: Math.max(1, item.quantity + delta) }
                : item
        ));
        setModifiedIds(prev => new Set(prev).add(productId)); // ← track changed items
    };

    const handleUpdateCart = async () => {
        try {
            const payload = {
                items: items
                    .filter(item => modifiedIds.has(item.product_id)) // ← only changed
                    .map(item => ({
                        productId: item.product_id,
                        quantity: item.quantity
                    }))
            };
            console.log(payload);
            await batchUpdateCartQtyAPI(payload);
            
            setModifiedIds(new Set());
            navigate(0); 
        } catch (err) {
            console.error(err);
        }
    };


    useImperativeHandle(ref, () => ({
        updateCart: handleUpdateCart
    }));

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

                {status === "loading" && (
                    <tr>
                        <td colSpan="5" className="text-center">Loading...</td>
                    </tr>
                )}

                {status === "error" && (
                    <tr>
                        <td colSpan="5" className="text-center text-danger">
                            Something went wrong
                        </td>
                    </tr>
                )}


                {(status === "success") && (
                    items.length === 0
                        ? (
                            <tr>
                                <td colSpan="5" className="text-center py-5">
                                    <i className="bx bx-cart fs-1 text-muted d-block mb-2"></i>
                                    <p className="text-muted mb-0">No items present in cart yet!</p>
                                </td>
                            </tr>
                        ) :
                        (
                            items.map((data, index) => (<tr key={index}>
                                <td className='product_thumbnail d-flex align-items-center'>
                                    <div className='image'>
                                        <a href="/">
                                            <img src={data.product_image} alt="image" />
                                        </a>
                                    </div>
                                    <div className='title'>
                                        <h3><a href="/" className='js_text-title'>{data.product_name}</a></h3>
                                        <ul className='list-unstyled mb-0'>
                                            <li>
                                                <button className='delete-btn js_delete-btn-color bg-transparent border-0' onClick={() => handleDelete(data.product_id)}>
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
                                    <span className='js_text-title'>${data.price}</span>
                                </td>
                                <td className='product-quantity'>
                                    <div className="input-counter">
                                        <span className="minus-btn" onClick={() => handleQuantityChange(data.product_id, -1)}>
                                            <i className="bx bx-minus"></i>
                                        </span>
                                        <input type="text" value={data.quantity ?? 1} readOnly />
                                        <span className="plus-btn" onClick={() => handleQuantityChange(data.product_id, +1)}>
                                            <i className="bx bx-plus"></i>
                                        </span>
                                    </div>
                                </td>
                                <td className='text-center'>
                                    <span className='js_text-title'>${data.item_total ?? data.price}</span>
                                </td>
                            </tr>)))
                )}
            </tbody>
        </table>
    </div>
});



export { MainAreaHeading, SubscribeWithEmail, CartTable };