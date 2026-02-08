import { SubscribeWithEmail } from "../components/SmallCompo/SmallCompo";
import errorImage from "../assets/images/404.png";

function ErrorPage()
{
    return <>
            <div className="error_wrap ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-10 offset-xl-1 col-lg-8 offset-lg-2">
                            <div className="error_content text-center">
                                <img src={errorImage} alt="img" className="d-block mx-auto mb-30"/>
                                <p class="fs-20 mb-2 fw-medium js_title-color mx-auto">Sorry! Page you are looking can’t be found.</p>
                                <span>Go Back to <a href="/" className="js_link style-three fw-medium">Home Page</a></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <SubscribeWithEmail></SubscribeWithEmail>        
    </>
}

export default ErrorPage;