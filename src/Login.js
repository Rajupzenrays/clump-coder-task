import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import Home from './Home';

const clientId = "153160226614-r8c4856iu86ulp5gd7lts0rcl1l52h96.apps.googleusercontent.com";

function Login() {

    const [showloginButton, setShowloginButton] = useState(true);
    const [showhomePage, setshowhomePage] = useState(false);
    const onLoginSuccess = (res) => {
        console.log('Login Success:', res.profileObj);
        setShowloginButton(false);
        setshowhomePage(true);
    };

    const onLoginFailure = (res) => {
        console.log('Login Failed:', res);
    };


    return (
        <div>
            { showloginButton ?
                <GoogleLogin
                    clientId={clientId}
                    buttonText="Sign In"
                    onSuccess={onLoginSuccess}
                    onFailure={onLoginFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                /> : null}

            { showhomePage ?
                <Home
                >
                </Home> : null
            }
        </div>
    );
}
export default Login;