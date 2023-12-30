import { GithubAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import React from 'react';
import app from '../../Firebase/firebase.init';

const Login = () => {

    const gittuMiya = () => {
        const auth = getAuth(app);
        const provider = new GithubAuthProvider();
        signInWithPopup(auth, provider)
            .then(result => {
                const pagla = result.user;
                console.log(pagla)
            })
            .catch(error =>{
                console.log(error)
            })
    }


    return (
        <div>
            <button onClick={gittuMiya} className='bg-black text-white px-7 py-6 mx-5 my-4'>Github Login</button>
        </div>
    );
};

export default Login;