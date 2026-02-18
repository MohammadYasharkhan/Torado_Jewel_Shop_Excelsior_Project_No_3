import { useState, useEffect } from "react";
import { newsletterTokenVerify } from "../apiCall/newsLetter.api";

function NewsLetterVerifyPage() {
    const [status, setStatus] = useState("loading");
    useEffect(() => {
        const verifyEmail = async () => {
            const verifyToken = new URLSearchParams(window.location.search).get("token");
            
            console.log(verifyToken);

            if (!verifyToken) {
                setStatus("invalid");
                return;
            }

            try {
                await newsletterTokenVerify({token:verifyToken});
                setStatus("success");
            } catch (err) {
                setStatus("error");
            }
        };

        verifyEmail();
    }, []);


    return (
        <div className="container">
            <div className="row">
                <div className="col-12 text-center">
                    {status === "loading" && <h2>Verifying your email…</h2>}
                    {status === "success" && (
                        <>
                            <h2>✅ Email verified</h2>
                            <p>You’re now subscribed to our newsletter.</p>
                        </>
                    )}
                    {status === "error" && (
                        <>
                            <h2>❌ Verification failed</h2>
                            <p>This link is invalid or expired.</p>
                        </>
                    )}
                    {status === "invalid" && (
                        <>
                            <h2>❌ Invalid link</h2>
                            <p>No verification token found.</p>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default NewsLetterVerifyPage;