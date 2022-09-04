import React from 'react';
import "./Header.css";
import {Link} from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';

import { useStateValue } from './StateProvider';
import { Button } from '@mui/material';

function Header() {
 
    // cart basket
    const[{ basket }] = useStateValue();
   console.log (basket);

  return (

    <nav className='header'>
    <Link to="/home">
    <img className='header_logo' src='https://ik.imagekit.io/amazonshop/ngg_3-xB1vXLl.png?ik-sdk-version=javascript-1.4.3&updatedAt=1660125761775' alt='' />

</Link>

            <div className='head_search'>
            <input type="" className='header_search'/>
            </div>

     <SearchIcon className= "header_searchicon" />

<div className='head_nav'>
<Link to="/home" className='head_link'>
    <div className='option'>
        <span className='lineone'> Hello Qazi </span>
        <span className='linetwo'> Sign in </span>
    </div>
</Link>

<Link to="/home" className='head_link'>
    <div className='option'>
        <span className='lineone'> Return </span>
        <span className='linetwo'> & Orders </span>
    </div>
</Link>

<Link to="/home" className='head_link'>
    <div className='option'>
        <span className='lineone'> Your </span>
        <span className='linetwo'> Prime  </span>
    </div>
</Link>

<Link to="/checkout" className='carts'>
<div className='cart'>
<img src='https://ik.imagekit.io/amazonshop/cart_A9c9Ng9Io.png?ik-sdk-version=javascript-1.4.3&updatedAt=1660316660551'  alt='' className='carticon'/> 


<span className='count'> {basket?.length} </span>
                        {/* cart basket 0,1,2,3.. */}
</div>
</Link>

<a href='/' className='link' >
<Button variant='outlined' className='signout'>
<h2 className='sig'> SignOut </h2>
</Button>
</a>                                                      
</div> 
    </nav>
  );}
export default Header;