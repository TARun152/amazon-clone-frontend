import React, { useState } from 'react';
import axios from 'axios'
import '../Styles/Login.css'
import { Link, useHistory } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { auth } from "./firebase";

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(process.env.REACT_APP_URL+'signUp',
            {
                email,
                password 
            })
            if(res.data?.msg)
            {
                toast.error(res.data.msg)
                // setisFetching(false)
            }
            else
            {
            sessionStorage.setItem('token',res.data.token)
            // settoken(res.data.token)
            }
        } catch (error) {
            toast.error(error)
                // setisFetching(false)
        }
    }

    const register = async (e) => {
        e.preventDefault();
         const newuser={
             email,
            password
        }
        try {
            var res=await axios.post(process.env.REACT_APP_URL+'login',newuser)
                if(res.data?.msg)
                {
                    toast.error(res.data.msg)
                    // setisFetching(false)
                }
                else
                {
                sessionStorage.setItem('token',res.data.token)
                // settoken(res.data.token)
                }
        } catch (error) {
            toast.error(error)
            // setisFetching(false)
        }
    }

    return (
        <div className='login'>
            <Link to='/'>
                <img
                    className="login__logo"
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' alt=""
                />
            </Link>

            <div className='login__container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' onClick={signIn} className='login__signInButton'>Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button onClick={register} className='login__registerButton'>Create your Amazon Account</button>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Login