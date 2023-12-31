import { GithubAuthProvider, getAuth, signInWithPopup, signOut } from 'firebase/auth';
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

    

    const logoutMiya = ()=>{
        signOut(auth)
        .then(result =>{
            console.log(result)
        })
        .catch(error =>{
            console.log(error)
        })
    }


    return (
        <div>
           {
             <>
                user?
             <button onClick={logoutMiya} className='bg-black text-white px-7 py-6 mx-5 my-4'>Logout</button>
             
             <button onClick={gittuMiya} className='bg-black text-white px-7 py-6 mx-5 my-4'>Github Login</button>
             
             </>
           }
            
            
        </div>
    );
};

export default Login;