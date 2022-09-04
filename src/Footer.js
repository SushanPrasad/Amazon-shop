import React from 'react';
import "./Footer.css";
function Footer() {
    return (
        <div className='rowfooter'>
        <div className='columnfooter'>
            <ul id="colllfooter">
            <div className='sujifooter'>Get to Know Us</div> 
            <li>Careers</li>
            <li>Blog</li>
            <li>About Amazon</li>
            <li>Investor Relations </li>
            <li>Amazon Devices</li> 
            </ul>
        </div>
        
        <div className='columnfooter'>
            <ul id="colllfooter"> 
            <div className='sujifooter'>Amazon Payment Products</div>
            <li>Amazon Business Card </li>
            <li>Shop with Points</li>
            <li>Reload Your Balance</li>
            <li>Amazon Currency Converter</li>
        </ul>
        </div>
        
        <div className='columnfooter'>

            <ul id="colllfooter">
            <div className='sujifooter'>Make Money with Us</div>
            <li>Sell products on Amazon</li>
            <li> Sell on Amazon Business</li>
            <li>Sell apps on Amazon</li>
            <li>Become an Affiliate</li>
            <li>Advertise Your Products</li>
            <li>Self-Publish with Us</li>
            <li>Host an Amazon Hub </li>
            <li>See More Make Money with Us</li>
</ul>
</div>
        

        <div className='columnfooter'>
            <ul id="colllfooter"> 
            <div className='sujifooter'>Let Us Help You</div>
            <li>Amazon and COVID-19 </li>
            <li>Your Account</li>
            <li>Your Orders</li>
            <li>Shipping Rates & Policies</li>
             <li> Returns & Replacements</li>
             <li> Manage Your Content and Devices</li>
             <li>Amazon Assistant</li>
             <li>Help</li>


            
        </ul>
        </div>

        <div className='colfooter'>  <p className='columnjii'> 
        &copy;  {new Date().getFullYear()} Conditions of Use  Privacy Notice  Interest-Based    Ads©1996-2022,Amazon.com,Inc. or its affiliates 
        </p> </div>

</div>
                    
    )
}

export default Footer
