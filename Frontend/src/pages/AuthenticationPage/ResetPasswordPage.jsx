import ResetPasswordForm from '../../components/auth/ResetPassword';
import BreadCrumbSection from '../../components/BreadCrumbSection/BreadCrumbSection';
import { SubscribeWithEmail } from '../../components/SmallCompo/SmallCompo';
import './AuthenticationPage.css';

function ResetPasswordPage()
{   
    return <>
        <BreadCrumbSection title={"Reset Password"}></BreadCrumbSection>
        <div className='container ptb-100'>
            <div className='row'>
                <div className='col-lg-6 offset-lg-3 col-md-8 offset-md-2'>
                    <div className='main_area_section_title mb-20'>
                        <h2 className='fw-normal mb-1'>Reset Password</h2>
                        <p className='mb-0'>Enter your account email address. Instructions on how to reset your password will be sent to this address.</p>
                    </div>
                    <ResetPasswordForm></ResetPasswordForm>
                </div>
            </div>
        </div>
        <SubscribeWithEmail></SubscribeWithEmail>
    </>;
}

export default ResetPasswordPage;