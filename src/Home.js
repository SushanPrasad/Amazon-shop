import React from 'react';
import "./Home.css";
import Product from './Product';
import Footer from "./Footer";


function Home() {
  return (
    <div className='home'>

    <img className="poster" 
         src='https://ik.imagekit.io/amazonshop/amazon-prime-video-banner_5wIuLSgh2.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1660386494391'
         alt='' />
    


    {/* product items id, title, price, rating, image  */}
<div className='all_row'>
<div className='row'>
    <Product
    
    id="1000"
    title=" Apple MacBook Pro (14-inch/35.97 cm, Apple M1 Pro chip with 10‑core CPU and 16‑core GPU, 16GB RAM, 1TB SSD)"
    price={ 215890}
    rating={5}
    image="https://ik.imagekit.io/amazonshop/hero_intro_endframe__e6khcva4hkeq_medium_jFwS6FUFJ.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1660205454596"
    
     />

<Product
    
    id="2000"
    title="Echo Plus (2nd Gen)  Premium sound, powered by Dolby, built-in Smart Home hub (White) "
    price={ 8000 }
    rating={5}
    image="https://ik.imagekit.io/amazonshop/61LAoHwq15L._SY450__SqajYE3nc.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1660209416346"
    
     />

</div>

<div className='row'>
    
<Product
    
    id="3000"
    title=" All-new Echo Buds (2nd Gen) | True Wireless earbuds, 3 mics and Alexa | Black "
    price={ 2000}
    rating={3}
    image="https://ik.imagekit.io/amazonshop/1622832522-echo-buds-1622832489_PCjQ71pkz.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1660210021757"
    
     />
     
<Product
    
    id="4000"
    title=" Ring Video Doorbell 4 video previews plus easy installation, and enhanced wifi"
    price={ 31000}
    rating={2}
    image="https://ik.imagekit.io/amazonshop/1595279738-ring-video-doorbell-3-1595279341_m27dUOdVbf.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1660210394875"
    
     />

     
<Product
    
    id="5000"
    title=" All-new Kindle Paperwhite (8 GB). Now with a 6.8 display and adjustable warm light "
    price={ 11000}
    rating={4}
    image="https://ik.imagekit.io/amazonshop/1634925783-amazon-kindle-paperwhite-11-1634925773_vvMs1M2Z5.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1660209804671"
    
     />
     </div>

<div>
  <Footer />

</div>
</div>

    </div>
  )
}

export default Home