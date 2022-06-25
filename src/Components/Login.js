import React, { useState,useContext } from 'react';
import axios from 'axios'
import '../Styles/Login.css'
import { Link, useHistory } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BasketContext } from '../Context/BasketContext';
// import { auth } from "./firebase";

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const {setuser} = useContext(BasketContext)
    const [isDisabled, setisDisabled] = useState(false)
    const pattern =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const signIn = async (e) => {
        e.preventDefault();
        const newuser={
            email,
           password
       }
       try {
           var res=await axios.post(process.env.REACT_APP_URL+'auth/login',newuser)
               if(res.data?.msg)
               {
                   toast.error(res.data.msg)
                   setisDisabled(false)
                   // setisFetching(false)
               }
               else
               {
               localStorage.setItem('token',res.data.token)
               localStorage.setItem('email',res.data.user.email)
               setuser(res.data.user)
               history.replace('/')
               // settoken(res.data.token)
               }
       } catch (error) {
           toast.error(error)
           setisDisabled(false)
           // setisFetching(false)
       }
    }

    const register = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(process.env.REACT_APP_URL+'auth/signUp',
            {
                email,
                password 
            })
            if(res.data?.msg)
            {
                setisDisabled(false)
                toast.error(res.data.msg)
                // setisFetching(false)
            }
            else
            {
            localStorage.setItem('token',res.data.token)
            localStorage.setItem('email',res.data.user.email)
            setuser(res.data.user)
            history.replace('/')
            // settoken(res.data.token)
            }
        } catch (error) {
            toast.error(error)
            setisDisabled(false)
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

                    <button disabled={isDisabled?true:false} type='button' onClick={(e)=>{
                         if(!email)
                         toast.error("Email is empty")
                         else if(!password)
                         toast.error("Password is empty")
                         else if(!pattern.test(email))
                    toast.error("Invalid email")
                         else
                         {
                            setisDisabled(true)
                        signIn(e)
                         }
                        }} className='login__signInButton'>Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button disabled={isDisabled?true:false} onClick={(e)=>{
                    if(!email)
                    toast.error("Email is empty")
                    else if(!password)
                    toast.error("Password is empty")
                    else if(!pattern.test(email))
                    toast.error("Invalid email")
                    else
                    {
                        setisDisabled(true)
                    register(e)
                    }
                }} className='login__registerButton'>Create your Amazon Account</button>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Login