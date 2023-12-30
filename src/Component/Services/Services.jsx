import { TwitterAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import React from 'react';
import app from '../../Firebase/firebase.init';


const Services = () => {
    const auth = getAuth(app);
    const provider = new TwitterAuthProvider();

    const gitHubHandle = () =>{
        signInWithPopup(auth, provider)
            .then(result =>{
                const user = result.user;
                console.log(user)
    })
            .catch(error =>{
                console.log(error)
            })
    }
    
    return (
        <div>
            <button onClick={gitHubHandle}
            className='justify-center bg-black text-white border-s-violet-400 mx-8 my-8 rounded-md px-6 py-6'>
                GitHub Login
            </button>
        </div>
    );
};

export default Services;