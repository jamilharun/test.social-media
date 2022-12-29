import React, {useRef, useState, useEffect } from 'react'
// import GoogleLogin from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';

import { client } from './client';
import Register from './Register';

// replacable images
import backGround from '../assets/dongbiao-lu-small.jpg';
import logo from '../assets/watermarkCORRECTED.png';


const Login = () => {
  const userRef = useRef();
  const errRef = useState();

  const [ user, setUser] = useState('');
  const [ pwd, setPwd] = useState('');
  const [ errMsg, setErrMsg] = useState('');
  const [ success, setSuccess] = useState(false);
  
  useEffect(() => {
    userRef.current.focus();
  }, [])

  useEffect(() => {
    setErrMsg('');
  }, [user, pwd])

  // me thinking how can i possibly use this
  const userLogin= (Response) => {
    const navigate = useNavigate();
    // missing a bunch of data from taking login iputs from user
    const doc = {
      _id: '', //idont think this will be user full since i wont be using google API
      _type: 'user',
      userName: '',
      image: '' //again i dont think this will be usefull
    }

    client.createIFNotExist(doc)
      .then(() => {
        navigate('/', {replace: true})
      })
  } 
  // ---------------------------------------------------------

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user, pwd);
    setUser('');
    setPwd('');
    setSuccess(true);
  }

  return (
    
    <div className="flex justify-start items-center flex-col h-screen">
        <div className="relative w-full h-full">
          <img src={backGround} alt="background" 
          className="w-full h-full object-cover"
          />
          <div className='absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay'>
            <div className="p-5">
              <img src={logo} alt="logo" width="120px" />
            </div>
            <div className="shadow-2x1">
              {/* soon ill have to replace the google button with a textbox to connect to the users */}
              
              <p ref={errRef} className={errMsg ? "errMsg" : 
                "offscreen"} aria-live="assertive">{errMsg}</p>
              <h1>Log in</h1>
              <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input 
                  className="bg-mainColor flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none"
                  type="text" 
                  name="" 
                  id="username" 
                  ref={userRef} 
                  autoComplete="off"
                  onChange={(e) => setUser(e.target.value)}
                  value={user}
                  required
                />

                <label htmlFor="password">Password:</label>
                <input 
                  className="bg-mainColor flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none"
                  type="password" 
                  name="" 
                  id="password" 
                  onChange={(e) => setPwd(e.target.value)}
                  value={pwd}
                  required
                />
                <button>Log In</button>
              </form>

              <div>
                <p>Need an Account?</p><br />
                <Register>
                  <p>Sign up here</p>
                </Register>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Login