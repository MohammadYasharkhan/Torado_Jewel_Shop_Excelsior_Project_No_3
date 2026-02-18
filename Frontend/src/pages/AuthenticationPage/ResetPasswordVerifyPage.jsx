import { verifyResetPasswordTokenAPI } from "../../apiCall/auth.api";
import ChangePasswordForm from "../../components/auth/ChangePassword";
import BreadCrumbSection from "../../components/BreadCrumbSection/BreadCrumbSection";
import { SubscribeWithEmail } from "../../components/SmallCompo/SmallCompo";
import './AuthenticationPage.css';
import { useState ,useEffect } from "react";
function ResetPasswordVerifyPage() {

    const [status, setStatus] = useState("loading");
    const [data, setData] = useState(null);
    const [error, setError] = useState("");
    const [resetToken, setResetToken] = useState(null);

    useEffect(() => {
        const verifyResetPasswordToken = async () => {
            const verifyToken = new URLSearchParams(window.location.search).get("token");

            console.log(verifyToken);

            if (!verifyToken) {
                setStatus("invalid");
                return;
            }

            try {
                const res = await verifyResetPasswordTokenAPI({ token: verifyToken });
                setData(res);
                setResetToken(verifyToken);
                setStatus("success");
            } catch (err) {

                console.log(err);
                setStatus("error");
                setError(err.message || "Something went wrong");
            }
        };

        verifyResetPasswordToken();
    }, []);


    return <>
        <BreadCrumbSection title={"Change Password"}></BreadCrumbSection>
        <div className='container ptb-100'>
            <div className='row'>
                    {status === "success" && (
                        <div className='col-lg-6 offset-lg-3 col-md-8 offset-md-2'>
                            <div className='main_area_section_title mb-20'>
                                <h2 className='fw-normal mb-1'>Change Password</h2>
                                <p className='mb-0 text-primary fs-5'>Hello, {data.email} Change Your Password Here Below.</p>
                            </div>
                            <ChangePasswordForm token={resetToken} />
                        </div>
                    )}

                    {status === "error" && (
                        <div className='col-12 text-center'>
                        <div className="text-danger fs-3 mb-2">
                            {error}
                        </div>
                        </div>
                    )}
            </div>
        </div>
        <SubscribeWithEmail></SubscribeWithEmail>
    </>
}

export default ResetPasswordVerifyPage;