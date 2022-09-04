import React from 'react';
import "./CheckoutProduct.css";
import { useStateValue } from './StateProvider';


function CheckoutProduct({id, title, image, price, rating}) {
 
 const [{ basket }, dispatch] = useStateValue();


 const  removeFromBasket = () => {
    //  remove item from basket
   dispatch({
     type: "REMOVE_FROM_BASKET",
     id:id,
 });
} ;

 return (
<div className='checkoutproduct'>
          <img src={image} alt='' className='checkoutproduct_img' />

<div className='coproduct_info'>
           <p className='title'> {title}</p>
      <p className='coproduct_price'>
           <small> ₹ </small>
           <strong> { price }</strong>
      </p>    

<div className='coproduct_rating'>

{Array (rating)
               .fill() 
               .map((_, i) => (<p> ⭐ </p>)  )
        }

</div>     


  <button onClick={removeFromBasket} className='btnn'>  Remove from cart </button>
  </div>
  
</div>
  )
}

export default CheckoutProduct;
