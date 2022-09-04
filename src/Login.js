import React from 'react';
import "./Login.css";
import Signin from './Signin';


function Login() {
  return (
    <div className='login'>

 <div className='login_container'>
      <a href='/'>
      <img src="https://ik.imagekit.io/amazonshop/ngg_PYrBWNxxk.png?ik-sdk-version=javascript-1.4.3&updatedAt=1660412859039" alt='' className='image' />
</a>

      <div className='Login_text'>
<h1> Sign in to Amazon Cart </h1>

      </div>
      <Signin />

 </div>


    </div>
  )
}

export default Login