import SignInForm from '../../components/auth/SignInForm';
import SignUpForm from '../../components/auth/SignUpForm';
import BreadCrumbSection from '../../components/BreadCrumbSection/BreadCrumbSection';
import { MainAreaHeading, SubscribeWithEmail } from '../../components/SmallCompo/SmallCompo';
import './AuthenticationPage.css';

function AuthenticationPage()
{
    return <>
        <BreadCrumbSection title={"My Account"}></BreadCrumbSection>
        <div className='authentication_wrap'>
            <div className='container pt-100 pb-75'>
                <div className='row'>
                    <div className='col-xl-5 col-md-6'>
                        <MainAreaHeading title={"Login"}></MainAreaHeading>
                        <SignInForm></SignInForm>
                    </div>
                    <div className='col-xxl-5 offset-xxl-2 col-xl-5 offset-xl-1 col-md-6'>
                        <MainAreaHeading title={"Create Your Account"}></MainAreaHeading>
                        <SignUpForm></SignUpForm>
                    </div>
                </div>
            </div>
        </div>
        <SubscribeWithEmail></SubscribeWithEmail>
    </>;
}


export default AuthenticationPage;