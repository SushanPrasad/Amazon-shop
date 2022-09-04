import React from 'react'
import { useStateValue } from './StateProvider'
import "./Checkout.css";
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';



function Checkout() {

    {/* pull the basket from home page  here */}

    const [{basket }] = useStateValue();
  return (
    <div className='head_checkout'>
    <div className='checkout'>
<img src='https://ik.imagekit.io/amazonshop/Amazon-Great-Republic-Day-Sale-2022-1024x350_bW2rI7mLv.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1660299264282' className='ad' alt='' />
   
   {basket?.length === 0 ? (
<div className=' cartempty'> 
       
         <h2> Your shopping cart is currently empty  </h2>

         <p> You have no items in your cart. Please add something to make me happy🤞🏻 </p>
</div>

   ):(
     <div>
     
           <h2 className='checkout_title'> Your Shopping Cart </h2>

    { basket?.map((item) => (
        <CheckoutProduct
        
                 id={item.id}
                 title={item.title}
                 image={item.image}
                 price={item.price}
                 rating={item.rating}
                
         /> ) 
   
  )}
      </div>
      )
   }

   
   </div>

{/* subtotal right side  */}

{basket.length > 0 && (
    <div className='amount'>
        <Subtotal />
    </div>
)}
 
   </div>
  )}

export default Checkout