import React from 'react';
import womanShopping from '../Img/woman-shopping.jpg';


const HomeHero = () => {

    return(
<div>
<section className="hero-section">
   <div className="hero-wrapper">
       <div className="row home-bg">
       <div className='col-lg-6 col-12'>
    <img src={womanShopping} className="home-img-bg" alt="white-girl" />
    </div>
    <div className='col-lg-6 col-12 hero-text'>
        <h2>Your One Stop Shop!</h2>
        <p>Sed voluptatem accusantium doloremque eaque ipsa Sed voluptatem accusantium doloremque eaque ipsa
        Sed voluptatem accusantium doloremque eaque ipsa
        </p>
        <button className="main-button">Shop here</button>
    </div>
       </div>
   </div>
</section>
</div>
    )
}

export default HomeHero;